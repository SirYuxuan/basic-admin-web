import request from '@/utils/request'

/**
 * 用户登录
 * @param data 账号密码
 * @returns {*} token
 */
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data,
    })
}