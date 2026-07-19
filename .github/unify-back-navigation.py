# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_path=Path('app.js')
css_path=Path('styles.css')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

# One shared back-control renderer.
anchor="function renderDetailNavigation(area,item){"
helper="""function renderBackControl(href,label,mode='neutral',attrs=''){
  return `<a class="detail-back back-control ${esc(mode)}" href="${esc(href)}" ${attrs}><span class="back-control-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M10.5 6.5 5 12l5.5 5.5M6 12h8.25a4.75 4.75 0 0 1 0 9.5H12"/></svg></span><span>${esc(label)}</span></a>`;
}
"""
if helper not in app:
    app=app.replace(anchor,helper+anchor)

# Replace detail-navigation implementation.
app=re.sub(r"function renderDetailNavigation\(area,item\)\{.*?\n\}","""function renderDetailNavigation(area,item){
  const labels=DATA.ui.clarity||{};
  if(area==='shine')return renderBackControl('#/shine',labels.backToShine||'SHINE home','shine');
  if(area==='heal')return renderBackControl('#/heal',labels.backToHeal||'HEAL home','heal');
  const sectionId=item?.sectionId||'';
  const sectionTitle=item?.section||area.toUpperCase();
  const prefix=labels.backToSectionPrefix||'Back to';
  return renderBackControl(`#/${area}/${sectionId}`,`${prefix} ${sectionTitle}`,area);
}""",app,count=1,flags=re.S)

# Section pages.
app=app.replace("<a class=\"detail-back\" href=\"#/${area}\">← ${esc((DATA.ui.clarity.backToSectionPrefix||'← Back to')+' '+area.toUpperCase())}</a>","${renderBackControl(`#/${area}`,`${DATA.ui.clarity.backToSectionPrefix||'Back to'} ${area.toUpperCase()} home`,area)}")
app=app.replace("<a class=\"detail-back\" href=\"#/${area}\">← ${esc((DATA.ui.clarity.backToSectionPrefix||'Back to')+' '+area.toUpperCase())}</a>","${renderBackControl(`#/${area}`,`${DATA.ui.clarity.backToSectionPrefix||'Back to'} ${area.toUpperCase()} home`,area)}")

# Find and guide utility pages.
app=re.sub(r"<a class=\"detail-back no-print\" href=\"\$\{esc\(findOrigin\)\}\" data-find-back=\"1\">.*?</a>","${renderBackControl(findOrigin,String(s.backTo).replace('{page}',utilityBackLabel(findOrigin)),utilityModeFromHash(findOrigin)||'neutral','data-find-back=\"1\" class=\"no-print\"')}",app,count=1)
app=re.sub(r"<a class=\"detail-back no-print\" href=\"\$\{esc\(guideOrigin\)\}\" data-guide-back=\"1\">.*?</a>","${renderBackControl(guideOrigin,String(g.labels.backTo).replace('{page}',guideOrigin==='#/find'?DATA.search.title:utilityBackLabel(guideOrigin)),utilityModeFromHash(guideOrigin)||'neutral','data-guide-back=\"1\" class=\"no-print\"')}",app,count=1)

# The attrs argument should add attributes only, not a second class. Normalize generated class duplication.
app=app.replace(" ${attrs}>"," ${attrs}>")

# Add top-level back controls to enterable utility/sub-pages.
app=app.replace("<section class=\"detail heal diet-builder\">\n    <p class=\"eyebrow\">HEAL / DIET</p>","<section class=\"detail heal diet-builder\">\n    ${renderBackControl('#/heal','HEAL home','heal')}\n    <p class=\"eyebrow\">HEAL / DIET</p>")
app=app.replace("<div class=\"screen shine-path-screen\">\n    <section class=\"shine-path-hero\">","<div class=\"screen shine-path-screen\">\n    ${renderBackControl('#/plan','Your Plan','summary')}\n    <section class=\"shine-path-hero\">")

# Plan details/core pages: inject immediately after screen wrapper if not already present.
app=app.replace("app.innerHTML=`<div class=\"screen\">${renderShineFocusBar()}${printSafetyNotice()}<section class=\"detail plan-detail", "app.innerHTML=`<div class=\"screen\">${renderBackControl('#/plan','Your Plan','summary')}${renderShineFocusBar()}${printSafetyNotice()}<section class=\"detail plan-detail")
app=app.replace("app.innerHTML=`<div class=\"screen\">${renderShineFocusBar()}<section class=\"detail plan-detail", "app.innerHTML=`<div class=\"screen\">${renderBackControl('#/plan','Your Plan','summary')}${renderShineFocusBar()}<section class=\"detail plan-detail")

# Remove duplicate bottom SHINE Path back action; keep print action.
app=app.replace("<a class=\"btn ghost button-link\" href=\"#/plan\">${esc(config.backButton)}</a>","")

# Remove raw arrow characters from controlled labels at runtime.
app=app.replace("labels.backToShine||'← Back to SHINE'","labels.backToShine||'SHINE home'")
app=app.replace("labels.backToSectionPrefix||'← Back to'","labels.backToSectionPrefix||'Back to'")

# Programmatic heading focus remains accessible without a giant visual outline.
app=re.sub(r"function focusPageHeading\(\)\{.*?\n\}","""function focusPageHeading(){
  const heading=app.querySelector('h1,h2');
  if(!heading)return;
  heading.setAttribute('tabindex','-1');
  heading.classList.add('programmatic-page-focus');
  heading.focus({preventScroll:true});
}""",app,count=1,flags=re.S)

# Shared component styling only; avoid another one-off back system.
block="""

/* Unified enterable-page navigation */
.programmatic-page-focus:focus{outline:none}
.back-control{
  --back-accent:#475467;
  display:inline-flex;
  align-items:center;
  gap:9px;
  width:max-content;
  max-width:100%;
  min-height:44px;
  margin:0 0 14px;
  padding:8px 13px 8px 9px;
  border:1px solid color-mix(in srgb,var(--back-accent) 24%,#d9dee7);
  border-radius:999px;
  background:color-mix(in srgb,var(--back-accent) 7%,#fff);
  color:var(--back-accent);
  box-shadow:0 5px 14px rgba(17,24,39,.05);
  font-size:.86rem;
  font-weight:950;
  line-height:1.15;
  text-decoration:none;
  transition:transform .16s ease,background .16s ease,border-color .16s ease,box-shadow .16s ease;
}
.back-control.shine{--back-accent:var(--shine)}
.back-control.heal{--back-accent:#8a6200}
.back-control.dr{--back-accent:var(--dr)}
.back-control.summary{--back-accent:var(--summary)}
.back-control-icon{display:grid;place-items:center;flex:0 0 32px;width:32px;height:32px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--back-accent) 18%,#e5e7eb)}
.back-control-icon svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.back-control:hover{transform:translateY(-1px);background:color-mix(in srgb,var(--back-accent) 11%,#fff);border-color:color-mix(in srgb,var(--back-accent) 40%,#d9dee7);box-shadow:0 8px 18px rgba(17,24,39,.08)}
.back-control:focus-visible{outline:3px solid color-mix(in srgb,var(--back-accent) 48%,transparent);outline-offset:3px}
@media(max-width:430px){.back-control{width:100%;justify-content:flex-start;margin-bottom:12px}}
@media print{.back-control{display:none!important}}
"""
if '/* Unified enterable-page navigation */' not in css:
    css += block

# Clean old duplicate detail-back decoration rules so one system owns presentation.
css=re.sub(r"\n/\* Unified back navigation UI \*/.*?(?=\n/\*|\Z)","",css,flags=re.S)

# History note.
note="""

### Unified back-navigation pattern

- Every enterable subpage uses one shared icon-and-label back control.
- Raw arrow characters and mixed back-link treatments were removed.
- HEAL details and Diet Builder return to HEAL home; DR details return to their section; SHINE topics return to SHINE; Plan subpages return to Your Plan; Find and Iron Guide preserve their origin.
- Programmatic page-heading focus remains available to assistive technology without drawing a large initial outline.
- The existing `.detail-back` pattern was consolidated rather than duplicated.
"""
if '### Unified back-navigation pattern' not in history:
    history += note

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
