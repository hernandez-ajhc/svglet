# Roadmap

We are actively working on improving **svglet**. Below is our planned roadmap for future releases.

## v0.1.0
- ✅ Initial release
- ✅ SVG rendering
- ✅ `currentColor` support
- ✅ Basic gradient support

## v0.2.0: Flexibility Update
- ✅ **Configurable Icon Path**: API to set a custom path for icons (removing the hardcoded dependency).
- ✅ **Caching**: Browser-side caching of fetched SVGs to reduce network requests.
- ✅ **Auto-init Toggle**: Option to manually trigger scanning instead of auto-running on load.

## v0.3.0: Animation & Rendering Update (Current)
- ✅ **CSS Mask Rendering**: Switched to `mask-image` for cleaner DOM and better performance.
- ✅ **CSS-based Icon Animations**: Built-in classes for spinning, bouncing, and fading icons.

## v0.4.0: Developer Experience
- ⬜ **Improved Error Handling**: Clear and descriptive `console.warn` messages when an icon is missing or fails to load.
- ⬜ **Debug Mode**: Optional debug mode to log internal actions and loading states.
- ⬜ **Better Documentation**: More examples and usage patterns focused on real-world scenarios.

## v0.5.0: Ecosystem
- ⬜ **Official Icon Packs**: Curated icon sets ready to use out of the box.
- ⬜ **CLI (Optional Tooling)**: A lightweight CLI to help validate and optimize SVG files (no required build step).

## v0.6.0: Distribution & Packaging
- ⬜ **npm Package**: Official publication on npm for easy installation.
- ⬜ **CDN Support**: Ready-to-use builds via CDN (UMD/ESM).
- ⬜ **Minimal Build Output**: Small, framework-agnostic bundles with zero dependencies.

## v0.7.0: Core API Stabilization
- ⬜ **Stable Initialization API**: `svglet.init()` with clearly documented options.
- ⬜ **Manual Controls**: Public methods such as `scan()`, `load()`, and `preload()` for advanced use cases.
- ⬜ **Predictable Behavior**: Well-defined defaults that work out of the box without configuration.

## v0.8.0: Performance & Caching Improvements
- ⬜ **In-Memory Cache by Default**: Prevent repeated network requests for the same icon.
- ⬜ **Optional Persistent Cache**: Ability to persist icons using browser storage (opt-in).
- ⬜ **Cache Management API**: Methods to clear or reset cached icons when needed.

## v0.9.0: Dynamic Content Support
- ⬜ **MutationObserver Support (Optional)**: Automatically detect and load icons added dynamically to the DOM.
- ⬜ **Graceful Fallbacks**: Safe behavior when icons cannot be resolved.
- ⬜ **Better Runtime Feedback**: Improved warnings and recovery strategies.

## v1.0.0: Stable Release
- ⬜ **Stable Public API**: Semver-guaranteed API stability.
- ⬜ **Comprehensive Documentation**: Clear guides for CSS, Tailwind, and vanilla usage.
- ⬜ **Public Demo Page**: Interactive examples showcasing common patterns.
- ⬜ **Performance Benchmarks**: Transparent performance characteristics.

## v1.1.0: Icon Organization & Variants
- ⬜ **Icon Variants Support**: Outline, solid, duotone, or custom variants through a simple naming convention.
- ⬜ **Configurable Defaults**: Ability to define a default variant globally.
- ⬜ **Cleaner Project Structure**: Encourage organized icon directories without enforcing complexity.

## v1.2.0: Extensibility
- ⬜ **Lifecycle Hooks**: Optional hooks such as `onLoad` and `onError`.
- ⬜ **Advanced Integration Patterns**: Better support for dynamic frameworks while keeping svglet framework-agnostic.
- ⬜ **Improved Contribution Guidelines**: Easier onboarding for contributors.

## v1.x: Long-Term Ideas (Community Driven)
- ⬜ **SVG Validation Tools**: Optional tools to ensure SVG consistency.
- ⬜ **Framework Wrappers (Optional)**: Thin wrappers for popular frameworks if the community requests them.
- ⬜ **Additional Official Icon Packs**: Expanded icon collections maintained by the project.

## Final note

This roadmap focuses on keeping **svglet** simple, predictable, and flexible—prioritizing real-world usability over unnecessary abstraction.