import { DEFAULTS } from '../config/defaults.js';
import { applyGradient } from './gradient.js';

export async function loadIcon(name, options = {}) {
  try {
    const res = await fetch(`${DEFAULTS.iconPath}/${name}.svg`);
    if (!res.ok) throw new Error(`Icon not found: ${name}`);

    const svgText = await res.text();

    const container = document.createElement('div');
    container.innerHTML = svgText.trim();
    const svg = container.firstElementChild;

    Object.assign(svg.style, {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: DEFAULTS.size,
      height: DEFAULTS.size,
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
