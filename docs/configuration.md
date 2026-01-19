# Configuration

## Global Configuration

> [!WARNING]
> In version **0.1.0**, global configuration options (like changing the default icon path) are not yet exposed via a public API. This feature is planned for v0.2.0.

Currently, the default settings are:
- **Icon Path**: `../../examples/icons`
- **Default Size**: `1em`
- **Gradient Colors**: Blue (`#1d4ed8`) to Pink (`#f43f5e`)

## Per-Instance Configuration

You can configure specific instances of icons using data attributes, specifically for gradients.

| Attribute | Description | Default |
| :--- | :--- | :--- |
| `data-icon` | The name of the SVG file to load. | **Required** |
| `data-gradient-from` | Start color for the gradient. | `#1d4ed8` |
| `data-gradient-to` | End color for the gradient. | `#f43f5e` |

For these gradient attributes to take effect, the element must also have the `svg-gradient` class. See [Gradients](./gradients.md) for more details.
