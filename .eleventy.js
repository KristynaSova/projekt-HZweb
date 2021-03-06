module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

  	// Zkopírovat favicon/ do icons

  eleventyConfig.addPassthroughCopy("icons");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");


	eleventyConfig.addPassthroughCopy("js");

  // admin složka pro Netlify CMS
  eleventyConfig.addPassthroughCopy("admin");


  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
