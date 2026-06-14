const auroraStyle=document.createElement('style');auroraStyle.textContent=`
  html[data-theme="dark"]{
    --bg:#f7eaff;
    --bg2:rgba(255,255,255,.86);
    --card:rgba(255,255,255,.44);
    --card2:rgba(255,255,255,.68);
    --text:#17121c;
    --muted:#655a69;
    --line:rgba(80,40,110,.16);
    --shadow:0 25px 80px rgba(130,70,160,.14);
  }

  body{
    background:
      radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
      radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
      radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
      radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
      linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%) !important;
    background-attachment: fixed !important;
  }

  .orb{display:none;}
  .glass,.project-card,.service-item,.process-step{background:rgba(255,255,255,.44);}
  .hero-card,.contact-card{background:rgba(255,255,255,.48);}
  .metric-grid div{background:rgba(255,255,255,.32);}
  .marquee{background:rgba(255,255,255,.18);}
`;document.head.appendChild(auroraStyle);const root=document.documentElement;const saved=localStorage.getItem('theme');if(saved){root.dataset.theme=saved}else{root.dataset.theme='light'}const themeToggle=document.getElementById('themeToggle');function syncThemeIcon(){themeToggle.textContent=root.dataset.theme==='dark'?'☾':'☀'}syncThemeIcon();themeToggle.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);syncThemeIcon()});const menuToggle=document.getElementById('menuToggle');const mobileMenu=document.getElementById('mobileMenu');menuToggle.addEventListener('click',()=>{mobileMenu.classList.toggle('open');mobileMenu.setAttribute('aria-hidden',mobileMenu.classList.contains('open')?'false':'true')});mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');mobileMenu.setAttribute('aria-hidden','true')}));const progress=document.getElementById('progress');function updateProgress(){const h=document.documentElement;const scrolled=h.scrollTop/(h.scrollHeight-h.clientHeight);progress.style.width=`${Math.max(0,Math.min(1,scrolled))*100}%`}window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const delay=entry.target.dataset.delay||0;setTimeout(()=>entry.target.classList.add('visible'),delay);observer.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.querySelectorAll('.project-card,.service-item,.process-step,.hero-card').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=e.clientX-r.left;const y=e.clientY-r.top;card.style.background=`radial-gradient(circle at ${x}px ${y}px, rgba(175,109,255,.18), transparent 34%), rgba(255,255,255,.50)`});card.addEventListener('mouseleave',()=>{card.style.background=''})});
