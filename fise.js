// fise.js — Fișe de sinteză juridică · W01–W08 Drept Civil (NCC 2011, la zi)
// Modul autoconținut; nu depinde de variabile globale externe.
// Pagina oferă: #fise-container în #panel-fise.

var FISE_DATA = [
  {
    id:'w01', wk:'W01', dates:'29 iun–5 iul', subj:'civ',
    title:'AJC: noțiune, clasificare, capacitate',
    sections:[
      { icon:'📌', title:'Definiție și esență',
        items:[
          'Manifestare de voință făcută cu <b>intenția de a produce efecte juridice</b> (a crea, modifica sau stinge raporturi juridice civile). <i>Art. 1166 NCC</i>.',
          'Spre deosebire de <b>faptul juridic</b>: la AJC efectele sunt voite; la faptul juridic se produc independent de voință (ex: accidentul rutier).',
          'Elementele esențiale: <b>consimțământ, capacitate, obiect, cauză</b>; forma e esențială numai când legea prevede.'
        ]
      },
      { icon:'🗂', title:'Clasificări esențiale',
        items:[
          '<b>Unilateral</b> (testament, ofertă, acceptarea moștenirii, denunțarea unui contract) / <b>bilateral</b> (contractul) / <b>multilateral</b> (societatea).',
          '<b>Cu titlu oneros</b>: comutativ (prestații certe) sau aleatoriu (prestații incerte, legate de un eveniment). / <b>Cu titlu gratuit</b>: liberalitate (donație, legat) sau dezinteresat (comodat, mandat gratuit).',
          '<b>Consensual</b> (simpla voință) / <b>solemn</b> (formă ad validitatem: donație, ipotecă, testament autentic) / <b>real</b> (remiterea bunului: gaj, comodat, depozit, împrumut).',
          '<b>Constitutiv</b> (creează un drept nou: uzufruct) / <b>translativ</b> (transferă un drept existent: vânzare) / <b>declarativ</b> (recunoaște un drept preexistent: partajul — efecte <i>ex tunc</i>).',
          '<b>Inter vivos</b> / <b>mortis causa</b> (testamentul — efecte la moartea testatorului, revocabil oricând).',
          '<b>Strict personal</b> (intuitu personae: mandatul, antrepriza, donația) vs. <b>impersonal</b>.'
        ]
      },
      { icon:'👤', title:'Capacitatea de folosință',
        items:[
          '<b>Persoana fizică</b>: dobândită la <b>naștere</b> (excepție: <i>infans conceptus</i> — drepturile copilului conceput se socotesc dobândite de la concepție, dacă se naște viu, chiar și o clipă).',
          '<b>Persoana juridică</b>: de la data înregistrării sau, după caz, de la data actului de înființare; dobândește drepturi anticipat de la data actului de înființare.',
          'PJ: principiul <b>specialității</b> capacității de folosință — poate face numai acte conforme cu scopul/obiectul de activitate.',
          '<b>Incapacități speciale</b> de folosință: medicul față de pacientul său, avocatul față de clientul său (nu pot primi donații sau legate).'
        ]
      },
      { icon:'⚖️', title:'Capacitatea de exercițiu',
        items:[
          '<b>Deplină</b>: de la <b>18 ani</b>; excepție: minorul căsătorit (înainte de 18 ani) dobândește capacitate de exercițiu deplină de la data căsătoriei.',
          '<b>Restrânsă</b> (14–18 ani): acționează <b>personal</b>, dar <b>asistat</b> de reprezentantul legal; actele fără asistare sunt anulabile (NR). Minorul poate face singur: acte de conservare, acte de mică valoare cu executare imediată, depuneri la CEC, drepturi exclusive personale.',
          '<b>Lipsă</b> (sub 14 ani): acționează numai prin <b>reprezentant legal</b> (părinți/tutore); excepție: acte de mică valoare cu executare imediată.',
          '<b>Lipsă</b> (persoana pusă sub interdicție judecătorească): acționează prin <b>tutore</b>; actele anterioare interdicției pot fi anulate dacă cauza a existat notorie la data actului.'
        ]
      },
      { icon:'🔴', title:'Sancțiuni pentru nerespectarea capacității',
        items:[
          'Lipsa capacității de <b>folosință</b> → <b>nulitate absolută</b>.',
          'Nerespectarea capacității de <b>exercițiu</b> → <b>nulitate relativă</b> (anulabilitate), acoperibilă prin confirmare expresă sau tacită.',
          'Minorul de rea-credință care a ascuns incapacitatea → nu poate invoca nulitatea relativă (<i>nemo auditur propiam turpitudinem allegans</i>).'
        ]
      }
    ],
    grila:'<b>Capacitate de folosință</b> (lipsa ei → NCA) ≠ <b>capacitate de exercițiu</b> (nerespectarea → NR). Minorul 14–18 ani este <b>asistat</b> (nu reprezentat). Sub 14 ani și interzisul judecătoresc sunt <b>reprezentați</b>. <i>Infans conceptus</i>: drepturile se socotesc dobândite de la concepție dacă se naște viu. Minorul de rea-credință nu poate invoca anulabilitatea.'
  },

  {
    id:'w02', wk:'W02', dates:'6–12 iul', subj:'civ',
    title:'Consimțământul și viciile de consimțământ',
    sections:[
      { icon:'📌', title:'Condiții de valabilitate',
        items:[
          '<b>Serios</b>: exclus actele făcute în glumă (<i>jocandi causa</i>), didactic, teatral.',
          '<b>Liber</b>: neviciat de eroare, dol, violență sau leziune.',
          '<b>Exprimat în cunoștință de cauză</b>: obligație precontractuală de informare (art. 1182–1185 NCC).',
          '<b>Principiul consensualismului</b>: simpla manifestare de voință e suficientă; excepțiile (solemnitate, tradiție) sunt expres prevăzute de lege.',
          'Contractul se formează la momentul <b>acceptării ofertei</b> (teoria recepției în NCC — contractul se consideră perfectat când acceptarea a ajuns la ofertant).'
        ]
      },
      { icon:'❓', title:'Eroarea (art. 1207–1213 NCC)',
        items:[
          '<b>Eroarea esențială</b>: poartă asupra naturii sau obiectului actului, identității obiectului, persoanei (la acte <i>intuitu personae</i>) sau calității esențiale a bunului. → <b>anulabilitate</b>.',
          'Eroarea trebuie să fie <b>scuzabilă</b> — cel care nu manifestă diligența unui om rezonabil nu o poate invoca.',
          '<b>Eroarea de drept</b>: eroarea asupra conținutului normei legale; poate fi esențială și atrage anulabilitatea dacă e scuzabilă.',
          '<b>Eroarea obstacol</b> (<i>in negotio</i>: greșeală asupra naturii actului; <i>in corpore</i>: identitate totală greșită) → lipsă de acord, nulitate absolută.',
          'Eroarea <b>neesențială</b> (de calcul, aritmetică) → nu afectează valabilitatea; numai rectificarea prețului.',
          'Eroarea <b>indiferentă</b> (privind calitățile neeseențiale) → nu produce efecte juridice.'
        ]
      },
      { icon:'🎭', title:'Dolul (art. 1214–1216 NCC)',
        items:[
          'Manopere frauduloase (acțiune sau <b>reticență</b>) care induc în eroare și determină încheierea actului.',
          '<b>Dolul prin reticență</b>: tăcere intenționată atunci când există obligație de informare (ex: vicii ascunse cunoscute de vânzător).',
          '<b>Dol de terț</b> → anulabilitate <b>numai dacă</b> cealaltă parte a cunoscut sau <b>trebuia să cunoască</b>. Diferit de violența terțului!',
          'Sancțiune: <b>anulabilitate + daune-interese</b>, care pot fi cumulate chiar dacă nu se cere anularea (art. 1257 NCC).',
          'Nu se cere ca eroarea indusă prin dol să fie esențială — dolul atrage anulabilitatea chiar pentru o eroare neeseențială dacă a determinat consimțământul.'
        ]
      },
      { icon:'💥', title:'Violența (art. 1216–1220 NCC)',
        items:[
          'Amenințare cu un rău <b>injust</b> și <b>grav</b>, actual și serios, care a determinat încheierea actului.',
          '<b>Violența de terț</b> → anulabilitate <b>indiferent dacă cealaltă parte a știut sau nu</b>. Aceasta e deosebirea esențială față de dol!',
          '<b>Starea de necesitate exploatată</b>: contractul poate fi anulat dacă o parte a profitat de starea de dificultate a celeilalte (art. 1218 NCC).',
          '<b>Temerea reverenționară</b> singură (față de părinți, tutore) nu constituie violență. Dar dacă e însoțită de amenințări → devine viciu.',
          'Violența poate proveni din fapta unui terț sau chiar din cauze naturale dacă sunt exploatate.'
        ]
      },
      { icon:'⚠️', title:'Leziunea (art. 1221–1224 NCC)',
        items:[
          '<b>Majori</b>: disproporție vădită (<b>mai mult de jumătate</b>) din valoarea prestației la momentul încheierii actului. Termen de prescripție: <b>1 an de la data actului</b>.',
          '<b>Minori 14–18 ani</b>: orice act lezionar, chiar asistat; nu se cere procentul de 50%.',
          'Sancțiune: <b>anulabilitate</b> <i>sau</i> reducerea/mărirea prestației pentru restabilirea echilibrului (la alegerea instanței sau a pârâtului).',
          '<b>Nu se aplică</b> actelor aleatorii (riscul face parte din natura actului), tranzacțiilor și partajelor.',
          'Leziunea la majori presupune și un element subiectiv: profitarea de starea de nevoie/lipsă de experiență (art. 1221 alin. 2 NCC).'
        ]
      }
    ],
    grila:'<b>Dol de terț ≠ violență de terț</b>: dolul → anulabilitate numai dacă cealaltă parte <i>a știut sau trebuia să știe</i>; violența → anulabilitate <b>întotdeauna</b>, indiferent de cunoașterea celeilalte părți. Eroarea trebuie să fie <b>scuzabilă</b>. Leziunea la majori: <b>&gt;50% disproporție</b> + prescripție <b>1 an</b>. Dolul și daunele se pot cumula fără anulare.'
  },

  {
    id:'w03', wk:'W03', dates:'13–19 iul', subj:'civ',
    title:'Obiect, cauză, formă + Nulitatea',
    sections:[
      { icon:'📦', title:'Obiectul AJC (art. 1225–1234 NCC)',
        items:[
          'Conduita la care se obligă una sau ambele părți: acțiune (a da, a face) sau inacțiune (a nu face).',
          'Bunul trebuie să fie: <b>determinat sau determinabil</b> (suficient identificat), <b>licit</b> (în circuitul civil), <b>posibil</b>.',
          '<b>Bunuri inalienabile</b> prin natura lor (bunuri publice) sau prin lege → actele de înstrăinare sunt <b>nule absolut</b>.',
          '<b>Imposibilitate inițială absolută</b> (obiect imposibil de la start) → nulitate absolută.',
          '<b>Imposibilitate ulterioară fortuită</b> → stingerea obligației, nu nulitate (forța majoră sau cazul fortuit).',
          'Obiect <b>viitor</b> posibil: valabil (ex: vânzarea unui bun viitor — art. 1228 NCC); excepție: moștenirea nedeschisă a altei persoane (pactul asupra unei succesiuni viitoare = nul absolut).'
        ]
      },
      { icon:'🎯', title:'Cauza AJC (art. 1235–1239 NCC)',
        items:[
          '<b>Cauza imediată</b> (scopul direct, tipic, același pentru toți cei care încheie același tip de act): la vânzare — obținerea prețului/bunului.',
          '<b>Cauza mediată</b> (motivul determinant concret, individualizat): de ce anume a dorit X să cumpere bunul.',
          'Condiții: să <b>existe</b>, să fie <b>reală</b> (nu falsă), <b>licită</b> și <b>morală</b>.',
          '<b>Prezumție de existență și valabilitate</b>: sarcina probei revine celui care contestă cauza.',
          '<b>Cauza falsă</b> (eroare asupra motivului determinant) → <b>nulitate relativă</b>.',
          '<b>Cauza ilicită sau imorală</b> → <b>nulitate absolută</b>. <i>Fraus omnia corrumpit</i>.',
          'Cauza ilicită a uneia din părți nu atrage nulitatea dacă cealaltă parte nu a cunoscut-o și nici nu trebuia să o cunoască (art. 1238 NCC).'
        ]
      },
      { icon:'📝', title:'Forma AJC (art. 1240–1245 NCC)',
        items:[
          '<b>Ad validitatem</b> (forma solemnă): nerespectare → <b>nulitate absolută</b>. Exemple: donație (act autentic), ipotecă imobiliară, constituire de gaj, testament, căsătoria, societate pe acțiuni.',
          '<b>Ad probationem</b>: nerespectare → actul e <b>valabil</b>, dar nu poate fi dovedit cu martori dacă valoarea depășește 250 lei. Exemple: contracte cu valoare &gt;250 lei, contractul de asigurare.',
          '<b>Pentru opozabilitate față de terți</b> (publicitate): nerespectare → act valabil între părți, dar <b>inopozabil</b> terților. Exemple: publicitate imobiliară în CF, înregistrare în AEGRM, publicitate societăților.',
          'Actul solemn care nu îndeplinește forma poate valora ca <b>promisiune de contract</b> dacă exprimă acordul de voință al părților.'
        ]
      },
      { icon:'🔴', title:'Nulitatea — clasificare și regim juridic (art. 1246–1265 NCC)',
        items:[
          '<b>Absolută (NCA)</b>: protejează interesul general sau ordinea publică. Cauze: lipsă capacitate de folosință, cauza ilicită/imorală/contrară ordinii publice, formă solemnă nerespectată, ordine publică.',
          '<b>Relativă (NR)</b>: protejează interesul particular al uneia din părți. Cauze: vicii de consimțământ, nerespectarea capacității de exercițiu, leziunea.',
          'NCA: poate fi invocată de <b>oricine are interes</b>, din oficiu de instanță, este <b>imprescriptibilă</b>, <b>nu se confirmă</b> (excepție: dispoziții speciale).',
          'NR: poate fi invocată <b>numai de persoana protejată</b>, prescriptibilă în <b>3 ani</b>, poate fi acoperită prin <b>confirmare</b> expresă sau tacită.',
          '<b>Nulitate parțială</b>: clauza nulă e înlăturată, restul actului rămâne; dacă clauza a fost determinantă → nulitate totală.',
          '<b>Nulitate virtuală</b>: sancțiunea e NCA sau NR chiar dacă legea nu o prevede expres, dacă scopul normei încălcate o impune.'
        ]
      }
    ],
    grila:'Forma <b>ad validitatem</b> → NCA; forma <b>ad probationem</b> → nu afectează valabilitatea. Cauza <b>falsă</b> → NR; cauza <b>ilicită</b> → NCA. NCA e <b>imprescriptibilă</b>; NR se prescrie în <b>3 ani</b>. Nulitate parțială → clauza cade, actul supraviețuiește (dacă clauza nu a fost determinantă). Pactul asupra unei succesiuni viitoare a altei persoane = NCA.'
  },

  {
    id:'w04', wk:'W04', dates:'20–26 iul', subj:'civ',
    title:'Efecte nulitate, modalități, prescripție extinctivă',
    sections:[
      { icon:'↩️', title:'Efectele nulității (art. 1254–1265 NCC)',
        items:[
          '<b>Retroactiv</b> (<i>ex tunc</i>): actul e desființat de la data încheierii, ca și cum n-ar fi existat niciodată.',
          '<b>Restituirea prestațiilor</b>: fiecare parte restituie ce a primit (repunere în starea anterioară).',
          '<b>Excepții</b> de la restituire: prestații succesive deja consumate; minorul poate fi obligat la restituire numai în limita îmbogățirii; cauza imorală (<i>nemo auditur propiam turpitudinem allegans</i>) — nici una din părți nu poate cere restituirea.',
          '<b>Resoluto iure dantis, resolvitur ius accipientis</b>: subdobânditorul pierde dreptul. Excepție: dobânditorul de bună-credință și cu titlu oneros al imobilelor, înscris în CF (<i>principiul publicității</i>).',
          '<b>Conversiunea</b> actului nul: actul nul ca tip A poate valora ca tip B dacă îndeplinește condițiile lui B și voința probabilă a părților o susține. Ex: testament autentic nul → poate valora ca testament olograf.'
        ]
      },
      { icon:'⏳', title:'Termenul — modalitate a AJC (art. 1411–1420 NCC)',
        items:[
          '<b>Suspensiv</b>: amână exigibilitatea; creanța există, dar nu poate fi executată înainte de termen. Debitorul care plătește înainte de termen nu poate cere restituirea.',
          '<b>Extinctiv</b>: stinge dreptul la expirare (ex: contractul de locațiune pe durată determinată).',
          '<b>Cert</b>: data fixă și sigură. <b>Incert</b>: evenimentul e sigur că va surveni, data e nesigură (ex: moartea).',
          'Termenul <b>în favoarea debitorului</b> (regula): debitorul poate renunța la beneficiul termenului și plăti anticipat; creditorul nu poate refuza.'
        ]
      },
      { icon:'🎲', title:'Condiția — modalitate a AJC (art. 1399–1410 NCC)',
        items:[
          '<b>Suspensivă</b>: dreptul se naște la realizarea evenimentului; dacă nu se realizează, actul e lipsit de efecte.',
          '<b>Rezolutorie</b>: dreptul existent se desființează retroactiv la realizare.',
          '<b>Pur potestativă</b> din partea celui care se obligă (<i>dacă vreau eu</i>) → <b>nulitate absolută</b> (lipsă de obligație reală).',
          '<b>Potestativă simplă</b> (<i>dacă mă voi căsători</i>) / <b>cazuală</b> (depinde de hazard) / <b>mixtă</b> (depinde parțial de terț) → valide.',
          '<b>Sarcina</b>: obligație impusă gratificantului în acte gratuite; neexecutare → revocarea liberalității (după punere în întârziere).'
        ]
      },
      { icon:'⌛', title:'Prescripția extinctivă (art. 2500–2544 NCC)',
        items:[
          '<b>Termen general: 3 ani</b> (drepturi personale patrimoniale — art. 2517 NCC).',
          '<b>Termene speciale</b>: 10 ani (drepturi reale, răspundere contractuală pentru lucrări imobiliare); 2 ani (drepturi din asigurări); 1 an (leziune, unele acțiuni de dreptul muncii); 6 luni (vicii aparente); 30 zile (acțiunile posesorii).',
          '<b>Suspendarea</b> (oprire temporară, termenul continuă de unde s-a oprit): forță majoră; creditor incapabil fără reprezentant; acțiune între soți; negocieri; retragerea cererii de arbitrare.',
          '<b>Întreruperea</b> (termenul scurs se șterge, se reia de la zero): recunoașterea dreptului de debitor; cerere de chemare în judecată; arbitrare; punere în întârziere.',
          '<b>Repunerea în termen</b>: motive temeinice + cerere în 30 zile de la încetarea cauzei.',
          'Prescripția <b>nu operează de drept</b>: trebuie invocată de debitor (excepție); instanța nu o poate ridica din oficiu dacă debitorul nu o invocă.'
        ]
      }
    ],
    grila:'Condiție <b>pur potestativă din partea debitorului</b> = NCA (nu din partea creditorului!). <b>Suspendare</b> (termenul se oprește și continuă de unde era) ≠ <b>Întrerupere</b> (termenul o ia de la zero). Termen general: <b>3 ani</b>; drepturi reale: <b>10 ani</b>. Debitorul care plătește înainte de termen nu poate cere restituirea. Conversiunea: actul nul poate valora ca alt act.'
  },

  {
    id:'w05', wk:'W05', dates:'27 iul–2 aug', subj:'civ',
    title:'Proprietatea privată și modalitățile ei',
    sections:[
      { icon:'📌', title:'Dreptul de proprietate privată (art. 555–621 NCC)',
        items:[
          '<b>Absolut</b>: opozabil tuturor (erga omnes); proprietarul poate opune dreptul față de oricine.',
          '<b>Exclusiv</b>: proprietarul singur exercită prerogativele; terții nu pot interveni fără consimțământ.',
          '<b>Perpetuu</b>: nu se stinge prin neuz; se transmite prin moștenire sau acte juridice.',
          '<b>Conținut</b>: <i>ius utendi</i> (a folosi bunul), <i>ius fruendi</i> (a culege fructele), <i>ius abutendi</i> (dispoziția materială și juridică).',
          '<b>Dispoziția juridică</b>: înstrăinare, grevare cu sarcini reale, renunțare. Dispoziția materială: transformare, consumare, distrugere.'
        ]
      },
      { icon:'🚧', title:'Limitele exercitării dreptului de proprietate',
        items:[
          '<b>Legale</b>: distanțe minime față de hotar pentru construcții (0,6m–0,6m), arbori (0,5m sau conform regulilor locale); dreptul de trecere forțat (art. 617–621 NCC).',
          '<b>Judiciare (abuzul de drept)</b>: exercitarea dreptului cu scopul exclusiv de a păgubi pe altul, fără interes legitim propriu → faptă ilicită, antrenează răspundere delictuală.',
          '<b>Convenționale (clauza de inalienabilitate)</b>: motiv licit și serios; durată max <b>49 de ani</b>; privește numai bunurile proprietarului din patrimoniul său la data clauzei.',
          'Clauza de inalienabilitate e valabilă și opozabilă terților prin publicitate (CF pentru imobile); fără publicitate → inopozabilă terților de bună-credință.'
        ]
      },
      { icon:'🔀', title:'Modalitățile dreptului de proprietate',
        items:[
          '<b>Proprietatea rezolubilă</b>: drept transmis sub condiție rezolutorie; la realizarea condiției dreptul revine transmițătorului retroactiv.',
          '<b>Proprietatea anulabilă</b>: dobândită printr-un act anulabil; dacă actul e anulat, dreptul revine (cu efecte față de terți sub rezerva bunei-credințe și publicității).',
          '<b>Coproprietatea pe cote-părți</b>: fiecare coproprietar are o cotă <i>ideală</i> din drept (nu dintr-un anumit fragment al bunului).',
          '<b>Devălmășia</b>: soții nu au cote determinate; specific regimului matrimonial al comunității legale.',
          '<b>Coproprietatea forțată</b>: bunuri comune obligatorii (scări, acoperișuri, fundații, hotarele comune) — nu se poate cere partajul judiciar.'
        ]
      },
      { icon:'🤝', title:'Regimul coproprietății pe cote-părți (art. 634–645 NCC)',
        items:[
          '<b>Acte de conservare</b>: orice coproprietar poate face singur, fără acordul celorlalți.',
          '<b>Acte de administrare</b>: regula majorității cotelor (nu a numărului de persoane); dacă nu există majoritate → instanța poate autoriza.',
          '<b>Acte de dispoziție</b>: regula unanimității — toți trebuie să consimtă. Un coproprietar poate înstrăina liber numai <b>propria cotă</b>.',
          '<b>Partajul</b>: convențional sau judiciar; efecte <b>declarative</b> (nu constitutive sau translative): fiecare e considerat că a deținut întregul lot de la momentul coproprietății.'
        ]
      }
    ],
    grila:'Efectul <b>declarativ</b> al partajului: nu există transfer de drepturi între coproprietari (deosebit de vânzare). Regula unanimității: <b>numai acte de dispoziție</b>. Acte de administrare: <b>majoritate de cote</b>. Clauza de inalienabilitate: max <b>49 ani</b> + motiv licit și serios. Coproprietatea forțată: <b>nu se poate cere partajul</b>.'
  },

  {
    id:'w06', wk:'W06', dates:'3–9 aug', subj:'civ',
    title:'Dezmembrămintele dreptului de proprietate',
    sections:[
      { icon:'🌿', title:'Uzufructul (art. 703–748 NCC)',
        items:[
          'Dreptul de a <b>folosi bunul</b> altuia și de a-i culege <b>fructele</b>, cu obligația de a-i conserva <b>substanța</b>.',
          '<b>Uzufructuarul</b>: suportă reparațiile de întreținere; culege <b>fructele</b> naturale, civile, industriale; <b>nu are drept la producte</b>.',
          '<b>Nudul proprietar</b>: suportă reparațiile capitale; are drept la producte; poate înstrăina nuda proprietate; poate ipoteca (cu acordul uzufructuarului).',
          '<b>Stingere</b>: expirarea termenului, <b>moartea uzufructuarului</b> (personal — nu se transmite prin moștenire, dar poate fi cedat), consolidarea, renunțare, neuz 10 ani, pieirea totală a bunului.',
          'Uzufructul este <b>temporar prin natura sa</b>; constituirea pe durată nelimitată = viager (max pe durata vieții).'
        ]
      },
      { icon:'🏠', title:'Uzul și abitația (art. 749–754 NCC)',
        items:[
          '<b>Uzul</b>: dreptul de a folosi bunul și a culege fructele <b>în limita nevoilor proprii și ale familiei</b> titularului.',
          '<b>Abitația</b>: dreptul de a locui în casa altuia; specific imobilelor cu destinație de locuință.',
          'Ambele sunt <b>inalienabile și insesizabile</b>: nu pot fi cedate, nu pot fi urmărite de creditori, nu pot fi ipotecate.',
          'Locuința familiei: soțul supraviețuitor beneficiază de dreptul de abitație timp de 1 an de la data deschiderii moștenirii (dacă nu este coproprietar sau moștenitor).'
        ]
      },
      { icon:'🛤️', title:'Servituțile (art. 755–772 NCC)',
        items:[
          'Sarcini impuse unui fond (<b>aservit</b>) în folosul unui alt fond (<b>dominant</b>); urmăresc fondurile, <b>nu persoanele</b>.',
          '<b>Continue</b>: exercitarea nu necesită act uman periodic (scurgerea apelor, vedere, lumină). / <b>Discontinue</b>: necesită acte repetate (dreptul de trecere, de a lua apă).',
          '<b>Aparente</b>: existența lor e semnalizată printr-un semn vizibil (drum, șanț). / <b>Neaparente</b>: fără semn exterior.',
          '<b>Uzucapiunea</b>: <b>numai servituțile continue și aparente</b> pot fi dobândite prin uzucapiune sau prin destinație de proprietar. Servituțile discontinue și neaparente: <b>numai prin titlu</b>.',
          '<b>Stingere</b>: neuz 10 ani (servituți discontinue), confuziune (același proprietar al ambelor fonduri), renunțare, pieirea fondului aservit.'
        ]
      },
      { icon:'🏗️', title:'Superficia (art. 693–702 NCC)',
        items:[
          'Dreptul real de a <b>edifica sau păstra o construcție pe terenul altei persoane</b>, asociat cu un drept de folosință asupra terenului aferent.',
          'Superficiarul este proprietar al construcției; terenul rămâne al nudului proprietar.',
          'Durată: max <b>99 de ani</b>, cu posibilitate de reînnoire.',
          'La stingere prin expirarea termenului sau reunirea drepturilor: proprietarul terenului poate achiziționa construcția la valoarea de piață sau poate cere desființarea ei (cu despăgubire).',
          '<b>Nu se confundă cu servitutea</b>: superficia conferă un drept de proprietate asupra construcției + folosință teren; servitutea nu conferă proprietate.'
        ]
      }
    ],
    grila:'Uzufructuarul: <b>fructe da, producte nu</b>. Uzufructul <b>nu se transmite prin moștenire</b> (personal). Abitația: <b>inalienabilă și insesizabilă</b> (nu poate fi cedată sau urmărită). Servituțile discontinue: <b>nu prin uzucapiune</b>, numai prin titlu. Superficia: max <b>99 ani</b>. Stingerea servituților discontinue prin neuz: <b>10 ani</b>.'
  },

  {
    id:'w07', wk:'W07', dates:'10–16 aug', subj:'civ',
    title:'Posesie, uzucapiune, revendicare, garanții reale',
    sections:[
      { icon:'✋', title:'Posesia (art. 916–952 NCC)',
        items:[
          '<b>Corpus</b> (stăpânire de fapt) + <b>animus</b> (intenția de a stăpâni <i>pentru sine</i>, ca și când ar fi proprietar).',
          '<b>Detenția precară</b>: stăpânire fără <i>animus domini</i> (chiriaș, depozitar, comodatar) → nu produce efectele posesiei; detentorii nu pot invoca uzucapiunea.',
          '<b>Calitățile posesiei utile</b>: continuă, pașnică (netulburată), publică, neechivocă.',
          'Viciile posesiei: discontinuitate, violență, clandestinitate, echivoc — viciile sunt <b>relative</b> (nu pot fi invocate decât de cine e vizat) și <b>temporare</b>.',
          '<b>Intervertirea detenției precare</b> în posesie: numai în cazuri expres prevăzute de lege (ex: detentor dobândește bunul de la proprietar).'
        ]
      },
      { icon:'🌱', title:'Efectele posesiei (art. 937–951 NCC)',
        items:[
          '<b>Prezumția de proprietate</b>: posesorul este prezumat proprietar până la proba contrară.',
          'Posesor <b>de bună-credință</b>: dobândește <b>fructele</b> (naturale, civile, industriale), dar <b>nu și productele</b>.',
          'Posesor <b>de rea-credință</b>: trebuie să restituie toate fructele, plus contravaloarea fructelor percepute cu vinovăție.',
          '<b>Bunuri mobile</b>: posesia de bună-credință valorează titlu de proprietate (<i>en fait de meubles, la possession vaut titre</i> — art. 937 NCC). Excepție: bunuri furate sau pierdute (3 ani de la furt/pierdere).',
          '<b>Acțiuni posesorii</b>: reintegranda (tulburare violentă); complânda (tulburare simplă sau dezposedate). Termen: 1 an de la tulburare.'
        ]
      },
      { icon:'⌛', title:'Uzucapiunea imobiliară (art. 928–934 NCC)',
        items:[
          '<b>Uzucapiunea extratabulară</b> (art. 930): 10 ani posesie utilă + bunul nu este înscris în CF sau titularul din CF a decedat/renunțat.',
          '<b>Uzucapiunea tabulară</b> (art. 931): 5 ani de la înscrierea cu bună-credință în CF, în baza unui titlu translativ de proprietate (chiar dacă autorul nu era proprietar).',
          '<b>Joncțiunea posesiilor</b>: posesorul actual poate adăuga posesia autorului său (dacă o invocă), dar preia și viciile.',
          'Uzucapiunea nu operează împotriva statului sau unităților administrativ-teritoriale pentru bunuri publice.'
        ]
      },
      { icon:'⚔️', title:'Acțiunea în revendicare (art. 563–566 NCC)',
        items:[
          'Acțiunea proprietarului neposesor contra posesorului neproprietar.',
          '<b>Imobiliară</b>: imprescriptibilă extinctiv; cedează în fața uzucapiunii.',
          '<b>Mobiliară</b>: dacă bunul a ajuns la un posesor de bună-credință printr-un act juridic cu <b>titlu oneros</b> → acțiunea este respinsă (proprietarul suportă riscul).',
          'Dacă bunul mobil a fost <b>furat sau pierdut</b>: proprietarul poate revendica chiar față de terțul de bună-credință cu titlu oneros, în termen de <b>3 ani de la furt/pierdere</b>.'
        ]
      },
      { icon:'🔒', title:'Garanții reale (art. 2279–2479 NCC)',
        items:[
          '<b>Ipoteca imobiliară</b>: accesorie, indivizibilă; publicitate prin CF; rangul → data înscrierii în CF.',
          '<b>Ipoteca mobiliară</b>: se constituie fără deposedarea debitorului; publicitate prin AEGRM; rangul → data înregistrării.',
          '<b>Gajul</b> (amanetul): presupune <b>deposedarea</b> debitorului; se predă bunul creditorului sau unui terț.',
          '<b>Privilegiile</b>: preferință legală (creanțe salariale, fiscale, cheltuieli judiciare, cheltuieli de înmormântare, cheltuieli de conservare).',
          '<b>Fidejusiunea</b> (cauțiunea): garanție <b>personală</b> (nu reală) — fidejusorul răspunde cu întregul patrimoniu personal; beneficiul de discuțiune și de diviziune.'
        ]
      }
    ],
    grila:'Detenția precară <b>nu poate duce la uzucapiune</b>. Posesorul de bună-credință: <b>fructe da, producte nu</b>. Uzucapiune extratabulară: <b>10 ani</b>; tabulară: <b>5 ani</b>. Revendicare mobiliară față de dobânditorul de bună-credință cu titlu oneros: proprietarul pierde (excepție: bunuri furate/pierdute → <b>3 ani</b>). Ipoteca ≠ gaj: ipoteca nu implică deposedare.'
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
  }
];

// ── Randare ──────────────────────────────────────────────────────────────────

function renderFise(){
  var c=document.getElementById('fise-container'); if(!c) return;
  if(c.dataset.rendered==='1') return;
  c.dataset.rendered='1';
  c.innerHTML='';
  var hdr=document.createElement('div'); hdr.className='fise-hdr';
  hdr.innerHTML='<span class="fise-htitle">📋 Fișe de sinteză</span><span class="fise-hsub">W01–W08 · Drept Civil · NCC 2011 la zi</span>';
  c.appendChild(hdr);
  FISE_DATA.forEach(function(f){
    var card=document.createElement('div'); card.className='fisa-card'; card.id='fisa-'+f.id;
    var head=document.createElement('div'); head.className='fisa-head';
    head.innerHTML='<span class="fisa-wk">'+f.wk+'</span><span class="fisa-dates">'+f.dates+'</span><span class="fisa-title">'+f.title+'</span><span class="fisa-chev">▾</span>';
    head.onclick=function(){_toggleFisa(f.id);};
    var body=document.createElement('div'); body.className='fisa-body'; body.id='fisab-'+f.id;
    var html='';
    f.sections.forEach(function(s){
      html+='<div class="fisa-sec"><div class="fisa-stitle">'+s.icon+' '+s.title+'</div><ul class="fisa-list">';
      s.items.forEach(function(it){ html+='<li>'+it+'</li>'; });
      html+='</ul></div>';
    });
    html+='<div class="fisa-grila"><span class="fisa-glbl">💡 La grilă — atenție</span>'+f.grila+'</div>';
    body.innerHTML=html;
    card.appendChild(head); card.appendChild(body);
    c.appendChild(card);
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
    +'.fise-hdr{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;flex-wrap:wrap;gap:6px}'
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
    +'.fisa-glbl{display:block;font-size:10px;font-weight:800;color:var(--gr);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);
})();
