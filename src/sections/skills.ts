import { skillGroups } from '../skills';
import { escapeHtml } from '../html';

export function renderSkills(): string {
  return `<section id="skills" class="section container"><p class="section-label reveal">Skills</p><h2 class="reveal">Full-stack development,<br>delivery and AI.</h2><p class="section-description reveal">Technologies and workflows spanning frontend interfaces, backend services, deployment, and applied AI projects.</p><div class="skills-grid">
${skillGroups.map(group => `
  <article class="skill-card reveal">
    <h3>${escapeHtml(group.title)}</h3>
    <ul class="tags">${group.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
  </article>`).join('')}
</div></section>`;
}
