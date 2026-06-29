# Grilă Licență Drept — UNIBUC

Aplicație web de pregătire pentru examenul de licență la Facultatea de Drept, Universitatea din București.

**URL live:** https://florinnicola000.github.io/licenta-drept/
**Repo:** https://github.com/florinnicola000/licenta-drept

---

## Ce conține

- **19 sesiuni de examen** (2023–2026), fiecare cu ~100 de întrebări grilă (~1340 întrebări total)
- **~50 întrebări Drept Civil** + **~50 întrebări Drept Penal** per sesiune (cu etichete și pentru Procedură Civilă / Procedură Penală)
- Răspunsurile corecte verificate față de baremele oficiale UNIBUC + explicații stil 2026
- Două pagini HTML autoconținute:
  - `index.html` / `licenta_drept_all.html` — aplicația de grile (toate datele embed-uite ca JSON)
  - `plan_studiu.html` — **plan de studiu pe 1 an** (vezi mai jos)

### Sesiuni incluse

| Sesiune | Grile |
|---------|-------|
| Feb 2023 | 1, 2 |
| Iun 2023 | 1, 2, 3, 4 |
| Feb 2024 | 1, 2 |
| Jul 2024 | 1, 2, 3, 4 |
| Feb 2025 | 1, 2 |
| Jul 2025 | 1, 2, 3, 4 |
| Feb 2026 | 1 |

Materiile (`MAT` în HTML): `civ` (Drept civil), `pciv` (Procedură civilă), `pen` (Drept penal), `ppen` (Procedură penală). Materia fiecărei întrebări e dedusă din poziție prin `materieKey(n)`.

---

## Plan de studiu „Planul Mirunei" (`plan_studiu.html`)

Pagină separată, autoconținută, personalizată pentru **Miruna** (fiica userului; vezi dedicația „de la Tata" din `index.html`). Program ancorat pe **examenul de licență din Februarie 2027** (UNIBUC): **32 de săptămâni**, de la 29 iun 2026 până la ~7 feb 2027, calibrat pe **2-3 ore/zi**. Structurat în **11 faze** pe cele 4 materii (greutate mare pe Civil + Penal, care sunt cele examinate la grilă; Procedura civilă/penală condensate).

- **Fundament pedagogic:** repetare spațiată (linii „🔁 Spaced review" intercalate), recall activ, intercalare Civil↔Penal, testare frecventă, metacogniție (auto-evaluare încredere), concepte-cheie per săptămână.
- **Structură:** faze → luni → săptămâni → sarcini bifabile (📖 citire / ✍️ fișă / 🧠 recall / ❓ grile / 🔄 recapitulare / 📊 simulare). Săptămâni de tip `recap` și `sim` plasate strategic; simulări complete Civil (W20), Penal (W27), mixt 100 (W30, W31), examen (W32).
- **Tab „Astăzi" (default):** salut personal, **numărătoare inversă** până la examen (editabilă, `changeExamDate`), **streak** (zile la rând, `currentStreak`/`touchStreak`), săptămâna curentă, sugestia de azi (după ziua săptămânii), mesaj rotativ „de la Tata", listă „De revăzut" (săptămânile marcate 🔴).
- **Per săptămână:** auto-evaluare încredere 🔴🟡🟢 (`conf_<wkid>`), notițe (`note_<wkid>`), concepte-cheie, butoane de testare.
- **Tracking:** sarcini + încredere + notițe + streak + examen, toate în `localStorage` sub cheia **`plan_miruna_v1`**. Felicitări (toast) la finalizarea fiecărei faze.
- **6 tab-uri:** Astăzi / Plan / Calendar lunar / Metodologie / Ritm zilnic / **Surse**.
- **Tab „Surse":** linkuri reale verificate — legislație oficială (legislatie.just.ro: Cod civil 109884, Cod penal 109855, Cod pr. civilă 140271, Cod pr. penală 120611), codulcivil.ro, arhiva de subiecte + fișele de disciplină UNIBUC, grile online (universuljuridic.ro, aplicația proprie, studocu) și manuale de referință (Boroi, Streteanu/Nițu, Udroiu, culegeri C.H. Beck). Toate URL-urile au fost verificate ca valide (legislatie.just.ro dă 403 la curl = anti-bot, dar paginile sunt reale).
- **Integrare cu grilele:** fiecare săptămână are buton „Testează-te" care deschide `index.html?mat=<civ|pciv|pen|ppen>` → pornește direct antrenamentul pe materie (handler URLSearchParams la finalul scriptului din `index.html` apelează `startMaterie(m)`).
- **Detecție dată:** `parseWeek` gestionează și săptămânile care traversează anul (ex. „28 dec–3 ian" într-un grup „Ianuarie 2027" → start dec 2026). `findCurrentWeek` evidențiază săptămâna curentă.

**La schimbarea datei examenului / a duratei** se rescriu `PHASES` (datele săptămânilor) și se ajustează `ST._examDate` default. Legături în `index.html`: buton CTA verde „📅 Plan de studiu pe 1 an" sub titlu (`#plan-cta`) + intrare în meniul „☰".

---

## Service worker (`sw.js`) — cache

**Strategie (de la v26):** *network-first pentru HTML* (paginile se iau mereu proaspete de pe rețea, cache doar ca backup offline) + *cache-first pentru assets* (icoane, manifest). Asta evită problema „trebuie curățat cache după deploy".

La fiecare modificare de assets precache-uite **bumpează `const CACHE = 'ldr-vNN'`** ca să forțezi invalidarea pe toate dispozitivele. `ASSETS` include `index.html` și `plan_studiu.html`.

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
ALL_SESSIONS = { "feb2026_g1": [{n, stem, a, b, c, correct, explanation}, ...], ... }
ALL_LABELS   = { "feb2026_g1": "Feb 2026 · Grila 1", ... }
SESSION_ORDER = ["feb2023_g1", "feb2023_g2", ..., "feb2026_g1"]   // 19 chei
MAT          = [['civ','⚖️ Drept civil'],['pciv','📜 Procedură civilă'],['pen','🔒 Drept penal'],['ppen','🛡️ Procedură penală']]
```

Funcții principale:
- `changeSession(key)` — încarcă sesiunea selectată
- `selectAnswer(letter)` — înregistrează răspunsul, afișează feedback, avansează automat
- `startMaterie(k)` — pornește antrenamentul pe o materie (`civ`/`pciv`/`pen`/`ppen`); apelat și automat din `?mat=` de către `plan_studiu.html`
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
