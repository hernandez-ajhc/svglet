export function applyGradient(svg, name, options) {
  const fromColor = options.from;
  const toColor = options.to;

  const gradId = `grad-${name}-${Math.floor(Math.random() * 100000)}`;

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `
    <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${fromColor}" />
      <stop offset="100%" stop-color="${toColor}" />
    </linearGradient>
  `;

  svg.prepend(defs);

  svg.querySelectorAll(
    'path, circle, rect, polygon, line, polyline, ellipse'
  ).forEach(el => {
    const hasStroke =
      el.hasAttribute('stroke') && el.getAttribute('stroke') !== 'none';

    const hasFill =
      el.hasAttribute('fill') && el.getAttribute('fill') !== 'none';

    if (hasStroke && !hasFill) {
      el.setAttribute('stroke', `url(#${gradId})`);
    } else {
      el.setAttribute('fill', `url(#${gradId})`);
    }
  });
}
