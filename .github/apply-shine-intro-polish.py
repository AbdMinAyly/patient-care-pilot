# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_path=Path('app.js')
css_path=Path('styles.css')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

# Keep the intro focused by hiding global navigation only while this screen renders.
app=app.replace("function renderShine(){\n  setActive('shine');\n  const p=profile();", "function renderShine(){\n  setActive('shine');\n  const p=profile();\n  document.body.classList.toggle('shine-intro-active',p.guided.shineCompleted!==true);", 1)

# Remove the focused-entry class whenever routing begins; renderShine adds it back only when needed.
if "document.body.classList.remove('shine-intro-active');" not in app:
    app=re.sub(r"function route\(\)\{", "function route(){\n  document.body.classList.remove('shine-intro-active');", app, count=1)

# Replace symbolic icons with more semantically relevant inline SVG icons.
icons={
'<span class="meaning-icon" aria-hidden="true">☾</span>':'<span class="meaning-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"/></svg></span>',
'<span class="meaning-icon" aria-hidden="true">❧</span>':'<span class="meaning-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 13c2.6 3.2 7.4 3.2 10 0M8 9h.01M16 9h.01"/><circle cx="12" cy="12" r="9"/></svg></span>',
'<span class="meaning-icon" aria-hidden="true">◊</span>':'<span class="meaning-icon" aria-hidden="true"><path></path><svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg></span>',
'<span class="meaning-icon" aria-hidden="true">♨</span>':'<span class="meaning-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 11h16v2a8 8 0 0 1-16 0v-2Z"/><path d="M8 7c0-1 1-1.3 1-2.5M12 7c0-1 1-1.3 1-2.5M16 7c0-1 1-1.3 1-2.5"/></svg></span>',
'<span class="meaning-icon" aria-hidden="true">☀</span>':'<span class="meaning-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 6v12M17 6v12M4 9h3M4 15h3M17 9h3M17 15h3M9 8h6v8H9z"/></svg></span>'
}
for old,new in icons.items():
    app=app.replace(old,new)

# Add a delayed skip link below the main action.
needle='''      <button type="button" class="shine-welcome-cta" data-open-priority="1">\n        <span>${esc(c.start||'Choose your priority')}</span><i aria-hidden="true">✦</i>\n      </button>'''
replacement=needle+'''\n      <a class="shine-welcome-skip" href="#/pedia">Skip for now</a>'''
if 'shine-welcome-skip' not in app:
    app=app.replace(needle,replacement,1)

block=r'''

/* SHINE focused introduction polish */
body.shine-intro-active{overflow:hidden}
body.shine-intro-active .bottom-nav{display:none}
body.shine-intro-active .app{padding-bottom:0}
.shine-welcome{animation:shineWelcomeEnter .75s cubic-bezier(.2,.8,.2,1) both}
.shine-guide-star{animation:shineStarPulse 2.8s ease-in-out infinite}
.shine-welcome-brand h1{animation:shineTitleRise .8s .12s cubic-bezier(.2,.8,.2,1) both}
.shine-meaning-item{animation:shineMeaningIn .55s cubic-bezier(.2,.8,.2,1) both}
.meaning-left .shine-meaning-item:nth-of-type(1){animation-delay:.2s}
.meaning-left .shine-meaning-item:nth-of-type(3){animation-delay:.32s}
.meaning-left .shine-meaning-item:nth-of-type(5){animation-delay:.44s}
.meaning-right .shine-meaning-item:nth-of-type(1){animation-delay:.26s}
.meaning-right .shine-meaning-item:nth-of-type(3){animation-delay:.38s}
.meaning-icon{display:grid;place-items:center;width:24px;height:24px}
.meaning-icon svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.shine-welcome-cta{animation:shineCtaRise .65s .55s cubic-bezier(.2,.8,.2,1) both}
.shine-welcome-skip{position:absolute;z-index:7;left:50%;bottom:1.4%;min-height:44px;display:flex;align-items:center;justify-content:center;padding:8px 18px;transform:translateX(-50%);color:#7f2637;font-weight:700;text-decoration:none;opacity:0;pointer-events:none;animation:shineSkipReveal .35s ease 2s forwards}
.shine-welcome-skip:focus-visible{outline:3px solid #fff;outline-offset:2px;border-radius:999px}
@keyframes shineWelcomeEnter{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:scale(1)}}
@keyframes shineTitleRise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@keyframes shineMeaningIn{from{opacity:0;transform:translateY(9px)}to{opacity:1;transform:none}}
@keyframes shineCtaRise{from{opacity:0;transform:translateX(-50%) translateY(14px)}to{opacity:1;transform:translateX(-50%)}}
@keyframes shineSkipReveal{to{opacity:.82;pointer-events:auto}}
@keyframes shineStarPulse{0%,100%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.08);filter:brightness(1.13)}}
@media(max-height:700px){.shine-welcome-cta{bottom:7%}.shine-welcome-skip{bottom:.2%}}
@media(prefers-reduced-motion:reduce){
  .shine-welcome,.shine-guide-star,.shine-welcome-brand h1,.shine-meaning-item,.shine-welcome-cta{animation:none}
  .shine-welcome-skip{animation:none;opacity:1;pointer-events:auto}
}
'''
if '/* SHINE focused introduction polish */' not in css:
    css += block

note='''\n\n### SHINE focused introduction polish\n\n- Hid the global bottom navigation while the first-entry SHINE welcome is visible.\n- Added a Skip for now link that appears after two seconds and opens Shinopedia.\n- Added reduced-motion-safe entrance, logo, label, and action animations.\n- Replaced decorative acronym symbols with clearer sleep, happiness, immunity, nutrition, and exercise icons.\n'''
if '### SHINE focused introduction polish' not in history:
    history += note

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
