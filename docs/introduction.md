# Introduction to svglet

**svglet** is a lightweight, zero-dependency JavaScript library designed to easily load and render SVG icons in your web projects. It uses CSS `mask-image` to apply icons to elements, allowing for full CSS control, including coloring with `currentColor` and gradients.

## Why svglet?

- **Zero Dependencies**: No heavy frameworks or build steps required. Just include the script and go.
- **CSS Native**: Icons are rendered using standard CSS masks, making them fully stylable.
- **Privacy Focused**: Icons are loaded from your local server. No external requests to third-party CDNs.
- **CSS & Tailwind Ready**: Works seamlessly with utility classes and standard CSS.
- **Lightweight**: Minimal footprint to keep your site fast.

## Core Concepts

svglet works by scanning your document for elements with the `data-icon` attribute (e.g., `<i data-icon="menu"></i>`). It then resolves the corresponding `.svg` file and applies it as a mask to the element.

This approach gives you the best of both worlds: the convenience of an icon font, with the flexibility and precision of SVGs.
