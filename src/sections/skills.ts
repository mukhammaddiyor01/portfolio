import { skillGroups } from '../skills';
import { escapeHtml } from '../html';

export function renderSkills(): string {
  return `<section id="skills" class="section container"><p class="section-label reveal">Skills</p><h2 class="reveal">A toolkit for<br>end-to-end development.</h2><p class="section-description reveal">The technologies I use to connect user experiences, application services and data — alongside the tools I’m continuing to explore.</p><div class="skills-grid">
${skillGroups.map(group => `
  <article class="skill-card reveal">
    <h3>${escapeHtml(group.title)}</h3>
    <ul class="tags">${group.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
  </article>`).join('')}
</div></section>`;
}
