import { config } from '../config/defaults.js';
import { getIconFromCache, saveIconToCache } from './cache.js';

export async function loadIcon(name, options = {}) {
  // In the mask-image model, we primarily need the URL.
  // However, we can still use the cache layer if we want to support
  // "pre-checking" or future offline capabilities, but for now
  // we simply resolve the URL unless we implement a more complex
  // service worker or blob caching strategy.

  // The simplified requirement is to return the URL for the mask.
  const iconUrl = `${config.iconPath}/${name}.svg`;

  // We keep the cache/loader structure for future extensibility (v0.8.0),
  // but for the mask-image implementation we don't need to fetch text.

  return iconUrl;
}
