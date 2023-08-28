module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => {
      // https://www.11ty.dev/docs/data-eleventy-supplied/#changing-your-project-default-permalinks
      // NOTE: we can't have both README and index in the same document and
      // expect the permalink mapping to work correctly.
      let stem = data.page.filePathStem.replace("README", "index");
      let ext = data.page.outputFileExtension;
      return `${stem}.${ext}`;
    };
  });
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "../users",
      output: "dist",
      includes: "../site/_includes",
      data: "../site/_data",
    },
  };
};
