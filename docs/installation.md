# Installation

Getting started with svglet is as simple as adding a script tag to your HTML file.

## Method 1: Pre-built Bundle (Recommended)

Download the `dist/svglet.min.js` file and include it in your project.

```html
<script src="path/to/svglet.min.js"></script>
```

This bundle automatically initializes `svglet` and starts replacing icons as soon as the DOM is ready.

## Method 2: ES Module

If you prefer using ES modules or are working within a module-based environment, you can import the source directly.

```html
<script type="module" src="path/to/src/index.js"></script>
```

## Icons Setup

svglet expects your SVG icons to be located in a local folder.
By default (in v0.1.0), svglet looks for icons in `../../examples/icons` relative to the script's execution context.

> [!NOTE]
> **Important**: In version 0.1.0, the icon path is currently fixed to a specific relative path for demonstration purposes. Configurable icon paths are coming in v0.2.0. Please ensure your project structure accommodates this or modify the source `src/config/defaults.js` if you need a custom path immediately.

Ensure your icons are standard `.svg` files cleaned of hardcoded colors (use `currentColor` or remove fill attributes) to maximize flexibility.
