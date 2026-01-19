import { loadIcon } from './loader.js';
import { DEFAULTS } from '../config/defaults.js';

export async function replaceIcons() {
  const iconElements = document.querySelectorAll('[data-icon]');

  for (const el of iconElements) {
    const name = el.dataset.icon;

    const options = {};

    if (el.classList.contains('svg-gradient')) {
      options.gradient = true;
      options.from = el.dataset.gradientFrom || DEFAULTS.gradientFrom;
      options.to = el.dataset.gradientTo || DEFAULTS.gradientTo;
    }

    const svg = await loadIcon(name, options);
    svg.classList.add(...el.classList);

    el.replaceWith(svg);
  }
}
