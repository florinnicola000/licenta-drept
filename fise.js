// fise.js — Fișe de sinteză juridică · W01–W16 Drept Civil (NCC 2011, la zi)
// Modul autoconținut; nu depinde de variabile globale externe.
// Pagina oferă: #fise-container în #panel-fise.

var FISE_DATA = [
  {
    id:'w01', wk:'W01', dates:'29 iun–5 iul', subj:'civ',
    title:'AJC: noțiune, clasificare, capacitate',
    sections:[
      { icon:'📌', title:'Definiție și condiții de valabilitate (art. 1179 NCC)',
        items:[
          '<b>Actul juridic civil (AJC)</b> = manifestare de voință făcută cu <b>intenția de a produce efecte juridice</b> (a crea, modifica sau stinge raporturi juridice civile). <i>Art. 1166 NCC</i> (definiția contractului, extinsă doctrinar la orice AJC).',
          'Spre deosebire de <b>faptul juridic</b>: la AJC efectele sunt voite; la faptul juridic se produc independent de voință (ex: accidentul rutier, nașterea, moartea).',
          'Cele <b>4 condiții de valabilitate</b> (art. 1179 NCC): <b>capacitate</b> de a contracta + <b>consimțământ</b> valabil + <b>obiect</b> determinat și licit + <b>cauză</b> licită și morală.',
          '<b>Forma</b> — regulă: nu e condiție de valabilitate (principiul consensualismului, art. 1178 NCC). <b>Excepție:</b> forma <i>ad validitatem</i> (solemnă) e cerută expres de lege → lipsa ei = nulitate absolută. <i>Ex: donația (art. 1011), contractul de ipotecă (art. 2378), testamentul autentic.</i>',
          '<b>Forma ad probationem</b> (pentru dovadă): lipsa înscrisului nu afectează valabilitatea actului, ci numai posibilitatea de a-l proba. <i>Ex: contractul de asigurare, contractul individual de muncă.</i>'
        ]
      },
      { icon:'🗂', title:'Clasificări esențiale',
        items:[
          '<b>Unilateral</b> (o singură voință: testament, ofertă, acceptarea moștenirii, denunțarea unui contract) / <b>bilateral</b> (contract, art. 1166 NCC) / <b>multilateral</b> (statutul societății cu mai mulți asociați).',
          '<b>Cu titlu oneros</b>: comutativ (prestații certe de la momentul încheierii: vânzarea) sau aleatoriu (prestații incerte, depind de un eveniment: asigurarea, renta viageră). / <b>Cu titlu gratuit</b>: liberalitate (donație, legat) sau dezinteresat (comodat, mandat gratuit).',
          '<b>Consensual</b> (simpla voință) / <b>solemn</b> (formă <i>ad validitatem</i>: donație, ipotecă, testament autentic) / <b>real</b> (se formează prin remiterea bunului: gaj, comodat, depozit, împrumut de consumație).',
          '<b>Constitutiv</b> (creează un drept nou: uzufruct, ipotecă) / <b>translativ</b> (transferă un drept existent: vânzare, donație) / <b>declarativ</b> (consfințește un drept preexistent, cu efecte <i>ex tunc</i>: tranzacția, recunoașterea unui drept). ⚠️ <b>Capcană</b>: sub NCC <b>partajul e act constitutiv</b> (art. 680) — fiecare coproprietar devine proprietar exclusiv <b>de la data partajului</b>, nu retroactiv. Sub vechiul cod era declarativ — grilele testează exact această schimbare!',
          '<b>Inter vivos</b> (produce efecte în timpul vieții) / <b>mortis causa</b> (testamentul — produce efecte la moartea testatorului; este esențialmente revocabil oricând).',
          '<b>Strict personal</b> (<i>intuitu personae</i>: calitățile cocontractantului sunt determinante — mandatul, antrepriza artistică, donația) vs. <b>impersonal</b> (nu depinde de identitatea co-contractantului).'
        ]
      },
      { icon:'👤', title:'Capacitatea de folosință',
        items:[
          '<b>Persoana fizică</b> (art. 34 NCC): dobândită la <b>naștere</b>. Excepție: <i>infans conceptus pro nato habetur quotiens de commodis eius agitur</i> — drepturile copilului conceput se socotesc dobândite de la concepție, dacă se naște <b>viu</b> (chiar și o clipă).',
          '<b>Persoana juridică</b> (art. 205 NCC): dobândită de la data <b>înregistrării</b> sau, după caz, de la data actului de înființare. Excepție: dobândește anticipat (de la data actului de înființare) drepturile necesare pentru a lua ființă valabil.',
          'PJ: principiul <b>specialității</b> capacității de folosință (art. 206 NCC) — vizează azi numai <b>PJ fără scop lucrativ</b>: pot avea doar drepturile necesare realizării scopului statutar. Actele contrare = <b>nulitate absolută</b> (art. 206 alin. 3 — expres). PJ cu scop lucrativ pot avea orice drepturi, mai puțin cele care nu pot aparține decât persoanei fizice.',
          '<b>Incapacități speciale de folosință</b> (art. 990 NCC): medicul/farmacistul care au îngrijit dispunătorul pentru boala care este cauza decesului, și preotul care l-a asistat religios, nu pot primi liberalități (donații, legate) de la acesta. ⚠️ Sancțiunea = <b>nulitate relativă</b> — art. 990 spune expres „sunt <b>anulabile</b>", deși e o incapacitate de folosință (capcană: regula generală ar indica NCA, dar textul special prevalează). Excepții: liberalitățile remuneratorii și cele către rude apropiate rămân valabile.',
          'Absența capacității de folosință → <b>nulitate absolută</b> (regulă; excepție expresă: art. 990 → NR). Nu se poate acoperi prin confirmare. Distincție: ≠ absența capacității de exercițiu (care e NR și poate fi confirmată).'
        ]
      },
      { icon:'⚖️', title:'Capacitatea de exercițiu',
        items:[
          '<b>Deplină</b> (art. 38 NCC): de la <b>18 ani</b>. Excepție: minorul căsătorit dobândește capacitate deplină de la data căsătoriei (chiar dacă are 16 sau 17 ani). Dacă căsătoria se desface înainte de 18 ani — capacitatea de exercițiu deplină se menține; dacă e <b>anulată</b>, minorul de bună-credință o păstrează (art. 39).',
          '<b>Capacitatea de exercițiu anticipată — „emanciparea"</b> (art. 40 NCC): pentru <b>motive temeinice</b>, instanța de tutelă poate recunoaște minorului de <b>16 ani</b> capacitate deplină de exercițiu. Se ascultă și părinții/tutorele. Subiect frecvent de grilă: nu e automată, cere hotărârea instanței de tutelă.',
          '<b>Restrânsă</b> (14–18 ani, art. 41 NCC): acționează <b>personal</b>, dar cu <b>asistarea</b> (nu reprezentarea!) reprezentantului legal. Actele încheiate fără asistare = <b>nulitate relativă</b>, invocabilă de minor, reprezentant sau moștenitori.',
          '<b>Acte pe care minorul 14–18 le poate face singur</b> (art. 41–42 NCC): acte de conservare; acte de mică valoare cu executare imediată (cumpărarea unui bilet); depuneri/retrageri de la CEC/bancă; exercitarea drepturilor din raporturi de muncă; drepturi strict personale (recunoașterea unui copil, acceptarea/renunțarea la moștenire dacă e beneficiară).',
          '<b>Lipsă</b> — sub 14 ani (art. 43 NCC): acționează <b>numai prin reprezentantul legal</b> (părinți/tutore). Excepție: acte de conservare și acte de mică valoare cu executare imediată. Actele încheiate personal = <b>nulitate relativă</b> — art. 44 NCC spune expres „sunt <b>anulabile</b>, chiar fără dovedirea unui prejudiciu" (nu NCA!).',
          '<b>Ocrotirea majorului</b> — ⚠️ reformă: <b>Legea 140/2022</b> a înlocuit interdicția judecătorească cu <b>consilierea judiciară</b> (asistare, pentru deteriorare parțială a facultăților) și <b>tutela specială</b> (reprezentare, pentru deteriorare totală). Actele anterioare instituirii măsurii pot fi anulate dacă la data încheierii cauza era <b>notorie sau cunoscută</b> cocontractantului.',
          '<b>Curatela</b> (art. 178 NCC): măsură provizorie de protecție, distinctă de tutelă. Curatorul asistă sau reprezintă persoana cu capacitate deplină dar în imposibilitate temporară de a-și exercita drepturile (boală, absență). ⚠️ Curatela nu afectează capacitatea de exercițiu!'
        ]
      },
      { icon:'⏳', title:'Modalitățile actului juridic civil (condiție, termen, sarcină)',
        items:[
          '<b>Condiția</b> (art. 1399 NCC): clauză care face să depindă nașterea sau stingerea drepturilor de un eveniment viitor și nesigur. <b>Suspensivă</b>: actul există dar dreptul e suspendat până la eveniment (<i>ex: îți vând mașina dacă obții permisul</i>). <b>Rezolutorie</b>: actul există și produce efecte, dar se desființează retroactiv la îndeplinirea condiției.',
          '<b>Condiție pur potestativă din partea debitorului</b> (art. 1403 NCC) → <b>nulitate absolută</b> a obligației. <i>Ex: „îți vând dacă vreau" — angajamentul nu există.</i> ⚠️ Condiția pur potestativă din partea creditorului e valabilă!',
          '<b>Termenul</b> (art. 1411 NCC): eveniment viitor și sigur. <b>Suspensiv</b>: amână exigibilitatea (<i>ex: plătesc la 1 ianuarie</i>). <b>Extinctiv</b>: la împlinire se stinge dreptul (<i>ex: contract de locațiune pe 1 an</i>). Termenul e prezumat în favoarea <b>debitorului</b> (art. 1413 NCC).',
          '<b>Decăderea anticipată din termen</b> (art. 1417 NCC): dacă debitorul devine insolvabil, a diminuat garanțiile sau nu a constituit garanțiile promise → datoria devine imediat exigibilă, chiar dacă termenul nu s-a împlinit.',
          '<b>Sarcina (modus)</b>: obligație accesorie impusă donatarului sau legatarului în favoarea donatorului, a unui terț sau a donatarului însuși. ⚠️ Neîndeplinirea sarcinii → revocarea liberalității (nu nulitatea ei). Sarcina imposibilă sau ilicită = nulitate absolută a sarcinii; dacă era determinantă → nulitatea întregii liberalități.'
        ]
      },
      { icon:'🔴', title:'Sancțiuni: nulitate, confirmare, conversiune',
        items:[
          'Lipsa capacității de <b>folosință</b> → <b>nulitate absolută</b> (NCA). Nerespectarea capacității de <b>exercițiu</b> → <b>nulitate relativă</b> (NR, anulabilitate).',
          '<b>Confirmarea NR</b> (art. 1263 NCC): cel îndreptățit să invoce nulitatea renunță la dreptul de a o cere. Poate fi expresă sau tacită (executarea voluntară a actului în cunoașterea cauzei de NR). Are efect retroactiv.',
          '<b>Ratificarea</b>: actul juridic încheiat fără capacitate sau fără mandat valabil poate fi ratificat ulterior de cel îndreptățit → retroactiv validat de la data încheierii. <i>Ex: actul mandatarului fără mandat, ratificat ulterior de mandant (art. 1311 NCC).</i>',
          '<b>Conversiunea</b> (art. 1260 NCC): actul nul poate produce efectele unui alt act, dacă îndeplinește condițiile acestuia. <i>Ex: testamentul autentic nul de formă → testament olograf dacă a fost scris în întregime, datat și semnat de testator.</i>',
          'Minorul de rea-credință care și-a ascuns incapacitatea nu poate invoca nulitatea relativă (<i>nemo auditur propriam turpitudinem allegans</i>). ⚠️ Regula se aplică strict minorului, nu și reprezentantului legal.',
          '<b>Prescripția acțiunilor</b>: NCA = imprescriptibilă (poate fi invocată oricând, inclusiv pe cale de excepție). NR = <b>3 ani</b>; momentul de început (art. 2529 NCC): la <b>violență</b> — de la încetarea ei; la <b>dol/eroare/alte cauze</b> — de la data cunoașterii, <b>dar nu mai târziu de 18 luni de la încheierea actului</b> (plafon frecvent testat la grile).'
        ]
      },
      { icon:'🔗', title:'Efectele AJC față de terți (art. 1280–1286 NCC)',
        items:[
          '<b>Principiul relativității efectelor</b> (<i>res inter alios acta</i>, art. 1280 NCC): contractul produce efecte numai față de <b>părți</b>; terții nu sunt nici obligați, nici îndreptățiți prin contract. Excepție principală: stipulația pentru altul.',
          '<b>Promisiunea faptei altuia</b> (art. 1283 NCC): promitentul garantează că un terț va ratifica sau va executa o obligație. <b>Terțul nu este obligat</b> — numai promitentul răspunde dacă terțul refuză. Sancțiune: daune-interese față de cocontractant. <i>Ex: un asociat promite că celălalt asociat va semna contractul.</i>',
          '<b>Stipulația pentru altul</b> (<i>pactum in favorem tertii</i>, art. 1284 NCC): stipulantul îl obligă pe promitent să execute o prestație față de un <b>terț beneficiar</b> care nu participă la contract. Terțul dobândește dreptul <b>direct și nemijlocit</b>. ⚠️ Stipulantul poate revoca stipulația înainte de acceptare; după acceptare → dreptul e irevocabil. <i>Ex: asigurarea de viață cu beneficiar; contractul de rentă viageră în favoarea unui terț.</i>',
          '<b>Opozabilitatea față de terți</b>: deși terții nu sunt ținuți de contract, ei trebuie să-i respecte existența (<i>opozabilitate pasivă</i>) și pot invoca contractul în favoarea lor (<i>opozabilitate activă</i>). Nerespectarea formalităților de publicitate (CF, RNPM) → actul e inopozabil terților de bună-credință, nu nul.'
        ]
      }
    ],
    grila:'<b>Capacitate de folosință</b> (lipsa → NCA, imprescriptibilă) ≠ <b>capacitate de exercițiu</b> (nerespectare → NR, prescriptibilă, confirmabilă). Minorul 14–18 ani: <b>asistat</b> (personal + asistare), nu reprezentat. Sub 14 ani: <b>reprezentat</b>; actele lui = <b>anulabile</b> (art. 44, expres — nu NCA). Emancipare (art. 40): 16 ani + motive temeinice + instanța de tutelă. <i>Infans conceptus</i>: drepturi de la concepție, dacă se naște viu. Art. 990 (medic/preot): liberalități <b>anulabile</b> (NR, expres). Art. 206 (specialitate PJ nonprofit): acte contrare = <b>NCA</b> (expres). Partajul sub NCC: act <b>constitutiv</b> (art. 680), nu declarativ. Condiție pur potestativă a debitorului → NCA. Sarcina neîndeplinită → revocare, nu nulitate. Prescripție NR: 3 ani, plafon <b>18 luni</b> de la act (dol/eroare). Confirmare NR → efect retroactiv. Relativitate efecte: contractul produce efecte numai față de <b>părți</b>; stipulația pentru altul = excepție (terțul dobândește direct). Promisiunea faptei altuia: terțul nu e obligat, promitentul datorează daune dacă terțul refuză.'
  },

  {
    id:'w02', wk:'W02', dates:'6–12 iul', subj:'civ',
    title:'Consimțământul și viciile de consimțământ',
    sections:[
      { icon:'📌', title:'Condiții de valabilitate a consimțământului',
        items:[
          '<b>Consimțământul</b> = exteriorizarea hotărârii de a încheia actul juridic. Art. 1204 NCC cere cumulativ: să fie <b>serios</b>, <b>liber</b> și <b>exprimat în cunoștință de cauză</b>. Lipsa totală a consimțământului → nulitate absolută; vicierea lui → nulitate relativă.',
          '<b>Serios</b>: exclus actele făcute în glumă (<i>jocandi causa</i>), în scop didactic sau teatral — lipsa intenției de a produce efecte juridice.',
          '<b>Liber</b>: neviciat de eroare, dol, violență sau leziune (art. 1206 NCC).',
          '<b>Exprimat în cunoștință de cauză</b>: obligație precontractuală de informare (art. 1182–1185 NCC); nerespectarea poate atrage răspundere delictuală sau calificarea ca dol prin reticență.',
          '<b>Oferta</b>: propunere fermă de a contracta. <b>Irevocabilă</b> dacă are termen sau dacă ofertantul s-a obligat să o mențină (art. 1191 NCC) — revocarea produce efecte dacă ajunge la destinatar înainte de acceptare. <b>Caducă</b> la decesul sau incapacitatea ofertantului — dar numai la oferta <b>irevocabilă</b> și numai când <b>natura afacerii sau împrejurările o impun</b> (art. 1195 alin. 2 NCC).',
          'Contractul se formează la momentul <b>acceptării ofertei</b>: teoria recepției (art. 1186 NCC) — perfectat când acceptarea <i>a ajuns</i> la ofertant, chiar dacă nu a luat cunoștință de ea. Tăcerea nu valorează acceptare, cu excepțiile prevăzute de lege sau uzanțe.',
          '<b>Promisiunea de a contracta</b> (art. 1279 NCC): obligație de a încheia un contract viitor. Nerespectare → daune <i>sau</i> instanța poate pronunța o hotărâre care ține loc de contract. ≠ <b>Pactul de opțiune</b> (art. 1278): oferta e irevocabilă pe durata opțiunii; beneficiarul acceptă sau nu — dacă acceptă, contractul se formează.'
        ]
      },
      { icon:'❓', title:'Eroarea (art. 1207–1213 NCC)',
        items:[
          '<b>Eroarea esențială</b> (art. 1207 NCC): poartă asupra naturii/obiectului actului, identității obiectului, persoanei (la acte <i>intuitu personae</i>) sau calității esențiale a bunului → <b>anulabilitate</b>.',
          'Eroarea trebuie să fie <b>scuzabilă</b> (art. 1208 NCC) — cel care nu manifestă diligența unui om rezonabil nu o poate invoca. <i>Ex: un profesionist care nu verifică registrul bunurilor imobile nu poate invoca eroarea.</i>',
          '<b>Eroarea de drept</b> (art. 1207 alin. 3 NCC): eroare asupra conținutului normei juridice; poate fi esențială și atrage anulabilitatea dacă e scuzabilă. ⚠️ Nu se poate invoca pentru a eluda o normă imperativă.',
          '<b>Eroarea obstacol</b>: <i>in negotio</i> (greșeală asupra naturii actului: X crede că donează, Y că vinde) sau <i>in corpore</i> (identitate totală greșită: bunuri diferite). ⚠️ <b>Capcană</b>: doctrina veche spunea nulitate absolută (lipsă de acord); sub NCC însă art. 1207 alin. 2 pct. 1 o include expres între erorile <b>esențiale</b> → <b>nulitate relativă</b> (anulabilitate) — acesta e răspunsul corect la grile.',
          'Eroarea <b>neesențială</b> (de calcul, aritmetică): nu afectează valabilitatea, atrage numai rectificarea (art. 1210). Eroarea <b>indiferentă</b> (calități neesențiale): fără efecte.',
          '<b>Eroarea comună și invincibilă</b> (art. 17 NCC, <i>error communis facit ius</i>): când toată lumea s-a înșelat la fel și eroarea era de neînlăturat, actul produce efectele pe care le-ar fi produs în lipsa erorii (validitatea aparenței în drept). Nu se aplică în materie de carte funciară și în alte cazuri cu regim special de publicitate.',
          '<b>Adaptarea contractului</b> (art. 1213 NCC): victima erorii esențiale <b>nu poate obține anularea</b> dacă cealaltă parte declară, în cel mult 3 luni de la notificare, că <b>execută contractul așa cum l-a înțeles victima</b>. Contractul se consideră încheiat cum l-a înțeles partea aflată în eroare — instituție frecvent testată la grile.'
        ]
      },
      { icon:'🎭', title:'Dolul (art. 1214–1216 NCC)',
        items:[
          'Manopere frauduloase (acțiune sau <b>reticență</b>) care induc în eroare și determină încheierea actului. Elementul obiectiv (manopere) + elementul subiectiv (intenția de a induce în eroare).',
          '<b>Dolul prin reticență</b> (art. 1214 alin. 1 NCC): tăcere intenționată când există obligație de informare (ex: vânzătorul cunoaște vicii ascunse și nu le divulgă, asiguratorul cunoaște riscul).',
          '<b>Dol de terț</b> → anulabilitate <b>numai dacă</b> cealaltă parte a cunoscut sau <b>trebuia să cunoască</b> manoperele (art. 1215 NCC). ⚠️ Diferit de violența terțului — acolo anulabilitatea e necondiționată!',
          'Sancțiune: <b>anulabilitate + daune-interese</b> (art. 1257 NCC). Cumulul e posibil chiar dacă nu se cere anularea — victima poate păstra contractul și cere numai daune.',
          'Nu se cere ca eroarea indusă să fie esențială — dolul atrage anulabilitatea chiar pentru o eroare neesențială, dacă a determinat consimțământul. <b>Proba</b> dolului: celui care îl invocă (nu se prezumă).',
          '<b>Dolul incident</b>: eroarea indusă e neesențială (fără dol nu s-ar fi contractat în aceleași condiții) → contractul se menține, dar victima are drept la daune pentru diferența de preț.'
        ]
      },
      { icon:'💥', title:'Violența (art. 1216–1220 NCC)',
        items:[
          'Amenințare cu un rău <b>injust</b> și <b>grav</b>, actual și serios, care a determinat încheierea actului. Elementul obiectiv (amenințarea) + elementul subiectiv (temerea legitimă indusă).',
          '<b>Violența de terț</b> (art. 1220 NCC) → anulabilitate <b>indiferent dacă cealaltă parte a știut sau nu</b>. ⚠️ Aceasta e deosebirea esențială față de dolul de terț!',
          '<b>Starea de necesitate exploatată</b> (art. 1218 NCC): contractul poate fi anulat dacă o parte a profitat în mod abuziv de starea de dificultate a celeilalte. Chiar și calamitățile naturale pot constitui sursă, dacă sunt exploatate.',
          '<b>Temerea reverenționară</b> singură (respect față de părinți, tutore, superior ierarhic) nu constituie violență (art. 1217 alin. 3 NCC). Devine viciu numai dacă e însoțită de amenințări propriu-zise.',
          '<b>Amenințarea cu exercitarea unui drept</b> (art. 1219 NCC): nu e violență dacă amenințarea e legitimă și proporțională. <i>Ex: „dacă nu plătești, te dau în judecată" — legitim. „Semnezi sau mă duc la fisc cu acte false" — violență.</i>',
          'Sancțiune: <b>anulabilitate + daune-interese</b> (art. 1257 NCC), inclusiv de la terțul care a exercitat violența (art. 1257 alin. 2).'
        ]
      },
      { icon:'⚠️', title:'Leziunea (art. 1221–1224 NCC)',
        items:[
          '<b>Majori</b> (art. 1221 alin. 2 NCC): disproporție vădită (<b>mai mult de jumătate</b>) din valoarea prestației la momentul încheierii + element subiectiv: profitarea de starea de nevoie, lipsă de experiență sau lipsă de cunoștințe.',
          '<b>Minori 14–18 ani</b> (art. 1221 alin. 3 NCC): orice act lezionar, chiar și actele pentru care au primit asistare; nu se cere procentul de 50%. Prescripție: <b>1 an</b> de la data majoratului.',
          'Sancțiune: <b>anulabilitate</b> <i>sau</i> reducerea/mărirea prestației pentru restabilirea echilibrului (la alegerea instanței sau pârâtului care poate oferi reducerea prețului — art. 1222 NCC).',
          '<b>Nu se aplică</b> (art. 1224 NCC): contractele <b>aleatorii</b> (riscul e inerent), <b>tranzacția</b> (concesii reciproce prin definiție), precum și alte contracte anume prevăzute de lege.',
          'Termen de prescripție la majori: <b>1 an</b> de la data încheierii actului (nu de la data la care au cunoscut cauza — excepție de la regula generală art. 2529 NCC).'
        ]
      },
      { icon:'🔁', title:'Schemă comparativă: viciile de consimțământ',
        items:[
          '<b>Eroarea</b>: spontană (nicio intervenție externă), trebuie să fie esențială + scuzabilă; <i>nu</i> se pot cumula daune cu anularea (dacă eroarea e pură, fără dol). Prescripție NR: <b>3 ani</b>.',
          '<b>Dolul</b>: provocat de cealaltă parte sau de un terț cunoscut; nu trebuie să fie esențial dacă a determinat consimțământul; daune cumulabile. Dolul de terț: anulare <b>numai dacă cealaltă parte știa</b>. Prescripție: <b>3 ani</b>.',
          '<b>Violența</b>: amenințare exterioară, injustă și gravă; violența de terț → anulabilitate <b>necondiționat</b>; daune de la autor (chiar terț). Prescripție: <b>3 ani</b>.',
          '<b>Leziunea</b>: disproporție + exploatare (la majori) / orice disproporție (la minori); sancțiune alternativă (anulare sau adaptare contract); prescripție specială <b>1 an</b> (≠ 3 ani). Nu se aplică contractelor aleatorii și tranzacțiilor.',
          '⚠️ <b>Regulă de reținut</b>: toate viciile atrag <b>nulitate relativă</b> — inclusiv eroarea obstacol, pe care NCC o tratează ca eroare esențială (art. 1207 alin. 2 pct. 1). Nulitatea absolută apare doar la <b>lipsa totală</b> a consimțământului.'
        ]
      },
      { icon:'⚖️', title:'Culpa in contrahendo și caducitatea ofertei',
        items:[
          '<b>Culpa in contrahendo</b> (art. 1183 NCC): răspunderea precontractuală pentru purtarea negocierilor cu <b>rea-credință</b> sau <b>ruperea intempestivă</b> a acestora. Condiții: negocieri ajunse într-un stadiu avansat; cealaltă parte avea motive rezonabile să creadă că va fi încheiat contractul; rupere fără justificare legitimă. Sancțiune: <b>daune-interese</b> (interesul negativ = cheltuieli efectuate + pierderea altor oportunități). ⚠️ Nu se poate obliga la încheierea contractului.',
          '<b>Obligația de confidențialitate precontractuală</b> (art. 1184 NCC): informațiile confidențiale primite în cursul negocierilor nu pot fi divulgate sau folosite ulterior, chiar dacă nu s-a ajuns la contract. Încălcarea → daune-interese (răspundere delictuală).',
          '<b>Caducitatea ofertei</b> (art. 1195 NCC): oferta devine caducă (stingere fără efecte, ≠ revocare) când: (1) acceptarea nu ajunge la ofertant în termen; (2) destinatarul o refuză; (3) decesul sau incapacitatea ofertantului — dar numai la oferta <b>irevocabilă</b> și numai când <b>natura afacerii sau împrejurările o impun</b> (alin. 2). ⚠️ Oferta fără termen adresată unei persoane absente trebuie menținută un termen rezonabil. Oferta la public: poate fi revocată până la acceptare.',
          '<b>Distincție</b>: revocare vs. caducitate: <b>revocarea</b> e un act unilateral al ofertantului (art. 1199 NCC), posibilă dacă ajunge la destinatar înainte de acceptare; <b>caducitatea</b> e un fapt juridic (deces, expirare termen, refuz), survine de drept.'
        ]
      }
    ],
    grila:'<b>Dol de terț ≠ violență de terț</b>: dolul → anulabilitate numai dacă cealaltă parte <i>a știut sau trebuia să știe</i>; violența → anulabilitate <b>întotdeauna</b>. Eroarea: esențială + scuzabilă; eroarea comună invincibilă → nu se anulează (art. 17). Adaptarea contractului (art. 1213): cealaltă parte execută cum a înțeles victima → anularea e blocată. Leziunea la majori: <b>&gt;50% + exploatare + prescripție 1 an</b> (nu 3 ani!). Dolul incident: contract valabil + daune. Amenințarea legitimă cu un drept → nu e violență (art. 1219). Toate viciile → NR, <b>inclusiv eroarea obstacol</b> (art. 1207 alin. 2 — capcană: nu mai e NCA sub NCC). Caducitate la deces: doar oferta irevocabilă + natura afacerii o impune.'
  },

  {
    id:'w03', wk:'W03', dates:'13–19 iul', subj:'civ',
    title:'Obiect, cauză, formă, nulitate, simulație',
    sections:[
      { icon:'📦', title:'Obiectul AJC (art. 1225–1234 NCC)',
        items:[
          'NCC distinge: <b>obiectul contractului</b> (art. 1225) = <b>operațiunea juridică</b> convenită (vânzarea, locațiunea, împrumutul); <b>obiectul obligației</b> (art. 1226) = <b>prestația</b> concretă la care se angajează debitorul: <b>a da</b>, <b>a face</b> sau <b>a nu face</b>. Distincție frecvent testată la grile!',
          'Condiții: obiectul contractului — <b>determinat și licit</b>; obiectul obligației — <b>determinat sau determinabil și licit</b>. Sancțiunea lipsei = <b>nulitate absolută</b> (art. 1225 alin. 2, art. 1226 alin. 2). ⚠️ „Posibil" nu mai e condiție distinctă sub NCC (v. art. 1227).',
          '<b>Bunuri inalienabile</b> prin natură (bunuri publice, domeniu public) sau prin lege → actele de înstrăinare sunt nule absolut. <i>Ex: terenuri forestiere din fondul forestier național protejat.</i>',
          '⚠️ <b>Capcană — imposibilitatea inițială</b> (art. 1227 NCC): contractul este <b>valabil</b> chiar dacă, la momentul încheierii, una dintre părți se află în imposibilitate de a-și executa obligația — debitorul răspunde pentru <b>neexecutare</b> (daune), nu se anulează actul. Vechea maximă <i>impossibilium nulla est obligatio</i> (nulitate pentru imposibilitate inițială) a fost <b>abandonată de NCC</b>.',
          '<b>Imposibilitate ulterioară fortuită</b> → stingerea obligației prin forță majoră/caz fortuit; nu atrage nulitatea.',
          'Obiect <b>viitor</b>: valabil (vânzarea unui bun viitor — art. 1228 NCC). <b>Excepție absolută</b>: pactele asupra unei succesiuni nedeschise a altei persoane = nulitate absolută (art. 956 NCC).',
          '<b>Prețul vânzării</b> (art. 1660 NCC): trebuie să fie serios (nu derizoriu) și sincer (nu fictiv/simulat). Sancțiunea (art. 1665 NCC): vânzarea e <b>anulabilă</b> (NR) atât când prețul e <b>fictiv</b> (stabilit fără intenția de a fi plătit), cât și când e <b>derizoriu</b> (atât de disproporționat încât e evident că părțile nu au dorit o vânzare).',
          '<b>Clauza penală</b> (art. 1538 NCC): evaluare anticipată și convențională a daunelor-interese pentru neexecutare. Creditorul nu trebuie să dovedească prejudiciul — simpla neexecutare activează clauza. Cumulul cu executarea în natură e interzis, cu excepția clauzei penale moratorii (pentru întârziere). ⚠️ Instanța poate reduce penalitatea vădit excesivă (art. 1541 NCC) — spre deosebire de daune-interese prestabilite de lege.'
        ]
      },
      { icon:'🎯', title:'Cauza AJC (art. 1235–1239 NCC)',
        items:[
          '<b>Cauza imediată</b> (scopul direct, tipic, identic pentru toți cei care încheie același tip de act): la vânzare = contraprestatia (prețul/bunul).',
          '<b>Cauza mediată</b> (motivul determinant, concret, individualizat): de ce anume a dorit X acel bun. Aceasta e cauza care poate fi ilicită sau imorală.',
          'Condiții cumulative (art. 1236 NCC): să <b>existe</b>, să fie <b>reală</b> (nu falsă), <b>licită</b> și <b>morală</b>.',
          '<b>Prezumție de existență și valabilitate</b> a cauzei (art. 1239 NCC): sarcina probei revine celui care contestă. Aplicarea: reclamantul care invocă lipsa cauzei trebuie să facă proba.',
          '<b>Cauza falsă</b> (eroare asupra motivului determinant): de fapt cauza există dar e greșit reprezentată → <b>nulitate relativă</b> (viciu de consimțământ prin eroare).',
          '⚠️ <b>Capcană — lipsa cauzei</b> (art. 1238 alin. 1 NCC): atrage <b>anulabilitatea</b> (NR), nu nulitatea absolută cum era sub vechiul cod! Excepție: dacă actul a fost doar greșit calificat, poate produce alte efecte juridice (conversiune).',
          '<b>Cauza ilicită sau imorală</b> → <b>nulitate absolută</b> (<i>Fraus omnia corrumpit</i>). <i>Ex: donaţie pentru a menţine o relaţie concubinară contrară bunelor moravuri.</i>',
          'Cauza ilicită <i>a uneia din părți</i> (art. 1238 alin. 2 NCC): nu atrage nulitatea dacă cealaltă parte nu a cunoscut-o și nu trebuia să o cunoască. <b>Excepție</b>: dacă natura actului implică o cauză ilicită pentru ambele → NCA.'
        ]
      },
      { icon:'📝', title:'Forma AJC (art. 1240–1245 NCC)',
        items:[
          '<b>Ad validitatem</b> (solemnă): nerespectare → <b>nulitate absolută</b>. Exemple: donație (autentic notarial, art. 1011), ipotecă imobiliară (art. 2378), testament (olograf sau autentic sau mistic), căsătoria, actul constitutiv SA.',
          '<b>Ad probationem</b>: nerespectare → actul e <b>valabil</b>, dar nu poate fi dovedit cu martori sau prezumții dacă valoarea depășește 250 lei. Exemple: contracte &gt;250 lei, contractul de asigurare, CIM.',
          '<b>Pentru opozabilitate față de terți</b> (publicitate): nerespectare → act valabil între părți, dar <b>inopozabil</b> terților. Exemple: publicitate imobiliară CF, înregistrare RNPM, publicitate societăților comerciale.',
          'Actul solemn care nu îndeplinește forma <i>ad validitatem</i> poate valora ca <b>promisiune de a contracta</b>, dacă cuprinde acordul de voință al părților și elementele esențiale (art. 1243 NCC). Promisiunea nu e valabilă dacă legea cere forma solemnă pentru chiar promisiunea de a contracta.',
          '<b>Principiul simetriei formelor</b> (art. 1243 NCC): dacă prin lege sau voința părților forma actului este solemnă, modificarea sau desființarea lui trebuie să respecte aceeași formă.',
          '<b>Forma electronică</b>: semnătura electronică extinsă (calificată) este echivalentul semnăturii olografe (Legea 455/2001). Actele <i>ad validitatem</i> care cer formă autentică nu pot fi încheiate prin simpla semnătură electronică.'
        ]
      },
      { icon:'🔴', title:'Nulitatea — clasificare și regim juridic (art. 1246–1265 NCC)',
        items:[
          '<b>Absolută (NCA)</b>: protejează interesul general/ordine publică. Cauze: lipsă capacitate de folosință, cauza ilicită/imorală, formă solemnă nerespectată, obiect ilicit/imposibil.',
          '<b>Relativă (NR)</b>: protejează interesul particular. Cauze: vicii de consimțământ, nerespectarea capacității de exercițiu, leziunea, cauza falsă, <b>lipsa cauzei</b> (art. 1238 alin. 1 — capcană!), prețul fictiv/derizoriu (art. 1665).',
          'NCA: invocabilă de <b>oricine are interes</b> + din oficiu de instanță; <b>imprescriptibilă</b>; <b>nu se confirmă</b>. NR: numai de <b>persoana protejată</b>; prescrisă în <b>3 ani</b>; acoperibilă prin <b>confirmare</b>.',
          '<b>Nulitate de drept</b> (<i>ope legis</i>): legea prevede că actul e nul de plin drept (ex: art. 1011 alin. 2 — actul de donație verbal e nul absolut). <b>Nulitate judiciară</b> (<i>ope iudicis</i>): trebuie pronunțată de instanță.',
          '<b>Nulitate parțială</b> (art. 1255 NCC): clauza nulă e înlăturată, restul actului rămâne dacă poate exista fără ea. <b>Nulitate totală</b>: dacă clauza era determinantă, actul cade în întregime.',
          '<b>Nulitate virtuală</b> (art. 1253 NCC): sancțiunea se deduce din scopul normei încălcate, chiar dacă legea nu o prevede expres.',
          '<b>Excepția de nulitate</b> (<i>exceptio nullitatis</i>): NCA — invocabilă oricând, pe cale de acțiune sau de excepție. ⚠️ <b>Capcană NR</b> (art. 1249 alin. 2 NCC): pe cale de <b>acțiune</b> — numai în termenul de prescripție (3 ani); dar partea căreia i se <b>cere executarea</b> poate opune nulitatea relativă <b>oricând</b>, chiar după împlinirea prescripției. <i>Quae temporalia sunt ad agendum, perpetua sunt ad excipiendum.</i>'
        ]
      },
      { icon:'🔄', title:'Simulația (art. 1289–1294 NCC)',
        items:[
          'Definiție: existența simultană a unui <b>act aparent</b> (public, fără conținut real sau cu conținut diferit) și a unui <b>contraînscris</b> (actul secret, care reflectă voința reală a părților).',
          'Tipuri: <b>act fictiv</b> (vânzare aparentă, în realitate actul nu produce efecte — ex: simulare pentru a eluda creditorii); <b>act deghizat</b> (prețul real diferit de cel declarat — deghizare parțială a unui element); <b>interpunere de persoane</b> (beneficiarul real e ascuns).',
          'Efecte <b>între părți</b>: prevalează întotdeauna <b>actul secret</b> (contraînscrisul), dacă există și e valabil. Actul aparent e lipsit de efecte între ele.',
          'Efecte față de <b>terții de bună-credință</b> (art. 1290 NCC): pot invoca fie actul aparent, fie actul secret, <b>la alegerea lor</b>, după cum le este mai favorabil. Terții de rea-credință (care au cunoscut simulația) nu se pot prevala de actul aparent.',
          'Simulație <b>în frauda terților sau a legii</b>: contraînscrisul este inopozabil terților prejudiciați; aceștia pot cere declararea ca fictiv/nul a actului aparent sau a celui secret.',
          '<b>Acțiunea în simulație</b>: părțile sau terții cer instanței să <b>constate</b> existența și conținutul actului secret. Fiind acțiune în <b>constatare</b>, e <b>imprescriptibilă</b> — întotdeauna. ⚠️ Ce se prescrie separat sunt acțiunile <b>subsecvente</b> exercitate pe baza actului secret dezvăluit (ex: anularea lui, plata unei creanțe din el).'
        ]
      },
      { icon:'💰', title:'Arvuna (art. 1544–1546 NCC)',
        items:[
          '<b>Arvuna confirmatorie</b> (art. 1544 NCC): sumă dată la momentul încheierii <i>contractului</i> (nu a promisiunii) ca dovadă a perfectării lui. Dacă cel care a dat arvuna nu execută: <b>pierde arvuna</b>. Dacă cel care a primit arvuna nu execută: <b>restituie dublul</b>. ⚠️ Funcție reparatorie — arvuna acoperă daunele (nu se cumulează automat cu alte daune; creditorul poate cere și daune suplimentare dacă dovedește un prejudiciu mai mare).',
          '<b>Arvuna penalizatoare</b> (art. 1546 NCC): clauza prin care oricare dintre părți poate denunța unilateral contractul pierzând arvuna sau restituind dublul. Diferit de cea confirmatorie: <b>nu e sancțiune pentru neexecutare</b>, ci preț al dreptului de retractare (similar opțiunii). ⚠️ Contractul poate fi reziliat legal prin simpla manifestare de voință + pierdere/dublu arvunei, fără a fi nevoie de probe privind neexecutarea.',
          '<b>Distincție arvună vs. clauza penală</b>: clauza penală (art. 1538 NCC) se activează la neexecutare; arvuna confirmatorie are și funcție probatorie (dovedește acordul de voință) și garantatorie. La arvuna penalizatoare, dreptul de retractare e mutual și nu presupune culpă.',
          '<b>Arvuna = clauza penală?</b>: Nu automat — depinde de voința părților. Dacă contractul se execută, arvuna se impută asupra prețului (restituie sau se deduce). Dacă nu se stipulează altfel, suma dată în avans e prezumată avans din preț, nu arvună (art. 1544 alin. 4 NCC).'
        ]
      }
    ],
    grila:'Forma <b>ad validitatem</b> → NCA; <b>ad probationem</b> → valabilă, doar proba afectată. Cauza <b>falsă</b> → NR; <b>lipsa cauzei</b> → NR (art. 1238 al.1 — capcană, nu NCA!); cauza <b>ilicită</b> → NCA. Imposibilitate inițială de executare → contract <b>valabil</b> (art. 1227). Preț fictiv/derizoriu → vânzare <b>anulabilă</b> (art. 1665). NCA: imprescriptibilă, neconfirmabilă; NR: 3 ani pe cale de acțiune, dar pe cale de <b>excepție oricând</b> (art. 1249 al.2). Simulație: între părți prevalează <b>actul secret</b>; terții de bună-credință pot alege; acțiunea în simulație = <b>imprescriptibilă</b> (constatare). Pact succesiune nedeschisă altei persoane = NCA. Simetria formelor: modificarea actului solemn cere aceeași formă. Arvuna confirmatorie: cel care nu execută pierde arvuna / restituie dublul. Arvuna penalizatoare: drept de retractare voluntară, nu sancțiune pentru neexecutare.'
  },

  {
    id:'w04', wk:'W04', dates:'20–26 iul', subj:'civ',
    title:'Efecte nulitate, modalități, prescripție extinctivă',
    sections:[
      { icon:'↩️', title:'Efectele nulității (art. 1254–1265 NCC)',
        items:[
          'Trei principii guvernează efectele nulității: <b>retroactivitatea</b> (actul e desființat <i>ex tunc</i>), <b>restitutio in integrum</b> (prestațiile executate se restituie) și <b>resoluto iure dantis, resolvitur ius accipientis</b> (cad și actele subsecvente). Fiecare are excepții — de aici vin grilele.',
          '<b>Retroactiv</b> (<i>ex tunc</i>): actul e desființat de la data încheierii. Excepție (doctrină constantă): la contractele cu executare succesivă, prestațiile deja executate și consumate nu mai pot fi restituite în natură → nulitatea operează practic numai pentru viitor.',
          '<b>Restituirea prestațiilor</b> (art. 1635 NCC): repunere în starea anterioară. <b>În natură</b> (regula). <b>Prin echivalent</b> (art. 1641 NCC), dacă bunul a pierit sau a fost înstrăinat: debitorul de <b>bună-credință</b> plătește valoarea <b>cea mai mică</b> dintre momentul primirii și cel al pieirii/înstrăinării; cel de <b>rea-credință</b> — valoarea <b>cea mai mare</b>.',
          '<b>Excepții/limitări la restituire</b>: (1) minorul (incapabilul) restituie numai în limita <b>îmbogățirii</b> actuale (art. 1647 NCC); (2) contractele cu executare succesivă consumate. ⚠️ <b>Capcană</b>: prestația executată în temeiul unei cauze <b>ilicite sau imorale rămâne întotdeauna supusă restituirii</b> (art. 1638 NCC) — NCC a răsturnat vechea regulă <i>nemo auditur</i> în materia restituirilor!',
          '<b>Resoluto iure dantis, resolvitur ius accipientis</b>: desființarea actului principal antrenează desființarea actelor subsecvente. <b>Excepție</b>: terțul dobânditor cu titlu oneros, de bună-credință, înscris în CF (imobile) sau în alte registre de publicitate → protejat față de efectele retroactive.',
          '<b>Conversiunea</b> actului nul (art. 1260 NCC): actul nul ca tip A poate valora ca tip B dacă îndeplinește condițiile lui B și voința probabilă a părților o susține. <i>Ex: testament autentic nul de formă → testament olograf dacă e scris, datat și semnat de testator.</i>',
          '<b>Menținerea actelor de administrare</b>: actele de administrare ale dobânditorului de bună-credință (locațiune, reparații necesare) sunt opozabile proprietarului care redobândește bunul, în limitele uzanțelor (art. 1649 NCC).'
        ]
      },
      { icon:'⏳', title:'Termenul — modalitate a AJC (art. 1411–1420 NCC)',
        items:[
          '<b>Suspensiv</b>: amână exigibilitatea; creanța există, dar nu poate fi executată înainte de împlinirea termenului. Debitorul care plătește anticipat nu poate cere restituirea (a renunțat tacit la beneficiul termenului).',
          '<b>Extinctiv</b>: la împlinire se stinge dreptul sau se transformă conținutul obligației. <i>Ex: contractul de locațiune pe durată determinată, contractul de rentă viageră cu termen.</i>',
          '<b>Cert</b>: data fixă și sigură (calendarul). <b>Incert</b>: evenimentul e <i>sigur</i> că va surveni, dar data e nesigură (<i>ex: termenul = moartea debitorului</i>) — termenul se distinge astfel de condiție (eveniment nesigur).',
          'Termenul <b>în favoarea debitorului</b> (regula, art. 1413 NCC): debitorul poate renunța la beneficiu și plăti anticipat; creditorul nu poate refuza. Dacă termenul e stipulat în favoarea creditorului → numai creditorul poate renunța.',
          '<b>Decăderea anticipată din termen</b> (art. 1417 NCC): debitorul decade din beneficiul termenului dacă devine insolvabil, dacă a diminuat garanțiile sau nu le-a constituit. Creanța devine imediat exigibilă.',
          '<b>Termenul esențial</b>: stipulat expres ca element determinant al contractului; nerespectarea lui constituie o neexecutare de esență, care îndreptățește la rezoluțiune fără punere în întârziere.'
        ]
      },
      { icon:'🎲', title:'Condiția — modalitate a AJC (art. 1399–1410 NCC)',
        items:[
          '<b>Suspensivă</b>: dreptul se naște la realizarea evenimentului. Dacă condiția nu se realizează: actul e lipsit de efecte de la bun început (retroactiv). Dacă se realizează: efectele retroactive de la data încheierii actului.',
          '<b>Rezolutorie</b>: dreptul existent se desființează retroactiv la realizarea condiției. Actele de administrare efectuate între timp: rămân valabile față de terții de bună-credință.',
          '<b>Pur potestativă din partea debitorului</b> (<i>„îți vând dacă vreau"</i>, art. 1403 NCC) → obligația <b>nu produce niciun efect</b> (nulitate absolută). ⚠️ Condiția pur potestativă din partea <i>creditorului</i> e valabilă!',
          '<b>Potestativă simplă</b> (<i>dacă mă voi căsători</i>) / <b>cazuală</b> (depinde exclusiv de hazard) / <b>mixtă</b> (depinde parțial de terț sau de hazard) → valide.',
          '<b>Condiția imposibilă, ilicită sau imorală</b> (art. 1402 NCC): se consideră <b>nescrisă</b> — actul rămâne valabil, pur și simplu. ⚠️ Excepție: dacă acea condiție a fost <b>însăși cauza contractului</b> → <b>nulitate absolută</b> a întregului act. (Distincția veche suspensivă/rezolutorie nu mai e criteriul sub NCC!)',
          '<b>Buna-credință în așteptarea condiției</b> (art. 1409 NCC): în perioada pendentă, niciuna din părți nu poate împiedica realizarea/nerealizarea condiției cu rea-credință. Dacă o face → condiția se consideră îndeplinită.'
        ]
      },
      { icon:'⌛', title:'Prescripția extinctivă (art. 2500–2544 NCC)',
        items:[
          '<b>Termen general: 3 ani</b> (art. 2517 NCC). Începe să curgă de la data la care titularul <b>a cunoscut sau trebuia să cunoască</b> nașterea dreptului la acțiune (art. 2523 NCC); la repararea pagubei — de la cunoașterea <b>pagubei și a celui care răspunde</b> de ea (art. 2528 NCC).',
          '<b>Termene speciale</b>: <b>10 ani</b> — drepturi reale neimprescriptibile, repararea prejudiciului adus mediului, prejudicii prin tortură/violență asupra minorului (art. 2518); <b>2 ani</b> — raporturi de asigurare/reasigurare (art. 2519); <b>1 an</b> — leziune (art. 1223), acțiunile posesorii (art. 951 NCC), restituirea prețului la ospătari/hotelieri/transportatori (art. 2520–2521).',
          '<b>Suspendarea</b> (termenul se oprește, apoi continuă de unde s-a oprit, art. 2532–2536 NCC): forță majoră; creditor incapabil fără reprezentant; între soți; curs al negocierilor; cerere de mediere; retragerea cererii de arbitrare.',
          '<b>Întreruperea</b> (termenul scurs se șterge, curge de la zero, art. 2537–2543 NCC): recunoașterea dreptului de debitor; cerere de chemare în judecată; punere în întârziere; arbitrare. ⚠️ Recunoașterea poate fi expresă sau tacită (plată parțială, cerere de reeșalonare).',
          '<b>Repunerea în termen</b> (art. 2522 NCC): motive temeinice (boală, accident) + cerere în max. <b>30 zile</b> de la încetarea cauzei. Judecătorul apreciază.',
          'Prescripția <b>nu operează de drept</b> (art. 2512 NCC): trebuie invocată de debitor, pe cale de excepție. Instanța nu o ridică din oficiu. După împlinire, debitorul care execută voluntar <b>nu mai poate cere restituirea</b> (obligația devine naturală, art. 2506 NCC). Renunțarea la prescripție (art. 2507 NCC): nu se poate renunța la o prescripție care <b>nu a început să curgă</b>; se poate renunța la prescripția <b>împlinită</b> și la <b>beneficiul termenului scurs</b> dintr-o prescripție în curs.'
        ]
      },
      { icon:'⏰', title:'Decăderea (art. 2545–2550 NCC)',
        items:[
          '<b>Definiție</b>: stingerea <b>dreptului subiectiv</b> însuși prin neexercitarea sa în termenul imperativ prevăzut de lege sau de convenție. Spre deosebire de prescripție (care stinge doar dreptul la acțiune/executare silită), decăderea stinge însuși dreptul material.',
          '<b>Regim juridic — diferențe esențiale față de prescripție</b>: (1) operează <b>de drept</b> — instanța o constată din oficiu; (2) <b>nu se suspendă și nu se întrerupe</b> (excepție: forța majoră — art. 2548 NCC); (3) nu se poate renunța la ea anticipat; (4) <b>nu poate fi acoperită prin confirmare</b>.',
          '<b>Cine o poate invoca</b>: orice parte interesată și instanța <b>din oficiu</b> (spre deosebire de prescripție, pe care instanța nu o poate ridica din oficiu). Terțul poate invoca decăderea chiar dacă debitorul n-o opune.',
          '<b>Termene de decădere legale frecvente</b>: exercitarea dreptului de preempțiune — <b>10 zile</b> (mobile) / <b>30 de zile</b> (imobile) de la notificare (art. 1732 NCC); revocarea donației pentru ingratitudine — <b>1 an</b> de la cunoașterea faptei (art. 1024 NCC); termenul de opțiune succesorală — <b>1 an</b> (art. 1103, calificat de doctrina majoritară drept decădere). ⚠️ Anularea pentru violență NU e decădere — e <b>prescripție de 3 ani de la încetarea violenței</b> (art. 2529).',
          '<b>Termenele de decădere convenționale</b> (art. 2545 NCC): valabile dacă nu privesc drepturi de care legea nu permite să se dispună și dacă exercitarea dreptului nu devine excesiv de dificilă. ⚠️ Clauza care reduce termenul sub limita legală pentru drepturi protejate → nulă.'
        ]
      }
    ],
    grila:'Condiție <b>pur potestativă din partea debitorului</b> = NCA; din partea creditorului = valabilă. <b>Suspendare</b> (continuă de unde s-a oprit) ≠ <b>Întrerupere</b> (o ia de la zero). Termen general: <b>3 ani</b>; drepturi reale mobiliare: <b>10 ani</b>. Prescripția: nu operează de drept (instanța nu o ridică din oficiu). <b>Decăderea: operează de drept</b>, instanța o ridică din oficiu, nu se suspendă/întrerupe. Prescripția împlinită → obligație naturală. Cauza imorală: prestația <b>se restituie totuși</b> (art. 1638 — capcană!). Restituire prin echivalent: bună-credință → valoarea cea mai mică; rea-credință → cea mai mare (art. 1641). Condiția ilicită → <b>nescrisă</b>; NCA doar dacă e însăși cauza contractului (art. 1402). Acțiuni posesorii: <b>1 an</b>. Conversiunea: actul nul poate valora ca alt act.'
  },

  {
    id:'w05', wk:'W05', dates:'27 iul–2 aug', subj:'civ',
    title:'Proprietatea privată și modalitățile ei',
    sections:[
      { icon:'📌', title:'Dreptul de proprietate privată (art. 555–621 NCC)',
        items:[
          '<b>Absolut</b>: opozabil tuturor (<i>erga omnes</i>). <b>Exclusiv</b>: numai proprietarul exercită prerogativele — terții nu pot interveni fără consimțământ. <b>Perpetuu</b>: nu se stinge prin neuz; se transmite <i>mortis causa</i>.',
          '<b>Conținut (triada)</b>: <i>ius utendi</i> (usus — a folosi bunul), <i>ius fruendi</i> (fructus — a culege fructele), <i>ius abutendi</i> (abusus — dispoziția materială și juridică).',
          '<b>Dispoziția juridică</b>: înstrăinare, grevare cu sarcini reale (ipotecă, servitute), renunțare. <b>Dispoziția materială</b>: transformare, consumare, distrugere.',
          '<b>Proprietatea publică</b> (art. 858 NCC): aparține statului/unităților administrativ-teritoriale; bunuri de uz sau interes public. Caractere: inalienabilă, insesizabilă, imprescriptibilă. ⚠️ Bunurile publice nu pot fi dobândite prin uzucapiune.',
          '<b>Exproprierea</b> (art. 44 Constituție, Legea 33/1994): limitare definitivă a proprietății private pentru cauză de utilitate publică, numai cu <b>justă și prealabilă despăgubire</b>. Lipsă despăgubire → expropriere abuzivă (art. 1 Prot. 1 CEDO).'
        ]
      },
      { icon:'🚧', title:'Limitele exercitării dreptului de proprietate',
        items:[
          '<b>Legale</b> (art. 602–625 NCC): distanța minimă de <b>2 m</b> față de hotar pentru arborii înalți (art. 613); fereastra de <b>vedere directă</b> spre vecin — minim <b>2 m</b>, vedere <b>oblică</b> — minim <b>1 m</b> (art. 615; fereastra de simplă lumină — permisă oricât de aproape, art. 616); <b>dreptul de trecere</b> (art. 617 NCC) — proprietarul fondului înfundat (fără acces la calea publică) poate cere trecere pe fondul vecin, cu despăgubire.',
          '<b>Abuzul de drept</b> (art. 15 NCC): exercitarea dreptului cu <i>intenția exclusivă de a păgubi</i> pe altul (<i>théorie des actes d\'émulation</i>) sau cu depășirea limitelor bunei-credințe → faptă ilicită, antrenează răspundere delictuală.',
          '<b>Clauza de inalienabilitate</b> (art. 627 NCC): valabilă dacă există un <b>motiv licit și serios</b>; durată max <b>49 ani</b>; privește numai bunurile proprietarului la data clauzei. Opozabilă terților prin publicitate (CF); fără publicitate → inopozabilă terților de bună-credință.',
          '<b>Drepturile vecinilor</b> (art. 630 NCC): proprietarul trebuie să tolereze inconvenientele normale de vecinătate (zgomot, mirosuri). Inconveniențele anormale (depășind pragul rezonabil) → obligarea la încetare sau despăgubiri, indiferent de culpă.'
        ]
      },
      { icon:'⚙️', title:'Dobândirea dreptului de proprietate',
        items:[
          '<b>Moduri originare</b> (dobânditorul nu primește dreptul de la un autor anterior): uzucapiunea, accesiunea, ocupațiunea (bunuri fără stăpân — art. 941 NCC), dobândirea fructelor și a bunurilor mobile prin posesia de bună-credință. ⚠️ Comoriența NU e mod de dobândire a proprietății — e o prezumție succesorală (v. mai jos).',
          '<b>Moduri derivate</b> (translative de la un autor): acte juridice (vânzare, donație, schimb), moștenire (testamentară sau legală). Principiu: <i>nemo plus iuris ad alium transferre potest quam ipse habet</i> (nimeni nu poate transmite mai mult decât are).',
          '<b>Principiul transferului prin simplul acord de voință</b> (art. 1674 NCC): la vânzare, proprietatea se strămută de drept de la vânzător la cumpărător prin simplul acord, chiar dacă bunul nu a fost predat și prețul nu a fost plătit. <b>Excepție</b>: bunuri de gen — transferul se produce la <b>individualizare</b>.',
          '<b>Cartea Funciară</b> (art. 557 alin. 4, art. 885 NCC): NCC prevede efectul <b>constitutiv</b> al înscrierii — dar ⚠️ <b>capcană</b>: aplicarea lui e <b>amânată</b> (art. 56 din Legea 71/2011) până la finalizarea lucrărilor de cadastru <b>în fiecare UAT</b>, nefinalizate nici azi. Până atunci, înscrierea în CF are doar efect de <b>opozabilitate</b> față de terți — proprietatea se transmite prin simplul acord de voință.',
          '<b>Accesiunea imobiliară artificială</b> (art. 577, 581–582 NCC): constructorul pe terenul altuia — proprietarul terenului dobândește construcția prin accesiune. Constructor de <b>bună-credință</b> (art. 581): proprietarul alege între a plăti valoarea materialelor + manopera <i>sau</i> sporul de valoare al terenului; ori îl obligă pe constructor să <b>cumpere terenul</b> la valoarea de circulație. Constructor de <b>rea-credință</b> (art. 582): în plus, proprietarul poate cere <b>desființarea lucrării</b> pe cheltuiala constructorului, iar dacă o păstrează plătește doar <b>jumătate</b> din valori.'
        ]
      },
      { icon:'🔀', title:'Modalitățile dreptului de proprietate',
        items:[
          '<b>Proprietatea rezolubilă</b>: drept transmis sub condiție rezolutorie; la realizarea condiției dreptul revine transmițătorului retroactiv (efecte față de terți: dobânditorul subsecvent al terțului pierde dreptul — <i>resoluto iure dantis</i>).',
          '<b>Proprietatea anulabilă</b>: dobândită printr-un act anulabil; dacă actul e anulat, dreptul revine. Terțul dobânditor cu titlu oneros, de bună-credință, înscris în CF → protejat.',
          '<b>Coproprietatea obișnuită</b>: rezultă din acte juridice sau lege; fiecare are o cotă ideală; poate fi cerut oricând partajul.',
          '<b>Devălmășia</b>: soții nu au cote determinate; specifică comunității legale. Partajul se face la desfacerea/încetarea căsătoriei sau în timpul căsătoriei prin schimb de regim matrimonial.',
          '<b>Coproprietatea forțată</b> (art. 646 NCC): bunuri comune inerente (scări, fundații, pereți despărțitori, hotarele comune) — nu se poate cere partajul; cotele urmează loturile.'
        ]
      },
      { icon:'🤝', title:'Regimul coproprietății pe cote-părți (art. 634–671 NCC)',
        items:[
          '<b>Acte de conservare</b>: orice coproprietar poate face singur, pe cheltuiala comună.',
          '<b>Acte de administrare</b> (art. 641 NCC): regula majorității <b>cotelor</b> (nu a numărului de persoane). Dacă nu există majoritate → instanța poate autoriza dacă actul e util. ⚠️ Actul de administrare cu terții de bună-credință: opozabil și celorlalți coproprietari.',
          '<b>Acte de dispoziție</b> (art. 641 alin. 4 NCC): regula unanimității — sancțiunea nerespectării: inopozabilitate față de coproprietarii care nu au consimțit (nu nulitate!). Orice coproprietar poate înstrăina liber <b>propria cotă ideală</b>.',
          '⚠️ <b>Capcană — preempțiunea între coproprietari</b>: NCC <b>nu</b> dă coproprietarilor un drept general de preempțiune la vânzarea cotei altuia — fiecare își înstrăinează liber cota ideală. Preempțiunea există doar în <b>legi speciale</b>: terenuri agricole extravilane (Legea 17/2014 — coproprietarii sunt preemptori de rang 1), terenuri forestiere (art. 1746 NCC — coproprietari și vecini).',
          '<b>Partajul</b> (art. 669 NCC): poate fi cerut oricând de orice coproprietar (drept imprescriptibil, art. 669). Convențional sau judiciar. Modalități: atribuire în natură cu sultă, licitație publică (dacă bunul nu se poate împărți). ⚠️ Efecte: <b>constitutive</b> (art. 680 NCC) — fiecare devine proprietar exclusiv <b>de la data partajului</b> (la imobile, de la înscrierea în CF), nu retroactiv. Sub vechiul cod era declarativ — capcană frecventă!',
          '<b>Cheltuielile comune</b>: proporțional cu cotele. Coproprietarul care face cheltuieli necesare pentru conservarea bunului are acțiune în regres față de ceilalți.',
          '⚠️ <b>Capcană — retractul litigios NU mai există</b>: instituția din vechiul cod (debitorul dreptului litigios vândut putea stinge cesiunea plătind cesionarului prețul + cheltuieli) <b>nu a fost preluată de NCC</b>. Ce a rămas: <b>interdicția dobândirii drepturilor litigioase</b> de către judecători, procurori, grefieri, executori, avocați, notari, consilieri juridici și practicieni în insolvență, în raza instanței unde se judecă litigiul (art. 1653 NCC) → sancțiune: <b>nulitate absolută</b>.'
        ]
      },
      { icon:'🌊', title:'Accesiunea naturală și ocupațiunea',
        items:[
          '<b>Aluviunea</b> (art. 569 NCC): pământ depus treptat de ape curgătoare pe malul unui fond riveran → devine proprietatea proprietarului fondului fără nicio formalitate. Condiție: depunere lentă și treptată (nu bruscă).',
          '<b>Avulsiunea</b> (art. 572 NCC): ruperea bruscă a unei bucăți de teren de pe un fond și lipirea ei de alt fond riveran. Proprietarul fondului de origine poate <b>revendica</b> în termen de <b>1 an</b> de la eveniment; după 1 an → devine proprietatea fondului receptor prin aluviune.',
          '<b>Insulele și prundișurile</b> (art. 573–575 NCC): albiile râurilor aparțin proprietarilor riverani, cu excepția celor care fac obiectul proprietății publice (apele navigabile → statul). Insulele și prundișurile din albiile neaflate în proprietate publică revin proprietarului albiei; insula formată prin despărțirea unui braț rămâne a proprietarului fondului din care s-a desprins.',
          '<b>Ocupațiunea</b> (art. 941–947 NCC): mod originar de dobândire a proprietății asupra unui bun <b>fără stăpân</b> (<i>res nullius</i>) sau abandonat (<i>res derelicta</i>), prin luarea în posesie cu intenție de a deveni proprietar. Se aplică bunurilor <b>mobile</b> (nu imobile — terenurile fără stăpân revin statului). ⚠️ Bunurile sălbatice (vânat, pește) se dobândesc prin ocupațiune cu respectarea reglementărilor speciale (Legea vânătorii, Legea pisciculturii).',
          '<b>Comoriența</b> (art. 957 NCC): dacă mai multe persoane mor în același eveniment fără a se putea stabili ordinea deceselor, sunt prezumate a fi murit <b>deodată</b> → nu se moștenesc reciproc. Fiecare lasă moștenirea propriilor moștenitori.'
        ]
      }
    ],
    grila:'Partajul sub NCC: efect <b>constitutiv</b> (art. 680) — de la data partajului, NU retroactiv (capcană: sub vechiul cod era declarativ). Regula unanimității: numai acte de <b>dispoziție</b> (nu de administrare — acolo majoritatea cotelor). Clauza de inalienabilitate: max <b>49 ani</b> + motiv licit. Coproprietatea forțată: <b>nu se poate partaja</b>. CF: efectul constitutiv e <b>amânat</b> (art. 56 L. 71/2011) → înscrierea = doar opozabilitate; transferul se face prin acordul de voință. Proprietate publică: inalienabilă, insesizabilă, imprescriptibilă. Preempțiune între coproprietari: NU e regulă generală NCC — doar legi speciale (agricol L. 17/2014, forestier art. 1746). Retractul litigios: <b>nu mai există</b> în NCC — doar interdicția art. 1653 (judecători, avocați etc. → NCA). Vedere directă: 2 m; oblică: 1 m. Aluviune: depunere lentă → riveranul automat. Avulsiune: rupere bruscă → revendicare în <b>1 an</b>. Ocupațiune: numai mobile fără stăpân; terenurile fără stăpân → stat (prin moștenire vacantă/lege).'
  },

  {
    id:'w06', wk:'W06', dates:'3–9 aug', subj:'civ',
    title:'Dezmembrămintele dreptului de proprietate',
    sections:[
      { icon:'🌿', title:'Uzufructul (art. 703–748 NCC)',
        items:[
          'Dreptul de a <b>folosi bunul</b> altuia și de a-i culege <b>fructele</b>, cu obligația conservării <b>substanței</b>. Constituire: prin act juridic (inclusiv testament) sau uzucapiune.',
          '<b>Uzufructuarul</b>: suportă reparațiile de <i>întreținere</i>; culege fructele naturale, civile, industriale; <b>nu are drept la producte</b>. Poate închiria/arenda bunul — locațiunile consimțite, dacă sunt înregistrate, sunt opozabile nudului proprietar max <b>3 ani</b> după stingerea uzufructului.',
          '<b>Nudul proprietar</b>: suportă reparațiile <i>capitale</i> (mari); are drept la producte; poate înstrăina și ipoteca nuda proprietate <b>liber, fără acordul uzufructuarului</b> — dobânditorul o primește grevată de uzufruct.',
          '<b>Cedarea uzufructului</b> (art. 714 NCC): uzufructuarul poate ceda dreptul sau poate constitui o ipotecă asupra lui. ⚠️ Uzufructul se stinge tot la <b>moartea uzufructuarului inițial</b>, nu a cesionarului.',
          '<b>Cvasiuzufructul</b> (art. 712 NCC): uzufructul asupra bunurilor consumptibile (bani, grâne). Uzufructuarul devine proprietar al bunului, dar trebuie să restituie la stingere <i>bunuri de aceeași calitate, cantitate și valoare</i> sau contravaloarea lor.',
          '<b>Stingere</b> (art. 746 NCC): expirarea termenului; <b>moartea uzufructuarului</b> (chiar cu beneficiar cesionar); consolidarea (uzufructuarul dobândește nuda proprietate sau invers); renunțare; <b>neuz 10 ani</b>; pieirea totală a bunului.',
          'Uzufructul este <b>temporar prin natura sa</b>; nu poate depăși viața uzufructuarului (la PJ: max 30 ani).'
        ]
      },
      { icon:'🏠', title:'Uzul și abitația (art. 749–754 NCC)',
        items:[
          '<b>Uzul</b>: dreptul de a folosi bunul și a culege fructele <b>numai în limita nevoilor proprii și ale familiei</b>. ⚠️ Fructele în exces rămân nudului proprietar — spre deosebire de uzufruct.',
          '<b>Abitația</b>: dreptul de a locui în casa altuia cu familia; specific imobilelor de locuință. Titularul poate locui și cu membrii de familie, chiar dacă nu sunt menționați expres.',
          'Ambele sunt <b>inalienabile și insesizabile</b> (art. 752 NCC): nu pot fi cedate terților; nu pot fi urmărite de creditori; nu pot fi ipotecate. ⚠️ Uzufructul, în schimb, poate fi cedat.',
          'Constituire: ca și uzufructul — act juridic, uzucapiune sau alte moduri prevăzute de lege (art. 754 NCC trimite la regimul uzufructului, care se aplică <i>mutatis mutandis</i>).',
          '<b>Dreptul de abitație al soțului supraviețuitor</b> (art. 973 NCC): asupra casei în care a locuit, dacă aceasta face parte din moștenire și dacă soțul <b>nu are alt drept real de a folosi o locuință corespunzătoare</b>. Este <b>gratuit</b>, inalienabil și insesizabil. Durata: până la <b>partaj</b>, dar <b>nu mai puțin de 1 an</b> de la deschiderea moștenirii; încetează și la recăsătorire.'
        ]
      },
      { icon:'🛤️', title:'Servituțile (art. 755–772 NCC)',
        items:[
          'Sarcini impuse unui fond (<b>aservit</b>) în folosul unui alt fond (<b>dominant</b>); urmăresc fondurile, <b>nu persoanele</b>. Proprietarul fondului dominant nu poate exercita alte drepturi decât cele stabilite prin titlu.',
          '<b>Continue</b>: exercitarea nu necesită act uman periodic (<i>ex: scurgerea apelor, vederea, lumina</i>). / <b>Discontinue</b>: necesită acte repetate (<i>ex: dreptul de trecere, dreptul de a lua apă</i>).',
          '<b>Aparente</b>: semnalizate printr-un semn vizibil (drum, șanț). / <b>Neaparente</b>: fără semn exterior (<i>ex: interdicția de a construire la o anumită înălțime</i>).',
          '<b>Moduri de dobândire</b> (art. 756 NCC): act juridic sau uzucapiune. ⚠️ <b>Capcană — regula NCC</b> (art. 763): prin uzucapiune <b>tabulară</b> poate fi dobândită <b>orice servitute</b>; prin uzucapiune <b>extratabulară</b> — numai servituțile <b>pozitive</b>. Criteriul vechi „continue și aparente" și „destinația proprietarului" nu mai există sub NCC — grilele testează schimbarea!',
          '<b>Servituți pozitive</b> (titularul fondului dominant poate face ceva pe fondul aservit: trecere, a lua apă) vs. <b>negative</b> (fondul aservit trebuie să se abțină: interdicția de a construi, de a planta).',
          '<b>Stingere</b> (art. 770–772 NCC): neuz <b>10 ani</b> — pentru <b>orice</b> servitute (termenul curge de la ultimul act de exercitare la cele discontinue, respectiv de la un act contrar la cele continue — art. 771); consolidarea (ambele fonduri ajung la același proprietar); renunțare; pieirea fondului aservit; expropriere; <b>răscumpărarea</b> servituții de trecere (art. 772).'
        ]
      },
      { icon:'🏗️', title:'Superficia (art. 693–702 NCC)',
        items:[
          'Dreptul real de a <b>edifica sau păstra o construcție pe terenul altei persoane</b>, asociat cu un drept de folosință (<i>superficie</i> asupra terenului aferent construcției). Superficiarul = proprietarul construcției.',
          'Constituire: act juridic (convenție sau testament), uzucapiune sau alt mod prevăzut de lege. Înscrierea în CF e obligatorie pentru opozabilitate față de terți.',
          'Durată (art. 694 NCC): cel mult <b>99 de ani</b>, cu posibilitate de <b>reînnoire</b> la împlinirea termenului.',
          '<b>La stingerea superficiei</b>: proprietarul terenului poate (a) prelua construcția la <i>valoarea de piață</i> sau (b) cere superficiarului să ridice construcția pe cheltuiala sa. ⚠️ Dacă nu se înțeleg, instanța stabilește soluția.',
          'Superficiarul poate <b>ipoteca dreptul de superficie</b> (art. 2379 lit. d NCC) — deci construcția separat de teren. <b>Acțiunea confesorie de superficie</b> (art. 696 NCC): apără dreptul împotriva <b>oricărei persoane</b>, chiar și a proprietarului terenului; imprescriptibilă.',
          '⚠️ Superficia ≠ servitutea: superficia conferă un <i>drept de proprietate</i> (asupra construcției) + folosință teren; servitutea nu conferă proprietate, ci numai o sarcină. Superficia ≠ accesiunea: superficiarul <i>nu este supus accesiunii</i> — construcția nu se incorporează terenului.'
        ]
      },
      { icon:'🔁', title:'Schemă comparativă: dezmembrăminte',
        items:[
          '<b>Uzufruct</b>: fructe + folosință; cedabil + ipotecabil; se stinge la moartea uzufructuarului; durată max viager (PF) sau 30 ani (PJ).',
          '<b>Uz</b>: fructe doar pentru nevoile proprii + familie; inalienabil + insesizabil; se stinge la moartea titularului.',
          '<b>Abitație</b>: locuire proprie + familie; inalienabilă + insesizabilă; se stinge la moartea titularului. Toate trei: constituire prin act juridic sau uzucapiune.',
          '<b>Servitutea</b>: sarcină pe un fond în folosul altui fond; urmărește fondurile, nu persoanele; nu conferă proprietate. Uzucapiune: tabulară → orice servitute; extratabulară → doar cele <b>pozitive</b> (art. 763).',
          '<b>Superficia</b>: drept de proprietate asupra construcției + folosință teren; cedabilă, ipotecabilă; max 99 ani. Deosebire esențială față de servitute și uzufruct: superficiarul <i>are proprietatea construcției</i>.'
        ]
      },
      { icon:'🥇', title:'Dreptul de preemțiune legal (art. 1730–1740 NCC)',
        items:[
          '<b>Noțiune</b>: dreptul unui anumit subiect (<i>preemptor</i>) de a fi preferat oricărui terț la dobândirea unui bun, la preț și condiții egale. E un drept real de dobândire, opozabil erga omnes (dacă e publicizat). ≠ pactul de preferință (convențional, relativ, obligă numai vânzătorul).',
          '<b>Titularii preemțiunii legale</b> — numai unde legea o prevede expres: <b>arendașul</b>, la vânzarea terenurilor agricole arendate (art. 1849 NCC, L. 17/2014); <b>coproprietarii și vecinii</b>, la vânzarea terenurilor <b>forestiere</b> (art. 1746 NCC); preemptorii în rang de la terenurile <b>agricole extravilane</b> (L. 17/2014: coproprietari → arendași → vecini → stat). ⚠️ NU există preempțiune generală între coproprietari sub NCC.',
          '<b>Mecanismul NCC</b> (art. 1730–1732): vânzătorul poate (a) trimite preemptorului <b>oferta</b> — acceptare în <b>10 zile</b> (mobile) / <b>30 zile</b> (imobile); sau (b) vinde direct terțului — dar vânzarea e valabilă numai <b>sub condiția suspensivă a neexercitării preempțiunii</b>, iar cuprinsul contractului trebuie <b>notificat</b> preemptorului.',
          '<b>Exercitarea după vânzarea către terț</b> (art. 1732–1733 NCC): preemptorul își exercită dreptul în 10/30 de zile <b>de la comunicarea contractului</b>, consemnând prețul la dispoziția vânzătorului → contractul de vânzare se <b>consideră încheiat între preemptor și vânzător</b> în condițiile din contractul cu terțul, iar acesta din urmă se <b>desființează retroactiv</b>.',
          '<b>Concursul de preemptori</b>: dacă mai mulți au drept de preemțiune, contractul se poate încheia cu oricare dintre ei, în ordinea de preferință stabilită de lege sau, în lipsa unor dispoziții, cu cel care a acceptat primul.',
          '⚠️ <b>Distincție</b>: drept de preemțiune <i>legal</i> (art. 1730) vs. <i>convențional</i> (pactul de preferință, art. 1730 alin. 3): pactul obligă numai contractual vânzătorul (sancțiune: daune); dreptul legal → subrogare reală + inopozabilitate față de preemptor.'
        ]
      }
    ],
    grila:'Uzufructuarul: <b>fructe da, producte nu</b>; uzufruct se stinge la moartea <b>uzufructuarului inițial</b> (nu a cesionarului). Abitația: <b>inalienabilă și insesizabilă</b> (spre deosebire de uzufruct, care e cedabil). Servituți prin uzucapiune: <b>tabulară → orice</b>; <b>extratabulară → doar pozitive</b> (art. 763 — capcană: criteriul „continue+aparente" e vechiul cod). Superficia: max <b>99 ani</b> + reînnoire; superficiarul nu e supus accesiunii; acțiunea confesorie (art. 696) merge chiar contra proprietarului terenului. Neuz servituți: <b>10 ani</b>, orice servitute. Preemțiune: exercitare <b>10 zile</b> (mobile) / <b>30 zile</b> (imobile) de la comunicare; vânzarea către terț = sub <b>condiție suspensivă</b>; exercitarea → contract considerat încheiat cu preemptorul, cel cu terțul desființat retroactiv (art. 1733). Abitația soțului supraviețuitor: gratuită, până la partaj, minim <b>1 an</b>.'
  },

  {
    id:'w07', wk:'W07', dates:'10–16 aug', subj:'civ',
    title:'Posesie, uzucapiune, revendicare, garanții reale',
    sections:[
      { icon:'✋', title:'Posesia (art. 916–952 NCC)',
        items:[
          '<b>Ce este posesia</b> (art. 916 NCC): exercitarea <i>în fapt</i> a prerogativelor dreptului de proprietate (sau ale altui drept real) de către cel care stăpânește bunul. Este o <b>stare de fapt, nu de drept</b> — posesorul poate să nu fie proprietar — dar legea o protejează pentru a asigura pacea socială și pentru că, de cele mai multe ori, posesorul chiar este titularul dreptului.',
          'Elementele posesiei: <b>corpus</b> (stăpânire de fapt — poate fi exercitat și prin altul, <i>corpore alieno</i>) + <b>animus</b> (intenția de a stăpâni <i>pentru sine</i> — nu se exercită prin altul).',
          '<b>Detenția precară</b>: stăpânire fără <i>animus domini</i> (chiriaș, depozitar, comodatar, uzufructuar) → nu produce efectele posesiei; detentorul nu poate invoca uzucapiunea.',
          '<b>Calitățile posesiei utile</b>: continuă (acte repetate la intervale normale), pașnică (netulburată prin violență), publică (nu clandestină), neechivocă (exercitată în mod clar ca proprietar).',
          'Viciile posesiei (art. 926–927 NCC): discontinuitate, violență, clandestinitate. <b>Discontinuitatea e absolută</b> — o poate invoca orice persoană interesată; <b>violența și clandestinitatea sunt relative</b> — le invocă numai cel față de care s-au exercitat. Toate viciile sunt <b>temporare</b>: posesia redevine utilă la încetarea cauzei.',
          '<b>Intervertirea detenției precare</b> în posesie (art. 920 NCC): numai în cazuri expres prevăzute — (a) detentorul încheie cu bună-credință un act translativ cu titlu particular <b>cu altă persoană decât proprietarul</b> (crede că dobândește de la adevăratul titular); (b) detentorul săvârșește <b>acte de rezistență neechivoce</b> față de cel pentru care deține (neagă deschis dreptul acestuia); (c) detentorul strămută posesia printr-un act translativ cu titlu particular către un terț de bună-credință.',
          '<b>Pierderea posesiei</b>: pierderea corpusului (abandonul material), pierderea animus-ului (recunoașterea dreptului altuia), sau a ambelor elemente. Uzucapiunea se întrerupe la pierderea posesiei.'
        ]
      },
      { icon:'🌱', title:'Efectele posesiei (art. 937–951 NCC)',
        items:[
          '<b>Prezumția de proprietate</b> (art. 919 NCC): posesorul e prezumat proprietar până la proba contrară. Cel care contestă posesia trebuie să facă proba.',
          'Posesor <b>de bună-credință</b>: dobândește <b>fructele</b> (naturale, civile, industriale), dar <b>nu și productele</b>. Buna-credință se apreciază <i>la data perceperii fiecărui fruct</i>.',
          'Posesor <b>de rea-credință</b>: restituie toate fructele + contravaloarea celor consumate sau deteriorate cu vinovăție. Datorează și fructele pe care nu le-a perceput dar ar fi putut.',
          '<b>Bunuri mobile</b> (art. 937 NCC): posesia de bună-credință valorează titlu de proprietate (<i>en fait de meubles, la possession vaut titre</i>). <b>Excepție</b>: bunuri furate sau pierdute — proprietarul poate revendica în <b>3 ani de la furt/pierdere</b>, chiar față de terțul de bună-credință cu titlu oneros.',
          '<b>Acțiuni posesorii</b> (art. 949–952 NCC + art. 1003–1005 NCPC): <b>complânda</b> — orice tulburare/deposedare, cere posesie utilă de cel puțin 1 an; <b>reintegranda</b> — tulburare/deposedare prin <b>violență</b>, deschisă oricărui posesor sau chiar detentor precar, fără condiția de 1 an de posesie. Termen de introducere pentru ambele: <b>1 an</b> de la tulburare/deposedare. Nu se cere dovedirea dreptului de proprietate, ci numai a posesiei — instanța nu cercetează fondul dreptului.'
        ]
      },
      { icon:'⌛', title:'Uzucapiunea imobiliară (art. 928–934 NCC)',
        items:[
          '<b>Uzucapiunea extratabulară</b> (art. 930 NCC): posesie utilă <b>10 ani</b> + bunul nu e înscris în CF, sau titularul înscris a decedat sau a renunțat la drept. Cerere de uzucapiune înregistrată la OCPI.',
          '<b>Uzucapiunea tabulară</b> (art. 931 NCC): posesorul s-a înscris cu <b>bună-credință</b> în CF pe baza unui titlu translativ (chiar dacă autorul nu era proprietar) + <b>5 ani</b> de la înscrierea în CF fără contestație.',
          '<b>Joncțiunea posesiilor</b> (art. 933 NCC): posesorul actual poate uni posesia sa cu a <b>autorului</b> (cel de la care a dobândit bunul — cumpărare, moștenire) pentru a împlini termenul de uzucapiune. Este <b>facultativă</b> (o invocă dacă îi convine), dar cine o invocă <b>preia posesia autorului așa cum era — cu calitățile și viciile ei</b>. Miza practică: A a posedat 7 ani, vinde lui B → B mai are nevoie doar de 3 ani pentru cei 10 ai uzucapiunii extratabulare.',
          '<b>Efectele uzucapiunii</b> (art. 934 NCC): dreptul se dobândește <b>retroactiv</b> de la data la care a început posesia. Uzucapantul dobândește dreptul liber de sarcini constituite după data începerii posesiei.',
          'Uzucapiunea <b>nu operează</b> împotriva statului sau UAT-urilor pentru bunuri publice. Nu operează nici dacă titularul din CF nu a cunoscut și nu trebuia să cunoască posesia (la uzucapiunea extratabulară).',
          '<b>Renunțarea la uzucapiune</b>: valabilă numai <b>după împlinirea termenului</b> (când dreptul e deja câștigat); renunțarea anticipată = nulă — nimeni nu poate renunța dinainte la un beneficiu de ordine publică. Uzucapantul renunță la dobândirea dreptului, nu la posesie. <i>Ex: după 10 ani de posesie, posesorul recunoaște dreptul proprietarului și refuză să ceară intabularea — renunțare valabilă; o clauză semnată în anul 3 prin care „renunță la orice uzucapiune viitoare" — nulă.</i>'
        ]
      },
      { icon:'⚔️', title:'Acțiunea în revendicare și dubla vânzare (art. 563–566 NCC)',
        items:[
          'Acțiunea <i>in rem</i> a proprietarului neposesor contra posesorului neproprietar. Sarcina probei: reclamantul trebuie să probeze că el e proprietar — <i>probatio diabolica</i>, „proba diabolică": riguros, ar trebui dovedit întregul lanț de transmisiuni valabile până la un mod originar de dobândire, ceea ce e practic imposibil. De aceea instanțele recurg la <b>prezumții</b> și la <b>compararea titlurilor</b>.',
          '<b>Compararea titlurilor</b> (când ambele părți invocă un titlu): (1) titluri de la <b>același autor</b> → preferat cel care a <b>înscris primul în CF</b> (sau, la mobile, cel cu data certă anterioară); (2) titluri de la <b>autori diferiți</b> → câștigă cel al cărui autor avea dreptul <b>mai bine caracterizat</b> (<i>nemo plus iuris</i>); (3) doar reclamantul are titlu → câștigă dacă titlul e anterior posesiei pârâtului; (4) niciunul nu are titlu → preferat posesorul (<i>in pari causa, melior est causa possidentis</i>).',
          '<b>Imobiliară</b>: <b>imprescriptibilă</b> extinctiv (se poate formula oricând); cedează în fața uzucapiunii. Admiterea → obligă pârâtul să restituie bunul + fructele (de rea-credință) sau numai bunul (de bună-credință).',
          '<b>Cheltuielile posesorului</b> la restituire (art. 566 NCC): <b>necesare</b> (conservarea bunului) → restituite <b>integral</b>, indiferent de bună/rea-credință; <b>utile</b> (sporesc valoarea) → restituite <b>în limita sporului de valoare</b> la data restituirii; <b>voluptuare</b> (de lux, plăcere personală) → <b>nu se restituie</b>, dar posesorul poate ridica lucrările dacă nu strică bunul.',
          '<b>Mobiliară</b>: dacă bunul a ajuns la posesorul de bună-credință printr-un act cu <b>titlu oneros</b> → proprietarul pierde acțiunea. Dacă titlu gratuit → revendicarea e admisă.',
          '<b>Bunuri mobile furate/pierdute</b>: proprietarul poate revendica față de oricine în <b>3 ani</b> de la furt/pierdere, chiar dacă terțul e de bună-credință și a dobândit cu titlu oneros.',
          '<b>Dubla vânzare imobiliară</b>: preferat cumpărătorul care a <b>înscris primul în CF</b> de bună-credință, chiar dacă a dobândit ulterior. Câștigătorul CF nu răspunde față de cel vătămat (care are acțiune în daune față de vânzătorul fraudulos).',
          '<b>Dubla vânzare mobiliară</b>: preferat cel care a intrat <b>primul în posesie</b> de bună-credință (art. 1275 NCC). Dacă niciunul nu e în posesie → cel cu titlu mai vechi.',
          '<b>Acțiunea negatorie</b> (art. 564 NCC): acțiunea prin care proprietarul neagă existența unui drept real (uzufruct, servitute, superficie) pretins de pârât asupra bunului său. Spre deosebire de revendicare (unde proprietarul contestă stăpânirea bunului), la acțiunea negatorie proprietarul stăpânește bunul dar contestă sarcina pretinsă. Sarcina probei: <b>pârâtul trebuie să dovedească dreptul real</b> invocat. ⚠️ Acțiunea negatorie e <b>imprescriptibilă</b> extinctiv, ca și revendicarea imobiliară.'
        ]
      },
      { icon:'🔒', title:'Garanții reale și personale (art. 2279–2479 NCC)',
        items:[
          '<b>Ipoteca imobiliară</b> (art. 2343 NCC): accesorie (urmează soarta creanței), indivizibilă (garantează creanța până la plata integrală), specială (poartă pe un bun determinat). Rang → data înscrierii în CF. Creditorul ipotecar poate urmări bunul indiferent de cine îl deține.',
          '<b>Ipoteca mobiliară</b> (art. 2387 NCC): se constituie fără deposedarea debitorului (spre deosebire de gaj). Publicitate → înregistrare în <b>RNPM</b> (Registrul Național de Publicitate Mobiliară — fostul AEGRM; grilele pot folosi oricare denumire). Rang → data înregistrării.',
          '<b>Gajul</b> (art. 2480 NCC): presupune <b>deposedarea</b> debitorului — bunul se predă creditorului sau unui terț custode. Creditorul gajist nu poate folosi bunul (doar să-l păstreze), sub sancțiunea abuzului de gaj.',
          '<b>Fidejusiunea</b> (art. 2280 NCC): garanție personală — fidejusorul garantează cu întregul său patrimoniu. Beneficii ale fidejusorului: (1) <b>discuțiune</b> — creditorul trebuie să urmărească mai întâi debitorul principal; (2) <b>diviziune</b> — dacă sunt mai mulți fidejusori, fiecare e ținut numai pentru partea sa. ⚠️ Beneficiile pot fi excluse prin clauza de renunțare.',
          '<b>Privilegiile</b> (art. 2333 NCC): preferință legală, izvorând din natura creanței. Ordinea: (1) cheltuielile de judecată; (2) cheltuielile de conservare/vânzare; (3) creanțele salariale. ⚠️ Super-privilegiu: cheltuielile de conservare a bunului preced ipotecile chiar anterioare.'
        ]
      },
      { icon:'🏅', title:'Rangul garanțiilor și ipoteca legală (art. 2386, 2420–2426 NCC)',
        items:[
          '<b>Rangul ipotecii</b> (art. 2420 NCC): determinat de data înscrierii în CF (imobile) sau în RNPM/AEGRM (mobile). Prima ipotecă înscrisă are rang I; ipotecile ulterioare au ranguri inferioare. Creditorul de rang superior e plătit integral înainte de cei de rang inferior.',
          '<b>Cesiunea de rang</b> (art. 2421 NCC): creditorul cu rang superior poate ceda rangul său creditorului cu rang inferior, contra unui preț sau cu titlu gratuit. Cesiunea nu afectează ceilalți creditori intermediari.',
          '<b>Ipotecile legale</b> (art. 2386 NCC) — iau naștere din lege, fără act constitutiv explicit: (1) vânzătorului neplătit, asupra bunului vândut (prețul restant); (2) promitentului achizitor, asupra imobilului promis (dacă prețul a fost plătit); (3) coproprietarilor, pentru sultele datorate la partaj; (4) creditorului obligației de întreținere, pe imobilele debitorului; (5) statului și UAT-urilor, pentru creanțe fiscale.',
          '<b>Concursul de creditori</b>: la urmărirea silită, ordinea de plată: (1) creanțe garantate prin privilegii generale (cheltuieli de judecată, cheltuieli de conservare); (2) creditori ipotecari / gajisti, în ordinea rangului; (3) creditori chirografari (<i>pari passu</i>, proporțional cu creanțele).',
          '<b>Urmărirea silită imobiliară</b>: creditorul ipotecar urmărește imobilul indiferent de dobânditorul actual (<i>drept de urmărire</i>). Dobânditorul poate <b>purga ipoteca</b> (art. 2494 NCC): plătește toți creditorii ipotecari înscriși sau abandonează bunul urmăririi — dobândind bunul liber de ipoteci.',
          '⚠️ <b>Indivizibilitatea ipotecii</b> (art. 2352 NCC): ipoteca rămâne integrală asupra bunului, chiar dacă creanța se stinge parțial sau bunul e împărțit. Fiecare fracțiune din bun garantează întreaga creanță.'
        ]
      }
    ],
    grila:'Detenția precară <b>nu duce la uzucapiune</b>. Posesorul de bună-credință: <b>fructe da, producte nu</b>. Uzucapiune extratabulară: <b>10 ani</b>; tabulară: <b>5 ani</b>. Dubla vânzare imobiliar: prioritate → <b>înscrierea CF</b> de bună-credință. Dubla vânzare mobiliară: prioritate → <b>prima posesie</b> de bună-credință. Revendicare mobiliară față de dobânditorul oneros de bună-credință: proprietarul pierde (excepție: furate/pierdute → 3 ani). Compararea titlurilor: același autor → primul înscris în CF; autori diferiți → autorul mai bine caracterizat; fără titluri → posesorul. Cheltuieli posesor: necesare integral, utile în limita sporului, voluptuare nu. Vicii posesie: discontinuitatea absolută, violența/clandestinitatea relative. Fidejusiunea: beneficii de discuțiune și diviziune, eliminabile prin clauză. Acțiunea negatorie: <b>imprescriptibilă</b>; pârâtul dovedește dreptul real. Rang ipotecă: data înscrierii CF/AEGRM. Ipotecă legală (art. 2386): vânzător neplătit, promitent achizitor, coproprietari sultă, creditor întreținere. Concurs creditori: privilegii generale → ipotecari în rang → chirografari proporțional.'
  },

  {
    id:'w08', wk:'W08', dates:'17–23 aug', subj:'civ',
    title:'Izvoarele obligațiilor + fapt juridic licit',
    sections:[
      { icon:'📋', title:'Clasificarea izvoarelor obligațiilor + tipuri de obligații',
        items:[
          '<b>Obligația</b> (art. 1164 NCC) = legătura de drept prin care <b>debitorul</b> este ținut să procure o prestație <b>creditorului</b>, iar acesta are dreptul să o obțină. Izvoarele ei (art. 1165): contractul, actul unilateral, gestiunea de afaceri, îmbogățirea fără justă cauză, plata nedatorată, fapta ilicită și orice alt act sau fapt de care legea leagă nașterea unei obligații.',
          '<b>Contractul</b> (art. 1166 NCC); <b>actul unilateral</b> (art. 1324 NCC — promisiunea publică de recompensă, recunoașterea unui drept); <b>fapte juridice licite</b> (gestiunea de afaceri, plata nedatorată, îmbogățirea); <b>fapta ilicită</b> (răspunderea delictuală — NCC a renunțat la distincția veche delict/cvasi-delict); <b>legea</b> (obligația de întreținere, garanția legală).',
          'Clasificare după obiect: <b>a da</b> (transferul unui drept real), <b>a face</b> (prestație pozitivă), <b>a nu face</b> (abținere). ⚠️ Obligația de a da ≠ predarea bunului (care e o obligație de a face).',
          '<b>Obligație de rezultat</b>: debitorul se obligă să obțină un rezultat determinat; dacă nu se obține → culpa e <b>prezumată</b> (creditorul nu trebuie să dovedească culpa). <i>Ex: transportatorul obligat să predea marfa la destinație intactă; antreprenorul să predea lucrarea.</i>',
          '<b>Obligație de mijloace</b> (de diligență): debitorul trebuie să depună diligența unui profesionist rezonabil, fără a garanta rezultatul; culpa trebuie <b>dovedită de creditor</b>. <i>Ex: medicul (obligație de îngrijire, nu de vindecare); avocatul (diligent, nu garantează câștigul).</i>',
          '<b>Clasificare după sancțiune</b>: obligații civile (sancționabile prin executare silită) vs. obligații naturale (nu pot fi executate silit, dar executarea voluntară nu e repetibilă — ex: datorie prescrisă, obligații morale).'
        ]
      },
      { icon:'🤲', title:'Gestiunea de afaceri (art. 1330–1340 NCC)',
        items:[
          'Gerantul administrează interesele geratului <b>fără știrea și fără mandatul</b> acestuia, fără a fi obligat prin lege sau contract. ≠ Mandatul (care presupune acordul geratului).',
          '<b>Condiții</b>: geratul absent sau în imposibilitate de a-și administra interesele; gerantul acționează voluntar și cu intenția de a gera; utilitate obiectivă la momentul actului (<b>nu contează rezultatul final</b>).',
          '<b>Obligațiile gerantului</b>: diligența unui bun proprietar (standard mai ridicat față de propriile afaceri); să continue gestiunea până la putința geratului de a prelua; să informeze geratul; să dea socoteală și să predea bunurile administrate.',
          '<b>Obligațiile geratului</b> (art. 1337 NCC): restituie cheltuielile <b>necesare integral</b> + dobânzi din ziua efectuării; cheltuielile <b>utile</b> — numai <b>în limita sporului de valoare</b>; <b>nu datorează cheltuieli voluptuare</b> (de lux, fără utilitate). Trebuie să execute și obligațiile născute din actele necesare și utile încheiate de gerant în numele său.',
          'Gestiunea <b>contrară voinței cunoscute sau prezumate</b> a geratului: gerantul nu poate cere decât restituirea îmbogățirii geratului, în limita îmbogățirii existente la data cererii.',
          '<b>Ratificarea gestiunii</b>: retroactivă — geratul devine mandant; gestiunea produce efectele mandatului de la data actelor de gestiune. Geratul poate ratifica expres sau tacit (acceptarea beneficiilor gestiunii).'
        ]
      },
      { icon:'💸', title:'Plata nedatorată (art. 1341–1344 NCC)',
        items:[
          'Solvensul a executat o prestație pe care <b>nu o datora</b> nimănui sau nu o datora acelui accipiens. ⚠️ Plata nedatorată e un <i>fapt juridic</i> (nu AJC) — nu se cere capacitate deplină la solvens.',
          '<b>Condiții</b> (art. 1341 NCC): existența unei plăți + absența datoriei. ⚠️ <b>Capcană</b>: sub NCC <b>eroarea solvensului NU mai e condiție</b> (era cerută de vechiul cod) — legea prezumă că plata s-a făcut cu intenția de a stinge o datorie proprie (alin. 3). Nu e supus restituirii ce s-a plătit cu titlu de <b>liberalitate</b> sau gestiune de afaceri (alin. 2).',
          'Accipiens <b>de rea-credință</b>: restituie integral + dobânzi de la data plății.',
          'Accipiens <b>de bună-credință care s-a lipsit de titlul</b> său de creanță, a renunțat la garanții sau a lăsat să se prescrie dreptul contra adevăratului debitor (art. 1342 NCC) → <b>exonerat complet</b> de restituire. Solvensul are în schimb <b>regres împotriva adevăratului debitor</b>.',
          'Accipiens de bună-credință care <b>a cheltuit suma</b>: restituire numai în limita îmbogățirii rămase. Accipiens care a înstrăinat bunul: restituie prețul obținut (sau valoarea dacă prețul e inferior).',
          '<b>Prescripție</b>: 3 ani de la data la care solvensul a cunoscut sau trebuia să cunoască lipsa datoriei și persoana accipiensului.'
        ]
      },
      { icon:'⚖️', title:'Îmbogățirea fără justă cauză (art. 1345–1347 NCC)',
        items:[
          '<b>Condiții cumulative</b>: (1) îmbogățirea unui patrimoniu; (2) sărăcirea corelativă a altui patrimoniu; (3) legătură de cauzalitate directă; (4) <b>absența oricărei cauze juste</b> (nu există AJC valabil, liberalitate, obligație legală).',
          '<b>Acțiunea de <i>in rem verso</i></b>: <b>subsidiară</b> — inadmisibilă dacă există altă acțiune la dispoziția reclamantului (contractuală, delictuală, plata nedatorată, gestiunea de afaceri). Nu e o acțiune în răspundere, ci de restituire.',
          '<b>Limita restituirii</b>: <b>minimul</b> dintre valoarea îmbogățirii și valoarea sărăcirii — evaluate la data sesizării instanței (nu a producerii lor). Riscul fluctuațiilor e suportat de îmbogățit.',
          'Nu se aplică dacă îmbogățirea are cauză justă (act juridic valabil, liberalitate, obligație legală) sau dacă sărăcirea rezultă dintr-o culpă proprie a reclamantului.',
          '⚠️ <b>Distincție față de plata nedatorată</b>: la plata nedatorată există o plată; la îmbogățire fără justă cauză nu e neapărat o plată (ex: îmbunătățiri la bunul altuia, îmbogățire din eroare de fapt).'
        ]
      },
      { icon:'🔁', title:'Schemă comparativă: fapte juridice licite',
        items:[
          '<b>Gestiunea</b>: gerant face acte <i>pentru</i> gerat (fără știrea lui). Obligat → geratul (restituie cheltuielile necesare/utile). Condiție specială: utilitate obiectivă.',
          '<b>Plata nedatorată</b>: solvens plătește ceea ce <i>nu datora</i>. Obligat → accipiens (restituire integrală sau limitată, după buna/reaua-credință).',
          '<b>Îmbogățirea fără justă cauză</b>: <i>subsidiară</i> față de celelalte. Restituire = minimul (îmbogățire ↔ sărăcire). Condiție: absența oricărei alte acțiuni.',
          '⚠️ <b>Regula de aur</b>: verifici mai întâi gestiunea → plata nedatorată → în rem verso. Dacă există contract sau delict → nu se aplică niciunul.'
        ]
      },
      { icon:'📢', title:'Obligația de informare și obligații speciale (art. 1182–1185 NCC)',
        items:[
          '<b>Obligația precontractuală de informare</b> (art. 1182 NCC): fiecare parte este obligată să furnizeze celeilalte <b>informațiile esențiale</b> pe care le cunoaște și pe care cealaltă le ignoră și nu are posibilitatea rezonabilă să le afle singură. Se aplică în special în contractele de adeziune, contractele cu consumatorii și contractele cu profesioniști.',
          'Sancțiunile nerespectării obligației de informare: (1) dacă informația ascunsă privea un element esențial → <b>dol prin reticență</b> (art. 1214 NCC) → anulabilitate + daune; (2) dacă informația e relevantă dar nu esențială → <b>răspundere precontractuală</b> (art. 1182 alin. 3) → daune-interese (interesul negativ).',
          '<b>Obligația de confidențialitate</b> (art. 1184 NCC): informațiile confidențiale primite în cursul negocierilor nu pot fi divulgate sau utilizate în alt scop, indiferent dacă s-a ajuns la contract sau nu. Baza: buna-credință în negocieri (art. 1183 NCC).',
          '<b>Obligațiile <i>propter rem</i></b> (reale, ambulatorii): obligații transmise automat împreună cu dreptul real căruia îi sunt accesorii — noul titular al dreptului real preia obligația, indiferent dacă a fost parte la actul juridic. <i>Ex: obligația de întreținere a digurilor, obligația de plată a cotelor de întreținere la condominiu, obligația de replantare în silvicultură.</i>',
          '<b>Obligațiile <i>scriptae in rem</i></b>: obligații care izvorăsc dintr-un contract dar care sunt opozabile terților dobânditori ai bunului, dacă aceștia cunosc existența lor la data dobândirii. ≠ propter rem (care se transmit automat). <i>Ex: locatarul poate opune locațiunea dobânditorului imobilului dacă a fost înscrisă în CF sau dacă dobânditorul a cunoscut-o (art. 1811 NCC).</i>'
        ]
      }
    ],
    grila:'Gestiunea ≠ mandat: la mandat există <b>acordul geratului</b>. Gestiunea contrară voinței geratului → restituire <b>numai în limita îmbogățirii</b>. Îmbogățirea fără justă cauză e <b>subsidiară</b>; limita = <b>minimul</b> dintre îmbogățire și sărăcire. Obligație de rezultat → culpa prezumată; de mijloace → creditorul dovedește culpa. Plata nedatorată = fapt juridic (nu AJC — nu cere capacitate deplină); <b>eroarea NU mai e condiție</b> sub NCC (capcană!). Accipiens de bună-credință care s-a lipsit de titlu: exonerat complet; solvensul are regres contra adevăratului debitor. Cheltuielile geratului: necesare integral, utile în limita sporului (art. 1337).'
  },

  {
    id:'w09', wk:'W09', dates:'24–30 aug', subj:'civ',
    title:'Răspunderea civilă delictuală',
    sections:[
      { icon:'📌', title:'Condiții generale (art. 1349 NCC)',
        items:[
          'Patru condiții cumulative: <b>faptă ilicită</b> + <b>prejudiciu</b> + <b>legătură de cauzalitate</b> + <b>vinovăție</b>.',
          '<b>Fapta ilicită</b>: orice acțiune sau inacțiune care încalcă norma legală sau bunele moravuri. Poate fi comisivă sau omisivă. Exercitarea abuzivă a unui drept subiectiv = faptă ilicită (art. 15 NCC).',
          '<b>Prejudiciul</b>: trebuie să fie cert (actual sau viitor sigur), direct, personal și să rezulte din lezarea unui drept sau interes legitim. Poate fi <b>material</b> (pierdere efectivă + câștig nerealizat) sau <b>moral</b> (suferință psihică, onoare, demnitate). ⚠️ Prejudiciul moral se repară la delict; la contract — numai dacă e previzibil.',
          '<b>Legătura de cauzalitate</b>: aplicăm teoria <b>echivalenței condițiilor</b> (<i>conditio sine qua non</i>) sau teoria cauzei adecvate. La pluralitate de cauze (victimă + autor) → contribuțiile se stabilesc proporțional; răspunderea se reduce.',
          '<b>Vinovăția</b>: intenție (directă: autorul urmărește rezultatul; indirectă: acceptă producerea lui) sau culpă (neglijență/imprudență). Apreciată <i>in abstracto</i> față de omul diligent. ⚠️ La răspunderea obiectivă (lucruri, animale), vinovăția nu e necesară.',
          '<b>Răspundere delictuală vs. contractuală</b>: la delict — răspundere pentru orice prejudiciu (inclusiv moral) + vinovăție apreciată <i>in abstracto</i>; la contract — răspundere limitată la prejudiciile <i>previzibile</i> la momentul contractului (excepție: dol sau culpă gravă). Nu pot coexista pentru același prejudiciu.'
        ]
      },
      { icon:'👨‍👩‍👧', title:'Răspunderea pentru fapta altuia (art. 1372–1374 NCC)',
        items:[
          '<b>Răspunderea pentru minor sau interzis</b> (art. 1372 NCC): răspunde <b>cel obligat la supraveghere</b> în temeiul legii, al unui contract sau al unei hotărâri judecătorești (părinți, tutore, școală, spital). ⚠️ <b>Capcană</b>: NCC <b>nu mai cere</b> condiția „locuiește cu părinții" (era vechiul cod). Răspunderea subzistă chiar dacă făptuitorul, lipsit de discernământ, nu răspunde pentru fapta proprie (alin. 2).',
          '<b>Exonerarea</b> (art. 1372 alin. 3): supraveghetorul scapă doar dovedind că <b>nu a putut împiedica fapta</b>. Pentru <b>părinți/tutori</b> proba e mult mai grea: trebuie să arate că fapta copilului e urmarea <b>altei cauze decât modul de exercitare a autorității părintești</b> — practic o răspundere obiectivă, întemeiată pe garanție.',
          '<b>Răspunderea comitenților pentru prepuși</b> (art. 1373): comitentul răspunde dacă fapta s-a săvârșit în exercitarea <b>funcțiilor încredințate</b>. Prezumție <b>absolută</b> (irefragabilă) — nu poate fi răsturnată. Condiție: raport de subordonare (comitent dă instrucțiuni, controlează).',
          '⚠️ Dacă prepusul a depășit atribuțiile dar victima a crezut că acționează în limitele lor → tot răspunderea comitentului. Comitentul care plătește are <b>acțiune în regres</b> față de prepus.',
          '⚠️ Terminologia veche „institutori și artizani" (vechiul cod) nu mai există: școlile, internatele, taberele răspund azi tot pe art. 1372 — ca <b>persoane obligate prin lege sau contract la supraveghere</b> — pentru elevii/minorii aflați sub supravegherea lor la momentul faptei.',
          'Minorul <b>cu discernământ</b> răspunde personal solidar cu părinții. Minorul <b>fără discernământ</b>: numai părinții/tutorii răspund. Discernământul se evaluează individual, nu după vârstă fixă (sub 14 ani — prezumție relativă de lipsă de discernământ).'
        ]
      },
      { icon:'🔧', title:'Răspunderea pentru lucruri, animale și ruina edificiului',
        items:[
          '<b>Răspunderea pentru lucruri</b> (art. 1376): obiectivă; răspunde <b>paznicul juridic</b> = cel care exercită independent folosința și controlul lucrului. <b>Nu</b> e neapărat proprietarul (ex: locatarul are paza juridică a lucrului închiriat).',
          '<b>Paza juridică ≠ paza materială</b> (art. 1377 NCC): paza aparține celui care exercită <b>în mod independent controlul și supravegherea</b> lucrului. Cel care predă lucrul spre folosință pierde paza în favoarea primitorului. ⚠️ <b>Capcană — bunul furat</b>: <b>hoțul preia paza juridică</b> (exercită control independent) → hoțul răspunde pentru prejudiciile cauzate de lucru, nu proprietarul deposedat.',
          '<b>Răspunderea pentru animale</b> (art. 1375): obiectivă; răspunde proprietarul sau cel care <b>se folosea de animal</b> la momentul prejudiciului. Se include și animalul scăpat sau pierdut (momentul prejudiciului contează).',
          '<b>Ruina edificiului</b> (art. 1378): obiectivă; răspunde <b>proprietarul</b> (chiar neposesor), dar <b>numai dacă</b> ruina e urmarea <b>lipsei de întreținere sau a unui viciu de construcție</b> — condiție esențială, frecvent testată. „Edificiu" = construcție legată durabil de sol. Ruina = dezagregarea/prăbușirea parțială sau totală.',
          '<b>Activitățile periculoase</b>: nu au un text general propriu în NCC — intră de regulă sub răspunderea pentru <b>lucruri</b> (art. 1376, care acoperă expres și coliziunea vehiculelor) sau sub <b>legi speciale</b> (daune nucleare, mediu). Exonerare la răspunderea obiectivă: numai forța majoră sau fapta exclusivă a victimei/terțului.'
        ]
      },
      { icon:'🛡️', title:'Cauze exoneratoare de răspundere',
        items:[
          '<b>Forța majoră</b> (art. 1351 NCC): eveniment <b>extern, imprevizibil, absolut insurmontabil și irezistibil</b> → exonerează la <i>orice</i> tip de răspundere (subiectivă și obiectivă). <i>Ex: cutremur devastator, inundații catastrofale.</i>',
          '<b>Cazul fortuit</b>: eveniment intern sau propriu sferei de activitate a debitorului; imprevizibil pentru acel debitor. Exonerează <b>numai</b> la răspunderea subiectivă; <b>nu</b> exonerează la răspunderea obiectivă (lucruri, animale, ruina edificiului, activități periculoase).',
          '<b>Fapta victimei</b>: reduce/înlătură răspunderea proporțional cu contribuția cauzală. Dacă victima e singura cauză → exonerare totală; dacă e o concauză → reducerea despăgubirii.',
          '<b>Fapta unui terț</b>: exonerează dacă este <b>cauza exclusivă</b> a prejudiciului (de ex: terțul a săvârșit o infracțiune față de victimă, fără implicarea pârâtului). Dacă e concauză → răspundere solidară.',
          '<b>Consimțământul victimei</b> (<i>volenti non fit iniuria</i>): exonerează dacă e informat, liber și privitor la un prejudiciu patrimonial. <b>Nu exonerează</b> pentru vătămări corporale grave sau moarte (ordinea publică).'
        ]
      },
      { icon:'🧪', title:'Răspunderea pentru produse cu defect (Legea 240/2004)',
        items:[
          '<b>Cadru legal</b>: Legea 240/2004 (transpunere Dir. 85/374/CEE) — răspundere <b>obiectivă</b> a producătorului pentru prejudiciile cauzate de defectele produselor sale. Nu se cere dovedirea culpei.',
          '<b>„Produs"</b>: orice bun mobil industrial, inclusiv produsele primare (agricole, piscicole) după 1999. Electricitatea = produs. Imobilele = excluse.',
          '<b>„Defect"</b>: produsul nu oferă siguranța la care consumatorul se poate aștepta în mod legitim, ținând cont de prezentare, utilizare normală, momentul punerii în circulație. ⚠️ Un produs nou și mai sigur apărut pe piață nu face automat defect produsul vechi.',
          '<b>Persoane responsabile</b>: (1) <b>producătorul</b> (fabricant al produsului finit sau al materiei prime); (2) <b>importatorul</b> în UE; (3) orice furnizor care nu identifică producătorul în 30 de zile la cererea victimei.',
          '<b>Cauze de exonerare</b> (art. 7 L. 240/2004): produsul nu a fost pus în circulație de producător; defectul nu exista la data punerii în circulație; produsul nu e destinat distribuției comerciale; defectul se datorează conformității cu reglementări imperative; <b>riscul de dezvoltare</b> (defectul nu putea fi cunoscut prin stadiul tehnicii la data punerii în circulație — cauza de exonerare controversată în dreptul farmaceutic).',
          '<b>Prescripție</b>: 3 ani de la data la care reclamantul a cunoscut sau trebuia să cunoască prejudiciul, defectul și identitatea producătorului. Termen de decădere absolut: <b>10 ani</b> de la data punerii produsului în circulație.'
        ]
      },
      { icon:'📊', title:'Daune moratorii vs. daune compensatorii',
        items:[
          '<b>Daune-interese compensatorii</b>: înlocuiesc executarea în natură a obligației (când executarea e imposibilă sau refuzată). Cuprind: <b>damnum emergens</b> (pierderea efectivă suferită) + <b>lucrum cessans</b> (beneficiul nerealizat). Se stabilesc la momentul pronunțării hotărârii (valori actuale).',
          '<b>Daune-interese moratorii</b>: sancțiune pentru <b>întârzierea</b> în executare; nu înlocuiesc obligația principală (executarea în natură rămâne posibilă și datorată). Exemple: dobânda legală (<b>OG 13/2011</b>); penalitățile de întârziere din Legea 72/2013 (plăți între profesioniști); penalitățile de întârziere contractuale.',
          '⚠️ <b>Cumulul</b>: daune moratorii se pot cumula cu executarea silită în natură sau cu daune compensatorii (pentru că mora și neexecutarea sunt prejudicii distincte). Clauza penală moratorie = evaluare anticipată a daunelor de întârziere.',
          '<b>La obligații bănești</b>: creditorul e de drept îndreptățit la dobânzi moratorii (art. 1535 NCC) fără a proba un prejudiciu efectiv — dobânda curge automat de la scadență. La obligații ne-bănești → punerea în întârziere e necesară.'
        ]
      }
    ],
    grila:'Comitent: nu se exonerează prin lipsa culpei (garanție); scapă doar dacă victima știa că prepusul acționa în afara funcțiilor (art. 1373 al.3). Părinți (art. 1372): <b>fără</b> condiția locuinței comune (capcană — vechiul cod); exonerare doar dovedind altă cauză decât exercitarea autorității părintești. La răspunderea obiectivă (lucruri, animale, ruina): <b>cazul fortuit nu exonerează</b> — numai forța majoră. Paza juridică: <b>hoțul o preia</b> — el răspunde, nu proprietarul deposedat. Ruina edificiului: doar din <b>lipsă de întreținere sau viciu de construcție</b>. Prejudiciu moral: reparat la delict; la contract — numai previzibil. Forța majoră: extern + imprevizibil + irezistibil. Produse cu defect: răspundere obiectivă, prescripție 3 ani / decădere 10 ani, riscul de dezvoltare exonerează. Daune compensatorii (înlocuiesc executarea) ≠ moratorii (sancționează întârzierea, cumulabile cu executarea).'
  },

  {
    id:'w10', wk:'W10', dates:'31 aug–6 sep', subj:'civ',
    title:'Executarea, plata, solidaritatea + protecția creditorului',
    sections:[
      { icon:'💳', title:'Plata (art. 1469–1515 NCC)',
        items:[
          '<b>Cine poate plăti</b>: oricine, inclusiv un terț (excepție: obligații <i>intuitu personae</i> — numai debitorul). Terțul care plătește poate fi subrogat în drepturile creditorului.',
          '<b>Cui se plătește</b>: creditorului sau reprezentantului legal/convențional; plata unui terț neautorizat e invalidă (excepție: creditorul o ratifică sau a profitat de ea — art. 1477 NCC).',
          '<b>Locul plății</b> (art. 1494 NCC): obligațiile <b>bănești</b> — la domiciliul/sediul <b>creditorului</b> de la data plății (plată <b>portabilă</b> — ⚠️ capcană: schimbare față de vechiul cod!); predarea unui <b>bun individual determinat</b> — la locul unde se afla bunul la încheierea contractului; <b>celelalte obligații</b> — la domiciliul/sediul <b>debitorului</b> (plată <b>cherabilă</b> — regula reziduală).',
          '<b>Principiul integrității plății</b>: creditorul nu poate fi forțat să accepte plăți parțiale, chiar dacă datoria e divizibilă. Excepție: acordul creditorului sau prevedere legală.',
          '<b>Imputația plăților</b> (art. 1506–1509 NCC): debitorul cu mai multe datorii față de același creditor indică la ce se impută; în cadrul unei datorii: întâi <b>cheltuieli → dobânzi → capital</b> (art. 1507). Imputația legală (art. 1509): mai întâi datoriile <b>scadente</b>, dintre ele cele negarantate/cele mai oneroase, apoi cea mai <b>veche</b>.',
          '<b>Oferta reală + consemnațiune</b> (art. 1510–1515 NCC): dacă creditorul refuză nejustificat plata, debitorul consemnează suma la o instituție de credit și e liberat de la data consemnării.'
        ]
      },
      { icon:'🔗', title:'Solidaritatea și indivizibilitatea (art. 1434–1468 NCC)',
        items:[
          '<b>Solidaritate activă</b>: oricare creditor poate pretinde integral creanța; debitorul se liberează plătind oricăruia. Repartizarea internă → în raport de cotele fiecărui creditor.',
          '<b>Solidaritate pasivă</b>: creditorul urmărește integral pe oricare debitor solidar; cel care plătește are <b>regres</b> față de codebitori pentru cota parte a fiecăruia. Dacă un codebitor e insolvabil, diferența se suportă proporțional de ceilalți.',
          'Solidaritate pasivă: <b>nu se prezumă</b> — trebuie să rezulte expres din lege sau contract. ⚠️ La raporturi comerciale (între profesioniști), solidaritatea e prezumată.',
          'Excepțiile <b>personale</b> (incapacitate, compensație proprie) pot fi invocate numai de cel care le deține; excepțiile <b>comune</b> (nulitate, remitere) pot fi invocate de oricare codebitor.',
          '<b>Indivizibilitatea</b> ≠ solidaritate: la indivizibilitate, prestația nu poate fi executată fracționat prin natura sa sau prin convenție (ex: predarea unui imobil). La solidaritate, obligația poate fi divizibilă dar legea/voința o face solidară. Ambele permit urmărirea integrală.'
        ]
      },
      { icon:'🔄', title:'Novația și subrogarea (art. 1593–1614 NCC)',
        items:[
          '<b>Novația</b> (art. 1609 NCC): stingerea unei obligații vechi prin crearea uneia noi. Tipuri: obiectivă (se schimbă obiectul sau cauza), subiectivă (se schimbă creditorul sau debitorul — delegație perfectă). ⚠️ Nu se prezumă — trebuie să rezulte indubitabil.',
          'Efectul novației: obligația veche se stinge (inclusiv garanțiile accesoare) dacă nu se stipulează expres menținerea lor. Creanța nouă e fără garanțiile celei vechi.',
          '<b>Subrogarea</b> (art. 1593 NCC): terțul care plătește datoria altuia se subrogă în drepturile creditorului față de debitor (dobândește creanța cu toate accesoriile).',
          '<b>Subrogare legală</b> (art. 1596 NCC): de drept — fidejusorul care plătește, cel care plătește o datorie garantată cu ipotecă pe propriul bun, moștenitorul care plătește un legat.',
          '<b>Subrogare convențională</b>: prin acordul creditorului cu terțul plătitor (la data plății, în actul de plată) sau prin acordul debitorului cu terțul (împrumut pentru plată, cu subrogare).'
        ]
      },
      { icon:'🔍', title:'Acțiunea oblică și acțiunea pauliană',
        items:[
          '<b>Acțiunea oblică</b> (art. 1560 NCC): creditorul exercită drepturile debitorului <b>neglijent</b> care nu-și valorifică drepturile (ex: nu acceptă moștenirea). Condiții: creanță certă, lichidă, exigibilă; debitorul neglijent; prejudiciu prin pasivitate.',
          'Efectele oblicei revin <b>patrimoniului debitorului</b> (nu direct creditorului); alți creditori pot concura. ⚠️ Nu e o acțiune directă — creditorul nu poate reține suma.',
          '<b>Acțiunea pauliană (revocatorie)</b> (art. 1562 NCC): atacă actele frauduloase prin care debitorul și-a creat/agravat insolvabilitatea în dauna creditorului.',
          'Condiții pauliană: (1) creanță certă (sau supusă judecății), de regulă anterioară actului; (2) prejudiciul creditorului (act care generează/agravează insolvabilitatea); (3) <i>consilium fraudis</i> — la debitor (cunoașterea prejudicierii); la terț cu titlu oneros — cunoașterea stării de insolvabilitate.',
          'Efectele pauliene: actul nu e nul — e <b>inopozabil</b> față de creditorul reclamant (numai față de el, în limita creanței). Terțul cu titlu <b>gratuit</b>: inopozabilitate indiferent de buna credință. Terțul cu titlu <b>oneros de bună-credință</b>: protejat, acțiunea respinsă.',
          'Prescripție acțiune pauliană: <b>1 an</b> de la data la care creditorul a cunoscut sau trebuia să cunoască prejudiciul rezultat din act (art. 1564 NCC).'
        ]
      },
      { icon:'🚫', title:'Excepția de neexecutare, rezoluțiunea și dreptul de retenție',
        items:[
          '<b>Excepția de neexecutare</b> (<i>exceptio non adimpleti contractus</i>, art. 1556 NCC): debitorul dintr-un contract sinalagmatic poate refuza executarea propriei obligații dacă cealaltă parte nu și-a executat-o. Condiții: contract sinalagmatic; obligațiile trebuie să fie <b>cu executare simultană</b>; neexecutarea celeilalte părți să fie suficient de importantă. Efect: suspendă obligația, nu desființează contractul.',
          '<b>Rezoluțiunea</b> (art. 1549 NCC): desființarea retroactivă a contractului sinalagmatic pentru neexecutare culpabilă a uneia din obligațiile esențiale. Efect: <i>ex tunc</i> (retroactiv), restituirea prestațiilor. La alegerea creditorului: rezoluțiune judiciară (prin instanță) sau extrajudiciară (notificare de rezoluțiune cu termen de grație — art. 1552 NCC).',
          '<b>Rezilierea</b> (art. 1549 alin. 2 NCC): desființarea contractelor cu executare succesivă <b>numai pentru viitor</b> (<i>ex nunc</i>). ⚠️ Rezoluțiunea = efecte retroactive (ex tunc); rezilierea = efecte numai pentru viitor (ex nunc).',
          '<b>Pactul comisoriu</b> (art. 1553 NCC): clauza prin care rezoluțiunea/rezilierea operează <b>de drept</b> la neexecutare. Condiție de valabilitate: indicarea <b>expresă</b> a obligațiilor a căror neexecutare o atrage. Punerea în întârziere e necesară, <i>afară de cazul</i> în care s-a convenit că rezoluțiunea rezultă din <b>simplul fapt al neexecutării</b>. ⚠️ <b>Capcană</b>: clasificarea „pacte de gradul I–IV" e doctrina <b>vechiului cod</b> — NCC nu o mai folosește.',
          '<b>Dreptul de retenție</b> (art. 2495 NCC): creditorul care deține un bun al debitorului poate refuza restituirea lui până la plata integrală a cheltuielilor făcute cu conservarea sau îmbunătățirea bunului. ⚠️ Nu conferă drept de urmărire sau de preferință. Opozabil terților <b>fără nicio formalitate de publicitate</b> (art. 2498 NCC), dar retentorul <b>nu se poate opune urmăririi silite</b> pornite de alt creditor — participă doar la distribuirea prețului.'
        ]
      },
      { icon:'💸', title:'Daune-interese la neexecutare contractuală (art. 1530–1543 NCC)',
        items:[
          '<b>Condiții pentru daune-interese contractuale</b> (art. 1530 NCC): neexecutarea (totală, parțială sau tardivă) + prejudiciu + legătură de cauzalitate + culpa debitorului + <b>punerea în întârziere</b> (cu excepția cazului când debitorul e de drept în întârziere).',
          '<b>Punerea în întârziere</b> (art. 1521–1523 NCC): prin <b>notificare scrisă</b> cu termen de grație rezonabil. Debitorul e de drept în întârziere fără notificare la: (a) obligații cu termen esențial; (b) obligații delictuale; (c) bunuri perisabile; (d) debitorul a declarat că nu va executa; (e) plata trebuia făcută la sediul creditorului (datorie portabilă) și a trecut termenul.',
          '<b>Daune-interese compensatorii</b> (art. 1530 NCC): înlocuiesc executarea în natură (imposibilă sau refuzată cu rea-credință). Cuprind: prejudiciul efectiv (damnum emergens) + beneficiul nerealizat (lucrum cessans). Limitate la prejudiciul <b>previzibil</b> la data contractului (excepție: dol sau culpă gravă → tot prejudiciul).',
          '<b>Daune-interese moratorii</b>: sancțiune pentru executarea tardivă; nu înlocuiesc obligația (care trebuie executată în natură). La obligații bănești: dobânda legală curge de drept de la scadență, fără proba unui prejudiciu (art. 1535 NCC). La alte obligații: curg de la punerea în întârziere.',
          '⚠️ <b>Interdicția dublei reparații</b>: dacă creditorul obține executarea silită în natură, poate cumula daune moratorii (pentru întârziere) dar NU daune compensatorii (care ar reprezenta o dublă compensare). Clauza penală acoperă integral sau parțial daunele — dacă e moratorie, se cumulează; dacă e compensatorie, exclude dovada prejudiciului.',
          '<b>Evaluarea judiciară a daunelor</b> (art. 1532 NCC): instanța evaluează prejudiciul actual + viitor cert; nu acordă prejudicii eventuale. Cheltuielile de judecată pentru executarea creanței principale sunt incluse în prejudiciul reparabil.'
        ]
      }
    ],
    grila:'Locul plății (art. 1494): obligații <b>bănești → domiciliul creditorului</b> (portabile — capcană NCC!); restul → domiciliul debitorului (cherabile). Principiul integrității plății: creditorul NU poate fi forțat la plăți parțiale. Pact comisoriu: cere indicarea expresă a obligațiilor; „gradele I–IV" = vechiul cod. Acțiunea oblică: efectele revin patrimoniului debitorului (<b>nu direct creditorului</b>). Pauliana: act <b>inopozabil</b> față de creditor (nu nul), prescripție <b>1 an</b>; terțul oneros de bună-credință e protejat. Solidaritate pasivă <b>nu se prezumă</b>. <b>Exceptio non adimpleti contractus</b>: suspendă propria obligație la neexecutarea celuilalt. <b>Rezoluțiune</b> (ex tunc) ≠ <b>Reziliere</b> (ex nunc). Dreptul de retenție ≠ garanție reală: nu dă preferință la distribuție. Daune compensatorii (înlocuiesc executarea) ≠ moratorii (sancționează tardivitatea, cumulabile cu executarea). Punere în întârziere: notificare scrisă; de drept la termen esențial, delict, perisabile, declarație de neexecutare.'
  },

  {
    id:'w11', wk:'W11', dates:'7–13 sep', subj:'civ',
    title:'Transmiterea, stingerea obligațiilor + Simulația',
    sections:[
      { icon:'↔️', title:'Cesiunea de creanță, preluarea datoriei, cesiunea de contract',
        items:[
          '<b>Cesiunea de creanță</b> (art. 1566 NCC): cedentul transmite creanța cesionarului; <b>acordul debitorului cedat NU e necesar</b>, dar notificarea/acceptarea e necesară pentru opozabilitate față de el.',
          'Opozabilitate față de <b>debitorul cedat</b>: de la notificare sau acceptare → debitorul plătește valabil numai cesionarului. Opozabilitate față de <b>terți</b>: de la data înscrierii în RNPM sau notificării debitorului.',
          'Cedentul garantează <b>existența creanței</b> la cesiune; <b>nu garantează solvabilitatea</b> debitorului (excepție: stipulație expresă). Debitorul poate opune cesionarului toate excepțiile opozabile cedentului.',
          '<b>Preluarea datoriei</b> (art. 1599–1608 NCC): prin contract <b>debitor–terț</b> (produce efecte față de creditor numai cu <b>acordul creditorului</b> — art. 1605) sau prin contract <b>creditor–terț</b>. Fără acordul creditorului, contractul debitor–terț produce efecte <b>doar între ei</b>: terțul e ținut să-l libereze pe debitor executând la timp (art. 1608) — creditorul <b>nu dobândește drept direct</b> contra terțului. Debitorul inițial e liberat doar prin acordul creditorului; dacă terțul era insolvabil la preluare, debitorul nu e liberat (art. 1601).',
          '<b>Cesiunea de contract</b> (art. 1315–1320 NCC): transmiterea calității de parte contractantă (drepturi + obligații). <b>Necesită acordul cocontractantului cedat</b>. ⚠️ <b>Capcană</b> (art. 1318): regula e că cedentul <b>este liberat</b> din momentul în care substituirea produce efecte față de cedat; doar dacă cedatul <b>declară că nu-l liberează</b>, se poate întoarce împotriva cedentului când cesionarul nu execută.'
        ]
      },
      { icon:'🔄', title:'Stingerea obligațiilor',
        items:[
          '<b>Compensația legală</b> (art. 1617 NCC): stingerea de drept a două datorii reciproce, <b>certe, lichide și exigibile</b>, de aceeași natură, între aceleași persoane. Operează de drept (nu necesită declarație). Creanțele nesusceptibile de compensație: creanțele alimentare, creanțele insesizabile, creanțele din delict intenționat.',
          'Compensația cu o creanță prescrisă: posibilă dacă la data la care ambele datorii puteau fi compensate, prescripția nu intervenise. <b>Compensația judiciară</b>: stabilită de instanță când nu sunt îndeplinite condițiile compensației legale.',
          '<b>Confuziunea</b> (art. 1624 NCC): creditorul devine debitorul aceleiași obligații (prin moștenire sau cesiune). Obligația principală se stinge → se sting și fidejusiunea și ipoteca (accesoriile urmează principalul).',
          '<b>Remiterea de datorie</b> (art. 1629 NCC): renunțare voluntară a creditorului la creanță; expresă sau tacită (restituirea titlului de creanță, ștergerea creanței din registre). Stinge și garanțiile reale accesoare.',
          '<b>Imposibilitate fortuită</b> (art. 1634 NCC): datoria se stinge dacă executarea a devenit imposibilă din cauză de forță majoră/caz fortuit, fără culpa debitorului. ⚠️ În contractele translative, riscul rămâne la <b>debitorul obligației de predare</b> cât timp bunul nu e predat, chiar dacă proprietatea s-a transferat (art. 1274 — <i>res perit debitori</i>).',
          '<b>Darea în plată</b> (art. 1492 NCC): creditorul acceptă o altă prestație decât cea datorată; produce efectele plății de la data acceptării. ⚠️ Legea 77/2016 (darea în plată la credite ipotecare) — mecanism special, diferit de darea în plată de drept comun.'
        ]
      },
      { icon:'🎭', title:'Simulația — efecte practice (art. 1289–1294 NCC)',
        items:[
          'Existența concomitentă a unui act aparent (public) și a unui contraînscris (secret) care modifică sau desființează actul aparent.',
          '<b>Scopuri frecvente</b>: (1) ascunderea prețului real al vânzării pentru a reduce impozitele; (2) deghizarea unei donații ca vânzare; (3) simularea insolvabilității pentru a frauda creditorii; (4) interpunere de persoane (pentru a ocoli o incapacitate — ex: medic prin terț).',
          '<b>Efecte între părți</b>: actul secret prevalează (dacă e valabil). Dacă actul secret e nul → actul public produce efecte.',
          '<b>Efecte față de terții de bună-credință</b>: pot invoca fie actul aparent, fie cel secret — la alegere. ⚠️ Terții de bună-credință care s-au bazat pe actul aparent sunt protejați chiar dacă actul secret arată altceva.',
          'Simulația în frauda legii sau a terților: contraînscrisul e inopozabil terților prejudiciați; ei pot cere constatarea simulației.',
          '<b>Acțiunea în simulație</b>: acțiune în <b>constatare</b> → <b>imprescriptibilă</b>, atât între părți, cât și față de terți (se prescriu doar acțiunile subsecvente întemeiate pe actul secret). <b>Proba</b>: terții — prin <b>orice mijloc</b> (martori, prezumții); părțile — de regulă numai prin <b>contraînscris</b>, cu excepția fraudei (atunci orice mijloc).'
        ]
      },
      { icon:'🔀', title:'Delegația (doctrină — NCC nu o mai reglementează expres)',
        items:[
          '⚠️ <b>Atenție</b>: NCC <b>nu mai reglementează delegația</b> ca instituție distinctă (era în doctrina vechiului cod) — funcțiile ei sunt îndeplinite azi de <b>novația prin schimbare de debitor</b> (art. 1609 alin. 2) și de <b>preluarea datoriei</b> (art. 1599–1608). Conceptele rămân însă folosite doctrinar și pot apărea în grile.',
          '<b>Noțiune</b>: operațiune prin care un debitor (delegant) desemnează un terț (delegat) să execute față de creditorul (delegatar) o obligație — înlocuind debitorul original sau adăugând un nou debitor.',
          '<b>Delegația perfectă</b> (≈ novație prin schimbare de debitor): creditorul declară expres că îl liberează pe delegant și îl acceptă pe delegat ca unic debitor. Efecte: (1) obligația veche a delegantului se <b>stinge</b>; (2) delegatarul nu mai poate urmări delegantul; (3) garanțiile obligației vechi se sting, dacă nu se stipulează altfel. ⚠️ Liberarea delegantului trebuie să fie expresă (nu se prezumă).',
          '<b>Delegația imperfectă</b>: creditorul acceptă pe delegat ca debitor suplimentar, fără a-l libera pe delegant. Efecte: delegatarul are doi debitori (delegant + delegat). ⚠️ Delegantul rămâne ținut și poate fi urmărit.',
          '<b>Distincție față de fidejusiune</b>: la fidejusiune, fidejusorul garantează o datorie a altuia (are beneficiul de discuțiune); la delegație imperfectă, delegatul devine debitor principal, nu fidejusor (nu poate invoca beneficiul de discuțiune dacă s-a obligat în mod direct față de delegatar).',
          '<b>Distincție față de novație</b>: novația e mai largă (poate schimba orice element al obligației); delegația perfectă e un tip specific de novație subiectivă prin schimb de debitor.'
        ]
      }
    ],
    grila:'Cesiunea de creanță: <b>nu necesită acordul debitorului</b> (ci notificarea). Preluarea datoriei: <b>necesită acordul creditorului</b>. Cesiunea de contract: necesită acordul <b>cocontractantului cedat</b>. Compensația legală: certe + lichide + exigibile + aceeași natură. Confuziunea: stinge și garanțiile accesorii. Cesiune de contract: cedentul e <b>liberat</b> (regula); rămâne ținut doar dacă cedatul declară că nu-l liberează (art. 1318 — capcană!). Simulație: între părți prevalează <b>actul secret</b>; terții de bună-credință aleg; acțiunea în simulație = <b>imprescriptibilă</b> (și între părți). Delegația: nereglementată de NCC — azi novație prin schimbare de debitor + preluarea datoriei. Delegație perfectă: liberează delegantul (expres!), stinge garanțiile vechi. Delegație imperfectă: doi debitori, delegantul rămâne ținut.'
  },

  {
    id:'w12', wk:'W12', dates:'14–20 sep', subj:'civ',
    title:'Vânzarea și Donația',
    sections:[
      { icon:'🛒', title:'Contractul de vânzare-cumpărare — esențiale (art. 1650–1762 NCC)',
        items:[
          '<b>Caractere</b>: sinalagmatic, cu titlu oneros, comutativ (de regulă), consensual (de regulă), <b>translativ de proprietate</b>.',
          '<b>Transferul proprietății</b>: la perfectarea contractului pentru bunuri <b>certe</b>. Excepții: bunuri de gen (la individualizare); bunuri viitoare (la existență + individualizare); rezerva proprietății (la plata integrală a prețului — art. 1684 NCC).',
          '⚠️ <b>Capcană — riscul în contractele translative</b> (art. 1274 NCC): cât timp bunul <b>nu este predat</b>, riscul rămâne la <b>debitorul obligației de predare</b> (vânzătorul), <b>chiar dacă proprietatea s-a transferat</b> cumpărătorului (<i>res perit debitori</i> — NCC a răsturnat vechiul <i>res perit domino</i>!). Excepție: creditorul <b>pus în întârziere</b> cu preluarea preia riscul și nu se poate libera nici dovedind că bunul ar fi pierit și la el.',
          '<b>Obligațiile vânzătorului</b>: (1) predarea bunului în stare corespunzătoare; (2) transferul proprietății; (3) garanția pentru evicțiune; (4) garanția pentru vicii ascunse.',
          '<b>Obligațiile cumpărătorului</b>: (1) plata prețului la termenul și locul convenite; (2) preluarea bunului. Neplata prețului → rezoluțiune sau executare silită.',
          '⚠️ <b>Capcană — vânzarea bunului altuia</b> (art. 1683 NCC): contractul este <b>VALABIL</b> (nu anulabil, cum era sub vechiul cod!) — vânzătorul e obligat să asigure transmiterea proprietății (dobândind bunul ori obținând ratificarea proprietarului). Dacă nu reușește → cumpărătorul poate cere <b>rezoluțiunea + daune-interese</b> (și restituirea prețului); proprietatea se transmite automat în momentul în care vânzătorul o dobândește.',
          '<b>Vânzarea cu drept de răscumpărare</b> (art. 1758 NCC): vânzătorul poate răscumpăra bunul în termenul stipulat (max <b>5 ani</b>). Terțul dobânditor cu titlu oneros, în CF, nu poate fi obligat să restituie dacă termenul nu era înscris.'
        ]
      },
      { icon:'⚠️', title:'Garanțiile vânzătorului (evicțiune + vicii)',
        items:[
          '<b>Garanția pentru evicțiune</b> (art. 1695–1718 NCC): vânzătorul garantează că cumpărătorul nu va fi tulburat în exercitarea dreptului. <b>Prin fapta proprie</b>: clauza de exonerare = nulă absolut. <b>Prin fapta terților</b>: clauza de exonerare e valabilă dacă e expresă.',
          'Evicțiune <b>totală</b>: rezoluțiunea + restituirea prețului integral (chiar dacă bunul a scăzut în valoare) + daune-interese. Evicțiune <b>parțială</b>: reducerea prețului proporțional + daune.',
          '<b>Condițiile viciilor ascunse</b> (art. 1707–1715 NCC): (1) viciu existent la data vânzării; (2) ascuns (nu detectabil la o inspecție atentă de nespecialist); (3) reduce substanțial utilitatea sau valoarea; (4) cumpărătorul nu l-a cunoscut.',
          'Vânzător <b>de bună-credință</b>: restituirea prețului + cheltuieli aferente; <b>nu datorează daune</b> (dacă nu și le-a asumat). Vânzător <b>de rea-credință</b>: restituire + <b>daune-interese</b>.',
          'Remedii la dispoziție: (1) reducerea prețului; (2) rezoluțiune; (3) înlocuirea bunului (dacă e fungibil). Instanța poate ordona remedierea viciului dacă e posibilă.',
          '<b>Denunțare și prescripție</b>: viciile <b>aparente</b> se denunță <b>imediat, la preluare</b> (art. 1690) — altfel se consideră acceptate. Viciile <b>ascunse</b> se aduc la cunoștința vânzătorului într-un <b>termen rezonabil</b> de la descoperire (art. 1709; decăderea nu operează dacă vânzătorul e de rea-credință). Prescripția: <b>3 ani</b>; începe să curgă cel târziu de la împlinirea <b>unui an de la predare</b> (3 ani la construcții), dacă viciul nu a fost descoperit mai devreme (art. 2531).'
        ]
      },
      { icon:'🎁', title:'Contractul de donație (art. 1011–1056 NCC)',
        items:[
          '<b>Caractere</b>: unilateral (numai donatarul are obligații dacă există sarcini), cu titlu gratuit (liberalitate), solemn, irevocabil.',
          '<b>Formă</b>: <b>act autentic notarial</b> <i>ad validitatem</i> (art. 1011). Excepții (alin. 2 și 4): <b>darul manual</b> — doar bunuri mobile corporale cu valoare de <b>până la 25.000 lei</b>, prin remitere efectivă; <b>donația indirectă</b>; <b>donația deghizată</b> (sub aparența unui act oneros).',
          '<b>Principiul irevocabilității speciale</b>: sunt nule clauzele de revocare voluntară, condiția pur potestativă din partea donatorului, obligația de a plăti datoriile viitoare nedeterminate. ⚠️ Excepție: <b>donația între soți</b> (art. 1031 NCC) — revocabilă <b>numai în timpul căsătoriei</b>; după desfacerea căsătoriei devine irevocabilă.',
          '<b>Clauza de reîntoarcere convențională</b> (art. 1016 NCC): bunul revine donatorului dacă donatarul moare înainte sau fără descendenți. Valabilă și opozabilă terților prin publicitate.',
          '<b>Cauzele legale de revocare</b> (art. 1020 NCC) — doar <b>două</b>: (1) <b>neexecutarea sarcinii</b> (revocare sau executare silită, la alegere); (2) <b>ingratitudinea</b> (atentat la viața donatorului/apropiaților, fapte penale/cruzimi/injurii grave, refuz nejustificat de alimente — art. 1023) — acțiune în <b>1 an</b> de la cunoașterea faptei. ⚠️ <b>Capcană</b>: „survenirea de copil" NU mai e cauză legală de revocare sub NCC (era în vechiul cod) — posibilă doar dacă s-a stipulat expres ca o condiție rezolutorie.',
          '<b>Reducțiunea liberalităților excesive</b> (art. 1096 NCC): dacă s-a depășit cotitatea disponibilă, rezervatarii cer reducțiunea în ordinea: mai întâi <b>legatele</b> (toate deodată și proporțional), apoi <b>donațiile</b>, de la cea mai <b>nouă</b> spre cea mai veche (ordinea inversă a datei lor).'
        ]
      },
      { icon:'🌾', title:'Preemțiunea la terenuri agricole — Legea 17/2014',
        items:[
          '<b>Domeniu de aplicare</b>: înstrăinarea prin vânzare a <b>terenurilor agricole situate în extravilan</b>. Nu se aplică la schimb, donație, aport la capital social sau la înstrăinările între coproprietari/rude până la gradul al III-lea.',
          '<b>Ordinea de preferință</b> (art. 4 L. 17/2014, forma actuală după L. 175/2020) — <b>7 ranguri</b>: (1) coproprietari, soț, rude și afini până la gradul III; (2) proprietarii investițiilor agricole și <b>arendașii</b>; (3) proprietarii/arendașii terenurilor <b>vecine</b>; (4) tinerii fermieri; (5) Academia de Științe Agricole + institutele de cercetare; (6) persoane fizice cu domiciliul în UAT; (7) <b>statul român</b>. Ordinea e imperativă. (Formula scurtă clasică din grile: coproprietari → arendași → vecini → stat.)',
          '<b>Procedura</b>: vânzătorul depune la primărie cererea de afișare a ofertei; primăria o afișează <b>45 de zile lucrătoare</b> (termen majorat prin L. 175/2020 — vechiul termen de 30 de zile poate apărea în grile mai vechi), interval în care preemptorii își manifestă intenția de cumpărare.',
          '<b>Sancțiunea nerespectării</b>: vânzarea încheiată cu eludarea preemțiunii = <b>nulitate absolută</b> (art. 16). ⚠️ Deosebire esențială față de dreptul comun (art. 1730–1733 NCC), unde vânzarea către terț e valabilă sub <b>condiția suspensivă</b> a neexercitării preempțiunii, iar exercitarea duce la considerarea contractului ca încheiat cu preemptorul.',
          '<b>Rolul statului</b>: intervenția statului ca preemptor de ultim rang vizează menținerea bunurilor agricole în circuitul agricol și limitarea fragmentării terenurilor. Statul plătește prețul pieței stabilit prin expertiză, nu prețul din ofertă dacă acesta e mai mare.'
        ]
      },
      { icon:'🙏', title:'Donația remuneratorie și donația cu sarcini',
        items:[
          '<b>Donația remuneratorie</b>: donație făcută în semn de recunoștință pentru un serviciu anterior prestat de donatar (dar pentru care donatarul nu are drept legal la remunerație). ⚠️ Nu e o plată (serviciul a fost prestat benevol), ci o donație — supusă formei solemne (act notarial) și regulilor donației (inclusiv rezervei succesorale).',
          'Regim juridic: supusă acelorași reguli ca donația obișnuită — solemnitate, irevocabilitate specială; nu e supusă raportului în măsura în care nu depășește valoarea serviciilor prestate. <b>Nu e contract oneros</b> deoarece serviciul prestat nu constituie o contraprestație în sens contractual (a fost prestat fără obligație).',
          '<b>Donația cu sarcini</b> (sub modo): donatarul e obligat să execute o prestație în favoarea donatorului, a unui terț sau de utilitate publică. Sarcina poate transforma parțial donația într-un act oneros (în limita valorii sarcinii — aplicabile regulile de vânzare pentru acea parte).',
          'Neexecutarea sarcinii: (1) executare silită; sau (2) revocare judiciară la cererea donatorului sau creditorului; (3) termenul de grație + punere în întârziere sunt necesare înainte de a cere revocarea. ⚠️ Revocarea pentru neexecutare de sarcini ≠ revocare pentru ingratitudine (regimuri și termene diferite).'
        ]
      }
    ],
    grila:'Transfer proprietate vânzare: <b>imediat la perfectare</b> (bunuri certe); dar riscul rămâne la <b>vânzător până la predare</b>, chiar cu proprietatea transferată (art. 1274 — <i>res perit debitori</i>, capcană!). Vânzarea bunului altuia: contract <b>VALABIL</b> (art. 1683) — neexecutare → rezoluțiune + daune (nu NR!). Vicii ascunse: vânzătorul BF <b>nu datorează daune</b>; prescripția curge cel târziu de la 1 an de la predare (art. 2531). Dar manual: max <b>25.000 lei</b>. Donație între soți: revocabilă <b>numai în timpul căsătoriei</b>. Revocare legală donație: doar <b>sarcină + ingratitudine</b> (survenirea de copil NU mai e — capcană!). Principiul irevocabilității: clauza pur potestativă a donatorului = NCA. Ingratitudine: prescripție <b>1 an</b>; nepatrimonial (nu se transmite). Drept de răscumpărare: max <b>5 ani</b>. Preemțiune L. 17/2014: terenuri agricole extravilan, ordine coproprietari → arendași → vecini → stat; sancțiune <b>nulitate absolută</b> (≠ drept comun: inopozabilitate). Donație remuneratorie: liberalitate solemnă, nu plată a unui serviciu anterior.'
  },

  {
    id:'w13', wk:'W13', dates:'21–27 sep', subj:'civ',
    title:'Locațiunea, Mandatul, Antrepriza',
    sections:[
      { icon:'🏠', title:'Locațiunea (art. 1777–1850 NCC)',
        items:[
          '<b>Definiție</b>: locatorul transmite locatarului dreptul de <b>folosință temporară</b> a unui bun, în schimbul chiriei. Translativ de folosință (nu de proprietate).',
          '<b>Obligațiile locatorului</b>: predarea bunului în stare corespunzătoare; menținerea stării pe toată durata; garanția pentru vicii și tulburări; <b>reparații capitale</b>.',
          '<b>Obligațiile locatarului</b>: plata chiriei la termen; folosința conform destinației; <b>reparații locative (de întreținere)</b>; anunțarea locatorului pentru reparații capitale; restituirea bunului în stare corespunzătoare la expirare.',
          '<b>Sublocațiunea</b>: permisă dacă nu e interzisă expres. Cesiunea contractului necesită acordul expres al locatorului.',
          '<b>Tacita relocațiune</b> (art. 1810 NCC): dacă după expirarea termenului locatarul continuă să folosească bunul și locatorul nu se opune → contract nou pe durată nedeterminată în aceleași condiții.',
          '<b>Opozabilitate față de dobânditorul bunului</b> (art. 1811 NCC, <i>emptio non tollit locatum</i>): noul proprietar e ținut să respecte locațiunea dacă: la imobile înscrise în CF — locațiunea era <b>notată în CF</b>; la imobile neînscrise — data certă a locațiunii e <b>anterioară</b> datei certe a înstrăinării; la mobile — data certă anterioară. (Nu e un „drept de preferință" la cumpărare — doar opozabilitatea contractului.)'
        ]
      },
      { icon:'🌱', title:'Arendarea (art. 1836–1850 NCC)',
        items:[
          '<b>Definiție</b>: locator al unui bun agricol (teren, animale, utilaje) transmite arendașului dreptul de <b>folosință temporară</b>, contra <b>arendei</b> (bani sau produse naturale). Tip special de locațiune, supus normelor specifice din art. 1836–1850 NCC și Legii 17/2014.',
          '<b>Formă</b> (art. 1838 NCC): <b>formă scrisă</b>, sub sancțiunea <b>nulității absolute</b>; un exemplar se depune la <b>consiliul local</b> (pentru evidență/opozabilitate). Arendarea autentificată notarial sau înregistrată la consiliul local = <b>titlu executoriu</b> pentru plata arendei (art. 1845). ⚠️ <b>Durata nedeterminată</b> (art. 1837): contractul se consideră încheiat pentru <b>anul agricol</b> în curs (perioada necesară recoltării fructelor) — regula veche „7 ani" era din Legea 16/1994, abrogată.',
          '<b>Subarendarea</b> e interzisă total, sub sancțiunea nulității absolute (art. 1847 NCC) — deosebire esențială față de locațiunea obișnuită. <b>Cesiunea</b> arendării e permisă <b>limitat</b> (art. 1846): numai cu acordul <b>scris</b> al arendatorului și numai către <b>soțul</b> care participă la exploatare sau <b>descendenții majori</b> ai arendașului.',
          '<b>Dreptul de preemțiune al arendașului</b> (art. 1849 NCC + Legea 17/2014): la vânzarea terenului arendat, arendașul are drept de preemțiune (rândul 2 din ordinea Legii 17/2014). ⚠️ Trebuie să lucreze terenul de cel puțin 1 an.',
          '<b>Arenda</b>: stabilită în bani sau în natură; dacă nu se poate plăti arenda în natură din cauza forței majore → arendașul plătește echivalentul în bani. Arenda în produse → se impozitează ca venit agricol.'
        ]
      },
      { icon:'🤝', title:'Mandatul (art. 2009–2071 NCC)',
        items:[
          '<b>Definiție</b>: mandatarul se obligă să încheie <b>acte juridice</b> pe seama și în <b>numele mandantului</b> (reprezentare directă). ≠ Antrepriză (acte materiale).',
          '<b>Caractere</b>: consensual; prezumție de <b>gratuitate</b> între persoane fizice; cu titlu oneros la profesioniști. Formă: de regulă nu e impusă, dar mandatul pentru acte solemne trebuie să fie tot solemn (art. 2013 NCC).',
          '<b>Mandatul aparent</b> (art. 1309 NCC): mandatarul depășește puterile, dar terțul de bună-credință care s-a bazat pe aparența de putere este protejat; mandantul nu poate opune limitele puterilor terțului de bună-credință.',
          '<b>Mandatul fără reprezentare</b> (art. 2039 NCC): mandatarul acționează în <b>nume propriu</b>, dar pe seama mandantului. Terțul nu cunoaște calitatea de mandant. Actele produc efecte față de mandatar → mandantul poate cere cesiunea creanțelor/bunurilor.',
          '<b>Obligațiile mandatarului</b>: executarea cu diligența unui profesionist (dacă e oneros) sau a unui bun proprietar (dacă e gratuit); să nu depășească puterile; să dea socoteală; să remită ceea ce a primit.',
          '<b>Stingerea mandatului</b> (art. 2030 NCC): moartea/incapacitatea/falimentul oricărei părți; revocarea de către mandant — <b>oricând</b> (<i>ad nutum</i>), chiar dacă mandatul a fost declarat irevocabil; ⚠️ dar la mandatul <b>declarat irevocabil</b> sau dat <b>în interes comun</b>, revocarea nejustificată obligă mandantul la <b>daune-interese</b> (art. 2032); renunțarea mandatarului; expirarea termenului.'
        ]
      },
      { icon:'🔨', title:'Antrepriza (art. 1851–1880 NCC)',
        items:[
          '<b>Definiție</b>: antreprenorul se obligă să execute o <b>lucrare materială</b> sau un serviciu pentru client (contra unui preț). ≠ Mandat: antrepriza = acte materiale; mandatul = acte juridice.',
          'Antreprenorul lucrează <b>independent</b> — nu e prepusul clientului; clientul <b>nu răspunde</b> ca comitent pentru faptele antreprenorului.',
          'Prețul: <b>forfetar</b> (global, nenegociabil ulterior, riscul revizuirii e al antreprenorului) sau <b>determinabil</b> (deviz estimativ — poate fi ajustat dacă depășirile sunt semnificative și imprevizibile).',
          '<b>Riscul pieirii</b>: înainte de recepție, material furnizat de antreprenor → riscul e al <b>antreprenorului</b>; material al clientului, pierit din viciul materialului → riscul e al <b>clientului</b>.',
          '<b>Recepția lucrării</b>: momentul-cheie; după recepție riscul trece la client și încep să curgă termenele de garanție (la construcții: v. secțiunea următoare — 10 ani vicii ascunse, durata existenței pentru structură).',
          '<b>Denunțarea unilaterală de către client</b>: clientul poate denunța contractul, plătind antreprenorului cheltuielile suportate, munca prestată și beneficiul nerealizat. Antreprenorul nu poate denunța unilateral (poate cere rezilierea dacă clientul nu cooperează sau nu face plățile convenite).'
        ]
      },
      { icon:'🏗️', title:'Garanția contra viciilor în antrepriză și construcții (Legea 10/1995)',
        items:[
          '<b>Regula-cheie (art. 29 din Legea 10/1995)</b>: proiectantul, verificatorul de proiect, fabricanții, executantul și dirigintele de șantier răspund pentru <b>viciile ascunse</b> ale construcției ivite în <b>10 ani de la recepția lucrării</b>, iar pentru viciile <b>structurii de rezistență</b> (din nerespectarea normelor de proiectare/execuție) — pe <b>toată durata de existență a construcției</b>. ⚠️ Capcană frecventă: NU „2 ani vicii ascunse / 10 ani structură"!',
          '<b>Caracterul garanției</b>: e o garanție <b>legală, de ordine publică</b> — nu poate fi limitată sau înlăturată prin contract. Răspunderea celor implicați e potrivit obligațiilor fiecăruia (proiectant pentru proiect, executant pentru execuție etc.).',
          '<b>Recepția</b>: recepția la terminarea lucrărilor (provizorie) și recepția finală (după expirarea perioadei de garanție). Viciile aparente trebuie semnalate la recepție sub sancțiunea decăderii. Viciile ascunse: pot fi invocate oricând în termenul de garanție, chiar dacă recepția a avut loc.'
        ]
      },
      { icon:'🔁', title:'Schemă comparativă: locațiune, comodat, mandat, antrepriză',
        items:[
          '<b>Locațiune</b>: oneroasă, translativ de folosință, locatarul suportă întreținerea; locatorul suportă capital. Sinalagmatic, cu executare succesivă.',
          '<b>Comodat</b>: esențialmente gratuit (dacă e cu plată = locațiune), real (perfectat prin remitere), proprietatea rămâne la comodant; comodatarul nu poate subînchiria.',
          '<b>Mandat</b>: acte juridice în numele mandantului; gratuit (PF) sau oneros (profesioniști); revocabil ad nutum (cu excepția mandatului în interesul mandatarului).',
          '<b>Antrepriză</b>: acte materiale, antreprenorul e independent (nu prepus), prețul e de regulă forfetar; clientul poate denunța oricând (cu despăgubire).'
        ]
      }
    ],
    grila:'Locatarul: <b>reparații locative</b>; locatorul: <b>reparații capitale</b>. Tacita relocațiune → contract pe durată nedeterminată. Mandat = acte juridice; antrepriză = acte materiale. Mandatul PF = prezumție de <b>gratuitate</b>. Mandat fără reprezentare: terțul nu cunoaște mandantul; efectele → mandatar. Antreprenorul ≠ prepus; clientul poate denunța oricând cu despăgubire. Arendare: formă scrisă <b>ad validitatem</b> (NCA); durată nedeterminată → <b>anul agricol</b> (art. 1837, nu „7 ani"); subarendarea <b>interzisă</b>; cesiunea doar către soț/descendenți majori cu acord scris; arendașul are preemțiune (L. 17/2014). Garanție construcții (art. 29 L. 10/1995): <b>10 ani</b> vicii ascunse; <b>toată durata de existență</b> pentru structura de rezistență (capcană: nu 2/10!).'
  },

  {
    id:'w14', wk:'W14', dates:'28 sep–4 oct', subj:'civ',
    title:'Împrumut, fidejusiune, tranzacție',
    sections:[
      { icon:'💰', title:'Împrumutul de consumație — mutuum (art. 2158–2170 NCC)',
        items:[
          '<b>Definiție</b>: împrumutătorul transferă <b>proprietatea</b> unor bunuri consumptibile (bani, alimente, combustibil). Împrumutatul restituie bunuri de același gen, calitate și cantitate (<i>tantundem eiusdem generis</i>).',
          '<b>Caractere</b>: <b>real</b> (se perfectează prin remiterea bunului); <b>unilateral</b> (numai împrumutatul are obligații după remitere). ⚠️ <b>Capcană — prezumții</b> (art. 2159 NCC): împrumutul se prezumă <b>gratuit</b>, DAR împrumutul care are ca obiect <b>o sumă de bani se prezumă ONEROS</b> (cu dobândă) până la proba contrară!',
          'La predare, proprietatea și <b>riscul</b> trec la împrumutat. Dacă bunul piere fortuit → împrumutatul tot trebuie să restituie (e proprietar al riscului).',
          '<b>Plafonul dobânzii convenționale</b> (art. 5 din OG 13/2011): în raporturile care nu decurg din exploatarea unei întreprinderi cu scop lucrativ, dobânda nu poate depăși <b>dobânda legală cu mai mult de 50% pe an</b>. Sancțiunea depășirii: clauza e <b>nulă de drept</b>, iar creditorul e <b>decăzut și din dreptul la dobânda legală</b> (nu simplă reducere la plafon!).',
          '<b>Scadența</b>: termenul stipulat. Dacă nu e termen → instanța îl poate stabili ținând cont de nevoile împrumutatului și de posibilitățile împrumutătorului. Dacă s-a stabilit că împrumutatul plătește când va putea → instanța trebuie să determine un termen rezonabil.'
        ]
      },
      { icon:'🏡', title:'Împrumutul de folosință — comodat (art. 2146–2157 NCC)',
        items:[
          '<b>Definiție</b>: comodantul remite gratuit un bun <b>neconsumptibil</b> spre folosință; comodatarul restituie <b>același bun</b>. ≠ Mutuum (proprietatea nu se transferă).',
          '<b>Caractere</b>: <b>real</b> (perfectat prin remiterea bunului); unilateral; <b>esențialmente gratuit</b> (dacă e cu plată → devine locațiune și pierde regimul comodatului).',
          'Proprietatea și riscul rămân la comodant. Excepție: comodatarul răspunde pentru pieire dacă a folosit bunul altfel decât destinației sau l-a împrumutat altei persoane (fără acordul comodantului).',
          '<b>Obligațiile comodatarului</b>: folosință conform destinației; reparații locative; cheltuielile de conservare curente; restituirea la termen sau la cererea comodantului (dacă nu e termen). ⚠️ Nu poate subînchiria bunul sau îl împrumuta altei persoane fără acordul comodantului.',
          'Comodantul poate cere restituirea anticipată numai pentru <b>nevoie urgentă și neprevăzută</b> (dacă termenul e stipulat). Fără termen → poate cere oricând, cu preaviz rezonabil.'
        ]
      },
      { icon:'📦', title:'Contractul de depozit (art. 2103–2143 NCC)',
        items:[
          '<b>Definiție</b>: depunătorul remite depozitarului un <b>bun mobil</b> spre <b>păstrare</b>, cu obligația de a-l restitui în natură la cerere. ⚠️ Scopul e custodia (nu folosința ca la comodat, și nici transferul proprietății ca la mutuum).',
          '<b>Caractere</b>: <b>real</b> (se perfectează prin remiterea bunului); <b>unilateral</b> (numai depozitarul are obligații după remitere); de regulă <b>gratuit</b> (prezumție la persoane fizice); oneros la profesioniști (hoteluri, case de valori).',
          '<b>Depozitarul NU poate folosi bunul</b> (art. 2109 NCC) — spre deosebire de comodatar (care primește bunul spre folosință). Dacă depozitarul folosește bunul fără drept → răspunde față de depunător pentru orice pierdere, inclusiv caz fortuit.',
          '<b>Diligența depozitarului</b>: la depozit gratuit → diligența unui bun proprietar pentru propriile bunuri (standard variabil, mai puțin sever); la depozit oneros → diligența unui profesionist (standard obiectiv). ⚠️ Răspunde și pentru culpa ușoară la depozit oneros.',
          '<b>Depozitul neregulat</b> (art. 2105 NCC): depunerea unor bunuri fungibile și consumptibile (bani, metale prețioase) — acestea devin <b>proprietatea depozitarului</b>, care restituie bunuri de același gen, cantitate și calitate. Se aseamănă cu mutuum. Sancțiune pentru nerestituire: acțiune în restituire + dobânzi.',
          '<b>Depozitul necesar</b> (art. 2124 NCC): impus de împrejurări extraordinare (incendiu, cutremur, naufragiu) fără posibilitatea alegerii depozitarului. Regulile se aplică, dar proba e mai liberă (inclusiv martori și prezumții indiferent de valoare).',
          '<b>Restituirea</b> (art. 2115 NCC): la cererea depunătorului, <b>oricând</b>, chiar dacă s-a stipulat un termen (termenul e în interesul depunătorului). Dacă depozitarul are o creanță față de depunător legată de depozit, poate exercita dreptul de retenție.'
        ]
      },
      { icon:'🛡️', title:'Fidejusiunea — cauțiunea (art. 2280–2320 NCC)',
        items:[
          '<b>Definiție</b>: fidejusorul se obligă față de creditor să execute obligația debitorului dacă acesta nu o execută. <b>Legală</b>: impusă de lege (ex: obligația moștenitorului de a da garanție creditorului); <b>judiciară</b>: ordonată de instanță; <b>convențională</b>: voluntară.',
          '<b>Caractere</b>: <b>accesorie</b> (urmează soarta obligației principale — dacă aceasta e nulă → fidejusiunea cade); ⚠️ <b>solemnă</b> (art. 2282 NCC): trebuie asumată <b>expres, printr-un înscris</b> autentic sau sub semnătură privată, sub sancțiunea <b>nulității absolute</b> — nu e consensuală!; poate fi gratuită sau oneroasă.',
          '<b>Beneficiul de discuțiune</b> (art. 2294 NCC): fidejusorul poate cere creditorului să urmărească mai întâi bunurile debitorului principal. ⚠️ Trebuie invocat <b>înainte de judecarea fondului</b>, cu indicarea bunurilor urmăribile ale debitorului și avansarea cheltuielilor de urmărire.',
          '<b>Beneficiul de diviziune</b> (art. 2296 NCC): dacă sunt mai mulți fidejusori, fiecare poate cere să fie urmărit numai pentru <b>partea sa</b>. Invocat la primul termen cu indicarea cofidejusorilor solvabili.',
          'Fidejusorul care plătește se <b>subrogă</b> în drepturile creditorului față de debitorul principal (art. 2305 NCC). Are și acțiune personală de regres față de debitor.',
          '<b>Stingerea fidejusiunii</b>: stingerea obligației principale → stingerea automată (accesorie). ⚠️ <b>Capcană</b> (art. 2311 NCC): simpla <b>prelungire a termenului</b> acordată debitorului NU îl liberează pe fidejusor. Liberarea reală (art. 2315): când <b>subrogația devine imposibilă din fapta creditorului</b> (ex. pierde garanțiile) — fidejusorul e liberat în limita sumei pe care n-ar mai putea-o recupera. <b>Fidejusiunea solidară</b>: renunțare la discuțiune și diviziune; urmărit ca un codebitor solidar.'
        ]
      },
      { icon:'🤝', title:'Tranzacția (art. 2267–2278 NCC)',
        items:[
          '<b>Definiție</b>: contract prin care părțile sting un litigiu existent sau previn un litigiu viitor, prin <b>concesii reciproce</b>. ⚠️ Dacă o parte renunță complet (fără concesii din partea celeilalte) → nu e tranzacție, ci remitere de datorie sau recunoaștere a dreptului.',
          '<b>Caractere</b>: sinalagmatic; cu titlu oneros; efecte de regulă <b>declarative</b> (recunoaște drepturi existente, nu creează altele noi — ⚠️ nu comparați cu partajul, care sub NCC e constitutiv!).',
          'Tranzacția are putere de lucru judecat relativ (inter partes). Nu poate fi atacată decât pe motive de nulitate (viciu de consimțământ, lipsă de obiect etc.) sau prin acțiune în constatarea obiectului inexistent.',
          '<b>Cazuri de nulitate</b>: tranzacție asupra unui drept inexistent; actul de a cărui existență depinde a fost ulterior anulat sau declarat fals; tranzacție bazată pe documente false.',
          '<b>Tranzacția judiciară</b>: consfințită de instanță prin <b>hotărâre de expedient</b> (art. 438–441 CPC) → titlu executoriu. Tranzacția extrajudiciară: devine titlu executoriu dacă e <b>autentificată notarial</b>; altfel, executarea ei se obține pe calea unui proces.'
        ]
      }
    ],
    grila:'Mutuum = <b>real</b> + transferă <b>proprietatea și riscul</b> la împrumutat; împrumutul de <b>bani se prezumă ONEROS</b> (art. 2159 — capcană!); plafon dobândă: legală <b>+50%</b> (nu 2×); depășire → clauză nulă + decădere din dobânda legală. Fidejusiunea: <b>solemnă</b> — înscris ad validitatem (art. 2282); prelungirea termenului NU liberează fidejusorul (art. 2311). Comodat = real + gratuit + proprietatea rămâne; comodatarul nu poate subînchiria. Depozit = real, gratuit (PF), depozitarul <b>nu poate folosi</b> bunul (≠ comodat); restituire la cererea depunătorului oricând. Depozit neregulat: bunuri fungibile, depozitarul devine proprietar + restituie tantundem. Fidejusionar solidar: renunță la discuțiune și diviziune. Fidejusor subrogat: drepturile creditorului + acțiunea proprie. Tranzacție = efecte <b>declarative</b>; concesii <b>reciproce</b> (altfel = remitere de datorie).'
  },

  {
    id:'w15', wk:'W15', dates:'5–11 oct', subj:'civ',
    title:'Moștenirea legală',
    sections:[
      { icon:'📌', title:'Principii generale: deschidere, opțiune, sezină (art. 953–965 NCC)',
        items:[
          '<b>Deschiderea succesiunii</b>: la data <b>morții</b> defunctului. La moartea declarată judecătorește, data morții e cea stabilită prin <b>hotărâre</b>; în lipsă de indicii, ultima zi a termenului după care se poate cere declararea morții (art. 52 NCC). <b>Comoriența</b> (art. 957 alin. 2 NCC): persoanele decedate în aceeași împrejurare, fără a se putea stabili ordinea deceselor, sunt prezumate că au murit <b>deodată</b> → nu se moștenesc reciproc.',
          '<b>Condiții pentru a moșteni</b>: (1) existența la data deschiderii (capacitate succesorală — <i>infans conceptus</i> include și concepuții dacă se nasc vii); (2) să nu fie nedemn; (3) să aibă vocație succesorală.',
          '<b>Opțiunea succesorală</b> (art. 1103 NCC): termen de <b>1 an de la data deschiderii moștenirii</b> (regula); excepții — curge de la cunoașterea legăturii de rudenie, a nașterii copilului etc. Acceptare expresă (înscris autentic sau sub semnătură privată) sau tacită (orice act pe care succesibilul nu-l putea face decât în calitate de moștenitor).',
          '<b>Acceptarea forțată</b> (art. 1119 NCC): succesibilul care, cu rea-credință, a <b>sustras ori ascuns</b> bunuri sau a ascuns o donație raportabilă e considerat acceptant; <b>sancțiuni</b>: nu are niciun drept asupra bunurilor sustrase și plătește datoriile moștenirii proporțional cu cota sa, <b>inclusiv cu propriile bunuri</b> (singurul caz de răspundere <i>ultra vires</i> sub NCC!).',
          '<b>Renunțarea</b>: în termenul de 1 an, în formă autentică la notar. Renunțătorul = nu a existat niciodată; copiii săi pot moșteni numai în cont propriu (nu prin reprezentare). Renunțarea poate fi revocată înainte de expirare, dacă succesiunea nu a fost acceptată de alți moștenitori.',
          '<b>Sezina</b> (art. 1126–1127 NCC): moștenitorii sezinari (soțul supraviețuitor, descendenții, ascendenții privilegiați) au de drept stăpânirea de fapt a moștenirii de la deschidere. Nesezinarii dobândesc sezina prin <b>eliberarea certificatului de moștenitor</b>, cu efect retroactiv de la deschiderea moștenirii.',
          '<b>Petiția de ereditate</b>: acțiunea moștenitorului real față de posesorul eredității. <b>Imprescriptibilă</b> extinctiv (drept real). Efecte: restituire bunuri + fructe (dacă pârâtul a fost de rea-credință).'
        ]
      },
      { icon:'⚖️', title:'Nedemnitatea succesorală (art. 958–961 NCC)',
        items:[
          '<b>De drept</b> (automat, constatată de instanță/notar, art. 958 NCC): (a) condamnatul pentru o infracțiune săvârșită <b>cu intenția de a-l ucide pe defunct</b>; (b) condamnatul pentru infracțiunea săvârșită cu intenția de a ucide <b>un alt succesibil</b> care, la data faptei, i-ar fi înlăturat sau restrâns vocația la moștenire.',
          '<b>Judiciară</b> (pronunțată de instanță la cererea unui succesibil, art. 959 NCC): (a) <b>fapte grave de violență fizică sau morală</b> asupra defunctului ori fapte care au dus la moartea lui, neacoperite de art. 958; (b) <b>ascunderea, alterarea, distrugerea sau falsificarea testamentului</b> cu rea-credință; (c) <b>împiedicarea, prin dol sau violență</b>, a defunctului să întocmească/modifice/revoce testamentul. Termen: 1 an de la deschiderea moștenirii.',
          'Nedemnul e exclus de la moștenire; copiii nedemnului pot <b>veni prin reprezentare</b> (iau ce ar fi luat nedemnul). ⚠️ Copiii vin prin reprezentare, nu prin propria vocație.',
          'Nedemnitatea poate fi <b>înlăturată</b> de defunct prin testament sau declarație autentică (iertare expresă). Iertarea nu se prezumă.',
          'Efectele față de terți: actele de administrare ale nedemnului rămân valabile față de <b>terții de bună-credință</b>. Actele de dispoziție → în principiu anulabile față de terții de rea-credință.'
        ]
      },
      { icon:'🏛️', title:'Clasele de moștenitori legali și cotele (art. 964–983 NCC)',
        items:[
          '<b>Clasa I — Descendenți</b>: copii, nepoți, strănepoți (la infinit); exclud complet celelalte clase. Moștenesc în cote egale pe cap dacă sunt în același grad; prin reprezentare (pe tulpini) dacă sunt grade diferite.',
          '<b>Clasa II — Ascendenți privilegiați + colaterali privilegiați</b>: părinți (cls II A) + frați/surori/nepoți din frați (cls II B). Dacă vin ambii părinți + colaterali privilegiați: părinți = 1/4 fiecare; restul la cls II B. Dacă vine un singur părinte = 1/4; dacă nu vin colaterali privilegiați, ascendentul ia totul.',
          '<b>Clasa III — Ascendenți ordinari</b>: bunici, străbunici (linie ascendentă). Împart pe linie (paternă/maternă) și grad.',
          '<b>Clasa IV — Colaterali ordinari</b>: unchi, mătuși, veri primari, frați ai bunicilor — max <b>gradul IV</b>. Statul = moștenitor al ultimului resort (dacă nu există niciun moștenitor).',
          'Regula dublă: clasa superioară <b>exclude</b> clasele inferioare. În aceeași clasă, gradul mai aproape <b>exclude</b> gradul mai îndepărtat (cu excepția reprezentării).'
        ]
      },
      { icon:'🔁', title:'Reprezentarea succesorală și soțul supraviețuitor',
        items:[
          '<b>Reprezentarea succesorală</b> (art. 965 NCC): descendentul predecedat sau nedemn e înlocuit de propriii descendenți; reprezentanții culeg prin împărțire <b>pe tulpini</b> (nu pe capete). Admisă: la descendenți (cls I) și la colaterali privilegiați (frații cls II). Inadmisă: la ascendenți.',
          '⚠️ <b>Renunțătorul ≠ nedemnul</b>: copiii <b>nedemnului</b> vin prin <b>reprezentare</b> (iau locul nedemnului, chiar dacă acesta trăiește); copiii <b>renunțătorului</b> nu beneficiază de reprezentare — pot moșteni numai <b>în cont propriu</b>, dacă au propria vocație succesorală și nu sunt excluși de moștenitori mai apropiați în grad.',
          '<b>Soțul supraviețuitor</b> (art. 972 NCC): vine în concurs cu oricare clasă (nu face parte dintr-o clasă). Cote: cu cls I (descendenți) = <b>1/4</b>; cu cls II <b>întreagă</b> (ascendenți privilegiați + colaterali privilegiați) = <b>1/3</b>; cu <b>doar una</b> din cele două categorii ale cls II = <b>1/2</b>; cu cls III sau cls IV = <b>3/4</b>; singur = <b>tot</b>.',
          '<b>Drepturile speciale ale soțului</b> (art. 973–974 NCC): drept de <b>abitație</b> asupra locuinței familiei (dacă face parte din moștenire și soțul nu are alt drept de a folosi o locuință corespunzătoare) — până la partaj, minim <b>1 an</b>; drept special asupra <b>mobilierului și obiectelor de uz casnic</b> — dar numai când <b>nu vine în concurs cu descendenții</b> (le culege peste cota sa).',
          '<b>Rezerva soțului supraviețuitor</b>: ca orice rezervatar, rezerva = <b>1/2 din cota succesorală</b> care i s-ar fi cuvenit ca moștenitor legal (art. 1088 NCC) — nu „1/4 din moștenire".'
        ]
      },
      { icon:'📋', title:'Răspunderea moștenitorului pentru datorii + certificatul de moștenitor',
        items:[
          '⚠️ <b>Capcană majoră — răspunderea sub NCC este INTRA VIRES pentru toți</b> (art. 1114 alin. 2 NCC): moștenitorii legali și legatarii universali/cu titlu universal răspund pentru datoriile și sarcinile moștenirii <b>numai cu bunurile din patrimoniul succesoral</b>, proporțional cu cota fiecăruia. Sistemul vechiului cod (ultra vires la acceptarea pură și simplă) a fost <b>abandonat</b>.',
          '<b>„Beneficiul de inventar" NU mai există</b> ca opțiune distinctă sub NCC — limitarea răspunderii la activul succesoral operează <b>de drept</b>. Singura răspundere <i>ultra vires</i> rămasă: <b>sancțiunea acceptării forțate</b> (art. 1119 alin. 2 — sustragerea/ascunderea de bunuri).',
          '<b>Prioritatea creditorilor moștenirii</b> (art. 1156 NCC): creditorii moștenirii sunt plătiți <b>cu prioritate</b> din bunurile succesorale, înaintea creditorilor personali ai moștenitorului; legatarii cu titlu particular vin după creditorii moștenirii.',
          '<b>Certificatul de moștenitor</b> (art. 1132–1134 NCC): eliberat de notarul public în urma procedurii succesorale. Face dovada calității de moștenitor, a cotelor și a componenței masei succesorale <b>până la anularea sa prin hotărâre judecătorească</b> (nu e o prezumție absolută!). Cei vătămați pot cere anularea și stabilirea drepturilor lor.',
          '⚠️ <b>Certificatul de moștenitor vs. hotărârea judecătorească</b>: ambele pot stabili calitatea de moștenitor; dacă există conflict → hotărârea judecătorească prevalează (are autoritate de lucru judecat). Certificatul se poate contesta prin acțiune în anulare sau petiție de ereditate.',
          '<b>Succesiunea vacantă</b> (art. 1135 NCC): dacă nu există moștenitori (toți renunță sau nu există) → masa succesorală revine <b>statului</b> (sau unității administrativ-teritoriale unde se afla domiciliul defunctului la deces). Statul nu poate renunța la succesiune.'
        ]
      }
    ],
    grila:'Termenul de opțiune succesorală: <b>1 an</b>. Comoriența: nu se moștenesc reciproc. Sezina: descendenți, ascendenți privilegiați, soț supraviețuitor. Nedemnitate de drept ≠ judiciară (aceasta necesită hotărâre). Copiii nedemnului: vin prin <b>reprezentare</b>. Cotele soțului (art. 972): cls I=<b>1/4</b>; cls II întreagă=<b>1/3</b>; doar o categorie din cls II=<b>1/2</b>; cls III sau IV=<b>3/4</b>. Rezerva oricărui rezervatar = <b>1/2 din cota legală</b> (art. 1088). Statul culege moștenirea vacantă. Petiția de ereditate: imprescriptibilă. Răspunderea moștenitorilor: <b>INTRA VIRES pentru toți</b> (art. 1114 al.2 — capcană: beneficiul de inventar nu mai există!); ultra vires doar ca sancțiune la acceptarea forțată (art. 1119). Creditorii moștenirii: prioritate pe activul succesoral (art. 1156). Certificat de moștenitor: face dovada până la <b>anulare judiciară</b> (nu prezumție absolută).'
  },

  {
    id:'w16', wk:'W16', dates:'12–18 oct', subj:'civ',
    title:'Testamentul, rezerva succesorală, raportul donațiilor',
    sections:[
      { icon:'📜', title:'Testamentul — forme și revocare (art. 1034–1085 NCC)',
        items:[
          '<b>Caractere</b>: act juridic unilateral, <b>personal</b> (nu prin reprezentant), <b>revocabil</b> (oricând), solemn. <b>Testamentul conjunctiv este interzis</b> (art. 1036 NCC) — două persoane nu pot testa printr-un singur act; sancțiune: nulitate absolută.',
          '<b>Testament olograf</b>: scris <b>integral</b> de mână + <b>datat</b> (zi, lună, an) + <b>semnat</b> de testator. Lipsa oricăreia → nulitate absolută. Data incompletă sau eronată poate fi reconstituită dacă nu există dubiu.',
          '<b>Testament autentic</b> (art. 1043–1046 NCC): autentificat de <b>notarul public</b>. ⚠️ Martorii sunt <b>facultativi</b> ca regulă („testatorul poate fi asistat de unul sau de 2 martori" — art. 1043 alin. 2); devin necesari doar în situațiile speciale (testatorul nu poate semna, nu poate citi etc.).',
          '<b>Revocarea</b>: expresă (act autentic sau testament ulterior); tacită (testament ulterior incompatibil; distrugerea voluntară a olografului; înstrăinarea bunului legat — legatul se stinge automat).',
          '⚠️ <b>Capcană — incapacitatea de a dispune</b> (art. 988 NCC): cel <b>lipsit de capacitate de exercițiu sau cu capacitate restrânsă NU poate face liberalități deloc</b> (nici testament, nici donație) — regula veche „minorul 16–18 ani dispune de 1/2" a fost <b>abandonată de NCC</b>! În plus (alin. 2): nici după dobândirea capacității depline nu poate dispune în favoarea <b>fostului reprezentant legal</b>, înainte de descărcarea de gestiune.',
          'Incapacități de a <b>primi</b> liberalități (art. 990 NCC): medicii, farmaciștii care l-au îngrijit pentru boala cauză a decesului; preoții care l-au asistat religios. Sancțiune: liberalitățile sunt <b>anulabile</b> (NR — art. 990 spune expres). Excepții: liberalitățile remuneratorii și cele către rude apropiate.',
          '<b>Substituția fideicomisară</b> (art. 994 NCC): testatorul impune legatarului să conserve bunul și să-l transmită la moartea sa altei persoane desemnate. Admisă pe un singur grad (A → B → C interzis dacă C e instituit tot de testator).'
        ]
      },
      { icon:'🎗️', title:'Tipurile de legate și dezmoștenirea (art. 1055–1083, art. 1074 NCC)',
        items:[
          '<b>Legatul universal</b> (art. 1055 NCC): atribuie legatarului <b>întreaga moștenire</b> (sau fracțiunea rămasă după achitarea legatelor cu titlu universal sau particular). Legatarul universal are vocație la tot — adică răspunde și pentru datoriile succesiunii.',
          '<b>Legatul cu titlu universal</b> (art. 1056 NCC): atribuie o <b>fracțiune determinată</b> din moștenire (1/2, 1/3 etc.) sau o universalitate de bunuri (ex: toate mobilele, toate imobilele). Răspunde pentru datoriile succesiunii proporțional cu fracțiunea primită.',
          '<b>Legatul cu titlu particular</b> (art. 1057 NCC): atribuie <b>bunuri determinate</b> (individual sau generic). Legatarul nu răspunde pentru datoriile succesiunii (excepție: dacă bunul e ipotecat sau dacă testatorul a pus în sarcina legatarului plata unui legat). ⚠️ Distincție-cheie pentru grile: legatul particular → nu răspunde pentru datorii.',
          '<b>Dezmoștenirea (exheredarea)</b> (art. 1074 NCC): testatorul poate dezmoșteni un moștenitor legal, total sau parțial. Moștenitorul exheredat e exclus de la moștenire, dar dacă e rezervatar → are dreptul la rezervă (nu poate fi dezmoștenit sub rezervă). Dezmoștenirea <b>indirectă</b>: testatorul instituie un legatar universal, fără a desemna moștenitorii legali → aceștia sunt excluși implicit.',
          '<b>Efectele dezmoștenirii rezervatarilor</b>: rezerva succesorală nu poate fi redusă prin dezmoștenire — legatele sau donațiile care depășesc cotitatea disponibilă sunt reductibile. Exheredarea totală a unui rezervatar = dezmoștenire parțial invalidă (rezerva e protejată).',
          '⚠️ <b>Legat condiționat</b>: legatul sub condiție suspensivă — dreptul se naște la realizarea condiției. Legat sub condiție rezolutorie — dreptul se stinge la realizarea condiției. Legat cu termen — exigibilitatea e amânată. Legatul sub sarcină — legatarul trebuie să execute o prestație (dacă nu execută → revocare judiciară).'
        ]
      },
      { icon:'🎯', title:'Rezerva succesorală și cotitatea disponibilă (art. 1086–1099 NCC)',
        items:[
          '<b>Rezervatarii</b>: descendenții, ascendenții privilegiați (părinții) și soțul supraviețuitor. Ceilalți moștenitori (frați, bunici etc.) nu au rezervă.',
          '⚠️ <b>Regula unică NCC</b> (art. 1088): rezerva fiecărui rezervatar = <b>1/2 din cota succesorală care i s-ar fi cuvenit ca moștenitor legal</b>. Nu mai există fracțiuni fixe din moștenire pe categorii (1/2, 2/3, 3/4 — acelea erau vechiul cod, capcană frecventă!).',
          'Concurs de rezervatari: se calculează rezerva fiecăruia din cota lui legală, iar cotitatea disponibilă e ce rămâne. Ex: vin descendenți + soț → cota legală a soțului = 1/4 → rezerva soțului = 1/2 × 1/4 = <b>1/8</b> din moștenire; cota legală a descendenților = 3/4 → rezerva lor = <b>3/8</b>; cotitatea disponibilă = 1/2.',
          '<b>Calculul masei succesorale</b> (art. 1091 NCC): activ brut − pasiv (datorii) = activ net; activ net + reunire fictivă a donațiilor făcute de defunct = masa de calcul a rezervei.',
          'Reunirea fictivă: se adaugă <b>toate donațiile</b> (nu doar cele neraportabile) la masa de calcul pentru determinarea rezervei; valoarea donației se apreciază <b>la data deschiderii moștenirii</b>, ținând cont de <b>starea bunului la data donației</b> (art. 1091 alin. 2 — nu „valoarea de la data facerii"!).',
          '<b>Reducțiunea liberalităților</b> (art. 1096 NCC): dacă donațiile + legatele depășesc cotitatea disponibilă, rezervatarii pot cere reducțiunea. Ordinea: <b>mai întâi legatele — toate deodată și proporțional</b>; <b>apoi donațiile — în ordinea inversă a datei</b> (cea mai nouă prima). Reducțiunea = ineficacitate față de rezervatari (nu nulitate).',
          'Termen acțiune în reducțiune: <b>3 ani</b> de la data deschiderii succesiunii sau de la cunoașterea dispoziției.',
          '<b>Exemplu numeric</b>: masă de calcul = 200.000 lei; vin soțul + 2 copii. Cotă legală soț = 1/4 (50.000 lei) → rezervă soț = 1/2 × 50.000 = <b>25.000 lei</b>. Cotă legală copii = 3/4 (150.000 lei) → rezervă copii total = 1/2 × 150.000 = <b>75.000 lei</b>. Total rezerve = 100.000 lei → cotitate disponibilă = <b>100.000 lei</b> (poate fi lăsată prin testament/donații oricui).'
        ]
      },
      { icon:'🔃', title:'Raportul donațiilor (art. 1146–1165 NCC)',
        items:[
          '<b>Cine raportează</b>: descendenții acceptanți care vin la moștenire; soțul supraviețuitor dacă vine în concurs cu descendenți. Fraților nu li se aplică raportul. Renunțătorul: nu raportează (a ieșit din moștenire).',
          'Scop: <b>egalitate</b> între moștenitorii din aceeași clasă — donația e prezumată avans din moștenire. Donatorul a vroit egalitate, nu avantajarea unui moștenitor.',
          'Raportul se face prin <b>echivalent</b> (imputarea valorii donației asupra cotei succesorale, nu restituire în natură). Dacă valoarea donației depășește cota = moștenitorul nu ia nimic din moștenire, dar nu restituie nici excedentul (diferit de reducțiune).',
          '<b>Dispensa de raport</b>: donatorul poate scuti de raport în actul de donație sau ulterior, prin testament. Donația deghizată sau indirectă se consideră <b>dispensată</b> de raport (nu de rezervă).',
          '<b>Raportul ≠ reducțiunea</b>: raportul asigură egalitate între moștenitori (operează doar între ei); reducțiunea protejează rezerva față de <b>terți</b> (legatari, donatari externi). Ambele operațiuni pot fi necesare în același dosar.'
        ]
      }
    ],
    grila:'Testament olograf: <b>integral</b> olograf + datat complet (zi/lună/an) + semnat — lipsa oricăreia = nulitate absolută. Testamentul conjunctiv: <b>interzis</b> (art. 1036). Testament autentic: martorii <b>facultativi</b>. Minorul/incapabilul: <b>nicio liberalitate</b> (art. 988 — capcană: regula „16 ani → 1/2" e vechiul cod!). Rezerva = <b>1/2 din cota legală</b> a fiecărui rezervatar (art. 1088 — fără fracțiuni fixe!); soț cu descendenți → rezervă 1/8. Reunire fictivă = toate donațiile, la valoarea de la <b>deschiderea moștenirii</b> (starea de la donație). Reducțiunea: legatele <b>toate deodată, proporțional</b>; apoi donațiile invers cronologic. Raportul: prin echivalent; dispensa = nu raportez dar rezerva se calculează oricum; raportul ≠ reducțiunea. Legat universal → răspunde pentru datorii; legat particular → NU răspunde. Dezmoștenire: nu poate afecta rezerva; exheredarea rezervatarului → păstrează rezerva.'
  },

  // ══ DREPT PENAL ══════════════════════════════════════════════════════════════

  {
    id:'w18', wk:'W18', dates:'26 oct–1 nov', subj:'pen',
    title:'Infracțiunea: trăsături și elemente constitutive',
    sections:[
      { icon:'📌', title:'Definiție, trăsături esențiale și legalitate (art. 1, 15 NCP)',
        items:[
          '<b>Infracțiunea</b> = fapta prevăzută de legea penală, săvârșită cu vinovăție, nejustificată și imputabilă persoanei care a săvârșit-o (art. 15 NCP). Cele patru elemente din definiție corespund celor trei trăsături esențiale.',
          'Trăsăturile esențiale — cumulative: <b>tipicitate</b> (prevăzută de lege) + <b>antijuridicitate</b> (nejustificată) + <b>imputabilitate</b>. Lipsa oricăreia → fapta nu este infracțiune.',
          '<b>Nullum crimen sine lege</b> (art. 1 NCP): nicio faptă nu constituie infracțiune dacă nu era prevăzută de lege <i>la momentul comiterii</i>. Analogia <b>în defavoarea</b> inculpatului (<i>in malam partem</i>) = interzisă; cea în favoarea lui e admisă de doctrina majoritară.',
          '<b>Legea penală mai favorabilă (lex mitior)</b> — art. 5 NCP: dacă până la judecarea definitivă a intervenit o lege mai favorabilă, aceasta se aplică retroactiv. Aprecierea = <b>globală și in concreto</b>; ⚠️ interzisă <b>lex tertia</b> — nu se pot combina dispozițiile mai blânde din ambele legi (CCR 265/2014). Dezincriminare → clasare/achitare.',
          '<b>Cauze justificative</b> (art. 18–22 NCP) înlătură <b>antijuridicitatea</b>: legitima apărare (art. 19), starea de necesitate (art. 20), exercitarea unui drept sau îndeplinirea unei obligații (art. 21), <b>consimțământul persoanei vătămate</b> (art. 22 — nu pentru viață și când legea îl exclude). Efect <i>in rem</i> → se extinde la toți participanții.',
          '<b>Cauze de neimputabilitate</b> (art. 23–31 NCP) înlătură <b>imputabilitatea</b>: constrângere fizică/morală, caz fortuit, minoritate, iresponsabilitate, intoxicație involuntară, eroare de fapt. Efect <i>in personam</i> → numai pentru cel vizat.'
        ]
      },
      { icon:'🏗️', title:'Elementele constitutive ale infracțiunii',
        items:[
          '<b>Obiectul juridic</b>: relația socială ocrotită (generic = categoria; special = relația concretă). Unele infracțiuni au și obiect juridic complex (două relații sociale lezate simultan — ex: tâlhăria = patrimoniu + integritate fizică).',
          '<b>Obiectul material</b>: lucrul, corpul sau bunul asupra căruia se răsfrânge acțiunea. <b>Nu toate infracțiunile au obiect material</b> — infracțiunile de pericol pur (ex: conducere fără permis) nu au.',
          '<b>Subiectul activ persoană fizică</b>: condiții cumulative — vârsta minimă (<b>16 ani</b> în principiu; <b>14–16 ani</b> dacă se dovedește că a acționat cu discernământ); responsabilitate; libertate de voință. Constrângerea fizică absolută → nu există subiect activ.',
          '<b>Subiectul activ persoană juridică</b>: răspunde penal (cu excepția statului, autorităților publice și instituțiilor publice ce desfășoară activități ce nu pot face obiectul domeniului privat). Sancțiune principală: amenda; complementare: dizolvare, suspendare, închidere de unități.',
          '<b>Subiectul pasiv</b>: titularul valorii sociale lezate. ⚠️ Subiect pasiv ≠ parte vătămată (distincție procedurală — subiectul pasiv poate să nu participe la proces).',
          'Infracțiuni <b>proprii</b>: subiect activ trebuie să aibă calitate specială (funcționar, militar, medic etc.). <b>Complicele/instigatorul</b> poate fi orice persoană; calitatea specială e cerută numai autorului.'
        ]
      },
      { icon:'⚙️', title:'Latura obiectivă și clasificări',
        items:[
          '<b>Elementul material</b> (<i>actus reus</i>): acțiunea sau inacțiunea incriminată. La inacțiune, răspunderea presupune existența unei <b>obligații legale de a acționa</b> (garant).',
          '<b>Urmarea imediată</b>: vătămarea efectivă (infracțiuni de rezultat) sau starea de pericol (infracțiuni de pericol abstract — pericol prezumat de lege).',
          '<b>Legătura de cauzalitate</b>: obligatorie la infracțiunile de rezultat. Teorie aplicată: <i>conditio sine qua non</i> (echivalența condițiilor). Cauzalitatea nu există dacă urmarea s-ar fi produs oricum.',
          'Clasificări după structura infracțiunii: <b>simplă</b> (un singur act, o singură urmare); <b>complexă</b> (absoarbe altă infracțiune — ex: tâlhăria absoarbe furtul + violența); <b>continuă</b> (acțiunea se prelungește în timp — ex: lipsirea de libertate); <b>de obicei</b> (necesită repetare pentru a fi consumată — ex: hărțuire).'
        ]
      },
      { icon:'🚫', title:'Infracțiunea omisivă improprie (comisivă prin omisiune, art. 17 NCP)',
        items:[
          '<b>Definiție</b>: infracțiune tipic comisivă (cu element material activ), săvârșită prin <b>inacțiune</b> de către o persoană care avusese obligația legală de a acționa — numită <b>garant</b>.',
          '<b>Condiția de la art. 17 NCP</b>: autorul omisiv (garantul) trebuie să fi primit o <b>obligație legală sau convențională</b> de a acționa pentru a preveni producerea rezultatului. Fără această obligație → nu există infracțiune (inacțiunea pură nu e incriminată decât dacă legea o prevede expres).',
          '<b>Surse ale calității de garant</b>: (1) legea (de ex: art. 203 NCP — lăsarea fără ajutor a persoanei aflate în pericol; obligația medicului față de pacient; părintele față de copilul minor); (2) contractul (salvamarul angajat să supravegheze piscina); (3) asumarea voluntară a supravegherii (soț față de copilul nou-născut); (4) crearea situației de pericol (cel care a creat un pericol pentru victimă are obligația de a-l înlătura).',
          '<b>Exemplu tipic</b>: mama care nu hrănește deliberat nou-născutul → omor comis prin omisiune (art. 188 NCP + art. 17 NCP). Mama e garantul; inacțiunea ei echivalează cu o acțiune.',
          '⚠️ <b>Distincție</b>: infracțiunea omisivă proprie (tipică) = elementul material este în sine o omisiune incriminată de lege (ex: nedenunțarea — art. 266 NCP; lăsarea fără ajutor — art. 203 NCP) vs. infracțiunea omisivă improprie = element material normal activ, realizat prin omisiune de garant.'
        ]
      },
      { icon:'🧠', title:'Latura subiectivă (vinovăția — art. 16 NCP)',
        items:[
          '<b>Intenția directă</b>: autorul prevede urmarea și o <b>urmărește</b>.',
          '<b>Intenția indirectă</b> (eventuală): autorul prevede urmarea și, deși nu o urmărește, <b>o acceptă</b>. ⚠️ Diferența față de culpa cu prevedere: la intenție indirectă acceptă producerea; la culpă cu prevedere crede că nu se va produce.',
          '<b>Culpa cu prevedere</b> (ușurința): prevede urmarea dar consideră nejustificat că nu se va produce.',
          '<b>Culpa simplă</b> (neglijența): nu prevede urmarea, deși <b>trebuia și putea</b> să o prevadă.',
          '<b>Praeterintenția</b> (intenție depășită, art. 16 alin. 5 NCP): intenție față de fapta inițială + culpă față de urmarea mai gravă. Exemplu: loviri cauzatoare de moarte (art. 195 NCP) — autorul lovește cu intenție, dar decesul se produce din culpă.',
          '<b>Mobilul</b> (motivul psihologic) și <b>scopul</b>: de regulă nu condiționează existența infracțiunii, dar pot constitui circumstanțe agravante sau elemente ale formei calificate (ex: omor calificat — art. 189 lit. b: din interes material).',
          '<b>Error in persona</b> (eroarea asupra identității victimei): autorul confundă identitatea victimei (crede că este X, dar e Y). Consecință: <b>intenția rămâne</b> — infracțiunea se consumă față de persoana lovită efectiv, cu pedeapsa prevăzută pentru forma respectivă. ⚠️ Error in persona NU produce concurs de infracțiuni — o singură infracțiune consumată.',
          '<b>Aberratio ictus</b> (devierea loviturii): autorul vizează o persoană (A) dar, din executarea defectuoasă (devierea proiectilului), lovește o altă persoană (B). ⚠️ <b>Soluția majoritară în doctrina și practica română</b>: infracțiune <b>unică intenționată consumată</b> față de victima efectiv lovită — la fel ca la error in persona (identitatea victimei nu e element al tipicității). Opinia <b>minoritară</b> (întâlnită și în alte sisteme): concurs — tentativă față de A + faptă din culpă față de B. La grile, verifică formularea — de regulă se cere soluția unității.'
        ]
      },
      { icon:'🔁', title:'Schemă comparativă: cauze justificative vs. neimputabilitate',
        items:[
          '<b>Cauze justificative</b> (art. 18–22 NCP): înlătură <b>antijuridicitatea</b> → fapta <i>nu este infracțiune</i>. Efect <b>IN REM</b>: toți participanții beneficiază automat. Exemple: legitima apărare, starea de necesitate, exercitarea unui drept, consimțământul victimei.',
          '<b>Cauze de neimputabilitate</b> (art. 23–31 NCP): înlătură <b>imputabilitatea</b> → fapta este infracțiune, dar <i>persoana nu răspunde penal</i>. Efect <b>IN PERSONAM</b>: numai cel vizat nu răspunde; ceilalți participanți pot răspunde. Exemple: minoritate, iresponsabilitate, constrângere, eroare, caz fortuit, beție involuntară completă.',
          '⚠️ <b>Distincția practică pentru grile</b>: dacă autorul a acționat justificat → nici instigatorul/complicele nu răspund (fapta nu e infracțiune). Dacă autorul era iresponsabil/minor sub 14 ani (neimputabilitate) → cel care l-a determinat sau ajutat cu intenție răspunde pentru <b>participație improprie</b> (art. 52 NCP), cu pedeapsa prevăzută pentru fapta intenționată.'
        ]
      }
    ],
    grila:'Trăsături esențiale: tipicitate + antijuridicitate + imputabilitate (toate cumulative). Cauze justificative → înlătură <b>antijuridicitatea</b> (efect in rem). Cauze de neimputabilitate → înlătură <b>imputabilitatea</b> (efect in personam). Nullum crimen sine lege → analogia interzisă. Lex mitior: legea mai favorabilă retroactivează. Intenție indirectă vs. culpă cu prevedere: acceptă / vs. / crede că nu se produce. Praeterintenție = intenție + culpă. <b>Error in persona</b>: o infracțiune consumată (intenție păstrată). <b>Aberratio ictus</b>: soluția majoritară RO = tot infracțiune <b>unică intenționată</b> față de cel lovit (teza concursului = minoritară). Determinarea unui iresponsabil → <b>participație improprie</b> (art. 52). Omisivă improprie (art. 17): comisivă prin omisiune, numai de garant (obligație legală/contractuală). Omisivă proprie ≠ improprie: omisivă proprie = elementul material e chiar inacțiunea tipizată.'
  },

  {
    id:'w19', wk:'W19', dates:'2–8 nov', subj:'pen',
    title:'Formele infracțiunii și participația penală',
    sections:[
      { icon:'🔢', title:'Fazele activității infracționale și tentativa (art. 32–34 NCP)',
        items:[
          'Etapele: rezoluție infracțională (nepedepsibilă) → acte pregătitoare → tentativă → consumare → epuizare (la infracțiunile continue/de obicei).',
          '<b>Actele pregătitoare</b>: <b>nepedepsibile</b> ca regulă; pedepsibile numai când legea le asimilează tentativei (ex: art. 412 NCP — pregătiri pentru infracțiuni contra securității naționale).',
          '<b>Tentativa proprie</b>: executarea a început, urmarea nu s-a produs din cauze independente de voința autorului. <b>Tentativa relativ improprie</b>: mijloace relativ improprii sau obiect relativ inexistent la momentul actului → <b>pedepsibilă</b>.',
          '<b>Tentativa absolut improprie</b> (imposibilă): mijloace <b>absolut</b> improprii sau obiect <b>absolut</b> inexistent → <b>nepedepsibilă</b> (art. 32 alin. 2 NCP). Ex: tentativă de omor cu apă turnată în timp ce victima deja murise — obiect absolut inexistent.',
          '<b>Desistarea</b> (renunțare voluntară înainte de consumare) și <b>împiedicarea rezultatului</b> (autorul înlătură urmarea deja declanșată): cauze de <b>nepedepsire</b>. ⚠️ Infracțiunea există dar autorul nu se pedepsește.',
          'Tentativa se sancționează numai dacă legea prevede expres; pedeapsa = <b>jumătate din minimul și maximul</b> special. Tentativa nu e posibilă la: infracțiunile din culpă, infracțiunile de obicei, unele infracțiuni omisive.'
        ]
      },
      { icon:'🔂', title:'Unitatea de infracțiune — continuată, complexă, naturală (art. 35–36 NCP)',
        items:[
          '<b>Infracțiunea continuată</b> (art. 35 alin. 1 NCP): același autor comite la intervale diferite de timp <b>mai multe acțiuni/inacțiuni</b> care realizează, fiecare în parte, conținutul aceleiași infracțiuni, în baza aceleiași <b>rezoluții infracționale</b>. ⚠️ Condiția „împotriva aceluiași subiect pasiv" a fost declarată <b>neconstituțională</b> (CCR 368/2017) — infracțiunea continuată poate exista și cu victime diferite (subiect frecvent de grilă!).',
          '<b>Sancțiunea infracțiunii continuate</b> (art. 36 NCP): pedeapsa prevăzută pentru infracțiune, al cărei <b>maxim special se poate majora cu cel mult 3 ani</b> (închisoare) sau cu cel mult 1/3 (amendă). Momentul epuizării = ultimul act. ⚠️ Prescripția curge de la data <b>epuizării</b>, nu de la primul act.',
          '<b>Infracțiunea complexă</b> (art. 35 alin. 2 NCP): în conținutul ei intră, ca element sau circumstanță agravantă, o acțiune/inacțiune care constituie prin ea însăși o faptă prevăzută de legea penală. Absorbție: infracțiunea absorbantă „înghite" infracțiunea absorbită. <i>Ex: tâlhăria = furt + violență/amenințare; violul care a avut ca urmare moartea victimei (art. 218 alin. 4).</i>',
          '<b>Infracțiunea continuă</b> (tip de unitate naturală): elementul material se prelungește în timp fără întrerupere (ex: lipsirea de libertate, portul nelegal de armă). Se consumă la momentul începerii și se epuizează când acțiunea încetează. Prescripția curge de la epuizare.',
          '<b>Infracțiunea de obicei</b> (tip de unitate naturală): necesită o repetare a actului pentru a fi consumată; actul izolat nu constituie infracțiune. <i>Ex: hărțuirea (art. 208 NCP) — act izolat = nepedepsibil; repetare = hărțuire consumată.</i> ⚠️ Nu se poate reține tentativa la infracțiunile de obicei.',
          '⚠️ <b>Tabel comparativ</b>: continuată (aceeași rezoluție + acte repetate) vs. concurs real (rezoluții diferite + acte repetate) — distincția e esențială pentru tratamentul penal: la continuată = o singură infracțiune (cu spor opțional 1–3 ani); la concurs real = mai multe infracțiuni (cumulul juridic cu spor obligatoriu 1/3).'
        ]
      },
      { icon:'👥', title:'Participația penală (art. 46–52 NCP)',
        items:[
          '<b>Autorul</b>: săvârșește nemijlocit elementul material. <b>Coautoratul</b>: fiecare coautor săvârșește acte de executare (nu doar ajutor). Coautoratul nu e posibil la infracțiunile cu subiect activ unic (ex: violul).',
          '<b>Instigatorul</b> (art. 47): determină cu intenție altă persoană să comită infracțiunea. Pedepsit <b>cu pedeapsa prevăzută pentru autor</b>. Instigare neurmată de executare: instigatorul răspunde numai dacă legea prevede expres (sau dacă actele sale constituie deja altă infracțiune).',
          '<b>Complicele</b> (art. 48): ajutor material sau moral. Complicitate <b>anterioară</b>: promisiunea de a ajuta sau procurarea de instrumente înainte de comitere. Complicitate <b>concomitentă</b>: ajutor în timpul executării. Complicele se pedepsește cu pedeapsa autorului, instanța putând coborî sub minim.',
          '<b>Participația improprie</b> (art. 52 NCP): (a) modalitatea <b>intenție la culpă</b> — cel care determină/ajută cu intenție o persoană care comite fapta din culpă → pedeapsa pentru fapta intenționată; (b) modalitatea <b>intenție la lipsă de vinovăție</b> — determinarea/ajutarea unei persoane care comite fapta fără vinovăție (iresponsabil, minor sub 14 ani, constrâns) → pedeapsa pentru fapta intenționată. ⚠️ Participantul rămâne <b>instigator/complice</b> (nu devine „autor mediat" — noțiune străină de NCP).',
          'La infracțiunile proprii (subiect activ calificat): calitatea specială e cerută numai <b>autorului/coautorilor</b>; instigator sau complice poate fi orice persoană (<i>extraneus</i>). Extraneus-ul nu poate fi autor/coautor al infracțiunii proprii.'
        ]
      },
      { icon:'⚖️', title:'Circumstanțe reale, personale și generale (art. 75–78 NCP)',
        items:[
          '<b>Circumstanțele reale</b>: referitoare la faptă (mijloace periculoase, premeditare, cruzime, loc public) — se răsfrâng asupra <b>tuturor participanților care le-au cunoscut</b> la data comiterii.',
          '<b>Circumstanțele personale</b>: referitoare la persoana participantului (recidivă, calitate specială, stare de minoritate, buna purtare anterioară) — se aplică <b>numai celui la care se referă</b>.',
          '<b>Circumstanțe atenuante</b> (art. 75 NCP): <b>legale</b> (obligatoriu de reținut): provocarea, depășirea limitelor legitimei apărări/stării de necesitate, acoperirea integrală a prejudiciului material (condiționată); <b>judiciare</b> (facultative): eforturile pentru înlăturarea/diminuarea consecințelor, împrejurările legate de fapta comisă. ⚠️ <b>Efectul</b> (art. 76): odată reținute, limitele speciale se <b>reduc obligatoriu cu 1/3</b> — nu „instanța poate coborî sub minim" (acela era vechiul cod)!',
          '<b>Circumstanțe agravante generale</b> (art. 77 NCP): comitere prin cruzimi, cu mijloace periculoase, de trei sau mai multe persoane împreună, față de un minor sau persoană vulnerabilă → instanța <b>poate</b> depăși maximul special cu max. 2 ani (sau 1/3).',
          '⚠️ Circumstanțele speciale (din textul incriminatorului — forma calificată) ≠ circumstanțe generale: circumstanțele speciale modifică <i>însuși tiparul infracțiunii</i>; cele generale modulează pedeapsa în cadrul tipului de bază.'
        ]
      }
    ],
    grila:'Tentativă absolut improprie → <b>nepedepsibilă</b>; tentativă relativ improprie → pedepsibilă. Desistare = cauză de <b>nepedepsire</b> (infracțiunea există). Instigatorul: pedepsit CA autorul. Coautor = acte de executare (nu simplu ajutor). Circumstanțe reale → tuturor participanților care le-au <b>cunoscut</b>; circumstanțe personale → numai celui vizat. Atenuante reținute → limitele se reduc <b>obligatoriu cu 1/3</b> (art. 76 — capcană: nu „poate coborî"). Infracțiune continuată: aceeași rezoluție; „același subiect pasiv" <b>eliminat</b> (CCR 368/2017); maximul se poate majora cu <b>cel mult 3 ani</b>; prescripție de la <b>epuizare</b>. Infracțiune complexă: absorbție (tâlhărie = furt + violență). Infracțiune de obicei: act izolat nepedepsibil, fără tentativă.'
  },

  {
    id:'w20', wk:'W20', dates:'9–15 nov', subj:'pen',
    title:'Cauze justificative, de neimputabilitate, concurs, recidivă, pedepse',
    sections:[
      { icon:'🛡️', title:'Cauze justificative (art. 18–22 NCP) — efect IN REM',
        items:[
          '<b>Legitima apărare</b> (art. 19): atacul = material, direct, imediat (iminent sau în curs), injust, față de sine/altul/interes general. Apărarea = necesară și <b>proporțională</b> cu atacul. Legitima apărare prezumată (art. 19 alin. 3): intruziune nocturnă în locuință — prezumție relativă.',
          '⚠️ <b>Capcană — excesul NEIMPUTABIL</b> (art. 26 NCP): depășirea limitelor legitimei apărări <b>din cauza tulburării sau temerii</b> = cauză de <b>NEIMPUTABILITATE</b> — persoana NU răspunde penal! Doar depășirea <b>fără</b> tulburare/temere („excesul scuzabil") = circumstanță <b>atenuantă legală</b> (art. 75 alin. 1 lit. b). Fișa veche/vechiul cod le inversau — verifică formularea grilei.',
          '<b>Starea de necesitate</b> (art. 20): pericol imediat, care nu putea fi înlăturat altfel, față de viața/integritatea/bunurile sale ori ale altuia sau un interes general. Condiție: urmările să nu fie <b>vădit mai grave</b> decât cele evitate (deci un rău egal sau ușor mai mare nu exclude justificarea!). Depășirea conștientă → atenuantă; depășirea din tulburare/temere → exces neimputabil (art. 26 alin. 2).',
          '<b>Exercitarea unui drept sau îndeplinirea unei obligații</b> (art. 21): conformitate cu o normă legală (ordin al autorității; permisiunea legii). Ordinul evident ilegal trebuie refuzat.',
          '<b>Consimțământul persoanei vătămate</b> (art. 22): valabil numai la infracțiunile cu bunuri juridice disponibile (patrimoniu, integritate corporală minoră). Nu se aplică la viață, integritate gravă, libertate sexuală a unui minor.',
          'Efect <b>IN REM</b>: fapta nu e infracțiune pentru <b>nimeni</b> — nici participanții nu răspund dacă autorul a acționat justificat.'
        ]
      },
      { icon:'🧩', title:'Cauze de neimputabilitate (art. 23–31 NCP) — efect IN PERSONAM',
        items:[
          '<b>Constrângerea fizică sau morală</b>: fapta nu e imputabilă dacă persoana n-a putut rezista. Constrângerea morală = amenințare cu un pericol grav și iminent pentru sine sau altul.',
          '<b>Minoritatea</b> (art. 27, 113–114 NCP): sub <b>14 ani</b> → nicio răspundere penală. <b>14–16 ani</b> → răspunde numai dacă a acționat cu discernământ. <b>16–18 ani</b> → răspunde penal. ⚠️ <b>Capcană</b>: minorilor NU li se aplică pedepse — NCP prevede exclusiv <b>măsuri educative</b>: neprivative (stagiu de formare civică, supravegherea, consemnarea la sfârșit de săptămână, asistarea zilnică) sau privative (centrul educativ 1–3 ani, centrul de detenție 2–5/5–15 ani). „Pedepse reduse la jumătate" = vechiul cod!',
          '<b>Iresponsabilitatea</b> (art. 28 NCP): alienaţie mintală sau stare de inconștiență ce nu permite înțelegerea faptelor sau controlul acțiunilor. Se certifică medico-legal.',
          '<b>Intoxicația</b> (art. 29 NCP): <b>involuntară completă</b> cu alcool/substanțe → cauză de neimputabilitate. ⚠️ Beția <b>voluntară</b> (provocată voit) nu înlătură imputabilitatea; poate constitui circumstanță agravantă.',
          '<b>Eroarea</b> (art. 30 NCP): eroarea de fapt (asupra unui element constitutiv) → înlătură intenția; dacă eroarea e culpabilă, rămâne culpa. Eroarea de drept (asupra normei penale) → înlătură imputabilitatea numai în condiții excepționale.',
          '<b>Cazul fortuit</b> (art. 31 NCP): urmarea nu putea fi prevăzută de nimeni în circumstanțele date. Efect <b>IN PERSONAM</b>: fiecare participant e analizat individual.'
        ]
      },
      { icon:'🔁', title:'Concursul de infracțiuni și recidiva (art. 38–45 NCP)',
        items:[
          '<b>Concursul real</b>: două sau mai multe fapte distincte, comise înainte de orice condamnare definitivă. <b>Concursul ideal (formal)</b>: o singură acțiune sau inacțiune realizează mai multe infracțiuni (ex: lovire ce produce și vătămare și tulburare de ordine).',
          'Pedeapsa la concurs: <b>cumulul juridic cu spor obligatoriu</b> — pedeapsa cea mai grea + spor de <b>până la 1/3 din totalul celorlalte</b> pedepse stabilite (art. 39 NCP). Sporurile nu se cumulează recursiv.',
          '<b>Recidiva</b> (art. 41): primul termen = condamnare definitivă la închisoare <b>mai mare de 1 an</b> pentru infracțiune intenționată; al doilea termen = nouă infracțiune intenționată/praeterintenționată pentru care legea prevede închisoarea de <b>1 an sau mai mare</b>. <b>Postcondamnatorie</b>: noua faptă comisă <b>înainte de executarea integrală</b> → efect: <b>cumul ARITMETIC</b> — pedepsele se adună (art. 43 alin. 1, capcană: nu cumul juridic!).',
          '<b>Recidiva postexecutorie</b>: noua faptă comisă <b>după executarea</b> pedepsei (sau considerarea ca executată), <b>până la reabilitare sau împlinirea termenului de reabilitare</b> — nu există „3 ani"! Efect: limitele speciale ale noii infracțiuni se <b>majorează cu jumătate</b> (art. 43 alin. 5).',
          '<b>Pluralitatea intermediară</b> (art. 44): condamnare definitivă anterioară + nouă infracțiune înainte de executare, fără îndeplinirea condițiilor recidivei (ex: fapte din culpă, pedeapsă ≤1 an) → se aplică <b>regulile concursului</b> (cumul juridic).'
        ]
      },
      { icon:'⚖️', title:'Pedepsele principale și individualizarea (art. 53–91 NCP)',
        items:[
          '<b>Pedepse principale</b>: detențiunea pe viață; închisoarea (<b>15 zile – 30 ani</b>); amenda (<b>zile-amendă × sumă per zi</b>, art. 61 — zilele se stabilesc după gravitate: 30–400 zile; suma per zi după situația materială: 10–500 lei).',
          '<b>Pedepse complementare</b>: interzicerea exercitării unor drepturi (1–5 ani); degradarea militară; publicarea hotărârii de condamnare. <b>Pedepse accesorii</b>: decurg de drept din pedeapsa cu închisoarea, pe durata executării.',
          '<b>Renunțarea la aplicarea pedepsei</b> (art. 80 NCP): instanța constată vinovăția dar nu aplică pedeapsă; condiții — gravitate redusă, nicio condamnare anterioară, repararea prejudiciului. Nu produce antecedente penale.',
          '<b>Amânarea aplicării pedepsei</b> (art. 83 NCP): pedeapsa e stabilită dar amânată pe <b>2 ani</b> sub supraveghere; dacă nu comite o nouă infracțiune intenționată → instanța poate anula pedeapsa. Dacă revocată → pedeapsa se aplică.',
          '<b>Suspendarea sub supraveghere</b> (art. 91 NCP): pedeapsa e aplicată dar nu se execută; termen de supraveghere = <b>2–4 ani</b>. Condiții: pedeapsă ≤3 ani; nicio condamnare anterioară. Revocare: nouă infracțiune sau nerespectare obligații.'
        ]
      },
      { icon:'🔓', title:'Liberarea condiționată (art. 99–106 NCP)',
        items:[
          '<b>Definiție</b>: instituție care permite eliberarea condamnatului înainte de executarea integrală a pedepsei, sub condiția bunei purtări pentru restul din durata pedepsei. Se acordă de instanță (judecătorul delegat cu executarea).',
          '<b>Fracțiile obligatorii</b> (art. 100 NCP): cel puțin <b>2/3</b> din pedeapsa de <b>cel mult 10 ani</b>; cel puțin <b>3/4</b> (dar nu mai mult de 20 de ani) din pedeapsa <b>mai mare de 10 ani</b>. Cu <b>munca prestată</b> luată în calcul: 1/2 (≤10 ani), respectiv 2/3 (>10 ani); condamnatul <b>peste 60 de ani</b>: 1/2, respectiv 2/3. ⚠️ NCP nu diferențiază fracțiile după recidivă (aceea era regula veche). Alte condiții: regim semideschis/deschis, îndeplinirea integrală a obligațiilor civile, convingerea instanței că s-a îndreptat.',
          '<b>Termenul de supraveghere</b>: restul de pedeapsă rămas de executat constituie termenul de supraveghere, dar nu mai puțin de <b>2 ani</b> (art. 100 alin. 5 NCP).',
          '<b>Revocarea liberării condiționate</b> (art. 104 NCP): dacă în termenul de supraveghere condamnatul comite o nouă infracțiune intenționată → se revocă liberarea și execută restul de pedeapsă care rămăsese + pedeapsa nouă (fără contopire obligatorie). Dacă infracțiunea e din culpă → instanța poate sau nu să revoce.',
          '<b>Anularea liberării condiționate</b> (art. 105 NCP): dacă se descoperă că, la data eliberării, condamnatul mai comisese o infracțiune care impune revocarea → liberarea se anulează și se aplică tratamentul corespunzător concursului sau recidivei.',
          '⚠️ <b>Distincție față de suspendarea sub supraveghere</b>: la suspendare, pedeapsa nu se execută deloc (cu condiții la pronunțare); la liberarea condiționată, pedeapsa se execută parțial (cel puțin 2/3 sau 3/4).'
        ]
      }
    ],
    grila:'Cauze justificative → efect <b>IN REM</b>. Cauze de neimputabilitate → efect <b>IN PERSONAM</b>. Excesul din <b>tulburare/temere</b> = NEIMPUTABIL (art. 26 — nu răspunde!); fără tulburare = doar atenuantă (capcană!). Beția <b>voluntară</b> ≠ cauză de neimputabilitate. Minoritate: sub 14 = nicio răspundere; 14–16 = cu discernământ; minorii primesc <b>numai măsuri educative</b> (nu pedepse!). Concurs: cumul juridic cu spor obligatoriu 1/3. Recidivă postcondamnatorie → <b>cumul aritmetic</b>; postexecutorie (până la reabilitare, nu „3 ani"!) → limite +1/2. Amânare pedeapsă: 2 ani supraveghere. Liberare condiționată: <b>2/3</b> (≤10 ani) / <b>3/4</b> (>10 ani); cu muncă: 1/2 / 2/3; termen supraveghere = restul pedepsei; revocare obligatorie la infracțiune intenționată.'
  },

  {
    id:'w21', wk:'W21', dates:'16–22 nov', subj:'pen',
    title:'Infracțiuni contra persoanei',
    sections:[
      { icon:'⚰️', title:'Infracțiuni contra vieții (art. 188–195 NCP)',
        items:[
          '<b>Omorul simplu</b> (art. 188): uciderea cu <b>intenție</b> (directă sau indirectă); pedeapsă <b>10–20 ani</b> + interzicerea unor drepturi. Distincție față de loviri cauzatoare de moarte: criteriul = intenția față de <b>deces</b>.',
          '<b>Omorul calificat</b> (art. 189 NCP) — lista exactă: (a) cu <b>premeditare</b> (rezoluție anterioară + acte de pregătire + interval — nu coexistă cu praeterintenția); (b) din <b>interes material</b>; (c) pentru a se <b>sustrage de la urmărire/arestare/executare</b>; (d) pentru a <b>înlesni sau ascunde</b> altă infracțiune; (e) de către cel care <b>a mai comis un omor</b> sau o tentativă de omor; (f) asupra a <b>două sau mai multe persoane</b>; (g) asupra unei <b>femei gravide</b>; (h) prin <b>cruzimi</b>. Pedeapsă: <b>detențiune pe viață sau 15–25 ani</b>. ⚠️ „Magistrat/polițist/rudă" NU sunt aici — acelea țin de ultraj (art. 257) sau violența în familie (art. 199).',
          '<b>Determinarea sau înlesnirea sinuciderii</b> (art. 191): pedepsibilă numai dacă sinuciderea sau încercarea a avut loc; agravat — victimă minor <b>13–18 ani</b> ori cu discernământ diminuat; și mai grav — minor <b>sub 13 ani</b> sau persoană fără discernământ (limite ca la omor). ⚠️ Simpla încurajare fără efect nu se pedepsește.',
          '<b>Uciderea la cererea victimei</b> (art. 190): victima suferă o boală gravă sau incurabilă; pedeapsă <b>1–5 ani</b>. Rămâne infracțiune — eutanasia activă e incriminată.',
          '<b>Uciderea din culpă</b> (art. 192): moartea produsă fără intenție (neglijență/imprudență); pedeapsă <b>1–5 ani</b>; agravat (2–7 ani): culpă profesională (nerespectarea măsurilor de prevedere în exercitarea profesiei) sau autor în stare de ebrietate/sub influența substanțelor psihoactive.',
          '<b>Loviri cauzatoare de moarte</b> (art. 195): praeterintenție — intenție de a lovi + culpă față de deces; pedeapsă <b>6–12 ani</b>. Dacă autorul urmărea sau accepta decesul → omor (nu loviri).'
        ]
      },
      { icon:'🩹', title:'Infracțiuni contra integrității corporale (art. 193–198 NCP)',
        items:[
          '<b>Lovirea sau alte violențe</b> (art. 193): suferințe fizice fără a atinge pragul de 90 zile; pedeapsă amendă sau max <b>2 ani</b>. Urmărire la <b>plângere prealabilă</b> — retragerea/împăcarea sting acțiunea penală.',
          '<b>Vătămarea corporală</b> (art. 194 alin. 1): fapta care a cauzat oricare dintre: (a) <b>infirmitate</b>; (b) leziuni ce necesită <b>peste 90 de zile</b> de îngrijiri medicale; (c) <b>prejudiciu estetic grav și permanent</b> (sluțire); (d) <b>avortul</b>; (e) <b>punerea în primejdie a vieții</b> — toate la <b>2–7 ani</b>. Urmărire <b>din oficiu</b>.',
          '⚠️ Art. 194 <b>alin. 2</b> nu e o listă de consecințe, ci fapta săvârșită <b>în scopul producerii</b> acestor consecințe (intenție directă) → <b>3–10 ani</b>.',
          '<b>Vătămarea corporală din culpă</b> (art. 196): necesită ≥90 zile sau consecință gravă; forma simplă — la plângere prealabilă; forma agravată (alcool, părăsire a locului accidentului) — din oficiu.',
          'Diferența lovire/vătămare: <b>pragul de 90 zile</b> stabilit de medic legist. Dacă leziunile inițiale sunt sub 90 zile dar se agravează → recalificarea nu e automată; contează starea la momentul comiterii.'
        ]
      },
      { icon:'🔓', title:'Infracțiuni contra libertății și vieții private (art. 205–227 NCP)',
        items:[
          '<b>Lipsirea de libertate</b> (art. 205): reținere/deținere fără drept; pedeapsă <b>1–7 ani</b>. Agravat: >24h, victimă minor, produce suferințe. Formă deosebit de gravă: răpire + reținere + șantaj.',
          '<b>Amenințarea</b> (art. 206 NCP): comunicarea intenției de a comite o infracțiune sau faptă păgubitoare față de victimă/persoană apropiată, de natură a produce temere; urmărire la <b>plângere prealabilă</b>; pedeapsă: închisoare <b>3 luni–1 an</b> sau amendă (nu poate depăși sancțiunea faptei cu care s-a amenințat).',
          '<b>Hărțuirea</b> (art. 208 NCP): adresarea repetată de cuvinte/gesturi/contacte, împotriva voinței — acțiunea e infracțiune <b>de obicei</b> (necesită repetiție); pedeapsă max <b>6 luni</b>.',
          '<b>Violarea de domiciliu</b> (art. 224 NCP): pătrunderea fără drept sau refuzul de a părăsi la cerere; pedeapsă: <b>3 luni–2 ani</b> sau amendă; agravat (persoană înarmată, în timpul nopții, folosind calități mincinoase): <b>6 luni–3 ani</b>. ⚠️ Urmărire la <b>plângere prealabilă</b>.',
          '<b>Violul</b> (art. 218): raport sexual/act oral sau anal prin constrângere ori profitând de imposibilitatea victimei de a se apăra/exprima; pedeapsă <b>5–10 ani</b> (majorată prin L. 217/2020 — nu mai e 3–10!). Forme agravate (victimă minoră, rudă, autor cu funcție de încredere etc.) → limite mai mari. ⚠️ Reforma din 2023: vârsta de protecție ridicată la <b>16 ani</b> — actul sexual cu un minor sub 16 ani e incriminat chiar consimțit (art. 220), cu excepția diferenței mici de vârstă prevăzute de lege.',
          '<b>Violența în familie</b> (art. 199 NCP): când omorul, lovirile, vătămarea (art. 188, 189, 193–195) se săvârșesc asupra unui <b>membru de familie</b> → <b>maximul special se majorează cu O PĂTRIME</b> (nu cu jumătate — capcană!). ⚠️ La lovire (art. 193) și vătămare din culpă (art. 196) în familie: acțiunea penală poate fi pusă în mișcare <b>și din oficiu</b>, dar <b>împăcarea</b> înlătură răspunderea penală (art. 199 alin. 2).',
          '<b>Șantajul</b> (art. 207 NCP): constrângerea unei persoane să dea/să facă/să nu facă/să sufere ceva, în scopul de a dobândi <b>în mod injust un folos nepatrimonial</b>. Pedeapsă: <b>1–5 ani</b>; dacă s-a urmărit un <b>folos patrimonial</b> → <b>2–7 ani</b> (alin. 3). Distincție față de amenințare (art. 206): la șantaj există scopul folosului; amenințarea urmărește doar producerea temerii.'
        ]
      },
      { icon:'🚷', title:'Traficul de persoane și agresiunea sexuală (art. 210–219 NCP)',
        items:[
          '<b>Traficul de persoane</b> (art. 210 NCP): recrutarea, transportul, transferul, cazarea sau primirea de persoane, prin constrângere/fraudă/abuz de putere/promisiune de beneficii, <b>în scopul exploatării</b>. Pedeapsă: <b>3–10 ani</b> + interzicerea unor drepturi.',
          '⚠️ Victima <b>minoră</b> nu e „formă agravată" a art. 210, ci infracțiune distinctă: <b>traficul de minori</b> (art. 211 NCP) — nu cere folosirea mijloacelor de constrângere, iar <b>consimțământul minorului e irelevant</b>. Limitele sunt mai ridicate decât la traficul de adulți (5–10 ani; forme agravate mai sus).',
          '<b>Consimțământul victimei</b> la trafic (art. 210 alin. 3): consimțământul persoanei traficate <b>nu constituie cauză justificativă</b> — capcană de grilă.',
          '<b>Agresiunea sexuală</b> (art. 219 NCP): actul de penetrare sexuală (altul decât raportul sexual sau actul oral-anal din art. 218) sau orice altă activitate sexuală, prin constrângere/imposibilitate de exprimare a victimei. Pedeapsă: <b>2–7 ani</b>. Formă agravată (victima <16 ani): <b>3–10 ani</b>.',
          '⚠️ <b>Distincție viol vs. agresiune sexuală</b>: violul (art. 218) = raport sexual sau act sexual oral/anal prin constrângere; agresiunea sexuală (art. 219) = orice altă activitate sexuală (ex: atingeri sexuale, penetrare cu obiecte). La ambele: lipsa consimțământului e elementul-cheie; victima <16 ani → consimțământul e irelevant.',
          '<b>Hărțuirea sexuală</b> (art. 223 NCP): pretinderea <b>repetată</b> de favoruri sexuale, în cadrul unei relații de muncă sau similare, dacă victima a fost intimidată sau pusă în situație umilitoare. ≠ agresiunea sexuală: nu presupune contact fizic; e infracțiune de obicei (repetare). Pedeapsă: închisoare <b>3 luni–1 an</b> sau amendă; <b>plângere prealabilă</b>.'
        ]
      },
      { icon:'🔁', title:'Schemă comparativă: omor / loviri cauz. de moarte / ucidere din culpă',
        items:[
          '<b>Omor</b> (art. 188–189 NCP): vinovăție față de <b>deces</b> = intenție directă sau indirectă. Autorul voia moartea sau o accepta. Pedeapsă: <b>10–20 ani</b> (simplu) / <b>15–25 ani sau detențiune pe viață</b> (calificat).',
          '<b>Loviri cauzatoare de moarte</b> (art. 195 NCP — praeterintenție): intenție față de lovire + <b>culpă față de deces</b>. Autorul nu urmărea și nu accepta moartea. Pedeapsă: <b>6–12 ani</b>.',
          '<b>Ucidere din culpă</b> (art. 192 NCP): culpă față de deces, nicio intenție. Pedeapsă: <b>1–5 ani</b>. Agravat (alcool, abandon victimă): <b>2–7 ani</b>.',
          '⚠️ <b>Regula de distincție</b>: criteriul = vinovăția față de <b>deces</b> (nu față de lovire). Dacă autorul voia/accepta moartea → omor. Dacă lovea intenționat, dar moartea = culpă → loviri cauzatoare de moarte. Dacă totul din culpă → ucidere din culpă. Premeditarea și praeterintenția <b>nu coexistă</b>.'
        ]
      }
    ],
    grila:'Omor vs. loviri cauzatoare de moarte: intenție față de deces. Premeditare ≠ praeterintenție (nu coexistă). Prag vătămare corporală: <b>90 zile îngrijiri medicale</b>. Lovire simplă: plângere prealabilă; vătămare corporală: din oficiu. Amenințare, hărțuire, violare de domiciliu: plângere prealabilă. Viol: <b>5–10 ani</b> (L. 217/2020); vârsta de protecție: <b>16 ani</b> (2023). Eutanasia = infracțiune (art. 190). Violența în familie: maximul se majorează cu <b>o pătrime</b> (nu ½ — capcană!); lovirea în familie → și din oficiu, dar <b>împăcarea</b> înlătură răspunderea. Șantaj: folos nepatrimonial 1–5; <b>patrimonial 2–7</b>. Trafic de persoane: <b>3–10 ani</b>; minor → art. 211 (infracțiune distinctă, consimțământ irelevant); consimțământul victimei nu justifică (art. 210 al.3). Agresiune sexuală ≠ viol: agresiune = orice activitate sexuală non-penetrare vaginală/orală/anală prin constrângere.'
  },

  {
    id:'w22', wk:'W22', dates:'23–29 nov', subj:'pen',
    title:'Infracțiuni contra patrimoniului + infracțiuni de fals',
    sections:[
      { icon:'💰', title:'Infracțiuni contra patrimoniului — forme principale (art. 228–256 NCP)',
        items:[
          '<b>Furtul simplu</b> (art. 228): luarea bunului mobil din posesia/detenția altuia, <b>fără consimțământ</b>, cu intenția de a-l însuși pe nedrept. <b>Furtul în scop de folosință</b> (art. 230): luarea temporară (fără intenție de apropriere); pedeapsă redusă.',
          '<b>Furtul calificat</b> (art. 229) — pe trepte: <b>1–5 ani</b>: în mijloc de transport în comun, în timpul nopții, de o persoană mascată/deghizată, prin efracție/escaladare/cheie adevărată ori mincinoasă, prin scoaterea din funcțiune a alarmei; <b>2–7 ani</b>: bun din patrimoniul cultural, prin violare de domiciliu/sediu profesional, de o persoană având asupra sa o armă; <b>3–10 ani</b>: componente de rețele electrice, echipamente feroviare etc. ⚠️ „2+ persoane" NU e la furt calificat — „trei sau mai multe împreună" e circumstanță agravantă generală (art. 77).',
          '<b>Tâlhăria</b> (art. 233): furt + violență/amenințare — inclusiv violența folosită <b>după</b> luare, pentru <b>păstrarea bunului sau asigurarea scăpării</b> (e în chiar definiția art. 233). <b>Tâlhăria calificată</b> (art. 234): armă, noapte, mascat, violare de domiciliu etc. Urmată de <b>moartea victimei</b> (praeterintenție) → art. 236. Pirateria e infracțiune separată (art. 235).',
          '<b>Înșelăciunea</b> (art. 244): inducerea în eroare prin acțiune/omisiune + prejudiciu patrimonial. Fără prejudiciu cert → tentativă. ⚠️ Înșelăciunea ≠ abuzul de încredere: la înșelăciune bunul se obține <i>prin eroare</i>; la abuz, e predat <i>de bunăvoie</i> inițial.',
          '<b>Abuzul de încredere</b> (art. 238): bunul predat cu consimțământ (în baza unui titlu), apoi însușit, folosit fără drept sau nerestituit. Urmărire la <b>plângere prealabilă</b>. <b>Gestiunea frauduloasă</b> (art. 242): subiect special — cel care are gestionarea/administrarea bunurilor altuia; prejudicierea acestora; tot la plângere prealabilă (forma de bază).',
          '<b>Distrugerea</b> (art. 253 NCP): distrugerea/degradarea/aducerea în stare de neîntrebuințare a unui bun <b>al altuia</b>; forma simplă — la <b>plângere prealabilă</b>. Distrugerea prin <b>incendiere, explozie sau alt mijloc periculos</b> (pericol public) → 2–7 ani, din oficiu — și se pedepsește <b>chiar dacă bunul e al făptuitorului</b>. Bun din patrimoniul cultural → agravat.'
        ]
      },
      { icon:'📄', title:'Infracțiunile de fals (art. 310–328 NCP)',
        items:[
          '<b>Falsificarea de monede/valori</b> (art. 310 NCP): contrafacerea sau alterarea monedelor, titlurilor de valoare, instrumentelor de plată; subiect activ orice persoană. Gravitate sporită: punerea în circulație e și ea incriminată separat.',
          '<b>Falsul material în înscrisuri oficiale</b> (art. 320): contrafacerea sau alterarea <b>fizică</b> a înscrisului oficial. Comis de funcționar → formă agravată. Înscris <b>oficial</b> = emis de autoritate publică sau organ de stat.',
          '<b>Falsul intelectual</b> (art. 321): funcționarul competent inserează <b>date false</b> la momentul întocmirii actului. Subiect activ special: funcționar cu atribuții de autentificare. ⚠️ Falsul material = alterare post-emitere; falsul intelectual = date false de la bun început.',
          '<b>Falsul în înscrisuri sub semnătură privată</b> (art. 322): falsificarea unui înscris privat, urmată de folosire sau încredințare spre folosire. Infracțiune complexă (fals + uz = una singură) — uzul separat e absorbit.',
          '<b>Uzul de fals</b> (art. 323): folosirea unui înscris oficial ori sub semnătură privată fals, în vederea producerii de consecințe juridice. ⚠️ <b>Capcană</b>: la înscrisurile <b>oficiale</b>, chiar <b>autorul falsului</b> care îl folosește răspunde în <b>concurs</b> (fals material + uz de fals). Absorbția operează doar la falsul în înscrisuri <b>sub semnătură privată</b> (art. 322), unde folosirea/încredințarea e element constitutiv al falsului.',
          '<b>Falsul în declarații</b> (art. 326): declararea mincinoasă în fața unui organ de stat, cu scopul de a produce consecințe juridice. ⚠️ Subiect activ: orice persoană (nu trebuie să fie funcționar). <b>Falsul informatic</b> (art. 325): introducerea/modificarea/ștergerea de date informatice fără drept, cu consecință juridică = asimilat falsului în înscrisuri.'
        ]
      },
      { icon:'💻', title:'Frauda informatică și înșelăciunea agravată (art. 249, 244 alin. 2 NCP)',
        items:[
          '<b>Frauda informatică</b> (art. 249 NCP): introducerea, modificarea sau ștergerea de date informatice, restricționarea accesului la date informatice, sau perturbarea funcționării unui sistem informatic, <b>cu intenția de a obține un beneficiu material</b> pentru sine sau pentru altul. Pedeapsă: <b>2–7 ani</b>.',
          '⚠️ <b>Distincție</b>: frauda informatică (art. 249) = modificare de date informatice + scop patrimonial; vs. accesul neautorizat la sisteme informatice (art. 360 NCP) = simpla accesare fără drept, fără scop patrimonial obligatoriu. Un hacker care modifică solduri bancare pentru profit → art. 249; cel care accesează fără să modifice → art. 360.',
          '<b>Înșelăciunea agravată</b> (art. 244 alin. 2 NCP): săvârșită prin folosirea de <b>nume sau calități mincinoase ori alte mijloace frauduloase</b> → <b>1–5 ani</b> (simpla: 6 luni–3 ani). ⚠️ „Înșelăciunea în convenții" ca formă distinctă era <b>vechiul cod</b> (art. 215 al. 3) — sub NCP faptele contractuale se încadrează în art. 244 al. 1 sau 2. <b>Împăcarea înlătură răspunderea penală</b> (art. 244 alin. 3).',
          '<b>Condiția prejudiciului</b>: la înșelăciune, prejudiciul cert e necesar pentru consumarea infracțiunii. Simpla inducere în eroare fără prejudiciu = tentativă de înșelăciune sau faptă contravențională.',
          '⚠️ <b>Concurs între frauda informatică și fals informatic</b> (art. 325 NCP): dacă aceeași persoană modifică date informatice (art. 325 fals informatic) cu scop de a obține un avantaj patrimonial (art. 249 fraudă) → concurs ideal de infracțiuni (o singură acțiune realizează mai multe infracțiuni).'
        ]
      }
    ],
    grila:'Furt ≠ abuz de încredere: criteriul = <b>cum a intrat în posesie</b> (fără consimțământ / cu consimțământ). Tâlhăria: violența poate fi și <b>ulterioară</b> luării. Falsul material = alterare fizică; falsul intelectual = date false la întocmire (funcționar special). Uz de fals la înscris <b>oficial</b>: chiar autorul falsului → <b>concurs</b> fals + uz (capcană!). Fals în înscrisuri private: fals + uz = o singură infracțiune (absorbție). Fraudă informatică (art. 249): modificare date + scop patrimonial; ≠ acces neautorizat (art. 360). Înșelăciune agravată (244 al.2): <b>mijloace frauduloase</b> → 1–5; împăcarea înlătură răspunderea (al.3). Furt calificat: fără „2+ persoane" (aceea e art. 77); distrugerea bunului propriu — doar prin mijloace periculoase.'
  },

  {
    id:'w23', wk:'W23', dates:'30 nov–6 dec', subj:'pen',
    title:'Corupție, infracțiuni de serviciu și contra justiției',
    sections:[
      { icon:'💼', title:'Infracțiuni de corupție (art. 289–294 NCP)',
        items:[
          '<b>Funcționar public</b> (art. 175 NCP): (1) persoana numită/aleasă/contractată în cadrul autorităților publice sau instituțiilor publice; (2) persoana care exercită prerogative de putere publică sau serviciu public (asimilat). ⚠️ Medicul din sistemul public, notarul, expertul judiciar = funcționar public asimilat.',
          '<b>Luarea de mită</b> (art. 289): funcționarul pretinde/primește foloase necuvenite sau acceptă promisiunea lor, în legătură cu un act al funcției (indiferent dacă actul a fost sau nu îndeplinit). Consumarea = la momentul <b>pretinderii sau primirii</b>.',
          '<b>Darea de mită</b> (art. 290): promiterea/oferirea/darea de foloase funcționarului. Constrângere → <b>cauza de nepedepsire</b> pentru mituitor. ⚠️ Mituitorul care denunță înainte de sesizarea organelor → poate beneficia de nepedepsire (art. 290 alin. 3).',
          '<b>Traficul de influență</b> (art. 291): persoana care are sau lasă să se creadă că are influență asupra unui funcționar pretinde/primește foloase pentru a-l determina să acționeze. ⚠️ <b>Nu trebuie să fie funcționar</b>; influența poate fi reală sau imaginară.',
          '<b>Cumpărarea de influență</b> (art. 292): promisiunea/darea de foloase pentru a cumpăra influența. Sub constrângere → cauza de nepedepsire. ⚠️ Distinție față de dare de mită: la trafic de influență, persoana coruptă nu e funcționarul însuși, ci un intermediar.'
        ]
      },
      { icon:'🏛️', title:'Infracțiuni de serviciu (art. 295–309 NCP)',
        items:[
          '<b>Delapidarea</b> (art. 295): funcționarul/angajatul gestionar care însușește/folosește/trafichează bunurile entității. Subiect activ special: cel care gestionează bunuri în virtutea funcției. ⚠️ Diferit de furt: delapidarea presupune calitate specială + bunuri deja aflate în gestiune.',
          '<b>Abuzul în serviciu</b> (art. 297): funcționarul nu îndeplinește sau îndeplinește defectuos atribuțiile de serviciu, cauzând prejudiciu sau vătămând drepturile cuiva. Intenție. ⚠️ Decizia CCR nr. 405/2016: abuzul trebuie să decurgă dintr-o nerespectare a <i>legii</i> (nu simplă apreciere de oportunitate).',
          '<b>Neglijența în serviciu</b> (art. 298): ca abuzul, dar săvârșit din <b>culpă</b>. Limita superioară a pedepsei = mai mică decât la abuz.',
          '<b>Conflictul de interese</b> (art. 301 NCP): funcționarul participă la luarea unei decizii prin care se realizează un folos material pentru sine, soț, rudă directă sau afinitate de grad I. Nu necesită folos efectiv — e suficientă participarea la decizie.',
          '<b>Omisiunea sesizării</b> (art. 267 NCP): funcționarul public care, în exercitarea funcției, ia cunoștință de o infracțiune și omite să sesizeze organele de urmărire penală. Subiect activ special: funcționar public.'
        ]
      },
      { icon:'⚖️', title:'Infracțiuni contra înfăptuirii justiției (art. 266–288 NCP)',
        items:[
          '<b>Denunțul calomnios</b> (art. 268): sesizarea mincinoasă a organelor judiciare cu o faptă penală neexistentă sau necomisă de persoana denunțată. ⚠️ Dacă autorul denunțului credea sincer că fapta există → nu e infracțiune (lipsă intenție).',
          '<b>Mărturia mincinoasă</b> (art. 273): declarații false ca martor/expert/interpret în fața unui organ judiciar. Cauza de nepedepsire: <b>retractarea</b> declarației înainte de a se pronunța o hotărâre sau a se da o altă soluție.',
          '<b>Favorizarea făptuitorului</b> (art. 269): ajutorarea unui infractor să se sustragă urmăririi/judecării. Cauza de nepedepsire: <b>soțul și rudele apropiate</b> ale favorizatorului. ⚠️ Ruda care favorizează nu se pedepsește; ruda care ia parte la comiterea infracțiunii inițiale — se pedepsește.',
          '<b>Tăinuirea</b> (art. 270): primirea/dobândirea/transformarea de bunuri provenite din infracțiune, cunoscând proveniența. <b>Tăinuire = bunuri; favorizare = persoana infractorului</b>. Tăinuirea nu se pedepsește dacă era previzibil că bunurile sunt ale tale.',
          '<b>Obstrucționarea justiției</b> (art. 271): împiedicarea actelor de urmărire sau judecată prin violență/amenințare/corupere/orice alte mijloace.'
        ]
      },
      { icon:'🔁', title:'Schemă comparativă: luare de mită / trafic de influență / abuz în serviciu',
        items:[
          '<b>Luarea de mită</b> (art. 289): subiect activ = <b>funcționar public</b>; primește foloase necuvenite pentru <b>actul propriu</b> de serviciu; foloase = obligatorii. Consumare: la pretindere sau primire, indiferent dacă actul a fost îndeplinit.',
          '<b>Traficul de influență</b> (art. 291): subiect activ = <b>oricine</b> (nu trebuie să fie funcționar); pretinde foloase pentru a influența <b>un alt funcționar</b>; influența poate fi reală sau fictivă (pretinsă). Consumare: la pretindere.',
          '<b>Abuzul în serviciu</b> (art. 297): subiect activ = <b>funcționar public</b>; îndeplinire defectuoasă a atribuțiilor proprii; <b>nu necesită foloase</b> (dacă există foloase obținute → devine luare de mită). Vinovăție: <b>intenție</b>.',
          '⚠️ <b>Regula-cheie</b>: luarea de mită = funcționarul + foloase + act propriu. Traficul = oricine + foloase + actul altuia. Abuzul = funcționarul + niciun folos + atribuții proprii neîndeplinite/defectuoase. Dacă funcționarul ia foloase ȘI acționează defectuos → luare de mită (absoarbe abuzul).'
        ]
      },
      { icon:'💰', title:'Spălarea banilor și evaziunea fiscală',
        items:[
          '<b>Spălarea banilor</b> (art. 49 Legea 129/2019, fostul art. 29 Legea 656/2002): (1) schimbarea sau transferul bunurilor provenite din infracțiuni predicat; (2) ascunderea sau disimularea naturii, originii, localizării bunurilor; (3) dobândirea, deținerea sau folosirea bunurilor, știind că provin din infracțiuni. Pedeapsă: <b>3–12 ani</b>.',
          '<b>Infracțiunea predicat</b>: orice infracțiune care poate genera venituri (trafic de droguri, corupție, evaziune, fraudă etc.). ⚠️ <b>Nu se cere condamnarea</b> pentru infracțiunea predicat pentru a condamna pentru spălare de bani — e suficient să se dovedească că bunurile provin dintr-o activitate infracțională.',
          '<b>Cauza de nepedepsire</b>: autorul spălării de bani poate fi chiar autorul infracțiunii predicat (auto-spălare). NCC nu exclude auto-spălarea — dacă autorul furtului spală banii rezultați → poate fi condamnat și pentru spălare.',
          '<b>Evaziunea fiscală</b> (Legea 241/2005, art. 9): sustragerea de la plata obligațiilor fiscale prin: (1) ascunderea bunului sau a sursei impozabile; (2) documente false; (3) evidențe false sau duble. Pedeapsă: <b>2–8 ani</b> (forma de bază); dacă prejudiciul depășește <b>500.000 euro</b> → <b>7–15 ani</b>.',
          '<b>Cauza de nepedepsire la evaziune</b> (art. 10 L. 241/2005): dacă în cursul urmăririi penale sau al judecății, până la primul termen de judecată, învinuitul/inculpatul acoperă <b>integral</b> prejudiciul cauzat → se aplică o pedeapsă redusă sau se poate dispune renunțarea la urmărire. ⚠️ Acoperirea parțială nu atrage nepedepsirea, ci poate fi circumstanță atenuantă.',
          '<b>Distincție spălare vs. tăinuire</b>: tăinuirea (art. 270 NCP) = primirea/dobândirea de bunuri provenite dintr-o infracțiune, fără a le integra în circuit financiar legitim; spălarea de bani = acțiuni active de disimulare/integrare. Spălarea e mai gravă și presupune o activitate mai complexă de ascundere.'
        ]
      }
    ],
    grila:'Luare de mită = <b>funcționarul însuși</b> primește; trafic de influență = <b>oricine</b> pretinde că influențează funcționarul. Dare de mită sub constrângere → <b>nepedepsire</b>. Abuz în serviciu: numai prin nerespectarea <b>legii</b> (CCR 405/2016). Conflict de interese ≠ abuz: participare la decizie fără folos efectiv. Mărturie mincinoasă: retractare înainte de soluție → nepedepsire. Favorizare: soțul/rudele nu se pedepsesc. Tăinuire = bunuri; favorizare = persoana. Spălare bani: <b>3–12 ani</b>; nu cere condamnarea pentru infracțiunea predicat; auto-spălare posibilă. Evaziune fiscală: <b>2–8 ani</b>; acoperire integrală a prejudiciului → cauza de nepedepsire (primul termen de judecată).'
  },

  {
    id:'w24', wk:'W24', dates:'7–13 dec', subj:'pen',
    title:'Infracțiuni la regimul circulației + recap infracțiuni speciale',
    sections:[
      { icon:'🚗', title:'Infracțiuni la regimul circulației pe drumuri publice (art. 334–341 NCP)',
        items:[
          '<b>Conducerea fără permis</b> (art. 335): vehicul pe drum public, fără permis valabil pentru categorie, <b>sau cu permis suspendat/anulat</b>. Conducerea cu permis suspendat = aceeași sancțiune. Pedeapsă: <b>1–5 ani</b>.',
          '<b>Conducerea sub influența alcoolului</b> (art. 336): alcoolemie ≥ <b>0,80 g/l sânge</b> SAU sub influența substanțelor psihoactive. Infracțiunea = consumată indiferent de accident. ⚠️ Sub 0,80 g/l = contravenție (nu infracțiune).',
          '<b>Refuzul recoltării de probe biologice</b> (art. 337): refuzul de a se supune testării cu aparate sau recoltării de sânge/urină. Infracțiune <b>distinctă</b> față de conducere sub alcool — concurs posibil dacă ulterior se probează și alcoolemia.',
          '<b>Conducere periculoasă</b> (art. 334 NCP): depășire a limitei de viteză, trecere la roșu, neacordare de prioritate, în mod periculos. Infracțiune de pericol — nu necesită producerea unui accident.',
          '<b>Accidente de circulație cu victime</b>: dacă se produce accident → concurs de infracțiuni (conducere sub alcool + ucidere din culpă art. 192 NCP / vătămare corporală din culpă art. 196 NCP). <b>Părăsirea locului accidentului</b> (art. 338): fără acordul polițistului = infracțiune distinctă.'
        ]
      },
      { icon:'🖥️', title:'Infracțiunile informatice (art. 360–366 NCP)',
        items:[
          '<b>Accesul ilegal la un sistem informatic</b> (art. 360 NCP): accesul, fără drept, la un sistem informatic. Forma agravată: dacă e necesară depășirea unor măsuri de securitate → pedeapsă <b>3–12 ani</b>. Forma simplă (fără depășirea securității): <b>1–5 ani</b>.',
          '<b>Interceptarea ilegală a unei transmisii informatice</b> (art. 361 NCP): interceptarea fără drept a transmisiilor de date informatice nedestinat publicului. Pedeapsă: <b>2–7 ani</b>.',
          '<b>Alterarea integrității datelor informatice</b> (art. 362 NCP): modificarea, ștergerea sau deteriorarea de date informatice, accesarea sistematică, blocarea, copierea sau transferul. Pedeapsă: <b>2–7 ani</b>. ⚠️ Diferit de frauda informatică (art. 249): art. 362 nu cere scop patrimonial.',
          '<b>Perturbarea funcționării sistemelor informatice</b> (art. 363 NCP): transmiterea de date informatice în scopul de a împiedica funcționarea (ex: atacuri DDoS). Pedeapsă: <b>2–7 ani</b>.',
          '<b>Operațiunile ilegale cu dispozitive sau programe informatice</b> (art. 365 NCP): producerea, comercializarea, importul/exportul de software sau dispozitive concepute pentru săvârșirea infracțiunilor informatice (ex: malware, exploit kits). Pedeapsă: <b>1–5 ani</b>.',
          '⚠️ <b>Distincție sistematică</b>: art. 360 = acces neautorizat; art. 361 = interceptare; art. 362 = alterare date; art. 363 = perturbarea funcționării; art. 364 = falsul informatic (cu consecință juridică); art. 365 = instrumente de atac. Infracțiunile pot fi în concurs. Baza legală = Legea 161/2003 + transpunere Directiva NIS.'
        ]
      },
      { icon:'🔍', title:'Recapitulare — delimitări esențiale infracțiuni speciale',
        items:[
          '<b>Omor / loviri cauzatoare de moarte / ucidere din culpă</b>: criteriul = <i>intenția față de deces</i>. Omor = intenție directă/indirectă față de moarte. Loviri cauzatoare de moarte = praeterintenție (intenție la lovire + culpă la deces). Ucidere din culpă = culpă față de moarte.',
          '<b>Furt / abuz de încredere / înșelăciune / tâlhărie</b>: furt = luare fără consimțământ. Abuz de încredere = primit cu consimțământ, nestituit. Înșelăciune = consimțământul viciat prin eroare + prejudiciu. Tâlhărie = furt + violență (chiar ulterioară luării).',
          '<b>Luare de mită / trafic de influență / abuz în serviciu</b>: luare de mită = funcționarul primește foloase pentru actul propriu. Trafic de influență = oricine pretinde foloase pentru a influența un funcționar. Abuz în serviciu = neîndeplinire/îndeplinire defectuoasă a atribuțiilor, <b>fără foloase</b> (dacă există foloase = luare de mită).',
          '<b>Delapidare / abuz în serviciu / gestiune frauduloasă</b>: delapidare = funcționar gestionar care <i>însușește</i> bunuri. Abuz în serviciu = funcționar care îndeplinește defectuos atribuțiile. Gestiunea frauduloasă = orice persoană căreia i s-au încredințat bunuri de administrat le prejudiciază.',
          '<b>Vătămare corporală / lovire și alte violențe</b>: pragul = 90 zile îngrijiri medicale. Sub 90 zile = lovire (plângere prealabilă). Peste 90 zile sau consecință gravă = vătămare corporală (din oficiu). Prag stabilit de medic legist.',
          '<b>Tăinuire / favorizare</b>: tăinuire = <i>bunuri</i> provenite din infracțiune. Favorizare = <i>persoana</i> infractorului e ajutată să se sustragă. Soțul/rudele apropiate ale favorizatorului → <b>nepedepsire</b>; nu și la tăinuire.'
        ]
      }
    ],
    grila:'Conducere sub alcool: ≥ <b>0,80 g/l sânge</b>; consumată fără accident. Dacă accident → concurs cu ucidere/vătămare din culpă. Omor = intenție față de deces; loviri cauzatoare de moarte = praeterintenție. Vătămare corporală: prag <b>90 zile</b>. Luare de mită = funcționar + foloase pentru act propriu; trafic de influență = oricine + influență asupra funcționarului. Tăinuire = bunuri; favorizare = persoana. Infracțiuni informatice art. 360–366: acces (<b>1–5</b> / <b>3–12</b> cu securitate depășită), interceptare (<b>2–7</b>), alterare date (<b>2–7</b>), perturbare (<b>2–7</b>). Fraudă informatică (art. 249) ≠ alterare date (art. 362): la fraudă se cere scop patrimonial.'
  },

  // ══ PROCEDURĂ CIVILĂ ══════════════════════════════════════════════════════════

  {
    id:'w26', wk:'W26', dates:'21–27 dec', subj:'pciv',
    title:'Procedură Civilă — judecata',
    sections:[
      { icon:'🏛️', title:'Competența instanțelor (art. 94–147 NCPC)',
        items:[
          '<b>Judecătoria</b>: cazuri de drept comun (valoare ≤ 200.000 lei), plângeri contravenționale, cereri provizorii, ordonanță de plată sub 50.000 lei, evacuare, partaj sub 200.000 lei.',
          '<b>Tribunalul</b>: primă instanță pentru cereri cu valoare > <b>200.000 lei</b>, conflicte de muncă, materie comercială, contencios administrativ sub 3 mil. lei; <b>instanță de apel</b> față de judecătorie.',
          '<b>Curtea de Apel</b>: apeluri față de tribunal (în primă instanță); recursuri față de tribunal (în apel). Curtea de Apel = instanță de recurs pentru hotărârile tribunalului pronunțate în apel.',
          '<b>Competența teritorială de drept comun</b> (art. 107): instanța de la domiciliul/sediul <b>pârâtului</b>. Mai multe domicilii → reclamantul alege. ⚠️ Nu domiciliul reclamantului.',
          '<b>Competența alternativă</b>: contract → și instanța locului de executare a obligației; delict → și instanța locului prejudiciului. Reclamantul alege dintre mai mulți pârâți cu domicilii diferite.',
          '<b>Competența exclusivă</b> (nu se poate deroga): imobile → locul situării imobilului; societăți → sediul social; succesiuni → ultimul domiciliu al defunctului; evacuare → locul imobilului.',
          '<b>Necompetența absolută</b> (art. 129 NCPC): privește competența materială și teritorială exclusivă; poate fi invocată de orice parte sau din oficiu, <b>în orice stare a pricinii</b>. Sancțiune: nulitatea hotărârii. ⚠️ Exemple: cauza aparținea unui alt grad de jurisdicție (tribunalul judecă ce era al curții de apel); imobilul era în circumscripția altei instanțe (exclusivă).',
          '<b>Necompetența relativă</b> (art. 130 NCPC): privește competența teritorială de drept comun (alternativă); poate fi invocată <b>numai de pârât prin întâmpinare</b> (sau cel târziu la primul termen dacă nu s-a depus întâmpinare). Dacă pârâtul nu o invocă în termen → <b>se acoperă</b> (proroga tacită). ⚠️ Dacă nici una din părți nu invocă și instanța are competență relativă → judecă valabil.'
        ]
      },
      { icon:'⚖️', title:'Acțiunea civilă, excepții și participanți (art. 29–88 NCPC)',
        items:[
          '<b>Condițiile exercitării acțiunii</b>: drept subiectiv (pretins), interes (actual, născut, personal, direct), calitate procesuală activă/pasivă, capacitate procesuală. Lipsa oricăreia → respingerea acțiunii.',
          '<b>Autoritatea de lucru judecat</b> (art. 431 NCPC): excepție peremptoriu — necesită <b>tripla identitate</b>: aceleași <i>părți</i> + același <i>obiect</i> + aceeași <i>cauză</i>. Hotărârea definitivă → nu se poate rejudeca. ⚠️ Dacă lipsește una = nu există autoritate de lucru judecat.',
          '<b>Excepțiile dilatorii</b> (amână judecata): necompetența, litispendența, conexitatea, lipsa procedurii prealabile, neregularitatea cererii. Litispendența = același litigiu la două instanțe → dosarul mai nou se trimite la instanța mai veche sesizată.',
          '<b>Excepțiile peremptorii</b> (sting acțiunea): prescripția dreptului la acțiune, autoritatea de lucru judecat, lipsa calității procesuale, lipsa capacității, puterea lucrului judecat.',
          '<b>Cererea reconvențională</b> (art. 209 NCPC): pârâtul formulează pretenții proprii față de reclamant; depusă odată cu întâmpinarea; judecată împreună cu acțiunea principală. Poate fi disjunsă dacă complică excesiv cauza.',
          '<b>Intervenția voluntară principală</b> (terțul pretinde drept propriu) vs. <b>accesorie</b> (terțul sprijină una din părți); <b>Chemarea în garanție</b>: pârâtul cheamă o terță persoană de la care poate pretinde să îl despăgubească dacă pierde.',
          '⚠️ <b>Nu confunda</b>: <b>litispendență</b> = același litigiu la 2 instanțe concomitent → excepție <i>dilatoriu</i>, dosarul mai nou se trimite la instanța mai veche. <b>Conexitate</b> = litigii <i>diferite dar legate</i> → reunire <i>facultativă</i> la instanța mai veche. <b>Autoritate de lucru judecat</b> = hotărâre <i>definitivă deja pronunțată</i> → excepție <i>peremptoriu</i>, acțiunea se respinge.'
        ]
      },
      { icon:'📋', title:'Judecata în primă instanță — etape esențiale',
        items:[
          '<b>Cererea de chemare în judecată</b>: instanța, datele de identificare ale părților, obiectul, motivele de fapt și drept, mijloacele de probă. Cerere incompletă → regularizare. Timbraj: taxa judiciară de timbru (calculată după valoare).',
          '<b>Întâmpinarea</b>: termen general <b>25 de zile</b> de la comunicarea cererii. Nedepusă → pârâtul este decăzut din dreptul de a propune probe (dar poate invoca excepții peremptorii).',
          '<b>Probe</b> (art. 249–388 NCPC): înscrisuri, martori, expertiză, interogatoriu, prezumții, cercetare la fața locului. Sarcina probei = cel care afirmă. Proba cu martori: nu e admisă peste 250 lei pentru acte juridice (cu excepții).',
          '<b>Dezbaterile și deliberarea</b>: dezbateri publice; deliberare în secret; minuta semnată imediat după deliberare; hotărârea redactată și comunicată în 30 de zile.'
        ]
      },
      { icon:'📂', title:'Hotărârea și căile de atac',
        items:[
          '<b>Apelul</b>: calea ordinară de atac; termen <b>30 de zile</b> de la <i>comunicarea</i> hotărârii (nu de la pronunțare). Devolutiv: rejudecă fondul în fapt și în drept. Probe noi admisibile în apel în condiții limitate.',
          '<b>Recursul</b>: cale extraordinară, exclusiv în drept. Motive limitativ prevăzute (art. 488 NCPC): interpretare greșită a legii, omisiune normă, incompetență etc. Nu se readministrează probe. Termen: <b>30 de zile</b> de la comunicare.',
          '<b>Contestația în anulare</b> (art. 503 NCPC): hotărâri definitive; motive: necitare legală a unei părți, hotărâre incompatibilă cu altă hotărâre irevocabilă. Termen: 15 zile de la comunicare sau de la cunoașterea motivului.',
          '<b>Revizuirea</b> (art. 509 NCPC): motive de fapt nou descoperite (înscrisuri false, mărturii false, eroare materială, hotărâri penale contrare). Termen: 1 lună de la data la care reclamantul a luat cunoștință de motiv.'
        ]
      },
      { icon:'⚡', title:'Ordonanța președințială (art. 997–1002 NCPC)',
        items:[
          '<b>Definiție și scop</b>: procedură urgentă prin care instanța poate dispune <b>măsuri provizorii</b> în cazuri grabnice, fără a prejudeca fondul cauzei și fără a-l leza pe pârât printr-o hotărâre definitivă. Caracterul provizoriu e esențial — hotărârea se poate modifica sau desființa dacă se schimbă împrejurările.',
          '<b>Condiții cumulative</b>: (1) <b>urgența</b> — prejudiciul iminent sau în curs, care nu poate fi evitat altfel; (2) <b>neprejudecarea fondului</b> — instanța nu tranșează dreptul principal (nu spune cine are dreptate definitiv); (3) <b>caracterul provizoriu</b> al măsurii — încetează automat la soluționarea fondului sau la schimbarea împrejurărilor.',
          '<b>Competența</b>: instanța competentă să judece fondul cauzei sau, dacă nu există fond pe rol, instanța de la domiciliul pârâtului. Judecătoria e adesea competentă pentru măsuri provizorii cu valoare mică; tribunalul pentru altele.',
          '<b>Procedura</b>: judecată de urgență, cu citarea părților (de regulă); hotărârea se pronunță imediat sau în cel mult <b>3 zile</b>; executorie de drept (<b>nu trebuie așteptat apelul</b>). Calea de atac: <b>apel în 5 zile</b> de la pronunțare sau comunicare.',
          '<b>Exemple de aplicare</b>: custodiei provizorii a copilului în divorț; reintegrarea urgentă în posesie; sistarea unei lucrări de urgență; predarea provizorie a unui bun. ⚠️ Nu confunda cu măsurile asigurătorii (sechestrul, poprirea asigurătorie) care sunt mai degrabă de conservare a bunurilor, nu de reglementare provizorie a situației juridice.'
        ]
      },
      { icon:'🪑', title:'Judecata în lipsă și procedura contumaciei (art. 223–225 NCPC)',
        items:[
          '<b>Judecata în lipsă</b>: dacă una din părți nu se prezintă la termen, judecata continuă în lipsa ei — NCPC nu mai reglementează contumacia clasică din vechiul CPC. Pârâtul care nu depune întâmpinare și nu se prezintă → <b>decăzut din dreptul de a propune probe</b>, dar poate invoca excepții peremptorii.',
          '<b>Cererea de judecată în lipsă</b>: reclamantul poate cere judecarea cauzei chiar dacă nu se va prezenta (art. 223 alin. 2 NCPC). Dacă reclamantul nu se prezintă și nu cere judecata în lipsă → instanța poate <b>suspenda judecata</b> (art. 411 NCPC).',
          '<b>Suspendarea judecății</b> (art. 411 NCPC): (1) ambele părți lipsesc și nu au cerut judecata în lipsă; (2) reclamantul lipsește, pârâtul cere suspendarea, și reclamantul nu a cerut judecata în lipsă. Dosarul se perimă după <b>6 luni</b> de la suspendare.',
          '<b>Perimarea instanței</b> (art. 416 NCPC): dacă niciuna din părți nu stăruie în judecată timp de <b>6 luni</b> → perimarea cererii de chemare în judecată. Stinge cererea (nu dreptul), poate fi repusă pe rol; ⚠️ perimarea acțiunii = <b>de drept</b>, constatată de instanță la cerere sau din oficiu.',
          '<b>Citarea</b>: condiție fundamentală a judecății — nulitate absolută dacă o parte nu a fost citată legal (motiv de contestație în anulare). Citarea prin publicitate = excepțională (adresă necunoscută, public). ⚠️ Prima zi de înfățișare = primul termen la care procedura de citare e legal îndeplinită pentru toate părțile.'
        ]
      },
      { icon:'💰', title:'Cheltuielile de judecată (art. 451–455 NCPC)',
        items:[
          '<b>Componente</b>: taxe judiciare de timbru, onorarii avocat, experți, martori, cheltuieli de deplasare, orice cheltuieli necesare și rezonabile ale procesului. Suportate de <b>partea care cade în pretenții</b> (culpa procesuală).',
          '<b>Principiul</b>: cel care pierde plătește cheltuielile de judecată ale câștigătorului (culpa procesuală = <i>qui perd, paie</i>). Reclamantul câștigă → pârâtul plătește; admitere parțială → cheltuielile se compensează proporțional.',
          '<b>Reducerea cheltuielilor</b> (art. 451 alin. 2): instanța poate reduce onorariul avocaților dacă e vădit disproporționat față de valoarea sau complexitatea cauzei, cu motivare; onorarul redus rămâne în sarcina celui care l-a plătit.',
          '<b>Compensarea</b>: la admitere parțială sau la culpă procesuală mixtă — instanța poate compensa total sau parțial cheltuielile de judecată (art. 453 alin. 2 NCPC).',
          '<b>Termenul de cerere</b>: cheltuielile se cer <b>la instanța care judecă fondul</b>, înainte de închiderea dezbaterilor; ulterior, pe cale separată (acțiune în pretenții) dacă nu s-au cerut în termen. Taxa de timbru = cheltuială judiciară recuperabilă de la cel care pierde.'
        ]
      }
    ],
    grila:'Competența teritorială de drept comun = domiciliul <b>pârâtului</b>. Apel: <b>30 de zile</b> de la <i>comunicare</i>. Recursul = numai în drept. Autoritatea de lucru judecat: tripla identitate obiect + cauză + <b>părți</b>. Excepție peremptoriu → stinge acțiunea. Litispendență = 2 instanțe, același litigiu → dosarul mai nou la instanța mai veche. Cerere reconvențională: depusă cu întâmpinarea. Necompetență absolută (materială/exclusivă): oricând, din oficiu. Necompetență relativă (teritorială): numai pârâtul prin întâmpinare. Ordonanță președințială: urgentă, provizorie, fără prejudecarea fondului; apel în <b>5 zile</b>. Judecata în lipsă: pârâtul fără întâmpinare = decăzut din probe. Perimarea = <b>6 luni</b> de nediligență → stinge cererea nu dreptul. Cheltuieli: cel care pierde plătește; reducere onorar avocat posibilă.'
  },

  {
    id:'w27', wk:'W27', dates:'28 dec–3 ian', subj:'pciv',
    title:'Procedură Civilă — executarea silită',
    sections:[
      { icon:'📜', title:'Titlurile executorii și condițiile executării (art. 632–641 NCPC)',
        items:[
          '<b>Titlul executoriu</b>: hotărâri judecătorești definitive, contracte autentice notariale (în limita creanței), contracte de credit, bilete la ordin, cecuri, chitanțe de consemnare. <b>Nu orice contract</b> — numai dacă legea sau titlul prevede.',
          '<b>Ordonanța de plată</b> (art. 1014 NCPC): procedură specială pentru creanțe certe, lichide și exigibile, constând în sume de bani. Emitere în maximum <b>45 de zile</b>; dacă debitorul nu contestă = titlu executoriu. Contestația se judecă în fond.',
          '<b>Instanța de executare</b>: judecătoria din circumscripția domiciliului/sediului debitorului sau a locului bunului. Sesizarea executorului: creditor depune cerere + titlu + taxe; executorul notifică debitorul cu somație.',
          '<b>Executorul judecătoresc</b>: ales de creditor; ales din circumscripția instanței de executare. Cheltuielile de executare = în sarcina <b>debitorului</b> (inclusiv onorariul executorului), cu excepția cazului în care instanța decide altfel.',
          'Prescripția dreptului de a cere executarea: <b>3 ani</b> de la rămânerea definitivă a hotărârii (sau de la exigibilitatea titlului). Prescripția se întrerupe prin orice act de executare.'
        ]
      },
      { icon:'💸', title:'Formele executării silite',
        items:[
          '<b>Urmărirea mobiliară</b>: sechestrul bunurilor mobile corporale → valorificare prin licitație publică sau vânzare directă. Bunuri de valoare redusă → executorul poate vinde direct.',
          '<b>Poprirea</b> (art. 780 NCPC): terțul (angajator, bancă) care datorează sume debitorului este obligat să le consemneze/vireze creditorului. Terțul poprit trebuie să declare în termen de <b>5 zile</b> dacă datorează sau nu.',
          'Limite poprire salariu: o creanță = max. <b>1/3 din salariul net</b>; mai multe creanțe sau pensie de întreținere = max. <b>1/2</b>. Minimul nepoprabil = salariul minim net pe economie.',
          '<b>Urmărirea imobiliară</b>: somație cu termen min. <b>15 zile</b> → publicitate → licitație (cel puțin 2 termene) → adjudecare. Prețul de pornire = evaluare realizată de expert.',
          '<b>Predarea silită a bunului</b>: remiterea unui bun mobil/imobil; evacuarea forțată; executarea obligației de a face (cu posibilitate de autorizare a creditorului să facă el însuși pe cheltuiala debitorului).'
        ]
      },
      { icon:'🛑', title:'Contestația la executare (art. 711–720 NCPC)',
        items:[
          'Cale de atac specifică executării silite, exercitată de <b>debitor, creditor sau orice terț vătămat</b> de actele de executare. Se poate contesta: actele de executare ilegale SAU titlul însuși (dacă nu e hotărâre judecătorească).',
          '<b>Termenul</b>: <b>15 zile</b> de la data la care cel interesat a luat cunoștință de actul atacat. Termen de prescripție mai lung (până la 30 de zile) dacă actul atacat nu a fost comunicat.',
          'Se judecă de <b>instanța de executare</b> (judecătoria), nu de instanța care a pronunțat titlul. Judecată de urgență, cu citare. Hotărârea = supusă numai recursului.',
          'Contestația <b>nu suspendă automat</b> executarea; suspendarea se cere separat de instanța de executare, cu sau fără cauțiune (discreționară). Dacă contestatorul plătește cauțiune = suspendare mai probabilă.',
          'Efectele admiterii: actul de executare atacat = anulat; cheltuielile de executare ilegale = în sarcina creditorului urmăritor; executarea continuă de la ultimul act valabil.'
        ]
      },
      { icon:'⏸️', title:'Suspendarea, perimarea, bunuri neurmăribile și încheierea executării',
        items:[
          '<b>Suspendarea de drept</b>: moartea debitorului (până la acceptarea moștenirii), declararea falimentului, intervenirea căii de atac (dacă legea prevede), poprirea asigurătorie anterioară. Actele anterioare suspendării = valabile.',
          '<b>Perimarea executării</b> (art. 697 NCPC): creditorul nu stăruie în executare <b>6 luni</b> de la ultimul act de executare → dosarul se perimă. Stinge dosarul, <b>nu creanța</b>. Creditorul poate porni un nou dosar, cu un nou executor, dar prescripția termenului de 3 ani curge.',
          '<b>Bunuri neurmăribile</b>: haine, mobilier de strictă necesitate, instrumente de muncă, alimente necesare pe 2 luni, bunuri sacre/culturale, pensii alimentare. ⚠️ Imobilul locuință = <i>poate fi urmărit</i>, dar cu restricții speciale dacă e singurul imobil al familiei cu minori.',
          '<b>Măsuri asigurătorii</b> (înainte de executare): sechestrul asigurătoriu (imobilizare bunuri mobile), poprirea asigurătorie (blocare conturi). Se pot solicita înainte sau în cursul judecății, cu sau fără cauțiune.'
        ]
      },
      { icon:'🔨', title:'Executarea obligațiilor de a face și insolvenței (art. 905–910 NCPC + Legea 85/2014)',
        items:[
          '<b>Obligațiile de a face intuitu personae</b> (art. 905 NCPC): dacă debitorul refuză să execute o obligație de a face (ex. predarea unui lucru determinat) și numai el o poate executa, creditorul poate cere instanței obligarea debitorului la <b>penalități</b> de <b>100–1.000 lei/zi</b> de întârziere (sau mai mari dacă prejudiciul e mai mare).',
          '<b>Penalitățile (astreinte)</b> (art. 906 NCPC): se aplică pentru orice obligație de a face ce nu poate fi executată silit direct; instanța poate majora sau reduce penalitățile; se plătesc creditorului, nu statului. ⚠️ Penalitățile curg până la executarea obligației sau până la pronunțarea hotărârii de despăgubire.',
          '<b>Executarea obligațiilor de a nu face</b> (art. 904 NCPC): dacă debitorul a săvârșit o faptă interzisă — creditorul poate cere instanței să autorizeze el însuși desființarea lucrărilor pe cheltuiala debitorului; penalități pentru fiecare zi de refuz ulterior.',
          '<b>Procedura insolvenței</b> (Legea 85/2014): aplicabilă profesioniștilor (comercianți, societăți, PFA) cu <b>insolvabilitate</b> — nu pot plăti datorii scadente. Pragul minim: <b>40.000 lei</b> creanță neachitată la scadență. Instanța competentă: <b>tribunalul</b> specializat de la sediul debitorului.',
          '<b>Proceduri în insolvență</b>: (1) <b>reorganizare judiciară</b> — plan aprobat de creditori, debitorul continuă activitatea sub supraveghere; (2) <b>faliment</b> — lichidarea activelor și distribuirea sumelor creditorilor conform ordinii de preferință (garantați → salariali → bugetari → chirografari). Administratorul/lichidatorul judiciar = practician în insolvență.',
          '<b>Efectele deschiderii procedurii</b>: suspendarea urmăririi silite individuale, nulitatea plăților preferențiale din ultimele 6 luni (acte de transfer fără valoare echivalentă), administratorul poate contesta actele frauduloase. Creanțele născute după deschidere = creanțe curente, prioritare.'
        ]
      }
    ],
    grila:'Contestație la executare = <b>15 zile</b> de la cunoaștere; judecată de <b>instanța de executare</b>. Nu suspendă automat. Poprire salariu: <b>1/3</b> (o creanță) / <b>1/2</b> (mai multe). Perimarea (6 luni) stinge dosarul, nu creanța. Ordonanță de plată: creanță certă/lichidă/exigibilă, termen 45 de zile. Cheltuielile de executare: în sarcina debitorului. Obligații de a face: penalități <b>100–1.000 lei/zi</b> (astreinte). Insolvență: prag <b>40.000 lei</b>, tribunal; reorganizare sau faliment.'
  },

  // ══ PROCEDURĂ PENALĂ ══════════════════════════════════════════════════════════

  {
    id:'w28', wk:'W28', dates:'4–10 ian', subj:'ppen',
    title:'Procedură Penală — esențial',
    sections:[
      { icon:'⚖️', title:'Principii fundamentale (art. 2–12 CPP)',
        items:[
          '<b>Legalitatea procesului penal</b>: organele judiciare acționează numai în limitele legii; probele obținute nelegal nu pot fi folosite (excluderea probelor).',
          '<b>Prezumția de nevinovăție</b> (art. 4 CPP): prezumată nevinovată până la condamnare definitivă. Sarcina probei = <b>organele judiciare</b>. <b>In dubio pro reo</b>: dacă rămâne dubiu rezonabil = achitare (nu condamnare cu dubiu).',
          '<b>Aflarea adevărului</b> (art. 5 CPP): organele au obligația de a strânge probe atât în defavoarea, cât și <b>în favoarea</b> suspectului/inculpatului — caracter oficial al procesului.',
          '<b>Ne bis in idem</b> (art. 6 CPP): nimeni nu poate fi urmărit sau judecat de două ori pentru aceeași faptă dacă există hotărâre definitivă (achitare, condamnare, clasare definitivă). ⚠️ Aceeași faptă ≠ aceeași încadrare juridică.',
          '<b>Dreptul la apărare</b> (art. 10 CPP): dreptul de a fi asistat de avocat ales; asistență juridică <b>obligatorie</b> din oficiu când inculpatul e reținut/arestat, e minor, are infirmitate mintală, sau pedeapsa prevăzută e ≥5 ani.',
          '<b>Contradictorialitatea</b> (art. 8 CPP): fiecare parte trebuie să poată lua cunoștință de actele și probele celeilalte și să le poată combate. Camera preliminară: contradictorialitate limitată (probe strânse în urmărire).',
          '<b>Publicitatea</b> (art. 352 CPP): judecata = publică în principiu; excepții (minorii, siguranța națională, viața privată). <b>Dreptul la interpret</b>: dacă inculpatul nu cunoaște limba română — interpret gratuit, din oficiu, în tot cursul procesului.'
        ]
      },
      { icon:'🔬', title:'Probele și excluderea lor (art. 97–103, 102 CPP)',
        items:[
          '<b>Mijloacele de probă</b> (art. 97 CPP): declarații (suspect, inculpat, persoana vătămată, martor), înscrisuri, rapoarte de expertiză, procese-verbale, fotografii, înregistrări audio-video, alte mijloace tehnice.',
          '<b>Loialitatea probei</b> (art. 101 CPP): este interzisă obținerea probelor prin tortură, violență, amenințare, promisiuni ilegale, provocare sau prin orice alte mijloace de constrângere. Probele obținute astfel = <b>nule de drept</b>; nu pot fi folosite în proces.',
          '<b>Excluderea probelor</b> (art. 102 CPP): probele obținute în mod nelegal — prin încălcarea dispoziților legale — nu pot fi folosite în procesul penal. ⚠️ Excluderea nu e automată pentru orice neregularitate — doar pentru încălcarea drepturilor fundamentale sau a normelor esențiale de procedură; instanța apreciază.',
          '<b>Teoria fructului pomului otrăvit</b>: probele derivate dintr-o probă exclusă sunt și ele excluse dacă nu ar fi existat fără proba nelegală — cu excepția că ar fi putut fi descoperite oricum, independent.',
          '<b>Aprecierea probelor</b> (art. 103 CPP): judecătorul le apreciază <b>liber</b>, conform convingerii sale intime, bazat pe ansamblul probelor administrate. ⚠️ Nicio probă nu are valoare prestabilită (chiar și mărturisirea poate fi contestată). Condamnarea se pronunță <b>dincolo de orice dubiu rezonabil</b>.'
        ]
      },
      { icon:'🔍', title:'Urmărirea penală (art. 285–341 CPP)',
        items:[
          '<b>Sesizarea organelor</b>: prin plângere (persoana vătămată), denunț (oricine), sesizare din oficiu (organele constată). La infracțiunile cu plângere prealabilă — fără plângerea victimei, nu se poate porni urmărirea.',
          'Faze: <b>in rem</b> (față de faptă) → <b>in personam</b>: suspect (indicii rezonabile că a comis fapta) → inculpat (după punerea în mișcare a acțiunii penale prin ordonanță a procurorului).',
          '⚠️ <b>Suspect ≠ inculpat</b>: suspectul poate fi audiat ca suspect; inculpatul = persoana față de care s-a pus în mișcare acțiunea penală. Inculpatul are drepturi procedurale suplimentare.',
          '<b>Organele de urmărire</b>: procurorul (conduce, supraveghează, poate efectua personal orice act) + organele de cercetare penală (poliția judiciară, organe speciale). Actele organelor de cercetare: supuse controlului procurorului.',
          '<b>Clasarea</b>: nu există faptă, nu e prevăzută de lege, nu are caracter penal, nu e periculoasă social, lipsește plângerea prealabilă, prescripție, amnistie etc. Oricând în cursul urmăririi.',
          '<b>Renunțarea la urmărire</b> (art. 318 CPP): la infracțiuni cu pedeapsă ≤7 ani, dacă nu e interes public; confirmare de judecătorul de cameră preliminară. <b>Trimiterea în judecată</b>: prin rechizitoriu, când sunt probe suficiente.'
        ]
      },
      { icon:'🔒', title:'Măsurile preventive (art. 202–244 CPP)',
        items:[
          '<b>Reținerea</b>: max. <b>24 de ore</b>; dispusă de organul de cercetare sau procuror; fără mandat judiciar; condiție: indicii rezonabile. ⚠️ Reținerea ≠ arestul preventiv.',
          '<b>Controlul judiciar</b> și <b>controlul judiciar pe cauțiune</b>: nu implică privare de libertate; obligații impuse (interdicții, prezentare etc.); max. <b>60 de zile</b> în urmărire (prelungibil la 120 zile), nelimitat în judecată.',
          '<b>Arestul la domiciliu</b> (art. 218 CPP): privare de libertate la adresă; durata = echivalată cu arestul preventiv; necesită mandat de la judecătorul de drepturi și libertăți. Poate fi înlocuit cu arest preventiv dacă e încălcat.',
          '<b>Arestul preventiv</b> în urmărire: inițial <b>30 de zile</b> (judecătorul de drepturi și libertăți); prelungibil cu câte 30 de zile; maxim total în urmărire = <b>180 de zile</b>. În judecată: câte <b>60 de zile</b>, fără limită totală expresă.',
          'Condiții comune ale măsurilor preventive: probe/indicii rezonabile că a comis fapta + <b>una din condițiile speciale</b>: pericol public, pericol de fugă, obstacularea anchetei. Proporționalitate cu scopul urmărit.'
        ]
      },
      { icon:'📂', title:'Judecata penală și căile de atac (art. 342–552 CPP)',
        items:[
          '<b>Camera preliminară</b> (art. 342 CPP): verificarea legalității urmăririi și a actelor de sesizare; excluderea probelor nelegale; verificarea competenței. Pronunță încheiere de începere a judecății sau de restituire a dosarului.',
          '<b>Judecata în fond</b>: publică, contradictorie; probele se administrează din nou în fața instanței. <b>Procedura simplificată</b> (art. 374/396 CPP): recunoașterea învinuirii de inculpat → reducere cu <b>1/3 din limitele de pedeapsă</b> (la închisoare) sau cu <b>1/4</b> (la amendă).',
          '<b>Acordul de recunoaștere a vinovăției</b> (art. 478 CPP): negociat procuror-inculpat înainte sau după trimitere în judecată; instanța <b>omologhează sau respinge în totalitate</b> — nu poate modifica pedeapsa convenită.',
          '<b>Apelul</b> (art. 408 CPP): calea ordinară de atac; termen <b>10 zile</b> de la comunicarea minutei (nu 30!); devoluativ (rejudecă fondul în fapt și în drept). <b>Recursul în casație</b> (art. 433 CPP): cale extraordinară, exclusiv în drept, termen <b>30 de zile</b> de la comunicare; motive limitativ prevăzute.',
          '<b>Achitarea</b> (art. 16 CPP): fapta nu există; nu e prevăzută de lege; nu a comis-o inculpatul; lipsește vinovăția; există cauze justificative/de neimputabilitate. <b>Încetarea procesului penal</b>: lipsesc condițiile de procedibilitate (plângere retrasă, prescripție, amnistie, dezincriminare).'
        ]
      },
      { icon:'🔄', title:'Căile extraordinare de atac penale (art. 426–470 CPP)',
        items:[
          '<b>Contestația în anulare</b> (art. 426 CPP): împotriva hotărârilor definitive ale instanței de apel. Motive limitative: (1) instanța nu a fost legal constituită; (2) inculpatul a fost judecat în lipsă deși nu a fost legal citat; (3) o cauză de încetare a procesului penal nu a fost constatată în recurs în casație; (4) inculpatul condamnat definitiv a mai fost judecat definitiv pentru aceeași faptă. Termen: <b>30 de zile</b> de la comunicare / de la cunoaștere.',
          '<b>Revizuirea</b> (art. 452 CPP): cale extraordinară de retractare, bazată pe <b>fapte/împrejurări noi</b> sau <b>probe noi</b> necunoscute instanței la soluționare. Motive: înscrisuri false, mărturii false dovedite prin hotărâre penală, contradicție ireconciliabilă, CEDO a constatat o încălcare. Poate fi cerută <b>oricând</b> (nu e termen extinctiv pentru condamnat). Poate duce la achitare sau la noi cercetări.',
          '<b>Recursul în casație</b> (art. 433 CPP): cale extraordinară de atac în drept, la Înalta Curte de Casație și Justiție. Motive limitativ prevăzute (art. 438): inculpatul condamnat pentru o faptă neprevăzută de legea penală, pedeapsă mai grea decât maximul, aplicarea greșită a legii de dezincriminare etc. Termen: <b>30 de zile</b> de la comunicarea deciziei de apel. ⚠️ Nu se readministrează probe.',
          '<b>Recursul în interesul legii</b> (art. 471 CPP): nu e o cale de atac propriu-zisă — exercitat de Procurorul General sau de Colegiul de conducere al ÎCCJ pentru dezlegarea unor chestiuni de drept divergente, fără efect retroactiv asupra cauzei soluționate; obligatoriu pentru instanțe de la data publicării în Monitorul Oficial.',
          '⚠️ <b>Distincție cheie</b>: contestația în anulare = motive de procedură (necitare, constituire nelegală); revizuirea = fapte/probe noi; recursul în casație = nelegalitate în drept; recursul în interesul legii = unificare jurisprudență, fără efect concret în dosar.'
        ]
      },
      { icon:'🔄', title:'Reabilitarea (art. 165–171 NCP)',
        items:[
          '<b>Efectul reabilitării</b>: înlătură <b>decăderile și incapacitățile</b> ce decurg din condamnare (interdicția de a deține funcții publice, de a exercita profesii etc.). ⚠️ Nu șterge condamnarea din cazierul judiciar în sensul că nu mai poate fi invocată ca prim termen al recidivei — aceasta se verifică separat.',
          '<b>Reabilitarea de drept</b> (art. 165 NCP): operează <b>automat</b>, fără cerere la instanță, dacă s-a executat pedeapsa sau s-a stins altfel și a trecut termenul: (a) pentru <b>amendă</b> sau <b>pedeapsă cu suspendare</b>: <b>3 ani</b> de la executare/stingere; (b) pentru <b>închisoare ≤ 2 ani</b>: <b>3 ani</b>.',
          '<b>Reabilitarea judecătorească</b> (art. 166 NCP): cerere la instanța de executare (sau la instanța de la domiciliu); condiții: (1) trecerea unui termen calculat de la executare/stingere: <b>4 ani + durata pedepsei</b> (pentru pedepse 2–5 ani), <b>5 ani + durata pedepsei</b> (pentru pedepse 5–10 ani), <b>7 ani + durata pedepsei</b> (pentru pedepse >10 ani); (2) bună conduită în termenul de reabilitare; (3) achitarea integrală a cheltuielilor de judecată și a despăgubirilor civile (dacă nu e dispensat de instanță).',
          '⚠️ <b>Distincție cheie pentru grile</b>: reabilitarea de drept = automată, fără cerere, la termen; reabilitarea judecătorească = la cerere, necesită condiții suplimentare (bună purtare, achitarea cheltuielilor), pronunțată de instanță. La condamnare cu detenție pe viață: <b>nu există reabilitare judecătorească</b> — condamnatul poate beneficia doar de grațiere.'
        ]
      }
    ],
    grila:'Reținere = max. <b>24h</b>, fără mandat. Arest preventiv în urmărire: max. <b>180 de zile</b> total (câte 30). Apel penal: <b>10 zile</b> de la comunicarea minutei (nu 30!). Sarcina probei = <b>organele judiciare</b>; in dubio pro reo = dubiul → achitare. Suspect ≠ inculpat: acțiunea penală pusă în mișcare → inculpat. Acordul de recunoaștere: instanța omologhează sau respinge în bloc. Procedura simplificată (recunoaștere) → 1/3 reducere. Reabilitare de drept (≤2 ani sau amendă/suspendare): automată după <b>3 ani</b>. Reabilitare judecătorească: la cerere, cu bună conduită + achitarea cheltuielilor; la detenție pe viață — <b>nu există</b>. Contestație în anulare: procedură (necitare/constituire nelegală). Revizuire: fapte/probe noi, oricând. Recurs în casație: în drept, <b>30 de zile</b>. Excluderea probelor (art. 102): probe nelegale = inutilizabile.'
  },

  // ══ SINTEZĂ FINALĂ ══════════════════════════════════════════════════════════════

  {
    id:'tlt', wk:'★', dates:'sinteză', subj:'civ',
    title:'Termene esențiale și sancțiuni — referință rapidă',
    sections:[
      { icon:'📅', title:'Termene — Drept Civil substantiv',
        items:[
          '<b>Prescripție extinctivă generală</b>: <b>3 ani</b> (art. 2517 NCC). Se aplică majorității drepturilor de creanță dacă legea nu prevede altfel.',
          '<b>Nulitate relativă</b> (acțiune în anulare): <b>3 ani</b> de la data când cel îndreptățit a cunoscut cauza nulității (art. 2529 NCC). ⚠️ Excepție: leziunea la majori = <b>1 an</b> de la data actului.',
          '<b>Acțiunea pauliană</b>: <b>1 an</b> de la data la care creditorul a cunoscut cauza de revocare (art. 2563 NCC).',
          '<b>Opțiunea succesorală</b> (acceptare / renunțare la moștenire): <b>1 an</b> de la data cunoașterii deschiderii succesiunii (art. 1103 NCC).',
          '<b>Acțiunea în reducțiunea liberalităților</b>: <b>3 ani</b> de la data deschiderii succesiunii sau de la cunoașterea dispoziției excesive.',
          '<b>Termenul de drept de abitație</b> al soțului supraviețuitor: <b>1 an</b> de la data decesului.',
          '<b>Acțiunile reale</b> (revendicare, petiție de ereditate, acțiune negatorie): <b>imprescriptibile</b> extinctiv — se pot exercita oricând.'
        ]
      },
      { icon:'⏱️', title:'Termene — Procedură Civilă',
        items:[
          '<b>Apelul civil</b>: <b>30 de zile</b> de la <i>comunicarea</i> hotărârii (art. 468 NCPC). ⚠️ Nu de la pronunțare!',
          '<b>Recursul civil</b>: <b>30 de zile</b> de la comunicarea hotărârii atacate (art. 485 NCPC).',
          '<b>Contestația în anulare</b>: <b>15 zile</b> de la comunicare sau de la cunoașterea motivului (art. 504 NCPC).',
          '<b>Revizuirea</b>: <b>1 lună</b> de la data la care reclamantul a luat cunoștință de motivul de revizuire (art. 511 NCPC).',
          '<b>Întâmpinarea</b>: <b>25 de zile</b> de la comunicarea cererii de chemare în judecată (art. 201 NCPC). Nedepusă → decădere din dreptul la probe.',
          '<b>Contestația la executare</b>: <b>15 zile</b> de la data cunoașterii actului de executare (art. 715 NCPC).',
          '<b>Perimarea executării silite</b>: <b>6 luni</b> de inactivitate a creditorului → stinge dosarul (nu creanța).',
          '<b>Prescripția dreptului de a cere executarea silită</b>: <b>3 ani</b> de la rămânerea definitivă a hotărârii.'
        ]
      },
      { icon:'🔒', title:'Termene — Drept Penal și Procedură Penală',
        items:[
          '<b>Reținerea</b>: max. <b>24 de ore</b> fără mandat judecătoresc (art. 209 CPP).',
          '<b>Arestul preventiv în urmărire penală</b>: câte <b>30 de zile</b>, maxim total <b>180 de zile</b> (art. 223–236 CPP).',
          '<b>Arestul preventiv în cursul judecății</b>: câte <b>60 de zile</b>, fără limită totală expresă.',
          '<b>Apelul penal</b>: <b>10 zile</b> de la comunicarea copiei minutei (art. 410 CPP). ⚠️ Nu 30 de zile ca în civil!',
          '<b>Recursul în casație penal</b>: <b>30 de zile</b> de la comunicarea deciziei instanței de apel (art. 434 CPP).',
          '<b>Prescripția răspunderii penale</b>: termenele variază după maximul pedepsei — de la <b>3 ani</b> (infracțiuni cu pedeapsă ≤1 an) la <b>15 ani</b> (infracțiuni cu pedeapsă >15 ani) și <b>imprescriptibilă</b> (omor calificat, genocid, crime de război).'
        ]
      },
      { icon:'❌', title:'Nulitate absolută vs. relativă — când se aplică',
        items:[
          '<b>Nulitate absolută (NCA)</b> — cauze principale: lipsa capacității de <i>folosință</i>; obiect ilicit/imposibil; cauză ilicită/imorală; formă <i>ad validitatem</i> nerespectată (ex: donația, testamentul autentic); pactul asupra unei succesiuni nedeschise; clauza penală excesivă în unele cazuri. Imprescriptibilă; invocabilă de oricine; nu se acoperă prin confirmare.',
          '<b>Nulitate relativă (NR)</b> — cauze principale: vicii de consimțământ (eroare, dol, violență, leziune); lipsa capacității de <i>exercițiu</i>; nerespectarea formei <i>cerute pentru protecție</i>; reprezentare fără putere/cu depășire. Termen: <b>3 ani</b> (excepție: leziune = 1 an). Invocabilă numai de persoana protejată; se acoperă prin confirmare.',
          '<b>Inopozabilitatea</b>: actul e valabil între părți dar nu produce efecte față de terți (ex: donația neînregistrată în CF; actul fraudulos — acțiunea pauliană → inopozabilitate, nu nulitate). ⚠️ Inopozabilitate ≠ nulitate.',
          '<b>Conversiunea actului nul</b> (art. 1260 NCC): actul nul ca act principal poate valora ca alt act dacă îndeplinește condițiile acestuia și reflectă voința probabilă a părților (ex: testament autentic nul ca testament → poate valora ca testament olograf dacă e scris de mână, datat, semnat).'
        ]
      },
      { icon:'📌', title:'Termene suplimentare frecvente în grile',
        items:[
          '<b>Preemțiunea NCC</b> (art. 1735): vânzătorul notifică intenția → preemptorul are <b>10 zile</b> (bun mobil) sau <b>30 de zile</b> (bun imobil) să exercite dreptul. Preemțiunea Legea 17/2014 (teren agricol extravilan): <b>30 de zile</b> de la notificare.',
          '<b>Denunțarea locațiunii</b>: locațiune cu termen nedeterminat → denunțare unilaterală cu preaviz; locuință urbană = <b>60 de zile</b>; bunuri mobile = <b>15 zile</b>; spații agricole = <b>6 luni</b>.',
          '<b>Reabilitarea de drept</b> (art. 165 NCP): <b>3 ani</b> de la executarea sau stingerea pedepsei (pentru pedeapsă ≤ 2 ani, amendă sau suspendare sub supraveghere).',
          '<b>Reabilitarea judecătorească</b> — termene: pedeapsă 2–5 ani → <b>4 ani + durata pedepsei</b>; pedeapsă 5–10 ani → <b>5 ani + durata pedepsei</b>; pedeapsă >10 ani → <b>7 ani + durata pedepsei</b> (art. 166 NCP). Calculul se face de la executarea pedepsei.',
          '<b>Prescripția răspunderii penale</b> (art. 154 NCP): pedeapsă ≤1 an → <b>3 ani</b>; ≤5 ani → <b>5 ani</b>; ≤10 ani → <b>8 ani</b>; ≤15 ani → <b>10 ani</b>; >15 ani sau dețen. pe viață → <b>15 ani</b>. Termenul se calculează de la data săvârșirii faptei.',
          '<b>Prescripția executării pedepsei penale</b> (art. 162 NCP): pedeapsa amenzii → <b>3 ani</b>; pedeapsa închisorii ≤5 ani → <b>5 ani</b>; ≤15 ani → <b>10 ani</b>; >15 ani sau detențiune → <b>20 ani</b>. ⚠️ Prescripția executării ≠ prescripția răspunderii penale.',
          '<b>Termenul de garanție contra evicțiunii</b>: vânzare de drept comun — <b>3 ani</b> prescripție. Garanție contra viciilor ascunse: imobile = <b>3 ani</b> de la descoperire (max 10 ani de la predare); mobile = <b>3 ani</b> de la descoperire (max 3 ani de la predare).',
          '<b>Acceptarea ofertei</b> (art. 1193 NCC): <b>în termenul stabilit</b> de ofertant; dacă nu e termen — <b>termen rezonabil</b> (fără termen, prin poștă: 7 zile uzanță). Oferta retrasă înainte de termen → ofertantul răspunde pentru prejudiciu.'
        ]
      }
    ],
    grila:'Apel civil: <b>30 zile</b> de la comunicare. Apel penal: <b>10 zile</b> de la minută. Contestație executare: <b>15 zile</b>. Opțiune succesorală: <b>1 an</b>. Acțiune pauliană: <b>1 an</b>. Leziune: <b>1 an</b> (excepție de la regula 3 ani). Perimarea executare: <b>6 luni</b>. Arest preventiv urmărire: max <b>180 zile</b>. NCA: imprescriptibilă. NR: 3 ani (leziune 1 an). Inopozabilitate ≠ nulitate. Preemțiune imobil NCC: <b>30 zile</b>; Legea 17/2014: <b>30 zile</b>. Reabilitare de drept: <b>3 ani</b>. Reabilitare judecătorească: 4/5/7 ani + durata pedepsei. Prescripție penală: 3–15 ani după maximul pedepsei.'
  }
];

// ── Atenție la grile — sfaturi extinse, legate de tiparul întrebărilor UNIBUC ──

var FISE_TIPS={
  w01:[
    '<b>Capacitate de folosință</b> lipsă → <b>nulitate absolută</b>; <b>capacitate de exercițiu</b> nerespectată → <b>nulitate relativă</b> (anulabilitate). Distincția apare des la grile.',
    'Minorul 14–18 ani este <b>asistat</b> (acționează personal + reprezentantul alături), <b>nu reprezentat</b>. Dacă grila spune „minorul a încheiat singur un contract de vânzare" → actul e anulabil (NR), nu nul absolut.',
    'Sub 14 ani și interzisul judecătoresc sunt <b>reprezentați</b>. Excepție pentru ambii: acte de <b>mică valoare cu executare imediată</b> (cumpărat o pâine) — le pot face singuri.',
    'Minorul care și-a ascuns incapacitatea prin dol (a mințit că e major) <b>nu poate invoca nulitatea relativă</b> — nimeni nu beneficiază de propria fraudă.',
    '<b>Infans conceptus</b>: drepturile se socotesc dobândite de la concepție <b>dacă se naște viu</b>, chiar și o clipă. Dacă grila spune „copilul s-a născut mort" → nu a dobândit niciun drept.',
    'Actul <b>declarativ</b> (partajul, recunoașterea unui drept) ≠ actul <b>translativ</b> (vânzarea) ≠ actul <b>constitutiv</b> (uzufructul). Efectele declarative sunt retroactive (<i>ex tunc</i>).',
    'Actul juridic unilateral (testamentul, oferta, acceptarea moștenirii) se formează prin <b>voința unei singure persoane</b>. Nu confunda cu contractul bilateral.',
    'Capacitatea de exercițiu a minorului căsătorit: dobândește capacitate <b>deplină</b> de la data căsătoriei, chiar dacă nu a împlinit 18 ani.'
  ],
  w02:[
    '<b>Violența de terț → NR întotdeauna</b>, indiferent dacă cealaltă parte a știut sau nu. <b>Dolul de terț → NR numai dacă</b> cealaltă parte a știut sau trebuia să știe. Această distincție apare frecvent.',
    'Eroarea trebuie să fie <b>scuzabilă</b>: dacă cel care invocă eroarea nu a manifestat diligența unui om rezonabil, instanța respinge acțiunea. Ex: cumpărătorul care nu a verificat actele bunului.',
    'Dolul prin <b>reticență</b>: tăcerea deliberată atunci când există obligație de informare. Ex: vânzătorul care nu spune că bunul are vicii cunoscute de el.',
    'Dolul nu trebuie să fie cauza <b>esențială</b> a contractului (spre deosebire de eroare). Chiar o eroare neeseențială indusă prin dol → anulabilitate.',
    '<b>Leziunea la majori</b>: disproporție <b>mai mare de jumătate</b> + prescripție <b>1 an de la data actului</b> (nu de la descoperire). Dacă grila spune „2 ani de la contract" → acțiunea e prescrisă.',
    'Starea de necesitate <b>exploatată</b> de cealaltă parte = asimilată violenței (art. 1218 NCC). Dacă grila spune că o parte a profitat de dificultatea extremă a celeilalte → viciu de consimțământ.',
    'Temerea reverenționară <b>singură</b> (față de părinți, tutore) nu e viciu de consimțământ. Devine viciu numai dacă e însoțită de amenințări.',
    'Viciile de consimțământ → <b>NR</b> (anulabilitate), nu NCA; pot fi <b>acoperite prin confirmare</b> expresă sau tacită după ce viciul a încetat.',
    'Sancțiunea pentru leziune: instanța poate <b>fie anula actul, fie reduce/mări prestațiile</b> pentru echilibru; pârâtul poate oferi el însuși echilibrarea pentru a evita anularea.'
  ],
  w03:[
    'Forma <b>ad validitatem</b>: nerespectare → <b>NCA</b>. Forma <b>ad probationem</b>: actul e <b>valabil</b>, dar nu poate fi dovedit prin martori. Forma <b>pentru opozabilitate</b>: actul e valabil între părți, dar <b>inopozabil terților</b>.',
    '<b>Cauza falsă</b> (eroare asupra motivului determinant) → <b>NR</b>. <b>Cauza ilicită</b> → <b>NCA</b>. Dacă grila zice „cauza a fost o eroare" → NR; dacă „cauza contravine ordinii publice" → NCA.',
    '<b>Pactul asupra unei moșteniri nedeschise</b> a altei persoane = <b>NCA</b> (art. 956 NCC). Se poate ceda propria moștenire după decesul celui de cujus.',
    'Imposibilitate <b>inițială și absolută</b> → nulitate. Imposibilitate <b>ulterioară fortuită</b> → stingerea obligației (nu nulitate; contractul a fost valabil la momentul încheierii).',
    '<b>NCA</b>: imprescriptibilă, invocată de oricine (inclusiv instanța din oficiu), nu se acoperă prin confirmare. <b>NR</b>: 3 ani, numai persoana protejată, se acoperă prin confirmare.',
    '<b>Nulitate parțială</b>: clauza nulă e înlăturată, restul actului rămâne. Dacă grila întreabă dacă actul e nul în totalitate: numai dacă clauza nulă a fost determinantă pentru încheierea actului.',
    'Prezumție de existență și valabilitate a cauzei: sarcina probei revine <b>celui care contestă</b> cauza, nu celui care invocă actul.',
    'Actul solemn defectuos formal poate valora ca <b>promisiune de contract</b> dacă exprimă acordul de voință al părților (art. 1242 alin. 3 NCC).'
  ],
  w04:[
    'Condiția <b>pur potestativă din partea debitorului</b> (<i>„dacă vreau eu"</i>) → <b>NCA</b> (lipsa oricărei obligații reale). Condiția potestativă simplă, cazuală sau mixtă → <b>valabile</b>. Condiția pur potestativă din partea <b>creditorului</b> → valabilă.',
    '<b>Suspendarea</b> prescripției: termenul se <b>oprește</b> pe durata cauzei, apoi <b>continuă</b> de unde a rămas. <b>Întreruperea</b>: tot termenul scurs se <b>șterge</b> și reia de la zero.',
    'Termen general: <b>3 ani</b>. Drepturi reale: <b>10 ani</b>. Leziune: <b>1 an de la data actului</b>. Vicii ascunse: <b>6 luni</b> de la descoperire (aparente) sau <b>3 ani</b> în caz de garanție.',
    'Prescripția <b>nu operează de drept</b>: judecătorul nu o poate invoca din oficiu dacă pârâtul nu o ridică.',
    '<b>Decăderea ≠ prescripția</b>: decăderea operează <b>de drept</b> și instanța o constată din oficiu; stinge dreptul subiectiv însuși (nu doar dreptul la acțiune). Grilă: „instanța a invocat din oficiu prescripția" → greșit; „instanța a invocat din oficiu decăderea" → corect.',
    '<b>Conversiunea</b> actului nul: testamentul autentic nul din vici de formă poate valora ca testament olograf, dacă e scris integral olograf, datat și semnat.',
    '<b>Nemo auditur propiam turpitudinem</b>: la cauza imorală, niciuna dintre părți nu poate cere restituirea prestațiilor. Dacă grila întreabă dacă restituirea e posibilă → nu.',
    'Debitorul care plătește <b>înainte de termen</b> nu poate cere restituirea (termenul e prezumat în favoarea sa; el poate renunța la beneficiul termenului).',
    '<b>Sarcina</b> în acte gratuite: neexecutarea după punere în întârziere → revocarea liberalității (nu nulitatea actului).'
  ],
  w05:[
    '<b>Efectul declarativ al partajului</b>: fiecare coproprietar e considerat că a deținut lotul de la <b>momentul nașterii coproprietății</b>, nu de la partaj. Nu există transfer de drepturi între coproprietari.',
    'Regula <b>unanimității</b>: numai pentru <b>actele de dispoziție</b> (înstrăinare, grevare). Acte de <b>administrare</b>: majoritate de cote. Acte de <b>conservare</b>: oricine singur.',
    'Un coproprietar poate înstrăina liber <b>cota sa ideală</b>, nu bunul în întregime fără acordul celorlalți.',
    'Coproprietatea <b>forțată</b> (scări, acoperișuri, fundații, hotar comun): <b>nu se poate cere partajul</b> judiciar.',
    '<b>Clauza de inalienabilitate</b>: max <b>49 ani</b> + motiv licit și serios + publicitate pentru opozabilitate față de terți. Fără publicitate → inopozabilă terților de bună-credință.',
    '<b>Devălmășia</b> (bunuri comune ale soților): cotele nu sunt determinate → nu se poate urmări o cotă de creditorii unui soț. Diferit de coproprietatea pe cote-părți.',
    '<b>Abuzul de drept</b>: exercitare cu scopul exclusiv de a prejudicia, fără interes legitim propriu → răspundere delictuală, nu nulitate.',
    'Proprietatea rezolubilă: la realizarea condiției rezolutorii, dreptul revine transmițătorului <b>retroactiv</b> (<i>resoluto iure dantis...</i>). Terții de bună-credință cu publicitate CF sunt protejați.'
  ],
  w06:[
    'Uzufructuarul are drept la <b>fructe</b> (produse periodic, fără a altera substanța). <b>Productele</b> (minereuri, material lemnos) revin <b>nudului proprietar</b>. Distincție frecventă la grile.',
    'Uzufructul este <b>personal</b>: se stinge la moartea uzufructuarului și <b>nu se transmite prin moștenire</b>. Poate fi cedat (dacă nu e interzis), dar nu poate fi legat.',
    '<b>Abitația</b>: <b>inalienabilă și insesizabilă</b>. Nu poate fi cedată, nu poate fi ipotecată, nu poate fi urmărită de creditorii titularului. Dacă grila spune că titularul a cedat abitația → nul.',
    'Servituțile <b>discontinue</b> (dreptul de trecere) <b>nu pot fi dobândite prin uzucapiune</b>. Numai servituțile <b>continue și aparente</b> pot fi uzucapate sau dobândite prin destinație de proprietar.',
    'Uzufructuarul suportă <b>reparațiile de întreținere</b> (curente, periodice). Nudul proprietar suportă <b>reparațiile capitale</b> (care afectează substanța bunului). Confuzia dintre ele apare frecvent.',
    'Servitutea urmărește <b>fondurile</b> (nu persoanele): dacă se vinde fondul dominant, cumpărătorul dobândește automat și servitutea; dacă se vinde fondul aservit, cumpărătorul preia sarcina.',
    '<b>Superficia</b>: max <b>99 ani</b>. Superficiarul este <b>proprietar al construcției</b> (nu chiriaș) și are drept de folosință asupra terenului. Nu confunda cu locațiunea sau servitutea.',
    'Stingerea uzufructului prin <b>neuz 10 ani</b>: aplică numai dacă uzufructuarul nu a exercitat nicio prerogativă în această perioadă.'
  ],
  w07:[
    '<b>Detenția precară</b> (chiriaș, depozitar, comodatar): are <i>corpus</i> dar nu are <i>animus domini</i> → <b>nu poate uzucapa</b>. Dacă grila spune că un chiriaș a uzucapat → greșit.',
    'Uzucapiune <b>extratabulară</b>: <b>10 ani</b> posesie utilă, bunul neînscris în CF sau proprietarul înscris a decedat/renunțat. Uzucapiune <b>tabulară</b>: <b>5 ani</b> de la înscrierea cu bună-credință în CF.',
    'Posesorul de <b>bună-credință</b> dobândește <b>fructele</b> (nu productele). Posesorul de <b>rea-credință</b> trebuie să restituie toate fructele + contravaloarea celor consumate cu vinovăție.',
    'Revendicare <b>mobiliară</b> față de un dobânditor de bună-credință cu <b>titlu oneros</b>: proprietarul <b>pierde acțiunea</b>. Excepție: bun <b>furat sau pierdut</b> → proprietarul poate revendica în <b>3 ani</b> de la furt/pierdere.',
    'Viciile posesiei sunt <b>relative</b> (numai cel afectat le poate invoca) și <b>temporare</b> (odată încetat viciul, posesia devine utilă). Nu sunt absolute sau permanente.',
    '<b>Ipoteca</b>: fără deposedare, publicitate prin CF sau AEGRM, rang după data înscrierii. <b>Gajul</b>: necesită deposedarea debitorului (predarea bunului). Nu confunda în grile.',
    'Paza <b>juridică</b> ≠ paza <b>materială</b>: cel care cedează controlul independent al lucrului pierde paza juridică și nu mai răspunde pentru prejudicii cauzate de lucru.',
    'Acțiunile posesorii (reintegranda, complânda): termen <b>1 an</b> de la tulburare; se pot exercita fără a proba dreptul de proprietate — numai faptul posesiei.'
  ],
  w08:[
    'Gestiunea contrară voinței <b>cunoscute sau prezumate</b> a geratului: gerantul poate cere <b>numai restituirea îmbogățirii</b> geratului, nu cheltuielile utile + necesare în totalitate.',
    'Îmbogățire fără justă cauză = acțiune <b>subsidiară</b>. Dacă există altă acțiune (contractuală, delictuală, plata nedatorată) → acțiunea de <i>in rem verso</i> e inadmisibilă.',
    'Limita restituirii la îmbogățire: <b>minimul</b> dintre valoarea îmbogățirii și valoarea sărăcirii, apreciate la data sesizării instanței.',
    'Gestiunea de afaceri ≠ mandat: la mandat există <b>acordul mandantului</b>; la gestiune, geratul este absent/în imposibilitate și nu știe.',
    'Plata nedatorată — accipiens de <b>rea-credință</b>: restituie integral + <b>dobânzi de la data plății</b>. Accipiens de <b>bună-credință</b>: restituie numai în <b>limita îmbogățirii existente</b> la data cererii.',
    'Accipiens de bună-credință care a <b>distrus titlul sau a lăsat să se prescrie</b> dreptul față de adevăratul debitor: <b>exonerat</b> de restituire în limita prejudiciului cauzat solvensului.',
    'Utilitatea gestiunii se apreciază <b>la momentul actului</b>, nu după rezultat. Dacă la start actul era util dar a eșuat din cauze externe → geratul tot datorează cheltuielile.',
    'Obligația de informare precontractuală (art. 1184–1185 NCC): încălcarea ei poate constitui <b>dol prin reticență</b> → anulabilitatea contractului + daune-interese.'
  ],
  w09:[
    'Răspunderea <b>comitenților pentru prepuși</b>: prezumție <b>absolută (irefragabilă)</b> — nu poate fi răsturnată prin nicio probă. Comitentul nu se poate exonera dovedind că a selectat bine prepusul.',
    'Răspunderea <b>părinților pentru minori</b>: prezumție <b>relativă</b> — părinții pot proba că nu puteau împiedica fapta (supraveghere corectă, minor cu comportament neașteptat).',
    'La răspunderea obiectivă (art. 1376 lucruri, art. 1375 animale, art. 1378 ruina edificiului): <b>cazul fortuit nu exonerează</b> — numai <b>forța majoră</b> (externă, imprevizibilă, insurmontabilă).',
    'Paza <b>juridică</b>: cel care are controlul independent al lucrului. Dacă proprietarul a predat lucrul, pierde paza juridică. Dacă grila spune că proprietarul a dat mașina unui șofer → șoferul are paza juridică.',
    'Comitentul care a plătit despăgubiri are <b>acțiune în regres</b> față de prepus, dacă acesta a acționat cu vinovăție în exercitarea funcțiilor. Dacă prepusul nu a acționat în cadrul funcțiilor → comitentul nu răspunde.',
    'Vinovăția la fapta proprie: apreciată <b>in abstracto</b> (comparație cu un om diligent mediu), nu in concreto (față de capacitățile personale ale autorului).',
    '<b>Consimțământul victimei</b> la risc: nu exonerează niciodată pentru <b>vătămări corporale grave sau moarte</b>; poate exonera pentru prejudicii patrimoniale dacă consimțământul e informat.',
    'Prejudiciul moral: <b>compensabil în bani</b>; nu trebuie cuantificat prin înscrisuri exacte — judecătorul apreciază echitabil.',
    'Fapta terțului exonerează numai dacă este <b>cauza exclusivă și suficientă</b> a prejudiciului. Dacă autorul a contribuit și el → răspundere proporțională.'
  ],
  w10:[
    'Principiul integrității plății: creditorul <b>nu poate fi forțat să accepte plăți parțiale</b>, nici dacă datoria e divisibilă și nici dacă restul e cert. Excepție: convenție sau dispoziție legală expresă.',
    'Plata unui <b>terț neautorizat</b>: invalidă față de creditor (care poate cere din nou), DAR creditorul nu poate refuza o plată făcută de un terț care justifică un interes legitim.',
    'Imputația plăților (mai multe datorii față de același creditor): <b>întâi cheltuieli → dobânzi → capital</b>. Dacă mai multe datorii egale: <b>cea mai veche</b>.',
    'Solidaritate pasivă: <b>nu se prezumă</b> — trebuie să rezulte expres din lege sau convenție. Dacă grila spune „doi codebitori" fără a preciza solidaritate → datoria e conjunctă (fiecare datorează partea sa).',
    'Acțiunea <b>oblică</b>: efectele revin patrimoniului debitorului (alți creditori concurează). <b>Nu</b> aduce direct bani creditorului care a exercitat-o.',
    'Acțiunea <b>pauliană</b>: terțul de bună-credință cu titlu <b>oneros</b> = protejat, actul nu se revocă față de el. Terțul gratificat = <b>nu e protejat</b>, chiar dacă e de bună-credință.',
    'Debitorul solidar poate opune excepțiile <b>comune</b> (nulitate, compensație față de creditor) și <b>propriile</b> excepții personale. <b>Nu</b> poate invoca excepțiile personale ale altui codebitor solidar.',
    'Oferta reală de plată + consemnațiune (art. 1510–1515 NCC): dacă creditorul refuză nejustificat, debitorul depune suma la o instituție de credit și e liberat din ziua consemnațiunii.',
    '⚠️ <b>Exceptio non adimpleti contractus</b>: se poate opune numai în contracte <b>sinalagmatice</b> cu executare <b>simultană</b>. Dacă grila spune „A refuză să plătească pentru că B nu a predat bunul" → excepție de neexecutare valabilă.',
    '⚠️ <b>Rezoluțiune vs. reziliere</b>: rezoluțiunea = efecte retroactive (ex tunc) + restituirea prestațiilor → pentru contracte cu executare instantanee. Rezilierea = efecte numai pentru viitor (ex nunc) → pentru contracte cu executare succesivă. Grilă: locațiunea anulată pentru neplatā = <b>reziliere</b>, nu rezoluțiune.',
    '<b>Dreptul de retenție</b> ≠ garanție reală: creditorul retentor nu are prioritate la distribuirea prețului față de creditorii ipotecari. Beneficiul retenției = presiunea economică de a plăti, nu preferință de rang.'
  ],
  w11:[
    'Cesiunea de creanță: <b>nu necesită acordul debitorului cedat</b>, CI notificarea sau acceptarea sa. Fără notificare, debitorul se poate libera plătind cedentului.',
    'Cesionarul dobândește creanța <b>în starea în care se găsea la cedent</b>: cu toate garanțiile și cu toate excepțiile pe care debitorul le putea opune cedentului.',
    'Compensația: ambele datorii trebuie să fie <b>certe + lichide + exigibile</b> simultan. Dacă una e condiționată → nu operează compensația legală.',
    'Simulație: între părți prevalează <b>actul secret</b> (dacă e valid). Față de terții de bună-credință prevalează <b>actul public</b>. Terții pot alege să invoce actul care le e mai favorabil.',
    'Acțiunea în simulație față de terți: <b>imprescriptibilă</b>. Între părți: 3 ani de la data când au cunoscut actul secret.',
    '<b>Confuziunea</b>: creditorul devine și debitor față de sine → obligația se stinge automat. Efectul se extinde la garanțiile accesorii (fidejusiunea se stinge).',
    'Remiterea de datorie: <b>tacită</b> — restituirea voluntară a titlului de creanță original → prezumție de remitere. Dacă creditorul restituie înscrisul, nu mai poate cere datoria.',
    '<b>Darea în plată</b>: creditorul acceptă o altă prestație; riscul de evicțiune cade în sarcina debitorului (ca la vânzare — dacă prestatia e un bun evins, datoria renaște).'
  ],
  w12:[
    'Transferul proprietății la vânzare: la perfectarea contractului pentru bunuri <b>individual determinate</b> (nu la predare, nu la plata prețului). Dacă grila spune că predarea n-a avut loc → proprietatea a trecut oricum.',
    'Riscul pieirii fortuite: urmărește proprietatea. Dacă bunul piere după transfer dar <b>înainte de predare</b> → riscul e <b>al cumpărătorului</b> (el e proprietar).',
    'Cheltuielile vânzării (taxa notarială, autentificare): în lipsa convenției, <b>în sarcina cumpărătorului</b>. Dacă grila întreabă cine plătește taxele → cumpărătorul, dacă nu s-a stipulat altfel.',
    'Vânzătorul <b>de bună-credință</b> (nu a cunoscut viciile ascunse): restituire preț sau înlocuire; <b>nu datorează daune</b> (decât dacă s-a angajat expres la garanție). Vânzătorul <b>RF</b>: daune-interese suplimentare.',
    'Evicțiune totală → <b>rezoluțiunea</b> vânzării + restituire preț + daune. Evicțiune parțială → <b>reducerea prețului</b> + daune. Nu confunda efectele.',
    'Donație: formă autentică <b>ad validitatem</b>. Excepție: <b>darul manual</b> = remiterea efectivă (tradițiunea) a unui bun mobil; simpla promisiune de dar manual nu obligă.',
    'Principiul irevocabilității donațiilor: clauzele care dau donatorului posibilitatea revocării unilaterale sau condiția pur potestativă din partea donatorului → <b>nulitate absolută a donației</b>.',
    'Donație <b>deghizată</b> sub forma vânzării cu preț fictiv: dacă prețul e fictiv → simulație; actul secret (donația) trebuie să respecte forma autentică pentru a fi valabil.'
  ],
  w13:[
    'Locatarul: obligat la <b>reparații locative (de întreținere)</b> (văruit, mici reparații). Locatorul: obligat la <b>reparații capitale</b> (care afectează structura, instalații majore). Inversarea lor → răspuns greșit.',
    'Mandat = acte <b>juridice</b>; antrepriză = acte <b>materiale</b>. Dacă grila spune că mandatarul a construit o casă → greșit, e antreprenor.',
    'Mandat <b>gratuit</b> (prezumție între persoane fizice). La profesioniști (avocați, agenți imobiliari) → prezumție de onerozitate.',
    'Mandantul poate revoca mandatul <b>oricând</b>, chiar dacă l-a declarat irevocabil. Excepție: mandat <b>în interesul exclusiv al mandatarului sau terțului</b> → revocarea abuzivă angajează răspunderea.',
    '<b>Mandatul aparent</b>: mandatarul depășește puterile, dar terțul de BF care s-a bazat rezonabil pe aparența de putere e protejat; actul e opozabil mandantului.',
    'Antreprenorul <b>nu e prepusul clientului</b>: clientul nu răspunde ca și comitent pentru faptele antreprenorului față de terți.',
    '<b>Emptio non tollit locatum</b>: vânzarea bunului dat în locațiune nu pune capăt locațiunii; noul proprietar este ținut de contract (dacă era înregistrat sau dacă a cunoscut locațiunea).',
    '<b>Comodatul</b> e esențialmente gratuit: dacă se stipulează o sumă de bani pentru folosință → recalificat ca locațiune, cu toate efectele acesteia.'
  ],
  w14:[
    '<b>Mutuum</b>: contract <b>real</b> (perfectat prin remiterea bunului, nu prin simplul acord). Transferă <b>proprietatea</b> lucrurilor consumptibile; împrumutatul restituie <i>tantundem</i>. Riscul → împrumutat.',
    '<b>Comodat</b>: contract <b>real</b> + <b>gratuit esențial</b>. Proprietatea rămâne la comodant. Riscul rămâne la comodant (excepție: comodatarul a folosit bunul altfel decât destinația sau l-a dat altcuiva).',
    'Dacă comodantul cere o sumă pentru folosință → <b>recalificat ca locațiune</b>. Dacă suma e simbolică (jeton) → se discută.',
    'Fidejusiunea: accesorietate strictă — dacă datoria principală este <b>nulă absolut, fidejusiunea cade</b>. Dacă datoria principală e anulabilă (NR), fidejusiunea rămâne până la anulare.',
    '<b>Beneficiul de discuțiune</b>: fidejusorul poate cere creditorului să urmărească <b>mai întâi bunurile debitorului principal</b>; trebuie invocat și indicate bunurile la momentul urmăririi.',
    '<b>Beneficiul de diviziune</b>: dacă mai mulți fidejusori, fiecare e ținut numai pentru <b>partea sa proporțională</b>. Dacă fidejusiunea e solidară → renunță la ambele beneficii.',
    'Fidejusorul care plătește se <b>subrogă</b> în drepturile creditorului față de debitorul principal: dobândește creanța + garanțiile acesteia.',
    'Tranzacția: efecte <b>declarative</b> (nu constitutive/translative). Are putere de <b>lucru judecat</b> relativ (inter partes). Nu poate fi atacată printr-o altă tranzacție.'
  ],
  w15:[
    '<b>Clasa I exclude COMPLET clasele II, III, IV</b> — chiar dacă vine un singur descendent. Nu există împărțire între clase diferite (cu excepția soțului supraviețuitor).',
    'Cotele <b>soțului supraviețuitor</b> — de memorat exact: <b>cls I = 1/4; cls II complet = 1/3; cls II numai ascendenți = 3/8; cls III = 1/2; cls IV = 3/4; singur = tot patrimoniul</b>.',
    'Nedemnitate <b>de drept</b>: operează <b>automat</b>, fără hotărâre judecătorească (ex: condamnat penal definitiv pentru omor). Nedemnitate <b>judiciară</b>: trebuie <b>pronunțată de instanță</b>.',
    'Copiii nedemnului <b>vin prin reprezentare</b> și culeg partea nedemnului. Ei nu sunt sancționați pentru fapta părintelui — dacă grila spune că și ei sunt excluși → greșit.',
    'Reprezentarea succesorală: împărțire <b>pe tulpini</b> (nu pe capete). Ex: un predecedat lasă 3 copii → cei 3 împart împreună cota părintelui, nu primesc fiecare câte o cotă separată.',
    'Reprezentarea: <b>numai la descendenți (cls I) și colaterali privilegiați (frați, cls II)</b>. Nu funcționează pentru ascendenți (cls III, IV).',
    'Termenul de opțiune succesorală: <b>1 an</b> de la data la care moștenitorul a cunoscut deschiderea. Dacă grila pune termenul la 6 luni sau 3 ani → greșit.',
    'Acceptarea <b>forțată</b>: moștenitorul care a sustras sau ascuns bunuri succesorale este socotit acceptant pur și simplu; nu mai poate renunța.',
    'În clasa II: dacă vin <b>și părinți și frați</b> → părinții primesc câte <b>1/4</b> fiecare (max 1/2 total); restul revine colateralilor privilegiați.'
  ],
  w16:[
    'Testament <b>olograf</b>: trebuie scris <b>în întregime de mână</b> + <b>datat complet</b> (zi, lună, an) + <b>semnat</b>. Lipsa oricăreia din aceste condiții → <b>nulitate absolută</b>. Dactilografiat → nul.',
    '<b>Rezerva</b> de memorat: descendenți = <b>1/2</b> din moștenire; ascendenți privilegiați (părinți) = <b>1/2</b>; soț supraviețuitor = <b>1/4</b>.',
    '<b>Reducțiunea legatelor</b>: în <b>ordine inversă creației</b> — cel mai <b>recent</b> legat se reduce primul; dacă mai e nevoie, se trece la cel anterior.',
    'Raportul donațiilor: se face prin <b>echivalent</b> (valoarea donației se impută din cota succesorală), nu prin restituire în natură.',
    '<b>Dispensa de raport</b> scutește de egalitate cu ceilalți moștenitori, dar <b>nu</b> scutește de reducțiune dacă donația depășește cotitatea disponibilă. Donatarul e scutit de raport dar poate fi obligat la reducțiune.',
    'Revocarea <b>tacită</b> a testamentului: testamentul ulterior incompatibil; distrugerea <b>voluntară</b> a testamentului olograf; înstrăinarea bunului legat.',
    'Incapacitate de a <b>primi</b> prin legat: medicii, farmaciștii, preoții care au îngrijit testatorul în <b>ultima boală</b> → prezumție de captație/sugestie (NR a legatului).',
    'Calculul rezervei include <b>TOATE donațiile</b> (raportabile + neraportabile, indiferent de beneficiar), nu numai donațiile date moștenitorilor.',
    'Testamentul <b>autentic</b> nul din vici de formă poate fi <b>convertit</b> în testament olograf, dacă testatorul l-a scris personal, l-a datat și semnat.'
  ],

  w18:[
    'Cele <b>trei trăsături esențiale</b> sunt cumulative: tipicitate + antijuridicitate + imputabilitate. Dacă grila elimină una → fapta <b>nu e infracțiune</b>. Nu confunda: nevinovăția e un principiu procesual, nu o trăsătură a infracțiunii.',
    '<b>Cauze justificative</b> (legitimă apărare, stare de necesitate, consimțământ) → înlătură <b>antijuridicitatea</b>. <b>Cauze de neimputabilitate</b> (minoritate, iresponsabilitate, eroare, caz fortuit) → înlătură <b>imputabilitatea</b>. Distincția e crucială — grilele o testează frecvent.',
    '<b>Intenția directă</b>: prevede + urmărește. <b>Intenția indirectă</b>: prevede + <b>acceptă</b> (nu urmărește!). Dacă grila spune „acceptă că s-ar putea produce" → intenție indirectă.',
    '<b>Culpa cu prevedere</b> (ușurința): prevede + crede fără temei că nu se produce. <b>Culpa simplă</b>: nu prevede, dar trebuia și putea. Dacă grila spune „a prevăzut dar a considerat că evită" → culpă cu prevedere, nu intenție.',
    '<b>Praeterintenția</b>: intenție față de fapta inițială + culpă față de urmarea mai gravă. Exemplul clasic: loviri cauzatoare de moarte. Dacă grila spune „a vrut să lovească, nu să omoare, dar victima a murit" → praeterintenție.',
    '<b>Mobilul și scopul</b>: în principiu nu sunt condiții ale existenței infracțiunii. Excepție: când legea cere expres scopul (ex: furtul cere intenția de însușire pe nedrept). Grile tip: „fapta e infracțiune dacă autorul a acționat dintr-un mobil anume" → de regulă fals.',
    '<b>Infracțiune de rezultat</b> vs. <b>infracțiune de pericol</b>: dacă urmarea produsă e vătămarea concretă → de rezultat (necesită legătură de cauzalitate); dacă urmarea e starea de pericol → de pericol (legătura de cauzalitate se prezumă la consumare).',
    '<b>Obiect material</b>: nu orice infracțiune are! Infracțiunile de pericol pur sau contra unor valori imateriale (ex: demnitate, libertate de conștiință) nu au obiect material. Grilă tip: „infracțiunea X are obiect material?" → verifică dacă implică un bun/corp fizic.',
    '<b>Persoana juridică</b> poate fi subiect activ al infracțiunii (art. 135 NCP), cu excepția statului, autorităților publice și a celor care exercită prerogative de putere publică. Grilele testează uneori dacă RP poate fi autor al anumitor infracțiuni.'
  ],

  w19:[
    '<b>Tentativa imposibilă</b>: mijloace absolut improprii SAU obiect absolut inexistent → <b>nepedepsibilă</b> (art. 32 alin. 2 NCP). Dacă grila spune „autorul a tras cu un pistol descărcat fără să știe" → tentativă imposibilă = nepedepsibilă.',
    '<b>Desistarea</b> = renunțare voluntară înainte de consumare; <b>împiedicarea rezultatului</b> = autorul împiedică producerea urmării după actele de executare. Ambele sunt cauze de <b>nepedepsire</b>, nu de înlăturare a caracterului penal al faptei. Participanții care nu s-au desistat pot fi pedepsiți.',
    'Tentativa se pedepsește cu <b>jumătate din minimul și maximul special</b>. Dacă legea nu prevede expres pedepsibilitatea tentativei → tentativa e <b>nepedepsibilă</b>. Grilă: verifică dacă infracțiunea admite tentativa.',
    '<b>Actele pregătitoare</b>: de regulă nepedepsibile; pedepsibile numai când legea le asimilează tentativei. Nu confunda actele pregătitoare cu tentativa: executarea n-a început la acte pregătitoare.',
    '<b>Instigatorul</b> se pedepsește <b>cu pedeapsa prevăzută de lege pentru autor</b> (nu pentru complice). Dacă grila întreabă cine e mai ușor pedepsit → complicele, nu instigatorul.',
    '<b>Participația improprie</b>: autorul acționează fără vinovăție (constrâns, în eroare, minor sub 14 ani) → instigatorul/complicele răspunde ca <b>autor mediat</b>. Autorul faptic nu răspunde penal.',
    '<b>Circumstanțe reale</b> (modul de comitere, mijloace, loc, timp): se răsfrâng asupra <b>tuturor participanților care le-au cunoscut</b>. Dacă complicele nu a știut că s-a folosit o armă → circumstanța reală agravantă nu i se aplică.',
    '<b>Circumstanțe personale</b> (recidivă, calitate specială, stare de minoritate): se aplică <b>numai celui la care se referă</b>. Recidiva unui participant nu afectează pedeapsa celorlalți.',
    'La infracțiunile cu <b>subiect activ special</b>: calitatea specială trebuie să aparțină autorului; complicele/instigatorul pot fi oricine. Grilă: „poate un particular fi complice la abuz în serviciu?" → da.'
  ],

  w20:[
    '<b>Cauze justificative</b> → efect <b>IN REM</b>: fapta nu e infracțiune pentru <b>nimeni</b>. Dacă autorul a acționat în legitimă apărare → nici participanții nu răspund, chiar dacă ei nu s-au apărat.',
    '<b>Cauze de neimputabilitate</b> → efect <b>IN PERSONAM</b>: se aplică numai celui în cauză. Participanții pot răspunde penal chiar dacă autorul faptic nu răspunde.',
    '<b>Starea de necesitate</b>: pericolul nu trebuie să fie cauzat de cel care acționează (spre deosebire de legitima apărare unde atacul e al agresorului). Dacă riscul depășit e mai mare decât cel evitat → nu mai e justificată.',
    'Minoritate: <b>sub 14 ani</b> → nicio răspundere penală, indiferent. <b>14–16 ani</b> → răspundere numai cu <b>discernământ dovedit</b>. <b>16–18 ani</b> → răspundere deplină, dar cu pedepse reduse față de majori.',
    '<b>Eroarea de fapt</b> (asupra elementului constitutiv) → înlătură intenția. Dacă eroarea e culpabilă → rămâne culpa. <b>Eroarea de drept penal</b>: în principiu nu înlătură răspunderea (nemo censetur ignorare legem); excepție: eroare inevitabilă.',
    'La <b>concurs de infracțiuni</b>: pedeapsa = pedeapsa cea mai grea + spor de <b>până la 1/3 din totalul celorlalte</b>. Nu se adaugă pur și simplu pedepsele (sistemul nu e cel al cumulului aritmetic).',
    '<b>Recidiva postcondamnatorie</b> vs. <b>pluralitate intermediară</b>: recidiva cere ca prima condamnare să fie ≥1 an. Dacă prima condamnare a fost la 6 luni → nu e recidivă, ci pluralitate intermediară. Distincție frecventă în grile.',
    '<b>Circumstanțele atenuante</b>: cobor pedeapsa sub minimul special. <b>Circumstanțele agravante</b>: urcă pedeapsa spre maximul special. Dacă există și atenuante și agravante → se compensează (instanța apreciază).',
    '<b>Recunoașterea învinuirii</b> (art. 396 CPP) = circumstanță atenuantă legală specială; reduce limitele pedepsei cu 1/3 la închisoare, 1/4 la amendă.'
  ],

  w21:[
    '<b>Omor vs. loviri cauzatoare de moarte</b>: distincția = intenția față de deces. Dacă autorul a vrut să omoare (sau a acceptat moartea) → omor. Dacă a vrut să lovească/rănească și moartea s-a produs din culpă → loviri cauzatoare de moarte (praeterintenție).',
    '<b>Omor vs. ucidere din culpă</b>: omor = intenție; ucidere din culpă = nicio formă de intenție față de deces. Dacă grila spune „nu și-a reprezentat posibilitatea morții și nici nu trebuia" → caz fortuit, nicio infracțiune.',
    '<b>Omor calificat</b>: premeditarea presupune rezoluție infracțională luată cu timp înainte + acte de pregătire. Nu orice omor cu intenție directă e premeditat. Grilă: „a hotărât să omoare cu 2 ore înainte și a cumpărat arma" → premeditat.',
    'Vătămare corporală: prag <b>90 de zile de îngrijiri medicale</b>. Sub 90 de zile → lovire sau alte violențe. Dacă grila spune „60 de zile îngrijiri" → lovire, nu vătămare corporală.',
    'Lovire sau alte violențe: urmărire <b>la plângerea prealabilă</b> a victimei. Împăcarea (în termenul legal) <b>stinge acțiunea penală</b>. Dacă victima se împacă → cazul se clasează.',
    '<b>Violul</b>: nu necesită violență fizică — e suficientă amenințarea SAU profitarea de imposibilitatea victimei de a se apăra/exprima (ex: victimă inconștientă, adormită). Dacă grila spune „victima era adormită" → viol, nu agresiune sexuală.',
    '<b>Act sexual cu un minor</b> sub 15 ani: infracțiunea există <b>indiferent de consimțământul minorului</b>. Consimțământul e irelevant juridic sub 15 ani. Grilă: „minorul de 14 ani a consimțit" → infracțiune oricum.',
    'Lipsire de libertate: infracțiune <b>continuă</b> (se consumă pe toată durata privării). Prescripția curge de la momentul încetării privării. Formă agravată dacă depășește <b>24 de ore</b>.',
    'La <b>omorul calificat</b> față de un funcționar/polițist/judecător: calitatea victimei trebuie să existe <b>la momentul faptei</b> și autorul trebuie să fi știut de ea. Dacă a omorât un polițist în civil fără să știe că e polițist → nu e omor calificat.'
  ],

  w22:[
    '<b>Furt vs. abuz de încredere</b>: la furt, bunul e luat fără consimțământ; la abuz de încredere, bunul a fost primit cu consimțământ dar nu e restituit. Grilă: „a primit bunul în depozit și l-a vândut" → abuz de încredere, nu furt.',
    '<b>Furt vs. înșelăciune</b>: la furt, victima nu participă la transferul bunului; la înșelăciune, victima transmite bunul singură (e indusă în eroare și acționează voluntar).',
    '<b>Tâlhăria</b>: violența poate fi exercitată și <b>după luarea bunului</b>, pentru a păstra bunul sau pentru a asigura scăparea autorului. Dacă grila spune „a furat și, prins de victimă, a lovit-o ca să scape" → tâlhărie, nu furt + lovire.',
    '<b>Uzul de fals</b>: comis de <b>altcineva</b> decât autorul falsului. Autorul falsului care folosește el însuși înscrisul fals → uzul de fals e <b>absorbit</b> în infracțiunea de fals; nu comite două infracțiuni.',
    '<b>Falsul material</b>: alterare fizică a înscrisului (ștergere, adăugare, contrafacere). <b>Falsul intelectual</b>: inserarea de date false la momentul întocmirii; subiect activ special (funcționar competent). Grilă: „notarul a întocmit un act cu date false" → fals intelectual, nu material.',
    '<b>Falsul în declarații</b> (art. 326): declararea mincinoasă în fața unui organ de stat <b>în scopul producerii de consecințe juridice</b>. Simpla minciună fără consecință juridică urmărită → nu e infracțiune.',
    '<b>Gestiunea frauduloasă</b> vs. <b>delapidare</b>: gestiunea frauduloasă → subiect poate fi oricine căruia i s-au încredințat bunuri (inclus particulari); delapidarea → subiect special = funcționar/angajat care gestionează bunuri publice/ale entității.',
    '<b>Înșelăciunea</b> necesită prejudiciu patrimonial efectiv. Dacă bunul/suma n-a fost efectiv obținută → tentativă de înșelăciune. Grilă: „a trimis un email de phishing dar nimeni n-a dat bani" → tentativă.',
    '<b>Furtul calificat de tip efracție</b>: presupune distrugerea/deteriorarea unui obstacol fizic (ușă, lacăt). Dacă a intrat printr-o fereastră deschisă → furt simplu (sau calificat pe alt criteriu), nu efracție.'
  ],

  w23:[
    '<b>Luarea de mită vs. traficul de influență</b>: luarea de mită → funcționarul primește foloase pentru <b>actul propriu</b> de serviciu; traficul de influență → persoana pretinde foloase pentru a influența <b>un alt funcționar</b>. Traficantul de influență nu trebuie să fie funcționar.',
    'Luarea de mită: infracțiunea e consumată la momentul <b>pretinderii sau primirii</b> foloaselor, chiar dacă actul de serviciu nu a fost îndeplinit. Grilă: „a primit bani dar n-a făcut nimic" → infracțiunea tot există.',
    '<b>Darea de mită sub constrângere</b>: dacă mituitorul a fost constrâns → <b>cauza de nepedepsire</b> pentru mituitor. Dacă a dat de bună voie → mituitor pedepsit. Constrângerea trebuie dovedită.',
    '<b>Trafic de influență</b>: nu trebuie să existe o influență reală — e suficientă <b>pretinderea că are influență</b>. Grilă: „a pretins că are relații cu judecătorul, deși nu era adevărat" → trafic de influență valabil.',
    '<b>Abuzul în serviciu</b>: cu intenție. <b>Neglijența în serviciu</b>: din culpă. Dacă grila spune „funcționarul a uitat să îndeplinească actul" → neglijență, nu abuz.',
    '<b>Mărturia mincinoasă</b>: cauza de nepedepsire = <b>retractarea</b> declarației mincinoase înainte de condamnarea definitivă a inculpatului. Retractarea după condamnare → nu mai produce efectul de nepedepsire.',
    '<b>Favorizarea făptuitorului</b>: cauza de nepedepsire pentru <b>soț și rudele apropiate</b> ale favorizatorului (nu ale infractorului favorizat!). Grilă: „soția l-a ajutat pe soțul ei să se ascundă" → nu se pedepsește.',
    '<b>Tăinuirea</b> = bunuri provenite din infracțiune; <b>favorizarea</b> = ajutorarea persoanei infractorului. Grilă: „a cumpărat bunuri știind că sunt furate" → tăinuire; „l-a ascuns pe hoț" → favorizare.',
    '<b>Denunțul calomnios</b>: necesită știința autorului că sesizarea e mincinoasă. Dacă autorul a crezut sincer că sesizarea e întemeiată → nu e denunț calomnios, chiar dacă acuzația s-a dovedit neîntemeiată.'
  ],

  w24:[
    'Conducere sub influența alcoolului (art. 336): limita legală = <b>0,80 g/l alcool în sânge</b>. Sub această limită dar cu influență dovedită → contravențional. Infracțiunea e consumată indiferent dacă s-a produs un accident sau nu.',
    '<b>Refuzul recoltării de probe biologice</b> = infracțiune distinctă și autonomă (art. 337). Nu e condiție a altei infracțiuni. Grilă: „a refuzat testul, deci e condamnat pentru conducere sub influența alcoolului" → fals; sunt infracțiuni diferite.',
    'Dacă în urma conducerii sub influența alcoolului se produce un accident cu victime → <b>concurs de infracțiuni</b> (art. 336 + art. 192 ucidere din culpă sau art. 196 vătămare din culpă). Nu e absorbită o infracțiune în cealaltă.',
    '<b>Omor vs. loviri cauzatoare de moarte vs. ucidere din culpă</b> — recapitulare: omor = intenție față de moarte; loviri cauzatoare de moarte = praeterintenție (intenție de a lovi + culpă față de moarte); ucidere din culpă = culpă totală față de moarte.',
    '<b>Furt vs. abuz de încredere vs. înșelăciune vs. tâlhărie</b>: furt = fără consimțământ; abuz de încredere = cu consimțământ inițial dar nerestituire; înșelăciune = eroare provocată + prejudiciu; tâlhărie = furt + violență (chiar ulterioară luării).',
    '<b>Uzul de fals</b>: numai când e comis de altcineva decât autorul falsului. Autorul care folosește el însuși înscrisul fals → infracțiunea de fals absoarbe uzul. Grilă: „falsificatorul a prezentat actul fals la bancă" → o singură infracțiune (falsul).',
    '<b>Luare de mită vs. trafic de influență vs. abuz în serviciu</b>: luarea = foloase pentru actul propriu (funcționar); traficul = foloase pentru influența pretinsă asupra altcuiva (nu trebuie să fie funcționar); abuzul = neîndeplinire/îndeplinire necorespunzătoare fără foloase.',
    '<b>Tăinuire vs. favorizare</b>: tăinuirea privește bunurile provenite din infracțiune; favorizarea privește persoana infractorului. Pot concura dacă autorul face ambele acte (ascunde și persoana și bunurile).',
    'La <b>toate infracțiunile din penal special</b>: primul pas e să verifici dacă există o cauza justificativă sau de neimputabilitate. Dacă există → nu e infracțiune (justificative) sau autorul nu răspunde (neimputabilitate). Abia apoi analizezi elementele constitutive.'
  ],

  w26:[
    '<b>Competența materială</b>: judecătoria judecă în primă instanță cauzele neatribuite altor instanțe. Tribunalul judecă în primă instanță cauzele cu valoare >200.000 lei și cele expres date în competența sa. Grilă: valoarea obiectului litigiului determină competența materială, nu cea teritorială.',
    '<b>Competența teritorială de drept comun</b>: instanța de la domiciliul/sediul pârâtului (art. 107 NCPC). Excepție: dacă pârâtul e necunoscut sau nu are domiciliu în țară → instanța de la domiciliul reclamantului.',
    '<b>Competența teritorială alternativă</b>: în materie contractuală, reclamantul poate alege între instanța domiciliului pârâtului și instanța locului de executare a contractului. Grilă: ambele variante sunt corecte, nu e o eroare de competență.',
    '<b>Excepțiile procesuale</b>: dilatorii (amână judecata — ex: necompetența, lipsa calității procesuale active) vs. peremptorii (sting acțiunea — ex: prescripția, autoritatea de lucru judecat). Dacă grila spune că excepția duce la respingere → peremptoriu.',
    '<b>Termenul de apel</b>: <b>30 de zile</b> de la comunicarea hotărârii (nu de la pronunțare!). Nerespectarea termenului → decădere din dreptul de apel. Grilă: comunicarea, nu pronunțarea, face să curgă termenul.',
    '<b>Apelul</b> (calea ordinară de atac): devoluează cauza în tot (în fapt și în drept). <b>Recursul</b>: cale extraordinară, numai în drept (instanța de recurs nu rejudecă fondul). Grilă: în recurs nu poți invoca motive de fapt.',
    '<b>Autoritatea de lucru judecat</b>: necesită tripla identitate — același obiect + aceleași părți + aceeași cauză (cauza = temeiul juridic). Dacă una lipșeste → nu există ALC; acțiunea e admisibilă.',
    '<b>Renunțarea la judecată</b> vs. <b>renunțarea la drept</b>: la judecată → reclamantul poate redeschide acțiunea; la drept → stinge definitiv dreptul subiectiv, nu mai poate reacționa. Grilă: „a renunțat la drept → poate redeschide?" → nu.',
    '<b>Hotărârea provizorie</b> (ordonanța președințială): condiții — urgență + neprejudecare a fondului + caracter vremelnic. Dacă grila spune că instanța a soluționat fondul în cadrul ordonanței → greșit.'
  ],

  w27:[
    '<b>Titlul executoriu</b>: baza executării silite. Hotărârile judecătorești sunt titluri executorii numai când sunt <b>definitive</b> (sau când legea prevede altfel — ex: hotărârea cu execuție provizorie). Contractele autentificate notarial sunt titluri executorii în limita creanței.',
    '<b>Executorul judecătoresc</b>: competent teritorial după domiciliul/sediul debitorului SAU după locul situării bunului urmărit. Creditorul alege executorul, nu instanța.',
    '<b>Poprirea</b>: urmărirea creanțelor pe care debitorul le are față de terți (ex: salariu, cont bancar). Terțul poprit e obligat să consemneze sumele. Grilă: poprire = creanțe/sume de bani, nu bunuri fizice.',
    'Limite la urmărirea salariului: <b>1/3 din salariul net</b> pentru o singură creanță; <b>1/2</b> dacă sunt mai multe creanțe sau pensii de întreținere. Minimul nepoprabil = salariul minim net pe economie.',
    '<b>Urmărirea silită imobiliară</b>: bunuri imobile (terenuri, clădiri); presupune somație → publicitate → licitație. Termenul de la somație la licitație: min. 30 zile. Grilă: imobilele nu pot fi urmărite prin poprire.',
    '<b>Contestația la executare</b>: termen de <b>15 zile</b> de la data când cel interesat a luat cunoștință de actul de executare atacat. Se introduce la instanța de executare. Grilă: nu la instanța care a pronunțat titlul, ci la cea de executare.',
    '<b>Suspendarea executării</b>: de drept (ex: când se fac căile de atac) sau judecătorească (la cerere, cu cauțiune în unele cazuri). Suspendarea nu anulează actele deja efectuate; se reia de la punctul de oprire.',
    '<b>Perimarea executării</b>: dacă creditorul nu face niciun act de executare timp de <b>6 luni</b> de la ultimul act → executarea se perimă. Perimarea stinge dosarul de executare (nu creanța!).',
    'Bunuri <b>neurmaribile</b>: bunuri de uz personal și casnic necesare vieții, bunuri legate de exercitarea profesiei, bunuri din patrimoniul cultural/religios. Grilă: „poate fi urmărită hainele de zi cu zi ale debitorului?" → nu.'
  ],

  w28:[
    '<b>Principiile fundamentale</b> ale procesului penal: legalitatea procesului penal; prezumția de nevinovăție; aflarea adevărului; dreptul la apărare; limba procesului. Grilă: prezumția de nevinovăție → sarcina probei revine <b>organelor judiciare</b>, nu inculpatului.',
    '<b>Reținerea</b>: max. <b>24 de ore</b>, dispusă de organul de urmărire penală (poliție/parchet). Nu necesită aprobare judecătorească. Grilă: reținerea de 48h fără mandat → nelegală.',
    '<b>Arestul preventiv</b>: dispus de judecătorul de drepturi și libertăți la propunerea procurorului. În cursul urmăririi penale: max. <b>30 de zile</b>, prelungibil cu câte 30 de zile, max. 180 zile total. În cursul judecății: câte 60 de zile, fără limită maximă totală.',
    '<b>Controlul judiciar</b> și <b>controlul judiciar pe cauțiune</b>: alternative mai ușoare la arest, dispuse de judecătorul de drepturi și libertăți. Nu implică privare de libertate, ci obligații și interdicții (ex: să nu părăsească țara).',
    '<b>Arestul la domiciliu</b>: privare de libertate în spațiul locativ propriu; dispus tot de judecătorul de drepturi și libertăți; durata se calculează similar cu arestul preventiv (30 de zile + prelungiri).',
    '<b>Urmărirea penală</b>: începe în rem (față de faptă) → continuă in personam (față de suspect/inculpat). Punerea în mișcare a acțiunii penale (inculparea) → inculpat. Clasarea: când nu există faptă, nu e prevăzută de lege sau nu există probe. Renunțarea la urmărire: discreție a procurorului (oportunitate).',
    '<b>Acord de recunoaștere a vinovăției</b>: inculpatul recunoaște fapta + pedeapsa negociată cu procurorul → instanța omologhează sau respinge. Instanța <b>nu poate modifica</b> acordul, doar îl acceptă sau îl refuză în totalitate.',
    '<b>Calea de atac în penal</b>: <b>apelul</b> (art. 408 CPP) — calea ordinară, se face în <b>10 zile</b> de la comunicarea copiei minutei (nu de la pronunțare!). Contestația: cale de atac împotriva unor încheieri (nu a sentinței).',
    '<b>Judecata în lipsă</b> (contumace): în noul CPP, judecata se poate desfășura fără inculpat dacă acesta e legal citat și se sustrage. Condamnarea în lipsă → inculpatul poate solicita rejudecarea la întoarcerea/prinderea sa.'
  ],
  tlt:[
    '⚠️ <b>Capcana apelului</b>: apelul civil = <b>30 de zile</b> de la <i>comunicarea hotărârii</i>; apelul penal = <b>10 zile</b> de la comunicarea <i>minutei</i>. Dacă grila pune 30 zile la penal sau 10 zile la civil → greșit.',
    '⚠️ <b>Capcana leziunii</b>: prescripția acțiunii pentru leziune la majori = <b>1 an de la data actului</b> (nu de la descoperire, nu 3 ani). Este excepție de la regula generală art. 2529 NCC. La minori: 1 an de la majorat.',
    '⚠️ <b>Capcana pauliană</b>: termenul de 1 an curge de la data la care creditorul <b>a cunoscut</b> actul fraudulos — nu de la data actului. Dacă creditorul nu a știut, termenul nu a început să curgă.',
    '⚠️ <b>Capcana executării</b>: prescripția dreptului de a cere executarea = <b>3 ani</b>; perimarea (inactivitate creditor) = <b>6 luni</b>. Perimarea stinge dosarul de executare, <b>nu creanța</b> — creditorul poate redeschide o nouă procedură.',
    '⚠️ <b>Capcana reținerii</b>: reținerea = max. <b>24h</b>, fără mandat judecătoresc, dispusă de organul de urmărire. Arestul preventiv — 30 zile, dispus de judecătorul de drepturi și libertăți. Nu confunda regimurile.',
    '⚠️ <b>NCA vs. NR la grile</b>: NCA = imprescriptibilă, invocabilă de oricine (inclusiv din oficiu), neconfirmabilă. NR = prescrisă în <b>3 ani</b> (excepție leziune = 1 an), numai persoana protejată, confirmabilă. <b>Inopozabilitatea ≠ nulitatea</b> — greșeală frecventă la grile.',
    '⚠️ <b>Capcana opțiunii succesorale</b>: termenul este <b>1 an</b> de la cunoașterea deschiderii succesiunii (nu 6 luni, nu 3 ani). La expirare fără opțiune → prezumție de renunțare (art. 1112 NCC); dacă a stăpânit bunuri → acceptare tacită.'
  ]
};

// ── Recall activ — întrebări specifice pentru fiecare fișă ───────────────────
var FISE_RECALL={
  w01:[
    'Definește actul juridic civil și enumeră cele 3 condiții de valabilitate (art. 1179 NCC).',
    'Clasifică actele juridice după numărul de voințe (unilateral / bilateral / multilateral) — câte un exemplu pentru fiecare.',
    'Eroarea-obstacol vs. eroarea-viciu de consimțământ: ce tip de nulitate atrage fiecare și de ce diferă?',
    'Schema comparativă — nulitate absolută vs. relativă: cine o invocă / termen de prescripție / poate fi confirmată?',
    'Aplicație: un minor de 16 ani vinde un teren fără acordul reprezentantului legal. Ce tip de nulitate? Cine o poate invoca? Poate fi confirmată?',
    'Retroactivitatea nulității (quod nullum est, nullum producit effectum): ce înseamnă și enumeră 2 excepții principale față de terți.',
    'La grilă: prescripția extinctivă stinge dreptul subiectiv sau dreptul la acțiune? Ce consecință are pentru debitorul care plătește după prescripție?'
  ],
  w02:[
    'Enumeră cele 4 vicii de consimțământ și tipul de nulitate atras de fiecare (absolut sau relativ).',
    'Dolul: descrie elementul obiectiv (manopere dolosive) + elementul subiectiv (intenție de a induce în eroare). Poate fi comis de un terț?',
    'Violența: poate fi exercitată de un terț față de contractant? Dar față de persoane dragi contractantului? Cu ce efect?',
    'Leziunea: ce vârstă trebuie să aibă victima, ce proporție a valorii prestației trebuie depășită și în ce termen se prescrie acțiunea?',
    'Aplicație: A îl determină pe B să cumpere un teren, susținând mincinos că e construibil. Ce viciu de consimțământ? Ce tip de nulitate? Cine o invocă?',
    'Eroarea asupra identității cocontractantului vs. eroarea asupra calității esențiale a bunului — care atrage nulitate și ce tip?',
    'La grilă: violența exercitată de un terț — cumpărătorul care știa de violență vs. cumpărătorul care nu știa: consecințe diferite?'
  ],
  w03:[
    'Schema completă — nulitate absolută: cauze (3 exemple) / cine invocă / termen / confirmare posibilă?',
    'Schema completă — nulitate relativă: cauze (3 exemple) / cine invocă / termen / confirmare posibilă?',
    'Conversiunea actului juridic nul: ce presupune și dă exemplul testamentului autentic nul de formă → testament olograf.',
    'Nulitatea parțială: când se poate aplica și ce condiție trebuie îndeplinită față de restul actului?',
    'Principiul resoluto iure dantis, resolvitur ius accipientis: ce înseamnă și când nu se aplică față de terții de bună-credință?',
    'Aplicație: A vinde lui B un imobil; contractul e anulat. Între timp B vânduse imobilul lui C (de bună-credință). Ce se întâmplă cu dreptul lui C?',
    'Confirmarea nulității relative: cine o poate face, în ce formă și care e efectul retroactiv față de terți?'
  ],
  w04:[
    'Termenul general de prescripție extinctivă în NCC: durată, de la ce moment curge și ce stinge (dreptul sau acțiunea)?',
    'Suspendarea vs. întreruperea prescripției: ce efect produce fiecare asupra termenului deja scurs?',
    'Enumeră 3 cauze de suspendare a prescripției (art. 2532 NCC).',
    'Decăderea vs. prescripția extinctivă — 3 diferențe: cine o poate invoca, regimul convenției contrare, invocare din oficiu.',
    'Termenele speciale de prescripție: acțiunea în anulare pentru viciu de consimțământ / răspundere delictuală / acțiunea în revendicare imobiliară.',
    'Aplicație: termenul de prescripție s-a împlinit, dar debitorul plătește. Poate cere restituirea sumei plătite?',
    'Recunoașterea dreptului de către debitor (art. 2537 NCC): ce efect produce asupra termenului de prescripție în curs?'
  ],
  w05:[
    'Enumeră și explică pe scurt cele 3 atribute ale dreptului de proprietate (usus / fructus / abusus).',
    'Exproprierea: condiții constituționale (utilitate publică + dreaptă și prealabilă despăgubire) și poate fi contestată valoarea?',
    'Coproprietatea pe cote-părți: ce drepturi poate exercita singur fiecare coproprietar fără acordul celorlalți?',
    'Uzucapiunea tabulară (art. 931 NCC) vs. extratabulară (art. 930 NCC): termene și condiții pentru fiecare.',
    'Aplicație: A construiește o casă pe terenul lui B cu bună-credință. B cere demolarea. Instanța poate ordona demolarea?',
    'Accesiunea imobiliară artificială — constructorul de rea-credință pe terenul altuia: ce poate cere proprietarul terenului?',
    'La grilă: proprietarul poate restricționa exercițiul atributelor propriului drept? Enumeră 2 limitări legale.'
  ],
  w06:[
    'Enumeră cele 4 dezmembrăminte ale dreptului de proprietate și caracteristica esențială a fiecăruia.',
    'Uzufruct: drepturile uzufructuarului (uz + fructus) vs. nudul proprietar (abusus). Cine suportă reparațiile mari (de structură)?',
    'Uzufructul constituit în favoarea unei persoane juridice: durată maximă legală și ce se întâmplă la expirare?',
    'Dreptul de superficie: ce include (dreptul asupra construcției + dreptul de a folosi terenul) și durata maximă în NCC.',
    'Servitutea — clasificare esențială: continuă vs. necontinuă și aparentă vs. neaparentă. Care se poate dobândi prin uzucapiune?',
    'Aplicație: nudul proprietar vrea să vândă imobilul grevat de uzufruct viager. Este posibil? Ce se întâmplă cu uzufructul?',
    'La grilă: uzufructuarul poate ceda uzufructul? Dar poate subînchiria bunul? Care e consecința față de nudul proprietar?'
  ],
  w07:[
    'Posesia: elementele constitutive (corpus + animus domini). Ce e detenția precară și cum diferă de posesie?',
    'Uzucapiunea extratabulară (art. 930 NCC): termen, necesită just titlu și bună-credință?',
    'Uzucapiunea tabulară (art. 931 NCC): termen, condiții și când operează.',
    'Ipoteca imobiliară: condiții de constituire (formă autentică) și formalități de opozabilitate față de terți (ANCPI).',
    'Aplicație: creditorul ipotecar urmărește imobilul, dar debitorul l-a vândut unui terț. Poate creditorul urmări imobilul în mâinile terțului?',
    'Gajul (amanetul): ce bunuri pot fi gajate, ce formalitate de constituire e necesară și cum se execută?',
    'Privilegiile vs. ipoteca: prin ce se deosebesc privind rangul, originea și necesitatea înscrierii?'
  ],
  w08:[
    'Enumeră cele 5 izvoare ale obligațiilor civile (art. 1165 NCC) și câte un exemplu concret pentru fiecare.',
    'Obligație de rezultat vs. obligație de mijloace: definire + sarcina probei culpei în fiecare caz + câte un exemplu profesional (medic, transportator).',
    'Gestiunea de afaceri (art. 1330 NCC): cele 3 condiții de valabilitate + obligațiile principale ale gerantului față de gerat.',
    'Ce poate cere gerantul de la gerat la finalul gestiunii? Dar dacă gestiunea era contrară voinței cunoscute a geratului — ce se modifică?',
    'Plata nedatorată (art. 1341 NCC): condiții + diferența de regim între accipiens de bună-credință vs. rea-credință privind restituirea.',
    'Îmbogățirea fără justă cauză — actio de in rem verso: cele 4 condiții cumulative, de ce e subsidiară și care e limita restituirii.',
    'Aplicație: A plătește din greșeală 5.000 lei lui B, deși datoria aparținea lui C. Ce acțiune are A și împotriva cui: B sau C? De ce?'
  ],
  w09:[
    'Enumeră și explică succint cele 4 condiții cumulative ale răspunderii civile delictuale.',
    'Răspunderea comitentului pentru prepus (art. 1373 NCC): ce 3 condiții trebuie dovedite și care e unica cauza de exonerare a comitentului?',
    'Răspunderea părinților pentru fapta minorului (art. 1372 NCC): condiții și cauze de exonerare.',
    'Răspunderea pentru animale (art. 1375 NCC) și pentru ruina edificiului (art. 1378 NCC): obiectivă sau subiectivă? Cine răspunde?',
    'Aplicație: A și B cauzează împreună un prejudiciu de 100.000 lei lui C. Fiecare răspunde solidar sau proporțional față de C?',
    'Prejudiciul moral: se poate repara în dreptul civil român? Pe ce temei legal și cum îl evaluează instanța?',
    'La grilă: culpa exclusivă a victimei → exonerare totală sau parțială a autorului? Dar culpa concurentă?'
  ],
  w10:[
    'Plata: imputația plăților la mai multe datorii față de același creditor — care e ordinea legală (art. 1503 NCC)?',
    'Solidaritate pasivă vs. solidaritate activă: ce drepturi are creditorul față de fiecare debitor solidar și ce se întâmplă dacă unul e insolvabil?',
    'Acțiunea oblică (art. 1560 NCC): condiții, față de cine se exercită și unde revin efectele?',
    'Acțiunea pauliană (art. 1562 NCC): cele 3 condiții cumulative + diferența de efect (inopozabilitate, nu nulitate) + termenul de prescripție.',
    'Excepția de neexecutare (art. 1556 NCC): condiții de admisibilitate + cum diferă de rezoluțiune?',
    'Rezoluțiunea vs. rezilierea: definiție + efecte temporale (ex tunc vs. ex nunc) + când se aplică fiecare?',
    'Aplicație: A nu livrează marfa la termen. B refuză să plătească prețul. Ce excepție invocă B? Dacă A continuă să nu livreze, ce altă cale are B?'
  ],
  w11:[
    'Enumeră cel puțin 6 moduri de stingere a obligațiilor (art. 1615 NCC).',
    'Compensația legală (art. 1617 NCC): cele 3 condiții cumulative pentru a opera de drept, fără nicio manifestare de voință.',
    'Novația (art. 1609 NCC) vs. cesiunea de creanță (art. 1566 NCC): ce se întâmplă cu datoria originală în fiecare caz?',
    'Cesiunea de creanță: formalitățile față de debitorul cedat (art. 1578 NCC) și față de terți (art. 1581 NCC).',
    'Fideiusiunea: beneficiul de discuțiune (explicație) + beneficiul de diviziune (explicație) — când fidejusorul le poate invoca?',
    'Aplicație: creditorul remite datoria unuia dintre codebitorii solidari. Ceilalți codebitori sunt și ei liberați de datorie?',
    'Daunele-interese moratorii vs. compensatorii: când se acordă fiecare și pot fi cumulate cu executarea în natură?'
  ],
  w12:[
    'Vânzarea — obligațiile vânzătorului: predare (obiect + accesorii + fructe) + garanție contra evicțiunii + garanție contra viciilor. Explică pe scurt fiecare.',
    'Garanția contra viciilor ascunse: 4 condiții pentru ca viciul să fie ascuns și în ce termen trebuie denunțat viciul descoperit?',
    'Evicțiunea totală: ce poate cere cumpărătorul de la vânzătorul de bună-credință (art. 1700 NCC)?',
    'Dreptul de preempțiune la terenuri agricole (Legea 17/2014): ordinea de preferință și termenul de exercitare.',
    'Aplicație: vânzătorul a ascuns intenționat o crăpătură în fundație. Cumpărătorul o descoperă după 2 ani. Ce acțiuni are și în ce termen?',
    'Pactul de opțiune vs. promisiunea de vânzare-cumpărare: diferența față de irevocabilitate și posibilitatea transmiterii dreptului.',
    'La grilă: vânzarea bunului altuia — nulitate absolută sau relativă? Ce se întâmplă dacă vânzătorul dobândește proprietatea ulterior?'
  ],
  w13:[
    'Locațiunea — obligațiile locatarului (cel puțin 3): folosința conform destinației, întreținerea, restituirea la termen.',
    'Sublocațiunea vs. cesiunea contractului de locațiune: diferența esențială și când sunt permise fără acordul explicit al locatorului?',
    'Antrepriza: cine răspunde față de beneficiar pentru viciile construcției? Există garanție legală specială pentru construcții?',
    'Mandatul oneros vs. gratuit: există prezumție de gratuitate sau onerozitate în NCC? Ce consecință are pentru standardul de diligență al mandatarului?',
    'Aplicație: locatarul a subînchiriat apartamentul fără acordul locatorului. Ce poate face locatorul (3 opțiuni)?',
    'Mandatul — revocarea de către mandant: când produce efecte față de terții de bună-credință care nu știau de revocare?',
    'La grilă: antrepriza cu materiale furnizate de antreprenor — când trece proprietatea materialelor la beneficiar?'
  ],
  w14:[
    'Împrumutul de consumație (mutuum, art. 2158 NCC): caractere (real, unilateral, de regulă gratuit) + ce se transferă la împrumutat (proprietate + risc) + cum se restituie.',
    'Comodatul (art. 2146 NCC): caractere esențiale + diferența față de mutuum privind proprietatea și riscul bunului + obligațiile comodatarului.',
    'Fidejusiunea (art. 2280 NCC): definiție + caractere (accesorie, indivizibilă, consensuală) + beneficiul de discuțiune: ce e și când se invocă?',
    'Fidejusiunea solidară: ce beneficii pierde fidejusorul solidar față de fidejusorul simplu? Ce drepturi dobândește față de debitorul principal după ce plătește?',
    'Tranzacția (art. 2267 NCC): definiție + de ce efectele sunt declarative (nu constitutive) + puterea de lucru judecat relativă + poate fi atacată pentru eroare de drept?',
    'Aplicație: A împrumută lui B 10.000 lei (mutuum, fără dobândă). B restituie integral suma, apoi pretinde că a plătit nedatorat. Poate cere înapoierea sumei? De ce?',
    'La grilă: fidejusorul care plătește întreaga datorie față de creditor — ce acțiuni are față de debitorul principal (subrogare + acțiune proprie)?'
  ],
  w15:[
    'Enumeră cele 4 clase de moștenitori legali, inclusiv gradul de rudenie și ordinea de chemare la moștenire.',
    'Drepturile soțului supraviețuitor: cota succesorală în concurs cu clasa I / clasa a II-a / clasa a III-a / singur (fără alte rude).',
    'Reprezentarea succesorală: definiție, condiții (reprezentatul să fie predecedat/nedemn) și la ce clase/grade se aplică.',
    'Nedemnitatea de drept (art. 958 NCC) vs. judiciară (art. 959 NCC): enumeră câte o cauza din fiecare și efectul față de descendenții nedemnului.',
    'Aplicație: A moare cu 2 copii (B și C). C decedase înaintea lui A, lăsând un copil (D). Cum se împarte moștenirea și în ce proporții?',
    'Renunțarea la moștenire: termen (1 an), formă (declarație la notar) și efectul față de creditorii renunțătorului.',
    'La grilă: moștenitorul care a acceptat pur și simplu (fără beneficiu de inventar) răspunde de datoriile defunctului și cu bunurile proprii?'
  ],
  w16:[
    'Testamentul olograf: cele 3 condiții de formă (integral olograf + datat complet + semnat) și sancțiunea lipsei oricăreia.',
    'Testamentul autentic: avantaje față de cel olograf (forță probantă, securitate). Poate fi convertit în testament olograf dacă e nul de formă autentică?',
    'Rezerva succesorală: cotele exacte pentru descendenți / ascendenți privilegiați / soț supraviețuitor și cum se calculează masa de calcul.',
    'Reducțiunea liberalităților: ordinea corectă (legate în ordine inversă creării → donații în ordine inversă) și ce e cotitatea disponibilă.',
    'Raportul donațiilor: cine e obligat (descendenți + soț supraviețuitor), cum se face (echivalent, nu în natură) și ce e dispensa de raport.',
    'Aplicație: A lasă prin testament toată averea lui B (prieten), deși are un fiu C. Ce poate face C? Ce primește cel mai puțin?',
    'Revocarea testamentului: enumeră 3 forme de revocare tacită recunoscute de NCC (testament ulterior incompatibil / distrugerea voluntară / înstrăinarea bunului legat).'
  ],
  w18:[
    'Definește infracțiunea (art. 15 NCP) și enumeră cele 3 trăsături esențiale. Ce se întâmplă dacă oricare lipsește?',
    'Schema formelor de vinovăție: intenție directă / intenție indirectă / culpă cu prevedere / culpă simplă / praeterintenție — definește fiecare în 1 propoziție.',
    'Praeterintenția: definiție + exemplul clasic (loviri cauzatoare de moarte). De ce nu e omor și de ce nu e ucidere din culpă?',
    'Cauze justificative (cel puțin 3) vs. cauze de neimputabilitate (cel puțin 4): ce anume înlătură fiecare categorie?',
    'Aplicație: A lovește pe B intenționat. B, mai fragil din cauza unei boli necunoscute de A, moare. Ce infracțiune a comis A? Argumentează.',
    'Obiectul material al infracțiunii: definește și dă câte un exemplu de infracțiune cu obiect material și una fără.',
    'La grilă: cauze justificative → efect IN REM (față de toți) sau IN PERSONAM (față de un singur participant)?'
  ],
  w19:[
    'Fazele activității infracționale (de la rezoluție la epuizare): enumeră-le și precizează care sunt pedepsibile.',
    'Tentativa: definiție + tipuri (perfectă / imperfectă / imposibilă). Care e sancțiunea tentativei imposibile și de ce?',
    'Desistarea vs. împiedicarea rezultatului: definiție pentru fiecare și efectul juridic față de ceilalți participanți care nu s-au desistat.',
    'Participanți penali: definește autorul / coautorul / instigatorul / complicele și pedeapsa relativă față de autor.',
    'Participația improprie (art. 52 NCP): când intervine și cine răspunde penal (instigatorul/complicele ca autor mediat)?',
    'Aplicație: A îl instigă pe B să fure. B, ajuns la fața locului, se desistă. Răspunde A pentru instigare? Dar B pentru tentativă?',
    'Circumstanțele reale vs. personale: dă câte un exemplu și față de cine se aplică fiecare în cadrul participației penale.'
  ],
  w20:[
    'Cauze justificative (art. 18–22 NCP) — efect IN REM: ce înseamnă concret pentru participanți? Dă exemplu cu legitima apărare.',
    'Cauze de neimputabilitate (art. 23–31 NCP) — efect IN PERSONAM: enumeră cel puțin 5 și ce înseamnă că e personal.',
    'Legitima apărare: condițiile atacului (iminent, injust, real) + condițiile apărării (necesară, proporțională). Ce e excesul scuzabil?',
    'Minoritatea penală: regimul răspunderii sub 14 ani / între 14 și 16 ani (cu discernământ) / 16–18 ani.',
    'Concursul de infracțiuni: cum se calculează pedeapsa principală conform art. 39 NCP (pedeapsa cea mai grea + spor)?',
    'Recidiva postcondamnatorie vs. pluralitate intermediară: diferența-cheie și consecința pentru cuantumul pedepsei.',
    'Aplicație: A, cu o condamnare anterioară la 6 luni pentru furt, comite din nou un furt. Recidivă sau pluralitate intermediară? De ce?'
  ],
  w21:[
    'Omorul simplu vs. omorul calificat (art. 189 NCP): enumeră cel puțin 4 forme calificate.',
    'Omor (art. 188) vs. loviri cauzatoare de moarte (art. 195) vs. ucidere din culpă (art. 192): criteriul distincției (forma de vinovăție față de deces).',
    'Vătămare corporală (art. 194 NCP): pragul de zile de îngrijiri medicale și consecințele grave care califică fapta.',
    'Lovire sau alte violențe (art. 193): regimul procesual (plângere prealabilă) și efectul juridic al împăcării.',
    'Violul (art. 218): modalitățile de comitere (violență / amenințare / imposibilitate de exprimare sau apărare). Dă exemplu pentru ultima modalitate.',
    'Aplicație: A îl lovește pe B cu pumnul. B cade, se lovește la cap și moare. Ce infracțiune a comis A? Ce formă de vinovăție?',
    'La grilă: omorul calificat față de un funcționar public — autorul trebuia să cunoască calitatea victimei în momentul faptei?'
  ],
  w22:[
    'Enumeră cel puțin 5 infracțiuni contra patrimoniului (NCP) și câte un element distinctiv pentru fiecare.',
    'Furtul calificat (art. 229 NCP): enumeră cel puțin 4 împrejurări care califică furtul simplu.',
    'Tâlhăria (art. 233): când e consumată și poate violența fi exercitată și după luarea bunului? Explică scopul.',
    'Fals material (art. 320) vs. fals intelectual (art. 321): diferența esențială. Care necesită subiect activ special și care e acesta?',
    'Uzul de fals (art. 323): cine poate fi subiect activ și de ce autorul falsului care îl folosește el însuși nu comite separat uz de fals?',
    'Aplicație: A primește în depozit bijuteriile lui B, le vinde și nu le restituie. Ce infracțiune? Ce diferențiază de furt?',
    'Delapidare (art. 295) vs. gestiune frauduloasă (art. 242): diferența privind subiectul activ și calitatea acestuia.'
  ],
  w23:[
    'Luarea de mită (art. 289) vs. darea de mită (art. 290): cine sunt subiecții activi și care e elementul material al fiecăreia.',
    'Traficul de influență (art. 291): subiectul activ trebuie să fie funcționar? Influența trebuie să fie reală? Ce se pedepsește concret?',
    'Abuzul în serviciu (art. 297) vs. neglijența în serviciu (art. 298): diferența privind forma de vinovăție (intenție vs. culpă).',
    'Mărturia mincinoasă (art. 273): cauza de nepedepsire a retractării — până la ce moment procesual se poate retracta cu efect?',
    'Favorizarea făptuitorului (art. 269): cauza de nepedepsire pentru soțul și rudele apropiate — se referă la rudele favorizatorului sau ale infractorului favorizat?',
    'Aplicație: A îi promite judecătorului X 10.000 € pentru a câștiga un proces. A comite dare de mită sau cumpărare de influență? Argumentează.',
    'Tăinuire (art. 270) vs. favorizare (art. 269): pe ce se axează fiecare și pot concura dacă autorul face ambele acte?'
  ],
  w24:[
    'Conducere sub alcool (art. 336 NCP): limita exactă de alcoolemie în sânge și este necesar să se fi produs un accident?',
    'Refuzul recoltării de probe biologice (art. 337): infracțiune autonomă sau componentă a art. 336? Poate concura cu art. 336?',
    'Conducere sub alcool + accident cu victime: ce infracțiuni se rețin în concurs și care e raportul dintre ele?',
    'Recap distincții patrimoniu: furt vs. abuz de încredere vs. înșelăciune vs. tâlhărie — criteriul-cheie care le separă pe fiecare.',
    'Recap fals: fals material vs. fals intelectual vs. uz de fals — subiect activ și diferența modului de săvârșire.',
    'Recap corupție: luare de mită vs. trafic de influență vs. abuz în serviciu — care nu cere calitatea de funcționar?',
    'La grilă: autorul unui fals care folosește el însuși înscrisul fals — comite și uz de fals separat? De ce nu?'
  ],
  w26:[
    'Competența materială — ce judecă în primă instanță: judecătoria / tribunalul / curtea de apel? Ce prag valoric separă judecătoria de tribunal?',
    'Competența teritorială — de drept comun (domiciliul pârâtului) vs. alternativă (materie contractuală) vs. exclusivă (imobile, succesiuni): câte un exemplu pentru fiecare.',
    'Condițiile exercitării acțiunii civile: enumeră cele 4 (drept, interes, calitate procesuală, capacitate) și ce se întâmplă dacă una lipsește.',
    'Excepție procesuală peremptoriu vs. dilatoriu: definiție + câte un exemplu + consecința procesuală a fiecăreia.',
    'Căile de atac: apelul (termen / ce devoluează) vs. recursul (termen / ce controlează) vs. revizuirea (când se poate folosi).',
    'Aplicație: pârâtul pierde în fond și în apel, apoi face recurs invocând că instanța de apel a apreciat greșit probele. Este admisibil motivul?',
    'Autoritatea de lucru judecat (ALC): tripla identitate — obiect + părți + cauza (ce e cauza în sens procesual civil)?'
  ],
  w27:[
    'Enumeră cel puțin 4 categorii de documente care pot constitui titluri executorii.',
    'Poprirea: ce e, față de cine se îndreaptă și care sunt limitele poprire pe salariu (procente pentru 1 creanță vs. mai multe)?',
    'Urmărirea imobiliară: etapele procedurale (somație → publicitate → licitație) și termenul minim de la somație la licitație.',
    'Contestația la executare: termenul de exercitare, instanța competentă și suspendă automat executarea sau nu?',
    'Perimarea executării (art. 698 NCPC): termenul de inactivitate, ce stinge (dosarul sau creanța) și poate fi reluată?',
    'Aplicație: creditorul are o hotărâre definitivă din 2020 și vrea să înceapă executarea în 2024. Termenul de prescripție a expirat?',
    'La grilă: poprire pe pensie — același regim ca poprire pe salariu (max 1/3 / 1/2)? Există un minim nepoprabil?'
  ],
  w28:[
    'Prezumția de nevinovăție: conținut, cine suportă sarcina probei și regula in dubio pro reo — ce înseamnă concret?',
    'Fazele procesului penal: urmărire penală → cameră preliminară → judecată în fond → căi de atac. Rolul specific al camerei preliminare.',
    'Măsuri preventive — schema completă: reținere (durată / cine dispune) / control judiciar / arest la domiciliu / arest preventiv (durată urmărire vs. judecată).',
    'Urmărirea penală in rem vs. in personam: ce declanșează trecerea de la una la alta? Ce drepturi dobândește persoana când devine suspect vs. inculpat?',
    'Acordul de recunoaștere a vinovăției: condiții, ce poate face instanța (omologhează / respinge — poate modifica pedeapsa?).',
    'Aplicație: inculpatul e arestat preventiv de 150 de zile în faza de urmărire penală. Poate fi prelungit arestul? Câte zile mai pot fi adăugate?',
    'La grilă: apelul penal — termen 10 zile de la comunicarea copiei minutei. Ce se întâmplă dacă minuta nu a fost comunicată? Termenul curge oricum?'
  ],
  tlt:[
    'Enumeră termenele de apel: civil vs. penal vs. contencios administrativ. Care curge de la comunicare și care de la minutei?',
    'Termenele de prescripție speciale (1 an): care sunt cele 3 situații din dreptul civil substantiv unde termenul e 1 an în loc de 3?',
    'Executare silită: termenul prescripției dreptului de a cere executarea vs. termenul perimării dosarului — ambele de 3 ani/6 luni?',
    'Cauze de NCA: enumeră 5. Cauze de NR: enumeră 5. Ce diferă ca regim: cine invocă, termen, confirmare?',
    'Conversiunea actului nul: ce este și când se aplică? Dă un exemplu din dreptul succesoral.',
    'Schema termenelor preventive penale: reținere (ore) → control judiciar (zile) → arest la domiciliu (zile) → arest preventiv (urmărire vs. judecată).',
    'Inopozabilitate vs. nulitate: definiție pentru fiecare + câte un exemplu concret din civil și din succesoral.'
  ]
};

// ── Randare ──────────────────────────────────────────────────────────────────

var FISE_CAT_LBL={civ:'⚖️ Drept Civil',pen:'🔒 Drept Penal',pciv:'📜 Procedură Civilă',ppen:'🛡️ Procedură Penală',lat:'🏛️ Latină juridică'};

function _printFisa(id){
  var f=FISE_DATA.filter(function(x){return x.id===id;})[0]; if(!f) return;
  var tips=FISE_TIPS[f.id]||[];
  var catLbl=FISE_CAT_LBL[f.subj]||f.subj;
  var sectHtml='';
  f.sections.forEach(function(s){
    sectHtml+='<div class="sec"><div class="stitle">'+s.icon+' '+s.title+'</div><ul>';
    s.items.forEach(function(it){sectHtml+='<li>'+it+'</li>';});
    sectHtml+='</ul></div>';
  });
  var gHtml;
  if(tips.length){
    gHtml=tips.map(function(p){return '<li>'+p+'</li>';}).join('');
  } else {
    var gPts=f.grila.split(/\.\s+(?=[A-ZĂÎȘȚ<])/);
    gHtml=gPts.map(function(p){return '<li>'+p.replace(/\.$/,'')+'.</li>';}).join('');
  }
  var recallQs=FISE_RECALL[f.id]||[];
  var recallHtml='<div class="recall">'
    +'<div class="recall-hd"><span class="recall-lbl">✏️ Recall activ</span>'
    +'<span class="recall-sub">Acoperă fișa și răspunde pe rând. Verifică după fiecare.</span></div>'
    +'<ol class="recall-list">';
  if(recallQs.length){
    recallQs.forEach(function(q,i){
      recallHtml+='<li><span class="q-nr">'+(i+1)+'.</span><span class="q-txt">'+q+'</span>'
        +'<div class="ans-lines"><div></div><div></div><div></div></div></li>';
    });
  } else {
    f.sections.forEach(function(s){
      recallHtml+='<li><span class="q-nr">—</span><span class="q-txt">Explică: <em>'+s.title.replace(/^[\S]+\s/,'')+'</em> (toate punctele esențiale)</span>'
        +'<div class="ans-lines"><div></div><div></div><div></div></div></li>';
    });
  }
  recallHtml+='</ol></div>';
  var w=window.open('','_blank','width=820,height=1000');
  w.document.write('<!DOCTYPE html><html lang="ro"><head><meta charset="UTF-8"><title>Fișă '+f.wk+' — '+f.title+'</title><style>'
    +'*{margin:0;padding:0;box-sizing:border-box}'
    +'body{font-family:Georgia,serif;font-size:13px;line-height:1.65;color:#111;background:#fff;padding:24px 32px}'
    +'.pg-hd{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2.5px solid #1a1a1a;padding-bottom:10px;margin-bottom:18px}'
    +'.pg-meta{font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.6px;margin-bottom:3px}'
    +'.wk-badge{background:#1a1a1a;color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:.3px;flex-shrink:0;margin-top:3px}'
    +'h1{font-size:17px;font-weight:700;margin:0;line-height:1.25}'
    +'.sec{margin-bottom:14px;padding-left:12px;border-left:3px solid #ddd}'
    +'.stitle{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#555;margin-bottom:5px}'
    +'ul{padding-left:17px;margin:0}'
    +'li{margin-bottom:3px;font-size:12.5px;line-height:1.55}'
    +'b{font-weight:700}'
    +'i{font-style:italic;color:#444}'
    +'.grila{background:#f7f7f3;border-left:4px solid #222;border-radius:0 6px 6px 0;padding:11px 14px;margin-top:16px}'
    +'.grila-lbl{font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#222;margin-bottom:7px}'
    +'.grila ul{padding-left:16px}'
    +'.grila li{font-size:12px;margin-bottom:5px}'
    +'.recall{margin-top:20px;border:1.5px solid #bbb;border-radius:7px;padding:14px 16px;page-break-before:always}'
    +'.recall-hd{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;gap:8px}'
    +'.recall-lbl{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#111}'
    +'.recall-sub{font-size:10px;color:#888;font-style:italic}'
    +'.recall-list{padding-left:0;list-style:none}'
    +'.recall-list li{margin-bottom:14px;display:flex;gap:8px;align-items:flex-start}'
    +'.q-nr{font-size:10px;font-weight:700;color:#aaa;min-width:16px;flex-shrink:0;padding-top:2px}'
    +'.q-txt{font-size:12.5px;color:#111;flex:1;line-height:1.5}'
    +'.ans-lines{margin-top:5px;margin-left:24px}'
    +'.ans-lines div{height:20px;border-bottom:1px dotted #bbb;margin-bottom:2px}'
    +'.notes{margin-top:20px;padding-top:12px;border-top:1px solid #eee}'
    +'.notes-lbl{font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#bbb;margin-bottom:8px}'
    +'.notes-lines div{height:22px;border-bottom:1px solid #eee;margin-bottom:2px}'
    +'@media print{'
    +'  body{padding:10px 16px}'
    +'  .recall{page-break-before:always}'
    +'  @page{margin:10mm 12mm;size:A4}'
    +'}'
    +'</style></head><body>'
    +'<div class="pg-hd">'
    +'  <div><div class="pg-meta">'+catLbl+' &nbsp;·&nbsp; '+f.dates+'</div><h1>'+f.title+'</h1></div>'
    +'  <span class="wk-badge">'+f.wk+'</span>'
    +'</div>'
    +sectHtml
    +'<div class="grila"><div class="grila-lbl">💡 La grilă — capcane de reținut</div><ul>'+gHtml+'</ul></div>'
    +recallHtml
    +'<div class="notes"><div class="notes-lbl">📝 Notițe suplimentare</div><div class="notes-lines">'
    +'<div></div><div></div><div></div><div></div><div></div>'
    +'</div></div>'
    +'<script>window.onload=function(){window.print();};<\/script>'
    +'</body></html>');
  w.document.close();
}

function _buildCard(f){
  var card=document.createElement('div'); card.className='fisa-card'; card.id='fisa-'+f.id;
  var head=document.createElement('div'); head.className='fisa-head';
  head.innerHTML='<span class="fisa-wk">'+f.wk+'</span><span class="fisa-dates">'+f.dates+'</span><span class="fisa-title">'+f.title+'</span><button class="fisa-print" title="Printează / salvează PDF">🖨️</button><span class="fisa-chev">▾</span>';
  head.onclick=function(){_toggleFisa(f.id);};
  head.querySelector('.fisa-print').onclick=function(e){e.stopPropagation();_printFisa(f.id);};
  var body=document.createElement('div'); body.className='fisa-body'; body.id='fisab-'+f.id;
  var html='';
  f.sections.forEach(function(s){
    html+='<div class="fisa-sec"><div class="fisa-stitle">'+s.icon+' '+s.title+'</div><ul class="fisa-list">';
    s.items.forEach(function(it){ html+='<li>'+it+'</li>'; });
    html+='</ul></div>';
  });
  var tips=FISE_TIPS[f.id];
  var gHtml;
  if(tips&&tips.length){
    gHtml=tips.map(function(p){return '<li>'+p+'</li>';}).join('');
  } else {
    var gPts=f.grila.split(/\.\s+(?=[A-ZĂÎȘȚ<])/);
    gHtml=gPts.map(function(p){return '<li>'+p.replace(/\.$/,'')+'.</li>';}).join('');
  }
  html+='<div class="fisa-grila"><span class="fisa-glbl">💡 La grilă — atenție</span><ul class="fisa-glist">'+gHtml+'</ul></div>';
  body.innerHTML=html;
  card.appendChild(head); card.appendChild(body);
  return card;
}

function renderFise(){
  var c=document.getElementById('fise-container'); if(!c) return;
  if(c.dataset.rendered==='1') return;
  c.dataset.rendered='1';
  c.innerHTML='';
  var hdr=document.createElement('div'); hdr.className='fise-hdr';
  hdr.innerHTML='<span class="fise-htitle">📋 Fișe de sinteză</span><span class="fise-hsub">'+FISE_DATA.length+' teme · NCC 2011 la zi</span>';
  c.appendChild(hdr);
  var cats=[], seen={};
  FISE_DATA.forEach(function(f){ if(!seen[f.subj]){ seen[f.subj]=true; cats.push(f.subj); } });
  cats.forEach(function(cat){
    var sec=document.createElement('div'); sec.className='fise-cat-sec';
    var catHdr=document.createElement('div'); catHdr.className='fise-cat-hdr';
    catHdr.textContent=FISE_CAT_LBL[cat]||cat;
    sec.appendChild(catHdr);
    FISE_DATA.filter(function(f){ return f.subj===cat; }).forEach(function(f){
      sec.appendChild(_buildCard(f));
    });
    c.appendChild(sec);
  });
}

function _toggleFisa(id){
  var body=document.getElementById('fisab-'+id);
  var card=document.getElementById('fisa-'+id);
  if(!body) return;
  var open=body.classList.contains('open');
  body.classList.toggle('open',!open);
  card.classList.toggle('open',!open);
  if(!open) setTimeout(function(){ var el=document.getElementById('fisa-'+id); if(el) el.scrollIntoView({behavior:'smooth',block:'nearest'}); },80);
}

// ── Stil injectat ─────────────────────────────────────────────────────────────
(function(){
  var css=''
    +'.fise-hdr{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px;flex-wrap:wrap;gap:6px}'
    +'.fise-cat-sec{margin-bottom:18px}'
    +'.fise-cat-hdr{font-size:12px;font-weight:800;color:var(--sub);text-transform:uppercase;letter-spacing:.8px;padding:6px 0 8px;border-bottom:1.5px solid var(--sf2);margin-bottom:8px}'
    +'.fise-htitle{font-size:17px;font-weight:900;color:var(--lime)}'
    +'.fise-hsub{font-size:11px;color:var(--sub)}'
    +'.fisa-card{background:var(--sf);border-radius:var(--r);border:1.5px solid var(--sf2);transition:border-color .2s;margin-bottom:8px}'
    +'.fisa-card.open{border-color:var(--civ,#4caf50)}'
    +'.fisa-head{display:flex;align-items:center;gap:8px;padding:13px 14px;cursor:pointer;user-select:none;-webkit-user-select:none}'
    +'.fisa-head:hover{background:var(--sf2)}'
    +'.fisa-wk{font-size:9.5px;font-weight:800;color:#0f1b10;background:var(--civ,#4caf50);border-radius:8px;padding:2px 7px;flex-shrink:0;white-space:nowrap}'
    +'.fisa-dates{font-size:10px;color:var(--sub);flex-shrink:0;white-space:nowrap}'
    +'.fisa-title{font-size:13px;font-weight:700;color:var(--lime);flex:1;line-height:1.3}'
    +'.fisa-chev{font-size:15px;color:var(--sub);transition:transform .25s;flex-shrink:0;line-height:1}'
    +'.fisa-card.open .fisa-chev{transform:rotate(180deg)}'
    +'.fisa-body{display:none;padding:0 14px 14px;border-top:1px solid var(--sf2)}'
    +'.fisa-body.open{display:block}'
    +'.fisa-sec{margin-top:12px}'
    +'.fisa-stitle{font-size:10.5px;font-weight:800;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px}'
    +'.fisa-list{padding-left:18px;margin:0}'
    +'.fisa-list li{font-size:13px;color:var(--txt);line-height:1.6;margin-bottom:5px}'
    +'.fisa-list b{color:var(--lime)}'
    +'.fisa-list i{color:var(--sub)}'
    +'.fisa-grila{background:#1a2e1c;border-left:3px solid var(--gr);border-radius:0 8px 8px 0;padding:10px 13px;margin-top:14px;font-size:12.5px;color:var(--txt);line-height:1.6}'
    +'.fisa-glbl{display:block;font-size:10px;font-weight:800;color:var(--gr);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}'
    +'.fisa-glist{padding-left:16px;margin:0}'
    +'.fisa-glist li{font-size:12.5px;color:var(--txt);line-height:1.6;margin-bottom:4px}'
    +'.fisa-glist b{color:var(--lime)}'
    +'.fisa-print{background:none;border:1px solid var(--sf2);border-radius:8px;color:var(--sub);font-size:13px;padding:3px 8px;cursor:pointer;flex-shrink:0;transition:.15s;line-height:1;margin-left:auto}'
    +'.fisa-print:hover{background:var(--sf2);color:var(--lime)}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);
})();
