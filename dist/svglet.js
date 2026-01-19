/**
 * svglet v0.1.0
 * Lightweight local SVG icon loader
 */

const SVGLET_ICON_PATH = '../../examples/icons';

/**
 * Load an SVG icon by name
 */
async function loadSvgIcon(name, options = {}) {
  try {
    const response = await fetch(`${SVGLET_ICON_PATH}/${name}.svg`);
    if (!response.ok) {
      throw new Error(`svglet: icon "${name}" not found`);
    }

    const svgText = await response.text();
    const wrapper = document.createElement('div');
    wrapper.innerHTML = svgText.trim();

    const svg = wrapper.firstElementChild;
    if (!svg || svg.tagName.toLowerCase() !== 'svg') {
      throw new Error(`svglet: invalid SVG "${name}"`);
    }

    // Base sizing (Tailwind / CSS friendly)
    svg.style.width = '1em';
    svg.style.height = '1em';
    svg.style.display = 'inline-block';
    svg.style.verticalAlign = 'middle';

    // Force currentColor
    svg.querySelectorAll('*').forEach(el => {
      if (el.hasAttribute('fill')) el.setAttribute('fill', 'currentColor');
      if (el.hasAttribute('stroke')) el.setAttribute('stroke', 'currentColor');
    });

    // Optional gradient
    if (options.gradient) {
      const from = options.from || '#1d4ed8';
      const to = options.to || '#f43f5e';
      const gradientId = `svglet-gradient-${Math.random().toString(36).slice(2)}`;

      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.innerHTML = `
        <linearGradient id="${gradientId}">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      `;
      svg.prepend(defs);

      svg.querySelectorAll('path, circle, rect, polygon, line, polyline, ellipse')
        .forEach(el => {
          const hasStroke = el.hasAttribute('stroke') && el.getAttribute('stroke') !== 'none';
          const hasFill = el.hasAttribute('fill') && el.getAttribute('fill') !== 'none';

          if (hasStroke && !hasFill) {
            el.setAttribute('stroke', `url(#${gradientId})`);
          } else {
            el.setAttribute('fill', `url(#${gradientId})`);
          }
        });
    }

    return svg;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

/**
 * Replace all elements with data-icon
 */
async function replaceSvgletIcons() {
  const elements = document.querySelectorAll('[data-icon]');

  for (const el of elements) {
    const name = el.dataset.icon;
    const options = {};

    if (el.classList.contains('svg-gradient')) {
      options.gradient = true;
      options.from = el.dataset.gradientFrom;
      options.to = el.dataset.gradientTo;
    }

    const svg = await loadSvgIcon(name, options);
    if (!svg) continue;

    svg.classList.add(...el.classList);
    el.replaceWith(svg);
  }
}

// Auto-init
document.addEventListener('DOMContentLoaded', replaceSvgletIcons);
