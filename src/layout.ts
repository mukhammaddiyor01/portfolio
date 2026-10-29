export function renderHeader(): string {
  return `<header class="header"><nav class="navigation" aria-label="Main navigation"><a class="brand" href="#home">MUKHAMMADDIYOR</a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button><div class="nav-links" id="nav-links"><a href="#home" class="active" aria-current="location">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#contact">Contact</a></div></nav></header>`;
}

export function renderFooter(): string {
  return `<footer class="container"><span>© 2026 Mukhammaddiyor Ibrokhimov</span><a href="#home">Back to top</a></footer>`;
}
