# Usage Guide

Using svglet is straightforward. Once the script is included, you can place icons anywhere in your HTML.

## Basic Syntax

Use any element (commonly `<i>` or `<span>`) with the `data-icon` attribute. The value should match the filename of your SVG icon (without the extension).

```html
<!-- Loads icons/user.svg -->
<i data-icon="user"></i>

<!-- Loads icons/menu.svg -->
<span data-icon="menu"></span>
```

## Styling Icons

Since svglet injects inline SVGs, you can control their appearance using CSS.

### Sizing

Icons default to `1em` width and height, meaning they scale with your text size.

```css
.large-icon {
  font-size: 2rem; /* Icon becomes 2rem x 2rem */
}
```

### Coloring

svglet automatically converts `fill` and `stroke` attributes on common SVG elements to `currentColor`. This means the icon will inherit the text color of its parent or its own color property.

```css
.icon-red {
  color: red;
}
```

```html
<i data-icon="heart" class="icon-red"></i>
```

## Tailwind CSS Example

If you are using Tailwind CSS, utility classes work perfectly.

```html
<i data-icon="twitter" class="text-blue-500 text-3xl hover:text-blue-600 transition"></i>
```
