# IF YOU HAVE NOT ALREADY READ PATIENT_CARE_RULES.md, STOP AND READ IT BEFORE EDITING THIS FILE.
from pathlib import Path

app_path=Path('app.js')
css_path=Path('styles.css')
history_path=Path('docs/HISTORY.md')
app=app_path.read_text(encoding='utf-8')
css=css_path.read_text(encoding='utf-8')
history=history_path.read_text(encoding='utf-8')

old_set="""function setActive(mode){
  ['shine','heal','dr','pedia','summary'].forEach(m=>{
"""
new_set="""function setActive(mode){
  document.body.classList.remove('shine-intro-active','heal-intro-active','dr-intro-active');
  ['shine','heal','dr','pedia','summary'].forEach(m=>{
"""
if old_set not in app:
    raise SystemExit('setActive anchor missing')
app=app.replace(old_set,new_set,1)

old_doctor="""function renderDoctorWelcome(){return `<div class=\"screen doctor-welcome-screen\"><section class=\"doctor-welcome\"><div class=\"doctor-symbol\">✚</div><p class=\"eyebrow\">DR</p><h1>Know your health picture</h1><p>A clear profile helps organize the education and questions most relevant to you.</p><div class=\"doctor-points\"><span>AGE</span><span>PMH</span><span>BMI</span><span>LABS</span></div><button class=\"doctor-start\" data-open-doctor-intake=\"1\">Build my health profile <b>→</b></button><small>Saved only on this device</small></section></div>`}"""
new_doctor="""function renderDoctorWelcome(){return `<div class=\"screen doctor-welcome-screen\"><section class=\"doctor-welcome\"><div class=\"doctor-symbol\">✚</div><p class=\"eyebrow\">DR</p><h1>Know your health picture</h1><p>A clear profile helps organize the education and questions most relevant to you.</p><div class=\"doctor-points doctor-icon-points\" aria-label=\"Medical care symbols\"><span aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M6 3v5a6 6 0 0 0 12 0V3M6 3H4m14 0h2M12 14v2a4 4 0 0 0 8 0v-1\"/><circle cx=\"20\" cy=\"13\" r=\"2\"/></svg></span><span aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"m8 16 8-8a4 4 0 0 0-6-6l-8 8a4 4 0 0 0 6 6Z\"/><path d=\"m7 5 6 6\"/></svg></span><span aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"m14 4 6 6M12 6l6 6M4 20l5-5M7 17l-2-2 9-9 4 4-9 9-2-2ZM3 21l3-1\"/></svg></span><span aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M4 9c2-2 5-3 8-3s6 1 8 3v7c-2 2-5 3-8 3s-6-1-8-3V9Z\"/><path d=\"M4 10 1 8m19 2 3-2M8 11h8m-8 3h8\"/></svg></span></div><button class=\"doctor-start\" data-open-doctor-intake=\"1\">Build my health profile <b>→</b></button><small>Saved only on this device</small></section></div>`}"""
if old_doctor not in app:
    raise SystemExit('doctor welcome anchor missing')
app=app.replace(old_doctor,new_doctor,1)

heal_helper=r'''function renderHealWelcome(){
  return `<div class="screen heal-welcome-screen">
    <section class="heal-welcome" aria-labelledby="heal-welcome-title">
      <div class="heal-rays" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="heal-brand">
        <span class="heal-emblem" aria-hidden="true"><svg viewBox="0 0 120 120"><path d="M24 58h72c0 25-15 40-36 40S24 83 24 58Z"/><path d="M60 57C57 34 43 22 27 20c1 18 12 31 33 37ZM61 57c3-23 17-35 33-37-1 18-12 31-33 37Z"/><path d="M60 20v37"/></svg></span>
        <h1 id="heal-welcome-title">HEAL</h1>
        <span class="heal-brand-rule" aria-hidden="true"><i>✦</i></span>
        <p>Build your health</p>
      </div>
      <div class="heal-theme heal-theme-left" aria-label="Diet and habits">
        <div><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 11h16v2a8 8 0 0 1-16 0v-2Z"/><path d="M8 7c0-1 1-1.3 1-2.5M12 7c0-1 1-1.3 1-2.5M16 7c0-1 1-1.3 1-2.5"/></svg></span><strong>Diet</strong></div>
        <b aria-hidden="true">✦</b>
        <div><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 20c1-7 5-11 14-15-1 8-5 13-14 15Z"/><path d="M7 17c3-2 6-5 9-9"/></svg></span><strong>Habits</strong></div>
      </div>
      <div class="heal-theme heal-theme-right" aria-label="Exercise, energy and routine">
        <div><span aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="13" cy="4" r="2"/><path d="m10 8 4 2 3 4M10 8l-3 5-3 1m9-3-2 4 4 5m-4-5-5 4"/></svg></span><strong>Exercise</strong></div>
        <b aria-hidden="true">✦</b>
        <div><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m13 2-7 12h6l-1 8 7-12h-6l1-8Z"/></svg></span><strong>Energy</strong></div>
        <b aria-hidden="true">✦</b>
        <div><span aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg></span><strong>Routine</strong></div>
      </div>
      <div class="heal-fusion" aria-hidden="true">
        <div class="heal-motion-person"><span></span><i></i><b></b></div>
        <div class="heal-food-bowl"><span></span><i></i><b></b><em></em></div>
        <div class="heal-motion-path"></div>
      </div>
      <button type="button" class="heal-welcome-cta" data-open-diet-start="1"><span>Start your diet</span><i aria-hidden="true">✦</i></button>
    </section>
  </div>`;
}
'''
anchor='function renderHeal(){'
if 'function renderHealWelcome()' not in app:
    app=app.replace(anchor,heal_helper+anchor,1)

old_heal="""function renderHeal(){
  setActive('heal');
  const c=progressiveConfig().diet;
  app.innerHTML=dietSetupComplete()?renderDietReady():renderSingleStart('heal',c.title,c.intro,c.start,'data-open-diet-start="1"');
}"""
new_heal="""function renderHeal(){
  setActive('heal');
  const first=!dietSetupComplete();
  document.body.classList.toggle('heal-intro-active',first);
  app.innerHTML=first?renderHealWelcome():renderDietReady();
}"""
if old_heal not in app:
    raise SystemExit('renderHeal anchor missing')
app=app.replace(old_heal,new_heal,1)

css_block=r'''

/* HEAL nourishment and movement welcome */
body.heal-intro-active{overflow:hidden}
body.heal-intro-active .bottom-nav{display:none!important}
body.heal-intro-active .app{padding-bottom:0}
.heal-welcome-screen{padding:8px;background:#b77700}
.heal-welcome{position:relative;min-height:calc(100svh - 16px);overflow:hidden;border:1px solid rgba(255,249,218,.82);border-radius:34px;color:#6d5700;background:radial-gradient(circle at 50% 57%,rgba(255,255,238,.98) 0 8%,rgba(255,245,184,.72) 23%,transparent 43%),radial-gradient(circle at 50% 18%,rgba(255,255,255,.94),rgba(255,239,151,.7) 36%,transparent 63%),linear-gradient(180deg,#f4c43d 0%,#ffe996 34%,#fff8dc 64%,#e8ae22 100%);box-shadow:inset 0 0 0 10px rgba(166,103,0,.11),0 18px 44px rgba(105,65,0,.3);isolation:isolate;animation:healWelcomeEnter .7s cubic-bezier(.2,.8,.2,1) both}
.heal-welcome:before,.heal-welcome:after{content:"";position:absolute;z-index:-1;left:-15%;right:-15%;bottom:10%;height:24%;border-radius:50%;border-top:2px solid rgba(255,255,255,.8);background:rgba(196,139,13,.12);transform:rotate(4deg)}
.heal-welcome:after{bottom:-5%;height:28%;background:rgba(121,105,17,.18);transform:rotate(-5deg)}
.heal-rays{position:absolute;inset:0;pointer-events:none}.heal-rays i{position:absolute;left:50%;top:7%;width:86%;aspect-ratio:1;border:1px solid rgba(255,255,255,.48);border-color:rgba(255,255,255,.6) transparent transparent;border-radius:50%;transform:translateX(-50%)}.heal-rays i:nth-child(2){top:10%;width:105%;opacity:.55}.heal-rays i:nth-child(3){top:22%;width:68%;opacity:.35}
.heal-brand{position:absolute;z-index:4;top:8%;left:50%;width:min(78%,560px);transform:translateX(-50%);text-align:center}.heal-emblem{display:grid;place-items:center;width:86px;height:86px;margin:auto;color:#d99a00;filter:drop-shadow(0 0 18px rgba(255,248,172,.9));animation:healEmblemFloat 3.2s ease-in-out infinite}.heal-emblem svg{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}.heal-brand h1{margin:2px 0 4px;font-family:Georgia,'Times New Roman',serif;font-size:clamp(62px,16vw,116px);font-weight:400;letter-spacing:.08em;line-height:.9;background:linear-gradient(90deg,#9c6900,#e4ad12 48%,#856000);-webkit-background-clip:text;background-clip:text;color:transparent}.heal-brand p{margin:10px 0 0;font-size:clamp(1.15rem,4vw,2rem);color:#667315}.heal-brand-rule{display:flex;align-items:center;gap:10px;width:62%;margin:14px auto 0;color:#d99a00}.heal-brand-rule:before,.heal-brand-rule:after{content:"";height:1px;flex:1;background:#d99a00}.heal-brand-rule i{font-style:normal}
.heal-theme{position:absolute;z-index:5;top:49%;display:flex;flex-direction:column;align-items:center;gap:8px;width:108px;transform:translateY(-50%)}.heal-theme-left{left:1.5%}.heal-theme-right{right:1.5%}.heal-theme>div{display:grid;justify-items:center;gap:5px;text-align:center;color:#6d670d}.heal-theme span{display:grid;place-items:center;width:58px;height:58px;border-radius:50%;background:rgba(255,243,176,.75);box-shadow:inset 0 0 0 1px rgba(255,255,255,.62)}.heal-theme svg{width:29px;height:29px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.heal-theme strong{font-size:.87rem}.heal-theme>b{color:#dfa30f;font-size:.8rem}
.heal-fusion{position:absolute;z-index:2;left:8%;right:8%;bottom:14%;height:39%}.heal-motion-path{position:absolute;left:8%;right:8%;bottom:12%;height:50%;border-radius:50%;border-top:3px solid rgba(255,255,255,.88);transform:rotate(-4deg)}.heal-food-bowl{position:absolute;left:50%;bottom:8%;width:min(48vw,260px);height:min(24vw,130px);transform:translateX(-50%);border-radius:12px 12px 90px 90px;background:linear-gradient(180deg,#fff8c9,#e7ad18);box-shadow:0 18px 30px rgba(126,77,0,.24),inset 0 3px rgba(255,255,255,.8)}.heal-food-bowl:before{content:"";position:absolute;left:8%;right:8%;top:-34%;height:48%;border-radius:50%;background:radial-gradient(circle at 25% 55%,#ef6a2c 0 8%,transparent 9%),radial-gradient(circle at 48% 35%,#7cad32 0 9%,transparent 10%),radial-gradient(circle at 70% 58%,#3c8730 0 10%,transparent 11%),radial-gradient(circle at 84% 30%,#f1c432 0 8%,transparent 9%),linear-gradient(180deg,#78a933,#497d2e);border:5px solid rgba(255,248,195,.9);box-shadow:0 8px 18px rgba(79,86,12,.2)}.heal-food-bowl span,.heal-food-bowl i,.heal-food-bowl b,.heal-food-bowl em{position:absolute;top:-50%;width:28px;height:58px;border-radius:100% 0 100% 0;background:#68952b;transform-origin:bottom}.heal-food-bowl span{left:26%;transform:rotate(-32deg)}.heal-food-bowl i{left:42%;transform:rotate(-8deg)}.heal-food-bowl b{right:30%;transform:rotate(24deg)}.heal-food-bowl em{right:17%;transform:rotate(48deg)}
.heal-motion-person{position:absolute;left:10%;bottom:27%;width:90px;height:140px;transform:rotate(-8deg)}.heal-motion-person span{position:absolute;left:43px;top:4px;width:22px;height:22px;border-radius:50%;background:#a46f00}.heal-motion-person:before,.heal-motion-person:after,.heal-motion-person i,.heal-motion-person b{content:"";position:absolute;background:#a46f00;border-radius:999px;transform-origin:top}.heal-motion-person:before{left:50px;top:27px;width:12px;height:58px;transform:rotate(18deg)}.heal-motion-person:after{left:49px;top:72px;width:10px;height:70px;transform:rotate(39deg)}.heal-motion-person i{left:55px;top:72px;width:10px;height:67px;transform:rotate(-42deg)}.heal-motion-person b{left:49px;top:40px;width:9px;height:55px;transform:rotate(-58deg)}
.heal-welcome-cta{position:absolute;z-index:7;left:50%;bottom:4.5%;display:flex;align-items:center;justify-content:center;gap:18px;width:min(78%,620px);min-height:76px;padding:18px 26px;transform:translateX(-50%);border:2px solid rgba(255,251,224,.94);border-radius:999px;background:linear-gradient(135deg,#c98100,#f0ae0a 64%,#a96800);color:#fff;font:inherit;font-size:clamp(1.18rem,4vw,2rem);font-weight:850;box-shadow:0 14px 30px rgba(119,73,0,.32),inset 0 1px rgba(255,255,255,.28);cursor:pointer;animation:healCtaRise .65s .45s cubic-bezier(.2,.8,.2,1) both}.heal-welcome-cta i{color:#fff1a8;font-style:normal;font-size:1.5em;text-shadow:0 0 13px #fff7bf}.heal-welcome-cta:focus-visible{outline:4px solid #fff;outline-offset:4px}
.doctor-icon-points span{display:grid;place-items:center}.doctor-icon-points svg{width:30px;height:30px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
@keyframes healWelcomeEnter{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:scale(1)}}@keyframes healEmblemFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes healCtaRise{from{opacity:0;transform:translateX(-50%) translateY(14px)}to{opacity:1;transform:translateX(-50%)}}
@media(max-width:430px){.heal-welcome-screen{padding:5px}.heal-welcome{min-height:calc(100svh - 10px);border-radius:27px}.heal-brand{top:7%;width:82%}.heal-emblem{width:68px;height:68px}.heal-theme{width:80px}.heal-theme span{width:48px;height:48px}.heal-theme strong{font-size:.75rem}.heal-fusion{left:5%;right:5%;bottom:14%}.heal-motion-person{left:2%;transform:scale(.78) rotate(-8deg);transform-origin:bottom}.heal-welcome-cta{width:85%;min-height:65px;bottom:3.5%}}
@media(max-height:700px){.heal-brand{top:4%}.heal-emblem{width:52px;height:52px}.heal-brand h1{font-size:55px}.heal-theme{top:48%;gap:3px}.heal-theme span{width:42px;height:42px}.heal-fusion{height:34%;bottom:15%}.heal-welcome-cta{min-height:58px;padding:12px 22px}}
@media(prefers-reduced-motion:reduce){.heal-welcome,.heal-emblem,.heal-welcome-cta{animation:none}}
'''
if '/* HEAL nourishment and movement welcome */' not in css:
    css += css_block

note='''\n\n### HEAL nourishment and movement welcome\n\n- Replaced the first-entry HEAL placeholder with a focused gold HEAL introduction that combines nourishment and movement symbolism.\n- Kept Start your diet as the single primary action and hid global navigation during the introduction.\n- Replaced DR welcome text bubbles with stethoscope, pills, injection, and surgical-mask icons.\n'''
if '### HEAL nourishment and movement welcome' not in history:
    history += note

app_path.write_text(app,encoding='utf-8')
css_path.write_text(css,encoding='utf-8')
history_path.write_text(history,encoding='utf-8')
