/**
 * 全局通用配置
 * @type {{Object}}
 */
const setting = {
    baseURL:  process.env.NODE_ENV === 'development'? 'mock-server' : 'http://localhost:10001',
    //开发环境端口号
    devPort: '81',
    // 网站标题
    title: '雨轩后台管理系统',
    //不经过token校验的路由
    routesWhiteList: ['/login', '/register', '/404', '/401'],
    //token在localStorage、sessionStorage存储的key的名称
    tokenTableName: 'YuxuanAdmin',
    //token存储位置localStorage sessionStorage
    storage: 'localStorage',
    //是否显示终端donation打印
    donation: true,
}

module.exports = setting