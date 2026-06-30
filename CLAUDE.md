# Grilă Licență Drept — UNIBUC

Aplicație web de pregătire pentru examenul de licență la Facultatea de Drept, Universitatea din București.

**URL live:** https://florinnicola000.github.io/licenta-drept/
**Repo:** https://github.com/florinnicola000/licenta-drept

---

## Ce conține

- **19 sesiuni de examen** (2023–2026), fiecare cu ~100 de întrebări grilă (~1340 întrebări total)
- **~50 întrebări Drept Civil** + **~50 întrebări Drept Penal** per sesiune (cu etichete și pentru Procedură Civilă / Procedură Penală)
- Răspunsurile corecte verificate față de baremele oficiale UNIBUC + explicații stil 2026
- Trei fișiere principale:
  - `index.html` — aplicația de grile (toate datele embed-uite ca JSON)
  - `plan_studiu.html` — **plan de studiu pe 1 an** (vezi mai jos)
  - `dict.js` — **dicționar juridic** partajat (142 termeni, popup pe selecție)

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

## Dicționar juridic (`dict.js`)

Modul JS partajat inclus în ambele pagini cu `<script src="dict.js"></script>` și precache-uit în service worker.

**Conținut:** 142 termeni în 5 categorii: Civil (58), Penal (27), Proc. Civ. (10), Proc. Pen. (7), Latină juridică (20).

**Popup pe selecție text:** `mouseup`/`touchend` → `handleSelection()` → `findDictEntry()` (match exact, apoi cel mai lung substring) → `showPopup()` ancorată cu `position:fixed` la coordonatele selecției (din `getBoundingClientRect()` — **nu adăuga `window.scrollY`**, coordonatele sunt deja viewport-relative).

**Funcții exportate global:**
- `normTerm(s)` — normalizare diacritice (ă/â→a, î→i, ș/ş→s, ț/ţ→t) + lowercase, fără non-alfanumerice
- `DICT_MAP` — `Map<normTerm, entry>` pentru lookup rapid
- `legeazUrl(term)` — `https://legeaz.net/dictionar-juridic/{slug}` (slug = normTerm cu spații→cratime)
- `legeazSearch(term)` — `https://legeaz.net/?s=` + encodeURIComponent (fallback pentru termeni necunoscuți)
- `goToDict()` — context-aware: dacă `showPanel` există (plan_studiu.html) deschide tab Dicționar; altfel deschide plan_studiu.html într-un tab nou
- `MAT_LBL` — `{civ:'Civil', pen:'Penal', pciv:'Proc. Civ.', ppen:'Proc. Pen.', lat:'Latină'}`

**Tab „📖 Dicționar"** (doar în plan_studiu.html): search + filtrare pe materie + link legeaz.net per termen.

---

## Plan de studiu „Planul Mirunei" (`plan_studiu.html`)

Pagină separată, autoconținută, personalizată pentru **Miruna** (fiica userului; vezi dedicația „de la Tata" din `index.html`). Program ancorat pe **examenul de licență din Februarie 2027** (UNIBUC): **32 de săptămâni**, de la 29 iun 2026 până la ~7 feb 2027, calibrat pe **2-3 ore/zi**. Structurat în **11 faze** pe cele 4 materii (greutate mare pe Civil + Penal, care sunt cele examinate la grilă; Procedura civilă/penală condensate).

- **Fundament pedagogic:** repetare spațiată (linii „🔁 Spaced review" intercalate), recall activ, intercalare Civil↔Penal, testare frecventă, metacogniție (auto-evaluare încredere), concepte-cheie per săptămână.
- **Structură:** faze → luni → săptămâni → sarcini bifabile (📖 citire / ✍️ fișă / 🧠 recall / ❓ grile / 🔄 recapitulare / 📊 simulare). Săptămâni de tip `recap` și `sim` plasate strategic; simulări complete Civil (W20), Penal (W27), mixt 100 (W30, W31), examen (W32).
- **Tab „Astăzi" (default):** salut personal, **numărătoare inversă** până la examen (editabilă, `changeExamDate`), **streak** (zile la rând, `currentStreak`/`touchStreak`), săptămâna curentă, sugestia de azi (după ziua săptămânii), mesaj rotativ „de la Tata", listă „De revăzut" (săptămânile marcate 🔴), **reminder zilnic** (oră setabilă, banner la deschidere, notificări browser).
- **Per săptămână:** auto-evaluare încredere 🔴🟡🟢 (`conf_<wkid>`), notițe (`note_<wkid>`), concepte-cheie, butoane de testare.
- **Tracking:** sarcini + încredere + notițe + streak + examen + reminderTime, toate în `localStorage` sub cheia **`plan_miruna_v2`**. Felicitări (toast) la finalizarea fiecărei faze.
- **7 tab-uri:** Astăzi / Plan / Calendar lunar / Metodologie / Ritm zilnic / Surse / **📖 Dicționar**.
- **Tab „Surse":** linkuri reale verificate — legislație oficială (legislatie.just.ro: Cod civil 109884, Cod penal 109855, Cod pr. civilă 140271, Cod pr. penală 120611), codulcivil.ro, arhiva de subiecte + fișele de disciplină UNIBUC, grile online (universuljuridic.ro, aplicația proprie, studocu) și manuale de referință (Boroi, Streteanu/Nițu, Udroiu, culegeri C.H. Beck). Toate URL-urile au fost verificate ca valide (legislatie.just.ro dă 403 la curl = anti-bot, dar paginile sunt reale).
- **Integrare cu grilele:** fiecare săptămână are buton „Testează-te" care deschide `index.html?mat=<civ|pciv|pen|ppen>` → pornește direct antrenamentul pe materie (handler URLSearchParams la finalul scriptului din `index.html` apelează `startMaterie(m)`).
- **Detecție dată:** `parseWeek` gestionează și săptămânile care traversează anul (ex. „28 dec–3 ian" într-un grup „Ianuarie 2027" → start dec 2026). `findCurrentWeek` evidențiază săptămâna curentă.

**Reminder zilnic:** `ST.reminderTime` (ex: "20:00") salvat în localStorage. La `initReminder()`: dacă ora a trecut și `ST._streak.last !== today`, afișează banner galben + încearcă `new Notification(...)` dacă permisiunea e acordată. Buton „Activează notificări browser" apelează `Notification.requestPermission()`.

**La schimbarea datei examenului / a duratei** se rescriu `PHASES` (datele săptămânilor) și se ajustează `ST._examDate` default. Legături în `index.html`: buton CTA verde „📅 Plan de studiu pe 1 an" sub titlu (`#plan-cta`) + intrare în meniul „☰" + buton toolbar „📖 Dicționar".

---

## Statistici și progres (`index.html`)

**`STATE`** (localStorage `ldr_progress_v2`):
- `STATE.stats[matKey]` = `{t, c}` — total/corecte per materie
- `STATE.hist[]` = `{d, mode, correct, total, sk, matk}` — istoric sesiuni finalizate (max 60, afișate ultimele 20); `sk` = sessionKey pentru mode=normal, `matk` = matKey pentru mode=materie
- `STATE.wrong[sessionKey]` = `[n, ...]` — întrebări greșite curente (se șterg la răspuns corect)
- `STATE.wrongFreq["sessionKey:n"]` = count — de câte ori a fost greșită o întrebare (nu se decrementează niciodată)
- `STATE.marked`, `STATE.best`, `STATE.prog`, `STATE.notes`, `STATE.opts`

**Panel „📊 Statisticile tale":**
- Bare per materie (Civil/Penal/Proc.Civ/Proc.Pen) cu rata de succes
- Grafic „Ultimele 20 sesiuni": bare colorate, etichete scurte generate de `histLbl(e)` → "F23·1" (Feb 2023 G1), "I23·2" (Iun 2023 G2), "J24·3" (Jul 2024 G3), "sim.", "mixt", "mat", "greș.", "marc."
- Secțiunea **„⚠️ Greșite de mai multe ori"**: top 8 întrebări cu `wrongFreq ≥ 2`, sortate descrescător, cu contor (×3) și enunț trunchiat; click → deschide sesiunea

**`histLbl(e)`:** `if(e.sk)` → regex `/^(\w)\w*\s+\d{2}(\d{2})\s*·\s*Grila\s*(\d)/i` pe `ALL_LABELS[e.sk]` → `"F23·1"`. Altfel după `e.mode`.

---

## Service worker (`sw.js`) — cache

**Versiune curentă: `ldr-v36`**

**Strategie (de la v26):** *network-first pentru HTML* (paginile se iau mereu proaspete de pe rețea, cache doar ca backup offline) + *cache-first pentru assets* (icoane, manifest, dict.js). Asta evită problema „trebuie curățat cache după deploy".

La fiecare modificare de assets precache-uite **bumpează `const CACHE = 'ldr-vNN'`** ca să forțezi invalidarea pe toate dispozitivele. `ASSETS` include `index.html`, `plan_studiu.html` și **`dict.js`**.

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
cd /private/tmp/licenta-drept
git add index.html
git commit -m "Adaugă sesiunea nouă"
git push
```

---

## Structura HTML

`index.html` este autoconținut — toate datele (întrebări + răspunsuri) sunt embed-uite ca JSON în `<script>`.

```
ALL_SESSIONS = { "feb2026_g1": [{n, stem, a, b, c, correct, explanation}, ...], ... }
ALL_LABELS   = { "feb2026_g1": "Feb 2026 · Grila 1", ... }
SESSION_ORDER = ["feb2023_g1", "feb2023_g2", ..., "feb2026_g1"]   // 19 chei
MAT          = [['civ','⚖️ Drept civil'],['pciv','📜 Procedură civilă'],['pen','🔒 Drept penal'],['ppen','🛡️ Procedură penală']]
```

Funcții principale (`index.html`):
- `changeSession(key)` — încarcă sesiunea selectată
- `selectAnswer(letter)` — înregistrează răspunsul, actualizează `STATE.stats`, `STATE.wrong`, `STATE.wrongFreq`, avansează automat
- `startMaterie(k)` — pornește antrenamentul pe o materie (`civ`/`pciv`/`pen`/`ppen`); apelat și automat din `?mat=` de către `plan_studiu.html`
- `showResult()` — ecran final cu scor și verdict; salvează în `STATE.hist` cu `{sk, matk}`
- `renderGrid()` — grila de navigare (verde/roșu/gri)
- `histLbl(e)` — etichetă scurtă pentru graficul de istoric
- `renderStats()` — statistici per materie + secțiunea „greșite de mai multe ori"
- `renderChart()` — grafic ultimi 20 cu `histLbl`

---

## Deployment

GitHub Pages din branch `main`, rădăcină `/`.
Orice `git push` pe `main` actualizează site-ul în ~1 minut.

```bash
# Repo local pentru push rapid:
cd /private/tmp/licenta-drept
git add index.html plan_studiu.html dict.js sw.js
git commit -m "..."
git push
```

---

## Dependențe locale (pentru regenerare)

- **Python 3** cu `fitz` (PyMuPDF) și `Pillow`
- **macOS** cu Vision framework (pentru OCR în română)
- **Swift compiler** (pentru binar-ul `ocr_page`)
- **gh CLI** autentificat cu contul `florinnicola000`

---

*Creat cu drag pentru Miruna — mult succes la licență! 🤍*
