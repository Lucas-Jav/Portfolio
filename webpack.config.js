const path = require('path')

module.exports = {
    entry: {
        index: './src/script.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    }
}