export function applyGradient(element, name, options) {
  const fromColor = options.from;
  const toColor = options.to;

  // With mask-image, the icon color comes from the background of the element.
  // We simply apply a linear-gradient background.
  // We also explicitly set background-color to transparent to ensure the gradient takes precedence
  // and to satisfy the requirement of "disabling background-color in favor of background-image".

  element.style.backgroundColor = 'transparent';
  element.style.backgroundImage = `linear-gradient(to right, ${fromColor}, ${toColor})`;
}
