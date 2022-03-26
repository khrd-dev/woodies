import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// import 'firebase/auth'
// import 'firebase/database'
// import './assets/styles/styles.scss'

Vue.config.productionTip = false

Vue.use(Vuelidate)

const firebaseConfig = {
  apiKey: "AIzaSyA0ohiw8U9Pxzf_F-vFszfR0TlxnHoaYC8",
  authDomain: "wood-74588.firebaseapp.com",
  projectId: "wood-74588",
  storageBucket: "wood-74588.appspot.com",
  messagingSenderId: "204773786305",
  appId: "1:204773786305:web:df42ed66e11f3ec1738a40",
  measurementId: "G-H4Y9ENS2SW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

new Vue({
  router,
  store,
  analytics,
  render: h => h(App)
}).$mount('#app')
