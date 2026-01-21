import { config } from '../config/defaults.js';
import { applyGradient } from './gradient.js';
import { getIconFromCache, saveIconToCache } from './cache.js';

export async function loadIcon(name, options = {}) {
  try {
    const cached = getIconFromCache(name);
    let svgText;

    if (cached) {
      svgText = cached;
    } else {
      const res = await fetch(`${config.iconPath}/${name}.svg`);
      if (!res.ok) throw new Error(`Icon not found: ${name}`);

      svgText = await res.text();
      saveIconToCache(name, svgText);
    }

    const container = document.createElement('div');
    container.innerHTML = svgText.trim();
    const svg = container.firstElementChild;

    Object.assign(svg.style, {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: config.size,
      height: config.size,
    });

    svg.querySelectorAll('*').forEach(el => {
      const tag = el.tagName.toLowerCase();
      if (
        ['path', 'circle', 'rect', 'polygon', 'line', 'polyline', 'ellipse', 'g']
          .includes(tag)
      ) {
        if (el.hasAttribute('fill')) el.setAttribute('fill', 'currentColor');
        if (el.hasAttribute('stroke')) el.setAttribute('stroke', 'currentColor');
      }
    });

    if (options.gradient) {
      applyGradient(svg, name, options);
    }

    return svg;
  } catch (err) {
    console.error(err);
    return document.createTextNode('');
  }
}
