import { loadIcon } from './loader.js';
import { config } from '../config/defaults.js';

export async function replaceIcons() {
  const iconElements = document.querySelectorAll('[data-icon]');

  for (const el of iconElements) {
    const name = el.dataset.icon;

    const options = {};

    if (el.classList.contains('svg-gradient')) {
      options.gradient = true;
      options.from = el.dataset.gradientFrom || config.gradientFrom;
      options.to = el.dataset.gradientTo || config.gradientTo;
    }

    const svg = await loadIcon(name, options);

    // Only process if we got a valid element (loadIcon returns TextNode on error)
    if (svg.nodeType === Node.ELEMENT_NODE) {
      svg.classList.add(...el.classList);
      el.replaceWith(svg);
    } else {
      // Optional: keep original element or replace with empty?
      // For now, let's just log it and do nothing or replace with empty to hide the broken <i>
      console.warn(`svglet: Could not replace icon '${name}'`);
    }
  }
}
