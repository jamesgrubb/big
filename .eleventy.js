const fg = require('fast-glob')
const galleryImages = fg.sync(['**/gallery/*', '!**/_site'])
const jamesImages = fg.sync(['**/james/*', '!**/_site'])
module.exports = (eleventyConfig) => {
    eleventyConfig.addCollection('gallery', function (collection) {
        return galleryImages
    })
    eleventyConfig.addCollection('james', function (collection) {
        return jamesImages
    })

    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('js')

    return {
        passthroughFileCopy: true
    }

}