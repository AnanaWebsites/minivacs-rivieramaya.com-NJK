// Launcher shim so `npx @11ty/eleventy` works when run from THIS directory too.
// With the complete project (git, package.json, node_modules, netlify.toml, src/, config)
module.exports = function(eleventyConfig) {
  // Eleventy copie des dossiers vers le dossier de sortie (_site)
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("imagenesMVRM");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data" // 👈 Esto le dice que busque en "src/_data" si el input es "src"
    }
  };
};
