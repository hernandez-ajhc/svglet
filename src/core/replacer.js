import { loadIcon } from './loader.js';
import { config } from '../config/defaults.js';
import { applyGradient } from './gradient.js';

export async function replaceIcons() {
  const iconElements = document.querySelectorAll('[data-icon]');

  for (const el of iconElements) {
    const name = el.dataset.icon;

    // Load the icon URL (cached or resolved)
    const iconUrl = await loadIcon(name);

    // Apply the mask
    el.style.maskImage = `url(${iconUrl})`;
    el.style.webkitMaskImage = `url(${iconUrl})`;

    // Set dimensions if not already set by CSS
    // Use config.size as default width/height
    if (!el.style.width) el.style.width = config.size;
    if (!el.style.height) el.style.height = config.size;

    // Handle opt-in gradient
    if (el.classList.contains('svg-gradient')) {
      const options = {
        from: el.dataset.gradientFrom || config.gradientFrom,
        to: el.dataset.gradientTo || config.gradientTo
      };
      applyGradient(el, name, options);
    }
  }
}
