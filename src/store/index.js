import { createStore } from 'vuex'

const store = createStore({
    state: {
        path:'',
        isMobile: false,
    },
    getters: {

    },
    mutations: {
        setIsMobile(state,payload) {
            state.isMobile = payload
        },
        setPath(state,payload) {
            state.path = payload
        }
    },
    actions: {

    }
})

export default store