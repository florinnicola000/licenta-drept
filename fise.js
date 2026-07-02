// fise.js — Fișe de sinteză juridică · W01–W16 Drept Civil (NCC 2011, la zi)
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
  }
];

// ── Randare ──────────────────────────────────────────────────────────────────

var FISE_CAT_LBL={civ:'⚖️ Drept Civil',pen:'🔒 Drept Penal',pciv:'📜 Procedură Civilă',ppen:'🛡️ Procedură Penală',lat:'🏛️ Latină juridică'};

function _buildCard(f){
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
  var gPts=f.grila.split(/\.\s+(?=[A-ZĂÎȘȚ<🎯⚖️])/);
  var gHtml=gPts.map(function(p){return '<li>'+p.replace(/\.$/,'')+'.</li>';}).join('');
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
    +'.fisa-glist b{color:var(--lime)}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);
})();
