// https://www.11ty.dev/docs/data-computed/

module.exports = {
    layout: 'post',
    tags: ['posts'],
    eleventyComputed: {
        permalink: (data) => {
            const { fileSlug } = data.page;
            // fileSlug is something like "2021-01-28_post-1"
            // Split by the underscore and pop the slug off without the date
            return `${fileSlug.split('_').pop()}/`;
        },
    },
};
