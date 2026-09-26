/* Klasbordstudio V30 — grondige audit */
/* Klasbordstudio V28 — interactieve verfijning */
/* Klasbordstudio V27 — zichtbare tools, rechtergrepen, iconenaudit */
/* Klasbordstudio V26 — centrale widgetmanager */
const USER_WORDBANKS=window.USER_WORDBANKS||{};

function playAlarm(){
 try{
  const C=window.AudioContext||window.webkitAudioContext,ctx=new C();
  [0,.28,.56].forEach((t,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=[880,1046,1318][i];g.gain.setValueAtTime(.0001,ctx.currentTime+t);g.gain.exponentialRampToValueAtTime(.22,ctx.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+t+.22);o.connect(g);g.connect(ctx.destination);o.start(ctx.currentTime+t);o.stop(ctx.currentTime+t+.24)})
 }catch(e){}
}
const STUDIO_EURO={5:["#e4e6df","#627067"],10:["#f5b6a5","#ab4039"],20:["#a8cae9","#285e9e"],50:["#f3c18c","#ad6030"],100:["#b8db9e","#548441"],200:["#e5d39c","#806d37"],500:["#ccb0db","#76518c"]};
function renderStudioMoney(v){
 if(v>=5){let p=STUDIO_EURO[v]||["#e4e6df","#627067"];return `<svg viewBox="0 0 100 56" class="studio-note"><rect x="3" y="4" width="94" height="48" rx="5" fill="${p[0]}" stroke="${p[1]}" stroke-width="2"/><rect x="8" y="9" width="11" height="38" fill="rgba(255,255,255,.4)"/><path d="M35 42V26q0-12 11-12t11 12v16m-16 0V28q0-6 5-6t5 6v14" fill="none" stroke="${p[1]}" stroke-width="2"/><text x="12" y="22" font-size="13" font-weight="900" fill="${p[1]}">${v}</text><text x="72" y="38" font-size="17" font-weight="900" fill="${p[1]}">${v}</text><text x="41" y="49" font-size="7" fill="${p[1]}">EURO</text></svg>`}
 let cents=Math.round(v*100),euro=cents>=100,label=euro?String(cents/100):String(cents),r=cents===200?23:cents===100?22:cents===50?21:cents===20?20:cents===10?19:cents===5?18:cents===2?17:16,outer=cents<=5?"#c9815d":cents<100?"#d3b45c":cents===100?"#d3b45c":"#cdd2d1",inner=cents===100?"#cdd2d1":cents===200?"#d3b45c":outer;
 return `<svg viewBox="0 0 52 52" class="studio-coin"><circle cx="26" cy="26" r="${r}" fill="${outer}" stroke="#8b8376" stroke-width="2"/>${euro?`<circle cx="26" cy="26" r="${r*.68}" fill="${inner}" stroke="#777" stroke-width="1"/>`:""}<text x="26" y="28" text-anchor="middle" font-size="13" font-weight="900" fill="#4b463e">${label}</text><text x="26" y="39" text-anchor="middle" font-size="6" fill="#5d564c">${euro?"EURO":"CENT"}</text></svg>`}
function clockFaceHTML(){
 return `<div class="clock-canvas-wrap" data-clock-render="v32"><canvas class="clock-canvas" aria-label="Analoge klok"></canvas></div>`;
}
function drawClockCanvas(canvas,timeValue,tickMode="five"){
 if(!canvas||!canvas.parentElement)return;
 const avail=canvas.parentElement.clientWidth||340,size=Math.max(220,Math.min(380,avail)),dpr=Math.max(1,window.devicePixelRatio||1);
 canvas.style.width=size+"px";canvas.style.height=size+"px";canvas.width=Math.round(size*dpr);canvas.height=Math.round(size*dpr);
 const ctx=canvas.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,size,size);
 const c=size/2,r=size*.46;ctx.save();ctx.translate(c,c);
 ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();ctx.strokeStyle="#033663";ctx.lineWidth=Math.max(3,size*.009);ctx.stroke();
 const show=i=>tickMode==="minute"||(tickMode==="five"&&i%5===0)||(tickMode==="quarter"&&i%15===0)||(tickMode==="half"&&i%30===0)||(tickMode==="hour"&&i%5===0);
 for(let i=0;i<60;i++){if(!show(i))continue;const ang=i*Math.PI/30-Math.PI/2,major=i%5===0,outer=r*.94,inner=r*(major?.84:.89);ctx.beginPath();ctx.moveTo(Math.cos(ang)*inner,Math.sin(ang)*inner);ctx.lineTo(Math.cos(ang)*outer,Math.sin(ang)*outer);ctx.strokeStyle=major?"#033663":"#78909c";ctx.lineWidth=major?Math.max(2,size*.006):Math.max(1,size*.003);ctx.lineCap="round";ctx.stroke()}
 ctx.fillStyle="#033663";ctx.font=`800 ${Math.round(size*.058)}px Arial, sans-serif`;ctx.textAlign="center";ctx.textBaseline="middle";
 for(let n=1;n<=12;n++){const ang=n*Math.PI/6-Math.PI/2,rr=r*.69;ctx.fillText(String(n),Math.cos(ang)*rr,Math.sin(ang)*rr)}
 let [h,m]=String(timeValue||"02:30").split(":").map(Number);if(!Number.isFinite(h))h=2;if(!Number.isFinite(m))m=30;
 const hand=(ang,len,width,color)=>{ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(ang)*len,Math.sin(ang)*len);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap="round";ctx.stroke()};
 hand(((h%12)+m/60)*Math.PI/6-Math.PI/2,r*.48,Math.max(6,size*.018),"#033663");
 hand(m*Math.PI/30-Math.PI/2,r*.68,Math.max(4,size*.011),"#fe2020");
 ctx.beginPath();ctx.arc(0,0,Math.max(6,size*.018),0,Math.PI*2);ctx.fillStyle="#033663";ctx.fill();ctx.restore();
}
const GENERATED_WORDS={
 "start":["maan","roos","vis","sok","mus","raam","neus","boom","jas","pen","bus","kat","pop","zon","kip","hek","tak","map","rok","pit"],
 "kern 1":["teen","been","meer","veer","zeep","reep","boek","doek","koek","hoek","huis","muis","duif","tuin","geit","reis","pijn","lijn","hout","goud"],
 "kern 2":["stoel","bloem","snoep","trein","kraan","bril","gras","slak","fiets","broek","vlag","klok","droom","straat","speer","plank","fruit","zwem","kring","sprong"],
 "kern 3":["bakker","vissen","letter","zomer","kamer","bomen","regen","vogel","water","tafel","lepel","ramen","muren","pennen","jassen","ballen","pakken","rollen","rennen","spelen"],
 "kern 4":["school","schip","schaar","schrift","schaap","schoen","spruit","straat","streep","sprookje","vriend","vroeg","zwaan","zwart","klein","groot","blauw","groen","bruin","sterk"],
 "kern 5+":["avontuur","bibliotheek","verrassing","omgeving","ontdekken","verschillend","belangrijk","samenwerken","nieuwsgierig","oplossing","verhaal","betekenis","onderzoek","gebeurtenis","vriendelijk","fantastisch","natuurlijk","bijzonder","voorzichtig","uiteindelijk"]
};

const NUMBER_IMAGE_TYPES=[
["fingers","Vingerbeeld"],["dice","Dobbelsteenbeeld"],["domino","Dominobeeld"],["eggbox","Eierdoosbeeld"],["rekenrekimg","Rekenrek / telraam"],["chain","Kralenketting"],["tenimg","Tienframe"],["twenty","Dubbel tienframe"],["dots","Stippenbeeld"],["tally","Turven"],["mabimg","MAB / base-ten"],["blocks","Losse blokjes"],["bundles","Bundels"],["lineimg","Getallenlijn"],["emptyline","Lege getallenlijn"],["hundredimg","Honderdveld"],["house","Getallenhuis / positiemodel"],["placeimg","Plaatswaardetabel"],["moneyimg","Geldbeeld"],["objects","Concrete voorwerpen"],["groupsimg","Groepsbeeld"],["arrayimg","Array / rechthoekmodel"],["splitimg","Splitsbeeld"],["partwhole","Deel-geheelmodel"],["numeral","Cijfer"],["wordimg","Getalwoord"],["operationimg","Bewerking"]];
const NUMWORDS=["nul","één","twee","drie","vier","vijf","zes","zeven","acht","negen","tien","elf","twaalf","dertien","veertien","vijftien","zestien","zeventien","achttien","negentien","twintig"];
function niCells(n,total,cls){return `<div class="${cls}">${Array.from({length:total},(_,i)=>`<i class="${i<n?"on":""}"></i>`).join("")}</div>`}
function renderNumberImage(t,n){n=Math.max(0,Math.floor(+n||0));let a=Math.floor(n/2),b=n-a;
 if(t==="fingers")return `<div class="ni-emoji">${"☝️".repeat(Math.min(10,n))}</div>`;
 if(t==="dice")return `<div class="ni-emoji">${["⚀","⚁","⚂","⚃","⚄","⚅"][Math.max(0,Math.min(5,n-1))]||"⚀"}</div>`;
 if(t==="domino")return `<div class="ni-emoji">${["⚀","⚁","⚂","⚃","⚄","⚅"][Math.max(0,Math.min(5,Math.ceil(n/2)-1))]} ${["⚀","⚁","⚂","⚃","⚄","⚅"][Math.max(0,Math.min(5,Math.floor(n/2)-1))]}</div>`;
 if(t==="eggbox")return niCells(Math.min(10,n),10,"ni-egg");
 if(t==="rekenrekimg")return niCells(Math.min(20,n),20,"ni-rek");
 if(t==="chain")return `<div class="ni-chain">${Array.from({length:Math.min(20,n)},(_,i)=>`<i class="${Math.floor(i/5)%2?"alt":""}"></i>`).join("")}</div>`;
 if(t==="tenimg")return niCells(Math.min(10,n),10,"ni-frame");
 if(t==="twenty")return niCells(Math.min(20,n),20,"ni-frame");
 if(t==="dots")return niCells(Math.min(20,n),20,"ni-dots");
 if(t==="tally")return `<div class="ni-emoji">${Array.from({length:Math.ceil(n/5)},(_,g)=>"|".repeat(Math.min(5,n-g*5))).join(" ")}</div>`;
 if(t==="mabimg"){let h=Math.floor(n/100),d=Math.floor(n%100/10),e=n%10;return `<div class="ni-mab">${"<i class=h></i>".repeat(Math.min(9,h))}${"<i class=t></i>".repeat(Math.min(9,d))}${"<i class=e></i>".repeat(e)}</div>`}
 if(t==="blocks")return niCells(Math.min(50,n),50,"ni-blocks");
 if(t==="bundles")return `<div class="ni-emoji">${"▥".repeat(Math.min(10,Math.floor(n/10)))} ${"│".repeat(n%10)}</div>`;
 if(t==="lineimg"||t==="emptyline"){let max=Math.max(10,Math.ceil(Math.max(1,n)/10)*10);return `<div class="ni-line"><hr>${Array.from({length:11},(_,i)=>`<i style="left:${i*10}%"><span>${t==="emptyline"?"":Math.round(max*i/10)}</span></i>`).join("")}${t==="emptyline"?"":`<b style="left:${Math.min(100,n/max*100)}%">${n}</b>`}</div>`}
 if(t==="hundredimg")return `<div class="ni-hundred">${Array.from({length:100},(_,i)=>`<i class="${i+1===n?"hit":""}">${i+1}</i>`).join("")}</div>`;
 if(t==="house"||t==="placeimg"){let L=[["M",1e6],["HD",1e5],["TD",1e4],["D",1e3],["H",100],["T",10],["E",1]];return `<div class="ni-place">${L.map(x=>`<span><b>${x[0]}</b>${Math.floor(n/x[1])%10}</span>`).join("")}</div>`}
 if(t==="moneyimg")return `<div class="ni-money">${renderStudioMoney(n>=2?2:1)}</div>`;
 if(t==="objects")return `<div class="ni-emoji">${"● ".repeat(Math.min(30,n))}</div>`;
 if(t==="groupsimg")return `<div class="ni-groups"><span>${"●".repeat(a)}</span><span>${"●".repeat(b)}</span></div>`;
 if(t==="arrayimg")return niCells(Math.min(100,n),Math.min(100,n),"ni-array");
 if(t==="splitimg")return `<div class="ni-split"><b>${n}</b><em>╱ ╲</em><section><span>${a}</span><span>${b}</span></section></div>`;
 if(t==="partwhole")return `<div class="ni-partwhole"><b>${n}</b><section><span>${a}</span><span>${b}</span></section></div>`;
 if(t==="wordimg")return `<div class="ni-emoji">${n<=20?NUMWORDS[n]:n.toLocaleString("nl-BE")}</div>`;
 if(t==="operationimg")return `<div class="ni-emoji">${a} + ${b} = ${n}</div>`;
 return `<div class="ni-emoji">${n.toLocaleString("nl-BE")}</div>`}
const WORK_SYMBOLS=[
 {id:"silence",label:"Stil werken",src:"assets/icons/icon-silence-user.png"},
 {id:"whisper",label:"Fluisteren",src:"assets/icons/icon-whisper-user.png"},
 {id:"together",label:"Samenwerken",src:"assets/icons/icon-together-user.png"},
 {id:"help",label:"Hulp vragen",src:"assets/icons/icon-help-user.png"},
 {id:"independent",label:"Zelfstandig werken",src:"assets/icons/icon-independent-user.png"},
 {id:"listen",label:"Luisteren",src:"assets/icons/icon-listen-user.png"},
 {id:"discuss",label:"Overleggen",src:"assets/icons/icon-discuss-user.png"},
 {id:"present",label:"Presenteren",src:"assets/icons/icon-present-user.png"}
];
const workSymbol=(id)=>WORK_SYMBOLS.find(x=>x.id===id)||WORK_SYMBOLS[0];
const tools=[
{id:"timer",cat:"klas",icon:"⏱️",name:"Timer",desc:"Aftellen op het bord"},
{id:"stoplicht",cat:"klas",icon:"🚦",name:"Stoplicht",desc:"Visuele klasafspraken"},
{id:"namen",cat:"klas",icon:"🎯",name:"Naamkiezer",desc:"Kies willekeurig een leerling"},
{id:"spinner",cat:"klas",icon:"🎡",name:"Draaischijf",desc:"Random keuze of beurt"},
{id:"dice",cat:"klas",icon:"🎲",name:"Dobbelstenen",desc:"1 of 2 dobbelstenen"},
{id:"note",cat:"klas",icon:"📝",name:"Notitie",desc:"Grote instructie op bord"},
{id:"whiteboard",cat:"visuals",icon:"✏️",name:"Tekenbord",desc:"Schrijven en tekenen"},
{id:"numberline",cat:"rekenen",icon:"↔️",name:"Getallenlijn",desc:"Instelbare getallenlijn"},
{id:"tenframe",cat:"rekenen",icon:"🔟",name:"Tienveld",desc:"Klik om fiches te plaatsen"},
{id:"hundreds",cat:"rekenen",icon:"💯",name:"Honderdveld",desc:"Markeer patronen en getallen"},
{id:"base10",cat:"rekenen",icon:"🧱",name:"MAB",desc:"Honderdtallen, tientallen, eenheden"},
{id:"fractions",cat:"rekenen",icon:"½",name:"Breukenlab",desc:"Bouw, kleur en vergelijk stroken en cirkels"},
{id:"clock",cat:"rekenen",icon:"🕒",name:"Klok",desc:"Analoog en digitaal oefenen"},
{id:"geoboard",cat:"rekenen",icon:"◇",name:"Geobord",desc:"Vormen en meetkunde"},
{id:"words",cat:"taal",icon:"Aa",name:"Woordkaarten",desc:"Toon woorden één voor één"},
{id:"wordflasher",cat:"taal",icon:"⚡",name:"Woordenflitser+",desc:"Automatisch of handmatig flitsen met voortgang"},
{id:"flashcards",cat:"taal",icon:"▤",name:"Flashcards",desc:"Woord en betekenis oefenen met automatische controle"},
{id:"stopwatch",cat:"klas",icon:"⏱",name:"Stopwatch",desc:"Meet verstreken tijd"},
{id:"visualtimer",cat:"klas",icon:"◔",name:"Visuele timer",desc:"Tijd zichtbaar als cirkel"},
{id:"worksymbols",cat:"klas",icon:"👥",name:"Werksymbolen",desc:"Stil, fluisteren, samenwerken"},
{id:"groups",cat:"klas",icon:"👨‍👩‍👧",name:"Groepenmaker",desc:"Verdeel namen willekeurig"},
{id:"scoreboard",cat:"klas",icon:"🏆",name:"Scorebord",desc:"Punten voor teams"},
{id:"behaviorrace",cat:"klas",icon:"🏁",name:"Klasrace",desc:"Positief gedrag zichtbaar maken als een race"},
{id:"schedule",cat:"klas",icon:"📋",name:"Dagplanning",desc:"Activiteiten en tijden"},
{id:"event",cat:"klas",icon:"📅",name:"Aftellen naar event",desc:"Tel af naar een datum"},
{id:"sound",cat:"klas",icon:"🔊",name:"Geluidsniveau",desc:"Visuele geluidsmeter"},
{id:"poll",cat:"interactie",icon:"📊",name:"Poll",desc:"Snelle klassikale stemming"},
{id:"numbersenserace",cat:"interactie",icon:"⚡",name:"Getalgevoel-race",desc:"Twee teams herkennen getalbeelden"},
{id:"duel",cat:"interactie",icon:"⚔",name:"Duel",desc:"Twee leerlingen spelen gelijktijdig naast elkaar"},
{id:"image",cat:"media",icon:"🖼️",name:"Afbeelding",desc:"Toon een afbeelding via URL"},
{id:"pdfboard",cat:"media",icon:"📄",name:"PDF op bord",desc:"Upload een PDF en schrijf of markeer erboven"},
{id:"video",cat:"media",icon:"▶️",name:"Video",desc:"Embed een lesvideo"},
{id:"stickers",cat:"visuals",icon:"⭐",name:"Stickers",desc:"Visuele feedback en aanwijzingen"},
{id:"multiplication",cat:"rekenen",icon:"✕",name:"Maaltafelflitser",desc:"Opgave → aftellen → oplossing"},
{id:"splits",cat:"rekenen",icon:"⑩",name:"Splitsflitser",desc:"Automatische splitsingen"},
{id:"daystart",cat:"klas",icon:"🌅",name:"Dagstart",desc:"Rekenen, taal en oplossingen"},
{id:"trafficstop",cat:"klas",icon:"🛑",name:"Stopbord",desc:"Direct visueel stopsignaal"},
{id:"silence",cat:"klas",icon:"🤫",name:"Werken in stilte",desc:"Groot stiltebord"},
{id:"voice",cat:"klas",icon:"🔉",name:"Stemniveaus",desc:"Fluister-, groeps-, praat- en speelplaatsstem"},
{id:"exit",cat:"interactie",icon:"🚪",name:"Exit ticket",desc:"Snelle afsluitende check"},
{id:"birthday",cat:"klas",icon:"🎂",name:"Verjaardag",desc:"Vier een leerling op het bord"},
{id:"points",cat:"klas",icon:"🌟",name:"Positieve punten",desc:"Individuele of groepswaardering"},
{id:"directions",cat:"klas",icon:"🧭",name:"Stappenplan",desc:"Projecteer duidelijke instructies"},
{id:"daystartpro",cat:"dagstart",icon:"🌞",name:"Slimme dagstart",desc:"Genereer rekenen + taal per niveau"},
{id:"richdaystarter",cat:"dagstart",icon:"🌅",name:"Dagstarter+",desc:"Datum, tijd, seizoen, week en weetje"},
{id:"attendance",cat:"dagstart",icon:"🙋",name:"Aanwezigheden",desc:"Tik leerlingen aanwezig/afwezig"},
{id:"calendar",cat:"dagstart",icon:"📆",name:"Datum & kalender",desc:"Vandaag op het bord"},
{id:"question",cat:"interactie",icon:"❔",name:"Vraag van de dag",desc:"Klassikale denk- of praatvraag"},
{id:"weather",cat:"dagstart",icon:"🌤️",name:"Weer",desc:"Bespreek het weer van vandaag"},
{id:"routine",cat:"dagstart",icon:"✅",name:"Routine checklist",desc:"Vaste klasroutine afvinken"},
{id:"rewardjar",cat:"klas",icon:"🏺",name:"Beloningspot",desc:"Werk samen naar een klasdoel"},
{id:"randomnum",cat:"leerkracht",icon:"🔢",name:"Willekeurig getal",desc:"Kies een getal binnen een bereik"},
{id:"placevalue",cat:"rekenen",icon:"123",name:"Plaatswaardetabel",desc:"D H T E visueel oefenen"},
{id:"rekenrek",cat:"rekenen",icon:"🧮",name:"Rekenrek",desc:"Interactief rekenrek tot 20"},
{id:"numberimages",cat:"rekenen",icon:"🔢",name:"Getalbeelden",desc:"Exacte beelden uit de Werkbladstudio"},
{id:"mathflasher",cat:"rekenen",icon:"⚡",name:"Rekenflitser",desc:"Automatisch flitsen met sommen en getalbeelden"},
{id:"money",cat:"rekenen",icon:"€",name:"Geld",desc:"Euro's klassikaal samenstellen"},
{id:"quickquiz",cat:"interactie",icon:"⚡",name:"Snelle quiz",desc:"Vraag met vier antwoordknoppen"},
{id:"progress",cat:"klas",icon:"▰",name:"Voortgangsbalk",desc:"Maak werktijd of lesvoortgang zichtbaar"},
{id:'seating',cat:'klas',icon:'▦',name:'Zitplan',desc:'Plaats leerlingen in een klasopstelling'},
{id:'helpqueue',cat:'klas',icon:'?',name:'Hulpwachtrij',desc:'Wie heeft hulp nodig?'},
{id:'turntracker',cat:'klas',icon:'↻',name:'Beurten',desc:'Houd beurten bij'},
{id:'classrules',cat:'klas',icon:'✓',name:'Klasafspraken',desc:'Toon maximaal acht afspraken'},
{id:'numberwall',cat:'rekenen',icon:'▥',name:'Getallenmuur',desc:'Getalrelaties en ontbrekende vakken'},
{id:'emptynumberline',cat:'rekenen',icon:'↔',name:'Lege getallenlijn',desc:'Plaats getallen en sprongen'},
{id:'fractionwall',cat:'rekenen',icon:'⅓',name:'Breukenmuur',desc:'Vergelijk breuken visueel'},
{id:'ratio',cat:'rekenen',icon:'⇄',name:'Verhoudingstabel',desc:'Werk verhoudingen uit'},
{id:'rounding',cat:'rekenen',icon:'≈',name:'Afronden',desc:'Afronden op een getallenlijn'},
{id:'patterns',cat:'rekenen',icon:'◇',name:'Patronen',desc:'Maak en vervolledig patronen'},
{id:'coordinates',cat:'rekenen',icon:'⌖',name:'Coördinaten',desc:'Plaats punten op een rooster'},
{id:'buildnumber',cat:'rekenen',icon:'347',name:'Bouw het getal',desc:'Bouw getallen met plaatswaarden'},
{id:'handwriting',cat:'taal',icon:'✎',name:'Schrijflijnen & schrijfhuisjes',desc:'Aanpasbare liniatuur voor schrijfonderwijs'},
{id:'articlemarker',cat:'taal',icon:'Aa',name:'Tekstmarkeerder',desc:'Markeer woorden en zinsdelen'},
{id:'sentencebuilder',cat:'taal',icon:'≡',name:'Zinnen bouwen',desc:'Zet woorden in de juiste volgorde'},
{id:'syllables',cat:'taal',icon:'·',name:'Lettergrepen',desc:'Verdeel woorden in lettergrepen'},
{id:'dictation',cat:'taal',icon:'✎',name:'Dictee',desc:'Toon en verberg dicteewoorden'},
{id:'conceptmap',cat:'visuals',icon:'⌘',name:'Conceptmap',desc:'Verbind begrippen en ideeën'},
{id:'venn',cat:'visuals',icon:'◯',name:'Venn-diagram',desc:'Vergelijk twee verzamelingen'},
{id:'timeline',cat:'visuals',icon:'━',name:'Tijdlijn',desc:'Plaats gebeurtenissen chronologisch'},
{id:'tschema',cat:'visuals',icon:'T',name:'T-schema',desc:'Vergelijk twee kanten'},
{id:'covercard',cat:'media',icon:'▰',name:'Afdekkaart',desc:'Dek antwoorden tijdelijk af'},
{id:'spotlight',cat:'media',icon:'◉',name:'Spotlight',desc:'Richt aandacht op één deel'},
{id:'buzzer',cat:'interactie',icon:'●',name:'Buzzer',desc:'Twee teams drukken om ter snelst'},
{id:'teamquiz',cat:'interactie',icon:'A',name:'Teamquiz',desc:'Quiz met teams en score'},
{id:'truefalse',cat:'interactie',icon:'✓×',name:'Waar / niet waar',desc:'Snelle klassikale keuze'},
{id:'bingo',cat:'interactie',icon:'▦',name:'Bingo',desc:'Maak een bingobord'},
{id:'memorygame',cat:'interactie',icon:'▣',name:'Memory',desc:'Zoek gelijke paren'},
{id:'daygoal',cat:'dagstart',icon:'◎',name:'Dagdoel',desc:'Toon één duidelijk dagdoel'},
{id:'wordofday',cat:'dagstart',icon:'W',name:'Woord van de dag',desc:'Woord, betekenis en voorbeeldzin'},
{id:'countdown',cat:'leerkracht',icon:'⌛',name:'Aftelklok',desc:'Grote aftelklok'},
{id:'randomletter',cat:'leerkracht',icon:'A',name:'Willekeurige letter',desc:'Kies een letter'},
{id:'screenveil',cat:'leerkracht',icon:'▮',name:'Schermgordijn',desc:'Dek een deel af'},
{id:'fractionstrips',cat:'rekenen',icon:'▤',name:'Breukenstroken',desc:'Vergelijk en bouw breuken met stroken'},
{id:'fractioncircles',cat:'rekenen',icon:'◔',name:'Breukencirkels',desc:'Visualiseer teller en noemer in een cirkel'},
{id:'decimalpercent',cat:'rekenen',icon:'%',name:'Decimalen & procenten',desc:'Koppel breuk, decimaal en percentage'},
{id:'angletool',cat:'rekenen',icon:'∠',name:'Hoeken & graden',desc:'Meet en bouw hoeken interactief'},
{id:'balancescale',cat:'rekenen',icon:'⚖',name:'Balans',desc:'Onderzoek gelijkheid met een weegschaal'},
{id:'timeschart',cat:'rekenen',icon:'×',name:'Tafelkaart',desc:'Ontdek patronen in de tafels 1–12'},
{id:'factfamilies',cat:'rekenen',icon:'△',name:'Getallenfamilies',desc:'Ontdek samenhang tussen bewerkingen'},
{id:'compare',cat:'rekenen',icon:'<>',name:'Vergelijk getallen',desc:'Groter dan, kleiner dan en gelijk aan'},
{id:'elapsedtime',cat:'rekenen',icon:'🕒',name:'Tijdsduur',desc:'Bereken verstreken tijd visueel'},
{id:'mathtictac',cat:'interactie',icon:'#',name:'Reken-boter-kaas-en-eieren',desc:'Verdien een vak met een juiste rekenopgave'},
{id:'wordrelations',cat:'taal',icon:'↔',name:'Woordrelaties',desc:'Synoniemen en antoniemen oefenen'},
{id:'missingnumber',cat:'rekenen',icon:'?',name:'Ontbrekend getal',desc:'Vind het ontbrekende getal in een bewerking'},
{id:'areaperimeter',cat:'rekenen',icon:'▭',name:'Oppervlakte & omtrek',desc:'Oefen rechthoeken met rooster en maten'},
{id:'factorsmultiples',cat:'rekenen',icon:'×',name:'Factoren & veelvouden',desc:'Onderzoek delers, factoren en veelvouden'},
{id:'operationsorder',cat:'rekenen',icon:'()',name:'Bewerkingsvolgorde',desc:'Oefen de volgorde van bewerkingen'},
{id:'readingstrategy',cat:'taal',icon:'📖',name:'Leesstrategieën',desc:'Hoofdgedachte, feit/mening en context oefenen'},
{id:'sequence',cat:'taal',icon:'1→2',name:'Volgorde zetten',desc:'Zet stappen of gebeurtenissen in de juiste volgorde'},
{id:'numberproperties',cat:'rekenen',icon:'2·3',name:'Getaleigenschappen',desc:'Even, oneven, priem en samengesteld onderzoeken'},
{id:'averageRange',cat:'rekenen',icon:'x̄',name:'Gemiddelde & bereik',desc:'Onderzoek gemiddelde en bereik van een getallenreeks'},
{id:'causeeffect',cat:'taal',icon:'→',name:'Oorzaak & gevolg',desc:'Koppel oorzaak en gevolg in zinnen'},
{id:'supportdetails',cat:'taal',icon:'☰',name:'Hoofdgedachte & details',desc:'Sorteer ondersteunende details bij de hoofdgedachte'},
{id:'authorspurpose',cat:'taal',icon:'✎',name:'Doel van de schrijver',desc:'Informeren, overtuigen of vermaken'},
{id:'ggdkgv',cat:'rekenen',icon:'∩',name:'GGD & KGV',desc:'Onderzoek grootste gemene deler en kleinste gemene veelvoud'},
{id:'ruler',cat:'leerkracht',icon:'⌇',name:'Liniaal',desc:'Digitale liniaal'}
];
const TOOL_ICON_IMAGES={"timer":"assets/icons/icon-alarm-clock.png","stoplicht":"assets/icons/icon-traffic-light.png","namen":"assets/icons/icon-user.png","spinner":"assets/icons/icon-spinner.png","dice":"assets/icons/icon-dice.png","note":"assets/icons/icon-pencil.png","whiteboard":"assets/icons/icon-chalkboard.png","numberline":"assets/icons/icon-ruler.png","tenframe":"assets/icons/icon-ten-frame.png","hundreds":"assets/icons/icon-hundred-grid.png","base10":"assets/icons/icon-mab-official.png","fractions":"assets/icons/icon-fraction.png","clock":"assets/icons/icon-clock.png","geoboard":"assets/icons/icon-geoboard-v2.svg","words":"assets/icons/icon-letter-a.png","wordflasher":"assets/icons/icon-letter-a.png","flashcards":"assets/icons/icon-open-book.png","stopwatch":"assets/icons/icon-stopwatch.png","visualtimer":"assets/icons/icon-clock.png","worksymbols":"assets/icons/icon-group.png","groups":"assets/icons/icon-group-clean.png","scoreboard":"assets/icons/icon-trophy.png","behaviorrace":"assets/icons/icon-rocket.png","schedule":"assets/icons/icon-checklist.png","event":"assets/icons/icon-calendar.png","sound":"assets/icons/icon-megaphone.png","poll":"assets/icons/icon-bar-chart.png","numbersenserace":"assets/icons/icon-rocket.png","duel":"assets/icons/icon-gamepad.png","qrcode":"assets/icons/icon-qr.png","link":"assets/icons/icon-link.png","image":"assets/icons/icon-image.png","pdfboard":"assets/icons/icon-pdf.png","video":"assets/icons/icon-video.png","embed":"assets/icons/icon-laptop.png","stickers":"assets/icons/icon-star.png","multiplication":"assets/icons/icon-operations.png","splits":"assets/icons/icon-splits-v2.svg","daystart":"assets/icons/icon-sun-clean.png","trafficstop":"assets/icons/icon-stop-sign.svg","silence":"assets/icons/icon-silence.svg","voice":"assets/icons/icon-microphone.png","exit":"assets/icons/icon-home.png","birthday":"assets/icons/icon-party.png","points":"assets/icons/icon-star.png","directions":"assets/icons/icon-checklist.png","daystartpro":"assets/icons/icon-sun-clean.png","richdaystarter":"assets/icons/icon-calendar-day.png","attendance":"assets/icons/icon-hand.png","calendar":"assets/icons/icon-calendar.png","question":"assets/icons/icon-chat.png","weather":"assets/icons/icon-partly-cloudy.png","routine":"assets/icons/icon-check.png","rewardjar":"assets/icons/icon-trophy-2.png","randomnum":"assets/icons/icon-calculator.png","placevalue":"assets/icons/icon-placevalue-table.svg","rekenrek":"assets/icons/icon-abacus.png","numberimages":"assets/icons/icon-ten-frame.png","mathflasher":"assets/icons/icon-calculator.png","money":"assets/icons/icon-money.png","quickquiz":"assets/icons/icon-quiz.png","progress":"assets/icons/icon-bar-chart.png","liveclass":"assets/icons/icon-laptop.png","seating":"assets/icons/icon-chair.png","helpqueue":"assets/icons/icon-help-queue.svg","turntracker":"assets/icons/icon-turns.svg","classrules":"assets/icons/icon-class-rules.svg","numberwall":"assets/icons/icon-number-wall-v2.svg","emptynumberline":"assets/icons/icon-ruler.png","fractionwall":"assets/icons/icon-fraction.png","ratio":"assets/icons/icon-ratio-table.svg","rounding":"assets/icons/icon-rounding.svg","patterns":"assets/icons/icon-puzzle.png","coordinates":"assets/icons/icon-target.png","buildnumber":"assets/icons/icon-build-number-v2.svg","handwriting":"assets/icons/icon-pencil.png","articlemarker":"assets/icons/icon-pencil.png","sentencebuilder":"assets/icons/icon-letter-a.png","syllables":"assets/icons/icon-open-book.png","dictation":"assets/icons/icon-dictation.svg","conceptmap":"assets/icons/icon-puzzle-2.png","venn":"assets/icons/icon-puzzle.png","timeline":"assets/icons/icon-calendar.png","tschema":"assets/icons/icon-class-board.png","covercard":"assets/icons/icon-cover-card.svg","spotlight":"assets/icons/icon-magnifier.png","buzzer":"assets/icons/icon-buzzer.svg","teamquiz":"assets/icons/icon-quiz.png","truefalse":"assets/icons/icon-true-false.svg","bingo":"assets/icons/icon-bingo.svg","memorygame":"assets/icons/icon-puzzle-2.png","daygoal":"assets/icons/icon-day-goal.svg","wordofday":"assets/icons/icon-lightbulb.png","countdown":"assets/icons/icon-hourglass.png","randomletter":"assets/icons/icon-letter-a.png","screenveil":"assets/icons/icon-screen-curtain.svg","ruler":"assets/icons/icon-ruler.png","fractionstrips":"assets/icons/icon-fraction-strips.svg","fractioncircles":"assets/icons/icon-fraction-circles.svg","decimalpercent":"assets/icons/icon-decimal-percent.svg","angletool":"assets/icons/icon-angle-v2.svg","balancescale":"assets/icons/icon-balance-v2.svg","timeschart":"assets/icons/icon-times-chart.svg"};
const DEFAULT_FAVORITES=["timer","namen","spinner","dice","numberline","tenframe","clock","whiteboard"];
function getFavorites(){try{const x=JSON.parse(localStorage.getItem("kbs_favorites_v19")||"null");return Array.isArray(x)?x:DEFAULT_FAVORITES.slice()}catch{return DEFAULT_FAVORITES.slice()}}
function saveFavorites(ids){localStorage.setItem("kbs_favorites_v19",JSON.stringify([...new Set(ids)]))}
function toggleFavorite(id){let fav=getFavorites();fav=fav.includes(id)?fav.filter(x=>x!==id):[...fav,id];saveFavorites(fav);renderTools()}
let activeCat="favorieten", z=200, undoStack=[], timerInt=null;
const grid=document.querySelector("#toolGrid"),board=document.querySelector("#board"),empty=document.querySelector("#emptyState");
const toolDrawer=document.querySelector("#toolDrawer"),drawerTitle=document.querySelector("#drawerTitle");
const catNames={favorieten:"Favorieten",klas:"Klas",rekenen:"Rekenen",taal:"Taal",visuals:"Beeld",media:"Media",interactie:"Spelen",dagstart:"Dagstart",leerkracht:"Tools"};
function setDrawer(open=true){toolDrawer.classList.toggle("open",open);document.body.classList.toggle("drawer-open",open)}
document.querySelector("#closeDrawer").onclick=()=>setDrawer(false);
const moreBtn=document.querySelector("#moreBtn"),moreMenu=document.querySelector("#moreMenu");
if(moreBtn&&moreMenu){
 moreBtn.onclick=e=>{e.stopPropagation();moreMenu.classList.toggle("open")};
 document.addEventListener("click",e=>{if(!e.target.closest("#moreMenu")&&!e.target.closest("#moreBtn"))moreMenu.classList.remove("open")});
}
function inspectWidget(w){document.querySelectorAll(".widget.selected").forEach(x=>x.classList.remove("selected"));if(w)w.classList.add("selected")}
// V32: centrale verwijderroute; werkt ook als een individuele widget-handler faalt.
board.addEventListener("click",e=>{
 const btn=e.target.closest(".widget .remove");
 if(!btn)return;
 e.preventDefault();e.stopImmediatePropagation();
 const widget=btn.closest(".widget");
 if(!widget||!board.contains(widget))return;
 saveUndo();
 const wasFull=widget.classList.contains("board-fullscreen");
 widget.remove();
 if(wasFull||!board.querySelector(".widget.board-fullscreen"))document.body.classList.remove("module-focus-mode");
 updateEmpty();savePage();saveAll();
},true);


// V46: widget blijft versleepbaar wanneer de greep buiten beeld valt.
let kbsMoveState=null;
board.addEventListener("pointerdown",e=>{
 const w=e.target.closest(".widget");
 if(!w||w.classList.contains("locked")||w.classList.contains("board-fullscreen")||w.classList.contains("spotlight-widget"))return;
 const grip=e.target.closest(".move-grip");
 const interactive=e.target.closest("button,input,select,textarea,a,label,[contenteditable='true'],canvas,.resize-handle,.no-drag,.module-settings");
 if(interactive&&!grip)return;
 kbsMoveState={w,sx:e.clientX,sy:e.clientY,sl:parseFloat(w.style.left)||w.offsetLeft,st:parseFloat(w.style.top)||w.offsetTop,pid:e.pointerId};
 (grip||w).setPointerCapture?.(e.pointerId);w.style.zIndex=++z;e.preventDefault();e.stopPropagation();
},true);
board.addEventListener("pointermove",e=>{
 if(!kbsMoveState||e.pointerId!==kbsMoveState.pid)return;
 const {w,sx,sy,sl,st}=kbsMoveState;
 w.style.left=(sl+e.clientX-sx)+"px";w.style.top=(st+e.clientY-sy)+"px";e.preventDefault();
},true);
const finishKbsMove=e=>{
 if(!kbsMoveState||e.pointerId!==kbsMoveState.pid)return;
 const {w}=kbsMoveState;kbsMoveState=null;
 const minVisible=70;
 let left=parseFloat(w.style.left)||0,top=parseFloat(w.style.top)||0;
 left=Math.max(-(w.offsetWidth-minVisible),left);
 top=Math.max(0,top);
 w.style.left=left+"px";w.style.top=top+"px";
 ensureBoardExtent();savePage();scheduleSave();
};
board.addEventListener("pointerup",finishKbsMove,true);
board.addEventListener("pointercancel",finishKbsMove,true);

document.addEventListener("keydown",e=>{
 if(e.target.matches("input,textarea,select,[contenteditable='true']"))return;
 if(e.key==="Home"){board.scrollTo({left:0,top:0,behavior:"smooth"});return}
 if((e.ctrlKey||e.metaKey)&&e.shiftKey&&e.key.toLowerCase()==="r"){e.preventDefault();recoverWidgets();return}
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="j"){e.preventDefault();const w=document.querySelector(".widget.selected")||[...board.querySelectorAll(".widget")].at(-1);scrollWidgetIntoBoardView(w)}
});
document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;const spot=document.querySelector(".spotlight-widget");if(spot){e.preventDefault();spot.querySelector(".spot-close")?.click();return}const full=document.querySelector(".widget.board-fullscreen");if(full){e.preventDefault();full.querySelector(".module-fullscreen")?.click();return}if(annotating){e.preventDefault();annotating=false;drawing=false;ann.classList.remove("active");annotateBtn.classList.remove("active");document.querySelector(".ink-palette")?.classList.remove("show")}});

function renderTools(){
 const q=document.querySelector("#toolSearch").value.toLowerCase(),fav=getFavorites();
 let list=tools.filter(t=>(activeCat==="favorieten"?fav.includes(t.id):t.cat===activeCat) && (t.name+" "+t.desc).toLowerCase().includes(q));
 grid.innerHTML=list.length?list.map(t=>`<div class="tool-card" data-tool="${t.id}"><button class="favorite-toggle ${fav.includes(t.id)?"active":""}" type="button" title="${fav.includes(t.id)?"Uit favorieten verwijderen":"Aan favorieten toevoegen"}">${fav.includes(t.id)?"★":"☆"}</button><button class="tool-open" type="button"><span class="ico">${TOOL_ICON_IMAGES[t.id]?`<img class="tool-icon-img" src="${TOOL_ICON_IMAGES[t.id]}" alt="" draggable="false">`:t.icon}</span><strong>${t.name}</strong><small>${t.desc}</small></button></div>`).join(""):`<div class="empty-tools">${activeCat==="favorieten"?"Nog geen favorieten. Klik bij een tool op ☆ om hem hier te bewaren.":"Geen tools gevonden."}</div>`;
 /* Tool actions are handled once by the delegated listener below. */
}
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeCat=b.dataset.cat;drawerTitle.textContent=catNames[activeCat]||"Bordtools";renderTools();setDrawer(true)});
// V26: één permanente event-delegation voor de toolbibliotheek.
// renderTools() mag hierdoor nooit extra addWidget-listeners opstapelen.
let lastToolAction={id:"",at:0};
grid.addEventListener("click",e=>{
 const card=e.target.closest(".tool-card"); if(!card)return;
 if(e.target.closest(".favorite-toggle")){e.stopPropagation();toggleFavorite(card.dataset.tool);return}
 if(!e.target.closest(".tool-open"))return;
 e.preventDefault();e.stopPropagation();
 const now=performance.now(),id=card.dataset.tool;
 if(lastToolAction.id===id&&now-lastToolAction.at<220)return;
 lastToolAction={id,at:now};
 createBoardWidget(id);
 if(innerWidth<1200)setDrawer(false);
});

document.querySelector("#toolSearch").oninput=renderTools;
document.querySelector("#boardTitle").oninput=e=>document.querySelector("#boardHeading").textContent=e.target.value||"Mijn klasbord";
document.querySelector("#gridToggle").onclick=()=>board.classList.toggle("grid-on");
document.querySelector("#fullscreenBtn").onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen?.();else await document.documentElement.requestFullscreen?.()}catch(e){console.warn("Volledig scherm kon niet worden gewijzigd",e)}};
document.querySelector("#menuBtn").onclick=()=>setDrawer(!toolDrawer.classList.contains("open"));
document.querySelector("#noteBtn").onclick=()=>addWidget("note");

function saveUndo(){undoStack.push(board.innerHTML);if(undoStack.length>15)undoStack.shift()}
document.querySelector("#undoBtn").onclick=()=>{if(!undoStack.length)return;board.innerHTML=undoStack.pop();rehydrate();updateEmpty()};
document.querySelector("#clearBtn").onclick=()=>{if(!confirm("Het hele bord leegmaken?"))return;saveUndo();board.querySelectorAll(".widget").forEach(w=>w.remove());updateEmpty()};

const SINGLE_WIDGET_TYPES=new Set(["spotlight","worksymbols","voice","richdaystarter","schedule"]);
let widgetCreateLock=false;
function newWidgetId(){return "widget-"+(globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+"-"+Math.random().toString(36).slice(2))}
function exitAllPresentationModes(){
 document.body.classList.remove("module-focus-mode");
 document.querySelectorAll(".widget.board-fullscreen").forEach(x=>x.classList.remove("board-fullscreen"));
 if(typeof annotating!=="undefined"&&annotating)annotating=false;
 document.querySelector("#annotationCanvas")?.classList.remove("active","eraser-mode");
 document.querySelector("#annotateBtn")?.classList.remove("active");
 document.querySelector(".eraser-cursor")?.classList.remove("show");
}
function rectsOverlap(a,b,pad=16){return !(a.x+a.w+pad<=b.x||b.x+b.w+pad<=a.x||a.y+a.h+pad<=b.y||b.y+b.h+pad<=a.y)}
function findFreeWidgetPosition(width=520,height=360){
 const bw=Math.max(400,board.clientWidth||1200),bh=Math.max(500,board.clientHeight||760);
 const w=Math.min(width,bw-24),h=Math.min(height,bh-24);
 const occupied=[...board.querySelectorAll(".widget")].map(el=>({x:parseFloat(el.style.left)||0,y:parseFloat(el.style.top)||0,w:el.offsetWidth||360,h:el.offsetHeight||220}));
 const step=32,startX=18,startY=18,maxX=Math.max(startX,bw-w-18),maxY=Math.max(startY,bh-h-18);
 for(let y=startY;y<=maxY;y+=step)for(let x=startX;x<=maxX;x+=step){
   const candidate={x,y,w,h};if(!occupied.some(r=>rectsOverlap(candidate,r,12)))return {x,y};
 }
 // Bord is vol: beperkte cascade, altijd binnen het zichtbare bord.
 const n=occupied.length,cols=Math.max(1,Math.floor((maxX-startX)/48)+1);
 return {x:Math.min(maxX,startX+(n%cols)*48),y:Math.min(maxY,startY+(Math.floor(n/cols)%8)*48)};
}
function fitNewWidgetToContent(w){
 if(w.classList.contains("spotlight-widget")||w.classList.contains("bare-cover-widget")||w.dataset.type==="clock")return;
 const margin=18,bw=Math.max(360,board.clientWidth||1200),bh=Math.max(420,board.clientHeight||800);
 const body=w.querySelector(".widget-body"),bar=w.querySelector(".widget-bar");
 // Start roomy, then measure the real content instead of forcing the teacher to resize immediately.
 const minW=Math.min(520,bw-margin*2),minH=Math.min(360,bh-margin*2);
 w.style.width=Math.max(w.offsetWidth||0,minW)+"px";
 requestAnimationFrame(()=>{
   const neededW=Math.min(bw-margin*2,Math.max(minW,body?.scrollWidth?body.scrollWidth+34:minW));
   const neededH=Math.min(bh-margin*2,Math.max(minH,(body?.scrollHeight||260)+(bar?.offsetHeight||54)+30));
   w.style.width=neededW+"px";w.style.height=neededH+"px";
   const left=Math.max(margin,Math.min(parseFloat(w.style.left)||margin,bw-neededW-margin));
   const top=Math.max(margin,Math.min(parseFloat(w.style.top)||margin,bh-neededH-margin));
   w.style.left=left+"px";w.style.top=top+"px";
   w.classList.add("initially-fitted");
   savePage();scheduleSave();
 });
}
function ensureBoardExtent(){
 let spacer=board.querySelector(":scope > .board-scroll-spacer");
 if(!spacer){spacer=document.createElement("div");spacer.className="board-scroll-spacer";spacer.setAttribute("aria-hidden","true");board.prepend(spacer)}
 let maxR=Math.max(board.clientWidth,1100),maxB=Math.max(board.clientHeight,720);
 board.querySelectorAll(".widget").forEach(w=>{
   maxR=Math.max(maxR,(parseFloat(w.style.left)||w.offsetLeft||0)+(w.offsetWidth||360)+90);
   maxB=Math.max(maxB,(parseFloat(w.style.top)||w.offsetTop||0)+(w.offsetHeight||240)+120);
 });
 spacer.style.width=Math.ceil(maxR)+"px";
 spacer.style.height=Math.ceil(maxB)+"px";
}
function recoverWidgets(){
 const ws=[...board.querySelectorAll(".widget")];
 if(!ws.length)return;
 saveUndo();
 const pad=20,gap=18,available=Math.max(680,board.clientWidth-40);
 const cols=available>=1400?3:available>=780?2:1;
 const width=Math.max(340,Math.min(600,(available-gap*(cols-1))/cols));
 let y=pad,row=[];
 ws.forEach((w,index)=>{
   const col=index%cols;
   if(col===0&&index>0){y+=Math.max(...row.map(x=>x.offsetHeight||300))+gap;row=[]}
   w.style.left=(pad+col*(width+gap))+"px";
   w.style.top=y+"px";
   if((w.offsetWidth||0)>available)w.style.width=width+"px";
   row.push(w);
 });
 ensureBoardExtent();
 board.scrollTo({left:0,top:0,behavior:"smooth"});
 savePage();scheduleSave();notify("Alle blokken zijn terug in beeld gebracht");
}
function scrollWidgetIntoBoardView(w){
 if(!w)return;
 const left=parseFloat(w.style.left)||0,top=parseFloat(w.style.top)||0;
 const right=left+w.offsetWidth,bottom=top+w.offsetHeight;
 if(left<board.scrollLeft)board.scrollLeft=Math.max(0,left-24);
 else if(right>board.scrollLeft+board.clientWidth)board.scrollLeft=Math.max(0,right-board.clientWidth+24);
 if(top<board.scrollTop)board.scrollTop=Math.max(0,top-24);
 else if(bottom>board.scrollTop+board.clientHeight)board.scrollTop=Math.max(0,bottom-board.clientHeight+24);
}
function removeWidget(w){
 if(!w||!w.isConnected)return;saveUndo();const wasFull=w.classList.contains("board-fullscreen");w.remove();if(wasFull||!document.querySelector(".widget.board-fullscreen"))document.body.classList.remove("module-focus-mode");updateEmpty();ensureBoardExtent();savePage();saveAll();
}
function bringWidgetForward(w){
 w.style.zIndex=++z;w.classList.add("selected","widget-attention");
 ensureBoardExtent();scrollWidgetIntoBoardView(w);
 setTimeout(()=>w.classList.remove("widget-attention"),450);
}
function createBoardWidget(id,options={}){
 if(widgetCreateLock&&!options.templateBatch)return null;
 const t=tools.find(x=>x.id===id);if(!t)return null;
 exitAllPresentationModes();
 if(SINGLE_WIDGET_TYPES.has(id)&&!options.forceNew){
   const existing=[...board.querySelectorAll(".widget")].find(x=>x.dataset.type===id);
   if(existing){bringWidgetForward(existing);notify(`${t.name} staat al op het bord`);return existing}
 }
 widgetCreateLock=true;
 try{
   saveUndo();
   const tpl=document.querySelector("#widgetTemplate").content.cloneNode(true),w=tpl.querySelector(".widget");
   const pos=findFreeWidgetPosition(options.width||520,options.height||360);
   w.dataset.type=id;w.dataset.widgetId=newWidgetId();
   w.style.left=(pos.x+(board.scrollLeft||0))+"px";w.style.top=(pos.y+(board.scrollTop||0))+"px";w.style.zIndex=++z;
   if(options.width)w.style.width=options.width+"px";if(options.height)w.style.height=options.height+"px";
   w.querySelector(".widget-title").textContent=t.name;
   w.querySelector(".widget-body").innerHTML=bodyFor(id);
   board.appendChild(w);
   wireWidget(w);fitNewWidgetToContent(w);w.style.visibility="visible";w.style.opacity="1";
   requestAnimationFrame(()=>w.classList.add("widget-ready"));
   updateEmpty();ensureBoardExtent();scrollWidgetIntoBoardView(w);savePage();scheduleSave();
   return w;
 } finally {setTimeout(()=>widgetCreateLock=false,80)}
}
function addWidget(id,options){return createBoardWidget(id,options)}

function fractionCircleSVG(n,d){
 d=Math.max(1,Math.min(12,+d||1));n=Math.max(0,Math.min(d,+n||0));
 const cx=100,cy=100,r=88,pt=a=>[cx+r*Math.cos(a),cy+r*Math.sin(a)];
 const sectors=Array.from({length:d},(_,i)=>{let a0=-Math.PI/2+i*2*Math.PI/d,a1=-Math.PI/2+(i+1)*2*Math.PI/d,p0=pt(a0),p1=pt(a1),large=(a1-a0)>Math.PI?1:0;return `<path d="M ${cx} ${cy} L ${p0[0]} ${p0[1]} A ${r} ${r} 0 ${large} 1 ${p1[0]} ${p1[1]} Z" fill="${i<n?"#28b9aa":"#eef4f6"}" stroke="#033663" stroke-width="1.6"/>`}).join("");
 return `<svg class="fraction-circle-svg" viewBox="0 0 200 200" role="img" aria-label="${n} van ${d} delen gekleurd">${sectors}<circle cx="100" cy="100" r="88" fill="none" stroke="#033663" stroke-width="2.5"/></svg>`;
}
function bodyFor(id){
 if(id==="timer")return `<div class="timer-display" data-seconds="300">05:00</div><div class="row"><button class="pill tminus">−1 min</button><button class="pill tstart">Start</button><button class="pill tplus">+1 min</button><button class="pill danger treset">Reset</button></div>`;
 if(id==="stoplicht")return `<div class="traffic-tool">
 <div class="traffic-settings module-settings">
  <label><span class="traffic-dot red"></span>Rood<input class="traffic-label-red" value="Zelfstandig werken"></label>
  <label><span class="traffic-dot orange"></span>Oranje<input class="traffic-label-orange" value="Groepswerk"></label>
  <label><span class="traffic-dot green"></span>Groen<input class="traffic-label-green" value="Klassikaal werk"></label>
 </div>
 <div class="traffic-student"><div class="traffic">
  <button class="light red" type="button" data-color="red" aria-label="Rood"></button>
  <button class="light orange" type="button" data-color="orange" aria-label="Oranje"></button>
  <button class="light green active" type="button" data-color="green" aria-label="Groen"></button>
 </div><div class="traffic-message">Klassikaal werk</div></div></div>`;
 if(id==="namen")return `<div class="names"><textarea placeholder="Eén naam per regel">Emma\nNoor\nLars\nMilan</textarea><div class="name-result">Wie is aan de beurt?</div><div class="row"><button class="pill choose-name">Kies naam</button></div></div>`;
 if(id==="spinner")return `<div class="spinner-tool">
 <div class="spinner-settings module-settings"><div class="spinner-setting-head"><strong>Vakken</strong><button class="pill spinner-add" type="button">＋ vak</button></div><div class="spinner-segments"></div></div>
 <div class="spinner-wrap"><div class="spinner-pointer">▼</div><div class="spinner"></div><div class="spinner-result"></div><button class="primary spin widget-controls" type="button">Draai</button></div>
 </div>`;
 if(id==="dice")return `<div class="studio-dice-stage">${renderWerkbladstudioGetalbeeld("dice",5)}</div><div class="row widget-controls"><button class="pill roll" type="button">Gooi</button><button class="pill two-dice" type="button">2 dobbelstenen</button><button class="pill dice-result-toggle active" type="button">Uitkomst tonen</button></div>`;
 if(id==="note")return `<textarea class="notearea" placeholder="Typ hier je instructie…">Vandaag leren we…</textarea>`;
 if(id==="numberline")return `<div class="numberline-tool"><div class="module-settings nl-settings"><label>Van <input class="nl-start" type="number" value="0"></label><label>Tot <input class="nl-end" type="number" value="1000"></label><label>Stap <select class="nl-step"><option>1</option><option>5</option><option>10</option><option>20</option><option>25</option><option>50</option><option selected>100</option></select></label><button class="pill nl-new">Toon lijn</button></div><div class="numberline"><svg class="nl-arcs" viewBox="0 0 1000 170" preserveAspectRatio="none"></svg><div class="nl-line"></div><div class="ticks"></div></div><div class="nl-exercise"><strong>Klik twee getallen om een sprong te tekenen.</strong><div class="nl-feedback"></div><div class="row widget-controls"><button class="pill nl-clear-arcs">Wis sprongen</button><button class="primary nl-check">Controleer</button></div></div></div>`;
 if(id==="tenframe")return `<div class="tenframe">${Array.from({length:10},()=>`<button class="cell"></button>`).join("")}</div><div class="row" style="margin-top:10px"><button class="pill clearcells">Wis</button></div>`;
 if(id==="hundreds")return `<div class="hundreds">${Array.from({length:100},(_,i)=>`<button>${i+1}</button>`).join("")}</div><div class="row" style="margin-top:8px"><button class="pill clear100">Wis markeringen</button></div>`;
 if(id==="base10")return `<div class="mab-controlbar"><label><input class="mab-auto" type="checkbox" checked> automatisch omwisselen</label><label><input class="mab-show" type="checkbox" checked> getal tonen</label></div><div class="mab-exact-stage"></div><div class="row compact-actions"><button class="pill add100">+100</button><button class="pill add10">+10</button><button class="pill add1">+1</button><button class="pill clearbase">Wis</button></div><div class="big-result baseval">111</div>`;
 if(id==="fractions")return `<div class="fraction-lab"><div class="module-settings fraction-lab-settings"><div class="fraction-mode"><button class="pill active" data-mode="strip">Strook</button><button class="pill" data-mode="circle">Cirkel</button><button class="pill" data-mode="both">Beide</button></div><label>Teller <input class="fl-num" type="number" min="0" max="20" value="3"></label><label>Noemer <input class="fl-den" type="number" min="1" max="20" value="4"></label><button class="pill fl-random">Nieuwe breuk</button><button class="pill fl-clear">Leegmaken</button></div><div class="fraction-lab-stage"></div><div class="fraction-lab-readout"></div></div>`;
 if(id==="clock")return `<div class="mode-toggle"><button class="clockanalog active" type="button">Analoog</button><button class="clockdigital" type="button">Digitaal</button></div><div class="clock-settings"><label>Streepjes <select class="clockticks"><option value="hour">uren</option><option value="half">halve uren</option><option value="quarter">kwartieren</option><option value="five" selected>5 minuten</option><option value="minute">1 minuut</option></select></label></div><div class="clockwrap">${clockFaceHTML()}</div><div class="row"><input class="clocktime" type="time" value="02:30"><button class="pill now" type="button">Nu</button></div>`;
 if(id==="geoboard")return `<div class="geoboard-tool"><div class="module-settings row"><label>Kleur <input class="geo-color" type="color" value="#28b9aa"></label><button class="pill geo-close" type="button">Sluit vorm</button><button class="pill geo-undo" type="button">Laatste lijn weg</button><button class="pill geo-clear" type="button">Wis</button></div><div class="geoboard interactive"><svg class="geo-lines" viewBox="0 0 600 600" preserveAspectRatio="none"></svg>${Array.from({length:49},(_,i)=>`<button class="peg" type="button" data-i="${i}" aria-label="Punt ${i+1}"></button>`).join("")}</div><div class="geo-help">Tik opeenvolgende punten aan om een vorm te tekenen.</div></div>`;
 if(id==="words")return `<div class="flashcard wordresult">herfst</div><div class="word-counter" aria-live="polite"></div><div class="word-controls"><select class="wordmode"><option>Flitskaarten</option><option>Dictee</option><option>Leeskaart</option><option>Woord raden</option></select><input class="wordsearch" placeholder="Zoek/filter woorden"><textarea class="wordlist" style="grid-column:1/-1;height:90px">herfst
boom
blad
bos
maan
raam
muur
muis</textarea></div><div class="row" style="margin-top:8px"><button class="pill prevword">Vorige</button><button class="pill shufflewords">Door elkaar</button><button class="pill nextword">Volgende</button><button class="pill hideword">Verberg/toon</button></div><div class="row" style="margin-top:7px"><button class="pill genwords">Laad woorden</button><select class="wordlevel"><option value="start">start</option>${Array.from({length:9},(_,i)=>`<option value="${i+1}">kern ${i+1}</option>`).join("")}</select></div>`;
 if(id==="whiteboard")return `<div class="whiteboard"><canvas width="640" height="300"></canvas></div><div class="row" style="margin-top:8px"><button class="pill erasecanvas">Wis tekenbord</button></div>`;
 if(id==="stopwatch")return `<div class="timer-display swdisplay">00:00</div><div class="row"><button class="pill swstart">Start</button><button class="pill swreset">Reset</button></div>`;
 if(id==="visualtimer")return `<div class="visualtimer" data-label="15:00"></div><div class="row" style="margin-top:10px"><label>min <input class="vtminutes" type="number" min="1" max="120" value="15" style="width:65px"></label><button class="pill vtstart">Start</button><button class="pill vtreset">Reset</button></div>`;
 if(id==="worksymbols")return `<div class="worksymbol-tool"><div class="module-settings"><p class="minihelp">Kies één werksymbool. Het gekozen symbool wordt groot op het bord getoond.</p><div class="work-symbol-picker">${WORK_SYMBOLS.map((x,i)=>`<button class="work-choice ${i===0?"active":""}" data-src="${x.src}" data-label="${x.label}"><img src="${x.src}" alt=""><span>${x.label}</span></button>`).join("")}</div></div><div class="work-symbol-display"><img src="${WORK_SYMBOLS[0].src}" alt=""><strong>${WORK_SYMBOLS[0].label}</strong></div></div>`;
 if(id==="groups")return `<div class="names"><textarea placeholder="Eén naam per regel">Emma\nNoor\nLars\nMilan\nLina\nAdam\nFinn\nLou</textarea><div class="row"><button class="pill makegroups">Maak 2 groepen</button><button class="pill moregroups">＋ groep</button></div><div class="group-output"></div></div>`;
 if(id==="scoreboard")return `<div class="scoreboard"><div class="team"><b>Team A</b><div class="score">0</div><div class="score-actions"><button class="minus">−</button><button class="plus">＋</button></div></div><div class="team"><b>Team B</b><div class="score">0</div><div class="score-actions"><button class="minus">−</button><button class="plus">＋</button></div></div></div>`;
 if(id==="schedule")return `<div class="schedule-tool"><div class="module-settings"><div class="schedule-preset-row"><input class="schedule-preset-name" placeholder="Naam vaste planning" value="Mijn schooldag"><button class="pill schedule-savepreset">Bewaar als vaste planning</button><select class="schedule-presets"><option value="">Vaste planning laden…</option></select></div><div class="schedule">${["08:30","09:20","10:30","11:20"].map((t,i)=>`<div class="schedule-row"><input type="time" value="${t}"><input value="${["Dagstart","Rekenen","Taal","Wereldoriëntatie"][i]}"><button class="schedule-del" title="Verwijderen">×</button></div>`).join("")}</div><div class="row"><button class="pill schedule-add">＋ onderdeel</button><button class="pill schedule-clear">Leegmaken</button></div></div><div class="schedule-student"></div></div>`;
 if(id==="event")return `<div class="eventbox"><input type="date" class="eventdate"><input class="eventname" value="Schoolreis"><div class="big-result eventresult" style="font-size:28px">Kies een datum</div></div>`;
 if(id==="sound")return `<div class="soundlabel">Microfoon starten</div><div class="soundmeter"><div class="soundfill"></div></div><div class="row" style="margin-top:10px"><button class="pill startsound">Start meter</button></div>`;
 if(id==="poll")return `<div class="poll-pro"><input class="pollq" value="Wat denk jij?"><div class="poll-editor"><div class="poll-edit-row"><input value="Optie A"><button class="tiny-danger delopt" type="button">×</button></div><div class="poll-edit-row"><input value="Optie B"><button class="tiny-danger delopt" type="button">×</button></div></div><div class="row"><button class="pill addopt" type="button">＋ optie</button><button class="primary startpoll" type="button">Start stemming</button><button class="pill resetpoll" type="button">Reset</button></div><div class="poll-options poll-bars"></div></div>`;
 if(id==="qrcode")return `<div class="linkbox"><input placeholder="Plak hier een URL"><div class="qr-placeholder" title="QR-visualisatie"></div><p style="font-size:11px;text-align:center;color:#42617d">Prototype: koppel in productie aan een QR-generator.</p></div>`;
 if(id==="link")return `<div class="linkbox"><input placeholder="https://..."><input class="linklabel" value="Open lesmateriaal"><div class="row"><button class="pill openlink">Open link</button></div></div>`;
 if(id==="image")return `<div class="linkbox"><input placeholder="Afbeeldings-URL"><div class="row"><button class="pill loadimage">Toon afbeelding</button></div><div class="imageout"></div></div>`;
 if(id==="video")return `<div class="video-tool"><div class="module-settings"><label>YouTube-link<input class="video-url" placeholder="https://www.youtube.com/watch?v=..."></label><button class="primary loadvideo" type="button">Toon video</button></div><div class="videoout"></div><div class="video-feedback"></div></div>`;
 if(id==="embed")return `<div class="embedbox"><input placeholder="https://website..."><div class="row"><button class="pill loadembed">Embed</button></div><div class="embedout"></div></div>`;
 if(id==="stickers")return `<div class="stickertray">${["⭐","👍","🎉","💡","❤️","👏","✅","❓"].map(s=>`<button>${s}</button>`).join("")}</div><div class="big-result stickerout" style="font-size:55px"></div>`;
 if(id==="multiplication")return `<div class="auto-card multiplication-pro"><div class="module-settings multiplication-settings"><div class="table-picker">${Array.from({length:12},(_,i)=>`<label><input type="checkbox" class="mtablecheck" value="${i+1}" ${[2,5,10].includes(i+1)?"checked":""}> ${i+1}</label>`).join("")}</div><div class="row"><label>Factor tot <input class="mfactor" type="number" min="1" max="20" value="10"></label><label>Tempo <input class="mdelay" type="number" min="1" max="15" value="3"> s</label><label><input class="mauto" type="checkbox"> automatisch</label></div></div><div class="multiplication-stage"><small>MAALTAFELFLITSER</small><div class="auto-problem">7 × 8</div><div class="countdown3"></div><div class="solution"></div><input class="manswer" inputmode="numeric" placeholder="antwoord"><div class="mfeedback"></div></div><div class="row widget-controls"><button class="primary mcheck">Controleer</button><button class="pill mshow">Toon oplossing</button><button class="pill mnext">Nieuwe oefening</button></div></div>`;
 if(id==="splits")return `<div class="auto-card split-card">
   <div class="split-model">
     <div class="split-top-box">10</div>
     <svg class="split-lines" viewBox="0 0 220 70" preserveAspectRatio="none" aria-hidden="true">
       <path d="M110 2 L110 18 L52 66 M110 18 L168 66" fill="none" stroke="#7f8a90" stroke-width="2"/>
     </svg>
     <div class="split-parts">
       <div class="split-part-box split-known">4</div>
       <div class="split-part-box split-missing"></div>
     </div>
   </div>
   <div class="countdown3"></div>
   <div class="solution"></div>
   <div class="split-settings">
     <label>Geheel <input class="splitmax" type="number" min="2" max="100" value="10"></label>
     <label>Wachttijd <input class="splitdelay" type="number" min="0" max="15" value="3"> s</label>
     <label class="split-random-label"><input class="splitrandom" type="checkbox" checked> willekeurig bekend deel</label>
     <button class="pill splitnext" type="button">Nieuwe splitsing</button><label class="toggle-line split-auto-label"><input class="splitauto" type="checkbox" checked> automatisch verder</label><label class="split-cycle-label">volgende na <select class="splitcycle"><option value="1">1 s</option><option value="2" selected>2 s</option><option value="3">3 s</option><option value="5">5 s</option></select></label>
   </div>
 </div>`;
 if(id==="daystart")return `<div class="daystart"><div class="day-panel"><h3>🌞 Goedemorgen!</h3><input class="daymessage" value="We starten rustig aan onze dag." style="width:100%;padding:8px;border:1px solid #dce5ec;border-radius:8px"><h3 style="margin-top:12px">➗ Rekenen</h3><div class="exercise-row"><input value="48 + 27 ="><button class="answer-chip" data-answer="75">toon</button></div><div class="exercise-row"><input value="6 × 7 ="><button class="answer-chip" data-answer="42">toon</button></div><div class="exercise-row"><input value="100 − 36 ="><button class="answer-chip" data-answer="64">toon</button></div></div><div class="day-panel"><h3>🔤 Taal</h3><div class="exercise-row"><input value="Maak meervoud: boom"><button class="answer-chip" data-answer="bomen">toon</button></div><div class="exercise-row"><input value="Tegenovergestelde van warm"><button class="answer-chip" data-answer="koud">toon</button></div><div class="exercise-row"><input value="Zet alfabetisch: kat – aap – vis"><button class="answer-chip" data-answer="aap – kat – vis">toon</button></div><div class="row" style="margin-top:12px"><button class="pill generateday">Nieuwe rekenoefeningen</button></div></div></div>`;
 if(id==="trafficstop")return `<div class="stopboard">STOP</div><p style="text-align:center;font-weight:800">Stop • kijk • luister</p>`;
 if(id==="silence")return `<div class="silence-board"><div class="silence-icon"><img src="${workSymbol("silence").src}" alt="Stil werken"></div><input class="silencetitle" value="We werken in stilte"><div class="silence-rules"><label><span>1</span><input value="Ik werk zelfstandig."></label><label><span>2</span><input value="Ik blijf rustig op mijn werkplek."></label><label><span>3</span><input value="Ik steek mijn hand op als ik hulp nodig heb."></label></div></div>`;
 if(id==="voice")return `<div class="voice-tool"><div class="module-settings voice-picker">${[workSymbol("silence"),workSymbol("whisper"),workSymbol("discuss"),workSymbol("present")].map((x,i)=>`<button class="voice ${i===0?"active":""}" data-level="${i}" data-label="${x.label}" data-src="${x.src}"><img src="${x.src}" alt=""><span>${i}</span><small>${x.label}</small></button>`).join("")}</div><div class="voice-display"><img src="${workSymbol("silence").src}" alt=""><strong>Niveau 0 · ${workSymbol("silence").label}</strong></div></div>`;
 if(id==="exit")return `<div class="exit-ticket"><input value="Hoe goed begreep je de les?"><textarea>Wat heb je vandaag geleerd?</textarea><div class="exit-results"><button data-v="1">😕</button><button data-v="2">😐</button><button data-v="3">🙂</button><button data-v="4">🤩</button></div><div class="name-result exitcount">0 reacties</div><button class="pill resetexit">Reset</button></div>`;
 if(id==="birthday")return `<div class="birthday"><div class="birthday-visual"><img class="birthday-hero" src="assets/icons/icon-birthday-user.png" alt="Verjaardagsfeest"><div class="birthday-age-badge" aria-live="polite"><strong>8</strong><span>jaar</span></div></div><h2>Hiep hiep hoera!</h2><div class="module-settings row"><label>Naam<input class="birthdayname" value="Naam"></label><label>Leeftijd<input class="birthdayage" type="number" value="8" min="1" max="99"></label></div><p class="birthdaytext">Vandaag vieren we Naam! Naam is 8 jaar! 🎉</p></div>`;
 if(id==="points")return `<div class="points-grid">${["Team 1","Team 2","Team 3","Team 4"].map(n=>`<div class="point-card"><input value="${n}"><div class="point-num">0</div><div class="point-actions"><button class="pminus">−</button><button class="pplus">＋</button></div></div>`).join("")}</div><p style="font-size:11px;color:#42617d">Voor positieve klasfeedback; pas namen en teams vrij aan.</p>`;
 if(id==="directions")return `<div class="directions">${["Neem je boek.","Open op de juiste pagina.","Werk zelfstandig.","Kijk je werk na."].map((x,i)=>`<div class="direction-step"><span>${i+1}</span><input value="${x}"></div>`).join("")}</div>`;
 if(id==="daystartpro")return `<div class="smart-daystart">
 <div class="generator-settings glass-inner">
  <label>Leerjaar<select class="dsgrade">${["L1","L2","L3","L4","L5","L6"].map(x=>`<option ${x==="L3"?"selected":""}>${x}</option>`).join("")}</select></label>
  <label>Bovengrens<div class="inline-setting"><input class="dsmax" type="number" min="1" max="1000000000" value="1000"><button type="button" class="mini dsresetmax" title="Standaard herstellen">↺</button></div></label>
  <label>Aantal per vak<input class="dscount" type="number" min="2" max="12" value="4"></label>
  <label>Rekenen<select class="dsmath"><option value="gemengd">gemengd</option><option value="optellen">optellen</option><option value="aftrekken">aftrekken</option><option value="tafels">tafels</option></select></label>
  <fieldset class="ds-table-field"><legend><label class="toggle-line"><input type="checkbox" class="dsusetables" checked> Tafels gebruiken</label></legend>
   <div class="ds-table-controls"><button type="button" class="tiny dsnone">geen</button><button type="button" class="tiny dsall">alle</button><button type="button" class="tiny dsclassic">2 · 5 · 10</button></div>
   <div class="ds-tables">${Array.from({length:12},(_,i)=>`<label><input type="checkbox" class="dstable" value="${i+1}" ${[2,5,10].includes(i+1)?"checked":""}> ${i+1}</label>`).join("")}</div>
  </fieldset>
  <label>Taal<select class="dslang"><option value="gemengd">gemengd</option><option value="spelling">spelling</option><option value="woordenschat">woordenschat</option><option value="zinsbouw">zinsbouw</option></select></label>
  <label>Eigen titel<input class="dstitle" value="Goedemorgen!"></label>
  <label class="ds-wide">Eigen tekst<textarea class="dstext">Werk rustig. Lees elke opdracht goed.</textarea></label>
 </div>
 <div class="daystart-actions"><button class="pill dssave" type="button">Bewaar instellingen</button><button class="primary dsgenerate" type="button">↻ Genereer nieuwe dagstart</button><button class="pill dssolutions" type="button">Toon alle oplossingen</button></div>
 <div class="daystart-heading"><h2 class="dstitleout">Goedemorgen!</h2><p class="dstextout">Werk rustig. Lees elke opdracht goed.</p></div>
 <div class="daystart-pro"><div class="daybox mathbox"><h3>➗ Rekenen</h3></div><div class="daybox langbox"><h3>🔤 Taal</h3></div></div>
 </div>`;
 if(id==="attendance")return `<div class="attendance-list"></div><div class="row" style="margin-top:8px"><button class="pill allpresent">Iedereen aanwezig</button></div>`;
 if(id==="calendar"){let d=new Date();return `<div style="text-align:center;padding:18px"><div style="font-size:20px;font-weight:900">${d.toLocaleDateString("nl-BE",{weekday:"long"})}</div><div style="font-size:56px;font-weight:1000">${d.getDate()}</div><div style="font-size:20px;font-weight:900">${d.toLocaleDateString("nl-BE",{month:"long",year:"numeric"})}</div></div>`}
 if(id==="question")return `<textarea class="notearea questiontext">Wat heb je nodig om vandaag goed te kunnen leren?</textarea><div class="row"><button class="pill newquestion">Nieuwe vraag</button></div>`;
 if(id==="weather")return `<div class="weather-tool-pro"><div class="weather-grid">${[["sunny","Zonnig","weather-sunny.svg"],["partly","Licht bewolkt","weather-partly.svg"],["cloudy","Bewolkt","weather-cloudy.svg"],["rain","Regen","weather-rain.svg"],["storm","Onweer","weather-storm.svg"],["snow","Sneeuw","weather-snow.svg"],["wind","Wind","weather-wind.svg"],["fog","Mist","weather-fog.svg"]].map(x=>`<button class="weather-btn" data-weather="${x[1]}" data-icon="${x[2]}" title="${x[1]}"><img src="assets/icons/${x[2]}" alt=""><small>${x[1]}</small></button>`).join("")}</div><div class="weather-settings row"><label>Temperatuur <input class="weather-temp" type="number" min="-30" max="50" value="18"> °C</label></div><div class="weather-student"><img src="assets/icons/weather-sunny.svg" alt=""><div><small>VANDAAG</small><strong class="weather-label">Zonnig</strong><span class="weather-temp-out">18 °C</span></div></div></div>`;
 if(id==="routine")return `<div class="routine-tool"><div class="routine-list">${["Jas en boekentas weg","Agenda klaar","Materiaal op tafel","Ochtendtaak starten"].map(x=>`<div class="routine"><button type="button">✓</button><input value="${x}"><button class="routine-del" type="button">×</button></div>`).join("")}</div><div class="row widget-controls"><button class="pill routine-add" type="button">＋ routine toevoegen</button><button class="pill routine-reset" type="button">Alles opnieuw</button></div></div>`;
 if(id==="rewardjar")return `<div class="reward-tool"><div class="module-settings reward-settings"><label>Doel <input class="jargoal" type="number" value="20" min="1" max="100"></label><label>Beloning <input class="reward-name" value="10 minuten extra speeltijd"></label><button class="pill reward-add">＋ beloning</button><div class="reward-list"></div></div><div class="rewardjar"><div class="rewardfill"></div><div class="rewardcount">0/20</div></div><div class="reward-current">Doel: 10 minuten extra speeltijd</div><div class="row widget-controls"><button class="pill jarminus">− punt</button><button class="primary jarplus">＋ punt</button><button class="pill jarreset">Reset</button></div><div class="reward-celebrate"></div></div>`;
 if(id==="randomnum")return `<div class="random-number">?</div><div class="random-settings"><label>Minimum<input class="rmin" type="number" value="1"></label><label>Maximum<input class="rmax" type="number" value="100"></label><label>Stap<input class="rstep" type="number" min="0.01" step="0.01" value="1"></label><label>Aantal<input class="rcount" type="number" min="1" max="10" value="1"></label></div><label class="toggle-line"><input class="rnorepeat" type="checkbox"> Geen herhaling</label><div class="row"><button type="button" class="primary randomgo">Kies getal</button><button type="button" class="pill randomreset">Nieuwe ronde</button></div><small class="random-status"></small>`;
 if(id==="placevalue")return `<div class="pv-select">${[["Mld",1000000000],["HM",100000000],["TM",10000000],["M",1000000],["HD",100000],["TD",10000],["D",1000],["H",100],["T",10],["E",1]].map(([x,p])=>`<label><input type="checkbox" class="pvvisible" value="${p}" ${p<=1000?"checked":""}>${x}</label>`).join("")}</div><div class="placevalue"></div><div class="big-result pvtotal" style="font-size:30px;min-height:45px">0</div>`;
 if(id==="rekenrek")return `<div class="rekenrek-tool"><div class="module-settings row"><label>Getal <input class="rek-target" type="number" min="0" max="20" value="7"></label><button class="pill rek-show">Leg getal</button><button class="pill rek-task">Oefening</button></div><div class="rekenrek">${[0,1].map((_,r)=>`<div class="rekrow" data-row="${r}">${Array.from({length:10},(_,i)=>`<button class="bead ${i<5?"red":"white"} off" data-i="${r*10+i}"></button>`).join("")}</div>`).join("")}</div><div class="rek-question"></div><div class="rek-feedback"></div><div class="row widget-controls"><button class="primary rek-check">Controleer</button><button class="pill rekclear">Wis</button></div></div>`;
 if(id==="money")return `<div class="money-mode"><button class="pill moneyfree active" type="button">Vrij geld</button><button class="pill moneyexercise" type="button">Oefeningen</button></div><div class="moneytray exact-money-tray">${[.05,.10,.20,.50,1,2,5,10,20,50,100,200,500].map(v=>`<button class="money-piece-btn" type="button" data-v="${v}">${renderWerkbladstudioGetalbeeld("money",v,{moneyMode:String(v)})}</button>`).join("")}</div><div class="money-workspace"></div><div class="big-result moneytotal">€ 0,00</div><div class="money-task" hidden><div class="money-question"></div><div class="row compact-actions"><button class="pill moneycheck" type="button">Controleer</button><button class="pill moneynew" type="button">Nieuwe oefening</button><button class="pill moneyshow" type="button">Oplossing</button></div><div class="moneyfeedback"></div></div><div class="row compact-actions"><button class="pill moneyclear" type="button">Wis</button></div>`;
 if(id==="quickquiz")return `<div class="quiz-pro"><div class="quiz-editor quiz-settings"><label class="quiz-q-label">Vraag<textarea class="quizq">Welke uitkomst is juist?</textarea></label><div class="quiz-option-editor">${["12","14","16","18"].map((x,i)=>`<label class="quiz-edit-option"><input type="radio" name="correct-${Date.now()}" ${i===2?"checked":""}><input class="qopt" value="${x}"><button class="qdel" type="button" title="Verwijderen">×</button></label>`).join("")}</div><div class="row widget-controls"><button class="pill qadd" type="button">＋ antwoord</button><button class="pill quizshuffle" type="button">Hussel</button><button class="primary quizstart" type="button">▶ Toon quiz</button></div></div><div class="quiz-play" hidden><div class="quiz-question"></div><div class="choice-grid quizchoices"></div><div class="quiz-feedback">Kies een antwoord.</div><div class="row quiz-play-controls widget-controls"><button class="pill quizreveal" type="button">Toon oplossing</button><button class="pill quizedit" type="button">Instellingen</button><button class="pill quizreset" type="button">Opnieuw</button></div></div></div>`;
 if(id==="progress")return `<div class="progressbar"><div class="progressfill"></div></div><div class="big-result progressnum" style="font-size:30px;min-height:55px">0%</div><div class="row"><button class="pill progminus">−10%</button><button class="pill progplus">+10%</button></div>`;
 if(id==="liveclass")return `<div class="liveclass"><div class="row"><button class="primary createroom">Genereer code</button></div><div class="roomcode">------</div><div class="studenturl"></div><div class="row"><input class="livequestion" value="Geef je antwoord"><button class="pill sendquestion">Stuur vraag</button></div><div class="aggregate"></div><details><summary>Leerkrachtdashboard: namen & antwoorden</summary><div class="teacheranswers"></div></details></div>`;
 if(id==="numberimages")return `<div class="kbs-compact-settings"><label>Getal / bedrag<input class="ni-value" type="number" min="0" max="9999" value="8"></label><label>Werkbladstudio-getalbeeld<select class="ni-type">${GETALBEELDEN_MATERIALS.map(x=>`<option value="${x.id}">${x.name}</option>`).join("")}</select></label></div><div class="number-image-stage exact-ws-stage"></div><div class="row compact-actions"><button class="pill ni-minus" type="button">−1</button><button class="pill ni-random" type="button">Willekeurig</button><button class="pill ni-plus" type="button">+1</button></div>`;

 if(id==="behaviorrace")return `<div class="race-tool"><div class="module-settings race-editor"><textarea class="race-names" placeholder="Eén team of leerling per regel">Team rood
Team blauw</textarea><label>Finish <input class="race-finish" type="number" min="3" max="30" value="10"></label><div class="row"><button class="primary race-build">Start race</button><button class="pill race-reset">Reset</button></div></div><div class="race-track"></div><div class="race-winner"></div></div>`;
 if(id==="numbersenserace")return `<div class="ns-race"><div class="ns-settings"><label>Tot<input class="ns-max" type="number" min="5" max="100" value="20"></label><label>Getalbeeld<select class="ns-type"><option value="mix">Willekeurig</option>${GETALBEELDEN_MATERIALS.filter(x=>!["money","fingers"].includes(x.id)).map(x=>`<option value="${x.id}">${x.name}</option>`).join("")}</select></label><button class="pill ns-new" type="button">Nieuw bord</button><button class="pill ns-reset" type="button">Reset</button></div><div class="ns-score"><span class="ns-team-red active">Team rood <b class="ns-redscore">0</b></span><span class="ns-round">Ronde <b>1</b></span><span class="ns-team-green">Team groen <b class="ns-greenscore">0</b></span></div><div class="ns-question"><div class="ns-visual"></div><div class="ns-options"></div></div><div class="ns-feedback">Team rood start.</div></div>`;
 if(id==="richdaystarter")return `<div class="rich-daystarter"><div class="module-settings rds-settings"><div class="rds-edit-grid"><label>Weetje<input class="rds-fact-edit"></label><button class="pill rds-newfact">Ander weetje</button><label>Klasboodschap<input class="rds-message" value="Fijn dat je er bent!"></label><label>Woord van de dag<input class="rds-word" value="nieuwsgierig"></label><label>Betekenis<input class="rds-meaning" value="graag iets willen weten"></label><label>Zin van de dag<input class="rds-sentence" value="Vandaag ontdekken we iets nieuws."></label><label>Spellingvraag<input class="rds-spelling" value="Schrijf het meervoud van boom."></label><label>Leesvraag<input class="rds-reading" value="Wat is het belangrijkste woord in de zin?"></label><label>Taaldenkertje<input class="rds-languageq" value="Noem een synoniem voor blij."></label></div></div><div class="rds-top"><div><span class="rds-day"></span><strong class="rds-date"></strong><small class="rds-season"></small></div><div class="rds-clock"></div></div><div class="rds-grid"><div><b>Week</b><span class="rds-week"></span></div><div><b>Weetje</b><span class="rds-fact"></span></div></div><div class="rds-message-out">Fijn dat je er bent!</div><div class="rds-language"><article><small>WOORD VAN DE DAG</small><strong class="rds-word-out"></strong><span class="rds-meaning-out"></span></article><article><small>ZIN VAN DE DAG</small><strong class="rds-sentence-out"></strong></article><article><small>TAAL</small><span class="rds-spelling-out"></span><span class="rds-reading-out"></span><span class="rds-languageq-out"></span></article></div></div>`;
 if(id==="flashcards")return `<div class="flashcards-pro">
  <div class="flashcard-settings module-settings">
    <div class="fc-import-tabs"><button class="pill fc-tab active" data-tab="paste" type="button">Plakken</button><button class="pill fc-tab" data-tab="excel" type="button">Excel</button></div>
    <div class="fc-import-panel fc-paste-panel">
      <label>Woord + betekenis <small>één kaart per regel; scheid met tab, puntkomma of =</small><textarea class="fc-paste" placeholder="fotosynthese&#9;proces waarbij een plant licht omzet in energie&#10;habitat&#9;leefomgeving van een organisme"></textarea></label>
      <button class="primary fc-parse" type="button">Controleer en laad</button>
    </div>
    <div class="fc-import-panel fc-excel-panel" hidden>
      <label class="fc-file-drop">Excel met twee kolommen<input class="fc-file" type="file" accept=".xlsx,.csv,.tsv,text/csv"><span>Kies .xlsx, .csv of .tsv</span><small>Kolom A = woord · kolom B = betekenis</small></label>
    </div>
    <div class="fc-import-status">Voeg minstens twee kaarten toe.</div>
    <div class="fc-table-wrap"><table class="fc-table"><thead><tr><th>Woord</th><th>Betekenis</th><th></th></tr></thead><tbody></tbody></table></div>
    <div class="row"><button class="pill fc-add" type="button">＋ kaart</button><div class="fc-options"><label>Vraagrichting<select class="fc-direction"><option value="term">Woord → betekenis</option><option value="def">Betekenis → woord</option><option value="mix">Door elkaar</option></select></label><label>Controle<select class="fc-checkmode"><option value="exact">Exact</option><option value="keywords">Kernwoorden</option></select></label><label><input class="fc-auto" type="checkbox" checked> Automatisch verder na juist antwoord</label></div><button class="primary fc-start" type="button">Start oefenen</button></div>
  </div>
  <div class="fc-study" hidden>
    <div class="fc-progress"><i></i></div><div class="fc-counter"></div>
    <div class="fc-card"><small>WOORD</small><strong class="fc-word"></strong><div class="fc-answer-area"><input class="fc-answer" autocomplete="off" placeholder="Typ de betekenis"><button class="primary fc-check" type="button">Controleer</button></div><div class="fc-feedback"></div><div class="fc-solution" hidden></div></div>
    <div class="row widget-controls"><button class="pill fc-show" type="button">Toon betekenis</button><button class="pill fc-next" type="button">Volgende</button><button class="pill fc-shuffle" type="button">Hussel</button><button class="pill fc-edit" type="button">Kaarten</button></div>
  </div>
 </div>`;

 if(id==="helpqueue")return `<div class="v20-simple"><div class="row module-settings"><input class="v20-input" placeholder="Naam leerling"><button class="primary v20-add" type="button">Toevoegen</button></div><ol class="v20-list"></ol></div>`;
 if(id==="classrules")return `<div class="classrules-tool"><div class="module-settings classrules-editor"><div class="classrules-editor-head"><strong>Klasafspraken samenstellen</strong><button type="button" class="pill classrule-add">＋ afspraak</button></div><div class="classrule-edit-list"></div></div><div class="classrules-list"></div></div>`;
 if(id==="daygoal")return `<div class="v20-simple"><input class="v20-source module-settings" value="Vandaag leren we …"><div class="v20-big">Vandaag leren we …</div></div>`;
 if(id==="buzzer")return `<div class="v20-buzzer"><div class="row module-settings"><input class="v20-team1" value="Team 1"><input class="v20-team2" value="Team 2"></div><div class="v20-buzzgrid"><div><button class="v20-b1" type="button">Team 1</button><button class="pill v20-reset reset-under" type="button">Reset</button></div><div><button class="v20-b2" type="button">Team 2</button><button class="pill v20-reset2 reset-under" type="button">Reset</button></div></div><div class="v20-winner"></div></div>`;
 if(id==="fractionwall")return `<div class="v20-fractions">${[1,2,3,4,5,6,8,10].map(n=>`<div>${Array.from({length:n},()=>`<i style="width:${100/n}%">1/${n}</i>`).join("")}</div>`).join("")}</div>`;
 if(id==="venn")return `<div class="venn-tool"><div class="module-settings venn-settings"><div class="row"><input class="venn-title-a" value="Groep A"><input class="venn-title-b" value="Groep B"><button class="pill venn-add" type="button">＋ kaartje</button><button class="pill venn-reset" type="button">Reset</button></div><textarea class="venn-items" placeholder="Eén begrip per regel">appel
peer
banaan
wortel</textarea><button class="primary venn-load" type="button">Maak kaartjes</button></div><div class="venn-stage"><div class="venn-circle venn-a"><strong>Groep A</strong></div><div class="venn-circle venn-b"><strong>Groep B</strong></div><div class="venn-bank"></div></div></div>`;
 if(id==="tschema")return `<div class="v20-ts-wrap"><div class="v20-ts"><div contenteditable="true"><b>Kant A</b><p><br></p></div><div contenteditable="true"><b>Kant B</b><p><br></p></div></div><canvas class="ts-canvas" width="900" height="500"></canvas><div class="row widget-controls"><button class="pill ts-pen">✎ Tekenen</button><button class="pill ts-clear">Wis tekening</button></div></div>`;
 if(id==="randomletter")return `<div class="v20-simple"><div class="v20-big v20-letter">A</div><button class="primary v20-randomletter" type="button">Nieuwe letter</button></div>`;
 if(id==="covercard"||id==="screenveil")return `<div class="v20-cover" role="button" tabindex="0"><span>Afdekkaart</span></div>`;
 if(id==="seating")return `<div class="seat-tool-pro"><div class="module-settings seat-toolbar"><textarea class="seat-names" placeholder="Eén leerling per regel"></textarea><div class="row"><button class="pill seat-add-desk" data-shape="rect">＋ tafel</button><button class="pill seat-add-desk" data-shape="square">＋ vierkante tafel</button><button class="pill seat-add-board">＋ bord</button><button class="primary seat-fill">Plaats leerlingen</button><button class="pill seat-shuffle">Nieuwe zitplaatsen</button><button class="pill seat-clear">Leeg grondplan</button></div></div><div class="seat-floor"><div class="seat-hint">Sleep tafels en leerlingen naar hun plaats.</div></div></div>`;
 if(id==="turntracker")return `<div class="turn-tool"><div class="module-settings row"><input class="turn-names" placeholder="Namen, gescheiden door komma"><button class="primary turn-load" type="button">Laden</button></div><div class="turn-current">Wie is er aan de beurt?</div><button class="primary turn-next" type="button">Volgende leerling</button><div class="turn-history"></div></div>`;
 if(id==="numberwall")return `<div class="numberwall-tool"><div class="module-settings row"><label>Rijen <input class="nw-rows" type="number" min="2" max="6" value="4"></label><button class="primary nw-new" type="button">Nieuwe muur</button></div><div class="numberwall-view"></div><div class="nw-keypad">${Array.from({length:10},(_,i)=>`<button type="button" data-n="${i}">${i}</button>`).join("")}<button type="button" data-n="back">⌫</button></div><div class="nw-feedback"></div><div class="row widget-controls"><button class="primary nw-check" type="button">Controleer</button><button class="pill nw-solution" type="button">Oplossing</button></div></div>`;
 if(id==="emptynumberline")return `<div class="enl-tool"><div class="module-settings row"><input class="enl-start" type="number" value="0"><input class="enl-end" type="number" value="100"><input class="enl-values" value="25,50,75"><button class="primary enl-build" type="button">Toon</button></div><div class="enl-line"></div></div>`;
 if(id==="ratio")return `<div class="ratio-tool"><div class="module-settings row"><input class="ratio-a" type="number" value="2"><span>staat tot</span><input class="ratio-b" type="number" value="5"><button class="primary ratio-build" type="button">Maak tabel</button></div><div class="ratio-table"></div></div>`;
 if(id==="rounding")return `<div class="round-tool"><div class="module-settings round-settings"><div class="row"><label>Tot <select class="round-to"><option value="10">tientallen</option><option value="100">honderdtallen</option><option value="1000">duizendtallen</option></select></label><label>Maximum <input class="round-max" type="number" value="1000" min="20"></label><button class="primary round-task" type="button">Nieuwe oefening</button></div></div><div class="round-question"></div><div class="round-numberline"></div><div class="round-choices"></div><div class="round-feedback"></div><div class="row widget-controls"><button class="primary round-check" type="button">Controleer</button><button class="pill round-next" type="button">Volgende</button></div></div>`;
 if(id==="patterns")return `<div class="pattern-tool"><div class="module-settings pattern-settings"><div class="row"><label>Start <input class="pat-start" type="number" value="4"></label><label>Stap <input class="pat-step" type="number" value="3"></label><label>Lengte <input class="pat-length" type="number" min="5" max="12" value="8"></label><button class="primary pat-new" type="button">Nieuwe oefening</button></div></div><div class="pattern-question">Vul het ontbrekende getal in.</div><div class="pattern-view"></div><div class="pattern-feedback"></div><div class="row widget-controls"><button class="primary pat-check" type="button">Controleer</button><button class="pill pat-next" type="button">Volgende</button></div></div>`;
 if(id==="coordinates")return `<div class="coord-tool"><div class="module-settings coord-settings"><div class="row"><label>Aantal punten <input class="coord-count" type="number" min="1" max="8" value="3"></label><button class="primary coord-task" type="button">Nieuwe oefening</button><button class="pill coord-clear" type="button">Wis punten</button></div></div><div class="coord-question"></div><div class="coord-board"><div class="coord-ylabels">${Array.from({length:11},(_,i)=>`<span>${10-i}</span>`).join("")}</div><div class="coord-grid"></div><div class="coord-xlabels">${"ABCDEFGHIJK".split("").map(x=>`<span>${x}</span>`).join("")}</div></div><div class="coord-entered"></div><div class="coord-feedback"></div><div class="row widget-controls"><button class="primary coord-check" type="button">Controleer</button><button class="pill coord-next" type="button">Volgende oefening</button></div></div>`;
 if(id==="buildnumber")return `<div class="build-tool-pro"><div class="module-settings row"><label>Posities <select class="build-cols"><option value="2">T E</option><option value="3">H T E</option><option value="4">D H T E</option><option value="5">TD D H T E</option><option value="6">HD TD D H T E</option><option value="7">M HD TD D H T E</option></select></label><button class="primary build-task">Nieuwe oefening</button><button class="pill build-reset">Wis</button></div><div class="build-example"><small>BOUW DIT GETAL</small><strong class="build-target">—</strong></div><div class="build-question">Sleep de cijfers naar de juiste plaats.</div><div class="digit-tray">${Array.from({length:10},(_,i)=>`<button draggable="true" data-digit="${i}">${i}</button>`).join("")}</div><div class="place-table"></div><div class="build-feedback"></div><button class="primary build-check">Controleer</button></div>`;
 if(id==="articlemarker")return `<div class="marker-tool"><div class="module-settings"><textarea class="marker-source">Mila wandelt na school naar de bibliotheek. Ze zoekt een boek over dieren in het bos. Eerst bekijkt ze de kaft en leest ze de korte tekst achteraan. Daarna kiest ze een boek over vossen. Thuis vertelt ze enthousiast wat ze al heeft ontdekt.</textarea><div class="row marker-palette"><button data-c="#fee020">geel</button><button data-c="#dff6ff">blauw</button><button data-c="#bfe8c5">groen</button><button data-c="#ffd4d4">rood</button><button class="marker-clear">wis markering</button></div></div><div class="marker-board" contenteditable="true"></div></div>`;
 if(id==="sentencebuilder")return `<div class="sentence-tool"><div class="module-settings sentence-settings"><label>Zinnen — één per regel<textarea class="sentence-input">Vandaag spelen de kinderen buiten.
Morgen lezen we een nieuw verhaal.
De hond slaapt rustig in zijn mand.</textarea></label><button class="primary sentence-mix" type="button">Maak oefeningen</button></div><div class="sentence-exercises"></div><div class="sentence-feedback"></div><div class="row widget-controls"><button class="primary sentence-check" type="button">Controleer alle zinnen</button><button class="pill sentence-reset" type="button">Opnieuw husselen</button></div></div>`;
 if(id==="syllables")return `<div class="syllable-tool"><div class="module-settings syllable-settings"><label>Woord<input class="syllable-input" value="bibliotheek"></label><label>Eigen correcte verdeling (optioneel)<input class="syllable-override" placeholder="bv. bi·bli·o·theek"></label><button class="primary syllable-go" type="button">Maak oefening</button></div><div class="syllable-word"></div><input class="syllable-answer" placeholder="Typ met streepjes, bv. bi-bli-o-theek"><div class="syllable-feedback"></div><div class="row widget-controls"><button class="primary syllable-check">Controleer</button><button class="pill syllable-solution">Oplossing</button></div></div>`;
 if(id==="dictation")return `<div class="dictation-tool"><div class="module-settings"><textarea class="dictation-list" placeholder="Eén woord per regel">boom
school
herfst</textarea><div class="row"><button class="primary dictation-load" type="button">Laden</button><label>Elke <input class="dictation-delay" type="number" min="1" max="30" value="4"> s</label><label><input class="dictation-auto" type="checkbox"> automatisch</label></div></div><div class="dictation-word">boom</div><div class="dictation-progress"></div><div class="row widget-controls"><button class="pill dictation-prev">Vorige</button><button class="pill dictation-hide" type="button">Verberg</button><button class="primary dictation-next" type="button">Volgende</button><button class="pill dictation-stop">Stop</button></div></div>`;
 if(id==="timeline")return `<div class="timeline-tool"><div class="module-settings"><textarea class="timeline-input" placeholder="1900 ; Gebeurtenis&#10;1950 ; Gebeurtenis"></textarea><button class="primary timeline-build" type="button">Maak tijdlijn</button></div><div class="timeline-view"></div></div>`;
 if(id==="spotlight")return `<div class="spot-tool"><div class="spot-overlay"></div><div class="spot-target"></div><div class="spot-controls"><span class="spot-move" title="Sleep spotlight">⋮⋮</span><label>Grootte <input class="spot-size" type="range" min="80" max="650" value="240"></label><button class="spot-close" type="button" title="Spotlight sluiten">×</button></div></div>`;
 if(id==="teamquiz")return `<div class="teamquiz-tool"><div class="module-settings tq-editor"><div class="tq-rows"><div class="tq-row"><input class="tq-q" placeholder="Vraag" value="Wat is 2 + 2?"><input class="tq-a-input" placeholder="Antwoord" value="4"><button class="tq-del" type="button">×</button></div></div><button class="pill tq-add" type="button">＋ vraag</button><div class="row"><input class="tq-a" value="Team 1"><input class="tq-b" value="Team 2"><button class="primary tq-start" type="button">Start</button></div></div><div class="tq-score"><button data-team="a">Team 1<br><strong>0</strong></button><div class="tq-question">Voeg vragen toe</div><button data-team="b">Team 2<br><strong>0</strong></button></div><div class="tq-answer-box"></div><div class="row widget-controls"><button class="pill tq-answer" type="button">Toon antwoord</button><button class="primary tq-next" type="button">Volgende vraag</button></div></div>`;
 if(id==="truefalse")return `<div class="tf-tool"><div class="module-settings tf-editor"><div class="tf-rows"><div class="tf-row"><input class="tf-statement" value="De aarde draait rond de zon."><select class="tf-solution"><option value="true">Waar</option><option value="false">Niet waar</option></select><button class="tf-del" type="button">×</button></div></div><button class="pill tf-add" type="button">＋ stelling</button><button class="primary tf-load" type="button">Start</button></div><div class="tf-question">Voeg stellingen toe</div><div class="tf-actions"><button class="tf-yes" type="button">WAAR</button><button class="tf-no" type="button">NIET WAAR</button></div><div class="tf-feedback"></div></div>`;
 if(id==="bingo")return `<div class="bingo-tool-pro"><div class="module-settings bingo-toolbar"><div class="bingo-mode"><button type="button" class="bingo-one active">1 kaart</button><button type="button" class="bingo-duel">2 kaarten · duel</button></div><div class="row"><input class="bingo-p1" value="Speler 1"><input class="bingo-p2" value="Speler 2"><label>Tot <input class="bingo-max" type="number" min="25" max="200" value="75"></label><button class="primary bingo-new" type="button">Nieuwe ronde</button><button class="primary bingo-draw" type="button">Trek bal</button></div></div><div class="bingo-call">Klaar om te starten</div><div class="bingo-history"></div><div class="bingo-boards"></div><div class="bingo-feedback"></div></div>`;
 if(id==="memorygame")return `<div class="memory-tool-pro"><div class="module-settings"><div class="memory-editor"><div class="memory-row"><input class="mem-a" value="kat" placeholder="Kaart A"><input class="mem-b" value="poes" placeholder="Kaart B"><button class="mem-del">×</button></div><div class="memory-row"><input class="mem-a" value="hond" placeholder="Kaart A"><input class="mem-b" value="puppy" placeholder="Kaart B"><button class="mem-del">×</button></div></div><div class="row"><button class="pill mem-add">＋ paar</button><button class="primary memory-build">Start memory</button><button class="pill memory-reset">Opnieuw schudden</button></div><div class="row"><input class="mem-team1" value="Team 1"><input class="mem-team2" value="Team 2"></div></div><div class="memory-status"></div><div class="memory-score"></div><div class="memory-grid"></div></div>`;
 if(id==="wordofday")return `<div class="wod-tool"><div class="module-settings"><input class="wod-word" placeholder="Woord"><input class="wod-def" placeholder="Betekenis"><input class="wod-example" placeholder="Voorbeeldzin"></div><div class="wod-view"><small>WOORD VAN DE DAG</small><strong>Woord</strong><p></p><em></em></div></div>`;
 if(id==="countdown")return `<div class="count-tool"><div class="module-settings row"><input class="count-min" type="number" min="0" value="5"><button class="primary count-start" type="button">Start</button><button class="pill count-pause" type="button">Pauze</button><button class="pill count-reset" type="button">Reset</button></div><div class="count-view">05:00</div></div>`;
 if(id==="handwriting")return `<div class="handwriting-tool"><div class="module-settings handwriting-settings"><label>Lijntype<select class="hw-type"><option value="lines">Vier schrijflijnen</option><option value="houses">Schrijfhuisjes</option></select></label><label>Aantal rijen<input class="hw-rows" type="number" min="1" max="10" value="5"></label><label>Hoogte per rij <span class="hw-height-value">72 px</span><input class="hw-height" type="range" min="44" max="150" step="2" value="72"></label><small>Pas de hoogte aan aan de schrijfgrootte van je leerlingen. Het schrijfhuisje schaalt automatisch mee.</small></div><div class="hw-stage" aria-label="Schrijflijnen"></div></div>`;
 if(id==="fractionstrips")return `<div class="fraction-strips-tool"><div class="module-settings row"><label>Tot <select class="fs-max">${[2,3,4,5,6,8,10,12].map(n=>`<option ${n===8?"selected":""}>${n}</option>`).join("")}</select></label><button class="pill fs-reset" type="button">Wis markeringen</button></div><div class="fs-stage"></div></div>`;
 if(id==="fractioncircles")return `<div class="fraction-circle-tool"><div class="module-settings row"><label>Teller <input class="fc-num" type="number" min="0" max="12" value="3"></label><label>Noemer <input class="fc-den" type="number" min="1" max="12" value="4"></label></div><div class="fc-stage"></div><div class="fc-readout"></div></div>`;
 if(id==="decimalpercent")return `<div class="decimal-percent-tool"><div class="module-settings row"><label>Percentage <input class="dp-range" type="range" min="0" max="100" value="35"></label><input class="dp-value" type="number" min="0" max="100" value="35"></div><div class="dp-model"><div class="dp-grid">${Array.from({length:100},(_,i)=>`<button type="button" data-i="${i}"></button>`).join("")}</div><div class="dp-readout"></div></div></div>`;
 if(id==="angletool")return `<div class="angle-tool"><div class="module-settings row"><label>Hoek <input class="angle-range" type="range" min="0" max="180" value="60"></label><input class="angle-value" type="number" min="0" max="180" value="60">°</div><div class="angle-stage"><svg viewBox="0 0 500 300" class="angle-svg"><path class="protractor-arc" d="M70 245 A180 180 0 0 1 430 245"/><line class="angle-base" x1="250" y1="245" x2="430" y2="245"/><line class="angle-arm" x1="250" y1="245" x2="340" y2="90"/><circle cx="250" cy="245" r="7"/></svg><strong class="angle-label">60°</strong></div></div>`;
 if(id==="balancescale")return `<div class="balance-tool"><div class="module-settings balance-controls"><label>Links <input class="bal-left" type="number" min="0" max="999" value="8"></label><label>Rechts <input class="bal-right" type="number" min="0" max="999" value="5"></label><button class="pill bal-random" type="button">Nieuwe vergelijking</button></div><div class="balance-stage"><div class="balance-beam"><div class="balance-pan left"><span>8</span></div><i></i><div class="balance-pan right"><span>5</span></div></div><div class="balance-base">▲</div></div><div class="balance-result"></div></div>`;
 if(id==="timeschart")return `<div class="times-chart-tool"><div class="module-settings row"><label>Tafel <select class="tc-table"><option value="0">Alle tafels</option>${Array.from({length:12},(_,i)=>`<option value="${i+1}">${i+1}</option>`).join("")}</select></label><button class="pill tc-clear" type="button">Wis markeringen</button></div><div class="times-chart"></div><div class="tc-readout">Klik een vak om de vermenigvuldiging te zien.</div></div>`;
 if(id==="numberproperties")return `<div class="rr3-tool np-tool"><div class="module-settings row"><label>Getal <input class="np-n" type="number" min="1" max="10000" value="24"></label><button class="primary np-random">Willekeurig</button></div><div class="rr3-number np-number">24</div><div class="np-choices"><button data-p="even">Even</button><button data-p="odd">Oneven</button><button data-p="prime">Priem</button><button data-p="composite">Samengesteld</button></div><div class="np-info"></div></div>`;
 if(id==="averageRange")return `<div class="rr3-tool ar-tool"><div class="module-settings"><label>Getallen <input class="ar-values" value="4; 8; 10; 14"></label><button class="primary ar-new">Nieuwe reeks</button></div><div class="ar-chips"></div><div class="ar-grid"><label>Gemiddelde <input class="ar-avg" type="number" step="0.01"></label><label>Bereik <input class="ar-range" type="number"></label></div><div class="row"><button class="primary ar-check">Controleer</button><button class="pill ar-show">Toon uitwerking</button></div><div class="ar-feedback"></div></div>`;
 if(id==="causeeffect")return `<div class="rr3-tool ce-tool"><div class="ce-explain"><b>Oorzaak</b> = waarom iets gebeurt. <span>→</span> <b>Gevolg</b> = wat er daardoor gebeurt.</div><div class="module-settings ce-settings"><label>Oefenmodus <select class="ce-mode"><option value="effect">Zoek het gevolg</option><option value="cause">Zoek de oorzaak</option></select></label><textarea class="ce-source" rows="5">Het regende de hele nacht;de speelplaats was nat
Mila vergat haar wekker;ze kwam te laat
De plant kreeg weken geen water;de bladeren hingen slap</textarea><button class="primary ce-load">Maak oefening</button></div><div class="ce-cards"></div><div class="row widget-controls"><button class="pill ce-new">Nieuwe ronde</button></div><div class="ce-feedback"></div></div>`;
 if(id==="supportdetails")return `<div class="rr3-tool sd-tool"><div class="module-settings"><label>Hoofdgedachte <input class="sd-main" value="Goed slapen helpt je om overdag fit te zijn."></label><label>Details <small>Zet + voor een ondersteunend detail en - voor een afleider.</small><textarea class="sd-source" rows="6">+ Je kunt je beter concentreren.
+ Je lichaam krijgt tijd om te herstellen.
+ Je hebt meer energie.
- Een regenjas houdt je droog.</textarea></label><button class="primary sd-build">Maak oefening</button></div><div class="sd-instruction">Welke details ondersteunen de hoofdgedachte? Klik alle juiste details aan.</div><div class="sd-main-label">HOOFDGEDACHTE</div><div class="sd-main-card"></div><div class="sd-detail-label">MOGELIJKE DETAILS</div><div class="sd-items"></div><div class="row widget-controls"><button class="primary sd-check">Controleer</button><button class="pill sd-reset">Opnieuw</button></div><div class="sd-feedback"></div></div>`;
 if(id==="authorspurpose")return `<div class="rr3-tool apu-tool"><div class="module-settings apu-settings"><label>Tekst voor de leerlingen<textarea class="apu-text" rows="5">Kom zaterdag naar onze boekenmarkt. Je vindt er honderden leuke boeken en de opbrengst gaat naar de schoolbibliotheek.</textarea></label><label>Juiste antwoord <select class="apu-key"><option value="persuade">Overtuigen</option><option value="inform">Informeren</option><option value="entertain">Vermaken</option></select></label></div><article class="apu-reading">Kom zaterdag naar onze boekenmarkt. Je vindt er honderden leuke boeken en de opbrengst gaat naar de schoolbibliotheek.</article><div class="apu-question">Wat wil de schrijver vooral bereiken?</div><div class="apu-purpose-help"><div><b>Informeren</b><span>iets uitleggen of feiten geven</span></div><div><b>Overtuigen</b><span>je iets laten vinden of doen</span></div><div><b>Vermaken</b><span>plezier, spanning of een verhaal geven</span></div></div><div class="apu-options"><button data-v="inform">Informeren</button><button data-v="persuade">Overtuigen</button><button data-v="entertain">Vermaken</button></div><div class="apu-clue">Tip: waarom heeft de schrijver deze tekst gemaakt?</div><div class="apu-feedback"></div></div>`;
 if(id==="missingnumber")return `<div class="rr2-tool missing-tool"><div class="module-settings row"><select class="mn-op"><option>+</option><option>−</option><option>×</option><option>÷</option></select><label>Tot <input class="mn-max" type="number" min="10" max="1000" value="100"></label><button class="primary mn-new">Nieuwe oefening</button></div><div class="rr2-big mn-question"></div><div class="row"><input class="mn-answer" type="number" placeholder="?"><button class="primary mn-check">Controleer</button><button class="pill mn-show">Toon</button></div><div class="rr2-feedback mn-feedback"></div></div>`;
 if(id==="areaperimeter")return `<div class="rr2-tool area-tool"><div class="module-settings row"><label>Breedte <input class="ap-w" type="number" min="1" max="12" value="6"></label><label>Hoogte <input class="ap-h" type="number" min="1" max="10" value="4"></label><button class="primary ap-new">Nieuwe rechthoek</button></div><div class="ap-stage"></div><div class="ap-question"></div><div class="row"><input class="ap-answer" type="number" placeholder="antwoord"><button class="primary ap-check">Controleer</button><button class="pill ap-switch">Andere vraag</button></div><div class="rr2-feedback ap-feedback"></div></div>`;
 if(id==="factorsmultiples")return `<div class="rr2-tool fm-tool"><div class="module-settings row"><label>Getal <input class="fm-n" type="number" min="2" max="100" value="24"></label><button class="primary fm-new">Nieuw getal</button></div><div class="rr2-big fm-number">24</div><div class="fm-columns"><section><strong>Factoren / delers</strong><div class="fm-factors"></div></section><section><strong>Eerste veelvouden</strong><div class="fm-multiples"></div></section></div></div>`;
 if(id==="operationsorder")return `<div class="rr2-tool oo-tool"><div class="module-settings row"><label>Niveau <select class="oo-level"><option value="1">+ − ×</option><option value="2">Met haakjes</option></select></label><button class="primary oo-new">Nieuwe oefening</button></div><div class="rr2-big oo-question"></div><div class="row"><input class="oo-answer" type="number" placeholder="antwoord"><button class="primary oo-check">Controleer</button><button class="pill oo-show">Toon</button></div><div class="rr2-feedback oo-feedback"></div></div>`;
 if(id==="readingstrategy")return `<div class="rr2-tool reading-tool"><div class="module-settings"><label>Tekst<textarea class="rs-text" rows="5">Mila neemt elke dag haar fiets naar school. Vandaag regent het hard. Daarom trekt ze haar regenjas aan en vertrekt ze iets vroeger.</textarea></label><label>Vraagtype <select class="rs-type"><option value="main">Hoofdgedachte</option><option value="fact">Feit of mening</option><option value="context">Context uit de tekst</option></select></label><button class="primary rs-build">Maak vraag</button></div><div class="rs-reading-wrap"><div class="rs-reading-label">LEESTEKST</div><article class="rs-reading"></article></div><div class="rs-card"><strong class="rs-question"></strong><textarea class="rs-answer" rows="3" placeholder="Typ hier het antwoord…"></textarea><button class="pill rs-reveal">Toon leerkrachthulp</button><div class="rs-help"></div></div></div>`;
 if(id==="sequence")return `<div class="rr2-tool sequence-tool"><div class="module-settings"><label>Stappen — één per regel<textarea class="sq-source" rows="5">Ik neem mijn schrift.
Ik lees de opdracht.
Ik maak de oefening.
Ik controleer mijn antwoord.</textarea></label><button class="primary sq-mix">Hussel</button></div><div class="sq-list"></div><div class="row"><button class="pill sq-reset">Opnieuw</button><button class="primary sq-check">Controleer</button></div><div class="rr2-feedback sq-feedback"></div></div>`;
 if(id==="factfamilies")return `<div class="rr-tool fact-family-tool"><div class="module-settings row"><select class="ff-mode"><option value="add">Optellen & aftrekken</option><option value="mul">Vermenigvuldigen & delen</option></select><label>Tot <input class="ff-max" type="number" min="10" max="1000" value="100"></label><button class="primary ff-new">Nieuwe familie</button></div><div class="fact-triangle"><b class="ff-top">12</b><span class="ff-left">5</span><span class="ff-right">7</span></div><div class="ff-equations"></div></div>`;
 if(id==="compare")return `<div class="rr-tool compare-tool"><div class="module-settings row"><label>Tot <input class="cmp-max" type="number" min="10" max="1000000" value="100"></label><button class="primary cmp-new">Nieuwe oefening</button></div><div class="compare-stage"><strong class="cmp-a">24</strong><div class="compare-buttons"><button data-op="<">&lt;</button><button data-op="=">=</button><button data-op=">">&gt;</button></div><strong class="cmp-b">42</strong></div><div class="cmp-feedback"></div></div>`;
 if(id==="elapsedtime")return `<div class="rr-tool elapsed-tool"><div class="module-settings row"><label>Start <input class="et-start" type="time" value="09:15"></label><label>Einde <input class="et-end" type="time" value="10:00"></label><button class="primary et-new">Nieuwe oefening</button></div><div class="elapsed-line"><span class="et-start-label">09:15</span><i></i><span class="et-end-label">10:00</span></div><div class="elapsed-question">Hoeveel tijd is verstreken?</div><div class="row"><input class="et-answer" type="number" placeholder="minuten"><button class="primary et-check">Controleer</button><button class="pill et-show">Toon</button></div><div class="et-feedback"></div></div>`;
 if(id==="mathtictac")return `<div class="rr-tool math-ttt"><div class="module-settings row"><select class="mtt-op"><option value="+">Optellen</option><option value="-">Aftrekken</option><option value="×">Vermenigvuldigen</option><option value="÷">Delen</option></select><label>Tot <input class="mtt-max" type="number" min="10" max="1000" value="100"></label><button class="primary mtt-reset">Nieuw spel</button></div><div class="mtt-status">Team X is aan de beurt</div><div class="mtt-grid">${Array.from({length:9},(_,i)=>`<button type="button" data-cell="${i}"></button>`).join("")}</div><div class="mtt-question"></div><div class="row mtt-answer-row"><input class="mtt-answer" type="number" placeholder="antwoord"><button class="primary mtt-check">Controleer</button></div><div class="mtt-feedback"></div></div>`;
 if(id==="wordrelations")return `<div class="rr-tool word-relations"><div class="module-settings"><textarea class="wr-list" rows="5">groot;klein;antoniem
blij;vrolijk;synoniem
snel;vlug;synoniem
warm;koud;antoniem</textarea><div class="row"><button class="primary wr-load">Start</button><button class="pill wr-next">Volgende</button></div><small>woord ; antwoord ; synoniem/antoniem</small></div><div class="wr-prompt"></div><div class="row"><input class="wr-answer" placeholder="Typ het passende woord"><button class="primary wr-check">Controleer</button></div><div class="wr-feedback"></div></div>`;
 if(id==="ggdkgv")return `<div class="ggdkgv-tool"><div class="module-settings row"><label>Getal A <input class="gk-a" type="number" min="2" max="100" value="24"></label><label>Getal B <input class="gk-b" type="number" min="2" max="100" value="36"></label><select class="gk-mode"><option value="both">GGD + KGV</option><option value="ggd">Alleen GGD</option><option value="kgv">Alleen KGV</option></select><button class="primary gk-random">Nieuwe oefening</button></div><div class="gk-instruction"></div><div class="gk-visual"></div><div class="gk-question"><label class="gk-ggd-field">GGD = <input class="gk-ggd-answer" type="number" placeholder="?"></label><label class="gk-kgv-field">KGV = <input class="gk-kgv-answer" type="number" placeholder="?"></label></div><div class="row gk-student-controls"><button class="primary gk-check">Controleer</button><button class="pill gk-retry" hidden>Probeer opnieuw</button><button class="pill gk-show">Toon oplossing</button><button class="pill gk-next">Nieuwe oefening</button></div><div class="gk-feedback" aria-live="polite"></div><div class="gk-results" hidden></div></div>`;
 if(id==="ruler")return `<div class="ruler-wrap"><div class="module-settings row"><label>Kalibratie <input class="ruler-scale" type="range" min="80" max="120" value="100"> <span class="ruler-scale-label">100%</span></label></div><div class="ruler-tool">${Array.from({length:201},(_,i)=>`<i class="${i%10===0?"cm":i%5===0?"half":""}" data-mm="${i}">${i%10===0?`<span>${i/10}</span>`:""}</i>`).join("")}</div><small class="ruler-note">0–20 cm · millimeterverdeling</small></div>`;
 if(id==="wordflasher")return `<div class="word-flasher-pro"><label class="wf-article-option module-settings"><input class="wf-articles" type="checkbox" checked> Lidwoorden tonen</label>
   <div class="wf-settings"><label>Kern <select class="wf-level"><option value="start">Start</option>${Array.from({length:9},(_,i)=>`<option value="${i+1}">Kern ${i+1}</option>`).join("")}</select></label><label>Modus <select class="wf-mode"><option value="manual">Handmatig</option><option value="auto">Automatisch</option></select></label><label>Zichtbaar <select class="wf-visible"><option value="500">0,5 s</option><option value="1000">1 s</option><option value="1500" selected>1,5 s</option><option value="2000">2 s</option><option value="3000">3 s</option></select></label><label>Pauze <select class="wf-pause"><option value="300">0,3 s</option><option value="800" selected>0,8 s</option><option value="1500">1,5 s</option></select></label><label>Aantal <input class="wf-count" type="number" min="1" max="100" value="10"></label></div>
   <textarea class="wf-own" placeholder="Optioneel: eigen woorden, één per regel"></textarea>
   <div class="wf-actions"><button class="primary wf-start" type="button">Start flitsen</button><button class="pill wf-next" type="button">Volgende</button><button class="pill wf-pausebtn" type="button">Pauze</button><button class="pill wf-stop" type="button">Stop</button></div>
   <div class="wf-progress"><i></i></div><div class="wf-status">Kies een lijst en start.</div><div class="wf-stage" tabindex="0">Klaar om te flitsen</div>
 </div>`;

 if(id==="mathflasher")return `<div class="math-flasher">
   <div class="kbs-compact-settings mf-settings">
    <label>Niveau<select class="mf-grade">${["L1","L2","L3","L4","L5","L6"].map(x=>`<option>${x}</option>`).join("")}</select></label>
    <label>Bovengrens<input class="mf-max" type="number" value="20" min="5" max="1000000000"></label>
    <label>Type<select class="mf-kind"><option value="mixed">Gemengd</option><option value="add">Optellen</option><option value="sub">Aftrekken</option><option value="tables">Maaltafels</option><option value="image">Getalbeelden</option></select></label>
    <label>Zichttijd<select class="mf-visible"><option value="800">0,8 s</option><option value="1500" selected>1,5 s</option><option value="2500">2,5 s</option><option value="4000">4 s</option></select></label>
    <label>Antwoord<select class="mf-answer"><option value="800">0,8 s</option><option value="1500" selected>1,5 s</option><option value="2500">2,5 s</option></select></label>
   </div>
   <div class="mf-table-row"><label><input class="mf-tables-on" type="checkbox"> maaltafels gebruiken</label><span class="mf-tables">${Array.from({length:12},(_,i)=>`<label><input type="checkbox" value="${i+1}" ${i<10?"checked":""}>${i+1}</label>`).join("")}</span></div>
   <div class="wf-actions"><button class="primary mf-start" type="button">Start automatisch</button><button class="pill mf-next" type="button">Volgende</button><button class="pill mf-pause" type="button">Pauze</button><button class="pill mf-stop" type="button">Stop</button></div>
   <div class="mf-stage">Klaar om te flitsen</div><div class="mf-status">De oplossing verschijnt pas na de ingestelde denktijd.</div>
 </div>`;
 if(id==="duel")return `<div class="duel-tool">
   <div class="duel-toolbar"><label>Spel<select class="duel-kind"><option value="tables">Maaltafels</option><option value="add">Optellen</option><option value="image">Getalbeelden</option><option value="split">Splitsingen</option></select></label><label>Tot<input class="duel-max" type="number" value="20" min="5" max="1000"></label><label>Rondes<select class="duel-rounds"><option value="5">Best of 5</option><option value="10">Best of 10</option><option value="0">Vrij spelen</option></select></label><button class="primary duel-new" type="button">Nieuwe ronde</button><button class="pill duel-reset" type="button">Reset</button></div>
   <div class="duel-board">
    <section class="duel-side duel-a"><div class="duel-player"><input value="Speler A"><strong class="duel-score-a">0</strong></div><div class="duel-task-a"></div><div class="duel-answers-a"></div></section>
    <section class="duel-side duel-b"><div class="duel-player"><input value="Speler B"><strong class="duel-score-b">0</strong></div><div class="duel-task-b"></div><div class="duel-answers-b"></div></section>
   </div><div class="duel-feedback">Beide spelers kunnen tegelijk antwoorden.</div>
 </div>`;
 if(id==="pdfboard")return `<div class="pdf-tool"><div class="pdf-upload-state"><label class="pdf-drop"><span>📄</span><strong>Kies een PDF</strong><small>Toon een werkblad, tekst of document op het bord.</small><input class="pdf-file" type="file" accept="application/pdf"></label></div><div class="pdf-view" hidden><div class="pdf-actions"><button class="pill pdf-change" type="button">Andere PDF</button><button class="primary pdf-write" type="button">✎ Schrijven</button><button class="pill pdf-marker" type="button">▰ Markeren</button><button class="pill pdf-erase" type="button">Gom</button><button class="pill pdf-clear-ink" type="button">Wis annotaties</button></div><div class="pdf-layer"><iframe class="pdf-frame" title="PDF op klasbord"></iframe><canvas class="pdf-ink" width="1200" height="900"></canvas></div><small class="pdf-hint">Zet schrijven/markeren uit door dezelfde knop opnieuw te kiezen; daarna kun je de PDF weer normaal bedienen en scrollen.</small></div></div>`;
 return "";
}

async function kbsUnzipXlsx(arrayBuffer){
 const u8=new Uint8Array(arrayBuffer),view=new DataView(arrayBuffer),sig=0x06054b50;let eocd=-1;
 for(let i=u8.length-22;i>=Math.max(0,u8.length-65557);i--){if(view.getUint32(i,true)===sig){eocd=i;break}}
 if(eocd<0)throw new Error("Geen geldig .xlsx-bestand.");
 const count=view.getUint16(eocd+10,true),cdOffset=view.getUint32(eocd+16,true),files={};let p=cdOffset;
 for(let n=0;n<count;n++){if(view.getUint32(p,true)!==0x02014b50)break;let method=view.getUint16(p+10,true),csize=view.getUint32(p+20,true),usize=view.getUint32(p+24,true),nlen=view.getUint16(p+28,true),elen=view.getUint16(p+30,true),clen=view.getUint16(p+32,true),local=view.getUint32(p+42,true),name=new TextDecoder().decode(u8.slice(p+46,p+46+nlen));let ln=view.getUint16(local+26,true),le=view.getUint16(local+28,true),start=local+30+ln+le,data=u8.slice(start,start+csize);
   if(method===0)files[name]=data;
   else if(method===8){if(!("DecompressionStream" in window))throw new Error("Deze browser kan Excel niet lokaal uitpakken.");let ds=new DecompressionStream("deflate-raw"),ab=await new Response(new Blob([data]).stream().pipeThrough(ds)).arrayBuffer();files[name]=new Uint8Array(ab)}
   p+=46+nlen+elen+clen;
 }
 return files;
}
function kbsXmlText(bytes){return new TextDecoder("utf-8").decode(bytes||new Uint8Array())}
async function kbsReadXlsxTwoColumns(file){
 const files=await kbsUnzipXlsx(await file.arrayBuffer()),parser=new DOMParser(),shared=[];
 if(files["xl/sharedStrings.xml"]){let doc=parser.parseFromString(kbsXmlText(files["xl/sharedStrings.xml"]),"application/xml");doc.querySelectorAll("si").forEach(si=>shared.push([...si.querySelectorAll("t")].map(t=>t.textContent).join("")))}
 let sheetName=Object.keys(files).find(x=>/^xl\/worksheets\/sheet\d+\.xml$/.test(x));if(!sheetName)throw new Error("Geen werkblad gevonden.");
 let doc=parser.parseFromString(kbsXmlText(files[sheetName]),"application/xml"),rows=[];
 doc.querySelectorAll("row").forEach(row=>{let vals={};row.querySelectorAll("c").forEach(c=>{let ref=c.getAttribute("r")||"",col=(ref.match(/[A-Z]+/)||[""])[0],type=c.getAttribute("t"),v=c.querySelector("v"),inline=c.querySelector("is t"),value=inline?inline.textContent:(v?v.textContent:"");if(type==="s")value=shared[+value]??"";vals[col]=String(value||"").trim()});if(vals.A||vals.B)rows.push([vals.A||"",vals.B||""])});
 if(rows.length&&/woord|term/i.test(rows[0][0])&&/betekenis|definitie|omschrijving/i.test(rows[0][1]))rows.shift();return rows.filter(r=>r[0]&&r[1]);
}
function kbsReadDelimited(text){
 return text.split(/\r?\n/).map(line=>{let parts=line.includes("\t")?line.split("\t"):line.includes(";")?line.split(";"):line.split(",");return [String(parts[0]||"").trim(),String(parts.slice(1).join(line.includes("\t")?"\t":line.includes(";")?";":",")||"").trim()]}).filter(r=>r[0]&&r[1]);
}
function kbsNormalizeAnswer(s){return String(s||"").toLocaleLowerCase("nl-BE").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[.,;:!?()[\]{}"'’]/g," ").replace(/\s+/g," ").trim()}
function kbsAnswerMatch(given,expected,mode="exact"){let a=kbsNormalizeAnswer(given),b=kbsNormalizeAnswer(expected);if(!a||!b)return false;if(a===b)return true;if(mode==="exact")return false;let bw=b.split(" ").filter(x=>x.length>2),aw=new Set(a.split(" ").filter(x=>x.length>2));return bw.length>0&&bw.filter(x=>aw.has(x)).length/bw.length>=.8}

function kbsWordForDisplay(s,w){const cb=w?.querySelector?.(".wf-articles");return cb&&!cb.checked?String(s||"").replace(/^(de|het|een)\s+/i,""):s}

function makeResizable(w,handle){
 if(!w||!handle)return;
 let active=false,sx=0,sy=0,sw=0,sh=0,pid=null;
 handle.onpointerdown=e=>{
   if(w.classList.contains("locked")||w.classList.contains("board-fullscreen"))return;
   active=true;pid=e.pointerId;sx=e.clientX;sy=e.clientY;sw=w.offsetWidth;sh=w.offsetHeight;
   handle.setPointerCapture?.(pid);e.preventDefault();e.stopPropagation();
 };
 handle.onpointermove=e=>{
   if(!active||e.pointerId!==pid)return;
   const maxW=Math.max(320,(board.clientWidth||innerWidth)-Math.max(0,w.offsetLeft)-12);
   w.style.width=Math.min(maxW,Math.max(280,sw+e.clientX-sx))+"px";
   w.style.height=Math.max(180,sh+e.clientY-sy)+"px";
   e.preventDefault();e.stopPropagation();
 };
 const stop=e=>{
   if(!active||(e&&e.pointerId!==pid))return;
   active=false;pid=null;ensureBoardExtent();savePage();scheduleSave();
 };
 handle.onpointerup=stop;handle.onpointercancel=stop;
}

function wireWidget(w){
 [...w.querySelectorAll(":scope > .side-actions,:scope > .widget-side-actions,:scope > .side-toolbar,:scope > .widget-actions-side,:scope > .legacy-actions,:scope > .floating-actions,:scope > .right-actions,:scope > .delete-rail,:scope > .remove-rail,:scope > .action-rail")].forEach(el=>el.remove());

 if(w.__kbsWired===true)return;
 w.__kbsWired=true;
 w.removeAttribute("data-wired");
 if(!w.dataset.widgetId)w.dataset.widgetId=newWidgetId();
 const currentZ=parseInt(w.style.zIndex||"0",10)||0;if(currentZ<200)w.style.zIndex=++z;else z=Math.max(z,currentZ);
 w.addEventListener("pointerdown",e=>{if(!e.target.closest("button,input,select,textarea,.resize-handle")){document.querySelectorAll(".widget.selected").forEach(x=>x.classList.remove("selected"));w.classList.add("selected");inspectWidget(w)}});w.tabIndex=0;w.addEventListener("keydown",e=>{if((e.key==="Delete"||e.key==="Backspace")&&!e.target.matches("input,textarea,[contenteditable=true]")){e.preventDefault();removeWidget(w)}});
 const removeBtn=w.querySelector(".remove");if(removeBtn){removeBtn.type="button";removeBtn.textContent="×";removeBtn.classList.add("widget-delete");removeBtn.onpointerdown=e=>{e.preventDefault();e.stopPropagation()};removeBtn.onclick=e=>{e.preventDefault();e.stopPropagation();removeWidget(w)}};
 w.querySelector(".duplicate").onclick=()=>addWidget(w.dataset.type);
 const removeButtons=w.querySelectorAll(".widget-bar .remove,.widget-bar [data-action='remove'],.widget-bar .close-widget");if(removeButtons.length>1)[...removeButtons].slice(1).forEach(x=>x.remove());const barActions=w.querySelector(".widget-bar div");
 if(!barActions.querySelector(".move-grip")){let move=document.createElement("span");move.className="move-grip";move.title="Verslepen";move.setAttribute("aria-label","Verslepen");move.textContent="⋮⋮";barActions.prepend(move)}
 if(!barActions.querySelector(".lock")){let lock=document.createElement("button");lock.className="mini lock";lock.title="Vastzetten";lock.textContent="🔓";barActions.prepend(lock);lock.onclick=()=>{w.classList.toggle("locked");const locked=w.classList.contains("locked");lock.textContent=locked?"🔒":"🔓";lock.title=locked?"Ontgrendelen":"Vastzetten";w.style.resize=locked?"none":"";scheduleSave()}}
 if(!w.querySelector(".resize-handle")){let rh=document.createElement("div");rh.className="resize-handle";w.appendChild(rh);makeResizable(w,rh)}
 const type=w.dataset.type;
 if(type==="clock"&&(!w.querySelector(".clockwrap")||!w.querySelector(".clocktime")||!w.querySelector(".clockticks")||w.querySelector(".clock-svg,.clock-svg-wrap,[data-clock-render='v31']"))){
   const body=w.querySelector(".widget-body");
   if(body)body.innerHTML=widgetHTML("clock");
 }
 const settingsSelectors=".flashcard-settings,.module-settings,.kbs-compact-settings,.generator-settings,.split-settings,.wf-settings,.mf-settings,.mf-table-row,.duel-toolbar,.race-settings,.race-addrow,.ns-settings,.money-mode,.clock-settings,.random-settings,.pv-select,.pdf-actions,.quiz-settings,.widget-controls,.compact-actions";
 let focusBtn=document.createElement("button");focusBtn.className="mini module-fullscreen";focusBtn.title="Vul het hele bord";focusBtn.textContent="⛶";barActions.prepend(focusBtn);
 let cleanBeforeFullscreen=w.classList.contains("clean-view");
 const leaveFullscreen=()=>{w.classList.remove("board-fullscreen");document.body.classList.remove("module-focus-mode");focusBtn.textContent="⛶";focusBtn.title="Vul het bord";setClean(cleanBeforeFullscreen);ensureBoardExtent();scrollWidgetIntoBoardView(w)};
 focusBtn.onclick=e=>{e.preventDefault();e.stopPropagation();let on=!w.classList.contains("board-fullscreen");document.querySelectorAll(".widget.board-fullscreen").forEach(x=>x.classList.remove("board-fullscreen"));if(on){cleanBeforeFullscreen=w.classList.contains("clean-view");if(typeof annotating!=="undefined"&&annotating){annotating=false;drawing=false;ann?.classList.remove("active");annotateBtn?.classList.remove("active");document.querySelector(".ink-palette")?.classList.remove("show")}w.classList.add("board-fullscreen");document.body.classList.add("module-focus-mode");focusBtn.textContent="✕";focusBtn.title="Volledig scherm sluiten";setClean(true)}else leaveFullscreen()};
 w.addEventListener("keydown",e=>{if(e.key==="Escape"&&w.classList.contains("board-fullscreen"))leaveFullscreen()});
 let settingsBtn=document.createElement("button");settingsBtn.className="mini settings-toggle";settingsBtn.title="Instellingen tonen/verbergen";settingsBtn.textContent="⚙";barActions.prepend(settingsBtn);
 const setClean=clean=>{w.classList.toggle("clean-view",clean);settingsBtn.textContent=clean?"⚙":"✓";settingsBtn.title=clean?"Instellingen tonen":"Instellingen verbergen";w.querySelectorAll(settingsSelectors).forEach(el=>{if(!el.closest(".widget-bar"))el.classList.toggle("kbs-settings-hidden",clean)})};
 settingsBtn.onclick=e=>{e.stopPropagation();setClean(!w.classList.contains("clean-view"))};
 settingsBtn.setAttribute("aria-label","Instellingen tonen of verbergen");focusBtn.setAttribute("aria-label","Module volledig scherm");
 const syncSettingsState=()=>{settingsBtn.classList.toggle("active",!w.classList.contains("clean-view"));settingsBtn.setAttribute("aria-pressed",String(!w.classList.contains("clean-view")))};settingsBtn.addEventListener("click",syncSettingsState);syncSettingsState();

 if(type==="stoplicht"){const labels={red:w.querySelector(".traffic-label-red"),orange:w.querySelector(".traffic-label-orange"),green:w.querySelector(".traffic-label-green")},lights=[...w.querySelectorAll(".light")],message=w.querySelector(".traffic-message");let active="green";const fallback={red:"Zelfstandig werken",orange:"Groepswerk",green:"Klassikaal werk"};const paint=()=>{lights.forEach(x=>x.classList.toggle("active",x.dataset.color===active));message.textContent=labels[active].value.trim()||fallback[active]};lights.forEach(l=>l.onclick=()=>{active=l.dataset.color;paint()});Object.values(labels).forEach(inp=>inp.oninput=paint);paint()}
 if(type==="namen")w.querySelector(".choose-name").onclick=()=>{let a=w.querySelector("textarea").value.split("\n").map(x=>x.trim()).filter(Boolean);w.querySelector(".name-result").textContent=a.length?a[Math.floor(Math.random()*a.length)]:"Voeg namen toe"};
 if(type==="spinner"){
   let segments=[{label:"Rood",color:"#fe2020"},{label:"Geel",color:"#fee020"},{label:"Groen",color:"#54955c"},{label:"Blauw",color:"#28b9aa"}],rotation=0;
   const box=w.querySelector(".spinner-segments"),wheel=w.querySelector(".spinner"),result=w.querySelector(".spinner-result");
   const paint=()=>{box.innerHTML=segments.map((s,i)=>`<div class="spinner-segment-row" data-i="${i}"><input class="spinner-label" value="${s.label}" aria-label="Naam vak"><input class="spinner-color" type="color" value="${s.color}" aria-label="Kleur"><button class="tiny-danger spinner-del" type="button" ${segments.length<=2?"disabled":""}>×</button></div>`).join("");let step=100/segments.length;wheel.style.background=`conic-gradient(${segments.map((s,i)=>`${s.color} ${i*step}% ${(i+1)*step}%`).join(",")})`;box.querySelectorAll(".spinner-segment-row").forEach(row=>{let i=+row.dataset.i;row.querySelector(".spinner-label").oninput=e=>{segments[i].label=e.target.value};row.querySelector(".spinner-color").oninput=e=>{segments[i].color=e.target.value;paint()};row.querySelector(".spinner-del").onclick=()=>{if(segments.length>2){segments.splice(i,1);paint()}}})};
   w.querySelector(".spinner-add").onclick=()=>{if(segments.length>=12)return;let palette=["#fea020","#9b81b8","#dff6ff","#fb6730","#082a55","#ffffff"];segments.push({label:`Vak ${segments.length+1}`,color:palette[(segments.length-4)%palette.length]});paint()};
   w.querySelector(".spin").onclick=()=>{let pick=Math.floor(Math.random()*segments.length),step=360/segments.length,target=360-(pick*step+step/2);rotation+=1080+target-(rotation%360);wheel.style.transform=`rotate(${rotation}deg)`;result.textContent="";setTimeout(()=>result.textContent=segments[pick].label,1150)};paint();
 }
 if(type==="dice"){let count=1,showResult=true,lastVals=[],stage=w.querySelector(".studio-dice-stage"),toggle=w.querySelector(".two-dice"),resultToggle=w.querySelector(".dice-result-toggle");const die=n=>renderWerkbladstudioGetalbeeld("dice",n);const paint=(reroll=true)=>{if(reroll||!lastVals.length)lastVals=Array.from({length:count},()=>1+Math.floor(Math.random()*6));let result=count===2?lastVals[0]+lastVals[1]:lastVals[0];stage.innerHTML=`<div class="dice-row">${lastVals.map(die).join("")}</div><div class="dice-sum ${showResult?"":"hidden"}">Uitkomst: ${result}</div>`};toggle.onclick=()=>{count=count===1?2:1;toggle.classList.toggle("active",count===2);toggle.textContent=count===2?"✓ 2 dobbelstenen":"2 dobbelstenen";paint(true)};resultToggle.onclick=()=>{showResult=!showResult;resultToggle.classList.toggle("active",showResult);resultToggle.textContent=showResult?"Uitkomst tonen":"Uitkomst verborgen";paint(false)};w.querySelector(".roll").onclick=()=>paint(true);paint(true)}
 if(type==="tenframe"){w.querySelectorAll(".cell").forEach(c=>c.onclick=()=>c.innerHTML=c.innerHTML?"":'<span class="counter"></span>');w.querySelector(".clearcells").onclick=()=>w.querySelectorAll(".cell").forEach(c=>c.innerHTML="")}
 if(type==="hundreds"){w.querySelectorAll(".hundreds button").forEach(b=>b.onclick=()=>b.classList.toggle("marked"));w.querySelector(".clear100").onclick=()=>w.querySelectorAll(".hundreds button").forEach(b=>b.classList.remove("marked"))}

 if(type==="numberline"){let selected=[],arcs=[];const ticks=w.querySelector(".ticks"),svg=w.querySelector(".nl-arcs");const build=()=>{let a=+w.querySelector(".nl-start").value||0,b=+w.querySelector(".nl-end").value||1000,step=Math.max(1,+w.querySelector(".nl-step").value||100);if(b<=a)b=a+step*10;let vals=[];for(let x=a;x<=b&&vals.length<31;x+=step)vals.push(x);ticks.innerHTML=vals.map((v,i)=>`<button class="tick" data-v="${v}" style="left:${i/(vals.length-1)*100}%"><span>${v}</span></button>`).join("");ticks.querySelectorAll(".tick").forEach(btn=>btn.onclick=()=>{selected.push(+btn.dataset.v);btn.classList.add("selected");if(selected.length===2){let [x,y]=selected,all=[...ticks.querySelectorAll(".tick")],i1=all.findIndex(q=>+q.dataset.v===x),i2=all.findIndex(q=>+q.dataset.v===y),x1=i1/(all.length-1)*1000,x2=i2/(all.length-1)*1000,mid=(x1+x2)/2,h=Math.min(125,35+Math.abs(i2-i1)*12);arcs.push({x,y});svg.insertAdjacentHTML("beforeend",`<path d="M ${x1} 145 Q ${mid} ${145-h} ${x2} 145"/><text x="${mid}" y="${125-h}" text-anchor="middle">${y-x>=0?"+":""}${y-x}</text>`);selected=[];all.forEach(q=>q.classList.remove("selected"))}})};w.querySelector(".nl-new").onclick=build;w.querySelector(".nl-clear-arcs").onclick=()=>{arcs=[];svg.innerHTML=""};w.querySelector(".nl-check").onclick=()=>w.querySelector(".nl-feedback").textContent=arcs.length?"✓ Sprongen getekend.":"Teken eerst minstens één sprong.";build()}
 if(type==="base10"){let h=1,t=1,u=1,out=w.querySelector(".baseval"),stage=w.querySelector(".mab-exact-stage");const paint=()=>{if(w.querySelector(".mab-auto").checked){if(u>=10){t+=Math.floor(u/10);u%=10}if(t>=10){h+=Math.floor(t/10);t%=10}}let value=h*100+t*10+u;stage.innerHTML=renderWerkbladstudioGetalbeeld("mab",value);out.textContent=value;out.hidden=!w.querySelector(".mab-show").checked};w.querySelector(".add100").onclick=()=>{h++;paint()};w.querySelector(".add10").onclick=()=>{t++;paint()};w.querySelector(".add1").onclick=()=>{u++;paint()};w.querySelector(".clearbase").onclick=()=>{h=t=u=0;paint()};w.querySelector(".mab-auto").onchange=paint;w.querySelector(".mab-show").onchange=paint;paint()}
 if(type==="clock"){
   const wrap=w.querySelector(".clockwrap"),time=w.querySelector(".clocktime"),ticks=w.querySelector(".clockticks"),analogBtn=w.querySelector(".clockanalog"),digitalBtn=w.querySelector(".clockdigital"),nowBtn=w.querySelector(".now");
   if(wrap&&time&&ticks&&analogBtn&&digitalBtn){
     let analogMode=true;
     const redraw=()=>{if(!analogMode)return;let canvas=wrap.querySelector(".clock-canvas");if(!canvas){wrap.innerHTML=clockFaceHTML();canvas=wrap.querySelector(".clock-canvas")}requestAnimationFrame(()=>drawClockCanvas(canvas,time.value,ticks.value||"five"))};
     const analog=()=>{analogMode=true;analogBtn.classList.add("active");digitalBtn.classList.remove("active");wrap.innerHTML=clockFaceHTML();redraw()};
     const digital=()=>{analogMode=false;digitalBtn.classList.add("active");analogBtn.classList.remove("active");wrap.innerHTML=`<div class="digital-clock">${time.value||"02:30"}</div>`};
     analogBtn.onclick=analog;digitalBtn.onclick=digital;ticks.onchange=redraw;time.oninput=()=>analogMode?redraw():digital();
     if(nowBtn)nowBtn.onclick=()=>{const d=new Date();time.value=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");analogMode?redraw():digital()};
     if("ResizeObserver" in window)new ResizeObserver(()=>redraw()).observe(w);
     analog();
   }
 }
 if(type==="words"){let i=0,hidden=false;const words=()=>w.querySelector(".wordlist").value.split("\n").map(x=>x.trim()).filter(Boolean).filter(x=>x.toLowerCase().includes(w.querySelector(".wordsearch").value.toLowerCase()));const show=()=>{let a=words();if(i>=a.length)i=Math.max(0,a.length-1);w.querySelector(".wordresult").textContent=!a.length?"Geen woorden":hidden?"••••••":a[i];let c=w.querySelector(".word-counter");if(c)c.textContent=a.length?`Woord ${i+1} van ${a.length}`:"Voeg woorden toe of pas je zoekterm aan."};w.querySelector(".nextword").onclick=()=>{i++;hidden=false;show()};w.querySelector(".prevword").onclick=()=>{i=Math.max(0,i-1);hidden=false;show()};w.querySelector(".shufflewords").onclick=()=>{let a=w.querySelector(".wordlist").value.split("\n").filter(Boolean).sort(()=>Math.random()-.5);w.querySelector(".wordlist").value=a.join("\n");i=0;hidden=false;show()};w.querySelector(".hideword").onclick=()=>{hidden=!hidden;show()};w.querySelector(".wordsearch").oninput=()=>{i=0;show()};w.querySelector(".genwords").onclick=()=>{let key=w.querySelector(".wordlevel").value,bank=USER_WORDBANKS[key]||[];if(!bank.length){notify("Geen woorden gevonden");return}w.querySelector(".wordlist").value=bank.join("\n");i=0;hidden=false;show()}}
 if(type==="numberimages"){let v=w.querySelector(".ni-value"),s=w.querySelector(".ni-type"),o=w.querySelector(".number-image-stage");const active=()=>GETALBEELDEN_MATERIALS.find(x=>x.id===s.value)||GETALBEELDEN_MATERIALS[0];const paint=()=>{let m=active(),n=Math.max(m.min,Math.min(m.max,Number(v.value)||0));v.min=m.min;v.max=m.max;v.value=n;o.style.setProperty("--hand-sprite",`url("${HAND_SPRITE}")`);o.innerHTML=renderWerkbladstudioGetalbeeld(m.id,n,{splitMode:"solution",moneyMode:"auto"})};v.oninput=paint;s.onchange=()=>{v.value=active().sample;paint()};w.querySelector(".ni-minus").onclick=()=>{v.value=Number(v.value)-1;paint()};w.querySelector(".ni-plus").onclick=()=>{v.value=Number(v.value)+1;paint()};w.querySelector(".ni-random").onclick=()=>{let m=active();v.value=m.min+Math.floor(Math.random()*(m.max-m.min+1));paint()};paint()}

 if(type==="mathflasher"){
   let timer=null,paused=false,current=null,phase="question";const stage=w.querySelector(".mf-stage"),status=w.querySelector(".mf-status");
   const defaults={L1:20,L2:100,L3:1000,L4:100000,L5:1000000,L6:1000000000};
   w.querySelector(".mf-grade").onchange=e=>{w.querySelector(".mf-max").value=defaults[e.target.value]};
   const selectedTables=()=>[...w.querySelectorAll(".mf-tables input:checked")].map(x=>+x.value);
   const make=()=>{let max=Math.max(5,+w.querySelector(".mf-max").value||20),kind=w.querySelector(".mf-kind").value,tablesOn=w.querySelector(".mf-tables-on").checked;if(kind==="mixed")kind=tablesOn?["add","sub","tables"][Math.floor(Math.random()*3)]:["add","sub"][Math.floor(Math.random()*2)];if(kind==="tables"&&!tablesOn)kind="add";
     if(kind==="image"){let mats=GETALBEELDEN_MATERIALS.filter(m=>m.id!=="money"&&m.id!=="fingers"&&m.max>=5),m=mats[Math.floor(Math.random()*mats.length)],cap=Math.min(max,m.max),n=Math.max(m.min,Math.floor(Math.random()*(cap-m.min+1))+m.min);return {q:renderWerkbladstudioGetalbeeld(m.id,n,{splitMode:"whole"}),a:String(n),html:true}}
     if(kind==="tables"){let ts=selectedTables();if(!ts.length)ts=[1,2,3,4,5,6,7,8,9,10];let a=ts[Math.floor(Math.random()*ts.length)],b=1+Math.floor(Math.random()*12);return {q:`${a} × ${b} = ?`,a:String(a*b)}}
     let a=Math.floor(Math.random()*(max+1)),b=Math.floor(Math.random()*(max+1));if(kind==="sub"){if(b>a)[a,b]=[b,a];return {q:`${a} − ${b} = ?`,a:String(a-b)}}if(a+b>max)b=Math.max(0,max-a);return {q:`${a} + ${b} = ?`,a:String(a+b)}};
   const showQuestion=()=>{current=make();phase="question";stage.classList.remove("answer");stage.innerHTML=current.html?current.q:`<span>${current.q}</span>`;status.textContent="Denk…";if(!paused)timer=setTimeout(showAnswer,+w.querySelector(".mf-visible").value)};
   const showAnswer=()=>{phase="answer";stage.classList.add("answer");stage.innerHTML=`<span>${current.a}</span>`;status.textContent="Oplossing";if(!paused)timer=setTimeout(showQuestion,+w.querySelector(".mf-answer").value)};
   const start=()=>{clearTimeout(timer);paused=false;w.querySelector(".mf-pause").textContent="Pauze";showQuestion()};
   w.querySelector(".mf-start").onclick=start;w.querySelector(".mf-next").onclick=()=>{clearTimeout(timer);showQuestion()};w.querySelector(".mf-pause").onclick=()=>{paused=!paused;clearTimeout(timer);w.querySelector(".mf-pause").textContent=paused?"Verder":"Pauze";if(!paused)(phase==="question"?showAnswer():showQuestion())};w.querySelector(".mf-stop").onclick=()=>{clearTimeout(timer);paused=true;stage.textContent="Gestopt";status.textContent="Klaar."};
 }
 if(type==="duel"){let sa=0,sb=0,aa=0,ab=0,pa=null,pb=null,finished=false;const limit=()=>+w.querySelector(".duel-rounds").value||0;const score=()=>{w.querySelector(".duel-score-a").textContent=`${sa}${limit()?`/${aa}`:""}`;w.querySelector(".duel-score-b").textContent=`${sb}${limit()?`/${ab}`:""}`};const splitVisual=(whole,known,left)=>`<div class="duel-split"><div class="whole">${whole}</div><svg viewBox="0 0 200 65"><path d="M100 2 L45 60 M100 2 L155 60"/></svg><div class="parts"><span>${left?known:"?"}</span><span>${left?"?":known}</span></div></div>`;const problem=()=>{let max=Math.max(5,+w.querySelector(".duel-max").value||20),kind=w.querySelector(".duel-kind").value;if(kind==="tables"){let a=1+Math.floor(Math.random()*10),b=1+Math.floor(Math.random()*10);return {q:`${a} × ${b}`,a:a*b}}if(kind==="split"){let n=2+Math.floor(Math.random()*(max-1)),known=Math.floor(Math.random()*(n+1)),left=Math.random()<.5;return {q:splitVisual(n,known,left),a:n-known,html:true}}if(kind==="image"){let mats=GETALBEELDEN_MATERIALS.filter(m=>!["money","fingers","split"].includes(m.id)&&m.max>=1),m=mats[Math.floor(Math.random()*mats.length)],n=Math.max(m.min,1+Math.floor(Math.random()*Math.min(max,m.max,20)));return {q:renderWerkbladstudioGetalbeeld(m.id,n),a:n,html:true}}let a=Math.floor(Math.random()*max),bb=Math.floor(Math.random()*(max-a+1));return {q:`${a} + ${bb}`,a:a+bb}};const finishCheck=()=>{let lim=limit();if(!lim||aa<lim||ab<lim)return false;finished=true;let names=[...w.querySelectorAll(".duel-player input")].map(x=>x.value);w.querySelector(".duel-feedback").textContent=sa===sb?`Gelijkspel: ${sa}–${sb}`:`🏆 ${sa>sb?names[0]:names[1]} wint met ${Math.max(sa,sb)}–${Math.min(sa,sb)}.`;w.querySelectorAll(".duel-answers-a button,.duel-answers-b button").forEach(x=>x.disabled=true);return true};const renderSide=side=>{if(finished)return;let p=side==="a"?pa:pb,task=w.querySelector(`.duel-task-${side}`),box=w.querySelector(`.duel-answers-${side}`),set=new Set([p.a]);while(set.size<4)set.add(Math.max(0,p.a-5+Math.floor(Math.random()*11)));task.innerHTML=p.html?p.q:`<span>${p.q}</span>`;box.innerHTML=[...set].sort(()=>Math.random()-.5).map(n=>`<button type="button" data-n="${n}">${n}</button>`).join("");box.querySelectorAll("button").forEach(btn=>btn.onclick=()=>{if(finished)return;let correct=+btn.dataset.n===p.a;if(side==="a")aa++;else ab++;if(correct){btn.classList.add("correct");side==="a"?sa++:sb++}else btn.classList.add("wrong");score();box.querySelectorAll("button").forEach(x=>x.disabled=true);if(finishCheck())return;w.querySelector(".duel-feedback").textContent=correct?"✓ Juist — volgende oefening.":"✗ Fout telt mee — volgende oefening.";setTimeout(()=>{if(side==="a")pa=problem();else pb=problem();renderSide(side)},550)})};const next=()=>{finished=false;pa=problem();pb=problem();renderSide("a");renderSide("b");w.querySelector(".duel-feedback").textContent="Elk antwoord telt als een poging, ook een fout antwoord."};w.querySelector(".duel-new").onclick=next;w.querySelector(".duel-reset").onclick=()=>{sa=sb=aa=ab=0;score();next()};w.querySelector(".duel-rounds").onchange=()=>{sa=sb=aa=ab=0;score();next()};score();next()}

 if(type==="behaviorrace"){let track=w.querySelector(".race-track"),finish=w.querySelector(".race-finish"),names=w.querySelector(".race-names"),winner=w.querySelector(".race-winner"),state=[];const paint=()=>{let max=Math.max(3,+finish.value||10);track.innerHTML=state.map((r,i)=>`<div class="race-lane"><strong>${r.name}</strong><div class="race-road"><div class="race-runner" style="left:${Math.min(100,r.score/max*100)}%">🚀</div><i style="width:${Math.min(100,r.score/max*100)}%"></i></div><span>${r.score}/${max}</span><button data-i="${i}" data-d="-1">−</button><button data-i="${i}" data-d="1">＋</button></div>`).join("");track.querySelectorAll("button").forEach(b=>b.onclick=()=>{let r=state[+b.dataset.i],max=Math.max(3,+finish.value||10);r.score=Math.max(0,Math.min(max,r.score+(+b.dataset.d)));winner.textContent=r.score>=max?`${r.name} bereikt de finish!`:"";paint();scheduleSave()})};const build=()=>{state=names.value.split(/\n|,/).map(x=>x.trim()).filter(Boolean).map(name=>({name,score:0}));paint()};w.querySelector(".race-build").onclick=build;w.querySelector(".race-reset").onclick=()=>{state.forEach(x=>x.score=0);winner.textContent="";paint()};build()}
 if(type==="numbersenserace"){let red=0,green=0,round=1,turn="red",answer=0,adv=null;const score=()=>{w.querySelector(".ns-redscore").textContent=red;w.querySelector(".ns-greenscore").textContent=green;w.querySelector(".ns-round b").textContent=round;w.querySelector(".ns-team-red").classList.toggle("active",turn==="red");w.querySelector(".ns-team-green").classList.toggle("active",turn==="green")};const make=()=>{clearTimeout(adv);const max=Math.max(5,+w.querySelector(".ns-max").value||20);answer=1+Math.floor(Math.random()*max);let wanted=w.querySelector(".ns-type").value,mats=GETALBEELDEN_MATERIALS.filter(m=>!["money","fingers"].includes(m.id)&&m.min<=answer&&m.max>=answer),m=wanted==="mix"?mats[Math.floor(Math.random()*mats.length)]:(GETALBEELDEN_MATERIALS.find(x=>x.id===wanted&&x.min<=answer&&x.max>=answer)||mats[0]);w.querySelector(".ns-visual").innerHTML=renderWerkbladstudioGetalbeeld(m.id,answer,{splitMode:"whole"});let set=new Set([answer]);while(set.size<4)set.add(Math.max(0,answer-5+Math.floor(Math.random()*11)));w.querySelector(".ns-options").innerHTML=[...set].sort(()=>Math.random()-.5).map(n=>`<button type="button" data-n="${n}">${n}</button>`).join("");w.querySelector(".ns-feedback").textContent=`${turn==="red"?"Team rood":"Team groen"} is aan de beurt.`;w.querySelectorAll(".ns-options button").forEach(btn=>btn.onclick=()=>{if(+btn.dataset.n!==answer){btn.classList.add("wrong");w.querySelector(".ns-feedback").textContent="Nog eens proberen — hetzelfde bord blijft staan.";return}btn.classList.add("correct");turn==="red"?red++:green++;score();w.querySelector(".ns-feedback").textContent="✓ Juist! Volgend bord…";adv=setTimeout(()=>{turn=turn==="red"?"green":"red";round++;score();make()},650)})};w.querySelector(".ns-new").onclick=make;w.querySelector(".ns-reset").onclick=()=>{red=green=0;round=1;turn="red";score();make()};score();make()}

 if(type==="richdaystarter"){const facts=["Een octopus heeft drie harten.","Bijen vertellen met een dans waar voedsel te vinden is.","Een dag telt 86.400 seconden.","Een volwassen mens heeft meestal 206 botten.","Licht reist sneller dan geluid.","De maan weerkaatst het licht van de zon."];const week=d=>{let x=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));x.setUTCDate(x.getUTCDate()+4-(x.getUTCDay()||7));let y=new Date(Date.UTC(x.getUTCFullYear(),0,1));return Math.ceil((((x-y)/86400000)+1)/7)};const season=d=>{let md=(d.getMonth()+1)*100+d.getDate();return md>=1221||md<321?"❄️ Winter":md<621?"🌷 Lente":md<921?"☀️ Zomer":"🍂 Herfst"};const tick=()=>{let d=new Date();w.querySelector(".rds-day").textContent=d.toLocaleDateString("nl-BE",{weekday:"long"});w.querySelector(".rds-date").textContent=d.toLocaleDateString("nl-BE",{day:"numeric",month:"long",year:"numeric"});w.querySelector(".rds-clock").textContent=d.toLocaleTimeString("nl-BE",{hour:"2-digit",minute:"2-digit"});w.querySelector(".rds-week").textContent=week(d);w.querySelector(".rds-season").textContent=season(d)};const setFact=x=>{w.querySelector(".rds-fact").textContent=x;w.querySelector(".rds-fact-edit").value=x};const fact=()=>setFact(facts[Math.floor(Math.random()*facts.length)]);const pairs=[[".rds-message",".rds-message-out"],[".rds-word",".rds-word-out"],[".rds-meaning",".rds-meaning-out"],[".rds-sentence",".rds-sentence-out"],[".rds-spelling",".rds-spelling-out"],[".rds-reading",".rds-reading-out"],[".rds-languageq",".rds-languageq-out"]];pairs.forEach(([a,b])=>{let inp=w.querySelector(a),o=w.querySelector(b);o.textContent=inp.value;inp.oninput=()=>o.textContent=inp.value});tick();fact();w.querySelector(".rds-newfact").onclick=fact;w.querySelector(".rds-fact-edit").oninput=e=>w.querySelector(".rds-fact").textContent=e.target.value}
 if(type==="pdfboard"){const file=w.querySelector(".pdf-file"),upload=w.querySelector(".pdf-upload-state"),view=w.querySelector(".pdf-view"),frame=w.querySelector(".pdf-frame"),canvas=w.querySelector(".pdf-ink"),ctx=canvas.getContext("2d");let url=null,mode="none",drawing=false,last=null;const resize=()=>{let r=canvas.getBoundingClientRect();if(r.width&&r.height&&(canvas.width!==Math.round(r.width)||canvas.height!==Math.round(r.height))){let old=document.createElement("canvas");old.width=canvas.width;old.height=canvas.height;old.getContext("2d").drawImage(canvas,0,0);canvas.width=Math.round(r.width);canvas.height=Math.round(r.height);ctx.drawImage(old,0,0,canvas.width,canvas.height)}};const setMode=m=>{mode=mode===m?"none":m;canvas.classList.toggle("active",mode!=="none");w.querySelector(".pdf-write").classList.toggle("active",mode==="pen");w.querySelector(".pdf-marker").classList.toggle("active",mode==="marker");w.querySelector(".pdf-erase").classList.toggle("active",mode==="erase")};const load=f=>{if(!f||f.type!=="application/pdf"){notify("Kies een PDF-bestand.");return}if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(f);frame.src=url;upload.hidden=true;view.hidden=false;setTimeout(resize,250)};file.onchange=()=>load(file.files[0]);w.querySelector(".pdf-change").onclick=()=>file.click();w.querySelector(".pdf-write").onclick=()=>setMode("pen");w.querySelector(".pdf-marker").onclick=()=>setMode("marker");w.querySelector(".pdf-erase").onclick=()=>setMode("erase");w.querySelector(".pdf-clear-ink").onclick=()=>ctx.clearRect(0,0,canvas.width,canvas.height);const pos=e=>{let r=canvas.getBoundingClientRect();return {x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}};canvas.onpointerdown=e=>{if(mode==="none")return;resize();drawing=true;last=pos(e);canvas.setPointerCapture?.(e.pointerId)};canvas.onpointermove=e=>{if(!drawing)return;let p=pos(e);ctx.save();ctx.lineCap="round";ctx.lineJoin="round";if(mode==="erase"){ctx.globalCompositeOperation="destination-out";ctx.lineWidth=28}else{ctx.globalCompositeOperation="source-over";ctx.strokeStyle=mode==="marker"?"rgba(254,224,32,.45)":"#033663";ctx.lineWidth=mode==="marker"?18:4}ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();ctx.restore();last=p};canvas.onpointerup=canvas.onpointercancel=()=>drawing=false;new ResizeObserver(resize).observe(w.querySelector(".pdf-layer"))}
 if(type==="whiteboard")wireCanvas(w);
 if(type==="timer")wireTimer(w);

 if(type==="worksymbols"){let choices=[...w.querySelectorAll(".work-choice")],display=w.querySelector(".work-symbol-display"),img=display.querySelector("img"),label=display.querySelector("strong");choices.forEach(b=>b.onclick=()=>{choices.forEach(x=>x.classList.toggle("active",x===b));img.src=b.dataset.src;label.textContent=b.dataset.label;scheduleSave()})}
 if(type==="scoreboard")w.querySelectorAll(".team").forEach(team=>{let n=0,out=team.querySelector(".score");team.querySelector(".plus").onclick=()=>out.textContent=++n;team.querySelector(".minus").onclick=()=>out.textContent=Math.max(0,--n)});
 if(type==="poll"){const editor=w.querySelector(".poll-editor"),opts=w.querySelector(".poll-options");const wireDel=()=>editor.querySelectorAll(".delopt").forEach(b=>b.onclick=()=>{if(editor.children.length>2)b.parentElement.remove()});const paint=()=>{let cs=[...opts.querySelectorAll(".poll-count")].map(x=>+x.dataset.count||0),total=cs.reduce((a,b)=>a+b,0),max=Math.max(1,...cs);opts.querySelectorAll(".poll-option").forEach((r,i)=>{r.querySelector(".poll-count").textContent=cs[i];r.querySelector(".poll-fill").style.width=(cs[i]/max*100)+"%";r.querySelector(".poll-percent").textContent=total?Math.round(cs[i]/total*100)+"%":"0%"})};wireDel();w.querySelector(".addopt").onclick=()=>{if(editor.children.length>=8)return;editor.insertAdjacentHTML("beforeend",'<div class="poll-edit-row"><input value="Nieuwe optie"><button class="tiny-danger delopt" type="button">×</button></div>');wireDel()};w.querySelector(".startpoll").onclick=()=>{opts.innerHTML=[...editor.querySelectorAll("input")].map((x,i)=>`<div class="poll-option"><button type="button">${x.value||"Optie "+(i+1)}</button><div class="poll-meter"><i class="poll-fill"></i></div><span class="poll-count" data-count="0">0</span><small class="poll-percent">0%</small></div>`).join("");opts.querySelectorAll("button").forEach(btn=>btn.onclick=()=>{let c=btn.parentElement.querySelector(".poll-count");c.dataset.count=String((+c.dataset.count||0)+1);paint()});paint()};w.querySelector(".resetpoll").onclick=()=>{opts.querySelectorAll(".poll-count").forEach(c=>c.dataset.count="0");paint()}}
 if(type==="groups"){let count=2;const make=()=>{let a=w.querySelector("textarea").value.split("\n").map(x=>x.trim()).filter(Boolean).sort(()=>Math.random()-.5),g=Array.from({length:count},()=>[]);a.forEach((n,i)=>g[i%count].push(n));w.querySelector(".group-output").innerHTML=g.map((x,i)=>`<div class="group-card"><b>Groep ${i+1}</b><br>${x.join("<br>")}</div>`).join("")};w.querySelector(".makegroups").onclick=make;w.querySelector(".moregroups").onclick=()=>{count=Math.min(8,count+1);w.querySelector(".makegroups").textContent=`Maak ${count} groepen`;make()}}
 if(type==="visualtimer"){let input=w.querySelector(".vtminutes"),v=w.querySelector(".visualtimer"),sec=Number(input.value)*60,initial=sec,int=null;const paint=()=>{let m=Math.floor(sec/60),s=sec%60;v.dataset.label=`${m}:${String(s).padStart(2,"0")}`;let pct=initial?sec/initial:0;v.style.background=`conic-gradient(var(--teal) 0deg ${pct*360}deg,#edf2f5 ${pct*360}deg)`};w.querySelector(".vtstart").onclick=e=>{if(int){clearInterval(int);int=null;e.target.textContent="Start";return}if(sec<=0){sec=Math.max(60,Number(input.value)*60);initial=sec}e.target.textContent="Pauze";int=setInterval(()=>{sec--;paint();if(sec<=0){clearInterval(int);int=null;e.target.textContent="Start";playAlarm()}},1000)};w.querySelector(".vtreset").onclick=()=>{clearInterval(int);int=null;sec=Math.max(60,Number(input.value)*60);initial=sec;paint();w.querySelector(".vtstart").textContent="Start"};input.onchange=()=>{sec=Math.max(60,Number(input.value)*60);initial=sec;paint()};paint()}
 if(type==="stopwatch"){let s=0,int=null,d=w.querySelector(".swdisplay"),paint=()=>d.textContent=String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");w.querySelector(".swstart").onclick=e=>{if(int){clearInterval(int);int=null;e.target.textContent="Start"}else{e.target.textContent="Pauze";int=setInterval(()=>{s++;paint()},1000)}};w.querySelector(".swreset").onclick=()=>{s=0;paint()}}
 if(type==="event"){let f=()=>{let d=w.querySelector(".eventdate").value;if(!d)return;let days=Math.ceil((new Date(d+"T12:00")-new Date())/86400000);w.querySelector(".eventresult").textContent=days>=0?`${days} dagen`:"Voorbij"};w.querySelector(".eventdate").oninput=f}
 if(type==="stickers")w.querySelectorAll(".stickertray button").forEach(b=>b.onclick=()=>w.querySelector(".stickerout").textContent=b.textContent);
 if(type==="link")w.querySelector(".openlink").onclick=()=>{let u=w.querySelector("input").value;if(/^https?:\/\//.test(u))window.open(u,"_blank")};
 if(type==="image")w.querySelector(".loadimage").onclick=()=>{let u=w.querySelector("input").value;if(/^https?:\/\//.test(u))w.querySelector(".imageout").innerHTML=`<img src="${u}" style="max-width:100%;max-height:170px;display:block;margin:auto">`};
 if(type==="video")w.querySelector(".loadvideo").onclick=()=>{let raw=w.querySelector(".video-url").value.trim(),id="";try{let u=new URL(raw);if(u.hostname.includes("youtu.be"))id=u.pathname.slice(1).split("/")[0];else if(u.searchParams.get("v"))id=u.searchParams.get("v");else{let m=u.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/);if(m)id=m[1]}}catch{}let fb=w.querySelector(".video-feedback");if(!/^[A-Za-z0-9_-]{6,}$/.test(id)){fb.textContent="Plak een geldige YouTube-link.";return}w.querySelector(".videoout").innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube-video" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;fb.textContent="";};
 if(type==="embed")w.querySelector(".loadembed").onclick=()=>{let u=w.querySelector("input").value;if(/^https?:\/\//.test(u))w.querySelector(".embedout").innerHTML=`<iframe src="${u}" style="width:100%;height:180px;border:0;border-radius:10px"></iframe>`};
 if(type==="sound")w.querySelector(".startsound").onclick=async()=>{try{let stream=await navigator.mediaDevices.getUserMedia({audio:true}),ctx=new AudioContext(),src=ctx.createMediaStreamSource(stream),an=ctx.createAnalyser();src.connect(an);let data=new Uint8Array(an.frequencyBinCount),fill=w.querySelector(".soundfill"),label=w.querySelector(".soundlabel");(function loop(){an.getByteFrequencyData(data);let avg=data.reduce((a,b)=>a+b,0)/data.length,p=Math.min(100,avg*1.5);fill.style.width=p+"%";label.textContent=p<30?"Rustig":p<65?"Let op het volume":"Te luid";requestAnimationFrame(loop)})()}catch(e){w.querySelector(".soundlabel").textContent="Microfoontoegang niet beschikbaar"}};
 if(type==="wordflasher"){let timer=null,hideTimer=null,list=[],i=0,paused=false,running=false;const clear=()=>{clearTimeout(timer);clearTimeout(hideTimer)};const getList=()=>{let own=w.querySelector(".wf-own").value.split(/\n/).map(x=>x.trim()).filter(Boolean),bank=(USER_WORDBANKS[w.querySelector(".wf-level").value]||[]).map(String);return own.length?own:bank};const next=()=>{clear();if(!running||paused)return;if(i>=list.length){running=false;w.querySelector(".wf-stage").textContent="Klaar!";w.querySelector(".wf-status").textContent=`${list.length} woorden geflitst.`;return}let x=list[i++];w.querySelector(".wf-stage").textContent=w.querySelector(".wf-articles").checked?x:x.replace(/^(de|het|een)\s+/i,"");w.querySelector(".wf-status").textContent=`Woord ${i} van ${list.length}`;w.querySelector(".wf-progress i").style.width=(i/list.length*100)+"%";if(w.querySelector(".wf-mode").value==="auto"){hideTimer=setTimeout(()=>{w.querySelector(".wf-stage").textContent="";timer=setTimeout(next,+w.querySelector(".wf-pause").value)},+w.querySelector(".wf-visible").value)}};const start=()=>{clear();list=getList().slice(0,Math.max(1,+w.querySelector(".wf-count").value||10));i=0;paused=false;running=!!list.length;w.querySelector(".wf-pausebtn").textContent="Pauze";if(running)next();else{w.querySelector(".wf-stage").textContent="Geen woorden";w.querySelector(".wf-status").textContent="Voeg eigen woorden toe of kies een woordenbank."}};w.querySelector(".wf-start").onclick=start;w.querySelector(".wf-next").onclick=()=>{if(!running)start();else next()};w.querySelector(".wf-pausebtn").onclick=e=>{if(!running)return;paused=!paused;clear();e.target.textContent=paused?"Hervat":"Pauze";if(!paused&&w.querySelector(".wf-mode").value==="auto")next()};w.querySelector(".wf-stop").onclick=()=>{clear();running=false;i=0;w.querySelector(".wf-stage").textContent="Klaar om te flitsen";w.querySelector(".wf-status").textContent="Gestopt.";w.querySelector(".wf-progress i").style.width="0%"}}
 if(type==="flashcards"){
   let cards=[],order=[],index=0,correct=0,currentSide="term",answered=false,missed=new Set(),roundSides=[];
   const settings=w.querySelector(".flashcard-settings"),study=w.querySelector(".fc-study"),tbody=w.querySelector(".fc-table tbody"),status=w.querySelector(".fc-import-status"),word=w.querySelector(".fc-word"),answer=w.querySelector(".fc-answer"),feedback=w.querySelector(".fc-feedback"),solution=w.querySelector(".fc-solution"),counter=w.querySelector(".fc-counter"),progress=w.querySelector(".fc-progress i");
   const renderTable=()=>{tbody.innerHTML=cards.map((c,i)=>`<tr data-i="${i}"><td><input class="fc-term" value="${c.term.replace(/"/g,"&quot;")}"></td><td><input class="fc-def" value="${c.def.replace(/"/g,"&quot;")}"></td><td><button class="fc-remove" type="button">×</button></td></tr>`).join("");tbody.querySelectorAll("tr").forEach(row=>{let i=+row.dataset.i;row.querySelector(".fc-term").oninput=e=>cards[i].term=e.target.value;row.querySelector(".fc-def").oninput=e=>cards[i].def=e.target.value;row.querySelector(".fc-remove").onclick=()=>{cards.splice(i,1);renderTable()}});status.textContent=cards.length?`${cards.length} geldige kaarten · controleer de lijst voor je start.`:"Voeg minstens twee kaarten toe."};
   const loadRows=rows=>{let seen=new Set(),clean=[];rows.forEach(([term,def])=>{term=String(term||"").trim();def=String(def||"").trim();let key=term.toLocaleLowerCase("nl-BE");if(term&&def&&!seen.has(key)){seen.add(key);clean.push({term,def})}});cards=clean;renderTable();status.textContent=cards.length>=2?`✓ ${cards.length} kaarten gecontroleerd en klaar.`:"Er zijn minder dan twee geldige woord-betekenisparen gevonden."};
   w.querySelectorAll(".fc-tab").forEach(btn=>btn.onclick=()=>{w.querySelectorAll(".fc-tab").forEach(x=>x.classList.toggle("active",x===btn));w.querySelector(".fc-paste-panel").hidden=btn.dataset.tab!=="paste";w.querySelector(".fc-excel-panel").hidden=btn.dataset.tab!=="excel"});
   w.querySelector(".fc-parse").onclick=()=>{let text=w.querySelector(".fc-paste").value,rows=text.split(/\r?\n/).map(line=>{let sep=line.includes("\t")?"\t":line.includes(";")?";":"=";let p=line.split(sep);return [p.shift()||"",p.join(sep)||""]});loadRows(rows)};
   w.querySelector(".fc-file").onchange=async e=>{let f=e.target.files[0];if(!f)return;status.textContent="Bestand controleren…";try{let rows=/\.xlsx$/i.test(f.name)?await kbsReadXlsxTwoColumns(f):kbsReadDelimited(await f.text());loadRows(rows)}catch(err){status.textContent="Kon het bestand niet lezen: "+err.message}};
   w.querySelector(".fc-add").onclick=()=>{cards.push({term:"Nieuw woord",def:"Betekenis"});renderTable()};
   const paint=()=>{if(!order.length)return;let c=cards[order[index]],dir=w.querySelector(".fc-direction")?.value||"term";currentSide=roundSides[index]||(dir==="mix"?(Math.random()<.5?"term":"def"):dir);roundSides[index]=currentSide;answered=false;word.textContent=currentSide==="term"?c.term:c.def;answer.value="";answer.disabled=false;feedback.textContent="";feedback.className="fc-feedback";solution.hidden=true;solution.textContent=currentSide==="term"?c.def:c.term;counter.textContent=`Kaart ${index+1} van ${order.length} · ${correct} juist · ${missed.size} te herhalen`;progress.style.width=((index)/order.length*100)+"%";setTimeout(()=>answer.focus(),0)};
   const finish=()=>{answer.disabled=true;word.textContent="Ronde klaar";solution.hidden=false;solution.textContent=`${correct} van ${order.length} meteen juist.`;feedback.textContent=missed.size?`${missed.size} kaart(en) kun je nog eens oefenen.`:"✓ Alles beheerst in deze ronde.";feedback.className="fc-feedback correct";counter.textContent=`Klaar · ${correct}/${order.length}`;progress.style.width="100%"};
   const advance=()=>{index++;if(index>=order.length)finish();else paint()};
   const start=()=>{cards=cards.map(c=>({term:String(c.term||"").trim(),def:String(c.def||"").trim()})).filter(c=>c.term&&c.def);renderTable();if(cards.length<2){status.textContent="Voeg minstens twee volledige kaarten toe.";return}order=cards.map((_,i)=>i);for(let i=order.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}index=0;correct=0;answered=false;missed=new Set();roundSides=[];settings.hidden=true;study.hidden=false;w.classList.add("exercise-view");paint()};
   w.querySelector(".fc-start").onclick=start;w.querySelector(".fc-check").onclick=()=>{if(!order.length||index>=order.length||answered)return;let c=cards[order[index]],expected=currentSide==="term"?c.def:c.term,mode=w.querySelector(".fc-checkmode")?.value||"exact",ok=kbsAnswerMatch(answer.value,expected,mode);if(ok){answered=true;correct++;feedback.textContent="✓ Juist";feedback.className="fc-feedback correct";solution.hidden=true;answer.disabled=true;if(w.querySelector(".fc-auto")?.checked)setTimeout(advance,550);else feedback.textContent="✓ Juist — klik op Volgende."}else{missed.add(order[index]);feedback.textContent="Nog niet juist. Probeer opnieuw of toon het antwoord.";feedback.className="fc-feedback wrong"}};
   answer.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();w.querySelector(".fc-check").click()}};
   w.querySelector(".fc-show").onclick=()=>{if(!order.length||index>=order.length)return;missed.add(order[index]);solution.hidden=false;feedback.textContent="Antwoord bekeken — deze kaart komt bij ‘te herhalen’."};
   w.querySelector(".fc-next").onclick=()=>{if(order.length&&index<order.length)advance()};w.querySelector(".fc-shuffle").onclick=()=>{for(let i=order.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}index=0;roundSides=[];paint()};w.querySelector(".fc-edit").onclick=()=>{study.hidden=true;settings.hidden=false;w.classList.remove("exercise-view")};renderTable();
 }

 if(type==="helpqueue"){let i=w.querySelector(".v20-input"),l=w.querySelector(".v20-list"),add=()=>{let n=i.value.trim();if(!n)return;let x=document.createElement("li");x.innerHTML=`<span>${n}</span><button type="button">Geholpen ✓</button>`;x.querySelector("button").onclick=()=>x.remove();l.appendChild(x);i.value=""};w.querySelector(".v20-add").onclick=add;i.onkeydown=e=>{if(e.key==="Enter")add()}}
 if(type==="classrules"){const edit=w.querySelector(".classrule-edit-list"),view=w.querySelector(".classrules-list"),visuals=[...WORK_SYMBOLS.map(x=>[x.src,x.label]),["assets/icons/icon-hand.png","Hand opsteken"],["assets/icons/icon-check.png","Algemeen"]];let rules=[{text:"We luisteren naar elkaar.",icon:visuals[5][0]},{text:"We steken onze hand op.",icon:visuals[8][0]},{text:"We werken rustig.",icon:visuals[0][0]},{text:"We helpen elkaar.",icon:visuals[2][0]}];const rv=()=>view.innerHTML=rules.map(r=>`<div class="classrule-card"><img src="${r.icon}" alt=""><strong>${r.text}</strong></div>`).join("");const render=()=>{edit.innerHTML=rules.map((r,i)=>`<div class="classrule-edit-row"><select data-i="${i}" class="classrule-icon">${visuals.map(v=>`<option value="${v[0]}" ${v[0]===r.icon?"selected":""}>${v[1]}</option>`).join("")}</select><input data-i="${i}" class="classrule-text" value="${r.text.replace(/"/g,"&quot;")}"><button type="button" class="classrule-remove" data-i="${i}">×</button></div>`).join("");rv();edit.querySelectorAll(".classrule-text").forEach(x=>x.oninput=()=>{rules[+x.dataset.i].text=x.value;rv();scheduleSave()});edit.querySelectorAll(".classrule-icon").forEach(x=>x.onchange=()=>{rules[+x.dataset.i].icon=x.value;rv();scheduleSave()});edit.querySelectorAll(".classrule-remove").forEach(x=>x.onclick=()=>{rules.splice(+x.dataset.i,1);render();scheduleSave()})};w.querySelector(".classrule-add").onclick=()=>{if(rules.length>=8)return notify("Maximaal 8 klasafspraken");rules.push({text:"Nieuwe afspraak",icon:visuals[9][0]});render()};render()}
 if(type==="daygoal"){let s=w.querySelector(".v20-source"),v=w.querySelector(".v20-big");s.oninput=()=>v.textContent=s.value}

 if(type==="buzzer"){let a=w.querySelector(".v20-team1"),b=w.querySelector(".v20-team2"),ba=w.querySelector(".v20-b1"),bb=w.querySelector(".v20-b2"),win=w.querySelector(".v20-winner"),locked=false,p=()=>{ba.textContent=a.value;bb.textContent=b.value},reset=()=>{locked=false;win.textContent="";ba.classList.remove("winner");bb.classList.remove("winner")};a.oninput=p;b.oninput=p;p();ba.onclick=()=>{if(!locked){locked=true;win.textContent=a.value+" was eerst!";ba.classList.add("winner")}};bb.onclick=()=>{if(!locked){locked=true;win.textContent=b.value+" was eerst!";bb.classList.add("winner")}};w.querySelector(".v20-reset").onclick=reset;w.querySelector(".v20-reset2").onclick=reset}
 if(type==="randomletter"){w.querySelector(".v20-randomletter").onclick=()=>w.querySelector(".v20-letter").textContent="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)]}
 if(type==="covercard"||type==="screenveil"){w.querySelector(".v20-cover").onclick=e=>e.currentTarget.classList.toggle("open")}


 if(type==="seating"){let floor=w.querySelector(".seat-floor"),names=w.querySelector(".seat-names"),counter=0;const drag=(el)=>{let sx,sy,sl,st,m=false;el.onpointerdown=e=>{if(e.target.closest("button"))return;m=true;sx=e.clientX;sy=e.clientY;sl=parseFloat(el.style.left)||el.offsetLeft;st=parseFloat(el.style.top)||el.offsetTop;el.setPointerCapture?.(e.pointerId);e.stopPropagation()};el.onpointermove=e=>{if(!m)return;el.style.left=Math.max(0,Math.min(floor.clientWidth-el.offsetWidth,sl+e.clientX-sx))+"px";el.style.top=Math.max(0,Math.min(floor.clientHeight-el.offsetHeight,st+e.clientY-sy))+"px"};el.onpointerup=()=>{m=false;scheduleSave()}};const add=(kind,label="")=>{let el=document.createElement("div");el.className="seat-object "+kind;el.style.left=(20+(counter*37)%Math.max(80,floor.clientWidth-150))+"px";el.style.top=(30+(counter*43)%Math.max(80,floor.clientHeight-100))+"px";el.innerHTML=`<span>${label|| (kind==="board"?"BORD":"TAFEL")}</span><button title="Verwijder">×</button>`;el.querySelector("button").onclick=e=>{e.stopPropagation();el.remove();scheduleSave()};floor.appendChild(el);drag(el);counter++;return el};w.querySelectorAll(".seat-add-desk").forEach(b=>b.onclick=()=>add(b.dataset.shape==="square"?"desk square":"desk"));w.querySelector(".seat-add-board").onclick=()=>add("board");w.querySelector(".seat-fill").onclick=()=>{floor.querySelectorAll(".student").forEach(x=>x.remove());names.value.split(/\n|,/).map(x=>x.trim()).filter(Boolean).forEach(n=>add("student",n))};w.querySelector(".seat-shuffle").onclick=()=>{let studs=[...floor.querySelectorAll(".student")];studs.sort(()=>Math.random()-.5).forEach((s,i)=>{s.style.left=(20+(i%5)*125)+"px";s.style.top=(80+Math.floor(i/5)*75)+"px"})};w.querySelector(".seat-clear").onclick=()=>{floor.querySelectorAll(".seat-object").forEach(x=>x.remove())};[...floor.querySelectorAll(".seat-object")].forEach(drag)}
 if(type==="turntracker"){let names=[],used=[],cur=w.querySelector(".turn-current"),hist=w.querySelector(".turn-history");w.querySelector(".turn-load").onclick=()=>{names=w.querySelector(".turn-names").value.split(",").map(x=>x.trim()).filter(Boolean);used=[];cur.textContent=`${names.length} leerlingen geladen`;hist.textContent=""};w.querySelector(".turn-next").onclick=()=>{let left=names.filter(n=>!used.includes(n));if(!left.length){used=[];left=[...names]}if(!left.length)return;let n=left[Math.floor(Math.random()*left.length)];used.push(n);cur.textContent=n;hist.textContent="Al geweest: "+used.join(", ")}}

 if(type==="numberwall"){let view=w.querySelector(".numberwall-view"),selected=null;const build=()=>{let rows=Math.max(2,Math.min(6,+w.querySelector(".nw-rows").value||4)),base=Array.from({length:rows},()=>1+Math.floor(Math.random()*9)),levels=[base];while(levels.at(-1).length>1){let p=levels.at(-1),n=p.slice(0,-1).map((x,i)=>x+p[i+1]);levels.push(n)}view.innerHTML=[...levels].reverse().map((r,ri)=>`<div>${r.map((n,i)=>{let blank=(ri+i)%3===0;return `<button class="${blank?"nw-blank":""}" data-v="${n}" data-entry="">${blank?"?":n}</button>`}).join("")}</div>`).join("");view.querySelectorAll(".nw-blank").forEach(b=>b.onclick=()=>{view.querySelectorAll("button").forEach(x=>x.classList.remove("selected"));selected=b;b.classList.add("selected")});w.querySelector(".nw-feedback").textContent=""};w.querySelector(".nw-new").onclick=build;w.querySelectorAll(".nw-keypad button").forEach(k=>k.onclick=()=>{if(!selected)return;let cur=selected.dataset.entry||"";cur=k.dataset.n==="back"?cur.slice(0,-1):(cur+k.dataset.n).slice(0,3);selected.dataset.entry=cur;selected.textContent=cur||"?"});w.querySelector(".nw-check").onclick=()=>{let blanks=[...view.querySelectorAll(".nw-blank")],ok=blanks.every(b=>+b.dataset.entry===+b.dataset.v);blanks.forEach(b=>b.classList.toggle("correct",+b.dataset.entry===+b.dataset.v));w.querySelector(".nw-feedback").textContent=ok?"✓ Alles juist!":"Nog niet alles klopt."};w.querySelector(".nw-solution").onclick=()=>view.querySelectorAll("button").forEach(b=>{b.textContent=b.dataset.v;b.dataset.entry=b.dataset.v});build()}
 if(type==="emptynumberline"){let line=w.querySelector(".enl-line");const p=()=>{let a=+w.querySelector(".enl-start").value,b=+w.querySelector(".enl-end").value,vals=w.querySelector(".enl-values").value.split(",").map(Number).filter(Number.isFinite),span=b-a||1;line.innerHTML=`<i class="axis"></i><span style="left:0%">${a}</span><span style="left:100%">${b}</span>`+vals.map(n=>`<b style="left:${Math.max(0,Math.min(100,(n-a)/span*100))}%">${n}</b>`).join("")};w.querySelector(".enl-build").onclick=p;p()}
 if(type==="ratio"){let v=w.querySelector(".ratio-table");w.querySelector(".ratio-build").onclick=()=>{let a=+w.querySelector(".ratio-a").value||1,b=+w.querySelector(".ratio-b").value||1;v.innerHTML=`<table><tr>${[1,2,3,4,5].map(k=>`<td>${a*k}</td>`).join("")}</tr><tr>${[1,2,3,4,5].map(k=>`<td>${b*k}</td>`).join("")}</tr></table>`};w.querySelector(".ratio-build").click()}
 if(type==="rounding"){let target=0,to=10,correct=0,selected=null,v=w.querySelector(".round-numberline"),choices=w.querySelector(".round-choices"),fb=w.querySelector(".round-feedback");const make=()=>{to=+w.querySelector(".round-to").value||10;let max=Math.max(to*2,+w.querySelector(".round-max").value||1000);target=Math.max(1,Math.floor(Math.random()*(max-1)));correct=Math.round(target/to)*to;let lo=Math.floor(target/to)*to,hi=lo+to;w.querySelector(".round-question").innerHTML=`Rond <strong>${target}</strong> af op ${to===10?"tientallen":to===100?"honderdtallen":"duizendtallen"}.`;v.innerHTML=`<span>${lo}</span><i><b style="left:${(target-lo)/to*100}%"></b></i><span>${hi}</span>`;let opts=[lo,hi,correct-to,correct+to].filter((x,i,a)=>x>=0&&a.indexOf(x)===i).slice(0,4).sort(()=>Math.random()-.5);choices.innerHTML=opts.map(n=>`<button type="button" data-n="${n}">${n}</button>`).join("");selected=null;fb.textContent="";choices.querySelectorAll("button").forEach(btn=>btn.onclick=()=>{choices.querySelectorAll("button").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected");selected=+btn.dataset.n})};const check=()=>{fb.textContent=selected===null?"Kies eerst een antwoord.":selected===correct?"✓ Juist!":`Nog niet. Kijk naar het dichtstbijzijnde veelvoud van ${to}.`;fb.className="round-feedback "+(selected===correct?"correct":"wrong");if(selected===correct)setTimeout(make,700)};w.querySelector(".round-task").onclick=make;w.querySelector(".round-next").onclick=make;w.querySelector(".round-check").onclick=check;make()}
 if(type==="patterns"){
   const makePattern=()=>{const answer=w.querySelector(".pattern-answer"),display=w.querySelector(".pattern-seq,.pattern-display"),check=w.querySelector(".pattern-check");if(!answer||!display)return;const steps=[2,3,4,5,6,7,8,9,10,12,15,20,25,50],step=steps[Math.floor(Math.random()*steps.length)],down=Math.random()<.28,start=down?(step*(5+Math.floor(Math.random()*8))+Math.floor(Math.random()*10)):(Math.floor(Math.random()*45)+1),missing=2+Math.floor(Math.random()*3),vals=Array.from({length:6},(_,i)=>start+(down?-1:1)*step*i),target=vals[missing];display.dataset.answer=String(target);display.textContent=vals.map((v,i)=>i===missing?"?":v).join("  –  ");answer.value="";if(check)check.textContent="Controleer";};
let solution=null,missing=0,v=w.querySelector(".pattern-view"),fb=w.querySelector(".pattern-feedback");const make=()=>{let a=+w.querySelector(".pat-start").value||0,d=+w.querySelector(".pat-step").value||1,n=Math.max(5,Math.min(12,+w.querySelector(".pat-length").value||8));missing=1+Math.floor(Math.random()*(n-2));solution=a+missing*d;v.innerHTML=Array.from({length:n},(_,i)=>i===missing?`<input class="pattern-answer" inputmode="numeric" aria-label="Ontbrekend getal">`:`<span>${a+i*d}</span>`).join("");fb.textContent="";v.querySelector(".pattern-answer")?.focus()};const check=()=>{let ans=+v.querySelector(".pattern-answer")?.value;fb.textContent=ans===solution?"✓ Juist!":"Nog niet juist.";fb.className="pattern-feedback "+(ans===solution?"correct":"wrong");if(ans===solution)setTimeout(make,650)};w.querySelector(".pat-new").onclick=make;w.querySelector(".pat-next").onclick=make;w.querySelector(".pat-check").onclick=check;make()}
 if(type==="coordinates"){let g=w.querySelector(".coord-grid"),targets=[],placed=[];g.innerHTML=Array.from({length:121},(_,i)=>`<button type="button" data-i="${i}"></button>`).join("");const key=p=>`${p.x},${p.y}`,paint=()=>{g.querySelectorAll("button").forEach(q=>{q.classList.remove("point");q.textContent=""});placed.forEach((p,i)=>{let cell=g.children[(10-p.y)*11+p.x];if(cell){cell.classList.add("point");cell.textContent=i+1}});w.querySelector(".coord-entered").textContent=placed.length?"Ingegeven: "+placed.map(p=>`${"ABCDEFGHIJK"[p.x]}${p.y}`).join(", "):"Klik punten in het rooster."};const make=()=>{let n=Math.max(1,Math.min(8,+w.querySelector(".coord-count").value||3));targets=[];while(targets.length<n){let p={x:Math.floor(Math.random()*11),y:Math.floor(Math.random()*11)};if(!targets.some(t=>key(t)===key(p)))targets.push(p)}placed=[];w.querySelector(".coord-question").innerHTML=`Plaats: <strong>${targets.map(p=>`${"ABCDEFGHIJK"[p.x]}${p.y}`).join(" · ")}</strong>`;w.querySelector(".coord-feedback").textContent="";paint()};g.querySelectorAll("button").forEach((cell,i)=>cell.onclick=()=>{let p={x:i%11,y:10-Math.floor(i/11)},k=key(p),idx=placed.findIndex(x=>key(x)===k);if(idx>=0)placed.splice(idx,1);else placed.push(p);paint()});w.querySelector(".coord-clear").onclick=()=>{placed=[];paint()};w.querySelector(".coord-check").onclick=()=>{let ok=placed.length===targets.length&&targets.every(t=>placed.some(p=>key(p)===key(t)));w.querySelector(".coord-feedback").textContent=ok?"✓ Alle coördinaten zijn juist.":"Nog niet juist. Controleer aantal en plaats.";if(ok)setTimeout(make,750)};w.querySelector(".coord-task").onclick=make;w.querySelector(".coord-next").onclick=make;make()}

 if(type==="buildnumber"){let table=w.querySelector(".place-table"),target=null,labsAll=["M","HD","TD","D","H","T","E"];const buildTable=()=>{let n=+w.querySelector(".build-cols").value,labs=labsAll.slice(7-n);table.innerHTML=labs.map(l=>`<div class="place-col" data-place="${l}"><b>${l}</b><div class="digit-drop" data-digit=""></div></div>`).join("");table.querySelectorAll(".digit-drop").forEach(d=>{d.ondragover=e=>e.preventDefault();d.ondrop=e=>{e.preventDefault();d.dataset.digit=e.dataTransfer.getData("text/plain");d.textContent=d.dataset.digit}})};w.querySelectorAll(".digit-tray button").forEach(b=>b.ondragstart=e=>e.dataTransfer.setData("text/plain",b.dataset.digit));w.querySelector(".build-cols").onchange=buildTable;w.querySelector(".build-task").onclick=()=>{buildTable();let n=+w.querySelector(".build-cols").value,min=n===1?0:10**(n-1),max=10**n-1;target=Math.floor(min+Math.random()*(max-min+1));w.querySelector(".build-target").textContent=String(target);w.querySelector(".build-question").textContent="Sleep de cijfers naar de juiste plaats in de tabel.";w.querySelector(".build-feedback").textContent=""};w.querySelector(".build-reset").onclick=()=>table.querySelectorAll(".digit-drop").forEach(d=>{d.textContent="";d.dataset.digit=""});w.querySelector(".build-check").onclick=()=>{let s=[...table.querySelectorAll(".digit-drop")].map(d=>d.dataset.digit||"").join("");w.querySelector(".build-feedback").textContent=target!==null&&Number(s)===target?"✓ Juist!":"Nog niet juist."};buildTable();w.querySelector(".build-task").click()}
 if(type==="articlemarker"){let src=w.querySelector(".marker-source"),board=w.querySelector(".marker-board"),color="#fee020";src.oninput=()=>board.textContent=src.value;src.oninput();w.querySelectorAll(".marker-palette button[data-c]").forEach(b=>b.onclick=()=>color=b.dataset.c);w.querySelector(".marker-clear").onclick=()=>board.querySelectorAll("mark").forEach(m=>m.replaceWith(...m.childNodes));board.onmouseup=()=>{let s=getSelection();if(!s.rangeCount||s.isCollapsed||!board.contains(s.anchorNode))return;let m=document.createElement("mark");m.style.background=color;try{s.getRangeAt(0).surroundContents(m);s.removeAllRanges()}catch{}}}
 if(type==="sentencebuilder"){let source=[];const area=w.querySelector(".sentence-exercises"),fb=w.querySelector(".sentence-feedback");const make=()=>{source=w.querySelector(".sentence-input").value.split(/\n+/).map(x=>x.trim()).filter(Boolean);area.innerHTML=source.map((sentence,si)=>{let words=sentence.split(/\s+/).map((x,wi)=>({x,wi})).sort(()=>Math.random()-.5);return `<div class="sentence-exercise" data-si="${si}"><div class="sentence-bank">${words.map(o=>`<button type="button" data-wi="${o.wi}">${o.x}</button>`).join("")}</div><div class="sentence-result" data-order=""></div><button class="pill sentence-undo" type="button">↶ laatste</button></div>`}).join("");area.querySelectorAll(".sentence-exercise").forEach(ex=>{let result=ex.querySelector(".sentence-result"),history=[];ex.querySelectorAll(".sentence-bank button").forEach(btn=>btn.onclick=()=>{history.push(btn);btn.disabled=true;result.textContent=history.map(b=>b.textContent).join(" ")});ex.querySelector(".sentence-undo").onclick=()=>{let b=history.pop();if(b)b.disabled=false;result.textContent=history.map(x=>x.textContent).join(" ")}});fb.textContent=""};w.querySelector(".sentence-check").onclick=()=>{let rows=[...area.querySelectorAll(".sentence-exercise")],ok=rows.length&&rows.every((r,i)=>r.querySelector(".sentence-result").textContent.trim()===source[i]);fb.textContent=ok?"✓ Alle zinnen staan juist.":"Nog niet alle zinnen staan in de juiste volgorde.";fb.className="sentence-feedback "+(ok?"correct":"wrong")};w.querySelector(".sentence-mix").onclick=make;w.querySelector(".sentence-reset").onclick=make;make()}

 if(type==="syllables"){let solution="";const vowel=/[aeiouyáéíóúàèìòùäëïöü]/i,onsets=new Set(["bl","br","ch","cl","cr","dr","dw","fl","fr","gl","gr","kl","kr","kw","pl","pr","sch","schr","sj","sk","sl","sm","sn","sp","spr","st","str","sw","th","tr","tw","vl","vr","wr","zw"]);const known={"bibliotheek":"bi·bli·o·theek","kinderen":"kin·de·ren","appel":"ap·pel","bakker":"bak·ker","tafel":"ta·fel","meisje":"mei·sje","lettergrepen":"let·ter·gre·pen","computer":"com·pu·ter","school":"school","oefening":"oe·fe·ning","rekenen":"re·ke·nen","woorden":"woor·den","familie":"fa·mi·lie"};const splitWord=word=>{let s=word.toLowerCase().trim();if(known[s])return known[s];let nuclei=[],i=0;while(i<s.length){if(vowel.test(s[i])){let st=i;i++;while(i<s.length&&vowel.test(s[i]))i++;nuclei.push([st,i])}else i++}if(nuclei.length<2)return s;let cuts=[];for(let n=0;n<nuclei.length-1;n++){let end=nuclei[n][1],next=nuclei[n+1][0],cons=s.slice(end,next),cut;if(cons.length===0)cut=end;else if(cons.length===1)cut=end;else{let keep=1;for(let k=1;k<=Math.min(4,cons.length);k++){let tail=cons.slice(cons.length-k);if(onsets.has(tail))keep=k}cut=next-keep;if(/^([bcdfghjklmnpqrstvwxyz])\1/i.test(cons))cut=end+1}cuts.push(cut)}let out="",last=0;cuts.forEach(c=>{out+=s.slice(last,c)+"·";last=c});return out+s.slice(last)};const make=()=>{let s=w.querySelector(".syllable-input").value.trim(),ov=w.querySelector(".syllable-override").value.trim();solution=ov?ov.replace(/[- ]/g,"·"):splitWord(s);w.querySelector(".syllable-word").textContent=s;w.querySelector(".syllable-answer").value="";w.querySelector(".syllable-feedback").textContent=""};w.querySelector(".syllable-go").onclick=make;w.querySelector(".syllable-check").onclick=()=>{let a=w.querySelector(".syllable-answer").value.toLowerCase().replace(/[·–—\s]/g,"-"),b=solution.toLowerCase().replace(/[·–—\s]/g,"-");w.querySelector(".syllable-feedback").textContent=a===b?"✓ Juist!":"Nog niet juist."};w.querySelector(".syllable-solution").onclick=()=>w.querySelector(".syllable-feedback").textContent=solution;make()}

 if(type==="dictation"){let a=[],i=0,timer=null,v=w.querySelector(".dictation-word"),prog=w.querySelector(".dictation-progress");const show=()=>{if(!a.length){v.textContent="Voeg woorden toe";prog.textContent="";return}v.classList.remove("hidden-word");v.textContent=a[i];prog.textContent=`${i+1} / ${a.length}`};const next=()=>{if(!a.length)return;i=(i+1)%a.length;show()};const auto=()=>{clearInterval(timer);if(w.querySelector(".dictation-auto").checked&&a.length)timer=setInterval(next,Math.max(1,+w.querySelector(".dictation-delay").value||4)*1000)};w.querySelector(".dictation-load").onclick=()=>{a=w.querySelector(".dictation-list").value.split(/\n/).map(x=>x.trim()).filter(Boolean);i=0;show();auto()};w.querySelector(".dictation-next").onclick=next;w.querySelector(".dictation-prev").onclick=()=>{if(a.length){i=(i-1+a.length)%a.length;show()}};w.querySelector(".dictation-hide").onclick=()=>v.classList.toggle("hidden-word");w.querySelector(".dictation-stop").onclick=()=>{clearInterval(timer);w.querySelector(".dictation-auto").checked=false};w.querySelector(".dictation-auto").onchange=auto;w.querySelector(".dictation-load").click()}
 if(type==="timeline"){let v=w.querySelector(".timeline-view");w.querySelector(".timeline-build").onclick=()=>{let a=w.querySelector(".timeline-input").value.split(/\n/).map(x=>x.split(/[;|]/).map(y=>y.trim())).filter(x=>x[0]);v.innerHTML=a.map(x=>`<div><b>${x[0]}</b><span>${x[1]||""}</span></div>`).join("")}}

 if(type==="spotlight"){w.classList.add("spotlight-widget");let tool=w.querySelector(".spot-tool"),overlay=w.querySelector(".spot-overlay"),target=w.querySelector(".spot-target"),r=w.querySelector(".spot-size"),x=50,y=50,drag=false;const paint=()=>{let size=+r.value;overlay.style.setProperty("--sx",x+"%");overlay.style.setProperty("--sy",y+"%");overlay.style.setProperty("--sr",size+"px");target.style.width=target.style.height=size+"px";target.style.left=x+"%";target.style.top=y+"%"};r.oninput=paint;tool.onpointerdown=e=>{if(e.target.closest(".spot-controls"))return;drag=true;let b=tool.getBoundingClientRect();x=(e.clientX-b.left)/b.width*100;y=(e.clientY-b.top)/b.height*100;paint()};tool.onpointermove=e=>{if(!drag)return;let b=tool.getBoundingClientRect();x=Math.max(0,Math.min(100,(e.clientX-b.left)/b.width*100));y=Math.max(0,Math.min(100,(e.clientY-b.top)/b.height*100));paint()};tool.onpointerup=tool.onpointercancel=()=>drag=false;w.querySelector(".spot-close").onclick=e=>{e.stopPropagation();removeWidget(w)};paint()}

 if(type==="teamquiz"){let qs=[],i=0,score={a:0,b:0},q=w.querySelector(".tq-question"),ansbox=w.querySelector(".tq-answer-box"),buttons=w.querySelectorAll(".tq-score>button");const rows=()=>[...w.querySelectorAll(".tq-row")];const bind=()=>rows().forEach(r=>r.querySelector(".tq-del").onclick=()=>{if(rows().length>1)r.remove()});w.querySelector(".tq-add").onclick=()=>{w.querySelector(".tq-rows").insertAdjacentHTML("beforeend",`<div class="tq-row"><input class="tq-q" placeholder="Vraag"><input class="tq-a-input" placeholder="Antwoord"><button class="tq-del" type="button">×</button></div>`);bind()};const paint=()=>{if(!qs.length)return;q.textContent=qs[i].q;ansbox.textContent="";buttons[0].innerHTML=`${w.querySelector(".tq-a").value}<br><strong>${score.a}</strong>`;buttons[1].innerHTML=`${w.querySelector(".tq-b").value}<br><strong>${score.b}</strong>`};w.querySelector(".tq-start").onclick=()=>{qs=rows().map(r=>({q:r.querySelector(".tq-q").value.trim(),a:r.querySelector(".tq-a-input").value.trim()})).filter(x=>x.q&&x.a);i=0;score={a:0,b:0};paint()};buttons.forEach(b=>b.onclick=()=>{score[b.dataset.team]++;paint()});w.querySelector(".tq-answer").onclick=()=>{if(qs.length)ansbox.textContent=qs[i].a};w.querySelector(".tq-next").onclick=()=>{if(qs.length){i=(i+1)%qs.length;paint()}};bind()}
 if(type==="truefalse"){let qs=[],i=0,q=w.querySelector(".tf-question"),fb=w.querySelector(".tf-feedback"),rows=w.querySelector(".tf-rows");const bind=()=>rows.querySelectorAll(".tf-del").forEach(b=>b.onclick=()=>{if(rows.children.length>1)b.closest(".tf-row").remove()});w.querySelector(".tf-add").onclick=()=>{rows.insertAdjacentHTML("beforeend",`<div class="tf-row"><input class="tf-statement" placeholder="Stelling"><select class="tf-solution"><option value="true">Waar</option><option value="false">Niet waar</option></select><button class="tf-del" type="button">×</button></div>`);bind()};w.querySelector(".tf-load").onclick=()=>{qs=[...rows.querySelectorAll(".tf-row")].map(r=>({q:r.querySelector(".tf-statement").value.trim(),a:r.querySelector(".tf-solution").value==="true"})).filter(x=>x.q);i=0;q.textContent=qs[0]?.q||"Geen stellingen";fb.textContent=""};const choose=x=>{if(!qs.length)return;let ok=qs[i].a===x;fb.textContent=ok?"✓ Juist":"✗ Niet juist";if(ok)setTimeout(()=>{i=(i+1)%qs.length;q.textContent=qs[i].q;fb.textContent=""},550)};w.querySelector(".tf-yes").onclick=()=>choose(true);w.querySelector(".tf-no").onclick=()=>choose(false);bind()}
 if(type==="bingo"){
   const boards=w.querySelector(".bingo-boards"),call=w.querySelector(".bingo-call"),hist=w.querySelector(".bingo-history"),fb=w.querySelector(".bingo-feedback"),p1=w.querySelector(".bingo-p1"),p2=w.querySelector(".bingo-p2");
   let duel=false,called=[],cards=[],max=75;
   const letters=["B","I","N","G","O"],ranges=[[1,15],[16,30],[31,45],[46,60],[61,75]];
   const sample=(a,b,n)=>{let x=Array.from({length:b-a+1},(_,i)=>a+i);for(let i=x.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x.slice(0,n)};
   const makeCard=()=>{let cols=ranges.map(r=>sample(r[0],r[1],5)),vals=[];for(let row=0;row<5;row++)for(let col=0;col<5;col++)vals.push(row===2&&col===2?"FREE":cols[col][row]);return vals};
   const win=card=>{const m=card.map((v,i)=>v==="FREE"||called.includes(v));for(let r=0;r<5;r++)if([0,1,2,3,4].every(c=>m[r*5+c]))return true;for(let c=0;c<5;c++)if([0,1,2,3,4].every(r=>m[r*5+c]))return true;if([0,6,12,18,24].every(i=>m[i])||[4,8,12,16,20].every(i=>m[i]))return true;return false};
   const paint=()=>{boards.innerHTML=cards.map((card,ci)=>`<section class="bingo-card" data-card="${ci}"><h3>${ci===0?(p1.value||"Speler 1"):(p2.value||"Speler 2")}</h3><div class="bingo-head">${letters.map(x=>`<b>${x}</b>`).join("")}</div><div class="bingo-board">${card.map((v,i)=>`<button type="button" class="${v==="FREE"?"free marked":called.includes(v)?"callable":""}" data-v="${v}">${v==="FREE"?"VRIJ":v}</button>`).join("")}</div></section>`).join("");boards.querySelectorAll(".bingo-board button").forEach(b=>b.onclick=()=>{if(b.dataset.v==="FREE"){b.classList.add("marked");return}let v=+b.dataset.v;if(!called.includes(v)){fb.textContent="Dit getal is nog niet getrokken.";return}b.classList.toggle("marked");fb.textContent="";let card=cards[+b.closest(".bingo-card").dataset.card];if(win(card)){let name=+b.closest(".bingo-card").dataset.card===0?(p1.value||"Speler 1"):(p2.value||"Speler 2");fb.textContent=`BINGO! ${name} heeft een volledige rij.`}})};
   const fresh=()=>{max=Math.max(25,Math.min(200,+w.querySelector(".bingo-max").value||75));called=[];cards=[makeCard(),...(duel?[makeCard()]:[])];call.textContent="Klaar om te starten";hist.textContent="";fb.textContent="";paint()};
   w.querySelector(".bingo-one").onclick=()=>{duel=false;w.querySelector(".bingo-one").classList.add("active");w.querySelector(".bingo-duel").classList.remove("active");fresh()};
   w.querySelector(".bingo-duel").onclick=()=>{duel=true;w.querySelector(".bingo-duel").classList.add("active");w.querySelector(".bingo-one").classList.remove("active");fresh()};
   w.querySelector(".bingo-new").onclick=fresh;p1.oninput=paint;p2.oninput=paint;
   w.querySelector(".bingo-draw").onclick=()=>{let left=Array.from({length:max},(_,i)=>i+1).filter(n=>!called.includes(n));if(!left.length){fb.textContent="Alle ballen zijn getrokken.";return}let n=left[Math.floor(Math.random()*left.length)];called.push(n);let col=Math.min(4,Math.floor((n-1)/15));call.textContent=`${letters[col]} ${n}`;hist.textContent=called.slice(-12).map(v=>`${letters[Math.min(4,Math.floor((v-1)/15))]} ${v}`).join(" · ");paint()};
   fresh();
 }

 if(type==="numberproperties"){const prime=n=>{if(n<2)return false;for(let i=2;i*i<=n;i++)if(n%i===0)return false;return true};const render=()=>{let n=Math.max(1,Math.min(10000,+w.querySelector(".np-n").value||1));w.querySelector(".np-number").textContent=n;w.querySelector(".np-info").textContent="Kies alle eigenschappen die passen.";w.querySelectorAll(".np-choices button").forEach(b=>b.classList.remove("correct","wrong"))};w.querySelectorAll(".np-choices button").forEach(b=>b.onclick=()=>{let n=+w.querySelector(".np-n").value,p=b.dataset.p,ok=(p==="even"&&n%2===0)||(p==="odd"&&n%2!==0)||(p==="prime"&&prime(n))||(p==="composite"&&n>1&&!prime(n));b.classList.toggle("correct",ok);b.classList.toggle("wrong",!ok);w.querySelector(".np-info").textContent=ok?"✓ Klopt.":"Dat past niet bij dit getal."});w.querySelector(".np-n").oninput=render;w.querySelector(".np-random").onclick=()=>{w.querySelector(".np-n").value=2+Math.floor(Math.random()*198);render()};render()}
 if(type==="averageRange"){const vals=()=>w.querySelector(".ar-values").value.split(/[;,\\s]+/).map(Number).filter(Number.isFinite);const paint=()=>{let a=vals();w.querySelector(".ar-chips").innerHTML=a.map(n=>`<span>${n}</span>`).join("");w.querySelector(".ar-feedback").textContent=""};const sol=()=>{let a=vals();if(!a.length)return [0,0];return [a.reduce((x,y)=>x+y,0)/a.length,Math.max(...a)-Math.min(...a)]};w.querySelector(".ar-values").oninput=paint;w.querySelector(".ar-new").onclick=()=>{w.querySelector(".ar-values").value=Array.from({length:4+Math.floor(Math.random()*3)},()=>2+Math.floor(Math.random()*19)).join("; ");paint()};w.querySelector(".ar-check").onclick=()=>{let [avg,range]=sol(),ok=Math.abs((+w.querySelector(".ar-avg").value)-avg)<.01&&+w.querySelector(".ar-range").value===range;w.querySelector(".ar-feedback").textContent=ok?"✓ Beide antwoorden zijn juist.":"Controleer je berekening nog eens."};w.querySelector(".ar-show").onclick=()=>{let a=vals(),[avg,range]=sol();w.querySelector(".ar-feedback").textContent=`Som ${a.reduce((x,y)=>x+y,0)} ÷ ${a.length} = ${avg.toFixed(2).replace(".00","")}; bereik = ${Math.max(...a)} − ${Math.min(...a)} = ${range}.`};paint()}
 if(type==="causeeffect"){let rows=[];const load=()=>{rows=w.querySelector(".ce-source").value.split(/\n/).map(x=>x.split(";").map(y=>y.trim())).filter(x=>x[0]&&x[1]);let mode=w.querySelector(".ce-mode").value,answers=rows.map(x=>mode==="effect"?x[1]:x[0]).sort(()=>Math.random()-.5);w.querySelector(".ce-cards").innerHTML=rows.map((r,i)=>{let prompt=mode==="effect"?r[0]:r[1],left=mode==="effect"?"OORZAAK":"GEVOLG",right=mode==="effect"?"GEVOLG":"OORZAAK";return `<div class="ce-row"><div class="ce-part"><small>${left}</small><span>${prompt}</span></div><b class="ce-arrow">→</b><label class="ce-choice"><small>${right}</small><select data-i="${i}"><option value="">Kies…</option>${answers.map(e=>`<option>${e}</option>`).join("")}</select></label></div>`}).join("");w.querySelector(".ce-feedback").textContent="Koppel oorzaak en gevolg."};w.querySelector(".ce-load").onclick=load;w.querySelector(".ce-new").onclick=load;w.querySelector(".ce-mode").onchange=load;w.querySelector(".ce-cards").addEventListener("change",e=>{if(!e.target.matches("select"))return;let i=+e.target.dataset.i,mode=w.querySelector(".ce-mode").value,expected=mode==="effect"?rows[i][1]:rows[i][0],ok=e.target.value===expected;e.target.classList.toggle("correct",ok);e.target.classList.toggle("wrong",!ok);w.querySelector(".ce-feedback").textContent=ok?"✓ Juist: de oorzaak leidt tot dit gevolg.":mode==="effect"?"Nog niet. Wat gebeurt er dóór deze oorzaak?":"Nog niet. Waardoor is dit gevolg ontstaan?"});load()}
 if(type==="supportdetails"){let items=[];const build=()=>{items=w.querySelector(".sd-source").value.split(/\n/).map(x=>x.trim()).filter(Boolean).map(x=>({text:x.replace(/^[+-]\s*/,""),good:/^\+/.test(x)}));w.querySelector(".sd-main-card").textContent=w.querySelector(".sd-main").value.trim()||"Voeg een hoofdgedachte toe.";w.querySelector(".sd-items").innerHTML=[...items].sort(()=>Math.random()-.5).map((x,i)=>`<button type="button" data-text="${x.text.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}">${x.text}</button>`).join("");w.querySelector(".sd-feedback").textContent="Selecteer eerst alle details die volgens jou passen.";w.querySelectorAll(".sd-items button").forEach(b=>b.onclick=()=>{b.classList.toggle("chosen");b.classList.remove("selected","wrong")})};const check=()=>{let correct=0;w.querySelectorAll(".sd-items button").forEach(b=>{let item=items.find(x=>x.text===b.dataset.text),chosen=b.classList.contains("chosen"),ok=!!item?.good;if(chosen===ok)correct++;b.classList.toggle("selected",chosen&&ok);b.classList.toggle("wrong",chosen&&!ok);b.classList.toggle("missed",!chosen&&ok)});w.querySelector(".sd-feedback").textContent=correct===items.length?"✓ Goed! Je koos alle details die de hoofdgedachte ondersteunen.":`${correct} van ${items.length} correct. Bekijk de gemarkeerde details opnieuw.`};w.querySelector(".sd-build").onclick=build;w.querySelector(".sd-check").onclick=check;w.querySelector(".sd-reset").onclick=build;build()}
 if(type==="authorspurpose"){const sync=()=>{w.querySelector(".apu-reading").textContent=w.querySelector(".apu-text").value.trim()||"Voeg een tekst toe.";w.querySelectorAll(".apu-options button").forEach(x=>x.classList.remove("correct","wrong"));w.querySelector(".apu-feedback").textContent=""};w.querySelector(".apu-text").oninput=sync;w.querySelector(".apu-key").onchange=sync;w.querySelectorAll(".apu-options button").forEach(b=>b.onclick=()=>{let ok=b.dataset.v===w.querySelector(".apu-key").value;w.querySelectorAll(".apu-options button").forEach(x=>x.classList.remove("correct","wrong"));b.classList.add(ok?"correct":"wrong");let h={inform:"Zoek uitleg of feiten.",persuade:"Zoek een oproep, mening of reden om iets te doen.",entertain:"Zoek een verhaal, humor, spanning of fantasie."};w.querySelector(".apu-feedback").textContent=ok?"✓ Juist!":"Nog niet. "+h[w.querySelector(".apu-key").value]});sync()}
 if(type==="missingnumber"){let answer=0;const make=()=>{let op=w.querySelector(".mn-op").value,max=Math.max(10,+w.querySelector(".mn-max").value||100),a,b,c,slot=Math.floor(Math.random()*3);if(op==="×"){a=2+Math.floor(Math.random()*11);b=2+Math.floor(Math.random()*11);c=a*b}else if(op==="÷"){b=2+Math.floor(Math.random()*10);c=2+Math.floor(Math.random()*10);a=b*c}else if(op==="−"){a=2+Math.floor(Math.random()*max);b=Math.floor(Math.random()*(a+1));c=a-b}else{a=Math.floor(Math.random()*(max+1));b=Math.floor(Math.random()*Math.max(1,max-a+1));c=a+b}let vals=[a,b,c];answer=vals[slot];vals[slot]="□";w.querySelector(".mn-question").textContent=`${vals[0]} ${op} ${vals[1]} = ${vals[2]}`;w.querySelector(".mn-answer").value="";w.querySelector(".mn-feedback").textContent=""};w.querySelector(".mn-new").onclick=make;w.querySelector(".mn-op").onchange=make;w.querySelector(".mn-check").onclick=()=>w.querySelector(".mn-feedback").textContent=(+w.querySelector(".mn-answer").value===answer)?"✓ Juist!":"Probeer opnieuw.";w.querySelector(".mn-show").onclick=()=>w.querySelector(".mn-feedback").textContent=`Het ontbrekende getal is ${answer}.`;make()}
 if(type==="areaperimeter"){let mode="area";const draw=()=>{let a=Math.max(1,Math.min(12,+w.querySelector(".ap-w").value||6)),b=Math.max(1,Math.min(10,+w.querySelector(".ap-h").value||4));w.querySelector(".ap-stage").style.setProperty("--cols",a);w.querySelector(".ap-stage").style.setProperty("--rows",b);w.querySelector(".ap-stage").innerHTML=Array.from({length:a*b},()=>"<i></i>").join("");w.querySelector(".ap-question").textContent=mode==="area"?`Wat is de oppervlakte van ${a} × ${b}?`:`Wat is de omtrek van ${a} × ${b}?`;w.querySelector(".ap-answer").value="";w.querySelector(".ap-feedback").textContent=""};const answer=()=>{let a=+w.querySelector(".ap-w").value,b=+w.querySelector(".ap-h").value;return mode==="area"?a*b:2*(a+b)};w.querySelector(".ap-new").onclick=()=>{w.querySelector(".ap-w").value=2+Math.floor(Math.random()*9);w.querySelector(".ap-h").value=2+Math.floor(Math.random()*7);draw()};w.querySelector(".ap-switch").onclick=()=>{mode=mode==="area"?"perimeter":"area";draw()};w.querySelector(".ap-check").onclick=()=>w.querySelector(".ap-feedback").textContent=(+w.querySelector(".ap-answer").value===answer())?"✓ Juist!":"Nog niet juist.";draw()}
 if(type==="factorsmultiples"){const render=()=>{let n=Math.max(2,Math.min(100,+w.querySelector(".fm-n").value||24)),f=[];for(let i=1;i<=n;i++)if(n%i===0)f.push(i);w.querySelector(".fm-number").textContent=n;w.querySelector(".fm-factors").innerHTML=f.map(x=>`<span>${x}</span>`).join("");w.querySelector(".fm-multiples").innerHTML=Array.from({length:8},(_,i)=>`<span>${n*(i+1)}</span>`).join("")};w.querySelector(".fm-n").oninput=render;w.querySelector(".fm-new").onclick=()=>{w.querySelector(".fm-n").value=2+Math.floor(Math.random()*49);render()};render()}
 if(type==="operationsorder"){let answer=0;const make=()=>{let level=w.querySelector(".oo-level").value,a=2+Math.floor(Math.random()*9),b=2+Math.floor(Math.random()*8),c=2+Math.floor(Math.random()*7),txt;if(level==="2"){txt=`(${a} + ${b}) × ${c}`;answer=(a+b)*c}else{txt=`${a} + ${b} × ${c}`;answer=a+b*c}w.querySelector(".oo-question").textContent=txt+" = ?";w.querySelector(".oo-answer").value="";w.querySelector(".oo-feedback").textContent=""};w.querySelector(".oo-new").onclick=make;w.querySelector(".oo-level").onchange=make;w.querySelector(".oo-check").onclick=()=>w.querySelector(".oo-feedback").textContent=(+w.querySelector(".oo-answer").value===answer)?"✓ Juist!":"Denk aan de volgorde van de bewerkingen.";w.querySelector(".oo-show").onclick=()=>w.querySelector(".oo-feedback").textContent=`Antwoord: ${answer}`;make()}
 if(type==="readingstrategy"){const build=()=>{let kind=w.querySelector(".rs-type").value,text=w.querySelector(".rs-text").value.trim();w.querySelector(".rs-reading").textContent=text||"Voeg eerst een tekst toe.";w.querySelector(".rs-help").textContent="";w.querySelector(".rs-answer").value="";if(kind==="main"){w.querySelector(".rs-question").textContent="Wat is de hoofdgedachte van deze tekst?";w.querySelector(".rs-help").textContent="Leerkrachthulp: laat leerlingen in één zin zeggen waar de hele tekst vooral over gaat."}else if(kind==="fact"){w.querySelector(".rs-question").textContent="Noem één feit uit de tekst. Formuleer daarna een mening over hetzelfde onderwerp.";w.querySelector(".rs-help").textContent="Leerkrachthulp: een feit is controleerbaar; een mening geeft een oordeel of voorkeur."}else{w.querySelector(".rs-question").textContent="Kies een woord waarvan je de betekenis uit de context kunt afleiden. Welke woorden of zinnen geven een aanwijzing?";w.querySelector(".rs-help").textContent="Leerkrachthulp: zoek aanwijzingen vóór en na het moeilijke woord."}if(!text)w.querySelector(".rs-question").textContent="Voeg eerst een tekst toe."};w.querySelector(".rs-build").onclick=build;w.querySelector(".rs-type").onchange=build;w.querySelector(".rs-text").oninput=()=>w.querySelector(".rs-reading").textContent=w.querySelector(".rs-text").value;w.querySelector(".rs-reveal").onclick=()=>w.querySelector(".rs-help").classList.toggle("show");build()}
 if(type==="sequence"){let correct=[],current=[];const paint=()=>{w.querySelector(".sq-list").innerHTML=current.map((x,i)=>`<div class="sq-item"><b>${i+1}</b><span>${x}</span><div><button type="button" data-dir="-1">↑</button><button type="button" data-dir="1">↓</button></div></div>`).join("");w.querySelectorAll(".sq-item button").forEach(btn=>btn.onclick=()=>{let row=btn.closest(".sq-item"),i=[...w.querySelectorAll(".sq-item")].indexOf(row),j=i+(+btn.dataset.dir);if(j<0||j>=current.length)return;[current[i],current[j]]=[current[j],current[i]];paint()})};const load=(mix=true)=>{correct=w.querySelector(".sq-source").value.split(/\n/).map(x=>x.trim()).filter(Boolean);current=[...correct];if(mix)for(let i=current.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[current[i],current[j]]=[current[j],current[i]]}paint();w.querySelector(".sq-feedback").textContent=""};w.querySelector(".sq-mix").onclick=()=>load(true);w.querySelector(".sq-reset").onclick=()=>load(true);w.querySelector(".sq-check").onclick=()=>w.querySelector(".sq-feedback").textContent=(current.join("\n")===correct.join("\n"))?"✓ De volgorde klopt!":"Nog niet in de juiste volgorde.";load(true)}
 if(type==="factfamilies"){const make=()=>{let mode=w.querySelector(".ff-mode").value,max=Math.max(10,+w.querySelector(".ff-max").value||100),a,b,top,vals;if(mode==="add"){a=1+Math.floor(Math.random()*Math.max(2,Math.floor(max*.55)));b=1+Math.floor(Math.random()*Math.max(2,max-a));top=a+b;vals=[`${a} + ${b} = ${top}`,`${b} + ${a} = ${top}`,`${top} − ${a} = ${b}`,`${top} − ${b} = ${a}`]}else{a=2+Math.floor(Math.random()*10);b=2+Math.floor(Math.random()*10);top=a*b;vals=[`${a} × ${b} = ${top}`,`${b} × ${a} = ${top}`,`${top} ÷ ${a} = ${b}`,`${top} ÷ ${b} = ${a}`]};w.querySelector(".ff-top").textContent=top;w.querySelector(".ff-left").textContent=a;w.querySelector(".ff-right").textContent=b;w.querySelector(".ff-equations").innerHTML=vals.map(x=>`<div>${x}</div>`).join("")};w.querySelector(".ff-new").onclick=make;make()}
 if(type==="compare"){let a=0,b=0;const make=()=>{let max=Math.max(10,+w.querySelector(".cmp-max").value||100);a=Math.floor(Math.random()*(max+1));b=Math.floor(Math.random()*(max+1));w.querySelector(".cmp-a").textContent=a;w.querySelector(".cmp-b").textContent=b;w.querySelector(".cmp-feedback").textContent=""};w.querySelectorAll(".compare-buttons button").forEach(btn=>btn.onclick=()=>{let correct=a<b?"<":a>b?">":"=";w.querySelector(".cmp-feedback").textContent=btn.dataset.op===correct?"✓ Juist!":"Probeer opnieuw."});w.querySelector(".cmp-new").onclick=make;make()}
 if(type==="elapsedtime"){let answer=45;const calc=()=>{let [sh,sm]=w.querySelector(".et-start").value.split(":").map(Number),[eh,em]=w.querySelector(".et-end").value.split(":").map(Number);let a=sh*60+sm,b=eh*60+em;if(b<a)b+=1440;answer=b-a;w.querySelector(".et-start-label").textContent=w.querySelector(".et-start").value;w.querySelector(".et-end-label").textContent=w.querySelector(".et-end").value};w.querySelector(".et-start").onchange=calc;w.querySelector(".et-end").onchange=calc;w.querySelector(".et-new").onclick=()=>{let st=480+Math.floor(Math.random()*96)*5,d=(1+Math.floor(Math.random()*18))*5,en=st+d;w.querySelector(".et-start").value=`${String(Math.floor(st/60)%24).padStart(2,"0")}:${String(st%60).padStart(2,"0")}`;w.querySelector(".et-end").value=`${String(Math.floor(en/60)%24).padStart(2,"0")}:${String(en%60).padStart(2,"0")}`;calc()};w.querySelector(".et-check").onclick=()=>w.querySelector(".et-feedback").textContent=(+w.querySelector(".et-answer").value===answer)?"✓ Juist!":"Nog niet juist.";w.querySelector(".et-show").onclick=()=>w.querySelector(".et-feedback").textContent=`${answer} minuten`;calc()}
 if(type==="wordrelations"){let rows=[],i=0;const show=()=>{let r=rows[i];w.querySelector(".wr-prompt").textContent=r?`Geef een ${r.kind} van “${r.word}”.`:"Voeg woordparen toe.";w.querySelector(".wr-answer").value="";w.querySelector(".wr-feedback").textContent=""};w.querySelector(".wr-load").onclick=()=>{rows=w.querySelector(".wr-list").value.split(/\n/).map(x=>x.split(/[;|]/).map(y=>y.trim())).filter(x=>x[0]&&x[1]).map(x=>({word:x[0],answer:x[1],kind:x[2]||"verwant woord"}));i=0;show()};w.querySelector(".wr-next").onclick=()=>{if(rows.length){i=(i+1)%rows.length;show()}};w.querySelector(".wr-check").onclick=()=>{let r=rows[i];if(r)w.querySelector(".wr-feedback").textContent=w.querySelector(".wr-answer").value.trim().toLowerCase()===r.answer.toLowerCase()?"✓ Juist!":`Antwoord: ${r.answer}`};w.querySelector(".wr-load").click()}
 if(type==="mathtictac"){let st=Array(9).fill(""),turn="X",pending=-1,answer=0,cells=[...w.querySelectorAll(".mtt-grid button")],status=w.querySelector(".mtt-status");const win=()=>[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].some(line=>line.every(i=>st[i]===turn));const ask=()=>{let op=w.querySelector(".mtt-op").value,max=Math.max(10,+w.querySelector(".mtt-max").value||100),a,b;if(op==="×"){a=1+Math.floor(Math.random()*12);b=1+Math.floor(Math.random()*12);answer=a*b}else if(op==="÷"){b=1+Math.floor(Math.random()*12);answer=1+Math.floor(Math.random()*12);a=b*answer}else if(op==="-"){a=Math.floor(Math.random()*(max+1));b=Math.floor(Math.random()*(a+1));answer=a-b}else{a=Math.floor(Math.random()*(max+1));b=Math.floor(Math.random()*(max-a+1));answer=a+b}w.querySelector(".mtt-question").textContent=`${a} ${op} ${b} = ?`};const reset=()=>{st.fill("");turn="X";pending=-1;cells.forEach(x=>x.textContent="");status.textContent="Team X is aan de beurt";w.querySelector(".mtt-question").textContent="Kies een vak."};cells.forEach((cell,i)=>cell.onclick=()=>{if(st[i]||pending>=0)return;pending=i;ask()});w.querySelector(".mtt-check").onclick=()=>{if(pending<0)return;if(+w.querySelector(".mtt-answer").value!==answer){w.querySelector(".mtt-feedback").textContent="Niet juist — probeer opnieuw.";return}st[pending]=turn;cells[pending].textContent=turn;if(win()){status.textContent=`Team ${turn} wint!`;pending=-2;return}turn=turn==="X"?"O":"X";pending=-1;status.textContent=`Team ${turn} is aan de beurt`;w.querySelector(".mtt-question").textContent="Kies een vak."};w.querySelector(".mtt-reset").onclick=reset;reset()}
 if(type==="multiplication"){let answer=0,timer=null;const run=()=>{clearTimeout(timer);let tables=[...w.querySelectorAll(".mtablecheck:checked")].map(x=>+x.value);if(!tables.length)tables=[1];let table=tables[Math.floor(Math.random()*tables.length)],max=Math.max(1,+w.querySelector(".mfactor").value||10),b=1+Math.floor(Math.random()*max),delay=Math.max(1,+w.querySelector(".mdelay").value||3);answer=table*b;w.querySelector(".auto-problem").textContent=`${table} × ${b}`;w.querySelector(".solution").textContent="";w.querySelector(".manswer").value="";w.querySelector(".mfeedback").textContent="";let c=delay;w.querySelector(".countdown3").textContent=c;let it=setInterval(()=>{c--;if(c<=0){clearInterval(it);w.querySelector(".countdown3").textContent="";if(w.querySelector(".mauto").checked){w.querySelector(".solution").textContent=`= ${answer}`;timer=setTimeout(run,1200)}}else w.querySelector(".countdown3").textContent=c},1000)};w.querySelector(".mcheck").onclick=()=>w.querySelector(".mfeedback").textContent=(+w.querySelector(".manswer").value===answer)?"✓ Juist!":"Nog niet juist.";w.querySelector(".mshow").onclick=()=>w.querySelector(".solution").textContent=`= ${answer}`;w.querySelector(".mnext").onclick=run;run()}
 if(type==="splits"){
   let splitTimer=null,nextTimer=null,alive=true;
   const wholeEl=w.querySelector(".split-top-box"),knownEl=w.querySelector(".split-known"),missingEl=w.querySelector(".split-missing"),countdown=w.querySelector(".countdown3"),solution=w.querySelector(".solution");
   const stop=()=>{if(splitTimer)clearInterval(splitTimer);if(nextTimer)clearTimeout(nextTimer);splitTimer=nextTimer=null};
   const run=()=>{stop();const whole=Math.max(2,Math.min(100,Number(w.querySelector(".splitmax").value)||10)),a=Math.floor(Math.random()*(whole+1)),bb=whole-a,knownLeft=!w.querySelector(".splitrandom").checked||Math.random()<.5,delay=Math.max(0,Math.min(15,Number(w.querySelector(".splitdelay").value)||0));wholeEl.textContent=whole;knownEl.textContent=knownLeft?a:bb;missingEl.textContent="";solution.textContent="";countdown.textContent=delay>0?delay:"";
     const reveal=()=>{missingEl.textContent=knownLeft?bb:a;solution.textContent=`${whole} = ${a} + ${bb}`;countdown.textContent="";if(w.querySelector(".splitauto").checked){let cycle=Math.max(1,+w.querySelector(".splitcycle").value||2);nextTimer=setTimeout(()=>{if(document.body.contains(w))run()},cycle*1000)}};
     if(delay===0){reveal();return}let c=delay;splitTimer=setInterval(()=>{c--;if(c<=0){clearInterval(splitTimer);splitTimer=null;reveal()}else countdown.textContent=c},1000)};
   w.querySelector(".splitnext").onclick=e=>{e.preventDefault();run()};w.querySelector(".splitauto").onchange=()=>{stop();if(w.querySelector(".splitauto").checked)run()};run();
 }
 if(type==="daystart"){w.querySelectorAll(".answer-chip").forEach(b=>b.onclick=()=>{let a=b.dataset.answer;b.textContent=b.textContent==="toon"?a:"toon"});w.querySelector(".generateday").onclick=()=>{let rows=w.querySelectorAll(".exercise-row");[[Math.floor(Math.random()*50)+10,Math.floor(Math.random()*30)+1],[1+Math.floor(Math.random()*12),1+Math.floor(Math.random()*12)]].forEach((v,i)=>{if(i===0){rows[i].querySelector("input").value=`${v[0]} + ${v[1]} =`;rows[i].querySelector("button").dataset.answer=v[0]+v[1]}else{rows[i].querySelector("input").value=`${v[0]} × ${v[1]} =`;rows[i].querySelector("button").dataset.answer=v[0]*v[1]}rows[i].querySelector("button").textContent="toon"})}}

 if(type==="voice"){let buttons=[...w.querySelectorAll(".voice")],d=w.querySelector(".voice-display"),img=d.querySelector("img"),txt=d.querySelector("strong");buttons.forEach(b=>b.onclick=()=>{buttons.forEach(x=>x.classList.toggle("active",x===b));img.src=b.dataset.src;txt.textContent=`Niveau ${b.dataset.level} · ${b.dataset.label}`;scheduleSave()})}
 if(type==="exit"){let n=0;w.querySelectorAll(".exit-results button").forEach(b=>b.onclick=()=>{n++;w.querySelector(".exitcount").textContent=`${n} reacties`});w.querySelector(".resetexit").onclick=()=>{n=0;w.querySelector(".exitcount").textContent="0 reacties"}}
 if(type==="birthday"){const f=()=>{const name=w.querySelector(".birthdayname").value.trim()||"de jarige";const age=Math.max(1,Math.min(99,+w.querySelector(".birthdayage").value||1));w.querySelector(".birthday-age-badge strong").textContent=age;w.querySelector(".birthdaytext").textContent=`Vandaag vieren we ${name}! ${name} is ${age} jaar! 🎉`;scheduleSave()};w.querySelector(".birthdayname").oninput=f;w.querySelector(".birthdayage").oninput=f;f()}
 if(type==="points")w.querySelectorAll(".point-card").forEach(c=>{let n=0,o=c.querySelector(".point-num");c.querySelector(".pplus").onclick=()=>o.textContent=++n;c.querySelector(".pminus").onclick=()=>o.textContent=Math.max(0,--n)});
 if(type==="daystartpro"){
 const q=s=>w.querySelector(s),qa=s=>[...w.querySelectorAll(s)];
 const key="kbs_daystart_settings_v9",defaults={L1:20,L2:100,L3:1000,L4:100000,L5:1000000,L6:1000000000};
 let solutions=false,generation=0;
 const banks={
 spelling:[
  ["Verbeter de fout in deze zin: De hont blaft.","De hond blaft."],["Verbeter de fout in deze zin: Hij wort wakker.","Hij wordt wakker."],["Verbeter de fout in deze zin: De wint waait hard.","De wind waait hard."],
  ["Schrijf het meervoud van: kat","katten"],["Schrijf het meervoud van: stoel","stoelen"],["Schrijf het verkleinwoord van: boom","boompje"],["Schrijf het verkleinwoord van: huis","huisje"],["Vul de ontbrekende letter in: hon_","hond"],["Vul de ontbrekende letter in: bo_k","boek"]],
 woordenschat:[["Wat betekent dapper?","moedig"],["Geef het tegenovergestelde van donker.","licht"],["Geef een synoniem voor blij.","vrolijk"],["Wat is het tegenovergestelde van vroeg?","laat"],["Geef een synoniem voor snel.","vlug"],["Wat betekent voorzichtig?","oplettend / behoedzaam"]],
 zinsbouw:[["Zet goed: leest / Noor / een boek","Noor leest een boek."],["Maak vragend: Jij komt morgen.","Kom jij morgen?"],["Zet goed: buiten / spelen / de kinderen","De kinderen spelen buiten."],["Duid de persoonsvorm aan: Mila speelt buiten.","speelt"],["Maak een zin met: morgen – wij – zwemmen","Morgen zwemmen wij."]]
 };
 const updateTables=()=>{let on=q(".dsusetables").checked;q(".ds-table-field").classList.toggle("disabled",!on);qa(".dstable").forEach(x=>x.disabled=!on);if(!on&&q(".dsmath").value==="tafels")q(".dsmath").value="gemengd"};
 const read=()=>({grade:q(".dsgrade").value,max:Number(q(".dsmax").value),count:Number(q(".dscount").value),math:q(".dsmath").value,useTables:q(".dsusetables").checked,tables:qa(".dstable:checked").map(x=>+x.value),lang:q(".dslang").value,title:q(".dstitle").value,text:q(".dstext").value});
 const apply=s=>{if(!s)return;q(".dsgrade").value=s.grade||"L3";q(".dsmax").value=s.max||defaults[q(".dsgrade").value];q(".dscount").value=s.count||4;q(".dsmath").value=s.math||"gemengd";q(".dsusetables").checked=s.useTables!==false;qa(".dstable").forEach(x=>x.checked=(s.tables||[2,5,10]).includes(+x.value));q(".dslang").value=s.lang||"gemengd";q(".dstitle").value=s.title||"Goedemorgen!";q(".dstext").value=s.text||"";updateTables()};
 try{apply(JSON.parse(localStorage.getItem(key)||"null"))}catch(e){}
 const save=()=>{localStorage.setItem(key,JSON.stringify(read()));notify("Dagstartinstellingen bewaard")};
 q(".dsgrade").onchange=()=>{q(".dsmax").value=defaults[q(".dsgrade").value];if(q(".dsgrade").value==="L1"){q(".dsusetables").checked=false;updateTables()}};
 q(".dsresetmax").onclick=()=>q(".dsmax").value=defaults[q(".dsgrade").value];q(".dsusetables").onchange=updateTables;
 q(".dsnone").onclick=()=>qa(".dstable").forEach(x=>x.checked=false);q(".dsall").onclick=()=>qa(".dstable").forEach(x=>x.checked=true);q(".dsclassic").onclick=()=>qa(".dstable").forEach(x=>x.checked=[2,5,10].includes(+x.value));
 const pick=a=>a[Math.floor(Math.random()*a.length)],shuffle=a=>[...a].sort(()=>Math.random()-.5);
 const mathQ=(s,i)=>{let mode=s.math;if(mode==="tafels"&&!s.useTables)mode="gemengd";if(mode==="gemengd"&&s.useTables&&i%3===2)mode="tafels";else if(mode==="gemengd")mode=i%2?"aftrekken":"optellen";if(mode==="tafels"){let t=pick(s.tables.length?s.tables:[2,5,10]),f=1+Math.floor(Math.random()*10);return [`${t} × ${f} =`,t*f]}let max=Math.max(1,Math.min(s.max||defaults[s.grade],defaults[s.grade])),a=Math.floor(Math.random()*(max+1)),b=Math.floor(Math.random()*(max+1));if(mode==="aftrekken"){if(b>a)[a,b]=[b,a];return [`${a} − ${b} =`,a-b]}if(a+b>max)b=Math.max(0,max-a);return [`${a} + ${b} =`,a+b]};
 const generate=()=>{generation++;let s=read(),n=Math.max(2,Math.min(12,s.count||4));if(!s.max)s.max=defaults[s.grade];q(".dstitleout").textContent=s.title||"Goedemorgen!";q(".dstextout").textContent=s.text||"";let m=q(".mathbox"),l=q(".langbox");m.innerHTML="<h3>➗ Rekenen</h3>";l.innerHTML="<h3>🔤 Taal</h3>";let seen=new Set();for(let i=0;i<n;i++){let x,tries=0;do{x=mathQ(s,i+generation);tries++}while(seen.has(x[0])&&tries<20);seen.add(x[0]);m.insertAdjacentHTML("beforeend",`<button class="task" type="button"><span class="q">${x[0]}</span><span class="a" aria-hidden="true">${x[1]}</span></button>`)}let pool=s.lang==="gemengd"?Object.values(banks).flat():banks[s.lang];shuffle(pool).slice(0,n).forEach(x=>l.insertAdjacentHTML("beforeend",`<button class="task" type="button"><span class="q">${x[0]}</span><span class="a" aria-hidden="true">${x[1]}</span></button>`));qa(".task").forEach(t=>t.onclick=()=>{t.classList.toggle("show");t.querySelector(".a").setAttribute("aria-hidden",!t.classList.contains("show"))});solutions=false;q(".dssolutions").textContent="Toon alle oplossingen";save();scheduleSave()};
 q(".dssave").onclick=save;q(".dsgenerate").onclick=generate;q(".dssolutions").onclick=()=>{solutions=!solutions;qa(".task").forEach(t=>{t.classList.toggle("show",solutions);t.querySelector(".a").setAttribute("aria-hidden",!solutions)});q(".dssolutions").textContent=solutions?"Verberg alle oplossingen":"Toon alle oplossingen"};generate();
 }
 if(type==="attendance"){let names=getClassNames(),box=w.querySelector(".attendance-list");box.innerHTML=names.map(n=>`<button class="pill att" style="margin:3px">${n} ✓</button>`).join("");box.querySelectorAll(".att").forEach(b=>b.onclick=()=>{b.classList.toggle("danger");b.textContent=b.textContent.includes("✓")?b.textContent.replace("✓","✕"):b.textContent.replace("✕","✓")});w.querySelector(".allpresent").onclick=()=>box.querySelectorAll(".att").forEach(b=>{b.classList.remove("danger");b.textContent=b.textContent.replace("✕","✓")})}
 if(type==="question"){let qs=["Waar ben je vandaag trots op?","Wat wil je vandaag leren?","Wat maakt een goede klasgenoot?","Welke strategie hielp jou vandaag?","Wat vond je moeilijk en waarom?"];w.querySelector(".newquestion").onclick=()=>w.querySelector(".questiontext").value=qs[Math.floor(Math.random()*qs.length)]}

 if(type==="weather"){let temp=w.querySelector(".weather-temp"),out=w.querySelector(".weather-temp-out"),label=w.querySelector(".weather-label"),img=w.querySelector(".weather-student img");const paintTemp=()=>out.textContent=`${temp.value||0} °C`;temp.oninput=paintTemp;w.querySelectorAll(".weather-btn").forEach(b=>b.onclick=()=>{w.querySelectorAll(".weather-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");label.textContent=b.dataset.weather;img.src="assets/icons/"+b.dataset.icon;scheduleSave()});w.querySelector(".weather-btn")?.click();paintTemp()}
 if(type==="routine")w.querySelectorAll(".routine button").forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("done"));


 if(type==="routine"){let list=w.querySelector(".routine-list");const bind=()=>{list.querySelectorAll(".routine").forEach(row=>{row.querySelector("button:first-child").onclick=()=>row.classList.toggle("done");row.querySelector(".routine-del").onclick=()=>row.remove()})};w.querySelector(".routine-add").onclick=()=>{list.insertAdjacentHTML("beforeend",`<div class="routine"><button type="button">✓</button><input value="" placeholder="Nieuwe routine"><button class="routine-del" type="button">×</button></div>`);bind();list.lastElementChild.querySelector("input").focus()};w.querySelector(".routine-reset").onclick=()=>list.querySelectorAll(".routine").forEach(r=>r.classList.remove("done"));bind()}
 if(type==="rewardjar"){let n=0,rewards=["10 minuten extra speeltijd"],active=0,list=w.querySelector(".reward-list"),name=w.querySelector(".reward-name");const p=()=>{let g=Math.max(1,+w.querySelector(".jargoal").value||20);n=Math.min(n,g);w.querySelector(".rewardcount").textContent=`${n}/${g}`;w.querySelector(".rewardfill").style.height=Math.min(100,n/g*100)+"%";w.querySelector(".reward-current").textContent="Beloning: "+rewards[active];w.querySelector(".reward-celebrate").textContent=n>=g?`🎉 ${rewards[active]}`:""};const render=()=>{list.innerHTML=rewards.map((x,i)=>`<button type="button" class="${i===active?"active":""}" data-i="${i}"><span class="reward-label">${x}</span><span class="reward-remove" title="Verwijder">×</span></button>`).join("");list.querySelectorAll("button").forEach(b=>b.onclick=e=>{let idx=+b.dataset.i;if(e.target.classList.contains("reward-remove")){if(rewards.length>1){rewards.splice(idx,1);active=Math.min(active,rewards.length-1);render();p()}return}active=idx;name.value=rewards[active];render();p()})};w.querySelector(".reward-add").type="button";w.querySelector(".reward-add").onclick=()=>{let x=name.value.trim();if(!x)return;if(rewards.includes(x)){active=rewards.indexOf(x)}else{rewards.push(x);active=rewards.length-1}render();p()};w.querySelector(".jarplus").onclick=()=>{n++;p()};w.querySelector(".jarminus").onclick=()=>{n=Math.max(0,n-1);p()};w.querySelector(".jarreset").onclick=()=>{n=0;p()};w.querySelector(".jargoal").oninput=p;render();p()}
 if(type==="randomnum"){let used=new Set();const reset=()=>{used.clear();w.querySelector(".random-status").textContent="Nieuwe ronde gestart"};w.querySelector(".randomreset").onclick=reset;w.querySelector(".randomgo").onclick=()=>{let min=Number(w.querySelector(".rmin").value),max=Number(w.querySelector(".rmax").value),step=Math.abs(Number(w.querySelector(".rstep").value)||1),count=Math.max(1,Math.min(10,Number(w.querySelector(".rcount").value)||1));if(min>max)[min,max]=[max,min];let values=[],limit=Math.min(10000,Math.floor((max-min)/step)+1);for(let i=0;i<limit;i++)values.push(Number((min+i*step).toFixed(6)));let noRepeat=w.querySelector(".rnorepeat").checked;if(noRepeat&&used.size>=values.length)used.clear();let pool=noRepeat?values.filter(v=>!used.has(String(v))):values;if(!pool.length)pool=values;let chosen=[];for(let i=0;i<count&&pool.length;i++){let ix=Math.floor(Math.random()*pool.length),v=pool.splice(ix,1)[0];chosen.push(v);if(noRepeat)used.add(String(v))}w.querySelector(".random-number").textContent=chosen.join(" · ");w.querySelector(".random-status").textContent=noRepeat?`${used.size}/${values.length} gebruikt`:"Herhaling toegestaan"}}
 if(type==="placevalue"){let vals={1000000:0,100000:0,10000:0,1000:0,100:0,10:0,1:0},labels={1000000:"M",100000:"HD",10000:"TD",1000:"D",100:"H",10:"T",1:"E"},box=w.querySelector(".placevalue"),out=w.querySelector(".pvtotal");const build=()=>{let active=[...w.querySelectorAll(".pvvisible:checked")].map(x=>Number(x.value)).sort((a,b)=>b-a);box.style.gridTemplateColumns=`repeat(${Math.max(1,active.length)},1fr)`;box.innerHTML=active.map(p=>`<div class="pvcol" data-p="${p}"><div class="pvhead">${labels[p]}</div><div class="pvnum">${vals[p]}</div><div class="pvcontrols"><button class="pvdn">−</button><button class="pvup">＋</button></div></div>`).join("");box.querySelectorAll(".pvcol").forEach(c=>{let p=Number(c.dataset.p);c.querySelector(".pvup").onclick=()=>{vals[p]=(vals[p]+1)%10;build()};c.querySelector(".pvdn").onclick=()=>{vals[p]=(vals[p]+9)%10;build()}});out.textContent=Object.entries(vals).reduce((s,[p,v])=>s+Number(p)*v,0).toLocaleString("nl-BE")};w.querySelectorAll(".pvvisible").forEach(x=>x.onchange=build);build()}

 if(type==="rekenrek"){let target=null;const beads=[...w.querySelectorAll(".bead")],count=()=>beads.filter(b=>!b.classList.contains("off")).length,show=n=>beads.forEach((b,i)=>b.classList.toggle("off",i>=n));beads.forEach(b=>b.onclick=()=>b.classList.toggle("off"));w.querySelector(".rekclear").onclick=()=>{show(0);w.querySelector(".rek-feedback").textContent=""};w.querySelector(".rek-show").onclick=()=>show(Math.max(0,Math.min(20,+w.querySelector(".rek-target").value||0)));w.querySelector(".rek-task").onclick=()=>{target=Math.floor(Math.random()*21);show(0);w.querySelector(".rek-question").textContent=`Leg ${target} op het rekenrek.`;w.querySelector(".rek-feedback").textContent=""};w.querySelector(".rek-check").onclick=()=>{let expected=target??Math.max(0,Math.min(20,+w.querySelector(".rek-target").value||0));w.querySelector(".rek-feedback").textContent=count()===expected?"✓ Juist!":`Je toont ${count()}. Probeer opnieuw.`}}
 if(type==="money"){
   let totalCents=0,targetCents=0,mode="free",advanceTimer=null;const space=w.querySelector(".money-workspace"),out=w.querySelector(".moneytotal"),task=w.querySelector(".money-task"),denoms=[50000,20000,10000,5000,2000,1000,500,200,100,50,20,10,5];
   const eur=c=>"€ "+(c/100).toFixed(2).replace(".",",");
   const feedback=()=>{if(mode!=="exercise")return;let f=w.querySelector(".moneyfeedback"),diff=targetCents-totalCents;if(diff===0){f.textContent="✓ Juist! Nieuwe oefening…";f.className="moneyfeedback correct";clearTimeout(advanceTimer);advanceTimer=setTimeout(newTask,850)}else if(diff>0){f.textContent=`Nog ${eur(diff)} nodig.`;f.className="moneyfeedback"}else{f.textContent=`${eur(-diff)} te veel. Tik geld aan om het weg te nemen.`;f.className="moneyfeedback wrong"}};
   const paint=()=>{out.textContent=eur(totalCents);feedback()};
   const bindPlaced=el=>el.onclick=()=>{totalCents-=+el.dataset.c;el.remove();paint()};
   const addCents=c=>{totalCents+=c;let v=c/100;space.insertAdjacentHTML("beforeend",`<button type="button" class="placed-money" data-c="${c}">${renderWerkbladstudioGetalbeeld("money",v,{moneyMode:String(v)})}</button>`);bindPlaced(space.lastElementChild);paint()};
   const clear=()=>{totalCents=0;space.innerHTML="";out.textContent=eur(0)};
   w.querySelectorAll(".money-piece-btn").forEach(btn=>btn.onclick=()=>addCents(Math.round(Number(btn.dataset.v)*100)));
   function newTask(){clearTimeout(advanceTimer);clear();let choices=[35,45,55,65,75,85,95,125,135,145,175,225,250,275,325,350,425,475,550,625,750,850,1050,1250,1550,2050];targetCents=choices[Math.floor(Math.random()*choices.length)];w.querySelector(".money-question").innerHTML=`<strong>Leg precies ${eur(targetCents)}</strong><small>Tik geld aan. De oefening controleert meteen.</small>`;w.querySelector(".moneyfeedback").textContent="Start met leggen."}
   w.querySelector(".moneyfree").onclick=()=>{mode="free";task.hidden=true;w.querySelector(".moneyfree").classList.add("active");w.querySelector(".moneyexercise").classList.remove("active");clear()};
   w.querySelector(".moneyexercise").onclick=()=>{mode="exercise";task.hidden=false;w.querySelector(".moneyexercise").classList.add("active");w.querySelector(".moneyfree").classList.remove("active");newTask()};
   w.querySelector(".moneycheck").onclick=feedback;w.querySelector(".moneynew").onclick=newTask;w.querySelector(".moneyshow").onclick=()=>{clear();let rem=targetCents;for(let c of denoms){while(rem>=c){totalCents+=c;let v=c/100;space.insertAdjacentHTML("beforeend",`<button type="button" class="placed-money" data-c="${c}">${renderWerkbladstudioGetalbeeld("money",v,{moneyMode:String(v)})}</button>`);bindPlaced(space.lastElementChild);rem-=c}}out.textContent=eur(totalCents);w.querySelector(".moneyfeedback").textContent="Voorbeeldoplossing.";};w.querySelector(".moneyclear").onclick=clear;out.textContent=eur(0);
 }
 if(type==="quickquiz"){
   const editor=w.querySelector(".quiz-editor"),play=w.querySelector(".quiz-play"),q=w.querySelector(".quiz-question"),choices=w.querySelector(".quizchoices"),fb=w.querySelector(".quiz-feedback");let data=null;
   const rows=()=>[...w.querySelectorAll(".quiz-edit-option")];const wireDelete=()=>rows().forEach(r=>r.querySelector(".qdel").onclick=()=>{if(rows().length>2)r.remove()});
   const collect=()=>{let rr=rows(),correct=rr.findIndex(x=>x.querySelector('input[type=radio]').checked);return {q:w.querySelector(".quizq").value.trim()||"Vraag",opts:rr.map(x=>x.querySelector(".qopt").value.trim()||"—"),correct:correct<0?0:correct}};
   const paint=()=>{data=collect();q.textContent=data.q;choices.innerHTML=data.opts.map((x,i)=>`<button class="choice" type="button" data-i="${i}"><span>${String.fromCharCode(65+i)}</span>${x}</button>`).join("");fb.textContent="Kies een antwoord.";choices.querySelectorAll("button").forEach(btn=>btn.onclick=()=>{if(+btn.dataset.i===data.correct){btn.classList.add("correct");fb.textContent="✓ Juist!";choices.querySelectorAll(x=>x.disabled=true)}else{btn.classList.add("wrong");fb.textContent="Niet juist — probeer opnieuw."}})};
   w.querySelector(".quizstart").onclick=()=>{editor.hidden=true;play.hidden=false;paint();w.classList.add("exercise-view")};w.querySelector(".quizedit").onclick=()=>{play.hidden=true;editor.hidden=false;w.classList.remove("exercise-view")};w.querySelector(".quizreset").onclick=paint;w.querySelector(".quizreveal").onclick=()=>{choices.querySelectorAll("button").forEach((btn,i)=>{btn.classList.toggle("correct",i===data.correct);btn.disabled=true});fb.textContent="Oplossing getoond."};
   w.querySelector(".qadd").onclick=()=>{if(rows().length>=6)return;let n=rows().length;w.querySelector(".quiz-option-editor").insertAdjacentHTML("beforeend",`<label class="quiz-edit-option"><input type="radio" name="correct-extra"><input class="qopt" value="Antwoord ${n+1}"><button class="qdel" type="button">×</button></label>`);wireDelete()};
   w.querySelector(".quizshuffle").onclick=()=>{let box=w.querySelector(".quiz-option-editor"),rr=rows().sort(()=>Math.random()-.5);rr.forEach(x=>box.appendChild(x))};wireDelete();
 }
 if(type==="progress"){let n=0,p=()=>{w.querySelector(".progressfill").style.width=n+"%";w.querySelector(".progressnum").textContent=n+"%"};w.querySelector(".progplus").onclick=()=>{n=Math.min(100,n+10);p()};w.querySelector(".progminus").onclick=()=>{n=Math.max(0,n-10);p()}}

 if(type==="liveclass"){let code=null,poll=null;const refresh=async()=>{if(!code)return;try{let r=await fetch(`/api/room/${code}`),d=await r.json(),answers=d.answers||[];w.querySelector(".aggregate").textContent=`${answers.length} antwoord(en) ontvangen`;w.querySelector(".teacheranswers").innerHTML=answers.map(a=>`<div class="teacher-answer"><b>${a.name}</b><span>${a.answer||"—"}</span></div>`).join("")}catch(e){}};w.querySelector(".createroom").onclick=async()=>{try{let r=await fetch("/api/rooms",{method:"POST"}),d=await r.json();code=d.code;w.querySelector(".roomcode").textContent=code;w.querySelector(".studenturl").textContent=`Open op leerlingtoestel: ${location.origin}/student.html?code=${code}`;clearInterval(poll);poll=setInterval(refresh,1500);refresh()}catch(e){w.querySelector(".studenturl").textContent="Start Klasbordstudio via server.js om leerlingcodes te gebruiken."}};w.querySelector(".sendquestion").onclick=async()=>{if(!code)return;await fetch(`/api/room/${code}/question`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:w.querySelector(".livequestion").value})});refresh()}}

 if(type==="venn"){let stage=w.querySelector(".venn-stage"),bank=w.querySelector(".venn-bank"),a=w.querySelector(".venn-a"),b=w.querySelector(".venn-b");const titles=()=>{a.querySelector("strong").textContent=w.querySelector(".venn-title-a").value||"Groep A";b.querySelector("strong").textContent=w.querySelector(".venn-title-b").value||"Groep B"};const draggable=el=>{el.onpointerdown=e=>{if(e.target!==el)return;let r=stage.getBoundingClientRect(),er=el.getBoundingClientRect(),ox=e.clientX-er.left,oy=e.clientY-er.top;el.setPointerCapture?.(e.pointerId);const move=ev=>{el.style.position="absolute";el.style.left=Math.max(0,Math.min(r.width-el.offsetWidth,ev.clientX-r.left-ox))+"px";el.style.top=Math.max(0,Math.min(r.height-el.offsetHeight,ev.clientY-r.top-oy))+"px"};el.onpointermove=move;el.onpointerup=()=>{el.onpointermove=null;el.onpointerup=null;scheduleSave()}}};const load=()=>{titles();bank.innerHTML="";w.querySelector(".venn-items").value.split(/\n+/).map(x=>x.trim()).filter(Boolean).forEach(x=>{let el=document.createElement("button");el.type="button";el.className="venn-card";el.textContent=x;bank.appendChild(el);draggable(el)})};w.querySelector(".venn-title-a").oninput=titles;w.querySelector(".venn-title-b").oninput=titles;w.querySelector(".venn-load").onclick=load;w.querySelector(".venn-add").onclick=()=>{let x=prompt("Tekst op het kaartje:");if(!x)return;let el=document.createElement("button");el.type="button";el.className="venn-card";el.textContent=x;bank.appendChild(el);draggable(el)};w.querySelector(".venn-reset").onclick=load;load()}
 if(type==="tschema"){let c=w.querySelector(".ts-canvas"),ctx=c.getContext("2d"),draw=false,enabled=false,pen=w.querySelector(".ts-pen");const pos=e=>{let r=c.getBoundingClientRect();return [(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};pen.onclick=()=>{enabled=!enabled;c.classList.toggle("active",enabled);pen.classList.toggle("active",enabled)};c.onpointerdown=e=>{if(!enabled)return;draw=true;let[x,y]=pos(e);ctx.beginPath();ctx.moveTo(x,y)};c.onpointermove=e=>{if(!draw)return;let[x,y]=pos(e);ctx.lineTo(x,y);ctx.lineWidth=5;ctx.lineCap="round";ctx.strokeStyle="#033663";ctx.stroke()};c.onpointerup=c.onpointerleave=()=>draw=false;w.querySelector(".ts-clear").onclick=()=>ctx.clearRect(0,0,c.width,c.height)}
 if(type==="covercard"||type==="screenveil"){w.classList.add("bare-cover-widget");w.querySelector(".widget-bar")?.remove();w.style.border="0";w.style.background="transparent";w.style.boxShadow="none";let ctl=document.createElement("div");ctl.className="cover-controls";ctl.innerHTML='<span class="cover-move" title="Verslepen">⋮⋮</span><button class="cover-close" type="button" title="Verwijderen">×</button>';w.appendChild(ctl);let move=ctl.querySelector(".cover-move"),drag=false,sx=0,sy=0,sl=0,st=0;move.onpointerdown=e=>{e.stopPropagation();drag=true;sx=e.clientX;sy=e.clientY;sl=parseFloat(w.style.left)||0;st=parseFloat(w.style.top)||0;move.setPointerCapture?.(e.pointerId)};move.onpointermove=e=>{if(!drag)return;w.style.left=sl+e.clientX-sx+"px";w.style.top=st+e.clientY-sy+"px"};move.onpointerup=()=>{drag=false;savePage();scheduleSave()};ctl.querySelector(".cover-close").onclick=e=>{e.stopPropagation();removeWidget(w)}}

 if(type==="geoboard"){let svg=w.querySelector(".geo-lines"),color=w.querySelector(".geo-color"),points=[],lines=[];const xy=i=>({x:(i%7)*100+0,y:Math.floor(i/7)*100+0}),paint=()=>{svg.innerHTML=lines.map(l=>{let a=xy(l.a),b=xy(l.b);return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${l.color}" stroke-width="9" stroke-linecap="round"/>`}).join("");w.querySelectorAll(".peg").forEach((p,i)=>p.classList.toggle("selected",points.includes(i)))};w.querySelectorAll(".peg").forEach((p,i)=>p.onclick=()=>{if(points.length){let prev=points[points.length-1];if(prev!==i)lines.push({a:prev,b:i,color:color.value})}points.push(i);paint()});w.querySelector(".geo-close").onclick=()=>{if(points.length>2){lines.push({a:points[points.length-1],b:points[0],color:color.value});paint()}};w.querySelector(".geo-undo").onclick=()=>{lines.pop();points.pop();paint()};w.querySelector(".geo-clear").onclick=()=>{lines=[];points=[];paint()};paint()}
 if(type==="fractions"){let mode="strip",num=w.querySelector(".fl-num"),den=w.querySelector(".fl-den"),stage=w.querySelector(".fraction-lab-stage"),read=w.querySelector(".fraction-lab-readout");const draw=()=>{let d=Math.max(1,Math.min(20,+den.value||1)),n=Math.max(0,Math.min(d,+num.value||0));den.value=d;num.max=d;num.value=n;let parts=Array.from({length:d},(_,i)=>`<button type="button" class="fl-part ${i<n?"on":""}" data-i="${i}"></button>`).join(""),strip=`<div class="fl-strip" style="grid-template-columns:repeat(${d},1fr)">${parts}</div>`,grad=Array.from({length:d},(_,i)=>`${i<n?"#28b9aa":"#eef4f6"} ${i*360/d}deg ${(i+1)*360/d}deg`).join(","),circle=`<div class="fl-circle" style="background:conic-gradient(${grad})">${Array.from({length:d},(_,i)=>`<i style="transform:rotate(${i*360/d}deg)"></i>`).join("")}</div>`;stage.innerHTML=mode==="strip"?strip:mode==="circle"?circle:`<div class="fl-both">${strip}${circle}</div>`;stage.querySelectorAll(".fl-part").forEach(b=>b.onclick=()=>{b.classList.toggle("on");num.value=stage.querySelectorAll(".fl-part.on").length;draw()});read.innerHTML=`<strong>${n}/${d}</strong><span>${(n/d).toLocaleString("nl-BE",{maximumFractionDigits:3})}</span><span>${Math.round(n/d*100)}%</span>`};w.querySelectorAll(".fraction-mode button").forEach(b=>b.onclick=()=>{mode=b.dataset.mode;w.querySelectorAll(".fraction-mode button").forEach(x=>x.classList.toggle("active",x===b));draw()});num.oninput=draw;den.oninput=draw;w.querySelector(".fl-random").onclick=()=>{let d=2+Math.floor(Math.random()*11);den.value=d;num.value=1+Math.floor(Math.random()*d);draw()};w.querySelector(".fl-clear").onclick=()=>{num.value=0;draw()};draw()}
 if(type==="handwriting"){let stage=w.querySelector(".hw-stage"),typeSel=w.querySelector(".hw-type"),rows=w.querySelector(".hw-rows"),height=w.querySelector(".hw-height"),heightOut=w.querySelector(".hw-height-value");const paint=()=>{let h=Math.max(44,Math.min(150,+height.value||72)),n=Math.max(1,Math.min(10,+rows.value||5)),houses=typeSel.value==="houses";heightOut.textContent=h+" px";stage.classList.toggle("hw-stage--houses",houses);stage.innerHTML=Array.from({length:n},()=>`<div class="hw-guide" style="height:${h}px"><svg class="hw-lines" viewBox="0 0 720 72" preserveAspectRatio="none" aria-hidden="true"><rect width="720" height="72" fill="white"/><rect y="24" width="720" height="24" fill="#eeeeee"/><g stroke="#8c8c8c" stroke-width="1"><line x1="0" y1="1" x2="720" y2="1"/><line x1="0" y1="24" x2="720" y2="24"/><line x1="0" y1="48" x2="720" y2="48"/><line x1="0" y1="71" x2="720" y2="71"/></g></svg>${houses?`<svg class="hw-house" viewBox="0 0 60 72" preserveAspectRatio="none" style="width:${(60/72*h).toFixed(1)}px;height:${h}px" aria-hidden="true"><g fill="none" stroke="#555" stroke-width="1.6" vector-effect="non-scaling-stroke"><path d="M4 24 L14 1 L48 1 L58 24"/><line x1="4" y1="24" x2="58" y2="24"/><line x1="4" y1="24" x2="4" y2="71"/><line x1="58" y1="24" x2="58" y2="71"/><line x1="4" y1="48" x2="58" y2="48"/><line x1="4" y1="71" x2="58" y2="71"/></g></svg>`:""}</div>`).join("");scheduleSave()};typeSel.onchange=paint;rows.oninput=paint;height.oninput=paint;paint()}
 if(type==="fractionstrips"){let stage=w.querySelector(".fs-stage"),max=w.querySelector(".fs-max");const paint=()=>{let m=+max.value;stage.innerHTML=`<div class="fs-row whole"><b>1</b><button data-den="1" data-part="0"></button></div>`+Array.from({length:m-1},(_,k)=>k+2).map(n=>`<div class="fs-row"><b>1/${n}</b><div style="grid-template-columns:repeat(${n},1fr)">${Array.from({length:n},(_,i)=>`<button type="button" data-den="${n}" data-part="${i}"></button>`).join("")}</div></div>`).join("");stage.querySelectorAll("button").forEach(b=>b.onclick=()=>b.classList.toggle("on"))};max.onchange=paint;w.querySelector(".fs-reset").onclick=()=>stage.querySelectorAll("button").forEach(b=>b.classList.remove("on"));paint()}
 if(type==="fractioncircles"){let num=w.querySelector(".fc-num"),den=w.querySelector(".fc-den"),stage=w.querySelector(".fc-stage"),read=w.querySelector(".fc-readout");const paint=()=>{let d=Math.max(1,Math.min(12,+den.value||1)),n=Math.max(0,Math.min(d,+num.value||0));den.value=d;num.max=d;num.value=n;stage.innerHTML=fractionCircleSVG(n,d);read.innerHTML=`<strong>${n}/${d}</strong><span>= ${(n/d).toLocaleString("nl-BE",{maximumFractionDigits:3})}</span><span>= ${Math.round(n/d*100)}%</span>`};num.oninput=paint;den.oninput=paint;paint()}
 if(type==="decimalpercent"){let range=w.querySelector(".dp-range"),val=w.querySelector(".dp-value"),grid=w.querySelector(".dp-grid"),read=w.querySelector(".dp-readout");const paint=x=>{x=Math.max(0,Math.min(100,+x||0));range.value=val.value=x;grid.querySelectorAll("button").forEach((b,i)=>b.classList.toggle("on",i<x));read.innerHTML=`<strong>${x}%</strong><span>= ${(x/100).toLocaleString("nl-BE",{minimumFractionDigits:2,maximumFractionDigits:2})}</span><span>= ${x}/100</span>`};range.oninput=()=>paint(range.value);val.oninput=()=>paint(val.value);grid.querySelectorAll("button").forEach((b,i)=>b.onclick=()=>paint(i+1));paint(35)}
 if(type==="angletool"){let r=w.querySelector(".angle-range"),v=w.querySelector(".angle-value"),arm=w.querySelector(".angle-arm"),label=w.querySelector(".angle-label");const paint=x=>{x=Math.max(0,Math.min(180,+x||0));r.value=v.value=x;let a=(180-x)*Math.PI/180,ex=250+180*Math.cos(a),ey=245-180*Math.sin(a);arm.setAttribute("x2",ex);arm.setAttribute("y2",ey);label.textContent=x+"°"};r.oninput=()=>paint(r.value);v.oninput=()=>paint(v.value);paint(60)}
 if(type==="balancescale"){let l=w.querySelector(".bal-left"),r=w.querySelector(".bal-right"),beam=w.querySelector(".balance-beam"),res=w.querySelector(".balance-result");const paint=()=>{let a=+l.value||0,b=+r.value||0,d=Math.max(-12,Math.min(12,(a-b)*2));beam.style.transform=`rotate(${d}deg)`;w.querySelector(".balance-pan.left span").textContent=a;w.querySelector(".balance-pan.right span").textContent=b;res.textContent=a===b?`${a} = ${b}`:a>b?`${a} > ${b}`:`${a} < ${b}`};l.oninput=r.oninput=paint;w.querySelector(".bal-random").onclick=()=>{l.value=Math.floor(Math.random()*21);r.value=Math.floor(Math.random()*21);paint()};paint()}
 if(type==="timeschart"){let stage=w.querySelector(".times-chart"),sel=w.querySelector(".tc-table"),read=w.querySelector(".tc-readout");const build=()=>{let focus=+sel.value;stage.innerHTML=`<b>×</b>${Array.from({length:12},(_,i)=>`<b>${i+1}</b>`).join("")}`+Array.from({length:12},(_,r)=>`<b>${r+1}</b>${Array.from({length:12},(_,c)=>`<button type="button" data-a="${r+1}" data-b="${c+1}" class="${focus&&(r+1===focus||c+1===focus)?"focus":""}">${(r+1)*(c+1)}</button>`).join("")}`).join("");stage.querySelectorAll("button").forEach(b=>b.onclick=()=>{b.classList.toggle("marked");read.textContent=`${b.dataset.a} × ${b.dataset.b} = ${+b.dataset.a*+b.dataset.b}`})};sel.onchange=build;w.querySelector(".tc-clear").onclick=()=>stage.querySelectorAll("button").forEach(b=>b.classList.remove("marked"));build()}
 if(type==="ggdkgv"){
   const gcd=(a,b)=>{while(b)[a,b]=[b,a%b];return a};
   const factors=n=>Array.from({length:n},(_,i)=>i+1).filter(x=>n%x===0);
   const pool=[6,8,9,10,12,14,15,16,18,20,21,24,25,27,28,30,32,35,36,40,42,45,48,50,54,60];
   let state={g:1,k:1,commonFactors:[],commonMultiples:[],checked:false};
   const shuffle=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
   const uniq=a=>[...new Set(a)];
   const token=(kind,value)=>`<button type="button" class="gk-token" data-kind="${kind}" data-value="${value}" aria-pressed="false">${value}</button>`;
   const clearAnswers=()=>{w.querySelector(".gk-ggd-answer").value="";w.querySelector(".gk-kgv-answer").value=""};
   const paint=()=>{
     let a=Math.max(2,Math.min(100,+w.querySelector(".gk-a").value||2)),b=Math.max(2,Math.min(100,+w.querySelector(".gk-b").value||2)),mode=w.querySelector(".gk-mode").value;
     let g=gcd(a,b),k=a/g*b,fa=factors(a),fb=factors(b),commonFactors=fa.filter(x=>fb.includes(x));
     // V65: toon twee echte reeksen naast/onder elkaar. De leerling vergelijkt de rijen zelf en
     // duidt elk gemeenschappelijk getal in BEIDE rijen aan. Zo is de vergelijking zichtbaar zonder oplossingen te verklappen.
     // V66: elke rij krijgt genoeg opeenvolgende veelvouden om minstens twee echte
     // gemeenschappelijke veelvouden te kunnen vergelijken. Bij onpraktisch grote
     // combinaties beperken we de rij tot 30 waarden en geven we een duidelijke melding.
     const targetCommon=2,maxRow=30;
     let countA=Math.max(10,Math.min(maxRow,Math.ceil((targetCommon*k)/a)));
     let countB=Math.max(10,Math.min(maxRow,Math.ceil((targetCommon*k)/b)));
     let ma=Array.from({length:countA},(_,i)=>a*(i+1)),mb=Array.from({length:countB},(_,i)=>b*(i+1));
     let commonMultiples=ma.filter(x=>mb.includes(x));
     let kgvRangeTooLarge=mode!=="ggd"&&commonMultiples.length<1;
     state={g,k,commonFactors,commonMultiples,checked:false};
     const row=(label,kind,side,values)=>`<div class="gk-compare-row"><b class="gk-row-label">${label}</b><div class="gk-row-values">${values.map(x=>`<button type="button" class="gk-token" data-kind="${kind}" data-side="${side}" data-value="${x}" aria-pressed="false">${x}</button>`).join("")}</div></div>`;
     w.querySelector(".gk-instruction").innerHTML=mode==="ggd"?`<strong>1.</strong> Vergelijk de twee rijen met delers. Duid elk getal dat in <b>beide rijen</b> voorkomt in beide rijen aan. <strong>2.</strong> Bepaal daarna de GGD.`:mode==="kgv"?`<strong>1.</strong> Vergelijk de twee rijen met veelvouden. Duid elk getal dat in <b>beide rijen</b> voorkomt in beide rijen aan. <strong>2.</strong> Kies daarna het kleinste gemeenschappelijke veelvoud: de KGV.`:`<strong>1.</strong> Vergelijk telkens de twee rijen en duid de gemeenschappelijke waarden in <b>beide rijen</b> aan. <strong>2.</strong> Bepaal daarna GGD en KGV.`;
     w.querySelector(".gk-visual").innerHTML=`${mode!=="kgv"?`<section class="gk-factor-section gk-bank gk-compare"><strong>Gemeenschappelijke delers zoeken</strong><p class="gk-hint">Vergelijk de rijen. Een gemeenschappelijke deler moet je in beide rijen aanklikken.</p>${row(`Delers van ${a}`,"factor","a",fa)}${row(`Delers van ${b}`,"factor","b",fb)}</section>`:""}${mode!=="ggd"?`<section class="multiples gk-bank gk-compare"><strong>Gemeenschappelijke veelvouden zoeken</strong><p class="gk-hint">Vergelijk de rijen. Een gemeenschappelijk veelvoud moet je in beide rijen aanklikken.</p>${row(`Veelvouden van ${a}`,"multiple","a",ma)}${row(`Veelvouden van ${b}`,"multiple","b",mb)}</section>`:""}`;
     w.querySelectorAll(".gk-token").forEach(btn=>btn.onclick=()=>{if(state.checked)return;btn.classList.toggle("selected");btn.setAttribute("aria-pressed",String(btn.classList.contains("selected")))});
     w.querySelector(".gk-ggd-field").hidden=mode==="kgv";w.querySelector(".gk-kgv-field").hidden=mode==="ggd";
     w.querySelector(".gk-feedback").textContent=kgvRangeTooLarge?`Deze combinatie heeft een KGV dat buiten een bruikbare vergelijkingsrij valt. Kies kleinere of meer verwante getallen, of klik op Nieuwe oefening.`:"Vergelijk de twee rijen zorgvuldig. Duid gemeenschappelijke waarden telkens in beide rijen aan.";
     w.querySelector(".gk-check").disabled=kgvRangeTooLarge;
     w.querySelector(".gk-results").hidden=true;w.querySelector(".gk-retry").hidden=true;w.querySelector(".gk-check").hidden=false;clearAnswers();
   };
   const expectedFor=btn=>btn.dataset.kind==="factor"?state.commonFactors.includes(+btn.dataset.value):state.commonMultiples.includes(+btn.dataset.value);
   const check=()=>{
     let mode=w.querySelector(".gk-mode").value,all=[...w.querySelectorAll(".gk-token")];state.checked=true;
     let selectionsOK=true;
     all.forEach(btn=>{let expected=expectedFor(btn),chosen=btn.classList.contains("selected");btn.classList.remove("correct","wrong","missed");if(chosen&&expected)btn.classList.add("correct");else if(chosen&&!expected){btn.classList.add("wrong");selectionsOK=false}else if(!chosen&&expected){btn.classList.add("missed");selectionsOK=false}});
     let okG=mode==="kgv"||+w.querySelector(".gk-ggd-answer").value===state.g,okK=mode==="ggd"||+w.querySelector(".gk-kgv-answer").value===state.k;
     const expected=all.filter(expectedFor).length,correct=all.filter(btn=>expectedFor(btn)&&btn.classList.contains("selected")).length;
     w.querySelector(".gk-feedback").textContent=selectionsOK&&okG&&okK?`✓ Helemaal juist! Je vond alle ${expected} aanduidingen en bepaalde ${mode==="ggd"?"de GGD":mode==="kgv"?"de KGV":"GGD en KGV"} correct.`:`Nog niet helemaal: ${correct} van ${expected} juiste aanduidingen gevonden. Groen = juist, rood = fout gekozen, oranje = vergeten. Controleer ook je antwoord voor ${mode==="ggd"?"GGD":mode==="kgv"?"KGV":"GGD en KGV"}.`;
     w.querySelector(".gk-retry").hidden=false;
   };
   w.querySelectorAll(".gk-a,.gk-b").forEach(x=>x.oninput=paint);w.querySelector(".gk-mode").onchange=paint;
   const random=()=>{let a,b,tries=0;do{a=pool[Math.floor(Math.random()*pool.length)];b=pool[Math.floor(Math.random()*pool.length)];tries++}while((b===a||((a/gcd(a,b)*b)/a>18)||((a/gcd(a,b)*b)/b>18))&&tries<200);w.querySelector(".gk-a").value=a;w.querySelector(".gk-b").value=b;paint()};
   w.querySelector(".gk-random").onclick=random;w.querySelector(".gk-next").onclick=random;w.querySelector(".gk-check").onclick=check;
   w.querySelector(".gk-retry").onclick=()=>{state.checked=false;w.querySelectorAll(".gk-token").forEach(btn=>btn.classList.remove("correct","wrong","missed"));w.querySelector(".gk-feedback").textContent="Pas je keuzes aan en controleer opnieuw.";w.querySelector(".gk-retry").hidden=true};
   w.querySelector(".gk-show").onclick=()=>{let m=w.querySelector(".gk-mode").value,r=w.querySelector(".gk-results");w.querySelectorAll(".gk-token").forEach(btn=>{btn.classList.remove("wrong","missed");btn.classList.toggle("solution",expectedFor(btn))});r.innerHTML=`${m!=="kgv"?`<div><small>Gemeenschappelijke delers</small><p>${state.commonFactors.join(" · ")}</p><b>De grootste gemeenschappelijke deler is ${state.g} → GGD = ${state.g}</b></div>`:""}${m!=="ggd"?`<div><small>Gemeenschappelijke veelvouden in de zichtbare rijen</small><p>${state.commonMultiples.length?state.commonMultiples.join(" · "):"Nog geen gemeenschappelijk veelvoud zichtbaar"}</p><b>${state.commonMultiples.length?`Het eerste gemeenschappelijke veelvoud is ${state.k} → KGV = ${state.k}`:`Kies een beter vergelijkbare getallencombinatie.`}</b></div>`:""}`;r.hidden=false};
   paint()
 }
 if(type==="ruler"){let r=w.querySelector(".ruler-scale"),lab=w.querySelector(".ruler-scale-label"),rule=w.querySelector(".ruler-tool");r.oninput=()=>{lab.textContent=r.value+"%";rule.style.transform=`scaleX(${r.value/100})`;rule.style.transformOrigin="left center"};r.oninput()}

 if(type==="schedule"){const box=w.querySelector(".schedule"),student=w.querySelector(".schedule-student"),sel=w.querySelector(".schedule-presets"),key="kbs_schedule_presets_v25";const readRows=()=>[...box.querySelectorAll(".schedule-row")].map(r=>({time:r.children[0].value,title:r.children[1].value}));const paintStudent=()=>student.innerHTML=readRows().filter(x=>x.title).map(x=>`<div><time>${x.time}</time><strong>${x.title}</strong></div>`).join("");const bind=()=>{box.querySelectorAll(".schedule-del").forEach(b=>b.onclick=()=>{b.closest(".schedule-row").remove();paintStudent();scheduleSave()});box.querySelectorAll("input").forEach(x=>x.oninput=paintStudent);paintStudent()};const loadPresets=()=>{let p=JSON.parse(localStorage.getItem(key)||"{}");sel.innerHTML=`<option value="">Vaste planning laden…</option>`+Object.keys(p).map(n=>`<option>${n}</option>`).join("")};w.querySelector(".schedule-add").onclick=()=>{box.insertAdjacentHTML("beforeend",`<div class="schedule-row"><input type="time" value="12:00"><input value="Nieuw onderdeel"><button class="schedule-del">×</button></div>`);bind()};w.querySelector(".schedule-clear").onclick=()=>{box.innerHTML="";bind()};w.querySelector(".schedule-savepreset").onclick=()=>{let n=w.querySelector(".schedule-preset-name").value.trim();if(!n)return;let p=JSON.parse(localStorage.getItem(key)||"{}");p[n]=readRows();localStorage.setItem(key,JSON.stringify(p));loadPresets()};sel.onchange=()=>{if(!sel.value)return;let p=JSON.parse(localStorage.getItem(key)||"{}"),rows=p[sel.value]||[];box.innerHTML=rows.map(x=>`<div class="schedule-row"><input type="time" value="${x.time}"><input value="${x.title}"><button class="schedule-del">×</button></div>`).join("");bind()};loadPresets();bind()}

}
function wireTimer(w){
 let d=w.querySelector(".timer-display"),sec=Number(d.dataset.seconds||300),int=null,initial=300;
 const paint=()=>{d.dataset.seconds=sec;d.textContent=String(Math.floor(sec/60)).padStart(2,"0")+":"+String(sec%60).padStart(2,"0")};
 w.querySelector(".tplus").onclick=()=>{sec+=60;initial=sec;paint()};w.querySelector(".tminus").onclick=()=>{sec=Math.max(0,sec-60);initial=sec;paint()};
 w.querySelector(".treset").onclick=()=>{clearInterval(int);sec=initial;paint();w.querySelector(".tstart").textContent="Start"};
 w.querySelector(".tstart").onclick=e=>{if(int){clearInterval(int);int=null;e.target.textContent="Start";return}e.target.textContent="Pauze";int=setInterval(()=>{if(sec<=0){clearInterval(int);int=null;e.target.textContent="Start";d.textContent="KLAAR!";playAlarm();return}sec--;paint()},1000)}
}
function wireCanvas(w){
 const c=w.querySelector("canvas"),ctx=c.getContext("2d");ctx.lineWidth=5;ctx.lineCap="round";ctx.strokeStyle="#082a55";let down=false;
 const pos=e=>{let r=c.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return [(p.clientX-r.left)*c.width/r.width,(p.clientY-r.top)*c.height/r.height]};
 const start=e=>{down=true;let [x,y]=pos(e);ctx.beginPath();ctx.moveTo(x,y);e.preventDefault()},move=e=>{if(!down)return;let[x,y]=pos(e);ctx.lineTo(x,y);ctx.stroke();e.preventDefault()},end=()=>down=false;
 c.onpointerdown=start;c.onpointermove=move;c.onpointerup=end;c.onpointerleave=end;w.querySelector(".erasecanvas").onclick=()=>ctx.clearRect(0,0,c.width,c.height);
}
function makeDraggable(w){/* V50: legacy drag disabled; central pointer-drag handler is authoritative. */}
function rehydrate(){board.querySelectorAll(".widget").forEach(w=>{w.removeAttribute("data-wired");w.__kbsWired=false;const xs=w.querySelectorAll(".widget-bar .remove,.widget-bar [data-action='remove'],.widget-bar .close-widget");if(xs.length>1)[...xs].slice(1).forEach(x=>x.remove());wireWidget(w)});repairLegacyWidgetLayout();requestAnimationFrame(ensureBoardExtent)}

function repairLegacyWidgetLayout(){
 const ws=[...board.querySelectorAll(".widget")];if(ws.length<4)return;
 const crowded=ws.filter((w,i)=>ws.some((x,j)=>j!==i&&Math.abs((parseFloat(w.style.left)||0)-(parseFloat(x.style.left)||0))<70&&Math.abs((parseFloat(w.style.top)||0)-(parseFloat(x.style.top)||0))<70)).length;
 if(crowded<Math.ceil(ws.length*.45))return;
 const placed=[];
 ws.forEach((w,i)=>{
   const bw=Math.max(400,board.clientWidth||1200),cols=Math.max(1,Math.floor((bw-40)/390));
   const x=18+(i%cols)*390,y=18+Math.floor(i/cols)*300;
   w.style.left=Math.min(Math.max(0,bw-(w.offsetWidth||360)-18),x)+"px";
   w.style.top=Math.min(Math.max(0,(board.clientHeight||900)-(w.offsetHeight||220)-18),y)+"px";
   w.style.zIndex=200+i;
   placed.push(w);
 });
 z=Math.max(z,200+ws.length);savePage();scheduleSave();
}
let emptyHintDismissed=sessionStorage.getItem("kbs_empty_hint_dismissed")==="1";
function dismissEmptyHint(){emptyHintDismissed=true;sessionStorage.setItem("kbs_empty_hint_dismissed","1");empty.style.display="none"}
document.querySelector("#emptyDismiss")?.addEventListener("click",dismissEmptyHint);
document.querySelector("#emptyStart")?.addEventListener("click",dismissEmptyHint);
function updateEmpty(){empty.style.display=(!emptyHintDismissed&&!board.querySelector(".widget"))?"flex":"none"}
renderTools();updateEmpty();

// Klasbordstudio focus- en annotatiemodus — V47 robuuste pentool
const ann=document.querySelector("#annotationCanvas"),actx=ann.getContext("2d");
const annotateBtn=document.querySelector("#annotateBtn");
let drawing=false,annotating=false,inkMode="pen",eraseMode=false;
let annotationUndo=[],annotationRedo=[];
const eraserCursor=document.createElement("div");
eraserCursor.className="eraser-cursor";document.body.appendChild(eraserCursor);
function eraserDiameter(){return Math.max(18,(window.KBS_INK_WIDTH||4)*3)}
function updateEraserCursor(e){
 const d=eraserDiameter();eraserCursor.style.width=d+"px";eraserCursor.style.height=d+"px";
 if(e){eraserCursor.style.left=e.clientX+"px";eraserCursor.style.top=e.clientY+"px"}
 eraserCursor.classList.toggle("show",annotating&&eraseMode);
}
function annotationSnapshot(){try{return ann.toDataURL("image/png")}catch(_){return null}}
function pushAnnotationUndo(){const snap=annotationSnapshot();if(snap){annotationUndo.push(snap);if(annotationUndo.length>30)annotationUndo.shift();annotationRedo=[]}}
function restoreAnnotation(snap){actx.clearRect(0,0,ann.width,ann.height);if(!snap)return;const img=new Image();img.onload=()=>actx.drawImage(img,0,0,ann.width,ann.height);img.src=snap}
function undoAnnotation(){if(!annotationUndo.length)return;annotationRedo.push(annotationSnapshot());restoreAnnotation(annotationUndo.pop());saveAnnotationToPage()}
function redoAnnotation(){if(!annotationRedo.length)return;annotationUndo.push(annotationSnapshot());restoreAnnotation(annotationRedo.pop());saveAnnotationToPage()}
function saveAnnotationToPage(){if(typeof pages!=="undefined"&&pages[currentPage])pages[currentPage].annotation=annotationSnapshot()||""}
function clearCurrentAnnotation(){if(!confirm("Alle tekeningen en markeringen op deze pagina wissen?"))return;pushAnnotationUndo();actx.clearRect(0,0,ann.width,ann.height);saveAnnotationToPage();scheduleSave();notify("Blad leeggemaakt");}

function annPos(e){let r=ann.getBoundingClientRect();return [(e.clientX-r.left)*ann.width/r.width,(e.clientY-r.top)*ann.height/r.height]}
function beginInk(e){
 if(!annotating)return;
 pushAnnotationUndo();drawing=true;ann.setPointerCapture?.(e.pointerId);
 let[x,y]=annPos(e);actx.beginPath();actx.moveTo(x,y);
}
function moveInk(e){
 if(!annotating||!drawing)return;
 let[x,y]=annPos(e);
 actx.save();
 actx.lineCap="round";actx.lineJoin="round";
 if(eraseMode){
   actx.globalCompositeOperation="destination-out";
   actx.lineWidth=eraserDiameter();
   actx.globalAlpha=1;
 }else{
   actx.globalCompositeOperation="source-over";
   actx.strokeStyle=window.KBS_INK_COLOR||"#fe2020";
   actx.lineWidth=window.KBS_INK_WIDTH||4;
   actx.globalAlpha=window.KBS_INK_ALPHA??1;
 }
 actx.lineTo(x,y);actx.stroke();actx.restore();
 actx.beginPath();actx.moveTo(x,y);
 e.preventDefault();
}
function endInk(e){if(drawing){saveAnnotationToPage();scheduleSave()}drawing=false;try{ann.releasePointerCapture?.(e.pointerId)}catch(_){} actx.globalCompositeOperation="source-over";actx.globalAlpha=1}
ann.onpointerdown=beginInk;
ann.onpointermove=e=>{updateEraserCursor(e);moveInk(e)};
ann.onpointerup=endInk;
ann.onpointercancel=endInk;
ann.onpointerleave=e=>{eraserCursor.classList.remove("show");if(drawing&&e.buttons===0)endInk(e)};
ann.onpointerenter=e=>updateEraserCursor(e);
annotateBtn.onclick=()=>{
 annotating=!annotating;
 ann.classList.toggle("active",annotating);
 annotateBtn.classList.toggle("active",annotating);
 if(!annotating){drawing=false;eraserCursor.classList.remove("show")}else updateEraserCursor();
};
const focus=document.querySelector("#focusOverlay");function toggleFocus(){focus.classList.toggle("show")}document.querySelector("#blurBtn").onclick=toggleFocus;focus.onclick=toggleFocus;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&focus.classList.contains("show"))focus.classList.remove("show");if(e.key==="1"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName))toggleFocus();if(e.key.toLowerCase()==="b"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName))document.querySelector("#sidebar").classList.toggle("open")});

// Pagina's
let pages=[{name:"Pagina 1",html:"",annotation:""}],currentPage=0;
const pageTabs=document.querySelector("#pageTabs");
function savePage(){if(!pages[currentPage])return;saveAnnotationToPage();pages[currentPage].html=[...board.querySelectorAll(".widget")].map(w=>{let clone=w.cloneNode(true);clone.removeAttribute("data-wired");clone.classList.remove("selected","widget-attention","board-fullscreen");return clone.outerHTML}).join("")}
function loadPage(i){if(i<0||i>=pages.length)return;savePage();currentPage=i;annotationUndo=[];annotationRedo=[];board.scrollLeft=0;board.scrollTop=0;board.querySelectorAll(".widget").forEach(w=>w.remove());board.insertAdjacentHTML("beforeend",pages[i].html||"");rehydrate();restoreAnnotation(pages[i].annotation||"");renderPages();updateEmpty();scheduleSave()}

function addPage(name){
 savePage(); const pageName=(name&&String(name).trim())||`Pagina ${pages.length+1}`; pages.push({name:pageName,html:"",annotation:""}); currentPage=pages.length-1; board.querySelectorAll(".widget").forEach(w=>w.remove()); actx.clearRect(0,0,ann.width,ann.height);annotationUndo=[];annotationRedo=[]; renderPages();updateEmpty();saveAll();scheduleSave();notify(`${pageName} toegevoegd`);
}
const addPageBtn=document.querySelector("#addPageBtn");
if(addPageBtn)addPageBtn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();addPage()});

// V68 — vaste navigatieknoppen in de bovenbalk.
// De knoppen werken altijd op de actuele pagina en respecteren de grenzen van de paginalijst.
const prevPageBtn=document.querySelector("#prevPageBtn");
const nextPageBtn=document.querySelector("#nextPageBtn");
function updateTopPageButtons(){
  if(prevPageBtn){prevPageBtn.disabled=currentPage<=0;prevPageBtn.setAttribute("aria-disabled",String(currentPage<=0));}
  if(nextPageBtn){nextPageBtn.disabled=currentPage>=pages.length-1;nextPageBtn.setAttribute("aria-disabled",String(currentPage>=pages.length-1));}
}
if(prevPageBtn)prevPageBtn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();if(currentPage>0)loadPage(currentPage-1)});
if(nextPageBtn)nextPageBtn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();if(currentPage<pages.length-1)loadPage(currentPage+1)});

function deletePageAt(index){
 if(!Number.isInteger(index)||index<0||index>=pages.length||pages.length<=1)return;
 const label=pages[index]?.name||`Pagina ${index+1}`;
 if(!confirm(`Wil je "${label}" verwijderen?`))return;
 savePage();
 saveUndo();
 const deletingCurrent=index===currentPage;
 pages.splice(index,1);
 if(currentPage>index)currentPage--;
 else if(deletingCurrent)currentPage=Math.min(index,pages.length-1);
 currentPage=Math.max(0,Math.min(currentPage,pages.length-1));
 board.querySelectorAll(".widget").forEach(w=>w.remove());
 board.insertAdjacentHTML("beforeend",pages[currentPage]?.html||"");
 restoreAnnotation(pages[currentPage]?.annotation||"");annotationUndo=[];annotationRedo=[];
 rehydrate();
 renderPages();
 updateEmpty();
 try{
   localStorage.setItem("kbs_pages",JSON.stringify(pages));
   localStorage.setItem("kbs_current",String(currentPage));
   document.querySelector("#autosaveStatus").textContent="Automatisch opgeslagen";
 }catch(e){}
 scheduleSave();
 notify(`${label} verwijderd`);
}

function renamePage(index){if(index<0||index>=pages.length)return;const old=pages[index]?.name||`Pagina ${index+1}`;const v=prompt("Naam van deze pagina:",old);if(v===null)return;pages[index].name=v.trim()||`Pagina ${index+1}`;renderPages();scheduleSave();notify("Paginanaam gewijzigd")}
function renderPages(){updateTopPageButtons();pageTabs.innerHTML="";const name=pages[currentPage]?.name||`Pagina ${currentPage+1}`;const label=document.querySelector("#pageLabel");if(label){label.textContent=name;label.title="Klik om te hernoemen";label.onclick=()=>renamePage(currentPage)}pages.forEach((p,i)=>{const tab=document.createElement("div");tab.className="page-tab-wrap"+(i===currentPage?" active":"");const open=document.createElement("button");open.type="button";open.className="page-tab"+(i===currentPage?" active":"");open.textContent=p.name||`Pagina ${i+1}`;open.ondblclick=e=>{e.preventDefault();e.stopPropagation();renamePage(i)};open.onclick=()=>{if(i===currentPage)return;loadPage(i)};const edit=document.createElement("button");edit.type="button";edit.className="page-tab-edit";edit.textContent="✎";edit.title="Paginanaam wijzigen";edit.onclick=e=>{e.preventDefault();e.stopPropagation();renamePage(i)};const del=document.createElement("button");del.type="button";del.className="page-tab-delete";del.textContent="×";del.title=`Verwijder ${p.name||`Pagina ${i+1}`}`;del.disabled=pages.length<=1;del.dataset.pageIndex=String(i);del.onclick=e=>{e.preventDefault();e.stopPropagation()};tab.append(open,edit,del);pageTabs.appendChild(tab)})}

pageTabs.addEventListener("click",e=>{
 const del=e.target.closest(".page-tab-delete");
 if(!del)return;
 e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
 if(del.disabled||pages.length<=1)return;
 deletePageAt(Number(del.dataset.pageIndex));
},true);

function getClassNames(){return (localStorage.getItem("kbs_class")||"Emma\nNoor\nLars\nMilan\nLina\nAdam\nFinn\nLou").split("\n").map(x=>x.trim()).filter(Boolean)}
const toast=document.querySelector("#toast");function notify(s){toast.textContent=s;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1600)}
const classBtn=document.querySelector("#classBtn");
const classModal=document.querySelector("#classModal");
const classListEl=document.querySelector("#classList");
const saveClassBtn=document.querySelector("#saveClassBtn");
if(classBtn&&classModal&&classListEl){
  classBtn.addEventListener("click",e=>{e.preventDefault();classListEl.value=getClassNames().join("\n");classModal.classList.add("show")});
}
if(saveClassBtn&&classModal&&classListEl){
  saveClassBtn.addEventListener("click",e=>{e.preventDefault();localStorage.setItem("kbs_class",classListEl.value);classModal.classList.remove("show");notify("Klaslijst bewaard")});
}
document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click",e=>{
    e.preventDefault();e.stopPropagation();
    const modal=document.getElementById(btn.dataset.close);
    if(modal)modal.classList.remove("show");
  });
});
document.querySelectorAll(".modal").forEach(modal=>{
  modal.addEventListener("pointerdown",e=>{if(e.target===modal)modal.classList.remove("show")});
});

let saveTimer;
function scheduleSave(){clearTimeout(saveTimer);document.querySelector("#autosaveStatus").textContent="Opslaan…";saveTimer=setTimeout(saveAll,350)}
function saveAll(){try{savePage();localStorage.setItem("kbs_pages",JSON.stringify(pages));localStorage.setItem("kbs_current",currentPage);localStorage.setItem("kbs_title",document.querySelector("#boardTitle").value);document.querySelector("#autosaveStatus").textContent="Automatisch opgeslagen"}catch(e){}}
document.querySelector("#saveBtn").onclick=()=>{saveAll();notify("Bord opgeslagen")};
document.querySelector("#boardTitle").addEventListener("input",scheduleSave);
board.addEventListener("input",scheduleSave);board.addEventListener("click",()=>setTimeout(scheduleSave,50));

try{let saved=JSON.parse(localStorage.getItem("kbs_pages")||"null");if(saved?.length){pages=saved;currentPage=Math.min(Number(localStorage.getItem("kbs_current")||0),pages.length-1);board.querySelectorAll(".widget").forEach(w=>w.remove());board.insertAdjacentHTML("beforeend",pages[currentPage].html||"");rehydrate();restoreAnnotation(pages[currentPage].annotation||"");renderPages();updateEmpty()}let title=localStorage.getItem("kbs_title");if(title){document.querySelector("#boardTitle").value=title;document.querySelector("#boardHeading").textContent=title}}catch(e){}

document.querySelector("#presentBtn").onclick=()=>{document.body.classList.toggle("presenting");document.querySelector("#presentBtn").textContent=document.body.classList.contains("presenting")?"✕ Stop presenteren":"▶ Presenteren"};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&document.body.classList.contains("presenting"))document.body.classList.remove("presenting")});

const templates=[
 {name:"Dagstart lager",desc:"Datum, slimme dagstart, planning en stemniveau",ids:["calendar","daystartpro","schedule","voice"]},
 {name:"Rekenles",desc:"Getallenlijn, MAB, honderdveld en timer",ids:["numberline","base10","hundreds","timer"]},
 {name:"Tafels oefenen",desc:"Maaltafelflitser, scorebord en timer",ids:["multiplication","scoreboard","timer"]},
 {name:"Zelfstandig werk",desc:"Stiltebord, timer en stappenplan",ids:["silence","timer","directions"]},
 {name:"Klassengesprek",desc:"Vraag van de dag, naamkiezer en poll",ids:["question","namen","poll"]},
 {name:"Lesafsluiting",desc:"Exit ticket, poll en positieve punten",ids:["exit","poll","points"]}
];
const tg=document.querySelector("#templateGrid");tg.innerHTML=templates.map((t,i)=>`<button class="template-card" data-i="${i}"><strong>${t.name}</strong><span>${t.desc}</span><small>${t.ids.length} modules</small></button>`).join("");
document.querySelector("#templateBtn").onclick=()=>document.querySelector("#templateModal").classList.add("show");
function applyBoardTemplate(t){
 if(!t||!Array.isArray(t.ids))return;
 savePage();
 pages.push({name:t.name,html:""});
 currentPage=pages.length-1;
 board.querySelectorAll(".widget").forEach(w=>w.remove());
 const created=[];
 t.ids.forEach(id=>{
   const w=createBoardWidget(id,{templateBatch:true,forceNew:true});
   if(w)created.push(w);
 });
 requestAnimationFrame(()=>requestAnimationFrame(()=>{arrangeTemplateWidgets(created);savePage();pages[currentPage].html=[...board.querySelectorAll(".widget")].map(w=>w.outerHTML).join("");saveAll();renderPages()}));
 document.querySelector("#templateModal").classList.remove("show");
 notify(`${t.name}: ${created.length} modules toegevoegd`);
}
tg.querySelectorAll("button").forEach(b=>b.onclick=()=>{
 const t=templates[Number(b.dataset.i)];
 applyBoardTemplate(t);
});
let bgIndex=0,bgs=["","linear-gradient(135deg,#ffffff,#eef8fc)","linear-gradient(135deg,#fffaf2,#fff3d7)","linear-gradient(135deg,#f5f0ff,#eef7ff)"];
document.querySelector("#bgBtn").onclick=()=>{bgIndex=(bgIndex+1)%bgs.length;board.style.background=bgs[bgIndex]||"";if(!bgIndex)board.classList.add("grid-on");else board.classList.remove("grid-on");scheduleSave()};

// Selectie en automatisch ordenen
board.addEventListener("pointerdown",e=>{let w=e.target.closest(".widget");board.querySelectorAll(".widget").forEach(x=>x.classList.remove("selected"));if(w)w.classList.add("selected")});
document.querySelector("#fitBtn").onclick=()=>{
 const ws=[...board.querySelectorAll(".widget")];if(!ws.length)return;
 const gap=18,pad=20,available=Math.max(720,board.clientWidth-40);
 const cols=available>=1450?3:available>=820?2:1;
 const width=Math.max(360,Math.min(620,(available-gap*(cols-1))/cols));
 let rowY=pad,row=[];
 ws.forEach((w,i)=>{
   const col=i%cols;
   if(col===0&&i>0){rowY+=Math.max(...row.map(x=>x.offsetHeight||320))+gap;row=[]}
   w.style.width=width+"px";
   const natural=Math.max(240,Math.min(520,w.querySelector(".widget-body")?.scrollHeight+78||320));
   w.style.height=natural+"px";
   w.style.left=(pad+col*(width+gap))+"px";w.style.top=rowY+"px";
   row.push(w);
 });
 ensureBoardExtent();board.scrollTo({left:0,top:0,behavior:"smooth"});savePage();scheduleSave();notify("Bord overzichtelijk geordend");
};

// Export/import lokaal bordbestand
document.querySelector("#exportBtn").onclick=()=>{savePage();let data={version:5,title:document.querySelector("#boardTitle").value,pages,classList:getClassNames()},blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=(data.title||"klasbord").replace(/[^a-z0-9-_]+/gi,"_")+".json";a.click();URL.revokeObjectURL(a.href);notify("Bord geëxporteerd")};
document.querySelector("#importBtn").onclick=()=>document.querySelector("#importFile").click();
document.querySelector("#importFile").onchange=e=>{let f=e.target.files[0];if(!f)return;let r=new FileReader();r.onload=()=>{try{let d=JSON.parse(r.result);if(!Array.isArray(d.pages))throw 0;pages=d.pages;currentPage=0;document.querySelector("#boardTitle").value=d.title||"Geïmporteerd bord";if(d.classList)localStorage.setItem("kbs_class",d.classList.join("\n"));board.querySelectorAll(".widget").forEach(w=>w.remove());board.insertAdjacentHTML("beforeend",pages[0].html||"");rehydrate();renderPages();scheduleSave();notify("Bord geïmporteerd")}catch(err){notify("Dit bordbestand kon niet worden geopend")}};r.readAsText(f)};

// Presentatiebediening
document.querySelector("#pExit").onclick=()=>document.body.classList.remove("presenting");
document.querySelector("#pPrev").onclick=()=>{if(currentPage>0)loadPage(currentPage-1)};
document.querySelector("#pNext").onclick=()=>{if(currentPage<pages.length-1)loadPage(currentPage+1)};

// Keyboard: pijlen tussen pagina's tijdens presentatie.
document.addEventListener("keydown",e=>{if(document.body.classList.contains("presenting")&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){if(e.key==="ArrowRight"&&currentPage<pages.length-1)loadPage(currentPage+1);if(e.key==="ArrowLeft"&&currentPage>0)loadPage(currentPage-1)}});

// Synchroniseer centrale klaslijst met bestaande naamkiezer/groepen wanneer een widget nieuw wordt geopend.
const originalAddWidget=addWidget;
addWidget=function(id){originalAddWidget(id);let w=[...board.querySelectorAll(".widget")].at(-1);if(!w)return;if(id==="namen"||id==="groups"){let ta=w.querySelector("textarea");if(ta)ta.value=getClassNames().join("\n")}scheduleSave()};

window.addEventListener("error",e=>console.error("Klasbordstudio runtimefout:",e.message,e.filename,e.lineno));

window.KBS_INK_COLOR=window.KBS_INK_COLOR||"#fe2020";
window.KBS_INK_WIDTH=window.KBS_INK_WIDTH||4;
window.KBS_INK_ALPHA=window.KBS_INK_ALPHA||1;
const inkPalette=document.createElement("div");
inkPalette.className="ink-palette";
inkPalette.innerHTML=`<button type="button" class="ink-mode active" data-mode="pen">✎ Pen</button><button type="button" class="ink-mode" data-mode="highlight">▰ Markeer</button><button type="button" class="ink-mode ink-eraser" data-mode="erase" aria-label="Gom">⌫ Gom</button>${["#fe2020","#033663","#28b9aa","#fee020","#111111","#ffffff"].map(c=>`<button type="button" class="ink-color" data-c="${c}" style="--c:${c}" aria-label="Inktkleur"></button>`).join("")}<label class="ink-size-wrap" title="Grootte"><span class="ink-size-preview" aria-hidden="true"></span><input class="ink-size" type="range" min="2" max="32" value="4" step="1" aria-label="Pen- of gomgrootte"><output class="ink-size-value">4</output></label><button type="button" class="ink-action ink-undo" title="Ongedaan maken">↶</button><button type="button" class="ink-action ink-redo" title="Opnieuw">↷</button><button type="button" class="ink-action ink-clear" title="Blad leegmaken">🗑 Blad leegmaken</button>`;
document.body.appendChild(inkPalette);
inkPalette.querySelectorAll(".ink-color").forEach(b=>b.onclick=()=>{window.KBS_INK_COLOR=b.dataset.c;eraseMode=false;inkMode="pen";ann.classList.remove("eraser-mode");inkPalette.querySelectorAll(".ink-mode").forEach(x=>x.classList.toggle("active",x.dataset.mode==="pen"))});
inkPalette.querySelectorAll(".ink-mode").forEach(b=>b.onclick=()=>{
 inkMode=b.dataset.mode;
 eraseMode=inkMode==="erase";
 ann.classList.toggle("eraser-mode",eraseMode);updateEraserCursor();if(typeof applyInkSize==="function")applyInkSize();
 inkPalette.querySelectorAll(".ink-mode").forEach(x=>x.classList.toggle("active",x===b));
 if(inkMode==="highlight"){window.KBS_INK_ALPHA=.28;window.KBS_INK_WIDTH=18}
 else if(inkMode==="pen"){window.KBS_INK_ALPHA=1;window.KBS_INK_WIDTH=+inkPalette.querySelector(".ink-size").value}
});
const inkSize=inkPalette.querySelector(".ink-size"),inkSizeValue=inkPalette.querySelector(".ink-size-value"),inkSizePreview=inkPalette.querySelector(".ink-size-preview");
function applyInkSize(){
 const value=Math.max(2,Math.min(32,+inkSize.value||4));
 window.KBS_INK_WIDTH=value;
 inkSizeValue.value=inkSizeValue.textContent=value;
 const previewSize=Math.max(6,Math.min(26,eraseMode?value*0.75:value));
 inkSizePreview.style.width=previewSize+"px";inkSizePreview.style.height=previewSize+"px";
 updateEraserCursor();
}
["input","change"].forEach(type=>inkSize.addEventListener(type,applyInkSize));
inkSize.addEventListener("pointerdown",e=>e.stopPropagation());
inkSize.addEventListener("pointermove",e=>e.stopPropagation());
inkSize.addEventListener("click",e=>e.stopPropagation());
applyInkSize();
inkPalette.querySelector(".ink-undo").onclick=undoAnnotation;
inkPalette.querySelector(".ink-redo").onclick=redoAnnotation;
inkPalette.querySelector(".ink-clear").onclick=clearCurrentAnnotation;
annotateBtn.addEventListener("click",()=>inkPalette.classList.toggle("show",annotating));

function initGsapIcons(){if(!window.gsap)return;document.querySelectorAll(".gsap-icon-btn,.cat,.tool-card").forEach(el=>{let img=el.querySelector("img");if(!img)return;el.addEventListener("mouseenter",()=>gsap.to(img,{scale:1.08,y:-2,duration:.18,ease:"power2.out"}));el.addEventListener("mouseleave",()=>gsap.to(img,{scale:1,y:0,rotation:0,duration:.22,ease:"power2.out"}));el.addEventListener("pointerdown",()=>gsap.to(img,{scale:.92,duration:.08}));el.addEventListener("pointerup",()=>gsap.to(img,{scale:1.06,duration:.12}))})}window.addEventListener("load",initGsapIcons);


function arrangeTemplateWidgets(widgetList){
 const ws=(Array.isArray(widgetList)&&widgetList.length?widgetList:[...board.querySelectorAll(".widget")]).filter(w=>w&&!w.classList.contains("spotlight-widget"));
 if(!ws.length)return;
 const pad=18,gap=18,bw=Math.max(700,board.clientWidth||1200);
 const cols=ws.length===1?1:(bw>=1100?2:1);
 const cellW=Math.floor((bw-pad*2-gap*(cols-1))/cols);
 const rowHeights=[];
 ws.forEach((w,i)=>{
   const row=Math.floor(i/cols);
   rowHeights[row]=Math.max(rowHeights[row]||0,Math.max(260,w.offsetHeight||300));
 });
 let y=pad;
 ws.forEach((w,i)=>{
   const row=Math.floor(i/cols),col=i%cols;
   if(i>0&&col===0)y+=rowHeights[row-1]+gap;
   w.style.left=(pad+col*(cellW+gap))+"px";
   w.style.top=y+"px";
   w.style.width=cellW+"px";
   w.style.zIndex=100+i;
   w.style.visibility="visible";
   w.style.opacity="1";
 });
 const total=pad+rowHeights.reduce((a,h)=>a+h,0)+gap*Math.max(0,rowHeights.length-1)+pad;
 board.style.minHeight=Math.max(total,board.clientHeight||650)+"px";
 savePage();scheduleSave();
}

