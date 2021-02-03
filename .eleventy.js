module.exports = (eleventyConfig) => {
    // Nunjucks Filter
    eleventyConfig.addNunjucksShortcode('currentYear', () => new Date().getFullYear().toString());

    return {
        dir: {
            // https://www.11ty.dev/docs/config/#input-directory
            input: 'src',
            // https://www.11ty.dev/docs/config/#output-directory
            output: 'dist',

            // These values are both relative to your input directory.
            // https://www.11ty.dev/docs/config/#directory-for-includes
            includes: '_includes',
            // https://www.11ty.dev/docs/config/#directory-for-layouts-(optional)
            layouts: '_layouts',
        },

        // https://mozilla.github.io/nunjucks/
        templateFormats: ['njk'],
    };
}
