import { createStore, createLogger } from 'vuex'
import getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})


export default createStore({
    getters,
    modules,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})