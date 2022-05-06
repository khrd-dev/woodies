import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export default {
    actions: {
        async login({ commit }, { email, password }) {
            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(auth, email, password);
            } catch (e) {
                commit("setError", e);
                throw e;
            }
        },
        async logOut({ commit }) {
            const auth = getAuth();
            await signOut(auth);
            commit("clearInfo");
        },
        async register({ dispatch, commit }, { email, password, name }) {
            try {
                const auth = getAuth();
                const db = getDatabase();
                await createUserWithEmailAndPassword(auth, email, password);
                const uid = await dispatch("getUid");
                const reference = ref(db, `/users/${uid}/info`);
                await set(reference, {
                    name,
                    email,
                    password,
                });
            } catch (e) {
                commit("setError", e);
            }
        },
        getUid() {
            const auth = getAuth();
            const user = auth.currentUser;
            return user ? user.uid : null;
        },
    },
};
