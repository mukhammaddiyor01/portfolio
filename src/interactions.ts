interface Star { x: number; y: number; r: number; speed: number; alpha: number; }

function requireElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing portfolio element: ${selector}`);
  return element;
}

/** Bind navigation, scroll reveals, pointer effects and canvas animation after rendering. */
export function initInteractions(): void {
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const nav = requireElement<HTMLElement>('.navigation');
const menu = requireElement<HTMLButtonElement>('.menu-toggle');
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');
const motionButton = requireElement<HTMLButtonElement>('.motion-control');
const portrait = requireElement<HTMLDivElement>('.portrait-frame');
const progress = requireElement<HTMLDivElement>('.reading-progress');
let paused = false;
const motionEnabled = () => !paused && !preference.matches;
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
document.addEventListener('pointerdown', event => { if (!nav.contains(event.target as Node | null)) closeMenu(); });
let scrollFrame = 0;
function updateProgress() { const max = document.documentElement.scrollHeight - innerHeight; progress.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`; scrollFrame = 0; }
addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress); }, { passive: true });
if ('IntersectionObserver' in window) {
 document.body.classList.add('js-motion');
 document.querySelectorAll('.skills-grid, .projects-grid').forEach(group => group.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => el.style.setProperty('--delay', `${i % 3 * 75}ms`)));
 const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); } }), { threshold: .08 });
 document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
 const sections = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => { const active = link.hash === '#' + entry.target.id; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); }), { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
 document.querySelectorAll('main section[id]').forEach(el => sections.observe(el));
}
portrait.addEventListener('pointermove', event => { if (!motionEnabled() || !finePointer.matches) return; const r = portrait.getBoundingClientRect(); portrait.style.setProperty('--rx', `${(.5 - (event.clientY - r.top) / r.height) * 5}deg`); portrait.style.setProperty('--ry', `${((event.clientX - r.left) / r.width - .5) * 5}deg`); });
portrait.addEventListener('pointerleave', () => { portrait.style.setProperty('--rx', '0deg'); portrait.style.setProperty('--ry', '0deg'); });
const canvas = requireElement<HTMLCanvasElement>('#stars');
const ctx = canvas.getContext('2d');
let stars: Star[] = [], width = 0, height = 0, frame = 0, last = 0;
function resizeCanvas() { width = innerWidth; height = innerHeight; const ratio = Math.min(devicePixelRatio || 1, 1.5); canvas.width = width * ratio; canvas.height = height * ratio; if (ctx) ctx.setTransform(ratio, 0, 0, ratio, 0, 0); stars = Array.from({ length: width < 650 ? 24 : 50 }, () => ({ x: Math.random() * width, y: Math.random() * height, r: .5 + Math.random() * .7, speed: .05 + Math.random() * .13, alpha: .15 + Math.random() * .5 })); }
function draw(time: number) { if (!ctx || !motionEnabled() || document.hidden) { frame = 0; return; } frame = requestAnimationFrame(draw); if (time - last < 33) return; const step = Math.min((time - last) / 33, 2); last = time; ctx.clearRect(0, 0, width, height); for (const s of stars) { s.y -= s.speed * step; if (s.y < -2) s.y = height + 2; ctx.fillStyle = `rgba(234,229,220,${s.alpha})`; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); } }
function stop() { cancelAnimationFrame(frame); frame = 0; }
function start() { if (!frame && ctx && !document.hidden && motionEnabled()) { last = performance.now(); frame = requestAnimationFrame(draw); } }
function syncMotion() { const enabled = motionEnabled(); document.body.classList.toggle('motion-paused', !enabled); motionButton.textContent = preference.matches ? 'Reduced motion on' : enabled ? 'Pause animation' : 'Enable animation'; motionButton.disabled = preference.matches; motionButton.setAttribute('aria-pressed', String(enabled)); if (enabled) start(); else stop(); }
motionButton.addEventListener('click', () => { paused = !paused; syncMotion(); });
preference.addEventListener('change', syncMotion);
document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
addEventListener('resize', () => { resizeCanvas(); updateProgress(); if (innerWidth > 650) closeMenu(); });
resizeCanvas(); syncMotion(); updateProgress();

}
