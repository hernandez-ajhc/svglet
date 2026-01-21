# Usage Guide

## Basic Usage

1.  **Add `data-icon` attributes** to your HTML elements.
2.  **Include `svglet`** at the bottom of your body.

```html
<i data-icon="menu"></i>
<script src="dist/svglet.js"></script>
```

By default, `svglet` automagically finds all elements with `data-icon`, resolves the SVG from `icons/`, and applies it as a mask.

## Advanced Usage

### Manual Initialization (v0.2.0+)

If you want more control, or need to configure paths, you can initialize `svglet` manually.

```html
<!-- prevent auto-init -->
<script>window.svgletAutoInit = false;</script>

<!-- Load module -->
<script type="module">
  import { init } from './dist/svglet.js';

  init({
    iconPath: '/assets/ui/icons',
    classPrefix: 'ui-icon-'
  });
</script>
```

### Gradients

You can also apply gradients directly via data attributes:

```html
<i data-icon="star" 
   class="svg-gradient" 
   data-gradient-from="#FFD700" 
   data-gradient-to="#FF4500">
</i>
```

See [Gradients](gradients.md) for more details.
