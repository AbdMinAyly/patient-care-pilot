# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_p=Path('app.js'); css_p=Path('styles.css'); hist_p=Path('docs/HISTORY.md')
app=app_p.read_text(encoding='utf-8'); css=css_p.read_text(encoding='utf-8'); hist=hist_p.read_text(encoding='utf-8')

helper="""function renderBackControl(href,label,mode='neutral',attrs=''){
  return `<a class="detail-back back-control ${esc(mode)}" href="${esc(href)}" ${attrs}><span class="back-control-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M10.5 6.5 5 12l5.5 5.5M6 12h8.25a4.75 4.75 0 0 1 0 9.5H12"/></svg></span><span>${esc(label)}</span></a>`;
}
"""
if 'function renderBackControl' not in app:
    app=app.replace('function renderDetailNavigation(area,item){',helper+'function renderDetailNavigation(area,item){')

app=re.sub(r"function renderDetailNavigation\(area,item\)\{.*?\n\}","""function renderDetailNavigation(area,item){
  const labels=DATA.ui.clarity||{};
  if(area==='shine')return renderBackControl('#/shine',labels.backToShine||'SHINE home','shine');
  const sectionId=item?.sectionId||'';
  const sectionTitle=item?.section||area.toUpperCase();
  return renderBackControl(`#/${area}/${sectionId}`,sectionTitle,area);
}""",app,count=1,flags=re.S)

app=app.replace("<a class=\"detail-back\" href=\"#/${area}\">← ${esc((DATA.ui.clarity.backToSectionPrefix||'← Back to')+' '+area.toUpperCase())}</a>","${renderBackControl(`#/${area}`,`${area.toUpperCase()} home`,area)}")
app=app.replace("<a class=\"detail-back\" href=\"#/${area}\">← ${esc((DATA.ui.clarity.backToSectionPrefix||'Back to')+' '+area.toUpperCase())}</a>","${renderBackControl(`#/${area}`,`${area.toUpperCase()} home`,area)}")

app=app.replace("<section class=\"detail heal diet-builder\">\n    <p class=\"eyebrow\">HEAL / DIET</p>","<section class=\"detail heal diet-builder\">\n    ${renderBackControl('#/heal','HEAL home','heal')}\n    <p class=\"eyebrow\">HEAL / DIET</p>")

app=app.replace("<a class=\"detail-back no-print\" href=\"${esc(findOrigin)}\" data-find-back=\"1\">← ${esc(String(s.backTo).replace('{page}',utilityBackLabel(findOrigin)))}</a>","${renderBackControl(findOrigin,String(s.backTo).replace('{page}',utilityBackLabel(findOrigin)),utilityModeFromHash(findOrigin)||'neutral','data-find-back=\"1\"')}")
app=app.replace("<a class=\"detail-back no-print\" href=\"${esc(guideOrigin)}\" data-guide-back=\"1\">← ${esc(String(g.labels.backTo).replace('{page}',guideOrigin==='#/find'?DATA.search.title:utilityBackLabel(guideOrigin)))}</a>","${renderBackControl(guideOrigin,String(g.labels.backTo).replace('{page}',guideOrigin==='#/find'?DATA.search.title:utilityBackLabel(guideOrigin)),utilityModeFromHash(guideOrigin)||'neutral','data-guide-back=\"1\"')}")

if '/* Unified hierarchical back navigation */' not in css:
    css += """

/* Unified hierarchical back navigation */
.programmatic-page-focus:focus{outline:none}
.back-control{--back-accent:#475467;display:inline-flex;align-items:center;gap:9px;width:max-content;max-width:100%;min-height:44px;margin:0 0 14px;padding:8px 13px 8px 9px;border:1px solid color-mix(in srgb,var(--back-accent) 24%,#d9dee7);border-radius:999px;background:color-mix(in srgb,var(--back-accent) 7%,#fff);color:var(--back-accent);box-shadow:0 5px 14px rgba(17,24,39,.05);font-size:.86rem;font-weight:950;line-height:1.15;text-decoration:none;transition:transform .16s ease,background .16s ease,border-color .16s ease,box-shadow .16s ease}
.back-control.shine{--back-accent:var(--shine)}.back-control.heal{--back-accent:#8a6200}.back-control.dr{--back-accent:var(--dr)}.back-control.summary{--back-accent:var(--summary)}
.back-control-icon{display:grid;place-items:center;flex:0 0 32px;width:32px;height:32px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--back-accent) 18%,#e5e7eb)}
.back-control-icon svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.back-control:hover{transform:translateY(-1px);background:color-mix(in srgb,var(--back-accent) 11%,#fff);border-color:color-mix(in srgb,var(--back-accent) 40%,#d9dee7);box-shadow:0 8px 18px rgba(17,24,39,.08)}
.back-control:focus-visible{outline:3px solid color-mix(in srgb,var(--back-accent) 48%,transparent);outline-offset:3px}
@media(max-width:430px){.back-control{width:100%;justify-content:flex-start}}
@media print{.back-control{display:none!important}}
"""

note="""

### Hierarchical back navigation

- Back controls now move up exactly one menu level.
- HEAL and DR detail pages return to their section, not directly to the home screen.
- Diet guidance returns to Diet; Diet returns to HEAL.
- All back controls use one shared icon-and-label component with no raw arrow text.
"""
if '### Hierarchical back navigation' not in hist: hist += note

app_p.write_text(app,encoding='utf-8'); css_p.write_text(css,encoding='utf-8'); hist_p.write_text(hist,encoding='utf-8')
