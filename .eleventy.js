const fg = require('fast-glob')
const galleryImages = fg.sync(['**/gallery/*', '!**/_site'])

module.exports = (eleventyConfig) => {
    eleventyConfig.addCollection('gallery', function (collection) {
        return galleryImages
    })
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('js')

    return {
        passthroughFileCopy: true
    }

}