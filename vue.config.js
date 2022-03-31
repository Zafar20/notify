module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/modals/'
    : '/',
    assetsDir: 'assets',
    productionSourceMap: false, // Убираем файлы map
    css: {
        sourceMap: true
    }
}
