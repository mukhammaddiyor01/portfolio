import './styles.css';
import { initInteractions } from './interactions';
import { renderHeader, renderFooter } from './layout';
import { renderHome } from './sections/home';
import { renderAbout } from './sections/about';
import { renderSkills } from './sections/skills';
import { renderProjects } from './sections/projects';
import { renderExperience } from './sections/experience';
import { renderEducation } from './sections/education';
import { renderContact } from './sections/contact';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Portfolio mount element is missing.');
app.innerHTML = `
  <a class="skip" href="#main">Skip to main content</a>
  <canvas id="stars" aria-hidden="true"></canvas>
  <div class="reading-progress" aria-hidden="true"></div>
  ${renderHeader()}
  <main id="main">
    ${renderHome()}
    ${renderAbout()}
    ${renderSkills()}
    ${renderProjects()}
    ${renderExperience()}
    ${renderEducation()}
    ${renderContact()}
  </main>
  ${renderFooter()}
  <button class="motion-control" type="button" aria-pressed="true">Pause animation</button>
`;
initInteractions();
// Sections are mounted by TypeScript, so restore direct links such as #contact.
if (location.hash) {
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  requestAnimationFrame(() => target?.scrollIntoView({ behavior: 'instant' }));
}
