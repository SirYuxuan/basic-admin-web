import log from "@/utils/log"
// 路由守卫
import '@/router/guard'
// ElementUI for Vue3.X
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// 雨轩后台管理系统全局样式
import '@/style/yuxuan.scss'
// SVG 图标
import '@/assets/icons'
import SvgIcon from '@/components/SvgIcon'


/**
 * 全局插件注册
 * @param app
 */
const install = (app) => {
    // 日志模块
    log(app)
    // ElementUI
    app.use(ElementPlus, {locale})
    // svg图标
    app.component('svg-icon', SvgIcon)
    // 注册Layout相关组件
    const requireComponents = require.context('../layout/components', true, /\.vue$/)
    requireComponents.keys().forEach((fileName) => {
        const componentConfig = requireComponents(fileName)
        const componentName = componentConfig.default.name
        app.component(componentName, componentConfig.default || componentConfig)
    })
}


export default install