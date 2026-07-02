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
          'Manifestare de voință făcută cu <b>intenția de a produce efecte juridice</b> (a crea, modifica sau stinge raporturi juridice civile). <i>Art. 1166 NCC</i>.',
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
          '<b>Constitutiv</b> (creează un drept nou: uzufruct, ipotecă) / <b>translativ</b> (transferă un drept existent: vânzare, donație) / <b>declarativ</b> (recunoaște un drept preexistent: partajul — efecte <i>ex tunc</i>, retroactive).',
          '<b>Inter vivos</b> (produce efecte în timpul vieții) / <b>mortis causa</b> (testamentul — produce efecte la moartea testatorului; este esențialmente revocabil oricând).',
          '<b>Strict personal</b> (<i>intuitu personae</i>: calitățile cocontractantului sunt determinante — mandatul, antrepriza artistică, donația) vs. <b>impersonal</b> (nu depinde de identitatea co-contractantului).'
        ]
      },
      { icon:'👤', title:'Capacitatea de folosință',
        items:[
          '<b>Persoana fizică</b> (art. 34 NCC): dobândită la <b>naștere</b>. Excepție: <i>infans conceptus pro nato habetur quotiens de commodis eius agitur</i> — drepturile copilului conceput se socotesc dobândite de la concepție, dacă se naște <b>viu</b> (chiar și o clipă).',
          '<b>Persoana juridică</b> (art. 205 NCC): dobândită de la data <b>înregistrării</b> sau, după caz, de la data actului de înființare. Excepție: dobândește anticipat (de la data actului de înființare) drepturile necesare pentru a lua ființă valabil.',
          'PJ: principiul <b>specialității</b> capacității de folosință (art. 206 NCC) — poate încheia numai acte juridice conforme cu scopul sau obiectul de activitate. Actele contrare = <b>nulitate relativă</b> (nu absolută).',
          '<b>Incapacități speciale de folosință</b> (art. 990 NCC): medicul/farmacistul/preotul care au îngrijit/asistat persoana în ultima boală nu pot primi donații sau legate de la aceasta. Sancțiunea = nulitate absolută (incapacitate de a primi, nu de a da).',
          'Absența capacității de folosință → <b>nulitate absolută</b>. Nu se poate acoperi prin confirmare. Distincție: ≠ absența capacității de exercițiu (care e NR și poate fi confirmată).'
        ]
      },
      { icon:'⚖️', title:'Capacitatea de exercițiu',
        items:[
          '<b>Deplină</b> (art. 38 NCC): de la <b>18 ani</b>. Excepție: minorul căsătorit dobândește capacitate deplină de la data căsătoriei (chiar dacă are 16 sau 17 ani). Dacă căsătoria se desface înainte de 18 ani — capacitatea de exercițiu deplină se menține.',
          '<b>Restrânsă</b> (14–18 ani, art. 41 NCC): acționează <b>personal</b>, dar cu <b>asistarea</b> (nu reprezentarea!) reprezentantului legal. Actele încheiate fără asistare = <b>nulitate relativă</b>, invocabilă de minor, reprezentant sau moștenitori.',
          '<b>Acte pe care minorul 14–18 le poate face singur</b> (art. 41–42 NCC): acte de conservare; acte de mică valoare cu executare imediată (cumpărarea unui bilet); depuneri/retrageri de la CEC/bancă; exercitarea drepturilor din raporturi de muncă; drepturi strict personale (recunoașterea unui copil, acceptarea/renunțarea la moștenire dacă e beneficiară).',
          '<b>Lipsă</b> — sub 14 ani (art. 43 NCC): acționează <b>numai prin reprezentantul legal</b> (părinți/tutore). Excepție: acte de mică valoare cu executare imediată. Actele încheiate personal = nulitate absolută (unii autori — NR; NCC lasă ambiguitate).',
          '<b>Lipsă</b> — interzisul judecătoresc (art. 164–177 NCC): acționează prin <b>tutore</b>. Actele anterioare punerii sub interdicție pot fi anulate dacă cauza de punere sub interdicție exista și era notorie la data actului.',
          '<b>Curatela</b> (art. 178 NCC): măsură provizorie de protecție, distinctă de tutelă. Curatorul asistă sau reprezintă persoana cu capacitate deplină dar în imposibilitate temporară de a-și exercita drepturile (boală, absență). ⚠️ Curatela nu afectează capacitatea de exercițiu!'
        ]
      },
      { icon:'⏳', title:'Modalitățile actului juridic civil (condiție, termen, sarcină)',
        items:[
          '<b>Condiția</b> (art. 1399 NCC): clauză care face să depindă nașterea sau stingerea drepturilor de un eveniment viitor și nesigur. <b>Suspensivă</b>: actul există dar dreptul e suspendat până la eveniment (<i>ex: îți vând mașina dacă obții permisul</i>). <b>Rezolutorie</b>: actul există și produce efecte, dar se desființează retroactiv la îndeplinirea condiției.',
          '<b>Condiție pur potestativă din partea debitorului</b> (art. 1403 NCC) → <b>nulitate absolută</b> a obligației. <i>Ex: „mă vând dacă vreau" — angajamentul nu există.</i> ⚠️ Condiția pur potestativă din partea creditorului e valabilă!',
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
          '<b>Prescripția acțiunilor</b>: NCA = imprescriptibilă (poate fi invocată oricând, inclusiv pe cale de excepție). NR = se prescrie în <b>3 ani</b> de la data la care cel îndreptățit a cunoscut cauza (art. 2529 NCC).'
        ]
      }
    ],
    grila:'<b>Capacitate de folosință</b> (lipsa → NCA, imprescriptibilă) ≠ <b>capacitate de exercițiu</b> (nerespectare → NR, prescriptibilă, confirmabilă). Minorul 14–18 ani: <b>asistat</b> (personal + asistare), nu reprezentat. Sub 14 ani și interzis judecătoresc: <b>reprezentați</b>. <i>Infans conceptus</i>: drepturi de la concepție, dacă se naște viu. Condiție pur potestativă a debitorului → NCA. Sarcina neîndeplinită → revocare, nu nulitate. Confirmare NR → efect retroactiv.'
  },

  {
    id:'w02', wk:'W02', dates:'6–12 iul', subj:'civ',
    title:'Consimțământul și viciile de consimțământ',
    sections:[
      { icon:'📌', title:'Condiții de valabilitate a consimțământului',
        items:[
          '<b>Serios</b>: exclus actele făcute în glumă (<i>jocandi causa</i>), în scop didactic sau teatral — lipsa intenției de a produce efecte juridice.',
          '<b>Liber</b>: neviciat de eroare, dol, violență sau leziune (art. 1206 NCC).',
          '<b>Exprimat în cunoștință de cauză</b>: obligație precontractuală de informare (art. 1182–1185 NCC); nerespectarea poate atrage răspundere delictuală sau calificarea ca dol prin reticență.',
          '<b>Oferta</b>: propunere fermă de a contracta. <b>Irevocabilă</b> dacă are termen sau dacă ofertantul s-a obligat să o mențină (art. 1191 NCC) — revocarea produce efecte dacă ajunge la destinatar înainte de acceptare. <b>Caducă</b>: la decesul sau incapacitatea ofertantului (dacă e vorba de o ofertă cu termen).',
          'Contractul se formează la momentul <b>acceptării ofertei</b>: teoria recepției (art. 1186 NCC) — perfectat când acceptarea <i>a ajuns</i> la ofertant, chiar dacă nu a luat cunoștință de ea. Tăcerea nu valorează acceptare, cu excepțiile prevăzute de lege sau uzanțe.',
          '<b>Promisiunea de a contracta</b> (art. 1279 NCC): obligație de a încheia un contract viitor. Nerespectare → daune <i>sau</i> instanța poate pronunța o hotărâre care ține loc de contract. ≠ <b>Pactul de opțiune</b> (art. 1278): oferta e irevocabilă pe durata opțiunii; beneficiarul acceptă sau nu — dacă acceptă, contractul se formează.'
        ]
      },
      { icon:'❓', title:'Eroarea (art. 1207–1213 NCC)',
        items:[
          '<b>Eroarea esențială</b> (art. 1207 NCC): poartă asupra naturii/obiectului actului, identității obiectului, persoanei (la acte <i>intuitu personae</i>) sau calității esențiale a bunului → <b>anulabilitate</b>.',
          'Eroarea trebuie să fie <b>scuzabilă</b> (art. 1208 NCC) — cel care nu manifestă diligența unui om rezonabil nu o poate invoca. <i>Ex: un profesionist care nu verifică registrul bunurilor imobile nu poate invoca eroarea.</i>',
          '<b>Eroarea de drept</b> (art. 1207 alin. 3 NCC): eroare asupra conținutului normei juridice; poate fi esențială și atrage anulabilitatea dacă e scuzabilă. ⚠️ Nu se poate invoca pentru a eluda o normă imperativă.',
          '<b>Eroarea obstacol</b>: <i>in negotio</i> (greșeală asupra naturii actului: X crede că donează, Y că vinde) sau <i>in corpore</i> (identitate totală greșită: bunuri diferite) → lipsă de acord → <b>nulitate absolută</b>.',
          'Eroarea <b>neesențială</b> (de calcul, aritmetică): nu afectează valabilitatea, atrage numai rectificarea prețului. Eroarea <b>indiferentă</b> (calități neeseențiale): fără efecte.',
          '<b>Eroarea comună și invincibilă</b> (art. 1213 NCC): dacă ambele părți au ereat identic și eroarea era de neevitat (invincibilă) → actul produce efectele pe care le-ar fi produs în lipsa erorii. ⚠️ Nu se anulează actul!'
        ]
      },
      { icon:'🎭', title:'Dolul (art. 1214–1216 NCC)',
        items:[
          'Manopere frauduloase (acțiune sau <b>reticență</b>) care induc în eroare și determină încheierea actului. Elementul obiectiv (manopere) + elementul subiectiv (intenția de a induce în eroare).',
          '<b>Dolul prin reticență</b> (art. 1214 alin. 1 NCC): tăcere intenționată când există obligație de informare (ex: vânzătorul cunoaște vicii ascunse și nu le divulgă, asiguratorul cunoaște riscul).',
          '<b>Dol de terț</b> → anulabilitate <b>numai dacă</b> cealaltă parte a cunoscut sau <b>trebuia să cunoască</b> manoperele (art. 1215 NCC). ⚠️ Diferit de violența terțului — acolo anulabilitatea e necondiționată!',
          'Sancțiune: <b>anulabilitate + daune-interese</b> (art. 1257 NCC). Cumulul e posibil chiar dacă nu se cere anularea — victima poate păstra contractul și cere numai daune.',
          'Nu se cere ca eroarea indusă să fie esențială — dolul atrage anulabilitatea chiar pentru o eroare neeseențială, dacă a determinat consimțământul. <b>Proba</b> dolului: celui care îl invocă (nu se prezumă).',
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
          '<b>Nu se aplică</b> (art. 1224 NCC): acte aleatorii (riscul e inerent), tranzacții (s-au făcut concesii reciproce), actele de partaj.',
          'Termen de prescripție la majori: <b>1 an</b> de la data încheierii actului (nu de la data la care au cunoscut cauza — excepție de la regula generală art. 2529 NCC).'
        ]
      },
      { icon:'🔁', title:'Schemă comparativă: viciile de consimțământ',
        items:[
          '<b>Eroarea</b>: spontană (nicio intervenție externă), trebuie să fie esențială + scuzabilă; <i>nu</i> se pot cumula daune cu anularea (dacă eroarea e pură, fără dol). Prescripție NR: <b>3 ani</b>.',
          '<b>Dolul</b>: provocat de cealaltă parte sau de un terț cunoscut; nu trebuie să fie esențial dacă a determinat consimțământul; daune cumulabile. Dolul de terț: anulare <b>numai dacă cealaltă parte știa</b>. Prescripție: <b>3 ani</b>.',
          '<b>Violența</b>: amenințare exterioară, injustă și gravă; violența de terț → anulabilitate <b>necondiționat</b>; daune de la autor (chiar terț). Prescripție: <b>3 ani</b>.',
          '<b>Leziunea</b>: disproporție + exploatare (la majori) / orice disproporție (la minori); sancțiune alternativă (anulare sau adaptare contract); prescripție specială <b>1 an</b> (≠ 3 ani). Nu se aplică contractelor aleatorii și tranzacțiilor.',
          '⚠️ <b>Regulă de reținut</b>: toate viciile atrag <b>nulitate relativă</b> (nu absolută). Excepție: eroarea obstacol (<i>in negotio / in corpore</i>) → nulitate absolută (lipsă de acord, nu viciu).'
        ]
      }
    ],
    grila:'<b>Dol de terț ≠ violență de terț</b>: dolul → anulabilitate numai dacă cealaltă parte <i>a știut sau trebuia să știe</i>; violența → anulabilitate <b>întotdeauna</b>. Eroarea: esențială + scuzabilă; eroarea comună invincibilă → nu se anulează (art. 1213). Leziunea la majori: <b>&gt;50% + exploatare + prescripție 1 an</b> (nu 3 ani!). Dolul incident: contract valabil + daune. Amenințarea legitimă cu un drept → nu e violență (art. 1219). Toate viciile → NR (excepție: eroarea obstacol → NCA).'
  },

  {
    id:'w03', wk:'W03', dates:'13–19 iul', subj:'civ',
    title:'Obiect, cauză, formă, nulitate, simulație',
    sections:[
      { icon:'📦', title:'Obiectul AJC (art. 1225–1234 NCC)',
        items:[
          'Conduita la care se obligă una sau ambele părți: <b>a da</b> (transferul unui drept real), <b>a face</b> (o prestație pozitivă) sau <b>a nu face</b> (o abținere).',
          'Bunul trebuie să fie: <b>determinat sau determinabil</b>, <b>licit</b> (în circuitul civil), <b>posibil</b>. Lipsa oricăreia → <b>nulitate absolută</b>.',
          '<b>Bunuri inalienabile</b> prin natură (bunuri publice, domeniu public) sau prin lege → actele de înstrăinare sunt nule absolut. <i>Ex: terenuri forestiere din fondul forestier național protejat.</i>',
          '<b>Impossibilium nulla est obligatio</b>: imposibilitate inițială absolută → nulitate absolută. Imposibilitate inițială relativă (bunul există dar vânzătorul nu îl poate procura) → poate fi validă ca obligație de a face.',
          '<b>Imposibilitate ulterioară fortuită</b> → stingerea obligației prin forță majoră/caz fortuit; nu atrage nulitatea.',
          'Obiect <b>viitor</b>: valabil (vânzarea unui bun viitor — art. 1228 NCC). <b>Excepție absolută</b>: pactele asupra unei succesiuni nedeschise a altei persoane = nulitate absolută (art. 956 NCC).',
          '<b>Prețul vânzării</b> (art. 1660 NCC): trebuie să fie serios (nu derizoriu) și sincer (nu fictiv/simulat). Prețul fictiv → actul nu e vânzare; dacă e derizoriu → vânzare cu preț lezionar sau contract fără cauză.'
        ]
      },
      { icon:'🎯', title:'Cauza AJC (art. 1235–1239 NCC)',
        items:[
          '<b>Cauza imediată</b> (scopul direct, tipic, identic pentru toți cei care încheie același tip de act): la vânzare = contraprestatia (prețul/bunul).',
          '<b>Cauza mediată</b> (motivul determinant, concret, individualizat): de ce anume a dorit X acel bun. Aceasta e cauza care poate fi ilicită sau imorală.',
          'Condiții cumulative (art. 1236 NCC): să <b>existe</b>, să fie <b>reală</b> (nu falsă), <b>licită</b> și <b>morală</b>.',
          '<b>Prezumție de existență și valabilitate</b> a cauzei (art. 1239 NCC): sarcina probei revine celui care contestă. Aplicarea: reclamantul care invocă lipsa cauzei trebuie să facă proba.',
          '<b>Cauza falsă</b> (eroare asupra motivului determinant): de fapt cauza există dar e greșit reprezentată → <b>nulitate relativă</b> (viciu de consimțământ prin eroare).',
          '<b>Cauza ilicită sau imorală</b> → <b>nulitate absolută</b> (<i>Fraus omnia corrumpit</i>). <i>Ex: donaţie pentru a menţine o relaţie concubinară contrară bunelor moravuri.</i>',
          'Cauza ilicită <i>a uneia din părți</i> (art. 1238 alin. 2 NCC): nu atrage nulitatea dacă cealaltă parte nu a cunoscut-o și nu trebuia să o cunoască. <b>Excepție</b>: dacă natura actului implică o cauză ilicită pentru ambele → NCA.'
        ]
      },
      { icon:'📝', title:'Forma AJC (art. 1240–1245 NCC)',
        items:[
          '<b>Ad validitatem</b> (solemnă): nerespectare → <b>nulitate absolută</b>. Exemple: donație (autentic notarial, art. 1011), ipotecă imobiliară (art. 2378), testament (olograf sau autentic sau mistic), căsătoria, actul constitutiv SA.',
          '<b>Ad probationem</b>: nerespectare → actul e <b>valabil</b>, dar nu poate fi dovedit cu martori sau prezumții dacă valoarea depășește 250 lei. Exemple: contracte &gt;250 lei, contractul de asigurare, CIM.',
          '<b>Pentru opozabilitate față de terți</b> (publicitate): nerespectare → act valabil între părți, dar <b>inopozabil</b> terților. Exemple: publicitate imobiliară CF, înregistrare AEGRM, publicitate societăților comerciale.',
          'Actul solemn care nu îndeplinește forma <i>ad validitatem</i> poate valora ca <b>promisiune de a contracta</b>, dacă cuprinde acordul de voință al părților și elementele esențiale (art. 1243 NCC). Promisiunea nu e valabilă dacă legea cere forma solemnă pentru chiar promisiunea de a contracta.',
          '<b>Principiul simetriei formelor</b> (art. 1243 NCC): dacă prin lege sau voința părților forma actului este solemnă, modificarea sau desființarea lui trebuie să respecte aceeași formă.',
          '<b>Forma electronică</b>: semnătura electronică extinsă (calificată) este echivalentul semnăturii olografe (Legea 455/2001). Actele <i>ad validitatem</i> care cer formă autentică nu pot fi încheiate prin simpla semnătură electronică.'
        ]
      },
      { icon:'🔴', title:'Nulitatea — clasificare și regim juridic (art. 1246–1265 NCC)',
        items:[
          '<b>Absolută (NCA)</b>: protejează interesul general/ordine publică. Cauze: lipsă capacitate de folosință, cauza ilicită/imorală, formă solemnă nerespectată, obiect ilicit/imposibil.',
          '<b>Relativă (NR)</b>: protejează interesul particular. Cauze: vicii de consimțământ, nerespectarea capacității de exercițiu, leziunea, cauza falsă.',
          'NCA: invocabilă de <b>oricine are interes</b> + din oficiu de instanță; <b>imprescriptibilă</b>; <b>nu se confirmă</b>. NR: numai de <b>persoana protejată</b>; prescrisă în <b>3 ani</b>; acoperibilă prin <b>confirmare</b>.',
          '<b>Nulitate de drept</b> (<i>ope legis</i>): legea prevede că actul e nul de plin drept (ex: art. 1011 alin. 2 — actul de donație verbal e nul absolut). <b>Nulitate judiciară</b> (<i>ope iudicis</i>): trebuie pronunțată de instanță.',
          '<b>Nulitate parțială</b> (art. 1255 NCC): clauza nulă e înlăturată, restul actului rămâne dacă poate exista fără ea. <b>Nulitate totală</b>: dacă clauza era determinantă, actul cade în întregime.',
          '<b>Nulitate virtuală</b> (art. 1253 NCC): sancțiunea se deduce din scopul normei încălcate, chiar dacă legea nu o prevede expres.',
          'Excepția de nulitate (<i>exceptio nullitatis</i>): poate fi invocată oricând, inclusiv pe cale de excepție în apărare, chiar dacă acțiunea în anulare e prescrisă — pentru NCA; pentru NR, excepția se prescrie la fel ca acțiunea.'
        ]
      },
      { icon:'🔄', title:'Simulația (art. 1289–1294 NCC)',
        items:[
          'Definiție: existența simultană a unui <b>act aparent</b> (public, fără conținut real sau cu conținut diferit) și a unui <b>contraînscris</b> (actul secret, care reflectă voința reală a părților).',
          'Tipuri: <b>act fictiv</b> (vânzare aparentă, în realitate actul nu produce efecte — ex: simulare pentru a eluda creditorii); <b>act deghizat</b> (prețul real diferit de cel declarat — deghizare parțială a unui element); <b>interpunere de persoane</b> (beneficiarul real e ascuns).',
          'Efecte <b>între părți</b>: prevalează întotdeauna <b>actul secret</b> (contraînscrisul), dacă există și e valabil. Actul aparent e lipsit de efecte între ele.',
          'Efecte față de <b>terții de bună-credință</b> (art. 1290 NCC): pot invoca fie actul aparent, fie actul secret, <b>la alegerea lor</b>, după cum le este mai favorabil. Terții de rea-credință (care au cunoscut simulația) nu se pot prevala de actul aparent.',
          'Simulație <b>în frauda terților sau a legii</b>: contraînscrisul este inopozabil terților prejudiciați; aceștia pot cere declararea ca fictiv/nul a actului aparent sau a celui secret.',
          '<b>Acțiunea în simulație</b>: terții pot cere instanței să constate caracterul simulat al actului aparent. Imprescriptibilă dacă simulația ascunde o NCA; prescriptibilă (3 ani) dacă scopul e altul.'
        ]
      }
    ],
    grila:'Forma <b>ad validitatem</b> → NCA; <b>ad probationem</b> → valabilă, doar proba afectată. Cauza <b>falsă</b> → NR; cauza <b>ilicită</b> → NCA. NCA: imprescriptibilă, neconfirmabilă; NR: 3 ani, confirmabilă. Simulație: între părți prevalează <b>actul secret</b>; terții de bună-credință pot alege. Pact succesiune nedeschisă altei persoane = NCA. Simetria formelor: modificarea actului solemn cere aceeași formă.'
  },

  {
    id:'w04', wk:'W04', dates:'20–26 iul', subj:'civ',
    title:'Efecte nulitate, modalități, prescripție extinctivă',
    sections:[
      { icon:'↩️', title:'Efectele nulității (art. 1254–1265 NCC)',
        items:[
          '<b>Retroactiv</b> (<i>ex tunc</i>): actul e desființat de la data încheierii. Excepție: contractele cu executare succesivă → nulitatea produce efecte numai pentru viitor (<i>ex nunc</i>) pentru prestațiile deja executate și consumate (art. 1254 alin. 2 NCC).',
          '<b>Restituirea prestațiilor</b> (art. 1635 NCC): repunere în starea anterioară. <b>În natură</b> (regula): se restituie bunul primit. <b>Prin echivalent</b> (excepție): dacă bunul a pierit, a fost consumat sau înstrăinat → se datorează valoarea bunului la data preluării sau, la alegerea creditorului, valoarea la data pronunțării hotărârii.',
          '<b>Excepții de la restituire</b>: (1) minorul este ținut la restituire numai în limita <b>îmbogățirii</b> actuale (art. 1647 NCC); (2) cauza imorală sau ilicită a <i>ambelor</i> părți → <i>nemo auditur propriam turpitudinem allegans</i> — niciuna nu poate cere restituirea; (3) contractele cu executare succesivă consumate.',
          '<b>Resoluto iure dantis, resolvitur ius accipientis</b>: desființarea actului principal antrenează desființarea actelor subsecvente. <b>Excepție</b>: terțul dobânditor cu titlu oneros, de bună-credință, înscris în CF (imobile) sau în alte registre de publicitate → protejat față de efectele retroactive.',
          '<b>Conversiunea</b> actului nul (art. 1260 NCC): actul nul ca tip A poate valora ca tip B dacă îndeplinește condițiile lui B și voința probabilă a părților o susține. <i>Ex: testament autentic nul de formă → testament olograf dacă e scris, datat și semnat de testator.</i>',
          '<b>Menținerea actelor de administrare</b>: actele de administrare ale dobânditorului de bună-credință (locațiune, reparații necesare) sunt opozabile proprietarului care redobândește bunul, în limitele uzanțelor (art. 1648 NCC).'
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
          '<b>Pur potestativă din partea debitorului</b> (<i>„mă vând dacă vreau"</i>, art. 1403 NCC) → <b>nulitate absolută</b>. ⚠️ Condiția pur potestativă din partea <i>creditorului</i> e valabilă!',
          '<b>Potestativă simplă</b> (<i>dacă mă voi căsători</i>) / <b>cazuală</b> (depinde exclusiv de hazard) / <b>mixtă</b> (depinde parțial de terț sau de hazard) → valide.',
          '<b>Condiția imposibilă, ilicită sau imorală</b> (art. 1402 NCC): dacă e <i>rezolutorie</i> → se consideră nescrisă, actul rămâne pur și simplu. Dacă e <i>suspensivă</i> și determinantă → nulitate absolută a obligației.',
          '<b>Buna-credință în așteptarea condiției</b> (art. 1409 NCC): în perioada pendentă, niciuna din părți nu poate împiedica realizarea/nerealizarea condiției cu rea-credință. Dacă o face → condiția se consideră îndeplinită.'
        ]
      },
      { icon:'⌛', title:'Prescripția extinctivă (art. 2500–2544 NCC)',
        items:[
          '<b>Termen general: 3 ani</b> (drepturi personale patrimoniale — art. 2517 NCC). Curge de la data la care <b>titularul a cunoscut sau trebuia să cunoască</b> atât prejudiciul cât și pe cel răspunzător (art. 2524 NCC).',
          '<b>Termene speciale</b>: 10 ani (drepturi reale mobiliare, răspundere contractuală pentru lucrări imobiliare — art. 2518); 2 ani (asigurări — art. 2519); 1 an (leziune; unele acțiuni de muncă); 6 luni (vicii aparente ale imobilului; acțiunea în garanție pentru vicii — art. 2531); 30 zile (acțiunile posesorii — art. 949 CPC).',
          '<b>Suspendarea</b> (termenul se oprește, apoi continuă de unde s-a oprit, art. 2532–2536 NCC): forță majoră; creditor incapabil fără reprezentant; între soți; curs al negocierilor; cerere de mediere; retragerea cererii de arbitrare.',
          '<b>Întreruperea</b> (termenul scurs se șterge, curge de la zero, art. 2537–2543 NCC): recunoașterea dreptului de debitor; cerere de chemare în judecată; punere în întârziere; arbitrare. ⚠️ Recunoașterea poate fi expresă sau tacită (plată parțială, cerere de reeșalonare).',
          '<b>Repunerea în termen</b> (art. 2522 NCC): motive temeinice (boală, accident) + cerere în max. <b>30 zile</b> de la încetarea cauzei. Judecătorul apreciază.',
          'Prescripția <b>nu operează de drept</b> (art. 2512 NCC): trebuie invocată de debitor, pe cale de excepție. Instanța nu o ridică din oficiu. După împlinire, debitorul care execută voluntar <b>nu mai poate cere restituirea</b> (obligația devine naturală, art. 2506 NCC). Renunțarea la prescripție e valabilă numai <b>după împlinire</b> (art. 2507 NCC).'
        ]
      }
    ],
    grila:'Condiție <b>pur potestativă din partea debitorului</b> = NCA; din partea creditorului = valabilă. <b>Suspendare</b> (continuă de unde s-a oprit) ≠ <b>Întrerupere</b> (o ia de la zero). Termen general: <b>3 ani</b>; drepturi reale mobiliare: <b>10 ani</b>. Debitorul care plătește înainte de termen nu poate cere restituirea. Conversiunea: actul nul poate valora ca alt act. Minor: restituire numai în limita îmbogățirii. Prescripția împlinită → obligație naturală; debitor care execută voluntar nu poate cere înapoi.'
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
          '<b>Legale</b> (art. 602–625 NCC): distanțe minime față de hotar pentru construcții și arbori; interdicția de a instala geamuri cu vedere laterală la mai puțin de 0,6 m de hotar; <b>dreptul de trecere forțat</b> (art. 617 NCC) — proprietarul fondului înfundat poate cere trecere la drumul public, cu despăgubire.',
          '<b>Abuzul de drept</b> (art. 15 NCC): exercitarea dreptului cu <i>intenția exclusivă de a păgubi</i> pe altul (<i>théorie des actes d\'émulation</i>) sau cu depășirea limitelor bunei-credințe → faptă ilicită, antrenează răspundere delictuală.',
          '<b>Clauza de inalienabilitate</b> (art. 627 NCC): valabilă dacă există un <b>motiv licit și serios</b>; durată max <b>49 ani</b>; privește numai bunurile proprietarului la data clauzei. Opozabilă terților prin publicitate (CF); fără publicitate → inopozabilă terților de bună-credință.',
          '<b>Drepturile vecinilor</b> (art. 630 NCC): proprietarul trebuie să tolereze inconvenientele normale de vecinătate (zgomot, mirosuri). Inconveniențele anormale (depășind pragul rezonabil) → obligarea la încetare sau despăgubiri, indiferent de culpă.'
        ]
      },
      { icon:'⚙️', title:'Dobândirea dreptului de proprietate',
        items:[
          '<b>Moduri originare</b> (dobânditorul nu primește dreptul de la un autor anterior): uzucapiunea, accesiunea, ocupațiunea (bunuri fără stăpân — art. 941 NCC), comoriența (dreptul de proprietate se dobândește în momentul morții), munca creatoare (opere de creație).',
          '<b>Moduri derivate</b> (translative de la un autor): acte juridice (vânzare, donație, schimb), moștenire (testamentară sau legală). Principiu: <i>nemo plus iuris ad alium transferre potest quam ipse habet</i> (nimeni nu poate transmite mai mult decât are).',
          '<b>Principiul transferului prin simplul acord de voință</b> (art. 1674 NCC): la vânzare, proprietatea se strămută de drept de la vânzător la cumpărător prin simplul acord, chiar dacă bunul nu a fost predat și prețul nu a fost plătit. <b>Excepție</b>: bunuri de gen — transferul se produce la <b>individualizare</b>.',
          '<b>Cartea Funciară</b> (art. 557 alin. 4 NCC): înscrierea în CF are efect <b>constitutiv</b> (din 2019, data implementării integrale a sistemului CF național) — proprietatea imobiliară se dobândește la data înscrierii. <i>Anterior integralității</i>: înscrierea era de opozabilitate față de terți, nu constitutivă.',
          '<b>Accesiunea imobiliară artificială</b> (art. 577 NCC): constructorul pe terenul altuia — proprietarul terenului dobândește construcția prin accesiune, cu obligația de a-l despăgubi pe constructor. Dacă constructorul e de bună-credință: despăgubire la valoarea materialelor și manoperei sau valoarea de piață a construcției.'
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
          '<b>Dreptul de preempțiune</b>: la înstrăinarea cotei prin vânzare, ceilalți coproprietari au <b>drept de preempțiune</b> (art. 641 alin. 1 NCC, cu trimitere la art. 1730–1740). Nerespectarea → coproprietarul preferențial poate substitui cumpărătorul în 3 luni.',
          '<b>Partajul</b> (art. 669 NCC): poate fi cerut oricând de orice coproprietar (drept imprescriptibil). Convențional sau judiciar. Modalități: atribuire în natură cu sultă, licitație publică (dacă bunul nu se poate împărți). Efecte: <b>declarative</b> (retroactive, de la data nașterii coproprietății).',
          '<b>Cheltuielile comune</b>: proporțional cu cotele. Coproprietarul care face cheltuieli necesare pentru conservarea bunului are acțiune în regres față de ceilalți.'
        ]
      }
    ],
    grila:'Efectul <b>declarativ</b> al partajului: retroactiv de la nașterea coproprietății. Regula unanimității: numai acte de <b>dispoziție</b> (nu de administrare). Clauza de inalienabilitate: max <b>49 ani</b> + motiv licit. Coproprietatea forțată: <b>nu se poate partaja</b>. Transfer proprietate imobiliară: prin acord de voință, dar opozabilitate față de terți → înscrierea în CF (efect constitutiv din 2019). Proprietate publică: inalienabilă, insesizabilă, imprescriptibilă. Preempțiune coproprietar: <b>3 luni</b> de la comunicare.'
  },

  {
    id:'w06', wk:'W06', dates:'3–9 aug', subj:'civ',
    title:'Dezmembrămintele dreptului de proprietate',
    sections:[
      { icon:'🌿', title:'Uzufructul (art. 703–748 NCC)',
        items:[
          'Dreptul de a <b>folosi bunul</b> altuia și de a-i culege <b>fructele</b>, cu obligația conservării <b>substanței</b>. Constituire: prin act juridic (inclusiv testament) sau uzucapiune.',
          '<b>Uzufructuarul</b>: suportă reparațiile de <i>întreținere</i>; culege fructele naturale, civile, industriale; <b>nu are drept la producte</b>. Poate închiria/arenda bunul — locațiunile consimțite, dacă sunt înregistrate, sunt opozabile nudului proprietar max <b>3 ani</b> după stingerea uzufructului.',
          '<b>Nudul proprietar</b>: suportă reparațiile <i>capitale</i>; are drept la producte; poate înstrăina nuda proprietate fără acordul uzufructuarului; poate ipoteca nuda proprietate (cu consimțământul uzufructuarului pentru înscrierea în CF).',
          '<b>Cedarea uzufructului</b> (art. 714 NCC): uzufructuarul poate ceda dreptul sau poate constitui o ipotecă asupra lui. ⚠️ Uzufructul se stinge tot la <b>moartea uzufructuarului inițial</b>, nu a cesionarului.',
          '<b>Cuaziuzufructul</b> (art. 712 NCC): uzufructul asupra bunurilor consumptibile (bani, grâne). Uzufructuarul devine proprietar al bunului, dar trebuie să restituie la stingere <i>bunuri de aceeași calitate, cantitate și valoare</i>.',
          '<b>Stingere</b> (art. 746 NCC): expirarea termenului; <b>moartea uzufructuarului</b> (chiar cu beneficiar cesionar); consolidarea (uzufructuarul dobândește nuda proprietate sau invers); renunțare; <b>neuz 10 ani</b>; pieirea totală a bunului.',
          'Uzufructul este <b>temporar prin natura sa</b>; nu poate depăși viața uzufructuarului (la PJ: max 30 ani).'
        ]
      },
      { icon:'🏠', title:'Uzul și abitația (art. 749–754 NCC)',
        items:[
          '<b>Uzul</b>: dreptul de a folosi bunul și a culege fructele <b>numai în limita nevoilor proprii și ale familiei</b>. ⚠️ Frugele în exces rămân nudului proprietar — spre deosebire de uzufruct.',
          '<b>Abitația</b>: dreptul de a locui în casa altuia cu familia; specific imobilelor de locuință. Titularul poate locui și cu membrii de familie, chiar dacă nu sunt menționați expres.',
          'Ambele sunt <b>inalienabile și insesizabile</b> (art. 752 NCC): nu pot fi cedate terților; nu pot fi urmărite de creditori; nu pot fi ipotecate. ⚠️ Uzufructul, în schimb, poate fi cedat.',
          'Constituire: numai prin act juridic (nu prin uzucapiune sau destinație de proprietar). Regimul juridic al uzufructului se aplică <i>mutatis mutandis</i>.',
          '<b>Dreptul de abitație al soțului supraviețuitor</b> (art. 973 NCC): timp de <b>1 an</b> de la data deschiderii moștenirii, dacă locuia în acea casă și nu este moștenitor sau coproprietar al ei. Este legatar de uz gratuit.'
        ]
      },
      { icon:'🛤️', title:'Servituțile (art. 755–772 NCC)',
        items:[
          'Sarcini impuse unui fond (<b>aservit</b>) în folosul unui alt fond (<b>dominant</b>); urmăresc fondurile, <b>nu persoanele</b>. Proprietarul fondului dominant nu poate exercita alte drepturi decât cele stabilite prin titlu.',
          '<b>Continue</b>: exercitarea nu necesită act uman periodic (<i>ex: scurgerea apelor, vederea, lumina</i>). / <b>Discontinue</b>: necesită acte repetate (<i>ex: dreptul de trecere, dreptul de a lua apă</i>).',
          '<b>Aparente</b>: semnalizate printr-un semn vizibil (drum, șanț). / <b>Neaparente</b>: fără semn exterior (<i>ex: interdicția de a construire la o anumită înălțime</i>).',
          '<b>Moduri de dobândire</b>: (1) titlu (act juridic); (2) uzucapiune — <b>numai servituțile continue și aparente</b>; (3) destinația de proprietar — servitutea se naște când un proprietar, care deținea ambele fonduri, le înstrăinează separat fără a suprima semnul vizibil al servituții.',
          '<b>Servituți pozitive</b> (titularul fondului dominant poate face ceva pe fondul aservit: trecere, a lua apă) vs. <b>negative</b> (fondul aservit trebuie să se abțină: interdicția de a construi, de a planta).',
          '<b>Stingere</b>: neuz <b>10 ani</b> (servituți discontinue sau neaparente); confuziune (ambele fonduri revin aceluiași proprietar); renunțare; pieirea fondului aservit; răscumpărare.'
        ]
      },
      { icon:'🏗️', title:'Superficia (art. 693–702 NCC)',
        items:[
          'Dreptul real de a <b>edifica sau păstra o construcție pe terenul altei persoane</b>, asociat cu un drept de folosință (<i>superficie</i> asupra terenului aferent construcției). Superficiarul = proprietarul construcției.',
          'Constituire: act juridic (convenție sau testament), uzucapiune sau alt mod prevăzut de lege. Înscrierea în CF e obligatorie pentru opozabilitate față de terți.',
          'Durată: max <b>99 ani</b>, cu posibilitate de reînnoire. La PF — poate fi viageră; la PJ — max 99 ani.',
          '<b>La stingerea superficiei</b>: proprietarul terenului poate (a) prelua construcția la <i>valoarea de piață</i> sau (b) cere superficiarului să ridice construcția pe cheltuiala sa. ⚠️ Dacă nu se înțeleg, instanța stabilește soluția.',
          'Superficiarul poate <b>ipoteca construcția</b> separat de teren (art. 696 NCC). Ipoteca se extinde și asupra dreptului de folosință a terenului.',
          '⚠️ Superficia ≠ servitutea: superficia conferă un <i>drept de proprietate</i> (asupra construcției) + folosință teren; servitutea nu conferă proprietate, ci numai o sarcină. Superficia ≠ accesiunea: superficiarul <i>nu este supus accesiunii</i> — construcția nu se incorporează terenului.'
        ]
      },
      { icon:'🔁', title:'Schemă comparativă: dezmembrăminte',
        items:[
          '<b>Uzufruct</b>: fructe + folosință; cedabil + ipotecabil; se stinge la moartea uzufructuarului; durată max viager (PF) sau 30 ani (PJ).',
          '<b>Uz</b>: fructe doar pentru nevoile proprii + familie; inalienabil + insesizabil; se stinge la moartea titularului.',
          '<b>Abitație</b>: locuire proprie + familie; inalienabilă + insesizabilă; se stinge la moartea titularului. Toate trei: constituire prin act juridic sau uzucapiune.',
          '<b>Servitutea</b>: sarcină pe un fond în folosul altui fond (propter rem); urmărește fondurile, nu persoanele; nu conferă proprietate; discontinue/neaparente → numai prin titlu.',
          '<b>Superficia</b>: drept de proprietate asupra construcției + folosință teren; cedabilă, ipotecabilă; max 99 ani. Deosebire esențială față de servitute și uzufruct: superficiarul <i>are proprietatea construcției</i>.'
        ]
      }
    ],
    grila:'Uzufructuarul: <b>fructe da, producte nu</b>; uzufruct se stinge la moartea <b>uzufructuarului inițial</b> (nu a cesionarului). Abitația: <b>inalienabilă și insesizabilă</b> (spre deosebire de uzufruct, care e cedabil). Servituți discontinue/neaparente: <b>numai prin titlu</b>, nu prin uzucapiune. Superficia: max <b>99 ani</b>; superficiarul nu e supus accesiunii. Neuz servituți: <b>10 ani</b>.'
  },

  {
    id:'w07', wk:'W07', dates:'10–16 aug', subj:'civ',
    title:'Posesie, uzucapiune, revendicare, garanții reale',
    sections:[
      { icon:'✋', title:'Posesia (art. 916–952 NCC)',
        items:[
          '<b>Corpus</b> (stăpânire de fapt — poate fi exercitat și prin altul, <i>corpore alieno</i>) + <b>animus</b> (intenția de a stăpâni <i>pentru sine</i> — nu se exercită prin altul).',
          '<b>Detenția precară</b>: stăpânire fără <i>animus domini</i> (chiriaș, depozitar, comodatar, uzufructuar) → nu produce efectele posesiei; detentorul nu poate invoca uzucapiunea.',
          '<b>Calitățile posesiei utile</b>: continuă (acte repetate la intervale normale), pașnică (netulburată prin violență), publică (nu clandestină), neechivocă (exercitată în mod clar ca proprietar).',
          'Viciile posesiei: discontinuitate, violență, clandestinitate, echivoc. Viciile sunt <b>relative</b> (invocabile numai de cine e vizat) și <b>temporare</b> (dispar la încetarea cauzei).',
          '<b>Intervertirea detenției precare</b> în posesie (art. 920 NCC): numai în cazuri expres — ex: detentorul dobândește bunul de la proprietar printr-un act translativ, sau negă în mod ostentativ dreptul celui de la care deține.',
          '<b>Pierderea posesiei</b>: pierderea corpusului (abandonul material), pierderea animus-ului (recunoașterea dreptului altuia), sau a ambelor elemente. Uzucapiunea se întrerupe la pierderea posesiei.'
        ]
      },
      { icon:'🌱', title:'Efectele posesiei (art. 937–951 NCC)',
        items:[
          '<b>Prezumția de proprietate</b> (art. 919 NCC): posesorul e prezumat proprietar până la proba contrară. Cel care contestă posesia trebuie să facă proba.',
          'Posesor <b>de bună-credință</b>: dobândește <b>fructele</b> (naturale, civile, industriale), dar <b>nu și productele</b>. Buna-credință se apreciază <i>la data perceperii fiecărui fruct</i>.',
          'Posesor <b>de rea-credință</b>: restituie toate fructele + contravaloarea celor consumate sau deteriorate cu vinovăție. Datorează și fructele pe care nu le-a perceput dar ar fi putut.',
          '<b>Bunuri mobile</b> (art. 937 NCC): posesia de bună-credință valorează titlu de proprietate (<i>en fait de meubles, la possession vaut titre</i>). <b>Excepție</b>: bunuri furate sau pierdute — proprietarul poate revendica în <b>3 ani de la furt/pierdere</b>, chiar față de terțul de bună-credință cu titlu oneros.',
          '<b>Acțiuni posesorii</b> (art. 949 CPC): <b>complânda</b> — orice tulburare/deposedare; <b>reintegranda</b> — tulburare/deposedare prin violență. Termen: <b>1 an</b> de la tulburare. Nu se cere dovedirea dreptului de proprietate, ci numai a posesiei.'
        ]
      },
      { icon:'⌛', title:'Uzucapiunea imobiliară (art. 928–934 NCC)',
        items:[
          '<b>Uzucapiunea extratabulară</b> (art. 930 NCC): posesie utilă <b>10 ani</b> + bunul nu e înscris în CF, sau titularul înscris a decedat sau a renunțat la drept. Cerere de uzucapiune înregistrată la OCPI.',
          '<b>Uzucapiunea tabulară</b> (art. 931 NCC): posesorul s-a înscris cu <b>bună-credință</b> în CF pe baza unui titlu translativ (chiar dacă autorul nu era proprietar) + <b>5 ani</b> de la înscrierea în CF fără contestație.',
          '<b>Joncțiunea posesiilor</b> (art. 933 NCC): posesorul actual poate uni posesia sa cu a autorului (dacă o invocă). Preia și viciile.',
          '<b>Efectele uzucapiunii</b> (art. 934 NCC): dreptul se dobândește <b>retroactiv</b> de la data la care a început posesia. Uzucapantul dobândește dreptul liber de sarcini constituite după data începerii posesiei.',
          'Uzucapiunea <b>nu operează</b> împotriva statului sau UAT-urilor pentru bunuri publice. Nu operează nici dacă titularul din CF nu a cunoscut și nu trebuia să cunoască posesia (la uzucapiunea extratabulară).',
          '<b>Renunțarea la uzucapiune</b>: numai după împlinirea termenului; anterioară = nulă. Uzucapantul renunță la dobândirea dreptului, nu la posesie.'
        ]
      },
      { icon:'⚔️', title:'Acțiunea în revendicare și dubla vânzare (art. 563–566 NCC)',
        items:[
          'Acțiunea <i>in rem</i> a proprietarului neposesor contra posesorului neproprietar. Sarcina probei: reclamantul trebuie să probeze că el e proprietar (<i>probatio diabolica</i>).',
          '<b>Imobiliară</b>: <b>imprescriptibilă</b> extinctiv (se poate formula oricând); cedează în fața uzucapiunii. Admiterea → obligă pârâtul să restituie bunul + fructele (de rea-credință) sau numai bunul (de bună-credință).',
          '<b>Mobiliară</b>: dacă bunul a ajuns la posesorul de bună-credință printr-un act cu <b>titlu oneros</b> → proprietarul pierde acțiunea. Dacă titlu gratuit → revendicarea e admisă.',
          '<b>Bunuri mobile furate/pierdute</b>: proprietarul poate revendica față de oricine în <b>3 ani</b> de la furt/pierdere, chiar dacă terțul e de bună-credință și a dobândit cu titlu oneros.',
          '<b>Dubla vânzare imobiliară</b>: preferat cumpărătorul care a <b>înscris primul în CF</b> de bună-credință, chiar dacă a dobândit ulterior. Câștigătorul CF nu răspunde față de cel vătămat (care are acțiune în daune față de vânzătorul fraudulos).',
          '<b>Dubla vânzare mobiliară</b>: preferat cel care a intrat <b>primul în posesie</b> de bună-credință (art. 1275 NCC). Dacă niciunul nu e în posesie → cel cu titlu mai vechi.'
        ]
      },
      { icon:'🔒', title:'Garanții reale și personale (art. 2279–2479 NCC)',
        items:[
          '<b>Ipoteca imobiliară</b> (art. 2343 NCC): accesorie (urmează soarta creanței), indivizibilă (garantează creanța până la plata integrală), specială (poartă pe un bun determinat). Rang → data înscrierii în CF. Creditorul ipotecar poate urmări bunul indiferent de cine îl deține.',
          '<b>Ipoteca mobiliară</b> (art. 2387 NCC): se constituie fără deposedarea debitorului (spre deosebire de gaj). Publicitate → înregistrare în AEGRM. Rang → data înregistrării.',
          '<b>Gajul</b> (art. 2480 NCC): presupune <b>deposedarea</b> debitorului — bunul se predă creditorului sau unui terț custode. Creditorul gajist nu poate folosi bunul (doar să-l păstreze), sub sancțiunea abuzului de gaj.',
          '<b>Fidejusiunea</b> (art. 2280 NCC): garanție personală — fidejusorul garantează cu întregul său patrimoniu. Beneficii ale fidejusorului: (1) <b>discuțiune</b> — creditorul trebuie să urmărească mai întâi debitorul principal; (2) <b>diviziune</b> — dacă sunt mai mulți fidejusori, fiecare e ținut numai pentru partea sa. ⚠️ Beneficiile pot fi excluse prin clauza de renunțare.',
          '<b>Privilegiile</b> (art. 2333 NCC): preferință legală, izvorând din natura creanței. Ordinea: (1) cheltuielile de judecată; (2) cheltuielile de conservare/vânzare; (3) creanțele salariale. ⚠️ Super-privilegiu: cheltuielile de conservare a bunului preced ipotecile chiar anterioare.'
        ]
      }
    ],
    grila:'Detenția precară <b>nu duce la uzucapiune</b>. Posesorul de bună-credință: <b>fructe da, producte nu</b>. Uzucapiune extratabulară: <b>10 ani</b>; tabulară: <b>5 ani</b>. Dubla vânzare imobiliar: prioritate → <b>înscrierea CF</b> de bună-credință. Dubla vânzare mobiliară: prioritate → <b>prima posesie</b> de bună-credință. Revendicare mobiliară față de dobânditorul oneros de bună-credință: proprietarul pierde (excepție: furate/pierdute → 3 ani). Fidejusiunea: beneficii de discuțiune și diviziune, eliminabile prin clauză.'
  },

  {
    id:'w08', wk:'W08', dates:'17–23 aug', subj:'civ',
    title:'Izvoarele obligațiilor + fapt juridic licit',
    sections:[
      { icon:'📋', title:'Clasificarea izvoarelor obligațiilor',
        items:[
          '<b>Contractul</b> (art. 1166 NCC): acordul de voință al două sau mai multor persoane cu intenția de a crea, modifica sau stinge raporturi juridice.',
          '<b>Actul juridic unilateral</b> (art. 1324 NCC): promisiunea publică de recompensă, oferta, testamentul, gestul de recunoaștere a unui drept.',
          '<b>Faptul juridic licit</b>: gestiunea de afaceri, plata nedatorată, îmbogățirea fără justă cauză.',
          '<b>Faptul juridic ilicit</b>: răspunderea civilă delictuală (W09).',
          '<b>Legea</b>: izvor direct în unele cazuri (obligații legale de întreținere, obligația de garanție legală).'
        ]
      },
      { icon:'🤲', title:'Gestiunea de afaceri (art. 1330–1340 NCC)',
        items:[
          'Gerantul administrează interesele geratului <b>fără știrea și fără mandatul</b> acestuia, fără a fi obligat prin lege sau contract.',
          '<b>Condiții</b>: geratul absent sau în imposibilitate de a-și administra interesele; gerantul acționează voluntar; utilitate obiectivă la momentul actului (<b>nu contează rezultatul final</b>).',
          '<b>Obligațiile gerantului</b>: diligența unui bun proprietar; să continue gestiunea; să informeze geratul; să dea socoteală.',
          '<b>Obligațiile geratului</b>: restituie <b>cheltuielile utile și necesare</b> + dobânzi; <b>nu datorează cheltuieli voluptuare</b>.',
          '<b>Atenție!</b> Dacă gestiunea e contrară voinței <b>cunoscute sau prezumate</b> a geratului, gerantul nu poate cere decât restituirea îmbogățirii geratului (și numai în limita acesteia).',
          'Ratificarea gestiunii: retroactiv, geratul devine mandant și gestiunea produce efectele mandatului.'
        ]
      },
      { icon:'💸', title:'Plata nedatorată (art. 1341–1344 NCC)',
        items:[
          'Solvensul a executat o prestație pe care <b>nu o datora</b> (din eroare sau sub constrângere).',
          '<b>Condiții</b>: existența plății; absența datoriei față de accipiens (sau datoria aparținea altcuiva).',
          'Accipiens <b>de rea-credință</b>: restituie integral + dobânzi de la data plății.',
          'Accipiens <b>de bună-credință</b> care a distrus titlul sau a lăsat să se prescrie dreptul față de adevăratul debitor → este exonerat de restituire (în limitele prejudiciului cauzat solvensului).',
          'Accipiens de bună-credință care a cheltuit suma: restituire numai în limita îmbogățirii existente.',
          '<b>Prescripție</b>: 3 ani de când solvensul a cunoscut sau trebuia să cunoască lipsa datoriei.'
        ]
      },
      { icon:'⚖️', title:'Îmbogățirea fără justă cauză (art. 1345–1347 NCC)',
        items:[
          '<b>Condiții</b>: îmbogățirea unui patrimoniu + sărăcirea corelativă a altui patrimoniu + legătură de cauzalitate + <b>absența cauzei juste</b>.',
          '<b>Acțiunea de in rem verso</b>: <b>subsidiară</b> — se aplică numai dacă nu există altă acțiune (contractuală, delictuală, plata nedatorată).',
          '<b>Limita restituirii</b>: <b>minimul</b> dintre valoarea îmbogățirii și valoarea sărăcirii (la data sesizării instanței).',
          'Nu se aplică dacă îmbogățirea are o cauză justă (act juridic valabil, liberalitate, obligație legală).',
          'Interesul legitim sau exercitarea unui drept: îmbogățire justă, acțiunea e inadmisibilă.'
        ]
      }
    ],
    grila:'Gestiunea ≠ mandat: la mandat există <b>acordul geratului</b>. Gestiunea contrară voinței geratului → gerantul poate cere <b>numai restituirea îmbogățirii</b>. Îmbogățirea fără justă cauză e <b>subsidiară</b>. Limita restituirii: <b>minimul</b> dintre îmbogățire și sărăcire. La plata nedatorată, accipientele de rea-credință: restituie integral + dobânzi; de bună-credință care a distrus titlul: exonerat.'
  },

  {
    id:'w09', wk:'W09', dates:'24–30 aug', subj:'civ',
    title:'Răspunderea civilă delictuală',
    sections:[
      { icon:'📌', title:'Condiții generale (art. 1349 NCC)',
        items:[
          'Patru condiții cumulative: <b>faptă ilicită</b> + <b>prejudiciu</b> + <b>legătură de cauzalitate</b> + <b>vinovăție</b>.',
          '<b>Fapta ilicită</b>: orice acțiune sau inacțiune care încalcă norma legală sau bunele moravuri și cauzează un prejudiciu altuia.',
          '<b>Prejudiciul</b>: cert, direct, personal, rezultat din lezarea unui drept sau interes legitim; poate fi material sau moral.',
          '<b>Vinovăția</b>: intenție (directă/indirectă) sau culpă (neglijență/imprudență); apreciată <i>in abstracto</i> (comparație cu omul diligent).'
        ]
      },
      { icon:'👨‍👩‍👧', title:'Răspunderea pentru fapta altuia (art. 1372–1374 NCC)',
        items:[
          '<b>Răspunderea părinților</b> (art. 1372): pentru prejudicii cauzate de minori. Prezumție <b>relativă</b> de culpă → părinții pot răsturna dovedind că nu puteau împiedica fapta.',
          '<b>Răspunderea comitenților pentru prepuși</b> (art. 1373): comitentul răspunde pentru fapta prepusului săvârșită în exercitarea funcțiilor încredințate. Prezumție <b>absolută</b> (irefragabilă) → nu poate fi răsturnată prin probă contrară.',
          'Prepusul este cel care acționează sub autoritatea și controlul comitentului (raport de subordonare).',
          'Comitentul care plătește are <b>acțiune în regres</b> față de prepus (dacă prepusul a acționat cu vinovăție).',
          '<b>Răspunderea institutorilor</b> (art. 1372 alin. 2): prezumție relativă, similară cu părinții, pentru elevii/studenții aflați sub supraveghere.'
        ]
      },
      { icon:'🔧', title:'Răspunderea pentru lucruri, animale și ruina edificiului',
        items:[
          '<b>Răspunderea pentru lucruri</b> (art. 1376): obiectivă (fără vinovăție); răspunde <b>paznicul juridic</b> = cel care are folosința și controlul independent al lucrului (nu neapărat proprietarul).',
          '<b>Paza juridică ≠ paza materială</b>: cel care predă lucrul spre folosință (<i>ex:</i> cel care împrumută mașina) pierde paza juridică.',
          '<b>Răspunderea pentru animale</b> (art. 1375): obiectivă; răspunde proprietarul sau cel care se folosește de animal la momentul producerii prejudiciului.',
          '<b>Ruina edificiului</b> (art. 1378): obiectivă; răspunde <b>proprietarul edificiului</b> indiferent de culpă; ruina poate fi din lipsă de întreținere sau viciu de construcție.'
        ]
      },
      { icon:'🛡️', title:'Cauze exoneratoare de răspundere',
        items:[
          '<b>Forța majoră</b>: eveniment extern, imprevizibil, insurmontabil → exonerează la orice tip de răspundere, inclusiv cea obiectivă.',
          '<b>Cazul fortuit</b>: eveniment intern (propriu sferei de activitate); exonerează <b>numai</b> la răspunderea subiectivă, <b>nu</b> la cea obiectivă (lucruri, animale, ruina edificiului, activități periculoase).',
          '<b>Fapta victimei</b>: poate reduce sau înlătura răspunderea, în funcție de contribuția cauzală.',
          '<b>Fapta unui terț</b>: exonerează dacă este cauza exclusivă a prejudiciului.',
          '<b>Consimțământul victimei</b>: exonerează dacă e informat și privitor la un prejudiciu patrimonial; nu exonerează niciodată pentru vătămările corporale grave.'
        ]
      }
    ],
    grila:'Răspunderea comitenților = prezumție <b>absolută</b> (nu poate fi răsturnată). Răspunderea părinților = prezumție <b>relativă</b>. La răspunderea obiectivă (lucruri, animale, ruina), <b>cazul fortuit nu exonerează</b> — numai forța majoră. Paza juridică ≠ paza materială: cel care cedează folosința pierde paza juridică.'
  },

  {
    id:'w10', wk:'W10', dates:'31 aug–6 sep', subj:'civ',
    title:'Executarea, plata, solidaritatea + protecția creditorului',
    sections:[
      { icon:'💳', title:'Plata (art. 1469–1515 NCC)',
        items:[
          '<b>Cine poate plăti</b>: oricine, inclusiv un terț (excepție: obligații <i>intuitu personae</i> — numai debitorul).',
          '<b>Cui se plătește</b>: creditorului sau reprezentantului legal/convențional; plata unui terț neautorizat e invalidă (excepție: creditor o ratifică sau a profitat de ea).',
          '<b>Principiul integrității plății</b>: creditorul nu poate fi forțat să accepte <b>plăți parțiale</b>, chiar dacă datoria e divizibilă.',
          '<b>Imputația plăților</b>: debitorul cu mai multe datorii față de același creditor poate indica la ce se impută; dacă nu: întâi cheltuieli → dobânzi → capital; dacă mai multe debite egale → cel mai vechi.',
          '<b>Oferta reală + consemnațiune</b>: dacă creditorul refuză nejustificat plata, debitorul consemnează suma și e liberat (art. 1510–1515 NCC).'
        ]
      },
      { icon:'🔗', title:'Solidaritatea (art. 1434–1468 NCC)',
        items:[
          '<b>Solidaritate activă</b> (mai mulți creditori): oricare creditor poate pretinde integral întreaga creanță; debitorul se liberează plătind oricăruia.',
          '<b>Solidaritate pasivă</b> (mai mulți debitori): creditorul poate urmări integral pe oricare debitor solidar; cel care plătește are regres față de codebitori pentru parte lor.',
          'Solidaritate pasivă: <b>nu se prezumă</b> — trebuie să rezulte expres din lege sau din convenție.',
          'Excepțiile personale (incapacitate, compensație) pot fi invocate numai de cel care le deține; excepțiile comune pot fi invocate de oricare codebitor.',
          'Renunțarea la solidaritate față de un codebitor nu liberează pe ceilalți de solidaritate față de creditor.'
        ]
      },
      { icon:'🔍', title:'Acțiunea oblică și acțiunea pauliană',
        items:[
          '<b>Acțiunea oblică (indirectă)</b> (art. 1560–1561): creditorul exercită drepturile debitorului <b>neglijent</b> care nu-și valorifică drepturile; acționează în numele debitorului.',
          'Condiții oblică: creanță certă, lichidă, exigibilă; debitorul să fie neglijent; prejudiciu prin pasivitate.',
          'Efectele oblicei revin <b>patrimoniului debitorului</b> (nu direct creditorului); alți creditori pot concura.',
          '<b>Acțiunea pauliană (revocatorie)</b> (art. 1562–1565): revocarea actelor frauduloase prin care debitorul și-a creat/majorat insolvabilitatea în dauna creditorului.',
          'Condiții pauliană: fraudă (<i>consilium fraudis</i> = cunoașterea stării de insolvabilitate); prejudiciul creditorului; actul trebuie să fie anterior nașterii creanței sau cu intenție de fraudare.',
          'Terț cu titlu <b>gratuit</b>: revocarea actului e posibilă indiferent de buna sa credință. Terț cu titlu <b>oneros de bună-credință</b>: actul NU poate fi revocat.'
        ]
      }
    ],
    grila:'Principiul integrității plății: creditorul NU poate fi forțat la plăți parțiale. Acțiunea oblică: efectele revin <b>patrimoniului debitorului</b> (nu direct creditorului). Acțiunea pauliană: terțul de bună-credință cu titlu oneros este <b>protejat</b>; terțul gratificat nu e protejat. Solidaritatea pasivă <b>nu se prezumă</b>.'
  },

  {
    id:'w11', wk:'W11', dates:'7–13 sep', subj:'civ',
    title:'Transmiterea, stingerea obligațiilor + Simulația',
    sections:[
      { icon:'↔️', title:'Cesiunea de creanță (art. 1566–1592 NCC)',
        items:[
          'Cedentul transmite creanța sa cesionarului; <b>acordul debitorului cedat NU e necesar</b>, dar e necesară <b>notificarea</b> sau <b>acceptarea</b> sa.',
          'Opozabilitate față de <b>debitorul cedat</b>: de la notificare/acceptare → debitorul nu mai poate plăti valabil cedentului.',
          'Opozabilitate față de <b>terți</b>: de la data înscrierii în AEGRM sau notificarea debitorului.',
          'Cedentul garantează <b>existența creanței</b> la momentul cesiunii; <b>nu</b> garantează solvabilitatea debitorului (excepție: stipulație expresă).',
          'Debitorul cedat poate opune cesionarului toate excepțiile pe care le putea opune cedentului.'
        ]
      },
      { icon:'🔄', title:'Stingerea obligațiilor',
        items:[
          '<b>Compensația</b> (art. 1616–1623): stingerea reciprocă a două datorii <b>certe, lichide și exigibile</b> între aceleași persoane. Operează de drept (legal), la cerere sau prin convenție.',
          '<b>Confuziunea</b> (art. 1624): creditorul devine debitorul aceleiași obligații (prin moștenire sau cesiune); obligația se stinge.',
          '<b>Remiterea de datorie</b> (art. 1629–1633): renunțarea voluntară a creditorului la creanță; poate fi expresă sau tacită (restituirea titlului de creanță).',
          '<b>Imposibilitate fortuită</b> (art. 1634): datoria se stinge dacă obiectul cert a pierit fortuit (înainte de transfer) și fără culpa debitorului.',
          '<b>Darea în plată</b> (art. 1492): creditorul acceptă o altă prestație decât cea datorată; echivalentul novației obiective.'
        ]
      },
      { icon:'🎭', title:'Simulația (art. 1289–1294 NCC)',
        items:[
          'Act public (aparent, ostensibil) + act secret (<i>contraînscris</i>) care modifică/desființează total sau parțial actul public.',
          'Forme: <b>fictivă</b> (actul public e complet inexistent), <b>deghizată</b> (se ascunde natura reală: donație sub forma vânzării), <b>prin interpunere de persoane</b> (adevăratul beneficiar e ascuns).',
          '<b>Efecte între părți</b>: actul secret prevalează (dacă e valid; dacă e nul, actul public produce efecte).',
          '<b>Efecte față de terți de bună-credință</b>: terții pot invoca <b>actul public</b> (care le este opozabil); ei nu sunt prejudiciați de actul secret pe care nu l-au cunoscut.',
          'Terții de rea-credință sau care au cunoscut actul secret nu pot invoca actul public în detrimentul celorlalți terți.',
          '<b>Acțiunea în simulație</b>: oricând (imprescriptibilă față de terți), 3 ani între părți (pentru efectele actului secret).'
        ]
      }
    ],
    grila:'Cesiunea de creanță: <b>nu necesită acordul debitorului</b>, CI notificarea. Compensația: ambele datorii <b>certe + lichide + exigibile</b>. Simulație: între părți prevalează <b>actul secret</b>; față de terți de bună-credință prevalează <b>actul public</b>. Acțiunea în simulație față de terți este <b>imprescriptibilă</b>.'
  },

  {
    id:'w12', wk:'W12', dates:'14–20 sep', subj:'civ',
    title:'Vânzarea și Donația',
    sections:[
      { icon:'🛒', title:'Contractul de vânzare-cumpărare (art. 1650–1762 NCC)',
        items:[
          '<b>Caractere</b>: sinalagmatic, cu titlu oneros, comutativ (de regulă), consensual (de regulă), <b>translativ de proprietate</b>.',
          '<b>Transferul proprietății</b>: la momentul perfectării contractului pentru bunuri <b>individual determinate</b>. Excepții: bunuri de gen (la individualizare); bunuri viitoare (la existență + individualizare); vânzare cu rezerva proprietății (la plata integrală a prețului).',
          '<b>Riscul pieirii fortuite</b>: urmărește proprietatea — dacă bunul piere după transfer, riscul e al cumpărătorului; dacă înainte de predare (iar proprietatea nu s-a transferat), riscul e al vânzătorului.',
          '<b>Cheltuielile vânzării</b> (taxă notarială etc.): în lipsa convenției, sunt <b>în sarcina cumpărătorului</b>.'
        ]
      },
      { icon:'⚠️', title:'Garanțiile vânzătorului',
        items:[
          '<b>Garanția pentru evicțiune</b>: tulburarea cumpărătorului în exercitarea dreptului de proprietate. Evicțiune totală → rezoluțiunea + restituirea prețului + daune; parțială → reducerea prețului + daune.',
          'Vânzătorul răspunde și pentru evicțiunea prin fapta proprie (clauza de exonerare e nulă) și pentru evicțiunea prin fapta terților (clauza de exonerare e valabilă dacă e expresă).',
          '<b>Garanția pentru vicii ascunse</b>: defecte care existau la vânzare, ascunse, care fac bunul impropriu folosirii sau îi reduc valoarea semnificativ.',
          'Vânzător <b>de bună-credință</b> (nu a cunoscut viciile): restituirea prețului sau înlocuirea bunului; <b>nu datorează daune</b> (numai dacă s-a angajat).',
          'Vânzător <b>de rea-credință</b> (a cunoscut viciile): restituire + <b>daune-interese</b>.',
          '<b>Prescripție</b> pentru vicii ascunse: 3 ani (dacă nu există garanție) sau termenul din garanție; cel puțin <b>6 luni de la descoperire</b> pentru vicii aparente.'
        ]
      },
      { icon:'🎁', title:'Contractul de donație (art. 1011–1056 NCC)',
        items:[
          '<b>Caractere</b>: unilateral, cu titlu gratuit (liberalitate), solemn (de regulă), irevocabil.',
          '<b>Formă</b>: <b>act autentic</b> <i>ad validitatem</i> (excepție: <b>darul manual</b> — remiterea efectivă a unui bun mobil; promisiunea de dar manual nu obligă; excepție: donația indirectă și deghizată).',
          '<b>Principiul irevocabilității</b>: donația nu poate fi revocată prin voința donatorului; sunt nule clauzele care conferă donatorului posibilitatea de a revoca unilateral sau condiția pur potestativă din partea donatorului.',
          '<b>Donații indirecte</b>: renunțarea la un drept, remiterea de datorie în favoarea debitorului.',
          '<b>Donații deghizate</b>: sub aparența unui act cu titlu oneros (vânzare la preț fictiv); valabile dacă nu sunt simulate cu scop fraudulos.',
          '<b>Cauze de revocare</b>: neîndeplinirea sarcinii; ingratitudinea donatarului (injurie gravă, atentat la viața donatorului, refuz nejustificat de alimente când donatorul e în nevoie); survenire de copil (dacă s-a stipulat expres).'
        ]
      }
    ],
    grila:'Transfer proprietate la vânzare: <b>imediat</b> pentru bunuri certe (la perfectarea contractului); riscul urmărește proprietatea. Vicii ascunse: vânzătorul de bună-credință <b>nu datorează daune</b>. Donația: formă autentică <i>ad validitatem</i>, cu excepția darului manual (remitere efectivă). Principiul irevocabilității donației: condiția pur potestativă din partea donatorului = nulitate.'
  },

  {
    id:'w13', wk:'W13', dates:'21–27 sep', subj:'civ',
    title:'Locațiunea, Mandatul, Antrepriza',
    sections:[
      { icon:'🏠', title:'Locațiunea (art. 1777–1850 NCC)',
        items:[
          '<b>Definiție</b>: locatorul transmite locatarului dreptul de <b>folosință temporară</b> a unui bun, în schimbul chiriei.',
          '<b>Caractere</b>: sinalagmatic, cu titlu oneros, comutativ, cu executare succesivă, translativ de folosință (nu de proprietate).',
          '<b>Obligațiile locatorului</b>: predarea bunului în stare corespunzătoare; menținerea stării; garanția pentru vicii și tulburări; efectuarea <b>reparațiilor capitale</b>.',
          '<b>Obligațiile locatarului</b>: plata chiriei; folosința conform destinației; efectuarea <b>reparațiilor de întreținere (locative)</b>; anunțarea locatorului despre necesitatea reparațiilor capitale; restituirea la expirare.',
          '<b>Sublocațiunea</b>: permisă dacă nu e interzisă expres; cesiunea contractului necesită acordul expres al locatorului.',
          'Efectele înstrăinării bunului dat în locațiune: noul proprietar este ținut de locațiune dacă aceasta era înregistrată sau dacă a cunoscut-o (<i>emptio non tollit locatum</i>).'
        ]
      },
      { icon:'🤝', title:'Mandatul (art. 2009–2071 NCC)',
        items:[
          '<b>Definiție</b>: mandatarul se obligă să încheie <b>acte juridice</b> pe seama și în numele mandantului.',
          '<b>Caractere</b>: consensual; <b>gratuit</b> (prezumție între persoane fizice); poate fi cu titlu oneros.',
          '<b>Mandatul aparent</b>: mandatarul depășește puterile, dar terțul de bună-credință care s-a bazat pe aparența de putere este protejat.',
          '<b>Obligațiile mandatarului</b>: executarea mandatului cu diligența unui bun proprietar; să nu depășească puterile; să dea socoteală; să remită ceea ce a primit.',
          '<b>Obligațiile mandantului</b>: avansarea cheltuielilor; restituirea cheltuielilor + dobânzi; despăgubirea pentru prejudicii suferite; plata remunerației.',
          '<b>Stingerea mandatului</b>: moartea/incapacitatea oricăreia din părți; revocarea de către mandant (oricând); renunțarea mandatarului; termenul. <b>Mandatul irevocabil</b>: valabil numai dacă e în interesul mandatarului sau terțului (nu al mandantului).'
        ]
      },
      { icon:'🔨', title:'Antrepriza (art. 1851–1880 NCC)',
        items:[
          '<b>Definiție</b>: antreprenorul se obligă să execute o <b>lucrare materială</b> sau un serviciu pentru client, contra unui preț.',
          '<b>Deosebire esențială față de mandat</b>: mandatul = acte juridice; antrepriza = acte materiale (lucrări, servicii).',
          'Antreprenorul lucrează <b>independent</b>, nu e prepusul clientului; clientul nu răspunde ca și comitent pentru faptele antreprenorului.',
          'Prețul: forfetar (fix, negociat global) sau determinabil (deviz estimativ).',
          '<b>Riscurile</b>: dacă lucrul piere înainte de recepție din cauze fortuite și antreprenorul a furnizat materialele → riscul e al <b>antreprenorului</b>; dacă materialele sunt ale clientului și pierea se datorează viciului materialului → riscul e al <b>clientului</b>.',
          '<b>Recepția lucrării</b>: moment-cheie după care riscul trece la client și curg garanțiile (vicii, ruina edificiului).'
        ]
      }
    ],
    grila:'Locatarul: <b>reparații locative (de întreținere)</b>; locatorul: <b>reparații capitale</b>. Mandat = acte juridice; antrepriză = acte materiale. Mandatul între persoane fizice = prezumție de <b>gratuitate</b>. Mandantul poate revoca oricând, chiar dacă l-a declarat irevocabil (excepție: mandat în interesul mandatarului/terțului). Antreprenorul ≠ prepus al clientului.'
  },

  {
    id:'w14', wk:'W14', dates:'28 sep–4 oct', subj:'civ',
    title:'Împrumut, fidejusiune, tranzacție',
    sections:[
      { icon:'💰', title:'Împrumutul de consumație — mutuum (art. 2158–2170 NCC)',
        items:[
          '<b>Definiție</b>: împrumutătorul transferă <b>proprietatea</b> unor bunuri consumptibile; împrumutatul restituie bunuri de același gen, calitate și cantitate (<i>tantundem eiusdem generis</i>).',
          '<b>Caractere</b>: <b>real</b> (se perfectează prin remiterea bunului); <b>unilateral</b> (numai împrumutatul are obligații după remitere); gratuit (prezumție între persoane fizice); poate fi cu dobândă.',
          'De la predare, proprietatea și <b>riscul</b> trec la împrumutat.',
          'Dobânda: trebuie stipulată expres; în lipsa stipulației, prezumție de gratuitate la persoane fizice. Dobânda nu poate depăși dublul dobânzii legale (în contracte civile).',
          '<b>Scadența</b>: termenul stipulat; dacă nu e termen → instanța îl poate stabili, ținând cont de nevoile împrumutatului.'
        ]
      },
      { icon:'🏡', title:'Împrumutul de folosință — comodat (art. 2146–2157 NCC)',
        items:[
          '<b>Definiție</b>: comodantul remite gratuit un bun <b>neconsumptibil</b> spre folosință; comodatarul restituie același bun.',
          '<b>Caractere</b>: <b>real</b> (perfectat prin remitere); unilateral; <b>esențialmente gratuit</b> (dacă e cu plată → devine locațiune).',
          'Proprietatea rămâne la comodant; riscul rămâne la comodant (excepție: dacă comodatarul a întrebuințat bunul altfel decât destinației sau l-a împrumutat altei persoane).',
          '<b>Obligațiile comodatarului</b>: folosință conform destinației; reparații locative; suportarea cheltuielilor de conservare; restituirea la termen.',
          'Comodantul poate cere restituirea anticipată pentru <b>nevoie urgentă și neprevăzută</b>; dacă termenul e stipulat, nu poate cere înainte de termen decât pentru nevoie urgentă.'
        ]
      },
      { icon:'🛡️', title:'Fidejusiunea — cauțiunea (art. 2280–2320 NCC)',
        items:[
          '<b>Definiție</b>: fidejusorul se obligă față de creditor să execute obligația debitorului dacă acesta nu o face.',
          '<b>Caractere</b>: accesorie (urmează soarta obligației principale — dacă aceasta e nulă, fidejusiunea cade); consensuală; poate fi gratuită sau oneroasă.',
          '<b>Beneficiul de discuțiune</b> (art. 2294): fidejusorul poate cere creditorului să urmărească mai întâi <b>bunurile debitorului principal</b>; trebuie invocat la momentul urmăririi, cu indicarea bunurilor.',
          '<b>Beneficiul de diviziune</b> (art. 2296): dacă sunt mai mulți fidejusori, fiecare poate cere să fie urmărit <b>numai pentru partea sa</b>.',
          'Fidejusorul care plătește se <b>subrogă</b> în drepturile creditorului față de debitorul principal.',
          '<b>Fidejusiunea solidară</b>: fidejusorul renunță la beneficiile de discuțiune și diviziune; urmărit ca un codebitor solidar.'
        ]
      },
      { icon:'🤝', title:'Tranzacția (art. 2267–2278 NCC)',
        items:[
          '<b>Definiție</b>: contract prin care părțile sting un litigiu existent sau previn un litigiu viitor, prin concesii reciproce.',
          '<b>Caractere</b>: sinalagmatic; cu titlu oneros; efecte <b>declarative</b> (nu constitutive/translative) — similar partajului.',
          'Tranzacția are putere de lucru judecat relativ (inter partes); nu poate fi atacată prin intermediul altei tranzacții.',
          'Dacă obiectul tranzacției era un drept inexistent sau dacă actul a cărui existență se disputase e ulterior declarat fals → tranzacția e nulă.',
          'Tranzacția poate fi executată silit ca un titlu executoriu dacă e autentificată sau învestită cu formulă executorie.'
        ]
      }
    ],
    grila:'Mutuum = contract <b>real</b> + transferă <b>proprietatea</b>; riscul trece la împrumutat. Comodat = real + <b>esențialmente gratuit</b> (dacă e cu plată = locațiune) + proprietatea rămâne la comodant. Fidejusiune: beneficiul de discuțiune ≠ beneficiul de diviziune. Fidejusorul care plătește se <b>subrogă</b> creditorului. Tranzacție = efecte <b>declarative</b> (≠ constitutive).'
  },

  {
    id:'w15', wk:'W15', dates:'5–11 oct', subj:'civ',
    title:'Moștenirea legală',
    sections:[
      { icon:'📌', title:'Principii generale (art. 953–965 NCC)',
        items:[
          '<b>Deschiderea succesiunii</b>: la data <b>morții</b> defunctului (inclusiv moartea declarată judecătorește — la data stabilită prin hotărâre).',
          '<b>Condiții pentru a moșteni</b>: să existe la data deschiderii (capacitate succesorală); să nu fie nedemn; să aibă vocație succesorală (legală sau testamentară).',
          '<b>Acceptarea</b>: expresă sau tacită; termenul de opțiune succesorală = <b>1 an</b> de la data cunoașterii deschiderii succesiunii.',
          'Acceptarea forțată: moștenitorul care a sustras sau a ascuns bunuri succesorale nu mai poate renunța și e considerat acceptant pur și simplu.'
        ]
      },
      { icon:'⚖️', title:'Nedemnitatea succesorală (art. 958–961 NCC)',
        items:[
          '<b>De drept</b> (operează automat, fără judecată): condamnat definitiv penal pentru omor sau tentativă de omor asupra defunctului; condamnat pentru fals/distrugere/alterare de testament.',
          '<b>Judiciară</b> (trebuie pronunțată de instanță, la cererea celor interesați): acțiuni grave față de defunct (injurii grave, calomnie în justiție, tortură etc.).',
          'Nedemnul e exclus de la moștenire; copiii nedemnului <b>vin prin reprezentare</b> (iau partea nedemnului).',
          'Nedemnitatea poate fi <b>înlăturată</b> de defunct prin testament sau declarație autentică (iertare expresă).'
        ]
      },
      { icon:'🏛️', title:'Clasele de moștenitori legali (art. 964–983 NCC)',
        items:[
          '<b>Clasa I — Descendenți</b>: copii, nepoți, strănepoți (la infinit, în linie dreaptă); exclud complet celelalte clase.',
          '<b>Clasa II — Ascendenți privilegiați + colaterali privilegiați</b>: părinții (ambii/unul) + frați/surori/nepoți din frați. Dacă vin împreună: părinții = 1/4 fiecare; restul la colaterali privilegiați.',
          '<b>Clasa III — Ascendenți ordinari</b>: bunici, străbunici (în linie ascendentă).',
          '<b>Clasa IV — Colaterali ordinari</b>: unchi, mătuși, veri primari, frați ai bunicilor (max gradul IV).',
          'Regula dublă: clasa superioară <b>exclude</b> clasele inferioare; în aceeași clasă, gradul mai <b>aproape exclude</b> gradul mai îndepărtat.'
        ]
      },
      { icon:'🔁', title:'Reprezentarea succesorală și soțul supraviețuitor',
        items:[
          '<b>Reprezentarea succesorală</b>: moștenitorul predecedat sau nedemn e înlocuit de descendenții săi (reprezentanți); aceștia culeg prin împărțire <b>pe tulpini</b> (nu pe capete).',
          'Reprezentarea: numai la descendenți (cls I) și la colateralii privilegiați (frații cls II); nu funcționează pentru ascendenți.',
          '<b>Soțul supraviețuitor</b>: nu face parte din nicio clasă; vine în concurs cu oricare clasă. Cote: cu cls I = <b>1/4</b>; cu cls II complet = <b>1/3</b>; cu cls II numai ascendenți = <b>3/8</b>; cu cls III = <b>1/2</b>; cu cls IV = <b>3/4</b>; singur = tot.',
          '<b>Drept de abitație</b> al soțului supraviețuitor: <b>1 an</b> de la data decesului, în locuința familiei (dacă nu e coproprietar al locuinței sau moștenitor unic).'
        ]
      }
    ],
    grila:'Termenul de opțiune succesorală: <b>1 an</b> de la cunoașterea deschiderii. Nedemnitate de drept ≠ judiciară: cea de drept operează automat; cea judiciară necesită hotărâre. Cotele soțului supraviețuitor — de memorat exact: cls I=1/4; cls II complet=1/3; cls II ascendenți=3/8; cls III=1/2; cls IV=3/4. Reprezentarea: numai pe <b>tulpini</b>, nu pe capete. Clasa I exclude complet clasele inferioare.'
  },

  {
    id:'w16', wk:'W16', dates:'12–18 oct', subj:'civ',
    title:'Testamentul, rezerva succesorală, raportul donațiilor',
    sections:[
      { icon:'📜', title:'Testamentul (art. 1034–1085 NCC)',
        items:[
          '<b>Caractere</b>: act juridic unilateral, <b>personal</b> (nu poate fi făcut prin reprezentant), <b>revocabil</b> (oricând, până la moarte), solemn.',
          '<b>Testament olograf</b>: scris <b>în întregime</b> de mână + <b>datat</b> (zi, lună, an) + <b>semnat</b> de testator. Lipsa oricăreia → nulitate absolută.',
          '<b>Testament autentic</b>: în fața notarului și a doi martori; testatorul dictează sau prezintă conținutul.',
          '<b>Testament mistic (secret)</b>: scris și semnat de testator, sigilat și depus la notar în fața a doi martori.',
          '<b>Revocarea</b>: expresă (act autentic sau testament posterior); tacită (testament ulterior incompatibil; distrugerea voluntară a testamentului olograf; înstrăinarea bunului legat).',
          'Incapacitați de a <b>dispune</b>: minorul sub 16 ani (excepție: legate pentru cheltuieli de înmormântare sau pentru bunuri proprii); pusul sub interdicție.',
          'Incapacitați de a <b>primi</b> prin legat: medicii/farmaciștii/preoții care au îngrijit testatorul în ultima boală (prezumție de captație).'
        ]
      },
      { icon:'🎯', title:'Rezerva succesorală și cotitatea disponibilă (art. 1086–1099 NCC)',
        items:[
          '<b>Rezervatarii</b>: descendenții, ascendenții privilegiați (părinții) și soțul supraviețuitor.',
          '<b>Rezerva descendenților</b>: <b>1/2</b> din moștenire (indiferent de numărul lor).',
          '<b>Rezerva ascendenților privilegiați</b>: <b>1/2</b> din moștenire (indiferent dacă vin unul sau amândoi).',
          '<b>Rezerva soțului supraviețuitor</b>: <b>1/4</b> din moștenire.',
          '<b>Cotitatea disponibilă</b> = ce rămâne după deducerea rezervei; ceea ce poate fi dăruit sau legat liber.',
          'Calculul rezervei: activ net (bunuri − datorii) + donațiile raportabile + donațiile neraportabile (toate donațiile, indiferent de beneficiar).',
          '<b>Acțiunea în reducțiune</b>: exercitată de rezervatari pentru a anula dispozițiile excesive; termen = <b>3 ani</b> de la data deschiderii sau de la cunoașterea dispoziției; legatele se reduc în <b>ordinea inversă a datei</b> (cel mai recent, primul).'
        ]
      },
      { icon:'🔃', title:'Raportul donațiilor (art. 1146–1165 NCC)',
        items:[
          '<b>Obligația de raport</b>: descendenții și soțul supraviețuitor (când vine în concurs cu descendenți) trebuie să aducă la masa succesorală donațiile primite de la defunct.',
          'Scop: egalitate între moștenitorii din aceeași clasă (prezumție că donația a fost un avans de moștenire).',
          'Raportul se face prin <b>echivalent</b> (nu prin restituire în natură) — imputarea valorii donației asupra cotei succesorale.',
          '<b>Dispensa de raport</b>: donatorul poate scuti de raport (expres sau rezultând din natura actului — donația deghizată/indirectă se consideră dispensată).',
          'Raportul donațiilor ≠ reducțiunea: raportul = egalitate între moștenitori; reducțiunea = protecția rezervei față de terți.'
        ]
      }
    ],
    grila:'Testament olograf: <b>integral</b> olograf + datat (zi/lună/an) + semnat — lipsa oricăreia = nulitate absolută. Rezerva: descendenți = <b>1/2</b>; ascendenți privilegiați = <b>1/2</b>; soț supraviețuitor = <b>1/4</b>. Reducțiunea legatelor: în <b>ordine inversă creației</b> (cel mai recent se reduce primul). Raportul donațiilor: prin <b>echivalent</b>, nu în natură. Dispensa de raport scutește de egalitate, nu de rezervă.'
  },

  // ══ DREPT PENAL ══════════════════════════════════════════════════════════════

  {
    id:'w18', wk:'W18', dates:'26 oct–1 nov', subj:'pen',
    title:'Infracțiunea: trăsături și elemente constitutive',
    sections:[
      { icon:'📌', title:'Definiție și trăsăturile esențiale (art. 15 NCP)',
        items:[
          '<b>Infracțiunea</b> = fapta prevăzută de legea penală, săvârșită cu vinovăție, nejustificată și imputabilă persoanei care a săvârșit-o (art. 15 NCP).',
          'Cele trei trăsături esențiale sunt cumulative: <b>tipicitate</b> (prevăzută de lege) + <b>antijuridicitate</b> (nejustificată) + <b>imputabilitate</b> (culpabilitate). Lipsa oricăreia → fapta nu e infracțiune.',
          '<b>Cauzele justificative</b> (legitima apărare, starea de necesitate etc.) înlătură <b>antijuridicitatea</b>. <b>Cauzele de neimputabilitate</b> (minoritate, iresponsabilitate etc.) înlătură <b>imputabilitatea</b>. Distincție esențială pentru grile.'
        ]
      },
      { icon:'🏗️', title:'Elementele constitutive ale infracțiunii',
        items:[
          '<b>Obiectul juridic</b>: relația socială ocrotită de norma penală (generic = categoria de relații; special = relația concretă lezată).',
          '<b>Obiectul material</b>: bunul, corpul sau lucrul asupra căruia se răsfrânge activitatea infracțională. <b>Nu toate infracțiunile au obiect material</b> (ex: infracțiunile de pericol pur).',
          '<b>Subiectul activ</b>: autorul faptei. Poate fi persoană fizică (ce îndeplinește condițiile răspunderii penale) sau <b>persoană juridică</b> (din 2003 în dreptul român, cu excepțiile prevăzute de lege).',
          '<b>Subiectul pasiv</b>: persoana fizică sau juridică titulară a valorii sociale lezate sau periclitate prin infracțiune.'
        ]
      },
      { icon:'⚙️', title:'Latura obiectivă',
        items:[
          '<b>Elementul material</b> (<i>actus reus</i>): acțiunea sau inacțiunea incriminată. La inacțiune, răspunderea există numai dacă exista o <b>obligație legală de a acționa</b>.',
          '<b>Urmarea imediată</b>: vătămarea efectivă (la infracțiunile de rezultat) sau starea de pericol (la infracțiunile de pericol/de pericol abstract).',
          '<b>Legătura de cauzalitate</b>: necesară la infracțiunile de rezultat; se verifică prin teoria echivalenței condițiilor (<i>conditio sine qua non</i>).',
          '<b>Infracțiuni de rezultat</b>: necesită producerea urmării concrete (omorul, furtul). <b>Infracțiuni de pericol</b>: consumate la simpla creare a pericolului (conducerea sub influența alcoolului).'
        ]
      },
      { icon:'🧠', title:'Latura subiectivă (vinovăția)',
        items:[
          '<b>Intenția directă</b> (dolus directus): autorul prevede urmarea și o urmărește.',
          '<b>Intenția indirectă</b> (dolus eventualis): autorul prevede urmarea și, deși n-o urmărește, <b>o acceptă</b>.',
          '<b>Culpa cu prevedere</b> (ușurința): autorul prevede urmarea dar crede, fără temei, că nu se va produce.',
          '<b>Culpa simplă</b> (neglijența): autorul nu prevede urmarea, deși trebuia și putea să o prevadă.',
          '<b>Praeterintenția</b> (intenție depășită): autorul acționează cu intenție față de fapta inițială, dar urmarea mai gravă se produce din culpă. Exemplu clasic: loviri cauzatoare de moarte (art. 195 NCP).',
          '<b>Mobilul</b> (motivul psihologic) și <b>scopul</b> nu sunt, în general, condiții ale existenței infracțiunii; pot constitui însă circumstanțe agravante sau pot individualiza forma calificată a infracțiunii.'
        ]
      }
    ],
    grila:'Tipicitate + antijuridicitate + imputabilitate — toate trei necesare. Cauze justificative → înlătură <b>antijuridicitatea</b>; cauze de neimputabilitate → înlătură <b>imputabilitatea</b>. Praeterintenția: intenție față de fapta inițială + culpă față de urmarea mai gravă.'
  },

  {
    id:'w19', wk:'W19', dates:'2–8 nov', subj:'pen',
    title:'Formele infracțiunii și participația penală',
    sections:[
      { icon:'🔢', title:'Fazele activității infracționale și tentativa (art. 32–34 NCP)',
        items:[
          'Etapele: rezoluție infracțională (internă, nepedepsibilă) → acte pregătitoare → tentativă → consumare → epuizare.',
          '<b>Actele pregătitoare</b>: de regulă <b>nepedepsibile</b>; pedepsibile numai când legea prevede expres și numai dacă sunt asimilate tentativei.',
          '<b>Tentativa</b>: punerea în executare a intenției de a săvârși infracțiunea + neproducerea urmării, fie din cauze independente de voința autorului (tentativă proprie), fie prin desistare/împiedicare.',
          '<b>Tentativa imposibilă</b>: mijloace absolut improprii sau obiect absolut inexistent → <b>nepedepsibilă</b> (art. 32 alin. 2 NCP).',
          '<b>Desistarea</b> (autorul renunță de bună voie) și <b>împiedicarea rezultatului</b> (autorul împiedică producerea urmării): cauze de <b>nepedepsire</b>, nu de înlăturare a caracterului penal.',
          'Tentativa se pedepsește numai dacă legea prevede expres; pedeapsa = <b>jumătate din minimul și maximul</b> special al infracțiunii consumate.'
        ]
      },
      { icon:'👥', title:'Participația penală (art. 46–52 NCP)',
        items:[
          '<b>Autorul</b> (art. 46): cel care săvârșește nemijlocit fapta. <b>Coautoratul</b>: mai mulți autori, fiecare săvârșind acte de executare.',
          '<b>Instigatorul</b> (art. 47): cel care determină cu intenție o altă persoană să comită infracțiunea. Pedepsit <b>cu pedeapsa prevăzută de lege pentru autor</b>.',
          '<b>Complicele</b> (art. 48): cel care ajută la pregătire sau executare (material sau moral). Pedeapsa poate fi redusă față de autor.',
          '<b>Participația improprie</b> (art. 52): autorul acționează fără vinovăție (e constrâns, e în eroare, e iresponsabil) → numai instigatorul/complicele răspunde, în calitate de <b>autor mediat</b>.',
          'La infracțiunile cu subiect activ special: calitatea specială trebuie să o aibă autorul; complicele/instigatorul pot fi persoane obișnuite.'
        ]
      },
      { icon:'⚖️', title:'Circumstanțele reale și personale',
        items:[
          '<b>Circumstanțele reale</b> (referitoare la faptă: mijloace, metode, loc): se răsfrâng asupra <b>tuturor participanților</b> care le-au cunoscut la momentul comiterii.',
          '<b>Circumstanțele personale</b> (referitoare la persoana participantului: recidivă, calitate specială, stare de minoritate): se aplică <b>numai celui la care se referă</b>, nu și celorlalți participanți.',
          'Dacă complicele nu a cunoscut o circumstanță reală agravantă → nu i se aplică; dacă a cunoscut-o → i se aplică și lui.'
        ]
      }
    ],
    grila:'Tentativa imposibilă (mijloace absolut improprii / obiect absolut inexistent) → <b>nepedepsibilă</b>. Desistare = cauză de <b>nepedepsire</b>, nu de înlăturare a infracțiunii. Instigatorul: pedepsit CA autorul. Circumstanțe reale → tuturor participanților care le-au cunoscut; circumstanțe personale → numai celui vizat.'
  },

  {
    id:'w20', wk:'W20', dates:'9–15 nov', subj:'pen',
    title:'Cauze justificative, de neimputabilitate, concurs, recidivă, pedepse',
    sections:[
      { icon:'🛡️', title:'Cauze justificative (art. 18–22 NCP) — efect IN REM',
        items:[
          '<b>Legitima apărare</b> (art. 19): pericol iminent, injust, real, față de sine sau altul; apărare necesară și proporțională față de gravitatea atacului.',
          '<b>Starea de necesitate</b> (art. 20): pericol iminent față de sine/altul/un interes general; acțiunea de salvare produce un rău mai mic decât cel evitat.',
          '<b>Exercitarea unui drept sau îndeplinirea unei obligații</b> (art. 21): acțiunea e conformă cu o normă legală.',
          '<b>Consimțământul persoanei vătămate</b> (art. 22): valabil numai la infracțiunile cu bunuri juridice disponibile (nu și la viață, integritate gravă).',
          'Efect <b>IN REM</b>: fapta nu e infracțiune pentru <b>nimeni</b>, nici pentru participanți. Dacă autorul a acționat în legitimă apărare → nici instigatorul/complicele nu răspund.'
        ]
      },
      { icon:'🧩', title:'Cauze de neimputabilitate (art. 23–31 NCP) — efect IN PERSONAM',
        items:[
          '<b>Constrângerea fizică sau morală</b>: fapta nu e imputabilă dacă persoana n-a putut rezista constrângerii.',
          '<b>Minoritatea</b>: sub 14 ani → nicio răspundere penală; 14–16 ani → răspundere dacă s-a acționat cu <b>discernământ</b>; 16–18 ani → răspundere penală cu pedepse reduse.',
          '<b>Iresponsabilitatea</b>: alienație mintală sau stare de inconștiență ce nu permite înțelegerea/controlul faptelor.',
          '<b>Intoxicația involuntară completă</b>: produsă de alcool sau alte substanțe fără voia autorului.',
          '<b>Eroarea</b>: asupra existenței elementului constitutiv al infracțiunii (fapt) sau asupra normei legale (drept). Înlătură intenția, rămâne culpa dacă eroarea e culpabilă.',
          '<b>Cazul fortuit</b>: urmarea nu putea fi prevăzută în nicio circumstanță.',
          'Efect <b>IN PERSONAM</b>: se aplică <b>numai</b> persoanei respective; participanții pot răspunde penal.'
        ]
      },
      { icon:'🔁', title:'Concursul de infracțiuni și recidiva (art. 38–45 NCP)',
        items:[
          '<b>Concursul real</b>: mai multe fapte distincte înainte de o condamnare definitivă. <b>Concursul ideal (formal)</b>: o singură acțiune realizează mai multe infracțiuni.',
          'Pedeapsa la concurs: <b>cumulul juridic cu spor obligatoriu</b> — pedeapsa cea mai grea + spor de până la 1/3 din totalul celorlalte pedepse (art. 39 NCP).',
          '<b>Recidiva postcondamnatorie</b>: nouă infracțiune intenționată DUPĂ condamnare definitivă la ≥1 an, înainte de executare sau în primii 3 ani după.',
          '<b>Recidiva postexecutorie</b>: nouă infracțiune în primii 3 ani după executarea/considerarea ca executată a pedepsei.',
          '<b>Pluralitatea intermediară</b>: situație intermediară — nu e nici concurs (există condamnare definitivă anterioară), nici recidivă (condamnarea anterioară nu îndeplinește condițiile recidivei). Pedeapsa se poate majora.'
        ]
      },
      { icon:'⚖️', title:'Pedepsele și individualizarea (art. 53–106 NCP)',
        items:[
          '<b>Pedepse principale</b>: detențiunea pe viață; închisoarea (15 zile – 30 ani); amenda.',
          '<b>Pedepse complementare</b>: interzicerea exercitării unor drepturi; degradarea militară; publicarea hotărârii de condamnare.',
          '<b>Pedepse accesorii</b>: decurg de drept din pedeapsa principală, pe durata executării.',
          'Individualizarea judiciară: instanța ține cont de gravitatea faptei, periculozitatea infractorului, circumstanțele atenuante și agravante, conduita ulterioară.',
          '<b>Circumstanțele atenuante</b> (art. 75): reduc pedeapsa sub minimul special. <b>Circumstanțele agravante</b> (art. 77): majorează pedeapsa spre maximul special.'
        ]
      }
    ],
    grila:'Cauze justificative → efect <b>IN REM</b> (fapta nu e infracțiune pentru nimeni). Cauze de neimputabilitate → efect <b>IN PERSONAM</b> (numai cel vizat nu răspunde; participanții pot răspunde). Minoritate: sub 14 ani = nicio răspundere; 14-16 ani = răspundere cu <b>discernământ</b>. Pedeapsa la concurs: <b>cumulul juridic cu spor</b>.'
  },

  {
    id:'w21', wk:'W21', dates:'16–22 nov', subj:'pen',
    title:'Infracțiuni contra persoanei',
    sections:[
      { icon:'⚰️', title:'Infracțiuni contra vieții (art. 188–195 NCP)',
        items:[
          '<b>Omorul simplu</b> (art. 188): uciderea cu intenție; pedeapsă <b>10–20 ani</b> + interzicerea unor drepturi.',
          '<b>Omorul calificat</b> (art. 189): forme agravate — cu premeditare, din interes material, prin cruzime, prin mijloace periculoase pentru mai multe persoane, victimă vulnerabilă/funcționar/judecător/polițist, rudă în linie directă sau soț; pedeapsă <b>15–25 ani sau detențiune pe viață</b>.',
          '<b>Uciderea la cererea victimei</b> (art. 190): cauze speciale (boală gravă incurabilă); pedeapsă redusă.',
          '<b>Uciderea din culpă</b> (art. 192): moartea cauzată fără intenție; pedeapsă <b>1–5 ani</b>; formă agravată dacă e condus sub alcool/droguri sau abandonate victima.',
          '<b>Loviri cauzatoare de moarte</b> (art. 195): <b>praeterintenție</b> — intenție de a lovi + culpă față de moarte; pedeapsă <b>6–12 ani</b>.'
        ]
      },
      { icon:'🩹', title:'Infracțiuni contra integrității corporale (art. 193–198 NCP)',
        items:[
          '<b>Lovirea sau alte violențe</b> (art. 193): loviri ce produc suferințe fizice; pedeapsă amendă sau <b>max 2 ani</b>; se urmărește la <b>plângerea prealabilă</b> a victimei.',
          '<b>Vătămarea corporală</b> (art. 194): leziuni ce necesită <b>mai mult de 90 zile de îngrijiri</b> medicale; pedeapsă <b>2–7 ani</b>. Sub 90 zile → lovire sau alte violențe.',
          'Formele agravate ale vătămării: pierderea unui organ/simț, sluțire gravă, avort, punere în pericol a vieții.',
          '<b>Vătămarea corporală din culpă</b> (art. 196): necesită vătămare ≥90 zile sau consecință gravă; urmărire la plângere prealabilă dacă e minoră.'
        ]
      },
      { icon:'🔓', title:'Infracțiuni contra libertății (art. 205–220 NCP)',
        items:[
          '<b>Lipsirea de libertate</b> (art. 205): reținerea sau deținerea persoanei fără drept; pedeapsă <b>1–7 ani</b>; formă agravată dacă durează >24h, victimă e minor, sau produce suferințe.',
          '<b>Violul</b> (art. 218): raport sexual sau act sexual oral/anal prin constrângere (violență/amenințare) sau profitând de imposibilitatea victimei de a se apăra/exprima; pedeapsă <b>3–10 ani</b>; formă agravată: victimă minoră sub 16 ani.',
          '<b>Agresiunea sexuală</b> (art. 219): acte sexuale altele decât penetrare, prin constrângere; pedeapsă <b>2–7 ani</b>.',
          '<b>Actul sexual cu un minor</b> (art. 220): raport sexual cu persoana sub 15 ani, indiferent de consimțământ.'
        ]
      }
    ],
    grila:'Omor vs. loviri cauzatoare de moarte: criteriul = <b>intenția față de deces</b>. Cu intenție = omor; praeterintenție = loviri cauzatoare de moarte. Vătămare corporală: prag <b>90 zile îngrijiri</b>. Lovire simplă: urmărire la <b>plângere prealabilă</b>; împăcarea stinge acțiunea. Viol: inclusiv prin profitarea de imposibilitate de exprimare, nu numai prin violență.'
  },

  {
    id:'w22', wk:'W22', dates:'23–29 nov', subj:'pen',
    title:'Infracțiuni contra patrimoniului + infracțiuni de fals',
    sections:[
      { icon:'💰', title:'Infracțiuni contra patrimoniului — forme principale (art. 228–256 NCP)',
        items:[
          '<b>Furtul simplu</b> (art. 228): luarea bunului mobil din posesia/detenția altuia, <b>fără consimțământ</b>, cu intenția de a-l însuși pe nedrept.',
          '<b>Furtul calificat</b> (art. 229): forme agravate — noaptea, de două+ persoane, prin efracție/escaladare, din locuință/dependințe, privind vehicule/produse petroliere; pedeapsă sporită.',
          '<b>Tâlhăria</b> (art. 233): furt + violență sau amenințare; violența poate fi și <b>ulterioară luării</b> bunului (pentru a păstra bunul sau a asigura scăparea).',
          '<b>Înșelăciunea</b> (art. 244): inducerea în eroare + prejudiciu patrimonial. Necesită un prejudiciu cert; fără prejudiciu → tentativă.',
          '<b>Abuzul de încredere</b> (art. 238): bunul a fost primit cu consimțământ, dar nu e restituit sau e folosit altfel decât s-a convenit.',
          '<b>Gestiunea frauduloasă</b> (art. 242): subiect activ special — cel căruia i s-au încredințat bunuri de administrat; prejudicierea prin acte de gestionare.',
          '<b>Delapidarea</b> (art. 295): subiect activ special — funcționar gestionar; însușirea/folosirea/traficarea bunurilor entității.'
        ]
      },
      { icon:'📄', title:'Infracțiunile de fals (art. 310–328 NCP)',
        items:[
          '<b>Falsul material în înscrisuri oficiale</b> (art. 320): contrafacerea sau alterarea <b>fizică</b> a înscrisului oficial. Săvârșit de un funcționar public → formă agravată.',
          '<b>Falsul intelectual</b> (art. 321): funcționarul competent inserează <b>date false</b> în înscris la momentul întocmirii. Subiect activ special: funcționar cu atribuții de autentificare/certificare.',
          '<b>Falsul în înscrisuri sub semnătură privată</b> (art. 322): falsificarea unui înscris privat, urmată de folosire; infracțiunea e complexă (fals + uz).',
          '<b>Uzul de fals</b> (art. 323): folosirea unui înscris oficial fals de <b>o altă persoană</b> decât autorul falsului. Autorul falsului care folosește el însuși înscrisul nu comite uz de fals separat (absorbit).',
          '<b>Falsul în declarații</b> (art. 326): declararea mincinoasă în fața unui organ sau instituție de stat, în scopul producerii de consecințe juridice.'
        ]
      }
    ],
    grila:'Furt (fără consimțământ) ≠ abuz de încredere (cu consimțământ inițial). Tâlhăria: violența poate fi și <b>ulterioară</b> luării bunului. Uzul de fals: comis de <b>altcineva</b> decât autorul falsului (autorul care folosește el însuși = uzul e absorbit în fals). Falsul material = alterare fizică; falsul intelectual = inserarea de date false la întocmire (subiect special: funcționar).'
  },

  {
    id:'w23', wk:'W23', dates:'30 nov–6 dec', subj:'pen',
    title:'Corupție, infracțiuni de serviciu și contra justiției',
    sections:[
      { icon:'💼', title:'Infracțiuni de corupție (art. 289–294 NCP)',
        items:[
          '<b>Luarea de mită</b> (art. 289): funcționarul public pretinde ori primește foloase necuvenite, sau acceptă promisiunea lor, pentru a îndeplini/nu îndeplini/întârzia un act în exercitarea funcției. Nu contează dacă actul a fost sau nu îndeplinit.',
          '<b>Darea de mită</b> (art. 290): promiterea/oferirea/darea de foloase funcționarului. Dacă mituitorul a fost <b>constrâns</b> → cauză de nepedepsire. Dacă a dat de bună voie → pedepsit.',
          '<b>Traficul de influență</b> (art. 291): pretinderea/primirea de foloase necuvenite de o persoană care <b>are sau lasă să se creadă că are influență</b> asupra unui funcționar, pentru a-l determina să facă/nu facă ceva.',
          '<b>Cumpărarea de influență</b> (art. 292): corelativă traficului; cel care promite/dă foloase pentru a cumpăra influența. Dacă a fost constrâns → cauză de nepedepsire.',
          'Distincție esențială: traficantul de influență <b>nu trebuie să fie funcționar</b>; el promite că va influența funcționarul (real sau presupus).'
        ]
      },
      { icon:'🏛️', title:'Infracțiuni de serviciu (art. 295–309 NCP)',
        items:[
          '<b>Delapidarea</b> (art. 295): funcționarul/angajatul care gestionează bunuri și le însușește/folosește/trafichează. Subiect activ: gestionar sau funcționar.',
          '<b>Abuzul în serviciu</b> (art. 297): funcționarul nu îndeplinește sau îndeplinește necorespunzător atribuțiile de serviciu → prejudiciu material sau vătămare a drepturilor/intereselor legitime. Săvârșit cu intenție.',
          '<b>Neglijența în serviciu</b> (art. 298): similar cu abuzul, dar săvârșit din <b>culpă</b>.',
          '<b>Folosirea abuzivă a funcției</b> (art. 299): funcționarul folosește funcția pentru avantaje proprii sau ale altuia.'
        ]
      },
      { icon:'⚖️', title:'Infracțiuni contra înfăptuirii justiției (art. 266–288 NCP)',
        items:[
          '<b>Denunțul calomnios</b> (art. 268): sesizarea mincinoasă a unui organ de urmărire/judecată cu o faptă penală inexistentă sau necomisă de cel denunțat.',
          '<b>Mărturia mincinoasă</b> (art. 273): declarații false ca martor/expert/interpret în fața unui organ judiciar. Cauza de nepedepsire: <b>retractarea</b> declarației înainte de condamnare.',
          '<b>Favorizarea făptuitorului</b> (art. 269): ajutorarea unui infractor să se sustragă urmăririi. Cauza de nepedepsire: <b>soțul și rudele apropiate</b> ale favorizatorului nu se pedepsesc.',
          '<b>Tăinuirea</b> (art. 270): primirea, dobândirea sau transformarea de bunuri provenite din infracțiune, cunoscând proveniența. Diferit de favorizare: tăinuirea privește bunurile, favorizarea privește persoana infractorului.',
          '<b>Obstrucționarea justiției</b> (art. 271): împiedicarea actelor de urmărire sau judecată prin violență/amenințare/corupere/alte mijloace.'
        ]
      }
    ],
    grila:'Luare de mită ≠ trafic de influență: luarea = <b>funcționarul însuși</b>; traficul = persoana care pretinde că are <b>influență</b> asupra funcționarului (nu trebuie să fie funcționar). Dare de mită sub constrângere → <b>cauza de nepedepsire</b>. Mărturie mincinoasă: retractarea înainte de condamnare → cauza de nepedepsire. Favorizare: soțul și rudele apropiate <b>nu se pedepsesc</b>. Tăinuire = bunuri; favorizare = persoana.'
  },

  {
    id:'w24', wk:'W24', dates:'7–13 dec', subj:'pen',
    title:'Infracțiuni la regimul circulației + recap infracțiuni speciale',
    sections:[
      { icon:'🚗', title:'Infracțiuni la regimul circulației pe drumuri publice (art. 334–341 NCP)',
        items:[
          '<b>Conducerea fără permis</b> (art. 335): conducerea pe drumuri publice a unui vehicul de către o persoană fără permis de conducere corespunzător categoriei sau cu permis suspendat/anulat/expirat.',
          '<b>Conducerea sub influența alcoolului</b> (art. 336): conducerea cu o alcoolemie de <b>≥ 0,80 g/l sânge</b> sau sub influența substanțelor psihoactive. Infracțiunea e consumată indiferent dacă s-a produs un accident.',
          '<b>Refuzul recoltării de probe biologice</b> (art. 337): refuzul de a se supune testării sau recoltării; infracțiune distinctă de conducerea sub influența alcoolului.',
          'Dacă se produce un accident cu victime → <b>concurs de infracțiuni</b> (ex: conducere sub alcool + ucidere din culpă sau vătămare corporală din culpă).',
          '<b>Părăsirea locului accidentului</b> (art. 338): infracțiune distinctă dacă are loc fără acordul polițistului; poate absorbi sau concura cu alte infracțiuni.'
        ]
      },
      { icon:'🔍', title:'Recapitulare — delimitări esențiale infracțiuni speciale',
        items:[
          '<b>Omor vs. loviri cauzatoare de moarte vs. ucidere din culpă</b>: omor = intenție față de moarte; loviri cauzatoare de moarte = praeterintenție; ucidere din culpă = culpă.',
          '<b>Furt vs. abuz de încredere vs. înșelăciune vs. tâlhărie</b>: furt = luare fără consimțământ; abuz de încredere = primire cu consimțământ, nerestituire; înșelăciune = inducere în eroare + prejudiciu; tâlhărie = furt + violență.',
          '<b>Luare de mită vs. trafic de influență vs. abuz în serviciu</b>: luarea = foloase pentru actul propriu; traficul = foloase pentru influența asupra altui funcționar; abuzul = neîndeplinire/îndeplinire necorespunzătoare fără foloase.',
          '<b>Tăinuire vs. favorizare</b>: tăinuirea = bunuri provenite din infracțiune; favorizarea = ajutorarea persoanei infractorului să se sustragă.',
          '<b>Fals material vs. fals intelectual vs. uz de fals</b>: falsul material = alterare fizică; falsul intelectual = date false la întocmire (subiect special); uzul = folosirea înscrisului fals de altcineva.'
        ]
      }
    ],
    grila:'Conducere sub alcool: ≥ <b>0,80 g/l sânge</b>; infracțiunea există chiar fără accident. Dacă se produce și accident cu victime → <b>concurs</b> cu ucidere/vătămare din culpă. Uzul de fals e săvârșit de <b>altcineva</b> decât autorul falsului. Tăinuire = bunuri; favorizare = persoana. Omor ≠ loviri cauzatoare de moarte: distincția = intenția față de deces.'
  },

  // ══ PROCEDURĂ CIVILĂ ══════════════════════════════════════════════════════════

  {
    id:'w26', wk:'W26', dates:'21–27 dec', subj:'pciv',
    title:'Procedură Civilă — judecata',
    sections:[
      { icon:'🏛️', title:'Competența instanțelor (art. 94–147 NCPC)',
        items:[
          '<b>Judecătoria</b>: judecă în primă instanță cauzele neatribuite altor instanțe; plângeri contravenționale; cereri provizorii.',
          '<b>Tribunalul</b>: judecă în primă instanță cauzele cu valoare > <b>200.000 lei</b>, conflicte de muncă, litigii de contencios administrativ sub 3 mil. lei; judecă apelurile împotriva hotărârilor judecătoriei.',
          '<b>Curtea de Apel</b>: judecă apelurile împotriva hotărârilor tribunalului pronunțate în primă instanță; judecă recursurile împotriva hotărârilor tribunalului pronunțate ca instanță de apel.',
          '<b>Competența teritorială de drept comun</b> (art. 107): instanța de la domiciliul/sediul pârâtului. Dacă pârâtul are mai multe domicilii → reclamantul alege.',
          '<b>Competența teritorială alternativă</b>: materie contractuală — și instanța locului de executare; materie delictuală — și instanța locului producerii prejudiciului. Reclamantul alege.',
          '<b>Competența exclusivă</b>: imobile → instanța locului situării imobilului; societăți → instanța sediului social; succesiuni → instanța locului deschiderii succesiunii (ultimul domiciliu al defunctului).'
        ]
      },
      { icon:'⚖️', title:'Acțiunea civilă și participanții (art. 29–88 NCPC)',
        items:[
          '<b>Condițiile exercitării acțiunii civile</b>: drept, interes (actual, născut, personal, direct), calitate procesuală activă (reclamantul) și pasivă (pârâtul), capacitate procesuală.',
          '<b>Calitatea procesuală</b>: legitimarea de a figura ca parte în proces. Lipsa calității procesuale = excepție peremptoriu → respingerea acțiunii.',
          '<b>Litispendența</b>: același litigiu pe rolul a două instanțe concomitent → excepție dilatoriu; dosarul mai nou se trimite la instanța mai veche.',
          '<b>Conexitatea</b>: cauze legate între ele, judecate separat → pot fi reunite la instanța mai întâi sesizată.',
          '<b>Intervenția voluntară</b> (principală sau accesorie) și <b>intervenția forțată</b> (chemarea în judecată a terțului): mijloace de atragere a terților în procesul civil.'
        ]
      },
      { icon:'📋', title:'Judecata în primă instanță — etape esențiale',
        items:[
          '<b>Cererea de chemare în judecată</b>: trebuie să cuprindă instanța, datele de identificare ale părților, obiectul, motivele de fapt și drept, mijloacele de probă. Cerere incompletă → regularizare (completare în termen).',
          '<b>Întâmpinarea</b>: răspunsul scris al pârâtului; termen general = <b>25 de zile</b> de la comunicarea cererii. Nedepunere = decăderea pârâtului din dreptul de a propune probe.',
          '<b>Excepțiile procesuale</b>: dilatorii (amână — ex: necompetență, lipsa calității, nulitatea relativă a actelor) vs. peremptorii (sting acțiunea — ex: prescripție, autoritatea de lucru judecat, lipsa capacității procesuale). Peremptorii = respingerea acțiunii.',
          '<b>Probele</b>: înscrisuri, martori, expertiză, interogatoriu, cercetare la fața locului. Sarcina probei revine celui care afirmă (art. 249 NCPC).',
          '<b>Dezbaterile</b> și <b>deliberarea</b>: după dezbateri, instanța deliberează în secret și pronunță hotărârea; minuta se semnează imediat; hotărârea se redactează și se comunică.'
        ]
      },
      { icon:'📂', title:'Hotărârea și căile de atac',
        items:[
          '<b>Hotărârea definitivă</b>: neapelată în termen sau pronunțată în apel (sau în recursul trimis direct). Produce efecte de lucru judecat și e titlu executoriu.',
          '<b>Apelul</b>: calea ordinară de atac; termen <b>30 de zile</b> de la comunicarea hotărârii; devoluează în fapt și în drept. Instanța de apel rejudecă fondul.',
          '<b>Recursul</b>: cale extraordinară, numai în drept; verifică dacă instanța a aplicat corect legea. Nu se readministrează probe; motive limitativ prevăzute de art. 488 NCPC.',
          '<b>Contestația în anulare</b> (art. 503 NCPC): pentru hotărâri definitive, numai în cazuri expres (ex: necitare legală, hotărâre contrară altei hotărâri irevocabile).',
          '<b>Revizuirea</b> (art. 509 NCPC): pentru motive de fapt apărute ulterior hotărârii (ex: înscrisuri false descoperite, hotărâri penale contrare, eroare materială).'
        ]
      }
    ],
    grila:'Competența teritorială de drept comun = domiciliul <b>pârâtului</b> (nu reclamantului). Termenul de apel = <b>30 de zile</b> de la comunicare (nu de la pronunțare). Recursul = numai în drept. Excepție peremptoriu = respingerea acțiunii; dilatoriu = amânarea. Autoritatea de lucru judecat cere triplă identitate: obiect + părți + cauză.'
  },

  {
    id:'w27', wk:'W27', dates:'28 dec–3 ian', subj:'pciv',
    title:'Procedură Civilă — executarea silită',
    sections:[
      { icon:'📜', title:'Titlurile executorii și condițiile executării (art. 632–641 NCPC)',
        items:[
          '<b>Titlul executoriu</b>: document care conferă dreptul de a porni executarea silită. Hotărâri judecătorești definitive, contracte de credit, contracte autentice notariale (în limita creanței), bilete la ordin, cecuri.',
          '<b>Învestirea cu formulă executorie</b>: nu mai e necesară pentru hotărârile judecătorești (din 2013); necesară pentru alte titluri la instanța de executare.',
          '<b>Instanța de executare</b>: judecătoria în circumscripția căreia se va efectua executarea (domiciliu debitor sau locul bunului).',
          '<b>Executorul judecătoresc</b>: ales de creditor; competent după domiciliul debitorului SAU locul bunului. Sesizat de creditor cu cerere de executare + titlu executoriu + dovada achitării taxelor.',
          'Termenul general de prescripție a dreptului de a cere executarea silită: <b>3 ani</b> de la data când hotărârea a rămas definitivă.'
        ]
      },
      { icon:'💸', title:'Formele executării silite',
        items:[
          '<b>Urmărirea mobilă</b>: sechestrul și valorificarea bunurilor mobile corporale ale debitorului (licitație publică sau prin executor).',
          '<b>Poprirea</b>: urmărirea sumelor pe care un terț (poprit) le datorează debitorului. Exemple: salariu (angajatorul = terț poprit), cont bancar (banca = terț poprit). Terțul poprit e obligat să consemneze suma sau să declare că nu datorează.',
          'Limite poprire salariu: max. <b>1/3 din salariul net</b> pentru o creanță; max. <b>1/2</b> pentru mai multe creanțe sau întreținere. Minimul nepoprabil = salariul minim net.',
          '<b>Urmărirea imobiliară</b>: imobile ale debitorului; procedura = somație (termen min. <b>15 zile</b> pentru plată) → publicare licitație → adjudecare.',
          '<b>Predarea silită</b>: executarea obligațiilor de a face sau a nu face; și predarea efectivă a unui bun mobil/imobil (ex: evacuare).'
        ]
      },
      { icon:'🛑', title:'Contestația la executare (art. 711–720 NCPC)',
        items:[
          'Modalitate de contestare a actelor de executare ilegale sau a titlului însuși (dacă acesta nu e o hotărâre judecătorească).',
          '<b>Termenul</b>: <b>15 zile</b> de la data când cel interesat a luat cunoștință de actul atacat (dar nu mai târziu de termenele speciale prevăzute de lege).',
          'Se judecă de <b>instanța de executare</b> (judecătoria), nu de instanța care a pronunțat titlul. Urgent, cu citarea părților.',
          'Contestația <b>nu suspendă</b> automat executarea; suspendarea se poate cere separat, cu sau fără cauțiune, și e discreționară.'
        ]
      },
      { icon:'⏸️', title:'Suspendarea, perimarea și încheierea executării',
        items:[
          '<b>Suspendarea executării</b>: de drept (ex: moartea debitorului, declararea falimentului) sau judecătorească (la cerere). Actele efectuate anterior suspendării rămân valabile; executarea se reia de la ultimul act.',
          '<b>Perimarea executării</b>: dacă creditorul nu stăruie în executare timp de <b>6 luni</b> de la ultimul act de executare → dosarul se perimă. Stinge dosarul, <b>nu creanța</b> — creditorul poate relua cu un nou dosar.',
          '<b>Bunuri neurmăribile</b>: haine, mobilier indispensabil, instrumente de lucru, bunuri de uz personal, alimente necesare pe 2 luni, bunuri sacre/culturale. Imobilul locuință poate fi urmărit, dar cu restricții pentru debitorii cu copii minori.',
          '<b>Încheierea executării</b>: prin realizarea integrală a creanței; prin renunțarea creditorului; prin perimarea dosarului.'
        ]
      }
    ],
    grila:'Termenul contestație la executare = <b>15 zile</b> (nu 30). Contestația la executare se judecă la <b>instanța de executare</b> (judecătoria), nu la instanța care a dat titlul. Poprire salariu: max. <b>1/3</b> (o creanță) / <b>1/2</b> (mai multe). Perimarea stinge dosarul, nu creanța. Terțul poprit are <b>obligație activă</b> (consemnare sau declarație că nu datorează).'
  },

  // ══ PROCEDURĂ PENALĂ ══════════════════════════════════════════════════════════

  {
    id:'w28', wk:'W28', dates:'4–10 ian', subj:'ppen',
    title:'Procedură Penală — esențial',
    sections:[
      { icon:'⚖️', title:'Principii fundamentale (art. 2–12 CPP)',
        items:[
          '<b>Legalitatea procesului penal</b>: organele judiciare acționează numai în limitele legii și cu respectarea drepturilor persoanelor.',
          '<b>Prezumția de nevinovăție</b>: orice persoană e prezumată nevinovată până la condamnare definitivă. Sarcina probei = <b>organele judiciare</b>; in dubio pro reo = dubiul profită inculpatului.',
          '<b>Aflarea adevărului</b>: organele judiciare au obligația de a strânge toate probele, inclusiv cele în favoarea suspectului/inculpatului.',
          '<b>Ne bis in idem</b>: nimeni nu poate fi urmărit sau judecat de două ori pentru aceeași faptă. Dacă există hotărâre definitivă → clasare/achitare.',
          '<b>Dreptul la apărare</b>: asistența juridică obligatorie la inculpat pentru infracțiuni grave, reținut sau arestat, minor.'
        ]
      },
      { icon:'🔍', title:'Urmărirea penală (art. 285–341 CPP)',
        items:[
          'Faze: <b>in rem</b> (față de faptă, după sesizare) → <b>in personam</b> (față de suspect → față de inculpat, după punerea în mișcare a acțiunii penale).',
          '<b>Organele de urmărire penală</b>: procurorul (conduce urmărirea penală) + organele de cercetare penală (poliția judiciară, organe speciale). Procurorul poate efectua personal orice act de urmărire.',
          '<b>Clasarea</b>: când nu există faptă, fapta nu e prevăzută de lege, fapta nu prezintă pericol social, lipsește plângerea prealabilă, a intervenit prescripția etc.',
          '<b>Renunțarea la urmărire penală</b>: la infracțiuni cu pedeapsă de max. 7 ani, dacă nu există interes public. Discreție a procurorului (principiul oportunității).',
          '<b>Trimiterea în judecată</b>: prin rechizitoriu, dacă există probe suficiente că inculpatul a săvârșit infracțiunea.'
        ]
      },
      { icon:'🔒', title:'Măsurile preventive (art. 202–244 CPP)',
        items:[
          '<b>Reținerea</b>: max. <b>24 de ore</b>; dispusă de organul de cercetare penală sau procuror; fără aprobare judecătorească.',
          '<b>Controlul judiciar</b> și <b>controlul judiciar pe cauțiune</b>: dispuse de judecătorul de drepturi și libertăți sau instanță; nu implică privare de libertate; max. 60 de zile în urmărire (prelungibil), nelimitat în judecată.',
          '<b>Arestul la domiciliu</b>: privare de libertate la domiciliu; durata se contabilizează ca arest preventiv (zile echivalente); necesită mandat de la judecătorul de drepturi și libertăți.',
          '<b>Arestul preventiv</b> în cursul urmăririi penale: inițial <b>30 de zile</b> (judecătorul de drepturi și libertăți); prelungibil cu câte 30 de zile; maxim total <b>180 de zile</b> în urmărire penală. În cursul judecății: câte <b>60 de zile</b>, fără limită totală.',
          'Toate măsurile preventive presupun că există probe sau indicii rezonabile că inculpatul a săvârșit infracțiunea + una din condițiile speciale (pericol public, pericol de fugă, obstacularea anchetei).'
        ]
      },
      { icon:'📂', title:'Judecata penală și căile de atac (art. 342–552 CPP)',
        items:[
          'Faze ale judecății: <b>camera preliminară</b> (verificarea rechizitoriului și a probelor) → <b>judecata în fond</b> → <b>căile de atac</b>.',
          '<b>Camera preliminară</b>: judecătorul de cameră preliminară verifică dacă urmărirea e legală și dacă probele pot fi folosite. Poate exclude probe obținute nelegal.',
          '<b>Apelul</b> (art. 408): calea ordinară de atac; termen <b>10 zile</b> de la comunicarea copiei minutei; devoluează în fapt și în drept.',
          '<b>Acordul de recunoaștere a vinovăției</b> (art. 478–488): negociat între procuror și inculpat; instanța <b>omologhează sau respinge</b> în totalitate — nu poate modifica pedeapsa convenită. Recunoașterea învinuirii în procedura simplificată (art. 374/396) → reducere cu <b>1/3 a limitelor</b>.',
          '<b>Achitarea</b>: când fapta nu există, nu e prevăzută de lege, nu a fost săvârșită de inculpat, nu există vinovăție, există cauze justificative/de neimputabilitate. <b>Încetarea procesului penal</b>: când lipsesc condițiile de procedibilitate (ex: plângere prealabilă retrasă, prescripție).'
        ]
      }
    ],
    grila:'Reținere = max. <b>24h</b>, fără mandat. Arest preventiv în urmărire: max. <b>180 de zile</b> total; câte 30 de zile pe rând. Apel penal: <b>10 zile</b> de la comunicarea minutei (nu 30!). Prezumția de nevinovăție: sarcina probei → <b>organele judiciare</b>. Acord de recunoaștere = instanța omologhează sau respinge, nu modifică. In dubio pro reo = dubiul → achitare.'
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
    'Oferta reală de plată + consemnațiune (art. 1510–1515 NCC): dacă creditorul refuză nejustificat, debitorul depune suma la o instituție de credit și e liberat din ziua consemnațiunii.'
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
    'Contractul de vânzare: momentul transferului proprietății (regulă generală NCC), cine suportă riscul pieirii și 3 obligații principale ale vânzătorului.',
    'Donația: forma obligatorie (autentică notarială) și 3 categorii de donații valabile fără formă autentică (donații indirecte, deghizate, dar manual).',
    'Donația: cauze de revocare judiciară (ingratitudine + naștere de copil). Revocarea pentru ingratitudine — termen și efecte față de terți.',
    'Mandatul cu reprezentare vs. fără reprezentare: față de terți, efectele actelor mandatarului se produc față de cine în fiecare caz?',
    'Aplicație: A îi dă lui B mandat să vândă terenul cu minimum 50.000 €. B îl vinde cu 45.000 €. Contractul cu cumpărătorul C e valabil?',
    'Împrumut de consumație (mutuum) vs. împrumut de folosință (comodat): cine devine proprietarul bunului și cine suportă riscul pieirii?',
    'Clauza de inalienabilitate: condiții de valabilitate în NCC (interes serios și legitim + durată determinată) și efecte față de terți.'
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
    'Enumeră cel puțin 5 izvoare ale obligațiilor civile în NCC.',
    'Formarea contractului între absenți: momentul perfectării (teoria recepției) și ce se întâmplă dacă acceptarea ajunge tardiv?',
    'Gestiunea de afaceri (art. 1330 NCC): enumeră 3 condiții și principalele obligații ale gerantului față de gerat.',
    'Îmbogățirea fără justă cauză — actio de in rem verso: 3 condiții și limita restituirii (cel mai mic din îmbogățire vs. sărăcire).',
    'Aplicație: A plătește din greșeală o datorie a lui B față de C. Ce acțiune are A și împotriva cui — B sau C?',
    'Plata nedatorată (art. 1341 NCC): condiții și ce se poate cere la restituire (principiul).',
    'Solidaritatea pasivă vs. fideiusiunea: cum diferă față de creditor și față de moștenitorii debitorului?'
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
    'Contractul de societate — 3 elemente esențiale: aporturile / participarea la beneficii și pierderi / affectio societatis. Explică fiecare.',
    'Contractul de asigurare: interesul asigurabil — definiție, cine trebuie să îl aibă și la ce moment (al încheierii sau al producerii riscului)?',
    'Renta viageră: la decesul credirentierului, ratele scadente și neplătite se transmit moștenitorilor?',
    'Tranzacția: ce efect produce (echivalent ALC?) și poate fi atacată cu acțiune în anulare pentru eroare de drept?',
    'Aplicație: A asigură bunul lui B (fără consimțământul lui B și fără interes asigurabil). Este valabil contractul de asigurare?',
    'Contractul de joc sau pariu: obligația rezultată e civilă perfectă sau naturală? Consecința — poate fi executată silit?',
    'La grilă: fideiusiunea vs. asigurarea de garanție — care e diferența privind regresul față de debitor după plată?'
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
