// import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import info from "./info";
import { getDatabase, ref, get } from "firebase/database";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
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
        clearInfo(state) {
            state.info = {};
            state.products = [];
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
    },
    modules: {
        auth,
        info,
    },
    getters: {
        error: (s) => s.error,
        products: (s) => s.products,
    },
});
