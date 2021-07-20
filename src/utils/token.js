import { storage, tokenTableName } from '@/config'

/**
 * 获取Token
 * @returns {string} token数据
 */
export function getToken() {
    if (storage) {
        if ('localStorage' === storage) {
            return localStorage.getItem(tokenTableName)
        } else if ('sessionStorage' === storage) {
            return sessionStorage.getItem(tokenTableName)
        } else {
            return localStorage.getItem(tokenTableName)
        }
    } else {
        return localStorage.getItem(tokenTableName)
    }
}

/**
 * 设置token
 * @param accessToken token数据
 */
export function setToken(accessToken) {
    if (storage) {
        if ('localStorage' === storage) {
            return localStorage.setItem(tokenTableName, accessToken)
        } else if ('sessionStorage' === storage) {
            return sessionStorage.setItem(tokenTableName, accessToken)
        } else {
            return localStorage.setItem(tokenTableName, accessToken)
        }
    } else {
        return localStorage.setItem(tokenTableName, accessToken)
    }
}

/**
 * 移除token数据
 */
export function removeToken() {
    if (storage) {
        if ('localStorage' === storage) {
            return localStorage.removeItem(tokenTableName)
        } else if ('sessionStorage' === storage) {
            return sessionStorage.clear()
        } else {
            return localStorage.removeItem(tokenTableName)
        }
    } else {
        return localStorage.removeItem(tokenTableName)
    }
}