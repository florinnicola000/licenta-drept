// tf.js — ✅/❌ Adevărat / Fals juridic (ldr-v139)
// 70 afirmații: adevărate sau false? Logică + CSS injectate.
// Containerele statice în index.html: #tf-panel, #tf-controls, #tf-score,
// #tf-card, #tf-stmt, #tf-feedback, #tf-btns, #tf-next, #tf-win

const TF = [
  /* ── DREPT CIVIL – Capacitate, acte juridice ── */
  {s:'Capacitatea de exercițiu deplină se dobândește de la vârsta de 16 ani.',ok:false,fix:'Se dobândește la 18 ani (art. 38 NCC). La 16 ani = capacitate de exercițiu RESTRÂNSĂ.',mat:'civ'},
  {s:'Minorul care se căsătorește dobândește capacitate de exercițiu deplină de la data căsătoriei.',ok:true,fix:'Corect — art. 39 NCC. Se menține chiar dacă ulterior căsătoria e desființată.',mat:'civ'},
  {s:'Nulitatea absolută este imprescriptibilă extinctiv — poate fi invocată oricând.',ok:true,fix:'Corect — art. 1249 NCC. Nulitatea absolută nu se stinge prin prescripție. ≠ nulitate relativă (3 ani).',mat:'civ'},
  {s:'Nulitatea relativă poate fi invocată de oricine are interes, inclusiv de terți.',ok:false,fix:'Nulitatea relativă poate fi invocată numai de persoana ale cărei interese au fost lezate (art. 1248 NCC). Nulitatea ABSOLUTĂ poate fi invocată de oricine.',mat:'civ'},
  {s:'Dolul (viciu de consimțămînt) presupune violență fizică sau morală exercitată asupra cocontractantului.',ok:false,fix:'Dolul = manopere dolosive / înșelăciune (art. 1214 NCC). Violența e un viciu de consimțămînt DISTINCT (art. 1216).',mat:'civ'},
  {s:'Nulitatea relativă se acoperă prin confirmare expresă sau tacită.',ok:true,fix:'Corect — art. 1261–1265 NCC: nulitatea relativă poate fi confirmată de titularul acțiunii (expres sau prin executare voluntară). Nulitatea absolută nu se poate confirma.',mat:'civ'},
  {s:'Termenul general de prescripție extinctivă este de 3 ani.',ok:true,fix:'Corect — art. 2517 NCC: dacă legea nu prevede alt termen, dreptul la acțiune se prescrie în 3 ani.',mat:'civ'},
  {s:'Prescripția extinctivă se întrerupe prin introducerea cererii de chemare în judecată.',ok:true,fix:'Corect — art. 2537 pct. 2 NCC: prescripția se întrerupe prin acțiune, recunoaștere sau act de executare silită.',mat:'civ'},
  {s:'Acțiunea în simulație este prescriptibilă în termenul general de 3 ani.',ok:false,fix:'Acțiunea în simulație (declaratorie) este IMPRESCRIPTIBILĂ atât între părți cât și față de terți (art. 1289–1294 NCC).',mat:'civ'},
  {s:'Actul secret din simulație prevalează față de actul aparent în raporturile dintre părțile simulației.',ok:true,fix:'Corect — art. 1289 NCC: între părți guvernează actul real (secret). Terții de BF pot invoca actul aparent.',mat:'civ'},

  /* ── DREPT CIVIL – Contracte, obligații ── */
  {s:'Riscul bunului individual determinat vândut trece la cumpărător de la momentul transferului proprietății.',ok:false,fix:'Cât timp bunul nu e predat, riscul rămâne la VÂNZĂTOR (debitorul predării) — art. 1274 NCC (res perit debitori). NCC a răsturnat vechiul res perit domino!',mat:'civ'},
  {s:'Vânzarea bunului altuia este valabilă sub NCC.',ok:true,fix:'Corect — art. 1683 NCC. Vânzătorul trebuie să procure bunul. Neexecutare → rezoluțiune + daune (nu nulitate ca sub vechiul cod).',mat:'civ'},
  {s:'La promisiunea bilaterală de vânzare, termenul de prescripție al acțiunii în executare este de 3 ani.',ok:false,fix:'Termenul special: 6 luni de la data la care contractul trebuia încheiat (art. 1669 al. 2 NCC). Capcana clasică!',mat:'civ'},
  {s:'La vânzarea cu plata în rate și rezerva proprietății, riscul trece la cumpărător de la predare, nu de la plata integrală.',ok:true,fix:'Corect — art. 1755 NCC: excepție expresă de la art. 1274. Riscul trece de la PREDARE, chiar dacă proprietatea n-a trecut încă.',mat:'civ'},
  {s:'Donația poate fi făcută verbal dacă valoarea bunului este sub 25.000 lei.',ok:false,fix:'Donația necesită formă autentică notarială ad validitatem (art. 1011 NCC). Excepția „dar manual" cere și REMITERE EFECTIVĂ + max 25.000 lei, nu doar acord verbal.',mat:'civ'},
  {s:'Survenirea de copil este cauză legală de revocare a donației sub NCC.',ok:false,fix:'Sub NCC, survenirea de copil NU mai e cauza de revocare (era în fostul cod). Există doar 2 cauze legale: neexecutarea sarcinii + ingratitudinea (art. 1020 NCC).',mat:'civ'},
  {s:'Donația între soți este revocabilă numai în timpul căsătoriei.',ok:true,fix:'Corect — art. 1031 NCC: soțul donator poate revoca donația oricând în timpul căsătoriei. După desfacere → irevocabilă.',mat:'civ'},
  {s:'La cesiunea de contract, cedentul rămâne ținut față de cedat dacă nu s-a stipulat expres exonerarea sa.',ok:false,fix:'Invers: cedentul este LIBERAT din momentul substituirii (regula). Rămâne ținut numai dacă cedatul a declarat că nu-l liberează (art. 1318 NCC). Capcana!',mat:'civ'},
  {s:'Compensația legală operează de drept dacă ambele datorii sunt certe, lichide și exigibile.',ok:true,fix:'Corect — art. 1617 NCC: compensația legală operează ope legis. Instanța constată că a operat, nu o pronunță.',mat:'civ'},
  {s:'Fidejusiunea este un contract consensual care se formează prin simplul acord de voință.',ok:false,fix:'Fidejusiunea este SOLEMNĂ (art. 2282 NCC): necesită formă scrisă ad validitatem, sub sancțiunea nulității absolute!',mat:'civ'},
  {s:'La restituirea prestațiilor, primitorul de bună-credință restituie valoarea cea mai mică dintre valoarea la primire și valoarea la restituire.',ok:true,fix:'Corect — art. 1641 NCC: primitorul BF → valoarea cea mai mică. Primitorul de rea-credință → valoarea cea mai mare. Capcana valorilor!',mat:'civ'},
  {s:'Delegația perfectă stinge ipoteca constituită de delegant pentru datoria veche.',ok:true,fix:'Corect: delegația perfectă = novație prin schimbare de debitor care liberează delegantul și stinge garanțiile constituite de el (dacă nu se stipulează menținerea lor).',mat:'civ'},

  /* ── DREPT CIVIL – Locațiune, succesiuni ── */
  {s:'La locațiunea locuinței, preavizul minim pentru locator la durată nedeterminată este de 30 de zile.',ok:false,fix:'Preavizul minim e de 60 de zile la locațiunea locuinței pe durată nedeterminată (art. 1824 NCC). Regimul general nu prevede un minim fix.',mat:'civ'},
  {s:'La decesul chiriașului, contractul de locațiune a locuinței încetează de drept.',ok:false,fix:'Contractul NU încetează! Continuă cu soțul sau rudele care locuiau împreună cu chiriașul (art. 1834 NCC). Capcana frecventă!',mat:'civ'},
  {s:'Subarendarea este interzisă total, sub sancțiunea nulității absolute.',ok:true,fix:'Corect — art. 1847 NCC: subarendarea e interzisă în orice condiții (≠ sublocațiunea obișnuită, permisă dacă nu e interzisă expres).',mat:'civ'},
  {s:'Termenul de opțiune succesorală este de 1 an de la data deschiderii moștenirii.',ok:true,fix:'Corect — art. 1103 NCC: termenul e de 1 an de la moartea defunctului. Nu 6 luni, nu 3 ani.',mat:'civ'},
  {s:'Moștenitorii legali răspund pentru datoriile moștenirii și cu propriile bunuri sub NCC.',ok:false,fix:'Sub NCC, toți moștenitorii răspund INTRA VIRES — numai cu bunurile succesorale (art. 1114 al. 2). Ultra vires = numai sancțiunea la acceptarea forțată (art. 1119).',mat:'civ'},
  {s:'Copiii nedemnului pot veni la moștenire prin reprezentare succesorală.',ok:true,fix:'Corect — art. 960 NCC: copiii nedemnului vin prin reprezentare și culeg ce ar fi primit nedemnul.',mat:'civ'},
  {s:'Sub NCC, partajul succesoral are efect declarativ, retroactiv de la data deschiderii moștenirii.',ok:false,fix:'Sub NCC, partajul are efect CONSTITUTIV (art. 680 NCC) — proprietatea se dobândește de la data partajului, nu retroactiv. Schimbare față de fostul cod!',mat:'civ'},
  {s:'Testamentul olograf este valabil dacă a fost scris la calculator, tipărit, dar semnat de mână.',ok:false,fix:'Testamentul olograf trebuie integral scris DE MÂNĂ + datat complet (zi, lună, an) + semnat (art. 1041 NCC). Dactilografiat → nulitate absolută.',mat:'civ'},
  {s:'Rezerva succesorală a oricărui rezervatar este de 1/2 din cota sa legală de moștenire.',ok:true,fix:'Corect — art. 1088 NCC: rezerva = 1/2 din cota LEGALĂ a fiecărui rezervatar. Nu fracțiuni fixe din moștenire (fostul cod).',mat:'civ'},
  {s:'Cota soțului supraviețuitor în concurs cu clasa I de moștenitori este de 1/3.',ok:false,fix:'Cota soțului cu cls. I (descendenți) e de 1/4 (art. 972 NCC). 1/3 = concurs cu cls. II ÎNTREAGĂ (ambele categorii). Capcana frecventă!',mat:'civ'},
  {s:'Vânzarea moștenirii (art. 1747 NCC) este posibilă și înainte de deschiderea succesiunii.',ok:false,fix:'Vânzarea moștenirii e posibilă NUMAI DUPĂ deschiderea moștenirii. Pactele asupra succesiunilor nedeschise = nule absolut (art. 956 NCC).',mat:'civ'},
  {s:'La vânzarea moștenirii, vânzătorul garantează compoziția exactă a masei succesorale.',ok:false,fix:'Vânzătorul garantează numai CALITATEA DE MOȘTENITOR și dreptul de a vinde cota (art. 1748 NCC), nu conținutul masei. Cumpărătorul nu poate cere rezoluțiunea dacă masa e mai mică.',mat:'civ'},

  /* ── DREPT PENAL – General ── */
  {s:'Infracțiunea are trei trăsături esențiale: tipicitate, antijuridicitate și imputabilitate.',ok:true,fix:'Corect — art. 15 NCP. Dacă lipsește oricare → fapta nu e infracțiune.',mat:'pen'},
  {s:'Legitima apărare este o cauză de neimputabilitate care înlătură imputabilitatea.',ok:false,fix:'Legitima apărare (art. 19 NCP) este o CAUZĂ JUSTIFICATIVĂ — înlătură ANTIJURIDICITATEA. Cauzele de neimputabilitate (iresponsabilitate, eroare) înlătură imputabilitatea.',mat:'pen'},
  {s:'Intenția indirectă se caracterizează prin aceea că autorul urmărește producerea rezultatului.',ok:false,fix:'La intenția indirectă autorul PREVEDE și ACCEPTĂ rezultatul (nu îl urmărește). Urmărirea = intenție directă. Distincție esențială la grile!',mat:'pen'},
  {s:'Tentativa se pedepsește întotdeauna în dreptul penal român.',ok:false,fix:'Tentativa se pedepsește numai când legea prevede expres (art. 33 NCP). La infracțiunile din culpă nu există tentativă pedepsibilă.',mat:'pen'},
  {s:'La concursul de infracțiuni se aplică pedeapsa cea mai grea + spor de până la 1/3 din totalul celorlalte pedepse.',ok:true,fix:'Corect — art. 39 NCP: cumul juridic cu spor. NU cumulul aritmetic (nu se adaugă pedepsele pur și simplu).',mat:'pen'},
  {s:'Recidiva postcondamnatorie presupune un prim termen — condamnare la pedeapsă mai mare de 1 an.',ok:true,fix:'Corect — art. 41 NCP: primul termen = condamnare STRICT PESTE 1 an. Exact 1 an sau 6 luni → pluralitate intermediară, nu recidivă.',mat:'pen'},
  {s:'Circumstanțele atenuante permit instanței, facultativ, să coboare sub minimul special.',ok:false,fix:'Sub NCP, circumstanțele atenuante reduc OBLIGATORIU limitele speciale cu 1/3 (art. 76 NCP). Nu e facultativ, cum era sub fostul cod!',mat:'pen'},
  {s:'Moartea inculpatului stinge acțiunea penală.',ok:true,fix:'Corect — art. 16 lit. f CPP: moartea = cauza de clasare/încetare, în virtutea principiului personalității răspunderii penale (art. 2 NCP).',mat:'pen'},
  {s:'Principiul non bis in idem interzice rejudecarea pentru aceeași calificare juridică a faptei.',ok:false,fix:'Non bis in idem privește FAPTA MATERIALĂ (conduita concretă), nu calificarea. Re-judecata pentru aceeași faptă cu altă calificare = inadmisibilă.',mat:'pen'},
  {s:'Liberarea condiționată se acordă după executarea a 2/3 din pedeapsa cu închisoarea de până la 10 ani.',ok:true,fix:'Corect — art. 99 NCP: 2/3 pentru pedepse ≤10 ani; 3/4 pentru >10 ani. Cu muncă prestată: 1/2 respectiv 2/3.',mat:'pen'},

  /* ── DREPT PENAL – Special ── */
  {s:'Omorul calificat se pedepsește cu detențiune pe viață sau 15–25 ani.',ok:true,fix:'Corect — art. 189 al. 2 NCP: detențiune pe viață sau 15–25 ani + interzicerea drepturilor.',mat:'pen'},
  {s:'Uciderea unui polițist în exercițiul funcțiunii constituie omor calificat conform art. 189 NCP.',ok:false,fix:'NU — calitatea de polițist/magistrat nu apare în lista art. 189! Se aplică ultrajul (art. 257 NCP). Capcana frecventă!',mat:'pen'},
  {s:'Loviri cauzatoare de moarte (art. 195 NCP) se comit cu praeterintenție.',ok:true,fix:'Corect: praeterintenție = intenție față de lovire + culpă față de deces. Dacă autorul voia/accepta decesul → omor. Totul din culpă → ucidere din culpă.',mat:'pen'},
  {s:'Vătămarea corporală (art. 194 NCP) se urmărește la plângerea prealabilă a victimei.',ok:false,fix:'Vătămarea corporală se urmărește DIN OFICIU. Urmărire la plângere prealabilă: lovire simplă (art. 193), violare de domiciliu, amenințare, hărțuire sexuală.',mat:'pen'},
  {s:'Pragul de zile de îngrijiri medicale care delimitează vătămarea corporală de lovire este de 90 de zile.',ok:true,fix:'Corect — art. 194 NCP: >90 de zile = vătămare corporală. Sub 90 de zile = lovire sau alte violențe (art. 193).',mat:'pen'},
  {s:'La viol (art. 218 NCP), pedeapsa formei de bază este de 3–10 ani.',ok:false,fix:'Pedeapsa a fost majorată prin L. 217/2020 la 5–10 ani. „3–10 ani" = varianta depășită!',mat:'pen'},
  {s:'Violența în familie (art. 199 NCP) majorează maximul special al infracțiunii cu jumătate.',ok:false,fix:'Maximul se majorează cu O PĂTRIME (1/4), nu cu jumătate. Capcana clasică de la grile!',mat:'pen'},
  {s:'Consimțământul victimei nu constituie cauza justificativă la traficul de persoane (art. 210 al. 3 NCP).',ok:true,fix:'Corect — art. 210 al. 3 NCP: consimțămîntul victimei este irelevant datorită mijloacelor coercitive/frauduloase utilizate.',mat:'pen'},
  {s:'Traficul de minori (art. 211 NCP) este o formă agravată a traficului de persoane (art. 210 NCP).',ok:false,fix:'Traficul de minori e INFRACȚIUNE DISTINCTĂ (nu formă agravată). Nu cere mijloace de constrângere; consimțămîntul minorului e irelevant.',mat:'pen'},
  {s:'Autorul falsului material în înscrisuri oficiale care folosește personal înscrisul comite o singură infracțiune.',ok:false,fix:'Comite CONCURS: fals material (art. 320) + uz de fals (art. 323). Absorbția operează numai la falsul în înscrisuri sub semnătură privată (art. 322). Capcana clasică!',mat:'pen'},
  {s:'Luarea de mită este consumată de la momentul pretinderii sau primirii foloaselor.',ok:true,fix:'Corect: consumare la pretindere sau primire, chiar dacă actul de serviciu nu a fost îndeplinit. Capcana frecventă!',mat:'pen'},
  {s:'Favorizarea făptuitorului nu se pedepsește dacă este comisă de un membru de familie al acestuia.',ok:true,fix:'Corect — art. 269 al. 3 + art. 177 NCP: membrul de familie al făptuitorului favorizat nu se pedepsește. Același principiu la tăinuire (art. 270 al. 3).',mat:'pen'},
  {s:'Întreruperea cursului sarcinii (art. 201 NCP) fără consimțămîntul femeii gravide se pedepsește cu 3–10 ani.',ok:true,fix:'Corect — art. 201 al. 1 NCP. Forme agravate: vătămarea femeii → 5–15 ani; moartea femeii → 7–18 ani.',mat:'pen'},
  {s:'Uciderea nou-născutului de mamă imediat după naștere (art. 200 NCP) are același regim ca omorul simplu.',ok:false,fix:'Art. 200 NCP prevede pedeapsă ATENUATĂ — mama acționează imediat după naștere, în stare de tulburare psihică. Circumstanță atenuantă legală specială.',mat:'pen'},
  {s:'Furtul calificat comis de „două persoane împreună" e prevăzut la art. 229 NCP.',ok:false,fix:'NU — art. 229 nu conține „două persoane". „3 sau mai multe persoane" = circumstanță agravantă generală (art. 77). Capcana frecventă!',mat:'pen'},

  /* ── PROCEDURA CIVILĂ ── */
  {s:'Competența teritorială de drept comun este instanța de la domiciliul sau reședința pârâtului.',ok:true,fix:'Corect — art. 107 NCPC: actor sequitur forum rei.',mat:'pciv'},
  {s:'Competența teritorială exclusivă poate fi modificată prin acordul scris al părților.',ok:false,fix:'Competența exclusivă e imperativă (ordine publică) — nu poate fi modificată. Se poate deroga numai de la normele de competență relativă.',mat:'pciv'},
  {s:'Termenul de exercitare a apelului este de 30 de zile de la comunicarea hotărârii.',ok:true,fix:'Corect — art. 468 NCPC: 30 de zile de la COMUNICARE. Nu de la pronunțare!',mat:'pciv'},
  {s:'Recursul permite instanței să administreze orice probe noi.',ok:false,fix:'Recursul e cale de reformare în drept — nu se administrează probe noi în principiu. Se examinează numai legalitatea hotărârii.',mat:'pciv'},
  {s:'Ordonanța de plată se aplică oricărei creanțe bănești, indiferent de titlu.',ok:false,fix:'Ordonanța de plată (art. 1013 NCPC) se aplică numai creanțelor CERTE, LICHIDE și EXIGIBILE constatate PRINTR-UN ÎNSCRIS.',mat:'pciv'},
  {s:'Contestația la executare silită se introduce în termen de 15 zile de la luarea la cunoștință.',ok:true,fix:'Corect — art. 715 NCPC: 15 zile de la data la care contestatorul a luat cunoștință de actul contestat.',mat:'pciv'},
  {s:'Hotărârea definitivă are putere de lucru judecat față de orice persoană, inclusiv terții neimplicați.',ok:false,fix:'Puterea de lucru judecat e RELATIVĂ — față de părțile din proces și succesorii lor (art. 430–431 NCPC). Terții nu sunt afectați.',mat:'pciv'},

  /* ── PROCEDURA PENALĂ ── */
  {s:'Judecătorul de drepturi și libertăți care a dispus arestarea poate judeca ulterior fondul cauzei.',ok:false,fix:'INCOMPATIBILITATE ABSOLUTĂ — separarea funcțiilor judiciare (art. 3 CPP): JDL și judecătorul de fond sunt funcții incompatibile la aceeași cauza.',mat:'ppen'},
  {s:'Nulitățile relative se invocă numai dacă s-a produs o vătămare ce nu poate fi înlăturată altfel.',ok:true,fix:'Corect — art. 282 CPP: pas de nullité sans grief. Vătămarea trebuie dovedită la nulitățile relative. ≠ nulitățile absolute (fără condiția vătămării).',mat:'ppen'},
  {s:'Reținerea poate fi dispusă pe o durată de maximum 24 de ore.',ok:true,fix:'Corect — art. 209 CPP: reținerea poate fi dispusă pe max 24 de ore de organele de cercetare penală.',mat:'ppen'},
  {s:'Tăcerea inculpatului poate fi interpretată ca recunoaștere a vinovăției.',ok:false,fix:'INTERZIS — dreptul la tăcere e garantat (art. 83 lit. a CPP). Tăcerea NU poate fi folosită ca probă sau interpretată împotriva inculpatului.',mat:'ppen'},
  {s:'Principiul tempus regit actum înseamnă că legea procesuală din momentul actului se aplică acelui act.',ok:true,fix:'Corect — art. 13 CPP: legea procesual penală în vigoare la data efectuării actului procedural se aplică acelui act.',mat:'ppen'},
  {s:'Camera preliminară verifică vinovăția inculpatului și dacă fapta a fost săvârșită.',ok:false,fix:'Camera preliminară verifică LEGALITATEA (sesizarea instanței, actele de urmărire penală, probele) — nu fondul cauzei (vinovăția).',mat:'ppen'},
  {s:'Amenda judiciară aplicată unui martor figurează în cazierul judiciar.',ok:false,fix:'Amenda judiciară (art. 283 CPP: 100–5.000 lei) e sancțiune PROCESUALĂ, nu penală — nu apare în cazier. ≠ amenda penală!',mat:'ppen'},
  {s:'Plângerea prealabilă trebuie depusă în termen de 3 luni de la cunoașterea faptei.',ok:true,fix:'Corect — art. 296 CPP: 3 luni de la data la care persoana vătămată a aflat despre săvârșirea faptei.',mat:'ppen'},
];

/* ── State ── */
var TF_STATE={mat:'',pool:[],idx:0,correct:0,total:0,answered:false,autoNext:null};
var TF_BEST=(function(){try{return JSON.parse(localStorage.getItem('ldr_tf_v1'))||{};}catch(e){return{};}})();
function tfSaveBest(){try{localStorage.setItem('ldr_tf_v1',JSON.stringify(TF_BEST));}catch(e){}}
function _tfShuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function _tfEsc(s){return(s||'').replace(/[&<>]/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;'})[c];});}
function tfMatLbl(m){return{civ:'⚖️ Civil',pen:'🔒 Penal',pciv:'📜 Pr. civ.',ppen:'🛡️ Pr. pen.'}[m]||'';}

function renderTFControls(){
  var c=document.getElementById('tf-controls');if(!c)return;c.innerHTML='';
  [['','Toate'],['civ','Civil'],['pen','Penal'],['pciv','Pr. civ.'],['ppen','Pr. pen.']].forEach(function(o){
    var b=document.createElement('button');
    b.className='tf-pill'+(TF_STATE.mat===o[0]?' act':'');
    b.textContent=o[1];
    b.onclick=function(){TF_STATE.mat=o[0];renderTFControls();startTF();};
    c.appendChild(b);
  });
}

function startTF(){
  if(TF_STATE.autoNext){clearTimeout(TF_STATE.autoNext);TF_STATE.autoNext=null;}
  var pool=TF.filter(function(q){return !TF_STATE.mat||q.mat===TF_STATE.mat;});
  TF_STATE.pool=_tfShuffle(pool.slice());
  TF_STATE.idx=0;TF_STATE.correct=0;TF_STATE.total=0;TF_STATE.answered=false;
  var w=document.getElementById('tf-win');if(w)w.style.display='none';
  var fb=document.getElementById('tf-feedback');if(fb){fb.className='';fb.textContent='';}
  var btns=document.getElementById('tf-btns');if(btns){btns.style.display='';btns.style.opacity='1';}
  var nx=document.getElementById('tf-next');if(nx)nx.style.display='none';
  renderTF();
}

function renderTF(){
  var q=TF_STATE.pool[TF_STATE.idx];
  if(!q){tfWin();return;}
  var stmt=document.getElementById('tf-stmt');if(stmt)stmt.textContent=q.s;
  var mat=document.getElementById('tf-mat');if(mat)mat.textContent=tfMatLbl(q.mat);
  var fb=document.getElementById('tf-feedback');if(fb){fb.className='';fb.innerHTML='';}
  var nx=document.getElementById('tf-next');if(nx)nx.style.display='none';
  var btns=document.getElementById('tf-btns');if(btns){btns.style.display='';btns.style.opacity='1';}
  var card=document.getElementById('tf-card');if(card)card.className='tf-card';
  updTFScore();
}

function updTFScore(){
  var el=document.getElementById('tf-score');if(!el)return;
  var tot=TF_STATE.pool.length,done=TF_STATE.idx,c=TF_STATE.correct;
  var key=TF_STATE.mat||'all',best=TF_BEST[key];
  el.innerHTML='<span>✓ <b>'+c+'</b> corecte</span><span>Card <b>'+(done+1)+'</b> / <b>'+tot+'</b></span>'+
    (best?'<span>🏆 record: <b>'+best+'</b></span>':'<span style="color:var(--sf2)">−</span>');
}

function answerTF(userOk){
  if(TF_STATE.answered)return;
  TF_STATE.answered=true;
  var q=TF_STATE.pool[TF_STATE.idx];
  if(!q)return;
  TF_STATE.total++;
  var correct=(userOk===q.ok);
  if(correct)TF_STATE.correct++;
  var card=document.getElementById('tf-card');
  if(card)card.className='tf-card '+(correct?'tf-ok':'tf-ko');
  var fb=document.getElementById('tf-feedback');
  if(fb){
    fb.className='tf-fb show '+(correct?'tf-fb-ok':'tf-fb-ko');
    fb.innerHTML='<span class="tf-fb-badge">'+(correct?'✓ Corect!':'✗ '+(q.ok?'Adevărat!':'Fals!'))+'</span> '+_tfEsc(q.fix);
  }
  var btns=document.getElementById('tf-btns');if(btns)btns.style.opacity='.3';
  var nx=document.getElementById('tf-next');if(nx)nx.style.display='';
  updTFScore();
  TF_STATE.autoNext=setTimeout(function(){nextTF();},2400);
}

function nextTF(){
  if(TF_STATE.autoNext){clearTimeout(TF_STATE.autoNext);TF_STATE.autoNext=null;}
  TF_STATE.idx++;TF_STATE.answered=false;
  if(TF_STATE.idx>=TF_STATE.pool.length){tfWin();return;}
  renderTF();
}

function tfWin(){
  var key=TF_STATE.mat||'all';
  var c=TF_STATE.correct,t=TF_STATE.total;
  var pct=t?Math.round(c/t*100):0;
  var prev=TF_BEST[key],rec=false;
  if(t>0&&(!prev||c>prev)){TF_BEST[key]=c;tfSaveBest();rec=(prev!==undefined);}
  var w=document.getElementById('tf-win');if(!w)return;
  var msgs=['Cunoști legea ca un avocat! ⚖️','Bravo! Nicio capcană nu te-a prins! 🎯','Mergi cu dreptul înainte! 🌟','Perfect — pauză binemeritat. ☕'];
  w.innerHTML='<div class="mw-big">🎉 '+msgs[Math.floor(Math.random()*msgs.length)]+'</div>'+
    '<div class="mw-sub">'+c+' corecte din '+t+' ('+pct+'%)'+(rec?' — <b style="color:var(--gr)">record nou!</b> 🏆':(TF_BEST[key]?' · record: '+TF_BEST[key]:''))+'</div>'+
    '<button onclick="startTF()">🔄 Joc nou</button>';
  w.style.display='block';w.scrollIntoView({behavior:'smooth',block:'center'});
}

/* ── CSS injectat ── */
(function(){
  var css=
    '#tf-controls{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}'
    +'.tf-pill{background:var(--sf2);color:var(--sub);border:1.5px solid transparent;border-radius:16px;padding:5px 12px;font-size:11.5px;font-weight:700;cursor:pointer;transition:.15s}'
    +'.tf-pill.act{background:var(--gr);color:#0f1b10;border-color:var(--gr)}'
    +'#tf-score{display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;font-size:12px;color:var(--sub);margin-bottom:10px}'
    +'#tf-score b{color:var(--lime)}'
    +'.tf-card{background:var(--sf2);border-radius:14px;padding:24px 18px;margin-bottom:12px;border:2px solid var(--sf2);transition:border-color .25s,background .25s;min-height:120px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:8px}'
    +'#tf-stmt{font-size:17px;font-weight:700;color:var(--lime);line-height:1.55}'
    +'#tf-mat{font-size:10px;font-weight:800;letter-spacing:.5px;color:var(--sub);text-transform:uppercase}'
    +'.tf-card.tf-ok{border-color:var(--gr);background:rgba(76,175,80,.12)}'
    +'.tf-card.tf-ko{border-color:var(--err);background:rgba(239,83,80,.12)}'
    +'body.light .tf-card.tf-ok{background:#e8f5e9}'
    +'body.light .tf-card.tf-ko{background:#ffebee}'
    +'.tf-fb{display:none;border-radius:10px;padding:11px 13px;margin-bottom:12px;font-size:12.5px;line-height:1.55}'
    +'.tf-fb.show{display:block}'
    +'.tf-fb.tf-fb-ok{background:rgba(76,175,80,.15);border:1px solid var(--gr);color:#a5d6a7}'
    +'.tf-fb.tf-fb-ko{background:rgba(239,83,80,.15);border:1px solid var(--err);color:#ef9a9a}'
    +'body.light .tf-fb.tf-fb-ok{background:#e8f5e9;color:#1b5e20}'
    +'body.light .tf-fb.tf-fb-ko{background:#ffebee;color:#b71c1c}'
    +'.tf-fb-badge{font-weight:800;margin-right:4px}'
    +'#tf-btns{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;transition:opacity .3s}'
    +'#tf-false-btn,#tf-true-btn{border:none;border-radius:12px;padding:20px 8px;font-size:16px;font-weight:800;cursor:pointer;transition:transform .1s,opacity .15s;letter-spacing:.2px}'
    +'#tf-false-btn{background:#c62828;color:#fff}'
    +'#tf-true-btn{background:#2e7d32;color:#fff}'
    +'#tf-false-btn:active,#tf-true-btn:active{transform:scale(.97);opacity:.85}'
    +'#tf-next button{width:100%;background:var(--sf2);color:var(--lime);border:1.5px solid var(--gr);border-radius:22px;padding:11px 18px;font-size:13px;font-weight:800;cursor:pointer}'
    +'#tf-win{text-align:center;background:var(--sf);border:1.5px solid var(--gr);border-radius:14px;padding:20px 16px;margin-top:14px}'
    +'#tf-win .mw-big{font-size:20px;font-weight:900;color:var(--gr);margin-bottom:6px}'
    +'#tf-win .mw-sub{font-size:13px;color:var(--sub);margin-bottom:14px;line-height:1.5}'
    +'#tf-win button{background:var(--gr);color:#0f1b10;border:none;border-radius:22px;padding:10px 22px;font-size:14px;font-weight:800;cursor:pointer}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
})();
