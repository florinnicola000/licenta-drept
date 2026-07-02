// memory.js — Modul comun „🧩 Memory juridic" (index.html + plan_studiu.html)
// Joc de memorie termen ↔ definiție. Depinde doar de DICT (din dict.js) și de
// containerele cu id-urile: mem-pairs, mem-mat, mem-status, mem-grid, mem-win.
// Pagina oferă glue-ul de deschidere (openMemory / showPanel) + panoul; aici stă
// toată logica + stilul (injectat), ca să nu se dubleze între pagini.

var MEM = {pairs:6, mat:'', cards:[], flipped:[], matched:0, moves:0, lock:false};
var MEM_BEST = (function(){ try{ return JSON.parse(localStorage.getItem('ldr_mem_v1'))||{}; }catch(e){ return {}; } })();
function memSaveBest(){ try{ localStorage.setItem('ldr_mem_v1', JSON.stringify(MEM_BEST)); }catch(e){} }

function _memShuffle(a){ for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function _memEsc(s){ return (s||'').replace(/[&<>]/g, function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;'})[c]; }); }
function memShortDef(d){ d=(d||'').replace(/\s+/g,' ').trim(); if(d.length<=130) return d; var cut=d.slice(0,128); var sp=cut.lastIndexOf(' '); if(sp>90) cut=cut.slice(0,sp); return cut+'…'; }
function memMatLbl(m){ return {civ:'civ',pen:'pen',pciv:'pr.civ',ppen:'pr.pen',lat:'lat'}[m]||m; }

function renderMemControls(){
  var pr=document.getElementById('mem-pairs'); if(pr){ pr.innerHTML='';
    [6,8,10].forEach(function(n){ var b=document.createElement('button'); b.className='mem-pill'+(MEM.pairs===n?' act':''); b.textContent=n; b.onclick=function(){ MEM.pairs=n; renderMemControls(); startMemory(); }; pr.appendChild(b); }); }
  var mt=document.getElementById('mem-mat'); if(mt){ mt.innerHTML='';
    [['','Toate'],['civ','Civil'],['pen','Penal'],['pciv','Pr. civ.'],['ppen','Pr. pen.'],['lat','Latină']].forEach(function(o){ var b=document.createElement('button'); b.className='mem-pill'+(MEM.mat===o[0]?' act':''); b.textContent=o[1]; b.onclick=function(){ MEM.mat=o[0]; renderMemControls(); startMemory(); }; mt.appendChild(b); }); }
}
function startMemory(){
  var win=document.getElementById('mem-win'); if(win) win.style.display='none';
  var pool=DICT.filter(function(e){ return !MEM.mat||e.mat===MEM.mat; });
  var pairs=Math.min(MEM.pairs, pool.length);
  var picks=_memShuffle(pool.slice()).slice(0,pairs);
  var cards=[];
  picks.forEach(function(e,i){ cards.push({id:i,type:'t',mat:e.mat,text:e.t}); cards.push({id:i,type:'d',mat:e.mat,text:memShortDef(e.d)}); });
  _memShuffle(cards);
  MEM.cards=cards; MEM.flipped=[]; MEM.matched=0; MEM.moves=0; MEM.lock=false;
  renderMemGrid(); updMemStatus();
}
function renderMemGrid(){
  var g=document.getElementById('mem-grid'); if(!g) return; g.innerHTML='';
  MEM.cards.forEach(function(c,i){
    var card=document.createElement('div'); card.className='mem-card'; card.dataset.i=i;
    card.innerHTML='<div class="mem-inner"><div class="mem-face mem-back">§</div>'+
      '<div class="mem-face mem-front"><span class="mem-badge mb-'+c.mat+'">'+memMatLbl(c.mat)+'</span>'+
      (c.type==='t'?'<span class="mem-term">'+_memEsc(c.text)+'</span>':'<span class="mem-def">'+_memEsc(c.text)+'</span>')+'</div></div>';
    card.onclick=function(){ memFlip(i); };
    g.appendChild(card);
  });
}
function updMemStatus(){
  var el=document.getElementById('mem-status'); if(!el) return;
  var key=(MEM.mat||'all')+'_'+MEM.pairs; var best=MEM_BEST[key];
  el.innerHTML='<span>Perechi: <b>'+MEM.matched+' / '+(MEM.cards.length/2)+'</b></span><span>Mutări: <b>'+MEM.moves+'</b></span><span>'+(best?('🏆 record: <b>'+best+'</b> mutări'):'🌿 fără grabă')+'</span>';
}
function memFlip(i){
  if(MEM.lock) return;
  var card=document.querySelector('.mem-card[data-i="'+i+'"]');
  if(!card||card.classList.contains('matched')||card.classList.contains('up')) return;
  card.classList.add('up');
  MEM.flipped.push(i);
  if(MEM.flipped.length===2){
    MEM.moves++; MEM.lock=true; updMemStatus();
    var a=MEM.flipped[0], b=MEM.flipped[1];
    if(MEM.cards[a].id===MEM.cards[b].id){
      setTimeout(function(){
        var ca=document.querySelector('.mem-card[data-i="'+a+'"]'), cb=document.querySelector('.mem-card[data-i="'+b+'"]');
        if(ca)ca.classList.add('matched'); if(cb)cb.classList.add('matched');
        MEM.matched++; MEM.flipped=[]; MEM.lock=false; updMemStatus();
        if(MEM.matched===MEM.cards.length/2) memWin();
      },380);
    } else {
      setTimeout(function(){
        var ca=document.querySelector('.mem-card[data-i="'+a+'"]'), cb=document.querySelector('.mem-card[data-i="'+b+'"]');
        if(ca)ca.classList.remove('up'); if(cb)cb.classList.remove('up');
        MEM.flipped=[]; MEM.lock=false;
      },820);
    }
  }
}
function memWin(){
  var key=(MEM.mat||'all')+'_'+MEM.pairs; var prev=MEM_BEST[key]; var rec=false;
  if(!prev||MEM.moves<prev){ MEM_BEST[key]=MEM.moves; memSaveBest(); rec=(!!prev); }
  var w=document.getElementById('mem-win'); if(!w) return;
  var msgs=['Memorie de avocat! 🧠','Bravo, copile! 🌟','Perfect — pauză binemeritată. ☕','Ai prins toate perechile! 🎯'];
  w.innerHTML='<div class="mw-big">🎉 '+msgs[Math.floor(Math.random()*msgs.length)]+'</div>'+
    '<div class="mw-sub">Ai terminat din <b>'+MEM.moves+'</b> mutări'+(rec?' — <b style="color:var(--gr)">record nou!</b> 🏆':(prev?(' · record: '+MEM_BEST[key]):''))+'</div>'+
    '<button onclick="startMemory()">🔄 Joc nou</button>';
  w.style.display='block'; w.scrollIntoView({behavior:'smooth',block:'center'});
}

// ── stil injectat (identic în ambele pagini; folosește variabilele CSS ale paginii) ──
(function(){
  var css=''
    +'#mem-controls{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:10px}'
    +'.mem-ctrl-group{display:flex;gap:5px;flex-wrap:wrap;align-items:center}'
    +'.mem-ctrl-lbl{font-size:11px;color:var(--sub);margin-right:2px}'
    +'.mem-pill{background:var(--sf2);color:var(--sub);border:1.5px solid transparent;border-radius:16px;padding:5px 11px;font-size:11.5px;font-weight:700;cursor:pointer;transition:.15s}'
    +'.mem-pill.act{background:var(--gr);color:#0f1b10;border-color:var(--gr)}'
    +'#mem-status{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:12px;color:var(--sub);margin-bottom:12px}'
    +'#mem-status b{color:var(--lime)}'
    +'#mem-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}'
    +'@media(min-width:380px){#mem-grid{grid-template-columns:repeat(3,1fr)}}'
    +'@media(min-width:520px){#mem-grid{grid-template-columns:repeat(4,1fr)}}'
    +'.mem-card{perspective:600px;height:140px;cursor:pointer}'
    +'.mem-inner{position:relative;width:100%;height:100%;transition:transform .4s;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}'
    +'.mem-card.up .mem-inner,.mem-card.matched .mem-inner{transform:rotateY(180deg)}'
    +'.mem-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:11px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 7px;overflow:hidden;text-align:center}'
    +'.mem-back{background:linear-gradient(135deg,var(--sf2),var(--sf));border:1.5px solid #2f4d31;color:#3a5e3c;font-size:30px;font-weight:800}'
    +'.mem-front{background:var(--sf2);border:1.5px solid var(--sf2);transform:rotateY(180deg);justify-content:flex-start;padding-top:10px}'
    +'.mem-card.matched .mem-front{border-color:var(--gr);box-shadow:0 0 0 2px #4caf5040;opacity:.62}'
    +'.mem-term{font-size:14px;font-weight:800;color:var(--lime);line-height:1.3}'
    +'.mem-def{font-size:11px;color:var(--txt);line-height:1.4;opacity:.92}'
    +'.mem-badge{font-size:7.5px;font-weight:800;letter-spacing:.3px;padding:1px 5px;border-radius:5px;text-transform:uppercase;margin-bottom:4px;flex-shrink:0}'
    +'.mb-civ{background:#4caf5022;color:#7bc47f}'
    +'.mb-pen{background:#ef535022;color:#e98480}'
    +'.mb-pciv{background:#26c6da22;color:#6fd9e6}'
    +'.mb-ppen{background:#ab47bc22;color:#c98fd6}'
    +'.mb-lat{background:#ffd54f22;color:#e6c24a;font-style:italic}'
    +'#mem-win{text-align:center;background:var(--sf);border:1.5px solid var(--gr);border-radius:14px;padding:20px 16px;margin-top:14px}'
    +'#mem-win .mw-big{font-size:22px;font-weight:900;color:var(--gr);margin-bottom:6px}'
    +'#mem-win .mw-sub{font-size:13px;color:var(--sub);margin-bottom:14px;line-height:1.5}'
    +'#mem-win button{background:var(--gr);color:#0f1b10;border:none;border-radius:22px;padding:10px 22px;font-size:14px;font-weight:800;cursor:pointer}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);
})();
