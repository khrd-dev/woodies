import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios("https://wood-74588-default-rtdb.firebaseio.com/", {
                method: "GET",
                mode: "cors",
            })
                .then((products) => {
                    commit("SET_PRODUCTS_TO_STATE", products);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        },
    },
    modules: {
        auth,
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
    },
});
