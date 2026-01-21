# Configuration

Svglet works out of the box, but you can configure it to fit your project structure.

## Default Configuration

By default, `svglet` automagically finds all elements with `data-icon`, resolves the corresponding SVG from `icons/`, and applies it as a mask.

```javascript
{
  iconPath: '../../examples/icons',
  classPrefix: '',
  size: '1em',
  gradientFrom: '#1d4ed8',
  gradientTo: '#f43f5e',
} // Default values
```

## Custom Configuration

You can configure `svglet` by calling the `init` function manually.

### Manual Initialization

To prevent auto-initialization, add `data-auto-init="false"` to your script tag (support strictly depends on setup) OR simply define `window.svgletAutoInit = false` BEFORE loading the script.

```html
<script>
  window.svgletAutoInit = false; // Disable auto-run
</script>
<script type="module">
  import { init } from './dist/svglet.js';

  init({
    iconPath: '/assets/icons', // Path to your icons folder
    classPrefix: 'icon-',      // Optional prefix for classes
    gradientFrom: '#000000',   // Custom default gradient start
    gradientTo: '#ffffff'      // Custom default gradient end
  });
</script>
```

### Options Reference

| Option | Type | Default | Description |
|Col1|Col2|Col3|Col4|
|---|---|---|---|
| `iconPath` | string | `../../examples/icons` | Path to the directory containing `.svg` files. |
| `size` | string | `1em` | Default width and height for icons. |
| `gradientFrom` | string | `#1d4ed8` | Default start color for gradients. |
| `gradientTo` | string | `#f43f5e` | Default end color for gradients. |
