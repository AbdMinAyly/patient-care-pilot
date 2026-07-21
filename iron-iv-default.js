// IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
(function(){
'use strict';
const previousRender=window.renderIvIronTool;
if(typeof previousRender!=='function')return;
window.renderIvIronTool=function(){
  const result=previousRender.apply(this,arguments);
  const select=document.getElementById('iv-product-preset');
  if(select){
    const ironSucrose=select.querySelector('option[value="sucrose"]');
    if(ironSucrose)select.prepend(ironSucrose);
    select.value='sucrose';
    select.dispatchEvent(new Event('change',{bubbles:true}));
  }
  return result;
};
})();
