import { title } from '@/config'

/**
 * 设置页面标题
 * @param pageTitle 标题
 * @returns {`${string}-${string}`|`${string}`} 页面标题
 */
export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle}-${title}`
    }
    return `${title}`
}