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

## How It Works

When `svg-gradient` is present, svglet:
1. Sets the `background-image` of the element to a `linear-gradient`.
2. Sets `background-color` to `transparent`.
3. ensuring the gradient is visible only through the icon's mask.

This keeps the DOM clean and leverages native CSS gradients for better performance and flexibility.
