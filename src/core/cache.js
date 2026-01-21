const iconCache = new Map();

/**
 * Retrieves an icon from the cache.
 * @param {string} name - The name of the icon.
 * @returns {string|undefined} The SVG string or undefined if not found.
 */
export function getIconFromCache(name) {
    return iconCache.get(name);
}

export function saveIconToCache(name, content) {
    iconCache.set(name, content);
}
