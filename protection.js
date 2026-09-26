/* Klasbordstudio V67 — client-side kopieerbeveiliging.
   Dit is een afschrikkingslaag, geen cryptografische broncodebeveiliging. */
(()=>{
  'use strict';
  const editable = (target) => {
    if (!(target instanceof Element)) return false;
    return !!target.closest('input,textarea,[contenteditable="true"],.allow-copy');
  };
  const interactiveDrag = (target) => {
    if (!(target instanceof Element)) return false;
    return !!target.closest('[draggable="true"],.draggable,.drag-handle,.resize-handle,canvas');
  };
  document.documentElement.classList.add('kbs-protected');
  const arm=()=>document.body?.classList.add('kbs-copy-protected');
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',arm,{once:true}); else arm();

  // Contextmenu buiten echte invoervelden blokkeren. Zo blijft tekstbewerking voor de leerkracht bruikbaar.
  document.addEventListener('contextmenu',(e)=>{ if(!editable(e.target)) e.preventDefault(); },{capture:true});

  // Kopiëren/knippen alleen blokkeren buiten invoervelden en expliciet toegestane zones.
  document.addEventListener('copy',(e)=>{ if(!editable(e.target)) e.preventDefault(); },{capture:true});
  document.addEventListener('cut',(e)=>{ if(!editable(e.target)) e.preventDefault(); },{capture:true});
  document.addEventListener('selectstart',(e)=>{ if(!editable(e.target)) e.preventDefault(); },{capture:true});

  // Voorkom dat losse assets als bestand uit de interface worden gesleept; functionele drag-elementen blijven werken.
  document.addEventListener('dragstart',(e)=>{
    const t=e.target;
    if(t instanceof HTMLImageElement && !interactiveDrag(t)) e.preventDefault();
  },{capture:true});

  document.addEventListener('keydown',(e)=>{
    const key=(e.key||'').toLowerCase();
    const mod=e.ctrlKey||e.metaKey;
    // In invoervelden blijven normale tekstcommando's (kopiëren/plakken/knippen) werken.
    if(editable(e.target) && ['a','c','v','x','z','y'].includes(key)) return;
    const blocked =
      e.key==='F12' ||
      (mod && ['s','u'].includes(key)) ||
      (mod && e.shiftKey && ['i','j','c'].includes(key));
    if(blocked){ e.preventDefault(); e.stopPropagation(); }
  },{capture:true});
})();
