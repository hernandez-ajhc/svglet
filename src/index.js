import { replaceIcons } from './core/replacer.js';
import { updateConfig } from './config/defaults.js';
import { injectStyles } from './core/styles.js';

export function init(options = {}) {
  updateConfig(options);
  injectStyles();
  replaceIcons();
}

// Auto-init unless disabled
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Check if the script tag has data-auto-init="false"
    // This is a bit tricky since we don't know which script tag is IS.
    // However, for module scripts, `import.meta.url` might help but for now:
    // We'll just run it. If the user imports it, they can use `init`.
    // If they include it via script tag, it runs.

    // A simple heuristic: if window.svgletAutoInit is explicitly false, don't run.
    if (window.svgletAutoInit !== false) {
      injectStyles();
      replaceIcons();
    }
  });
}
