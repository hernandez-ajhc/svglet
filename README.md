<p align="center">
  <img src="assets/icon/svglet_logo.png" alt="svglet logo" width="700" />
</p>

# svglet

> A lightweight, zero-dependency SVG icon loader for the modern web.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.1.0-green.svg)

**svglet** replaces `<i data-icon="name"></i>` elements with inline SVG code loaded from your local `icons/` folder. It's designed to be simple, fast, and privacy-friendly.

## Features

- 🚀 **Zero Dependencies**: Pure Vanilla JS. No build step required.
- 🎨 **Fully Stylable**: Inline SVGs mean `currentColor`, CSS, and Tailwind just work.
- ✨ **Gradients**: Built-in support for SVG gradients via data attributes.
- 🔒 **Privacy First**: Icons load from your own server, not a third-party CDN.

## Quick Start

1. **Download** the latest release or clone the repo.
2. **Include** the script in your HTML:

```html
<script src="dist/svglet.min.js"></script>
```

3. **Add Icons** to your page:
   *(Ensure you have an `icons/` folder with your .svg files)*

```html
<i data-icon="menu"></i>
<i data-icon="heart" class="text-red-500"></i>
```

## Documentation

- [Introduction](docs/introduction.md)
- [Installation](docs/installation.md)
- [Usage Guide](docs/usage.md)
- [Configuration](docs/configuration.md)
- [Gradients](docs/gradients.md)
- [Roadmap](docs/roadmap.md)

## Roadmap

We have exciting plans for v0.2.0 including configurable paths and caching. Check out the full [Roadmap](docs/roadmap.md).

## License

MIT © [svglet contributors]