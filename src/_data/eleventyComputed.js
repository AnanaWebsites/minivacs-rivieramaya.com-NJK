// Computes a per-page relative prefix (e.g. "./", "../", "../../") that points
// back to the site root, based on the page's resolved URL. Used by templates
// (and mirrors the output transform) so every internal link is emitted as a
// relative path instead of a server-root-absolute one.
module.exports = {
  prefix: (data) => {
    const url = data.page.url || "/";
    const segments = url.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
    const depth = url.endsWith("/") ? segments.length : Math.max(segments.length - 1, 0);
    return depth === 0 ? "./" : "../".repeat(depth);
  },
};
