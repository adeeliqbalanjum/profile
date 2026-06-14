const auroraStyle = document.createElement('style');
auroraStyle.textContent = `
  :root,
  html[data-theme="dark"]{
    --bg:#f7eaff;
    --bg2:rgba(255,255,255,.86);
    --card:rgba(255,255,255,.34);
    --card2:rgba(255,255,255,.58);
    --text:#17121c;
    --muted:#655a69;
    --line:rgba(80,40,110,.18);
    --shadow:0 30px 90px rgba(130,70,160,.16);
  }

  body{
    min-height:100vh;
    background:
      radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.26), transparent 62%),
      radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.35), transparent 64%),
      radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.24), transparent 64%),
      radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.28), transparent 64%),
      linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%) !important;
    background-attachment: fixed !important;
  }

  body::before{
    content:"";
    position:fixed;
    inset:0;
    z-index:0;
    pointer-events:none;
    background:
      linear-gradient(120deg, rgba(255,255,255,.22), rgba(255,255,255,.04) 44%, rgba(255,255,255,.20)),
      radial-gradient(circle at 50% 50%, rgba(255,255,255,.22), transparent 55%);
    backdrop-filter:blur(2px) saturate(130%);
    -webkit-backdrop-filter:blur(2px) saturate(130%);
  }

  .orb{
    display:block !important;
    position:fixed;
    z-index:0;
    border-radius:999px;
    pointer-events:none;
    filter:blur(46px);
    opacity:.78;
    mix-blend-mode:multiply;
    will-change:transform;
  }

  .orb-a{
    width:430px;
    height:430px;
    left:-120px;
    top:8vh;
    background:radial-gradient(circle, rgba(175,109,255,.82), rgba(175,109,255,.08) 68%, transparent 72%);
    animation:floatBallOne 16s ease-in-out infinite alternate;
  }

  .orb-b{
    width:520px;
    height:520px;
    right:-160px;
    top:34vh;
    background:radial-gradient(circle, rgba(120,190,255,.78), rgba(120,190,255,.08) 68%, transparent 72%);
    animation:floatBallTwo 19s ease-in-out infinite alternate;
  }

  .orb-c{
    width:390px;
    height:390px;
    left:42vw;
    bottom:-140px;
    background:radial-gradient(circle, rgba(255,100,180,.72), rgba(255,210,120,.20) 46%, transparent 72%);
    animation:floatBallThree 21s ease-in-out infinite alternate;
  }

  @keyframes floatBallOne{
    0%{transform:translate3d(0,0,0) scale(1)}
    45%{transform:translate3d(18vw,16vh,0) scale(1.12)}
    100%{transform:translate3d(8vw,48vh,0) scale(.94)}
  }

  @keyframes floatBallTwo{
    0%{transform:translate3d(0,0,0) scale(.96)}
    50%{transform:translate3d(-24vw,-12vh,0) scale(1.1)}
    100%{transform:translate3d(-10vw,30vh,0) scale(1.02)}
  }

  @keyframes floatBallThree{
    0%{transform:translate3d(0,0,0) scale(1)}
    48%{transform:translate3d(-28vw,-28vh,0) scale(1.12)}
    100%{transform:translate3d(24vw,-44vh,0) scale(.98)}
  }

  .glass,
  .project-card,
  .service-item,
  .process-step,
  .mobile-menu{
    background:linear-gradient(135deg, rgba(255,255,255,.52), rgba(255,255,255,.24)) !important;
    border:1px solid rgba(255,255,255,.48) !important;
    box-shadow:0 30px 90px rgba(96,55,130,.14), inset 0 1px 0 rgba(255,255,255,.58) !important;
    backdrop-filter:blur(28px) saturate(170%) !important;
    -webkit-backdrop-filter:blur(28px) saturate(170%) !important;
  }

  .hero-card,
  .contact-card{
    background:linear-gradient(135deg, rgba(255,255,255,.58), rgba(255,255,255,.26)) !important;
  }

  .metric-grid div,
  .trust-row span,
  .pill,
  .skills span,
  .tags b,
  .theme-toggle,
  .menu-toggle{
    background:rgba(255,255,255,.34) !important;
    border-color:rgba(255,255,255,.46) !important;
    backdrop-filter:blur(18px) saturate(150%);
    -webkit-backdrop-filter:blur(18px) saturate(150%);
  }

  .marquee{
    background:rgba(255,255,255,.18) !important;
    backdrop-filter:blur(18px) saturate(150%);
    -webkit-backdrop-filter:blur(18px) saturate(150%);
  }

  .noise{opacity:.045;}

  @media (max-width:640px){
    .orb-a{width:300px;height:300px;left:-130px;top:12vh;}
    .orb-b{width:340px;height:340px;right:-150px;top:42vh;}
    .orb-c{width:280px;height:280px;left:18vw;bottom:-110px;}
  }

  @media (prefers-reduced-motion:reduce){
    .orb{animation:none !important;}
  }
`;
document.head.appendChild(auroraStyle);

const thirdOrb = document.createElement('div');
thirdOrb.className = 'orb orb-c';
document.body.appendChild(thirdOrb);

const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved) {
  root.dataset.theme = saved;
} else {
  root.dataset.theme = 'light';
}

const themeToggle = document.getElementById('themeToggle');
function syncThemeIcon() {
  themeToggle.textContent = root.dataset.theme === 'dark' ? '☾' : '☀';
}
syncThemeIcon();

themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  syncThemeIcon();
});

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileMenu.setAttribute('aria-hidden', mobileMenu.classList.contains('open') ? 'false' : 'true');
});
mobileMenu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  })
);

const progress = document.getElementById('progress');
function updateProgress() {
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
  progress.style.width = `${Math.max(0, Math.min(1, scrolled)) * 100}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('.project-card,.service-item,.process-step,.hero-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(175,109,255,.18), transparent 34%), linear-gradient(135deg, rgba(255,255,255,.58), rgba(255,255,255,.28))`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});
