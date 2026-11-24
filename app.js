/* ---------------- semesters ---------------- */
const SEMS=[
 ["Semester 1","6.22","Completed",[["Intelligent Systems","A","BAI 101",1],["Programming with Python","B","BAI 110",0],["Communication Skills","B","HMC 110",0],["Computer Organization","","BAI 103",0],["Applied Physics","","BAS 107",0],["Applied Mathematics","","BAS 109",0]]],
 ["Semester 2","6.45","Completed",[["IT Workshop","A","BAI 108",1],["Database Management","B","BAI 106",0],["Environmental Science","B","BAS 106",0],["Intro to Data Science","","BAI 104",0],["OOP using Java","","BAI 102",0],["Probability & Statistics","","BAS 108",0]]],
 ["Semester 3","6.35","Completed",[["Artificial Intelligence","B+","BAI 201",1],["Internship","B+","BAI 253",0],["Discrete Structures","B","BCS 203",0],["Data Structures","","BCS 201",0],["Software Engineering","","BIT 203",0],["Numerical Methods","","BAS 203",0],["Introduction to Airplane Performance (NPTEL)","","GEC 201",0]]],
 ["Semester 4","7.27","Completed",[["Optimization Techniques","A","BAI 204",1],["Operating Systems","B+","BIT 202",0],["Disaster Management","B+","HMC 202",0],["Computer Networks","B","BAI 202",0],["Algorithms","","BCS 204",0],["Operations Management","","BMA 210",0]]],
 ["Semester 5","8.27","Completed",[["Machine Learning","A","BAI 301",1],["Theory of Computation","A","BCS 303",0],["Startup Development","A","GEC 301",0],["Cyber Security","B+","BAI 303",0],["Deep Learning I","B","BAI 305",0],["Professional Ethics and Human Values","B+","HMC 301",0],["Internship","B+","BAI 353",0]]],
 ["Semester 6","7.91","Completed",[["Cloud Computing","A","BAI 308",1],["Marketing Management","A","HMC 304",0],["Natural Language Processing","B+","BAI 302",0],["Deep Learning II","B+","BAI 304",0],["Digital Image Processing","B","BAI 306",0],["Data Warehousing and Business Intelligence","B","BAI 322",0]]],
 ["Semester 7","·","In progress",[["Computer Vision","","BAI 403",1],["Conversational AI","","BAI 409",1],["Multimodal Data Analytics","","BAI 417",0],["Recent Trends in AI","","BAI 415",0],["Big Data Analytics","","BIT 407",0],["Minor Project","","BAI 451",0],["Internship","","BAI 453",0]]],
 ["Semester 8","·","Ahead",[["Cognitive Computing","","BAI 414",1],["Introduction to Cognitive Psychology by IIT Guwahati (NPTEL)","","GEC 402",1],["Social Media Analytics","","BAI 404",0],["R&D Project","","BAI 452",0],["Creativity, Innovation and Entrepreneurship","","HMC 402",0]]]
];

/* ---------------- render: project + research rows ---------------- */
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function rowHTML(key,o,cls){
  return `<button class="entry ${cls}" data-open="${key}">
    <h4>${esc(o.title)}</h4>
    <p class="cred">${esc(o.meta)}</p><p>${esc(o.lead)}</p>
    <p class="go">Open →</p></button>`;
}
document.getElementById('internrows').innerHTML =
  ['iitj','cvdl','pyml'].map(k=>{const o=INTERNSHIPS[k];
    return `<button class="rband lite" data-open="i:${k}">
      <div><h3>${esc(o.title)}</h3><p class="kind">${esc(o.kind)}</p></div>
      <div><p class="cred">${esc(o.meta)}</p><p>${esc(o.lead)}</p>
      <span class="go">Open &rarr;</span></div></button>`;}).join('');

document.getElementById('resrows').innerHTML =
  ['caer','crop','yel'].map((k,i)=>{const o=RESEARCH[k];
    return `<button class="rband lite" data-open="r:${k}">
      <div><p class="rnum">${i+2}</p><h3>${esc(o.title)}</h3></div>
      <div><p class="cred">${esc(o.meta)}</p><p>${esc(o.lead)}</p>
      <span class="go">Open &rarr;</span></div></button>`;}).join('');

/* ---------------- render: the relevance-gate funnel ---------------- */
(function(){
  const cloud=document.getElementById('cloud'), kept=document.getElementById('kept');
  if(!cloud)return;
  let seed=23, rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
  let c='',k='';
  for(let i=0;i<37;i++){const x=50+rnd()*300,y=52+rnd()*300;
    c+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="none" stroke="#837E72" stroke-width="1.1"/>`;}
  for(let i=0;i<36;i++){const col=i%6,row=(i/6)|0;
    k+=`<circle cx="${462+col*32}" cy="${66+row*46}" r="5" fill="#4335A0" opacity="${(0.42+((i*13)%40)/100).toFixed(2)}"/>`;}
  cloud.innerHTML=c; kept.innerHTML=k;
})();

/* ---------------- render: the PFCA recall matrix ---------------- */
(function(){
  const cols=['LitSearch','DORIS-MAE','IRPAPERS','MAPLE'];
  const rows=[
    ['A(LitSearch)',[[75.2,'GritLM-7B',1],[14.3,'Instructor-XL',0],[97.2,'GritLM-7B',0],[61.0,'GritLM-7B',0]]],
    ['A(DORIS-MAE)',[[61.9,'E5-L-v2',0],[26.9,'E5-L-v2',1],[97.2,'TF-IDF',0],[39.4,'SPECTER-v2',0]]],
    ['A(IRPAPERS)',[[68.0,'Hybrid text',0],[19.5,'Hybrid text',0],[91.6,'MM hybrid',1],[40.5,'Hybrid text',0]]],
    ['A(MAPLE)',[[73.1,'Qwen3-8B',0],[5.1,'BM25',0],[98.3,'BM25',0],[56.5,'GritLM-7B',1]]]
  ];
  const a=v=>(0.05+(v-5.1)/(98.3-5.1)*0.40).toFixed(3);
  let h='<tr><th class="rowh"></th>'+cols.map(c=>`<th>${c}</th>`).join('')+'</tr>';
  rows.forEach(([name,cells])=>{
    h+=`<tr><th class="rowh">${name}</th>`+cells.map(([v,m,nat])=>
      `<td class="${nat?'native':''}" style="background:rgba(var(--indigo-rgb),${a(v)})">${v.toFixed(1)}<small>${m}</small></td>`).join('')+'</tr>';
  });
  document.getElementById('mx').innerHTML=h;
})();

/* ---------------- render: semester stations ---------------- */
document.getElementById('stations').innerHTML=SEMS.map(([lbl,gpa,state,cs])=>{
  const cls = state==='In progress'?'now' : state==='Ahead'?'ahead' : '';
  return `<div class="st ${cls}"><span class="lbl">${lbl}</span>`+
    `<span class="gpa">${gpa}</span><span class="state">${state}</span><ul>`+
    cs.map(([n,g,code,key])=>{
      const c=COURSES[code];
      const has=(c&&c.units.length)?1:0;   // underlined = a syllabus is attached
      return `<li class="${key?'key':''}"><button data-course="${code}" data-name="${esc(n)}" data-grade="${g}" data-has="${has}">`+
             `<span>${esc(n)}</span><i>${g||'·'}</i></button></li>`;
    }).join('')+`</ul></div>`;
}).join('');

/* ---------------- modal ---------------- */
const scrim=document.getElementById('scrim'), sheet=document.getElementById('sheet');
function stats(f){return f&&f.length?`<div class="statrow">${f.map(([b,s])=>`<div><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>`:'';}
function linkrow(l){return l&&l.length?`<div class="sheetlinks">${l.map(([t,u])=>`<a href="${u}" target="_blank" rel="noopener">${esc(t)}</a>`).join('')}</div>`:'';}
// a short factual note under a pop-up; the leading "~" is a legacy marker and is dropped
function note(t){
  if(!t)return'';
  return `<p class="plainnote">${esc(t[0]==='~'?t.slice(1):t)}</p>`;
}
const closeSheet=()=>scrim.classList.remove('open');
// the sheet scrolls; the cue at its foot shows while there is more below
function cue(){sheet.classList.toggle('atend',sheet.scrollTop+sheet.clientHeight>=sheet.scrollHeight-28);}
function show(cls,html){sheet.className='sheet '+cls;
  sheet.innerHTML='<button class="xbtn" id="xbtn" aria-label="Close">&times;</button>'+html+
  '<div class="sfoot"><button id="closebtn">Close</button></div>'+
  '<div class="morecue" aria-hidden="true"><i>More below &darr;</i></div>';
  scrim.classList.add('open');
  document.getElementById('closebtn').onclick=document.getElementById('xbtn').onclick=
    e=>{e.stopPropagation();closeSheet()};
  sheet.scrollTop=0; cue();
  sheet.querySelectorAll('img').forEach(im=>im.addEventListener('load',cue));}
sheet.addEventListener('scroll',cue,{passive:true});

function openItem(kind,key){
  const o=(kind==='p'?PROJECTS:kind==='i'?INTERNSHIPS:RESEARCH)[key]; if(!o)return;
  const team = o.team&&o.team.length
    ? '<h5>Built by</h5><ul class="team">'+o.team.map(t=>`<li>${esc(t)}</li>`).join('')+'</ul>' : '';
  const mine = o.team&&o.team.length
    ? (o.mine&&o.mine.length
        ? '<h5>My part in it</h5>'+o.mine.map(p=>`<p class="para">${esc(p)}</p>`).join('') : '') : '';
  const deck = o.deck&&o.deck.length
    ? `<h5>${esc(o.decktitle||'Pitch deck')}</h5><div class="deck">`+
      o.deck.map((s,i)=>`<figure class="slide"><img src="${s}" alt="Slide ${i+1}" loading="lazy"><figcaption>${i+1}</figcaption></figure>`).join('')+
      `</div><p class="deckcap">${esc(o.deckcap||'')}</p>` : '';
  const shots = o.shots&&o.shots.length
    ? '<h5>From the demo</h5><div class="certs">'+
      o.shots.map(([src,cap])=>`<figure class="certfig"><img src="${src}" alt="${esc(cap)}" loading="lazy"><figcaption>${esc(cap)}</figcaption></figure>`).join('')+
      '</div>' : '';
  // what a submitted paper concluded, each paragraph led by its finding in bold
  const res = o.findings&&o.findings.length
    ? '<h5>What the paper found</h5>'+o.findings.map(p=>{const k=p.indexOf('. ');
        return `<p class="para"><b>${esc(p.slice(0,k+1))}</b> ${esc(p.slice(k+2))}</p>`;}).join('') : '';
  // the project built during an internship
  const proj = o.project
    ? `<h5>Project from this internship</h5><h4 class="pjt">${esc(o.project.title)}</h4>`+
      o.project.body.map(p=>`<p class="para">${esc(p)}</p>`).join('') : '';
  const cert = o.certs&&o.certs.length
    ? '<h5>'+(o.certs.length>1?'Certificate and award':'Certificate')+'</h5><div class="certs">'+
      o.certs.map(([src,cap])=>`<figure class="certfig"><img src="${src}" alt="${esc(cap)}" loading="lazy"><figcaption>${esc(cap)}</figcaption></figure>`).join('')+
      '</div>' : '';
  show(kind==='r'?'r':'',
    `<p class="tag">${esc(o.kind)}</p><h3>${esc(o.title)}</h3><p class="sub">${esc(o.meta)}</p>`+
    `<p class="brief">${esc(o.lead)}</p>`+
    (o.body||[]).map(p=>`<p class="para">${esc(p)}</p>`).join('')+
    res+stats(o.figs)+proj+team+mine+shots+deck+cert+linkrow(o.links)+note(o.check));
}
function openCourse(code,name,grade){
  const c=COURSES[code];
  if(!c){ show('c',`<p class="tag">${esc(code)}</p><h3>${esc(name)}</h3>`+
    `<p class="sub">${grade?'Graded '+esc(grade):'In progress'}</p>`+
    ''); return; }
  show('c',
    `<p class="tag">${esc(c.code)}${grade?' · graded '+esc(grade):''} · ${c.cr} credits</p>`+
    `<h3>${esc(c.name)}</h3><p class="sub">B.Tech CSE (AI), IGDTUW</p>`+
    (c.units.length?'<h5>Syllabus, as taught</h5>'+c.units.map(([u,t])=>
      `<div class="u"><i>${esc(u)}</i><span>${esc(t)}</span></div>`).join(''):'')+
    (c.labs.length?'<h5>Lab work I did inside it</h5>'+c.labs.map(([n,t])=>
      `<div class="l"><i>${esc(n)}</i><span>${esc(t)}</span></div>`).join(''):'')+
    note(c.note));
}
document.addEventListener('click',e=>{
  const o=e.target.closest('[data-open]');
  if(o){const [k,id]=o.dataset.open.split(':');openItem(k,id);return;}
  const c=e.target.closest('[data-course]');
  if(c){openCourse(c.dataset.course,c.dataset.name,c.dataset.grade);}
});
scrim.addEventListener('click',e=>{if(e.target===scrim)scrim.classList.remove('open')});

/* ---------------- chapters: a header on every page of each one ---------------- */
const CHAPTERS=[
  {n:'i',  hue:'--teal',   title:'Things I have built',
   tag:"Systems that interpret something on a person's behalf, and hand the decision back.",
   ids:['s1','s1b','s1c','s1d']},
  {n:'ii', hue:'--indigo', title:'Research I am working on',
   tag:'Four open threads, and the question each one is asking.', ids:['s2','s2b']},
  {n:'iii',hue:'--teal',   title:'Three summers',
   tag:'Where the toolkit came from, and then what it was pointed at.', ids:['sI']},
  {n:'iv', hue:'--ochre',  title:'Taught, then built on',
   tag:'Eight semesters, left to right. Click any course for its syllabus and the lab work I did inside it.', ids:['s3']}
];
CHAPTERS.forEach(c=>c.ids.forEach((id,k)=>{
  const el=document.getElementById(id), h=document.createElement('header');
  h.className='chap'; h.style.setProperty('--hue',`var(${c.hue})`);
  h.innerHTML=`<i>${c.n}</i><b>${esc(c.title)}</b><span>${esc(c.tag)}</span>`+
    (c.ids.length>1?`<em>${k+1} / ${c.ids.length}</em>`:'');
  el.prepend(h); el.dataset.hue=c.hue;
}));
document.documentElement.classList.add('js');

/* ---------------- the continuous signal ---------------- */
const rail=document.getElementById('rail'),trk=document.getElementById('trk'),
      thumb=document.getElementById('thumb'), count=document.getElementById('count'),
      btns=[...document.querySelectorAll('#prog [data-go]')],
      panels=[...trk.querySelectorAll('.panel')],
      stops=['s0','s1','s2','sI','s3','s4'].map(i=>document.getElementById(i));
const REDUCED=matchMedia('(prefers-reduced-motion: reduce)').matches;
// The portfolio turns sideways, one page at a time. Only a phone-width screen,
// which cannot hold a page, falls back to pages stacked top to bottom.
function applyLayout(){
  const stack=window.innerWidth<=720;
  document.documentElement.classList.toggle('stacked', stack);
  return stack;
}
const STACKED=()=>document.documentElement.classList.contains('stacked');
let TRACE,PEN,LEN=0;

function drawSignal(){
  const svg=document.getElementById('sig'), W=trk.scrollWidth, H=window.innerHeight;
  svg.setAttribute('width',W); svg.setAttribute('height',H); svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  const base=H*0.835, z=stops.map(e=>({a:e.offsetLeft,b:e.offsetLeft+e.offsetWidth}));
  let seed=5, rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
  const gpa=[6.22,6.45,6.35,7.27,8.27,7.91];
  const cx=[...document.querySelectorAll('.st')].map(e=>{
    const r=e.getBoundingClientRect(), t=trk.getBoundingClientRect();
    return r.left-t.left+r.width/2;});
  const vy=v=>base-((v-6.0)/2.6)*150;
  function gpaY(x){
    if(x<=cx[0])return vy(gpa[0]);
    if(x>=cx[5])return vy(gpa[5]);
    for(let i=0;i<5;i++){if(x<=cx[i+1]){
      const fr=(x-cx[i])/(cx[i+1]-cx[i]);return vy(gpa[i]+(gpa[i+1]-gpa[i])*fr);}}
    return vy(gpa[5]);
  }
  let pts=[], extras='';
  for(let x=0;x<W;x+=5){
    let y;
    if(x<z[1].a){ y=base+Math.sin(x/120)*9+Math.sin(x/37)*2.5; }
    else if(x<z[2].a){
      const n=Math.sin(x/23)*7+Math.sin(x/9)*4+(rnd()-.5)*6;
      const spike=(x%430<16)?-66:0; y=base+n+spike;
      if(spike&&x%430<6){
        extras+=`<circle cx="${x}" cy="${base-70}" r="4.5" fill="#DC4327"/>`+
                `<line x1="${x}" y1="${base-70}" x2="${x}" y2="${base+14}" stroke="rgba(220,67,39,.28)" stroke-width="1"/>`;}
    }
    else if(x<z[3].a){
      const t=(x-z[2].a)/(z[3].a-z[2].a), amp=18*(1-t*0.9);
      y=base+(Math.sin(x/29)*0.9+Math.sin(x/17.3)*0.55+Math.sin(x/53)*1.15)*amp+Math.sin(x/160)*7;
    }
    else if(x<z[4].a){
      // three summers: three flat holds, each a little higher than the last
      const span=z[3].b-z[3].a, t=Math.min(1,(x-z[3].a)/span), k=Math.min(2,Math.floor(t*3));
      const f=t*3-k;                       // position inside this third
      const lift=[12,27,42][k];
      const ease=f<0.16?f/0.16:(f>0.86?(1-f)/0.14:1);
      y=base-lift*Math.max(0,Math.min(1,ease))+Math.sin(x/190)*3;
    }
    else { y=gpaY(x); }
    pts.push(x+','+y.toFixed(1));
  }
  extras+=`<line x1="${z[1].a}" y1="${base-70}" x2="${z[2].a}" y2="${base-70}" stroke="rgba(220,67,39,.45)" stroke-width="1" stroke-dasharray="3 6"/>`;
  {const span=z[3].b-z[3].a;
   [0,1,2].forEach(k=>{const cxk=z[3].a+span*(k+0.5)/3, lift=[12,27,42][k];
     extras+=`<circle cx="${cxk.toFixed(1)}" cy="${(base-lift).toFixed(1)}" r="4" fill="#F4F1E8" stroke="#0E6B63" stroke-width="1.8"/>`;
     extras+=`<text x="${cxk.toFixed(1)}" y="${(base-lift-14).toFixed(1)}" text-anchor="middle" font-family="Palatino,Georgia,serif" font-style="italic" font-size="13" fill="#837E72">${[2024,2025,2026][k]}</text>`;});}
  gpa.forEach((v,i)=>extras+=`<circle cx="${cx[i]}" cy="${vy(v)}" r="6" fill="#F4F1E8" stroke="#BD8418" stroke-width="2"/>`);
  extras+=`<line x1="${cx[5]}" y1="${vy(gpa[5])}" x2="${cx[7]}" y2="${vy(gpa[5])}" stroke="#BD8418" stroke-width="1.4" stroke-dasharray="4 7" opacity=".55"/>`;
  extras+=`<circle cx="${cx[6]}" cy="${vy(gpa[5])}" r="6" fill="#F4F1E8" stroke="#DC4327" stroke-width="2"/>`;
  extras+=`<circle cx="${cx[7]}" cy="${vy(gpa[5])}" r="6" fill="#F4F1E8" stroke="#D8D1C0" stroke-width="2"/>`;
  extras+=`<text x="${cx[6]}" y="${vy(gpa[5])+28}" text-anchor="middle" font-family="Palatino,Georgia,serif" font-style="italic" font-size="14" fill="#837E72">result pending</text>`;
  svg.innerHTML=`<polyline id="trace" points="${pts.join(' ')}" fill="none" stroke="rgba(21,25,26,.26)" stroke-width="1.6"/>`+
                `<circle id="pen" r="4.5" fill="#DC4327" opacity="0"/>`+extras;
}
function drawWashes(){
  // one soft wash per page, in its chapter's colour
  const field=document.getElementById('field');
  [...field.querySelectorAll('.zonewash')].forEach(n=>n.remove());
  [...trk.querySelectorAll('.panel[data-hue]')].forEach(el=>{
    const d=document.createElement('div');
    d.className='zonewash';
    d.style.left=el.offsetLeft+'px'; d.style.width=el.offsetWidth+'px';
    const rgb=getComputedStyle(document.body).getPropertyValue(el.dataset.hue+'-rgb').trim();
    d.style.background=`radial-gradient(58% 66% at 60% 50%, rgba(${rgb},.12), rgba(${rgb},0) 74%)`;
    field.appendChild(d);
  });
}
function placePlates(){
  // each architecture drawing sits behind the text column of its own project
  const put=(id,hostId)=>{const pl=document.getElementById(id), host=document.getElementById(hostId);
    pl.style.left=(host.offsetLeft-70)+'px';
    pl.style.width=Math.min(860,Math.max(620,rail.clientWidth*0.56))+'px';
    pl.dataset.x=host.offsetLeft;};
  put('plate2','s1'); put('plate','s1c');
}
function initTrace(){
  TRACE=document.getElementById('trace'); PEN=document.getElementById('pen');
  if(!TRACE)return;
  LEN=TRACE.getTotalLength(); TRACE.style.strokeDasharray=LEN;
  if(REDUCED){TRACE.style.strokeDashoffset=0;PEN.setAttribute('opacity','0');return;}
  revealTrace();
}
function revealTrace(){
  if(!TRACE||REDUCED)return;
  // The line is longer where it is jagged, so a share of its length is not a share
  // of the page. Search for the length whose x is the leading edge instead.
  const edge=Math.min(trk.scrollWidth,rail.scrollLeft+rail.clientWidth*0.62);
  let lo=0, hi=LEN;
  for(let i=0;i<16;i++){const mid=(lo+hi)/2; if(TRACE.getPointAtLength(mid).x<edge)lo=mid; else hi=mid;}
  const drawn=lo, frac=edge>=trk.scrollWidth-2?1:drawn/LEN;
  TRACE.style.strokeDashoffset=LEN-drawn;
  if(frac<0.999){const p=TRACE.getPointAtLength(drawn);
    PEN.setAttribute('cx',p.x);PEN.setAttribute('cy',p.y);PEN.setAttribute('opacity','.85');}
  else PEN.setAttribute('opacity','0');
}
// The signal sits at a fraction of the window height, so on a short window it
// climbs into the research stack. Scale the stack to the room actually left
// above it, widening first so it still fills the column after scaling.
const SIG_RISE=70;    // how far the research noise reaches above the base, plus clearance
function fitResearch(){
  ['s0','s1','s1b','s1c','s1d','s2','s2b','sI'].forEach(id=>{
    const host=document.getElementById(id);
    if(!host)return;
    const stack=host.querySelector('.rstack,.figwrap,.openwrap');
    if(!stack)return;
    const reset=()=>{stack.style.width=''; stack.style.transform='none'; stack.style.marginBottom='';};
    reset();
    if(STACKED())return;
    const cs=getComputedStyle(host);
    const avail=window.innerHeight-(parseFloat(cs.paddingBottom)||0)-(parseFloat(cs.paddingTop)||0);
    if(avail<=0)return;
    // Scaling also widens the stack, which changes how the text wraps, so the
    // height is not a simple function of the scale. Search for the largest
    // scale that still fits instead of solving it in one pass.
    const apply=k=>{stack.style.transformOrigin='top left';
      stack.style.width=(100/k).toFixed(3)+'%';
      stack.style.transform='scale('+k.toFixed(4)+')';};
    const fits=k=>{apply(k); return stack.getBoundingClientRect().height<=avail+1;};
    reset();
    if(stack.getBoundingClientRect().height<=avail+1)return;
    let lo=0.84, hi=1;
    for(let i=0;i<7;i++){const mid=(lo+hi)/2; if(fits(mid))lo=mid; else hi=mid;}
    apply(lo);
    // a scaled box still takes its unscaled height in the layout; give the
    // difference back so the page centres what is actually drawn
    stack.style.marginBottom=(-stack.offsetHeight*(1-lo)).toFixed(1)+'px';
  });
}



/* ---------------- pages ---------------- */
// Every page is one stop. A panel wider than the window (the degree) gets more
// than one, the last of them flush with its right edge.
let STOPS=[0], IDX=0, RAF=0, TURNING=false;
function buildStops(){
  const vw=rail.clientWidth, max=Math.max(0,trk.scrollWidth-vw), xs=[];
  panels.forEach(p=>{
    const a=p.offsetLeft, w=p.offsetWidth;
    xs.push(Math.min(a,max));
    if(w>vw+8){
      const end=a+w-vw, n=Math.ceil((w-vw)/(vw*0.96));
      for(let k=1;k<=n;k++)xs.push(Math.min(max,k===n?end:a+(end-a)*k/n));
    }
  });
  STOPS=[...new Set(xs.map(Math.round))].sort((a,b)=>a-b);
}
const stopOf=x=>{let b=0;STOPS.forEach((s,i)=>{if(s<=x+2)b=i});return b;};
function markSeen(upTo){
  const edge=upTo+rail.clientWidth-40;
  panels.forEach(p=>{if(p.offsetLeft<edge)p.classList.add('seen')});
}
function goTo(i,instant){
  i=Math.max(0,Math.min(STOPS.length-1,i));
  IDX=i;
  const to=STOPS[i], from=rail.scrollLeft, dist=Math.abs(to-from);
  cancelAnimationFrame(RAF);
  markSeen(to);
  if(instant||REDUCED||dist<2){rail.scrollLeft=to;TURNING=false;onScroll();return;}
  const dur=Math.min(1150,640+dist/rail.clientWidth*110), t0=performance.now();
  TURNING=true;
  const step=now=>{
    const t=Math.min(1,(now-t0)/dur), e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
    rail.scrollLeft=from+(to-from)*e;
    if(t<1)RAF=requestAnimationFrame(step); else TURNING=false;
  };
  RAF=requestAnimationFrame(step);
}

function paint(){
  fitResearch();
  if(STACKED()){document.getElementById('sig').innerHTML='';panels.forEach(p=>p.classList.add('seen'));return;}
  drawWashes();drawSignal();placePlates();initTrace();
  buildStops(); goTo(Math.min(IDX,STOPS.length-1),true);
}
applyLayout(); paint();
window.addEventListener('resize',()=>{applyLayout();paint();});
window.addEventListener('load',paint);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(paint);

// Any scroll, up and down or sideways, turns exactly one page. A trackpad swipe
// keeps sending events for a second or more after the fingers lift; those are the
// tail of the same swipe and must not turn a second page.
let wLast=0, wAbs=0, wAcc=0, wFire=-1e9, wTail=false;
window.addEventListener('wheel',e=>{
  if(STACKED()||e.ctrlKey)return;
  if(scrim.classList.contains('open'))return;        // the pop-up scrolls itself
  e.preventDefault();
  const unit=e.deltaMode===1?18:e.deltaMode===2?rail.clientWidth:1;
  const dy=e.deltaY*unit, dx=e.deltaX*unit, d=Math.abs(dy)>=Math.abs(dx)?dy:dx;
  if(!d)return;
  const now=performance.now(), gap=now-wLast, abs=Math.abs(d);
  const rising=abs>wAbs*1.35+3;
  wLast=now; wAbs=abs;
  if(gap>180)wAcc=0;
  if(TURNING){wAcc=0;return;}
  if(wTail){
    // a pause, a fresh push, or a mouse-wheel notch well after the turn ends the tail
    if(gap>=160||rising||(abs>=50&&now-wFire>900))wTail=false;
    else {wAcc=0;return;}
  }
  wAcc+=d;
  if(Math.abs(wAcc)>=30){
    const dir=wAcc>0?1:-1; wAcc=0; wFire=now; wTail=true;
    goTo(IDX+dir);
  }
},{passive:false});

// touch: a swipe in either direction turns one page
let tX=null,tY=null;
rail.addEventListener('touchstart',e=>{if(STACKED())return;tX=e.touches[0].clientX;tY=e.touches[0].clientY;},{passive:true});
rail.addEventListener('touchend',e=>{
  if(STACKED()||tX===null)return;
  const t=e.changedTouches[0], dx=t.clientX-tX, dy=t.clientY-tY; tX=null;
  const d=Math.abs(dx)>=Math.abs(dy)?-dx:-dy;
  if(Math.abs(d)>46)goTo(IDX+(d>0?1:-1));
},{passive:true});

function onScroll(){
  if(STACKED())return;
  revealTrace();
  const sl=rail.scrollLeft;
  ['plate','plate2'].forEach(id=>{const p=document.getElementById(id);
    if(p)p.style.transform=`translate(${((sl-(+p.dataset.x||0))*-0.14).toFixed(1)}px,-50%)`;});
  const max=Math.max(1,rail.scrollWidth-rail.clientWidth), w=Math.max(6,100/STOPS.length);
  thumb.style.width=w+'%'; thumb.style.left=(sl/max)*(100-w)+'%';
  // a chapter is current once a third of it is on screen
  const probe=sl+rail.clientWidth*0.35;
  let near=0;
  stops.forEach((el,i)=>{if(el.offsetLeft<=probe)near=i});
  btns.forEach((b,i)=>b.classList.toggle('on',i===near));
  const at=TURNING?IDX:stopOf(sl);
  count.innerHTML=`<b>${String(at+1).padStart(2,'0')}</b> / ${String(STOPS.length).padStart(2,'0')}`;
}
rail.addEventListener('scroll',onScroll,{passive:true});
onScroll();

btns.forEach(b=>b.addEventListener('click',()=>{
  const el=stops[+b.dataset.go];
  if(STACKED()){el.scrollIntoView({behavior:'smooth',block:'start'});return;}
  goTo(stopOf(Math.min(el.offsetLeft,rail.scrollWidth-rail.clientWidth)));
}));
// tabbing into a page that is off screen turns to it
document.addEventListener('focusin',e=>{
  if(STACKED()||TURNING||scrim.contains(e.target))return;
  const p=e.target.closest&&e.target.closest('.panel'); if(!p)return;
  const x=e.target.getBoundingClientRect().left+rail.scrollLeft;
  const i=Math.max(stopOf(p.offsetLeft),stopOf(x-60));
  rail.scrollLeft=STOPS[IDX];
  if(i!==IDX)goTo(i);
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeSheet();return;}
  if(STACKED()||scrim.classList.contains('open'))return;
  const k=e.key;
  if(k==='ArrowRight'||k==='ArrowDown'||k==='PageDown'){e.preventDefault();goTo(IDX+1);}
  else if(k==='ArrowLeft'||k==='ArrowUp'||k==='PageUp'){e.preventDefault();goTo(IDX-1);}
  else if(k==='Home'){e.preventDefault();goTo(0);}
  else if(k==='End'){e.preventDefault();goTo(STOPS.length-1);}
});
