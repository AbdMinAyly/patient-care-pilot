# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path
import re

app_path=Path('app.js')
css_path=Path('styles.css')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

helper=r'''function renderShineWelcome(){
  const c=guidedConfig().shine;
  return `<div class="screen shine-welcome-screen">
    <section class="shine-welcome" aria-labelledby="shine-welcome-title">
      <div class="shine-welcome-sky" aria-hidden="true">
        <span class="shine-orbit orbit-one"></span>
        <span class="shine-orbit orbit-two"></span>
        <span class="shine-spark spark-one">✦</span>
        <span class="shine-spark spark-two">✦</span>
        <span class="shine-spark spark-three">✦</span>
      </div>

      <div class="shine-welcome-brand">
        <span class="shine-guide-star" aria-hidden="true">✦</span>
        <h1 id="shine-welcome-title">SHINE</h1>
        <span class="shine-brand-rule" aria-hidden="true"><i>✦</i></span>
        <p>Your guiding light</p>
      </div>

      <div class="shine-meaning meaning-left" aria-label="S Sleep, H Happiness, I Immunity">
        <div class="shine-meaning-item"><span class="meaning-icon" aria-hidden="true">☾</span><b>S</b><strong>Sleep</strong></div>
        <span class="meaning-connector" aria-hidden="true">✦</span>
        <div class="shine-meaning-item"><span class="meaning-icon" aria-hidden="true">❧</span><b>H</b><strong>Happiness</strong></div>
        <span class="meaning-connector" aria-hidden="true">✦</span>
        <div class="shine-meaning-item"><span class="meaning-icon" aria-hidden="true">◊</span><b>I</b><strong>Immunity</strong></div>
      </div>

      <div class="shine-meaning meaning-right" aria-label="N Nutrition, E Exercise">
        <div class="shine-meaning-item"><span class="meaning-icon" aria-hidden="true">♨</span><b>N</b><strong>Nutrition</strong></div>
        <span class="meaning-connector" aria-hidden="true">✦</span>
        <div class="shine-meaning-item"><span class="meaning-icon" aria-hidden="true">☀</span><b>E</b><strong>Exercise</strong></div>
      </div>

      <div class="shine-horizon" aria-hidden="true">
        <span class="shine-sun"></span>
        <span class="shine-mountain mountain-left"></span>
        <span class="shine-mountain mountain-right"></span>
        <span class="shine-wave wave-one"></span>
        <span class="shine-wave wave-two"></span>
      </div>

      <button type="button" class="shine-welcome-cta" data-open-priority="1">
        <span>${esc(c.start||'Choose your priority')}</span><i aria-hidden="true">✦</i>
      </button>
    </section>
  </div>`;
}
'''
anchor='function renderShine(){'
if 'function renderShineWelcome()' not in app:
    app=app.replace(anchor,helper+anchor,1)

pattern=r"function renderShine\(\)\{.*?\n\}"
replacement="""function renderShine(){
  setActive('shine');
  const p=profile();
  if(p.guided.shineCompleted!==true){
    app.innerHTML=renderShineWelcome();
    return;
  }
  app.innerHTML=`<div class=\"screen\">${hero('shine','SHINE',DATA.ui.modeDescriptions.shine)}${renderPriorityLauncher()}<section class=\"grid shine-focus-grid\">${DATA.shine.map(renderGuidedShineCard).join('')}</section></div>`;
}"""
app,count=re.subn(pattern,replacement,app,count=1,flags=re.S)
if count!=1:
    raise SystemExit('renderShine replacement failed')

block=r'''

/* SHINE first-entry guiding-light welcome */
.shine-welcome-screen{padding:10px 10px 28px;background:#7d1826}
.shine-welcome{
  position:relative;
  min-height:calc(100svh - 118px);
  overflow:hidden;
  border:1px solid rgba(255,235,221,.72);
  border-radius:34px;
  background:
    radial-gradient(circle at 50% 58%,rgba(255,250,222,.98) 0 7%,rgba(255,238,208,.7) 18%,transparent 37%),
    radial-gradient(circle at 50% 22%,rgba(255,255,255,.9),rgba(255,225,207,.72) 33%,transparent 58%),
    linear-gradient(180deg,#d86469 0%,#f3aaa0 28%,#fff0dd 63%,#e77c73 100%);
  box-shadow:inset 0 0 0 10px rgba(114,15,32,.12),0 18px 42px rgba(76,9,24,.28);
  color:#951c2e;
  isolation:isolate;
}
.shine-welcome:before,.shine-welcome:after{content:"";position:absolute;inset:auto -12% -8%;height:34%;border-radius:50% 50% 0 0;background:linear-gradient(180deg,rgba(221,83,86,.18),rgba(137,17,40,.42));transform:rotate(-4deg);z-index:-1}
.shine-welcome:after{inset:auto -20% -15%;height:31%;background:linear-gradient(180deg,rgba(255,175,145,.35),rgba(119,15,39,.52));transform:rotate(5deg)}
.shine-welcome-sky{position:absolute;inset:0;pointer-events:none}
.shine-orbit{position:absolute;left:50%;top:8%;width:82%;aspect-ratio:1;border:1px solid rgba(255,221,170,.48);border-color:rgba(255,221,170,.5) transparent transparent;border-radius:50%;transform:translateX(-50%)}
.orbit-two{top:12%;width:98%;opacity:.6}
.shine-spark{position:absolute;color:#ffd16f;text-shadow:0 0 12px #fff2b0;font-size:14px}
.spark-one{top:8%;left:18%}.spark-two{top:12%;right:17%}.spark-three{top:36%;left:51%}
.shine-welcome-brand{position:absolute;z-index:3;top:12%;left:50%;width:min(78%,560px);transform:translateX(-50%);text-align:center}
.shine-guide-star{display:block;margin:auto;color:#eda72d;font-size:clamp(54px,12vw,92px);line-height:.8;text-shadow:0 0 20px rgba(255,241,166,.95)}
.shine-welcome-brand h1{margin:12px 0 4px;font-family:Georgia,'Times New Roman',serif;font-size:clamp(58px,15vw,112px);font-weight:400;letter-spacing:.08em;line-height:.9;background:linear-gradient(90deg,#982036,#df594d 46%,#8d1833);-webkit-background-clip:text;background-clip:text;color:transparent}
.shine-welcome-brand p{margin:10px 0 0;font-size:clamp(1.15rem,4vw,2rem);letter-spacing:.02em;color:#b84049}
.shine-brand-rule{display:flex;align-items:center;gap:10px;width:62%;margin:14px auto 0;color:#d89322}
.shine-brand-rule:before,.shine-brand-rule:after{content:"";height:1px;flex:1;background:#d89322}
.shine-brand-rule i{font-style:normal}
.shine-meaning{position:absolute;z-index:4;top:31%;display:flex;flex-direction:column;align-items:center;gap:9px;width:112px}
.meaning-left{left:1.5%}.meaning-right{right:1.5%;top:34%}
.shine-meaning-item{display:grid;justify-items:center;gap:4px;color:#9a1f31;text-align:center}
.shine-meaning-item b{display:grid;place-items:center;width:58px;height:58px;border-radius:50%;background:rgba(255,212,203,.72);font-family:Georgia,'Times New Roman',serif;font-size:2.25rem;font-weight:400;box-shadow:inset 0 0 0 1px rgba(255,255,255,.55)}
.shine-meaning-item strong{font-size:.92rem;font-weight:700}
.meaning-icon,.meaning-connector{color:#df9b1f}.meaning-icon{font-size:1.2rem}.meaning-connector{font-size:.8rem}
.shine-horizon{position:absolute;z-index:1;left:0;right:0;bottom:12%;height:41%;overflow:hidden}
.shine-sun{position:absolute;left:50%;bottom:39%;width:clamp(72px,18vw,128px);aspect-ratio:1;border-radius:50%;transform:translateX(-50%);background:#fff9da;box-shadow:0 0 32px 18px rgba(255,240,177,.85),0 -40px 100px 42px rgba(255,229,174,.42)}
.shine-mountain{position:absolute;bottom:35%;width:56%;height:23%;background:linear-gradient(145deg,transparent 42%,rgba(214,91,80,.5) 43% 100%);clip-path:polygon(0 100%,25% 52%,43% 79%,65% 30%,100% 100%)}
.mountain-left{left:-5%}.mountain-right{right:-5%;transform:scaleX(-1)}
.shine-wave{position:absolute;left:-8%;right:-8%;height:42%;border-radius:50%;border-top:2px solid rgba(255,255,255,.84);background:rgba(220,92,89,.15)}
.wave-one{bottom:-10%;transform:rotate(4deg)}.wave-two{bottom:-22%;transform:rotate(-5deg);background:rgba(154,27,52,.2)}
.shine-welcome-cta{position:absolute;z-index:6;left:50%;bottom:5.5%;display:flex;align-items:center;justify-content:center;gap:18px;width:min(78%,620px);min-height:78px;padding:18px 26px;transform:translateX(-50%);border:2px solid rgba(255,238,225,.9);border-radius:999px;background:linear-gradient(135deg,#8d1028,#c92e38 68%,#9b1730);color:#fff;font:inherit;font-size:clamp(1.18rem,4vw,2rem);font-weight:800;box-shadow:0 14px 30px rgba(104,13,34,.34),inset 0 1px 0 rgba(255,255,255,.25);cursor:pointer}
.shine-welcome-cta i{color:#ffd36d;font-style:normal;font-size:1.5em;text-shadow:0 0 13px #fff0a4}
.shine-welcome-cta:hover{transform:translateX(-50%) translateY(-2px);filter:saturate(1.05)}
.shine-welcome-cta:focus-visible{outline:4px solid #fff;outline-offset:4px}
@media(max-width:430px){
  .shine-welcome-screen{padding:6px 6px 22px}
  .shine-welcome{min-height:calc(100svh - 104px);border-radius:26px}
  .shine-welcome-brand{top:10%;width:82%}
  .shine-meaning{top:31%;width:82px}.meaning-right{top:34%}
  .shine-meaning-item b{width:48px;height:48px;font-size:1.8rem}
  .shine-meaning-item strong{font-size:.76rem}
  .shine-welcome-cta{bottom:4%;width:84%;min-height:66px}
}
@media(max-height:680px){
  .shine-welcome-brand{top:6%}.shine-guide-star{font-size:48px}.shine-welcome-brand h1{font-size:54px}
  .shine-meaning{top:28%;gap:4px}.shine-meaning-item b{width:42px;height:42px;font-size:1.55rem}.meaning-icon{font-size:.9rem}
  .shine-horizon{height:36%;bottom:12%}.shine-welcome-cta{min-height:58px;padding:12px 22px}
}
@media(prefers-reduced-motion:reduce){.shine-welcome-cta{transition:none}}
'''
if '/* SHINE first-entry guiding-light welcome */' not in css:
    css += block

note='''\n\n### SHINE guiding-light welcome\n\n- Replaced the first-entry SHINE placeholder with a responsive guiding-light welcome screen.\n- The screen displays the SHINE wordmark, “Your guiding light,” the five SHINE meanings, and one priority-wizard button only.\n- The design is implemented with accessible HTML and CSS rather than an unresponsive image hotspot.\n'''
if '### SHINE guiding-light welcome' not in history:
    history += note

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
