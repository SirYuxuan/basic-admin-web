import router from './index'
import store from '@/store'
import {
    routesWhiteList,
} from '@/config'
import getPageTitle from '@/utils/pageTitle'
/**
 * 路由守卫，鉴权处理等操作
 */
router.beforeEach((to) => {

    // 访问的地址在白名单中，直接放行
    if(routesWhiteList.indexOf(to.path) !== -1){
        return true
    }

    const hasToken = store.getters['user/token']
    console.log('获取Token')
    if (!hasToken) {
       return `/login?redirect=${to.path}`
    }


    return true
})

router.afterEach((to) => {
    document.title = getPageTitle(to.meta.title)
})