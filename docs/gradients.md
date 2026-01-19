# SVG Gradients

svglet provides a built-in way to apply beautiful linear gradients to your icons without writing complex SVG definitions manually.

## Enabling Gradients

To apply a gradient to an icon, add the `svg-gradient` class to your placeholder element.

```html
<i data-icon="star" class="svg-gradient"></i>
```

By default, this applies a Blue-to-Pink gradient.

## Customizing Colors

You can override the default gradient colors using `data-gradient-from` and `data-gradient-to` attributes. You can use any valid CSS color value (hex, rgb, hsl, named colors).

### Example

```html
<!-- A purple to orange gradient -->
<i 
  data-icon="rocket" 
  class="svg-gradient" 
  data-gradient-from="#8b5cf6" 
  data-gradient-to="#f97316"
></i>
```

## How It Works

When `svg-gradient` is present, svglet:
1. Generates a unique `<linearGradient>` definition.
2. Injects it into a `<defs>` block within the SVG.
3. Updates the `fill` or `stroke` of the icon's paths to reference this new gradient ID.

This ensures that even if you have multiple of the same icon on a page, they can each have their own unique gradients.
