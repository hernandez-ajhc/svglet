# Introduction to svglet

**svglet** is a lightweight, zero-dependency JavaScript library designed to easily load and inject SVG icons into your web projects. It replaces placeholder elements with inline SVG code, allowing for full CSS control, including coloring with `currentColor` and optional SVG gradients.

## Why svglet?

- **Zero Dependencies**: No heavy frameworks or build steps required. Just include the script and go.
- **Inline SVGs**: Icons are injected directly into the DOM, making them fully stylable with CSS.
- **Privacy Focused**: Icons are loaded from your local server. No external requests to third-party CDNs.
- **CSS & Tailwind Ready**: Works seamlessly with utility classes and standard CSS.
- **Lightweight**: Minimal footprint to keep your site fast.

## Core Concepts

svglet works by scanning your document for elements with the `data-icon` attribute (e.g., `<i data-icon="menu"></i>`). It then fetches the corresponding `.svg` file from your local icons directory and replaces the placeholder with the actual SVG code.

This approach gives you the best of both worlds: the convenience of an icon font or library, with the performance and flexibility of inline SVGs.
