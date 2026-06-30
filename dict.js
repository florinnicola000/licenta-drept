// dict.js — Dicționar juridic comun (plan_studiu.html + index.html)
// 142 termeni: Civil · Penal · Proc. Civ. · Proc. Pen. · Latină juridică

const DICT = [
// ─── DREPT CIVIL — Teoria Generală a AJC ────────────────────────────────
{t:'act juridic civil',mat:'civ',art:'art. 1166 C.civ.',d:'Manifestare de voință făcută cu intenția de a produce efecte juridice (a crea, modifica sau stinge un raport juridic civil). Ex: contractul, testamentul, acceptarea moștenirii.'},
{t:'capacitate de folosință',mat:'civ',art:'art. 34-35 C.civ.',d:'Aptitudinea persoanei de a avea drepturi și obligații civile. Începe la naștere (sau din momentul concepției, dacă copilul se naște viu) și se stinge la moarte.'},
{t:'capacitate de exercițiu',mat:'civ',art:'art. 37-48 C.civ.',d:'Aptitudinea de a-și exercita drepturile și asuma obligații prin acte juridice proprii. Este deplină de la 18 ani. Minorii 14-18 ani au capacitate restrânsă; sub 14 ani — lipsă de capacitate.'},
{t:'consimțământ',mat:'civ',art:'art. 1204 C.civ.',d:'Voința exteriorizată a unei persoane de a încheia un act juridic. Trebuie să fie liber, serios, conștient și neviciat (fără eroare, dol, violență sau leziune).'},
{t:'dol',mat:'civ',art:'art. 1214-1215 C.civ.',d:'Viciu de consimțământ: inducerea în eroare a celeilalte părți prin mijloace frauduloase (minciuni, manopere dolosive) pentru a o determina să încheie actul. Sancțiune: nulitate relativă.'},
{t:'eroare',mat:'civ',art:'art. 1207-1213 C.civ.',d:'Viciu de consimțământ: reprezentarea greșită a realității la momentul încheierii actului. Este relevantă juridic doar eroarea esențială (poartă asupra naturii actului, obiectului, persoanei) și scuzabilă. Sancțiune: nulitate relativă.'},
{t:'violență',mat:'civ',art:'art. 1216-1220 C.civ.',d:'Viciu de consimțământ: amenințarea cu un rău (fizic, patrimonial sau moral) care inspiră o temere ce determină persoana să încheie actul. Poate fi exercitată și de un terț. Sancțiune: nulitate relativă.'},
{t:'leziune',mat:'civ',art:'art. 1221-1224 C.civ.',d:'Viciu de consimțământ: disproporție vădită de valoare între prestații la momentul încheierii actului. Se aplică, de regulă, minorilor. Sancțiune: nulitate relativă sau reducerea prestației excesive.'},
{t:'nulitate absolută',mat:'civ',art:'art. 1250-1252 C.civ.',d:'Sancțiune care desființează actul încheiat cu încălcarea unei norme de ordine publică. Caracteristici: poate fi invocată de oricine și din oficiu, e imprescriptibilă și NU poate fi confirmată.'},
{t:'nulitate relativă',mat:'civ',art:'art. 1248-1249 C.civ.',d:'Sancțiune care desființează actul încheiat cu încălcarea unei norme ce ocrotește un interes privat. Caracteristici: o invocă doar cel ocrotit, prescriptibilă (3 ani), poate fi confirmată expres sau tacit.'},
{t:'prescripție extinctivă',mat:'civ',art:'art. 2500-2502 C.civ.',d:'Stingerea dreptului la acțiune (nu a dreptului subiectiv în sine!) prin neexercitarea lui în termenul legal. Termenul general este de 3 ani (art. 2517). Dreptul subiectiv rămâne, dar nu mai poate fi apărat în instanță.'},
{t:'decădere',mat:'civ',art:'art. 2545-2550 C.civ.',d:'Pierderea dreptului subiectiv însuși prin neexercitarea lui în termenul legal. Mai severă decât prescripția — nu poate fi suspendată sau întreruptă și stinge dreptul, nu doar acțiunea.'},
{t:'condiție suspensivă',mat:'civ',art:'art. 1396-1411 C.civ.',d:'Modalitate a actului juridic prin care nașterea drepturilor și obligațiilor depinde de un eveniment viitor și nesigur. Ex: „îți donez mașina dacă termini facultatea."'},
{t:'condiție rezolutorie',mat:'civ',art:'art. 1396-1411 C.civ.',d:'Modalitate prin care desființarea drepturilor și obligațiilor depinde de un eveniment viitor și nesigur. Ex: „contractul se desface dacă te recăsătorești."'},
{t:'termen',mat:'civ',art:'art. 1411-1420 C.civ.',d:'Modalitate a actului juridic prin care exercițiul drepturilor (termen suspensiv) sau stingerea lor (termen extinctiv) este amânată până la un eveniment viitor și SIGUR.'},
{t:'cauza actului juridic',mat:'civ',art:'art. 1235-1239 C.civ.',d:'Motivul determinant care a condus la încheierea actului (scopul imediat + scopul mediat). Trebuie să existe, să fie reală și licită. O cauză ilicită sau imorală atrage nulitatea absolută.'},
{t:'obiectul actului juridic',mat:'civ',art:'art. 1225-1234 C.civ.',d:'Prestația la care se obligă părțile: a da, a face sau a nu face ceva. Trebuie să fie determinat sau determinabil, posibil, licit și în circuitul civil.'},
{t:'formă solemnă',mat:'civ',art:'art. 1244 C.civ.',d:'Formă cerută de lege pentru valabilitatea actului (ad validitatem). Ex: donația, ipoteca imobiliară, testamentul autentic — necesită forma autentică notarială. Lipsa formei atrage nulitatea absolută.'},
// ─── DREPT CIVIL — Drepturi Reale ───────────────────────────────────────
{t:'drept real',mat:'civ',art:'art. 551 C.civ.',d:'Drept subiectiv civil care conferă titularului o putere directă și imediată asupra unui bun, opozabilă tuturor (erga omnes). Ex: proprietatea, uzufructul, ipoteca.'},
{t:'drept de proprietate',mat:'civ',art:'art. 555 C.civ.',d:'Dreptul real principal și complet, care conferă titularului cele trei atribute: posesia (ius possidendi), folosința (ius utendi și ius fruendi) și dispoziția (ius abutendi) asupra bunului.'},
{t:'dezmembrăminte',mat:'civ',art:'art. 693 C.civ.',d:'Drepturi reale constituite asupra bunului altuia prin desprinderea unor atribute din dreptul de proprietate: uzufruct, uz, abitație, servitute, superficie. Titularul nu mai are proprietate deplină.'},
{t:'uzufruct',mat:'civ',art:'art. 703-748 C.civ.',d:'Drept real care conferă uzufructuarului dreptul de a folosi bunul altuia și de a-i culege fructele, cu obligația de a-i conserva substanța. Este temporar (cel mult viager pentru persoanele fizice).'},
{t:'uz',mat:'civ',art:'art. 749-752 C.civ.',d:'Drept real similar uzufructului, dar mai restrâns: titularul poate folosi bunul și culege fructele doar pentru nevoile proprii și ale familiei sale.'},
{t:'abitație',mat:'civ',art:'art. 749 C.civ.',d:'Dreptul de uz care poartă asupra unei locuințe. Titularul poate locui în imobil împreună cu familia sa. Netransmisibil și insesizabil (nu poate fi urmărit de creditori).'},
{t:'servitute',mat:'civ',art:'art. 755-772 C.civ.',d:'Sarcină impusă unui imobil (fondul aservit) pentru uzul și utilitatea altui imobil (fondul dominant) aparținând altui proprietar. Ex: drept de trecere, drept de vedere.'},
{t:'superficie',mat:'civ',art:'art. 693-702 C.civ.',d:'Dreptul de a avea sau edifica o construcție/plantație pe terenul altuia. Superficiarul dobândește drept de proprietate asupra construcției și drept de folosință asupra terenului. Durată max. 99 ani.'},
{t:'posesie',mat:'civ',art:'art. 916-929 C.civ.',d:'Stare de fapt constând în exercitarea de fapt a prerogativelor proprietății. Are două elemente: corpus (stăpânire materială) și animus (intenția de a se comporta ca proprietar). ≠ detenția precară.'},
{t:'uzucapiune',mat:'civ',art:'art. 930-934 C.civ.',d:'Mod originar de dobândire a dreptului de proprietate prin posesia utilă a unui bun pe durata prevăzută de lege. Tabulară (art. 930): bună-credință + 5 ani. Extratabulară (art. 931): posesie utilă 10 ani.'},
{t:'uzucapiune tabulară',mat:'civ',art:'art. 930 C.civ.',d:'Dobândirea dreptului de proprietate imobiliară de la o persoană care a înscris cu bună-credință în cartea funciară un drept ce nu-i aparținea, prin posedarea bunului timp de 5 ani.'},
{t:'uzucapiune extratabulară',mat:'civ',art:'art. 931 C.civ.',d:'Dobândirea dreptului de proprietate imobiliară prin posesia utilă timp de 10 ani, indiferent de situația din cartea funciară. Posesorul trebuie să fi posedat cu bună-credință cel puțin 5 ani.'},
{t:'acțiune în revendicare',mat:'civ',art:'art. 563 C.civ.',d:'Acțiune reală prin care proprietarul care a pierdut posesia unui bun cere instanței restituirea lui de la cel care îl deține fără drept. Regula: imprescriptibilă pentru imobile.'},
{t:'accesiune',mat:'civ',art:'art. 567-601 C.civ.',d:'Mod de dobândire a proprietății: bunul mai mic se alipește bunului mai mare, iar proprietarul bunului principal devine proprietarul întregului. Ex: construcție pe terenul altuia, aluviune.'},
{t:'carte funciară',mat:'civ',art:'art. 876-915 C.civ.',d:'Registru public în care se înscriu drepturile reale imobiliare și sarcinile asupra imobilelor. Înscrierea (intabularea) are, de regulă, efect de opozabilitate față de terți; în sistemul constitutiv — și efect de constituire a dreptului.'},
{t:'intabulare',mat:'civ',art:'art. 885 C.civ.',d:'Înscrierea definitivă în cartea funciară a drepturilor reale imobiliare. Produce efect de opozabilitate (sau constitutiv, în sistemul cărții funciare stricte) față de terți.'},
{t:'ipotecă',mat:'civ',art:'art. 2343 C.civ.',d:'Garanție reală imobiliară sau mobiliară, accesorie și indivizibilă, care nu deposedează debitorul. Conferă creditorului ipotecar dreptul de urmărire și de preferință față de alți creditori.'},
{t:'gaj',mat:'civ',art:'art. 2480 C.civ.',d:'Garanție reală mobiliară constituită prin remiterea bunului către creditor (gaj cu deposedare) sau fără deposedare. Conferă creditorului gajist drept de preferință la urmărire.'},
// ─── DREPT CIVIL — Obligații ────────────────────────────────────────────
{t:'obligație de mijloace',mat:'civ',d:'Obligație prin care debitorul trebuie să depună toate diligențele posibile pentru a atinge un rezultat, fără a garanta obținerea lui. Neexecutarea se dovedește prin lipsa diligenței. Ex: obligația medicului față de pacient.'},
{t:'obligație de rezultat',mat:'civ',d:'Obligație prin care debitorul garantează producerea unui rezultat determinat. Neatingerea rezultatului înseamnă automat neexecutare. Ex: obligația transportatorului de a livra marfa.'},
{t:'gestiune de afaceri',mat:'civ',art:'art. 1330-1340 C.civ.',d:'Fapt juridic licit: o persoană (gerantul) administrează, fără să fie mandatată, interesele altei persoane (geratul) care nu are cunoștință. Gerantul are drept la restituirea cheltuielilor utile.'},
{t:'plată nedatorată',mat:'civ',art:'art. 1341-1344 C.civ.',d:'Fapt juridic licit: o persoană plătește din eroare o datorie inexistentă sau a altei persoane. Cel care a primit este obligat la restituire (accipiens → solvens).'},
{t:'îmbogățire fără justă cauză',mat:'civ',art:'art. 1345-1348 C.civ.',d:'Fapt juridic licit: patrimoniul unei persoane crește fără justificare legală sau contractuală în dauna alteia. Dă naștere obligației de restituire. Acțiunea este subsidiară (de ultimă instanță).'},
{t:'răspundere civilă delictuală',mat:'civ',art:'art. 1349-1395 C.civ.',d:'Obligația de a repara prejudiciul cauzat altuia printr-o faptă ilicită. Presupune patru condiții cumulative: faptă ilicită + prejudiciu + raport de cauzalitate + vinovăție.'},
{t:'prejudiciu',mat:'civ',art:'art. 1381 C.civ.',d:'Consecința negativă (materială sau morală) suferită de o persoană. Trebuie să fie cert, direct, personal și nereparat anterior. Poate fi patrimonial (pierdere bănească) sau nepatrimonial (daune morale).'},
{t:'vinovăție',mat:'civ',art:'art. 1357 C.civ.',d:'Atitudinea subiectivă a autorului față de fapta sa și urmările ei. Formele: intenție (directă/indirectă) și culpă (imprudență = cu prevedere / neglijență = fără prevedere).'},
{t:'răspundere obiectivă',mat:'civ',art:'art. 1372-1376 C.civ.',d:'Răspundere fără vinovăție proprie, întemeiată pe ideea de risc sau de garanție. Ex: răspunderea comitentului pentru prepus, pentru animale, pentru lucruri.'},
{t:'acțiune oblică',mat:'civ',art:'art. 1560-1561 C.civ.',d:'Mijloc de protecție a creditorului: exercitarea drepturilor patrimoniale neglijate ale debitorului în locul acestuia (în numele debitorului). Creditorul nu câștigă direct — sumele intră în patrimoniul debitorului.'},
{t:'acțiune pauliană',mat:'civ',art:'art. 1562-1565 C.civ.',d:'Mijloc de protecție a creditorului: atacarea actelor juridice prin care debitorul și-a micșorat fraudulos patrimoniul, în dauna creditorului. Creditorul care câștigă obține inopozabilitatea actului față de el.'},
{t:'solidaritate',mat:'civ',art:'art. 1434-1460 C.civ.',d:'Mai mulți debitori (solidaritate pasivă) sau creditori (solidaritate activă) sunt ținuți față de aceeași creanță în totalitate. Fiecare debitor poate fi urmărit pentru tot. NU se prezumă — trebuie stipulată.'},
{t:'cesiune de creanță',mat:'civ',art:'art. 1566-1584 C.civ.',d:'Contract prin care creditorul (cedent) transmite creanța sa unui terț (cesionar) fără acordul debitorului. Debitorul (debitor cedat) trebuie notificat sau trebuie să accepte cesiunea pentru ca aceasta să-i fie opozabilă.'},
{t:'subrogație',mat:'civ',art:'art. 1593-1598 C.civ.',d:'Înlocuirea creditorului inițial cu un terț care a plătit datoria în locul debitorului. Terțul (subrogat) preia toate drepturile și garanțiile creditorului plătit.'},
{t:'rezoluțiune',mat:'civ',art:'art. 1549-1554 C.civ.',d:'Desființarea retroactivă a unui contract sinalagmatic pentru neexecutarea culpabilă a obligațiilor de către una din părți. Efecte: repunerea în situația anterioară (restituirea prestațiilor).'},
{t:'reziliere',mat:'civ',art:'art. 1549 C.civ.',d:'Încetarea pentru viitor (fără efect retroactiv) a unui contract cu executare succesivă (ex: locațiune, prestații periodice) pentru neexecutare culpabilă.'},
{t:'simulație',mat:'civ',art:'art. 1289-1294 C.civ.',d:'Mecanism prin care părțile încheie un act aparent (public) care ascunde un act secret (real). Actul secret prevalează între părți; terții de bună-credință se pot prevala de actul public.'},
{t:'novație',mat:'civ',art:'art. 1609-1614 C.civ.',d:'Mod de stingere a unei obligații prin înlocuirea ei cu o obligație nouă (schimb de creditor, debitor sau obiect). Stinge garanțiile obligației vechi, dacă nu se stipulează altfel.'},
{t:'compensație',mat:'civ',art:'art. 1616-1623 C.civ.',d:'Mod de stingere a obligațiilor reciproce între aceleași persoane, până la concurența celei mai mici. Legală (operează de drept) sau convențională (prin acordul părților).'},
{t:'confuziune',mat:'civ',art:'art. 1624-1628 C.civ.',d:'Mod de stingere a unei obligații când calitățile de creditor și debitor se reunesc în aceeași persoană (ex: moștenitorul care acceptă succesiunea devine creditor și debitor față de sine).'},
{t:'remitere de datorie',mat:'civ',art:'art. 1629-1633 C.civ.',d:'Renunțarea creditorului la dreptul său de creanță față de debitor, cu acordul acestuia. Liberează debitorul de obligație. Poate fi expresă sau tacită.'},
// ─── DREPT CIVIL — Contracte Speciale ───────────────────────────────────
{t:'contract sinalagmatic',mat:'civ',art:'art. 1171 C.civ.',d:'Contract cu obligații reciproce și interdependente pentru ambele părți. Fiecare este creditor și debitor față de cealaltă. Ex: vânzarea, locațiunea, antrepriza.'},
{t:'garanție contra evicțiunii',mat:'civ',art:'art. 1695-1706 C.civ.',d:'Obligație legală a vânzătorului de a-l garanta pe cumpărător că nu va fi tulburat în dreptul transmis de un terț care invocă un drept anterior asupra bunului.'},
{t:'vicii ascunse',mat:'civ',art:'art. 1707-1714 C.civ.',d:'Defecte ale bunului vândut care existau la predare, nu puteau fi descoperite la o verificare obișnuită și fac bunul impropriu folosinței. Dau dreptul la acțiunea redhibitorie (rezoluțiune) sau estimatorie (reducere preț).'},
{t:'donație',mat:'civ',art:'art. 1011-1048 C.civ.',d:'Contract solemn prin care donatorul transmite, cu titlu gratuit și irevocabil, un drept patrimonial donatarului. Forma autentică este cerută ad validitatem. Revocabilă în cazuri expres prevăzute de lege.'},
{t:'locațiune',mat:'civ',art:'art. 1777-1850 C.civ.',d:'Contract prin care locatorul transmite locatarului folosința temporară a unui bun în schimbul unui preț (chirie). Locatarul nu devine proprietar, ci are doar dreptul de folosință.'},
{t:'mandat',mat:'civ',art:'art. 2009-2071 C.civ.',d:'Contract prin care mandantul împuternicește mandatarul să încheie acte juridice în numele și pe seama sa. Este intuitu personae și esențialmente revocabil. Mandatarul lucrează pe riscul mandantului.'},
{t:'antrepriză',mat:'civ',art:'art. 1851-1880 C.civ.',d:'Contract prin care antreprenorul se obligă față de client să execute pe riscul propriu o lucrare în schimbul unui preț. Diferit de mandat: antreprenorul realizează fapte materiale, nu acte juridice.'},
{t:'fidejusiune',mat:'civ',art:'art. 2280-2320 C.civ.',d:'Contract prin care fidejusorul (garantul personal) se obligă față de creditor să execute obligația debitorului principal dacă acesta nu o face. Este accesorie (urmează soarta obligației principale) și subsidiară.'},
{t:'comodat',mat:'civ',art:'art. 2146-2157 C.civ.',d:'Împrumut de folosință cu titlu gratuit: comodantul transmite comodatarului folosința unui bun, obligat să-l restituie în natură la termenul convenit. Bunul nu se consumă prin folosință.'},
{t:'mutuum',mat:'civ',art:'art. 2158-2170 C.civ.',d:'Împrumut de consumație: împrumutătorul transferă proprietatea unor bunuri fungibile (bani, cereale) împrumutatului, care se obligă să restituie bunuri de același gen, calitate și cantitate.'},
// ─── DREPT CIVIL — Succesiuni ───────────────────────────────────────────
{t:'devoluțiunea moștenirii',mat:'civ',art:'art. 953-1133 C.civ.',d:'Procesul prin care moștenirea se transmite de la defunct la moștenitori, potrivit regulilor legale (clasele de moștenitori, principii) sau voinței testamentare.'},
{t:'reprezentare succesorală',mat:'civ',art:'art. 965-969 C.civ.',d:'Mecanism prin care descendentul unui moștenitor decedat sau nedemn îi ia locul în culegerea moștenirii, primind partea ce i s-ar fi cuvenit. Operează numai în linie descendentă.'},
{t:'nedemnitate succesorală',mat:'civ',art:'art. 958-961 C.civ.',d:'Decăderea din dreptul de a moșteni a persoanei care a săvârșit fapte grave față de defunct sau memoria sa. Ex: condamnarea pentru uciderea cu intenție a defunctului.'},
{t:'rezervă succesorală',mat:'civ',art:'art. 1086-1099 C.civ.',d:'Parte din moștenire de care defunctul nu poate dispune prin liberalități (donații, legate). Moștenitorii rezervatari (descendenți, ascendenți privilegiați, soț) o primesc indiferent de testament.'},
{t:'cotitate disponibilă',mat:'civ',art:'art. 1089 C.civ.',d:'Partea din moștenire de care defunctul poate dispune liber prin donații sau legate (moștenirea minus rezerva). Cu cât sunt mai mulți rezervatari, cu atât cotitatea disponibilă este mai mică.'},
{t:'testament olograf',mat:'civ',art:'art. 1041 C.civ.',d:'Testament scris în întregime, datat și semnat de mâna testatorului. Nu necesită formă notarială. Este totuși supus verificării autenticității în caz de contestare.'},
{t:'legat',mat:'civ',art:'art. 1055-1059 C.civ.',d:'Dispoziție testamentară prin care testatorul lasă un bun individual, o fracțiune din moștenire (legat cu titlu universal) sau întreaga moștenire (legat universal) unui legatar.'},
{t:'reducțiune',mat:'civ',art:'art. 1092-1099 C.civ.',d:'Mecanism prin care donațiile și legatele excesive sunt reduse până la limitele cotității disponibile, pentru a proteja rezerva moștenitorilor rezervatari.'},
// ─── DREPT PENAL — Teoria Generală ─────────────────────────────────────
{t:'infracțiune',mat:'pen',art:'art. 15 C.pen.',d:'Faptă prevăzută de legea penală, săvârșită cu vinovăție, nejustificată și imputabilă persoanei care a săvârșit-o. Cele trei trăsături esențiale: tipicitate, antijuridicitate, imputabilitate.'},
{t:'tipicitate',mat:'pen',d:'Prima trăsătură a infracțiunii: corespondența faptei concrete cu descrierea abstractă din norma de incriminare (modelul legal al infracțiunii). Dacă fapta nu corespunde tiparului legal, nu e infracțiune.'},
{t:'antijuridicitate',mat:'pen',d:'A doua trăsătură a infracțiunii: caracterul contrar dreptului al faptei. Lipsește dacă există o cauză justificativă (legitimă apărare, stare de necesitate, exercitarea unui drept, consimțământul victimei).'},
{t:'imputabilitate',mat:'pen',d:'A treia trăsătură a infracțiunii: posibilitatea de a atribui autorului fapta săvârșită, adică vinovăția acestuia. Lipsește dacă există o cauză de neimputabilitate (iresponsabilitate, minoritate, constrângere, eroare etc.).'},
{t:'intenție directă',mat:'pen',art:'art. 16 alin.(3) lit.a C.pen.',d:'Forma de vinovăție în care autorul prevede rezultatul faptei sale și urmărește producerea lui prin săvârșirea acelei fapte. Cea mai gravă formă de vinovăție.'},
{t:'intenție indirectă',mat:'pen',art:'art. 16 alin.(3) lit.b C.pen.',d:'Forma de vinovăție în care autorul prevede rezultatul faptei sale și, deși nu-l urmărește, acceptă posibilitatea producerii lui. Diferit de culpa cu prevedere: la intenție indirectă autorul acceptă rezultatul.'},
{t:'culpă cu prevedere',mat:'pen',art:'art. 16 alin.(4) lit.a C.pen.',d:'(ușurință) Autorul prevede rezultatul posibil al faptei sale, dar nu-l acceptă, sperând fără temei că nu se va produce. Diferit de intenția indirectă: autorul nu acceptă, ci speră că evită rezultatul.'},
{t:'culpă simplă',mat:'pen',art:'art. 16 alin.(4) lit.b C.pen.',d:'(neglijență) Autorul nu prevede rezultatul faptei sale, deși trebuia și putea să îl prevadă. Ex: șoferul neatent care provoacă un accident fără să anticipeze pericolul.'},
{t:'praeterintenție',mat:'pen',d:'Formă mixtă de vinovăție: autorul săvârșește cu intenție o faptă, dar din aceasta rezultă un efect mai grav pe care nu l-a urmărit și nici acceptat (se produce din culpă). Ex: lovirile cauzatoare de moarte (intenție la lovire, culpă la moarte).'},
{t:'tentativă',mat:'pen',art:'art. 32 C.pen.',d:'Forma imperfectă a infracțiunii: punerea în executare a hotărârii de a săvârși infracțiunea, executare care a fost întreruptă sau nu și-a produs efectul. Este pedepsibilă (cu jumătate din limitele faptei consumate), dacă legea prevede.'},
{t:'cauze justificative',mat:'pen',art:'art. 18-22 C.pen.',d:'Împrejurări care înlătură caracterul antijuridic al faptei, astfel că fapta nu constituie infracțiune. Efect in rem (față de toți participanții): legitima apărare, starea de necesitate, exercitarea unui drept, consimțământul victimei.'},
{t:'cauze de neimputabilitate',mat:'pen',art:'art. 23-31 C.pen.',d:'Împrejurări care înlătură vinovăția autorului, astfel că fapta nu-i este imputabilă. Efect personal (ceilalți participanți pot răspunde): iresponsabilitate, minoritate, constrângere fizică/morală, eroare de fapt, caz fortuit, intoxicație involuntară.'},
{t:'legitimă apărare',mat:'pen',art:'art. 19 C.pen.',d:'Cauză justificativă: fapta săvârșită pentru a respinge un atac material, direct, imediat și injust care pune în pericol vița, integritatea, libertatea, drepturile sau interesele legitime ale celui atacat ori ale altei persoane.'},
{t:'stare de necesitate',mat:'pen',art:'art. 20 C.pen.',d:'Cauză justificativă: fapta săvârșită pentru a salva de la un pericol iminent și inevitabil viața, integritatea, libertatea sau bunurile proprii ori ale altuia. Condiție esențială: pericolul nu putea fi înlăturat altfel.'},
{t:'concurs de infracțiuni',mat:'pen',art:'art. 38-40 C.pen.',d:'Situația în care o persoană a săvârșit două sau mai multe infracțiuni înainte de a fi condamnată definitiv pentru vreuna. Concurs real: fapte distincte; concurs ideal: o singură faptă încadrabilă la mai multe infracțiuni.'},
{t:'recidivă',mat:'pen',art:'art. 41-43 C.pen.',d:'Starea infractorului care săvârșește o nouă infracțiune după ce a fost condamnat definitiv pentru o alta (recidivă postcondamnatorie) sau după executarea pedepsei anterioare (recidivă postexecutorie). Atrage agravarea pedepsei.'},
{t:'coautorat',mat:'pen',art:'art. 46 C.pen.',d:'Formă de participație: două sau mai multe persoane săvârșesc împreună elementul material al infracțiunii. Coautorii răspund în aceeași calitate, fiecare pentru infracțiunea consumată.'},
{t:'instigare',mat:'pen',art:'art. 47 C.pen.',d:'Formă de participație: instigatorul determină cu intenție o altă persoană să săvârșească o faptă prevăzută de legea penală. Pedepsit cu pedeapsa prevăzută de lege pentru autor.'},
{t:'complicitate',mat:'pen',art:'art. 48 C.pen.',d:'Formă de participație: complicele ajută cu intenție la pregătirea sau executarea faptei ori îl sprijină pe autor după săvârșire. Pedepsit cu pedeapsa prevăzută pentru autor, dar instanța poate reduce.'},
// ─── DREPT PENAL — Infracțiuni speciale ─────────────────────────────────
{t:'omor calificat',mat:'pen',art:'art. 189 C.pen.',d:'Varianta agravată a omorului, cu circumstanțe speciale: cu premeditare, din interes material, prin cruzime, de două sau mai multe persoane, prin mijloace de natură a pune în pericol viața mai multor persoane etc.'},
{t:'loviri cauzatoare de moarte',mat:'pen',art:'art. 195 C.pen.',d:'Infracțiune praeterintențională: loviri sau vătămări corporale săvârșite cu intenție, din care a rezultat moartea victimei neacceptată de autor (moartea se produce din culpă). Diferit de omor: lipsește intenția de a ucide.'},
{t:'tâlhărie',mat:'pen',art:'art. 233 C.pen.',d:'Furtul săvârșit prin întrebuințarea de violențe sau amenințări față de o persoană ori punerea victimei în imposibilitate de a se apăra. Absorbție legală: furt + violență/amenințare = tâlhărie.'},
{t:'înșelăciune',mat:'pen',art:'art. 244 C.pen.',d:'Inducerea în eroare a unei persoane prin prezentarea ca adevărată a unei fapte mincinoase sau ca mincinoasă a unei fapte adevărate, în scopul de a obține un folos injust în paguba acesteia.'},
{t:'fals material în înscrisuri oficiale',mat:'pen',art:'art. 320 C.pen.',d:'Contrafacerea unui înscris oficial sau alterarea conținutului său, fie prin adăugiri sau modificări, fie prin orice alte mijloace (ștergere, suprapunere). Comis de orice persoană.'},
{t:'fals intelectual',mat:'pen',art:'art. 321 C.pen.',d:'Consemnarea în cuprinsul unui act oficial, de către un funcționar public care îl întocmește, a unor date sau împrejurări false ori atestarea unor fapte neadevărate. Specific funcționarului public.'},
{t:'uz de fals',mat:'pen',art:'art. 323 C.pen.',d:'Folosirea unui înscris oficial ori sub semnătură privată, știind că este fals, în vederea producerii de consecințe juridice. Infracțiune distinctă de actul de falsificare — poate fi comisă de altă persoană decât falsificatorul.'},
{t:'luare de mită',mat:'pen',art:'art. 289 C.pen.',d:'Fapta funcționarului public care pretinde ori primește bani sau alte foloase necuvenite, sau care acceptă promisiunea lor, în legătură cu îndeplinirea, neîndeplinirea, urgentarea sau întârzierea unui act de serviciu.'},
{t:'trafic de influență',mat:'pen',art:'art. 291 C.pen.',d:'Pretinderea, primirea ori acceptarea de bani sau alte foloase pentru a determina un funcționar public să îndeplinească/neîndeplinească un act în exercitarea funcției. Autorul NU este funcționar — se prevalează de o influență reală sau pretinsă.'},
{t:'abuz în serviciu',mat:'pen',art:'art. 297 C.pen.',d:'Fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, nu îndeplinește un act sau îl îndeplinește în mod defectuos, cauzând o vătămare a drepturilor/intereselor legitime ale unei persoane ori un prejudiciu material.'},
{t:'mărturie mincinoasă',mat:'pen',art:'art. 273 C.pen.',d:'Fapta martorului, expertului sau interpretului de a face afirmații mincinoase, de a nu spune tot ce știe ori de a prezenta probe false în cadrul unui proces. Poate fi retrasă — înlătură răspunderea penală.'},
// ─── PROCEDURĂ CIVILĂ ───────────────────────────────────────────────────
{t:'competență materială',mat:'pciv',art:'art. 94-107 C.pr.civ.',d:'Criteriul care delimitează competența între instanțe de grad diferit (judecătorie, tribunal, curte de apel) în funcție de valoarea litigiului sau natura sa (în materie civilă, familiei, muncii etc.).'},
{t:'competență teritorială',mat:'pciv',art:'art. 107-121 C.pr.civ.',d:'Criteriul care delimitează competența între instanțe de același grad, situate în circumscripții teritoriale diferite. Regula: instanța de la domiciliul/sediul pârâtului. Excepții: instanța de la locul bunului, al executării contractului etc.'},
{t:'excepție procesuală',mat:'pciv',art:'art. 245-248 C.pr.civ.',d:'Mijloc de apărare prin care o parte invocă un viciu de procedură (excepție de procedură: ex. necompetența) sau absența dreptului la acțiune (excepție de fond: ex. prescripția). Nu intră în judecarea fondului.'},
{t:'apel',mat:'pciv',art:'art. 466-482 C.pr.civ.',d:'Cale ordinară de atac cu efect devolutiv: instanța de apel rejudecă atât faptele, cât și dreptul. Poate confirma, modifica sau anula hotărârea primei instanțe. Termen: 30 de zile de la comunicarea hotărârii.'},
{t:'recurs',mat:'pciv',art:'art. 483-502 C.pr.civ.',d:'Cale de atac extraordinară prin care se verifică exclusiv legalitatea hotărârii, pentru motive limitativ prevăzute de art. 488 (lipsa de competență, încălcarea legii, lipsa motivării etc.). Nu rejudecă fondul.'},
{t:'titlu executoriu',mat:'pciv',art:'art. 632 C.pr.civ.',d:'Înscris care constată o creanță certă (existentă), lichidă (determinată în cuantum) și exigibilă (scadentă), ce poate fi pusă în executare silită. Ex: hotărârea judecătorească, actul notarial, titlul de credit.'},
{t:'executare silită',mat:'pciv',art:'art. 622-913 C.pr.civ.',d:'Procedura prin care creditorul, cu ajutorul executorului judecătoresc, constrânge debitorul să-și execute obligația stabilită printr-un titlu executoriu. Forme: urmărire mobiliară, imobiliară, poprire.'},
{t:'poprire',mat:'pciv',art:'art. 780-793 C.pr.civ.',d:'Formă de executare silită prin care se indisponibilizează sumele sau bunurile mobile pe care un terț (terțul poprit) le datorează debitorului urmărit. Ex: poprirea salariului.'},
{t:'contestație la executare',mat:'pciv',art:'art. 712-720 C.pr.civ.',d:'Mijlocul procedural prin care debitorul, creditorul sau un terț poate ataca actele de executare nelegale sau refuzi executarea unui titlu executoriu. Termen: 15 zile de la comunicarea actului de executare.'},
{t:'ordonanță de plată',mat:'pciv',art:'art. 1014-1025 C.pr.civ.',d:'Procedură specială și urgentă pentru recuperarea creanțelor bănești certe, lichide și exigibile. Instanța emite o somație prin care obligă debitorul să plătească în termen de 30 de zile. Titlu executoriu dacă nu e atacată.'},
// ─── PROCEDURĂ PENALĂ ───────────────────────────────────────────────────
{t:'prezumția de nevinovăție',mat:'ppen',art:'art. 4 C.pr.pen.',d:'Principiu fundamental: orice persoană este considerată nevinovată până la stabilirea vinovăției sale printr-o hotărâre penală definitivă. Sarcina probei revine organelor de urmărire penală, nu inculpatului.'},
{t:'reținere',mat:'ppen',art:'art. 209 C.pr.pen.',d:'Măsură preventivă privativă de libertate dispusă de organul de urmărire penală (procuror sau poliție) pe o durată de cel mult 24 de ore, când există probe/indicii rezonabile că persoana a săvârșit o infracțiune.'},
{t:'arest preventiv',mat:'ppen',art:'art. 223-240 C.pr.pen.',d:'Măsură preventivă privativă de libertate dispusă de judecătorul de drepturi și libertăți (în faza de urmărire, pentru 30 zile, cu posibilitate de prelungire) sau de instanță (în faza de judecată).'},
{t:'urmărire penală',mat:'ppen',art:'art. 285-341 C.pr.pen.',d:'Prima fază a procesului penal: organele de urmărire penală (procurorul, organele de cercetare penală) strâng probe cu privire la existența infracțiunii, identificarea suspectului/inculpatului și stabilirea răspunderii penale.'},
{t:'cameră preliminară',mat:'ppen',art:'art. 342-348 C.pr.pen.',d:'Fază procesuală intermediară (între urmărire și judecată): judecătorul de cameră preliminară verifică legalitatea sesizării instanței, a administrării probelor și a efectuării actelor de urmărire penală. Poate exclude probe nelegale.'},
{t:'acord de recunoaștere a vinovăției',mat:'ppen',art:'art. 478-488 C.pr.pen.',d:'Procedură specială: inculpatul recunoaște fapta și vinovăția și acceptă o pedeapsă stabilită prin negociere cu procurorul (în limitele legale). Acordul este confirmat sau infirmat de instanță.'},
{t:'recurs în casație',mat:'ppen',art:'art. 433-451 C.pr.pen.',d:'Cale extraordinară de atac împotriva hotărârilor penale definitive, prin care se verifică exclusiv legalitatea, pentru motive limitativ prevăzute de art. 438 (ex: infracțiunea nu era prevăzută de lege, pedeapsa e în afara limitelor legale).'},
// ─── TERMINOLOGIE LATINĂ JURIDICĂ ───────────────────────────────────────
{t:'erga omnes',mat:'lat',d:'„Față de toată lumea." Drepturile reale (proprietatea, uzufructul etc.) sunt opozabile erga omnes — toate celelalte persoane trebuie să le respecte, nu doar cele care au participat la un contract.'},
{t:'inter partes',mat:'lat',d:'„Între părți." Efectele unui contract se produc doar față de cei care l-au încheiat (principiul relativității). Opusul lui erga omnes.'},
{t:'pacta sunt servanda',mat:'lat',d:'„Contractele trebuie respectate." Principiu fundamental al dreptului civil: un contract legal încheiat are putere de lege între părți (art. 1270 C.civ.) și nu poate fi revocat unilateral.'},
{t:'nemo plus iuris',mat:'lat',d:'„Nimeni nu poate transmite mai multe drepturi decât are el însuși." Principiu care protejează împotriva dobândirii drepturilor de la neproprietar.'},
{t:'res judicata',mat:'lat',d:'„Lucru judecat." Autoritate de lucru judecat — hotărârea judecătorească definitivă nu mai poate fi contestată prin aceeași acțiune de aceleași părți, pentru același obiect și cauză (tripla identitate).'},
{t:'in dubio pro reo',mat:'lat',d:'„În caz de dubiu, în favoarea inculpatului." Dacă după administrarea probelor rămâne o îndoială rezonabilă cu privire la vinovăție, aceasta profită inculpatului. Expresie a prezumției de nevinovăție.'},
{t:'ne bis in idem',mat:'lat',d:'„Nu de două ori pentru același lucru." Principiu conform căruia o persoană nu poate fi judecată sau pedepsită de două ori pentru aceeași faptă. Consacrat constituțional și în CEDO.'},
{t:'ex nunc',mat:'lat',d:'„Din acum." Efectele se produc doar pentru viitor, nu și retroactiv. Ex: rezilierea contractului cu executare succesivă — efecte ex nunc.'},
{t:'ex tunc',mat:'lat',d:'„Din atunci." Efectele se produc retroactiv, de la data actului. Ex: nulitatea și rezoluțiunea sunt sancțiuni cu efecte ex tunc — desființează actul de la origine.'},
{t:'in rem',mat:'lat',d:'Efect față de toată lumea, opozabil tuturor. Ex: cauzele justificative produc efect in rem — dacă fapta e justificată, nu constituie infracțiune pentru niciunul dintre participanți.'},
{t:'in personam',mat:'lat',d:'Efect personal, față de o anumită persoană. Ex: cauzele de neimputabilitate produc efect in personam — înlătură răspunderea penală doar pentru autorul căruia îi sunt aplicabile, nu și pentru ceilalți participanți.'},
{t:'bona fides',mat:'lat',d:'„Bună-credință." Prezumție legală: se presupune că persoana a acționat cinstit, fără a cunoaște un viciu juridic (ex: uzucapiunea tabulară cere buna-credință a posesorului). Opusul: mala fides.'},
{t:'actio in rem',mat:'lat',d:'Acțiune reală — îndreptată împotriva oricui deține bunul sau îl tulbură pe titular, indiferent de persoană. Ex: acțiunea în revendicare. Corespunde drepturilor reale (opozabile erga omnes).'},
{t:'actio in personam',mat:'lat',d:'Acțiune personală — îndreptată împotriva unui debitor determinat, care și-a asumat o obligație față de reclamant. Corespunde drepturilor de creanță (relative, inter partes).'},
{t:'restitutio in integrum',mat:'lat',d:'„Repunerea în situația anterioară." Principiu al efectelor nulității și rezoluțiunii: prestațiile executate se restituie, părțile revin la situația inițială.'},
{t:'culpa in contrahendo',mat:'lat',d:'Răspunderea precontractuală — obligația de a repara prejudiciul cauzat în faza negocierilor, prin ruperea intempestivă sau cu rea-credință a tratativelor, deși cealaltă parte a investit timp și resurse.'},
{t:'intuitu personae',mat:'lat',d:'„În considerarea persoanei." Act juridic încheiat în considerarea calităților personale ale uneia dintre părți (ex: mandatul, societatea de persoane). Eroarea asupra persoanei viciază consimțământul; actul nu poate fi transmis.'},
{t:'numerus clausus',mat:'lat',d:'„Număr închis." Principiu în materia drepturilor reale: lista drepturilor reale este fixată exhaustiv de lege — nu pot fi create drepturi reale noi prin voința părților.'},
{t:'nemo auditur',mat:'lat',d:'„Nimeni nu poate fi ascultat [invocând propria turpitudine]." Principiu: cel care a participat cu rea-credință la un act ilicit nu poate cere restituirea prestației efectuate pe baza acelui act.'},
{t:'lex specialis derogat generali',mat:'lat',d:'Norma specială derogă de la cea generală. Când există un conflict între o normă generală și una specială care reglementează același raport, se aplică norma specială.'},
];

const MAT_LBL = {civ:'Civil',pen:'Penal',pciv:'Proc. Civ.',ppen:'Proc. Pen.',lat:'Latină'};
function normTerm(s){
  return s.toLowerCase()
    .replace(/[ăâ]/g,'a').replace(/î/g,'i').replace(/[șş]/g,'s').replace(/[țţ]/g,'t')
    .replace(/[^a-z0-9\s\-]/g,'').trim();
}
const DICT_MAP = new Map();
DICT.forEach(e=>{ DICT_MAP.set(normTerm(e.t), e); });
function legeazUrl(term){
  return 'https://legeaz.net/?s=' + encodeURIComponent(term);
}

// ─── căutare în selecție ───────────────────────────────────────────────────
function findDictEntry(sel){
  const n = normTerm(sel.trim());
  if(n.length < 2) return null;
  if(DICT_MAP.has(n)) return DICT_MAP.get(n);
  let best=null, bestLen=0;
  DICT_MAP.forEach((entry,key)=>{
    if(key.length>bestLen && n.includes(key)){ best=entry; bestLen=key.length; }
  });
  return best;
}

// ─── popup ────────────────────────────────────────────────────────────────
let _popup=null, _popEntry=null;

function showPopup(entry, cx, cy){
  _popEntry=entry;
  document.getElementById('dp-term').textContent=entry.t;
  document.getElementById('dp-def').textContent=entry.d;
  document.getElementById('dp-art').textContent=entry.art||'';
  document.getElementById('dp-legeaz').href=legeazUrl(entry.t);
  _popup.style.left='0'; _popup.style.top='0'; _popup.style.display='block';
  const pw=_popup.offsetWidth, ph=_popup.offsetHeight;
  const vw=window.innerWidth, vh=window.innerHeight;
  let lx=cx-pw/2, ly=cy+14;
  lx=Math.max(8,Math.min(vw-pw-8,lx));
  if(ly+ph>vh-8) ly=cy-ph-10;
  _popup.style.left=lx+'px'; _popup.style.top=(ly+window.scrollY)+'px';
}
function closePopup(){ if(_popup) _popup.style.display='none'; _popEntry=null; }
function goToDict(){
  const entry=_popEntry; closePopup();
  if(typeof showPanel==='function' && document.getElementById('panel-dict')){
    showPanel('dict');
    setTimeout(()=>{
      const s=document.getElementById('dict-search');
      if(s) s.value=entry?entry.t:'';
      if(typeof renderDict==='function') renderDict();
    },60);
  } else {
    window.open('plan_studiu.html',entry?'_blank':'_blank');
  }
}

function handleSelection(){
  const sel=window.getSelection();
  if(!sel||sel.isCollapsed){ closePopup(); return; }
  const txt=sel.toString();
  if(txt.length<2||txt.length>100){ closePopup(); return; }
  const entry=findDictEntry(txt);
  if(!entry){ closePopup(); return; }
  const r=sel.getRangeAt(0).getBoundingClientRect();
  showPopup(entry,(r.left+r.right)/2,r.bottom);
}

// ─── injecție CSS + HTML popup ────────────────────────────────────────────
(function initDict(){
  const st=document.createElement('style');
  st.textContent='#dict-popup{position:fixed;z-index:400;max-width:320px;min-width:200px;\n  background:#1a2e1c;border:1.5px solid var(--gr,#4caf50);border-radius:12px;\n  padding:13px 14px 11px;box-shadow:0 8px 32px #000a;display:none}\n#dp-term{font-size:13px;font-weight:800;color:var(--lime,#e8f5e9);margin-bottom:5px;padding-right:18px}\n#dp-def{font-size:12px;color:var(--sub,#8caf7a);line-height:1.5}\n#dp-art{font-size:10px;color:var(--gr,#4caf50);margin-top:4px;font-weight:600}\n#dp-actions{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap}\n.dp-btn{font-size:10px;font-weight:700;padding:4px 10px;border-radius:8px;\n  border:none;cursor:pointer;text-decoration:none;display:inline-block}\n#dp-more{background:#243d27;color:var(--lime,#e8f5e9)}\n#dp-legeaz{background:#4caf5022;color:var(--gr,#4caf50);border:1px solid #4caf5044}\n#dp-close{position:absolute;top:8px;right:10px;background:none;border:none;\n  color:var(--sub,#8caf7a);font-size:16px;cursor:pointer;line-height:1;padding:0}';
  document.head.appendChild(st);
  const d=document.createElement('div');
  d.innerHTML='<div id="dict-popup">\n  <button id="dp-close" onclick="closePopup()">✕</button>\n  <div id="dp-term"></div>\n  <div id="dp-def"></div>\n  <div id="dp-art"></div>\n  <div id="dp-actions">\n    <button class="dp-btn" id="dp-more" onclick="goToDict()">→ Dicționar</button>\n    <a class="dp-btn" id="dp-legeaz" target="_blank" rel="noopener">🔗 legeaz.net</a>\n  </div>\n</div>';
  document.body.appendChild(d.firstChild);
  _popup=document.getElementById('dict-popup');
  document.addEventListener('mouseup',e=>{ if(_popup.contains(e.target)) return; handleSelection(); });
  document.addEventListener('touchend',e=>{ if(_popup.contains(e.target)) return; setTimeout(handleSelection,120); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closePopup(); });
  document.addEventListener('mousedown',e=>{ if(_popup&&!_popup.contains(e.target)) closePopup(); });
})();
