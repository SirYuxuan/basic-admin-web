const path = require('path')
const dayjs = require('dayjs')
const time = dayjs().format('YYYY-M-D HH:mm:ss')
const Webpack = require('webpack')
const WebpackBar = require('webpackbar')
const resolve = (dir) => path.join(__dirname, dir)
const FileManagerPlugin = require('filemanager-webpack-plugin')

const {title, devPort,donation} = require('./src/config')
const { webpackBarName, webpackBanner, donationConsole } = require('./src/config/welcome')

if (donation) donationConsole()
process.env.VUE_APP_TITLE = title

const mockServer = () => {
    if (process.env.NODE_ENV === 'development') return require('./mock')
    else return ''
}

module.exports = {
    devServer: {
        hot: true,
        port: devPort,
        open: false,
        noInfo: false,
        overlay: {
            warnings: true,
            errors: true,
        },
        after: mockServer(),
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    chainWebpack(config){
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
        config
            .plugin('banner')
            .use(Webpack.BannerPlugin, [`${webpackBanner}${time}`])
            .end()

    },
    // webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [
            new WebpackBar({
                name: webpackBarName,
            }),
            // 打包压缩插件
            new FileManagerPlugin({
                events: {
                    onEnd: {
                        mkdir: ['./dist'],
                        archive: [
                            {source: './dist', destination: './dist/dist.zip'},
                        ]
                    }
                }
            })
        ]
    },

    css: {
        requireModuleExtension: true,
        sourceMap: true,
        loaderOptions: {
            scss: {
                additionalData(content, loaderContext) {
                    const { resourcePath, rootContext } = loaderContext
                    const relativePath = path.relative(rootContext, resourcePath)
                    if (
                        relativePath.replace(/\\/g, '/') !== 'src/style/variables.scss'
                    ) {
                        return '@import "~@/style/variables.scss";' + content
                    }
                    return content
                },
            },
        },
    }
}
