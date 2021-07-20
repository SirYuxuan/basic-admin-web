/**
 * 日志模块安装
 * @param app
 */
const install = (app) => {

    app.config.globalProperties['$log'] = {
        info(str){
            console.log(str)
        }
    }
}


export default install