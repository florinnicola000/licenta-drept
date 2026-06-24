# Grilă Licență Drept — UNIBUC

Aplicație web de pregătire pentru examenul de licență la Facultatea de Drept, Universitatea din București.

**URL live:** https://florinnicola000.github.io/licenta-drept/
**Repo:** https://github.com/florinnicola000/licenta-drept

---

## Ce conține

- **13 sesiuni de examen** (2024–2026), fiecare cu câte 100 de întrebări grilă
- **50 întrebări Drept Civil** + **50 întrebări Drept Penal** per sesiune
- Răspunsurile corecte extrase automat din baremele oficiale UNIBUC
- Un singur fișier HTML autoconținut (`index.html` / `licenta_drept_all.html`)

### Sesiuni incluse

| Sesiune | Grile | Întrebări |
|---------|-------|-----------|
| Feb 2024 | 1, 2 | 100 fiecare |
| Jul 2024 | 1, 2, 3, 4 | 94–98 |
| Feb 2025 | 1, 2 | 96–100 |
| Jul 2025 | 1, 2, 3, 4 | 91–98 |
| Feb 2026 | 1 | 100 |

---

## Cum funcționează (pipeline tehnic)

### 1. Descărcare PDF-uri
PDF-urile sunt descărcate de pe site-ul oficial:
```
https://drept.unibuc.ro/Subiecte-la-examenele-anterioare-s71-ro.htm
```

Format URL:
```
https://drept.unibuc.ro/documente/2025/Licenta/subiecte%20grila%201-21.02.2025.pdf
https://drept.unibuc.ro/documente/2025/Licenta/barem%20grila%201-21.02.2025.pdf
```

**Important:** site-ul redirecționează HTTP → HTTPS. Folosește `-L` cu curl.

### 2. Extragere imagini din PDF (PyMuPDF)
PDF-urile sunt scanate (nu text), deci fiecare pagină se extrage ca imagine PNG la 2.5x zoom pentru calitate OCR bună.

```python
import fitz
doc = fitz.open("subiecte.pdf")
for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5))
    pix.save(f"page_{i+1:02d}.png")
```

### 3. OCR cu Vision (macOS)
Text extras cu Vision framework prin un binar Swift compilat local:

```swift
import Vision, AppKit, Foundation
// VNRecognizeTextRequest cu recognitionLanguages: ["ro-RO", "en-US"]
// recognitionLevel: .accurate
```

Compilat cu:
```bash
swiftc -o ocr_page ocr_page.swift
```

### 4. Parsare întrebări
Întrebările au formatul `N. Enunț: a) opțiune; b) opțiune; c) opțiune.`

OCR-ul introduce uneori artefacte la numerele de două cifre:
- `"3 7."` → `"37."` (spațiu în mijloc)
- `"5 7."` → `"57."`
- `"1 00."` → `"100."`
- `"26-"` → `"26."` (liniuță în loc de punct)

### 5. Detectare răspunsuri corecte din barem
Baremele sunt imagini scanate cu o grilă de 100 de cercuri (5 coloane × 20 rânduri).
Fiecare întrebare are 3 cercuri: A, B, C — cel completat (negru) = răspunsul corect.

**Poziții x ale cercurilor (la 3x zoom, imagine 1786px lată):**

| Coloană | Label | A | B | C |
|---------|-------|---|---|---|
| Q1–20 | 210 | 262 | 312 | 363 |
| Q21–40 | 499 | 560 | 611 | 663 |
| Q41–60 | 807 | 865 | 917 | 967 |
| Q61–80 | 1116 | 1176 | 1227 | 1278 |
| Q81–100 | 1434 | 1494 | 1546 | 1597 |

**Grid y-start:** ~1100px (din totalul de ~2526px la 3x zoom)

Detecție: pentru fiecare cerc se ia valoarea minimă de pixel dintr-o regiune 24×24px în jurul centrului. Cel mai întunecat = răspuns corect.

```python
darknesses = [arr[y1:y2, x1:x2].min() for x1, x2 in circle_regions]
correct = ['a','b','c'][darknesses.index(min(darknesses))]
```

---

## Cum adaugi o sesiune nouă

1. **Descarcă PDF-urile:**
```bash
curl -sL "https://drept.unibuc.ro/documente/2026/Licenta/subiecte%20grila%201-DD.MM.YYYY.pdf" -o s_sesiune_g1.pdf
curl -sL "https://drept.unibuc.ro/documente/2026/Licenta/rezultate%20grila%201-DD.MM.YYYY.pdf" -o b_sesiune_g1.pdf
```

2. **Extrage imagini și OCR:**
```python
import fitz, subprocess
doc = fitz.open("s_sesiune_g1.pdf")
for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5))
    pix.save(f"page_{i+1:02d}.png")
# OCR fiecare pagină cu binar-ul ocr_page
```

3. **Detectează răspunsurile din barem** (cod Python în pipeline-ul existent).

4. **Adaugă sesiunea** în dicționarul `ALL_SESSIONS` din HTML și în `SESSION_ORDER`.

5. **Push pe GitHub:**
```bash
cp licenta_drept_all.html /path/to/licenta-drept/index.html
cd /path/to/licenta-drept
git add index.html
git commit -m "Adaugă sesiunea nouă"
git push
```

---

## Structura HTML

Fișierul este autoconținut — toate datele (întrebări + răspunsuri) sunt embed-uite ca JSON în `<script>`.

```
ALL_SESSIONS = { "feb2026_g1": [{n, stem, a, b, c, correct}, ...], ... }
ALL_LABELS   = { "feb2026_g1": "Feb 2026 · Grila 1", ... }
SESSION_ORDER = ["feb2024_g1", ..., "feb2026_g1"]
```

Funcții principale:
- `changeSession(key)` — încarcă sesiunea selectată
- `selectAnswer(letter)` — înregistrează răspunsul, afișează feedback, avansează automat
- `showResult()` — ecran final cu scor și verdict
- `renderGrid()` — grila de navigare (verde/roșu/gri)

---

## Deployment

GitHub Pages din branch `main`, rădăcină `/`.
Orice `git push` pe `main` actualizează site-ul în ~1 minut.

```bash
# Repo local pentru push rapid:
# /private/tmp/licenta-drept/
cd /private/tmp/licenta-drept
git add index.html && git commit -m "..." && git push
```

---

## Dependențe locale (pentru regenerare)

- **Python 3** cu `fitz` (PyMuPDF) și `Pillow`
- **macOS** cu Vision framework (pentru OCR în română)
- **Swift compiler** (pentru binar-ul `ocr_page`)
- **gh CLI** autentificat cu contul `florinnicola000`

---

*Creat cu drag pentru Miruna — mult succes la licență! 🤍*
