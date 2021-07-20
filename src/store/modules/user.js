import {
    setToken,
    getToken,
} from '@/utils/token'

import {login} from "@/api/system/user";

const state = {
    token: getToken()
}
const getters = {
    token: state => state.token
}
const mutations = {
    SET_TOKEN: (state, token) => {
        setToken(token)
        state.token = token
    }
}

const actions = {
    async login({commit}, userInfo){
        await login(userInfo).then(res=>{
            commit('SET_TOKEN','1')
        })
    }
}

export default {
    namespaced: true,
    getters,state, mutations, actions
}