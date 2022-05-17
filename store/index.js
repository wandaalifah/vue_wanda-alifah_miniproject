import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    cart: {
        id:0, 
        url:'', 
        menuName:'', 
        price:0, 
        name:'',
        amount: 0,
    },
    carts: [],
})

export const mutations = {
    addCart(state, payload) {
        let exists = false
        Vue.set(state.cart, 'id', payload.id)
        Vue.set(state.cart, 'url', payload.image)
        Vue.set(state.cart, 'menu_name', payload.menuName)
        Vue.set(state.cart, 'price', payload.price)
        Vue.set(state.cart, 'name', payload.name)
        Vue.set(state.cart, 'amount', payload.amount)
        
        for (state.cart of state.carts) {
            if (state.cart.id === payload.id) {
            state.cart.amount = state.cart.amount + 1
            exists = true
            break
            }
        }

        if (!exists) {
            state.carts.push(state.cart, state.cart.amount + 1)
        }
    },
}

export const actions = {
    insertCart(store, payload) {
        store.commit ('addCart', payload)
    }
}