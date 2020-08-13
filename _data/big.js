
const cloudinary = require('cloudinary')
require('dotenv').config()
cloudinary.config({
    cloud_name: 'makingthings',
    api_key: '973853637713883',
    api_secret: process.env.CLOUDINARY_API_SECRET
})
module.exports = async () => {
    try {
        const data = await cloudinary.v2.api.resources({
            type: 'upload',
            prefix: 'big/'
        },
            function (error, result) {
                console.log(error)

            })
        return data.resources
    }
    catch (error) {
        console.log(error)
    }
}