module.exports = (eleventyConfig) => {
    // Copy `/src/css` to `/dist/img`
    eleventyConfig.addPassthroughCopy('src/css');

    // Nunjucks Filter
    eleventyConfig.addNunjucksFilter('formatLocalDate', (date) => date.toLocaleDateString());

    // Nunjucks Shortcode
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
        pathPrefix: process.env.ELEVENTY_ENV === 'production' ? '/11ty-usage/' : '/',
        templateFormats: [
            // https://mozilla.github.io/nunjucks/
            'njk',
            // https://www.11ty.dev/docs/languages/markdown/
            'md',
        ],
    };

}
