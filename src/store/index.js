// import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import { getDatabase, ref, get } from "firebase/database";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        error: null,
        info: {},
    },
    mutations: {
        setError(state, error) {
            state.error = error;
        },
        clearError(state) {
            state.error = null;
        },
        setProducts(state, productsData) {
            state.products = productsData;
        },
        setInfo(state, infoData) {
            state.info = infoData;
        },
        clearInfo(state) {
            state.info = {};
            state.products = [];
        },
        setCart(state, itemCartData) {
            state.cart.push(itemCartData);
        },
    },
    actions: {
        async getProducts() {
            try {
                const db = getDatabase();
                const productsRef = ref(db, `/products/`);
                let productsData = [];
                await get(productsRef).then((snapshot) => {
                    productsData = snapshot.val();
                });
                this.commit("setProducts", productsData);
            } catch (e) {
                this.commit("setError", e);
                throw e;
            }
        },
        async fetchInfo({ dispatch, commit }) {
            const uid = await dispatch("getUid");
            if (uid !== null) {
                try {
                    const db = getDatabase();
                    const infoRef = ref(db, `/users/${uid}/info/`);

                    let infoData = {};
                    await get(infoRef).then((snapshot) => {
                        infoData = snapshot.val();
                    });

                    commit("setInfo", infoData);
                } catch (e) {
                    commit("setError", e);
                    throw e;
                }
            }
        },
        addToCart({ commit }, itemCartData) {
            commit("setCart", itemCartData);
        },
    },
    modules: {
        auth,
    },
    getters: {
        error: (s) => s.error,
        products: (s) => s.products,
        cart: (s) => s.cart,
        info: (s) => s.info,
    },
});
