<p align="center">
  <img src="assets/icon/svglet_logo.png" alt="svglet logo" width="700" />
</p>

# svglet

> A lightweight, zero-dependency SVG icon loader focused on clean HTML and better organization.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.3.0-green.svg)

**svglet** is a small vanilla JavaScript library that renders local SVG icons using
`<i data-icon="name"></i>` elements with CSS tagging.

Its goal is simple:  
**keep your HTML clean, your icons organized, and your workflow flexible**.


## Why svglet?

Inline SVGs are powerful, but copying and pasting large SVG blocks into HTML quickly becomes messy and error-prone.

**svglet solves this by:**
- Keeping all SVG files in a single folder
- Injecting them automatically at runtime
- Letting CSS and Tailwind do the styling work

**No frameworks. No dependencies. No build step.**


## Features

- 🚀 **Zero Dependencies**  
  Pure vanilla JavaScript. Works directly in the browser.

- 🧼 **Clean HTML**  
  Keep your DOM clean with simple tags:
  ```html
  <i data-icon="menu"></i>
  ```

- 🎨 **Fully Stylable**  
  Uses CSS `mask-image` rendering, so `currentColor`, CSS animations, and Tailwind utilities work naturally.

- ✨ **Gradient Support**  
  Built-in support for SVG gradients without extra tooling.

- ⚙️ **Configurable**  
  Customize icon paths and control initialization behavior.

- ⚡ **Caching**  
  Icons are cached to avoid unnecessary network requests.

- 🔒 **Privacy-Friendly**  
  Icons are loaded from your own server — no third-party requests.

### What svglet does NOT do

svglet intentionally avoids unnecessary complexity.

- ❌ It does not style icons for you
- ❌ It does not replace CSS or Tailwind
- ❌ It does not require a framework
- ❌ It does not introduce a build step

**svglet focuses on organization and injection, not abstraction.**

## Quick Start

1. **Include svglet**

   ```html
   <script src="dist/svglet.min.js"></script>
   ```

2. **Organize your icons**

   ```
   /icons
     menu.svg
     heart.svg
     user.svg
   ```

3. **Use icons in your HTML**

   ```html
   <i data-icon="menu"></i>
   <i data-icon="heart" class="text-red-500"></i>
   ```

   That’s it. svglet will replace those elements with inline SVG automatically.

## Styling & Animations

Because svglet uses standard elements with CSS masks, you can style them like any other element:

```html
<i data-icon="youtube" class="text-4xl text-red-500 hover:scale-110"></i>
```

Animations, colors, sizes, gradients — all handled by CSS or Tailwind.

### Built-in Animations

svglet v0.3.0+ comes with built-in utility classes for common animations:

| Class | Description |
| :--- | :--- |
| `svg-spin` | Rotates the icon 360° |
| `svg-spin-reverse` | Rotates the icon -360° |
| `svg-spin-pulse` | 8-step rotation |
| `svg-beat` | Scales up and down |
| `svg-beat-fade` | Scales and fades |
| `svg-bounce` | Jumps up and down |
| `svg-fade` | Fades in and out |
| `svg-flip` | Flips on Y-axis |
| `svg-shake` | Shakes back and forth |

### Modifiers

You can customize the animation behavior with modifier classes:

#### Hover Only
Prefix any animation with `svg-hover-` to run it only when hovering over the element:
* `svg-hover-spin`
* `svg-hover-bounce`
* `svg-hover-beat`
* ...and so on.

#### Speed Control
Adjust the animation speed:
* `svg-fast` (0.5s)
* `svg-slow` (2s)
* `svg-super-slow` (3s)

Example:

```html
<!-- Spins continuously -->
<i data-icon="star" class="svg-spin text-yellow-500"></i>

<!-- Spins only on hover, fast -->
<i data-icon="star" class="svg-hover-spin svg-fast text-yellow-500"></i>
```

## Documentation

- 📘 [Introduction](docs/introduction.md)
- 📦 [Installation](docs/installation.md)
- 🧠 [Usage Guide](docs/usage.md)
- ⚙️ [Configuration](docs/configuration.md)
- 🎨 [Gradients](docs/gradients.md)
- 🗺️ [Roadmap](docs/roadmap.md)

## Roadmap

**svglet** is actively evolving. Upcoming releases focus on performance, caching, better DX, and long-term stability.

See the full roadmap here:  
👉 [docs/roadmap.md](docs/roadmap.md)

## Contributing

Contributions are welcome ❤️

Please read our guidelines before opening an issue or pull request:  
👉 [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT © [svglet contributors]
