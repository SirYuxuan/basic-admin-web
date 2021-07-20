module.exports = {
    webpackBarName: 'Yuxuan Admin',
    webpackBanner: ' build: Yuxuan Admin time: ',
    donationConsole() {
        const chalk = require('chalk')
        console.log(chalk.green(`> 欢迎使用Yuxuan Admin`))

        console.log(chalk.green(`> 如果您不希望显示以上信息，可在config中配置关闭`))
        console.log('\n')
    },
}
