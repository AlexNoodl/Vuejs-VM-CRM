import Vue from "vue";
import VueMeta from 'vue-meta'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import dateFilter from "@/filters/date.filter";
import "./registerServiceWorker";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";
import Loader from '@/components/app/Loader';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"
import currencyFilter from '@/filters/currency.filter';
import tooltipDirective from "@/directives/tooltip.directive"
import Paginate from 'vuejs-paginate'
import localizeFilter from '@/filters/localize.filter';
import titlePlugin from "@/utils/title.plugin"

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter)
Vue.filter("localize", localizeFilter)
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.use(VueMeta)
Vue.use(titlePlugin)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)
Vue.directive('tooltip', tooltipDirective)

const firebaseConfig = {
  apiKey: "AIzaSyA6HyTVaUo3BDyXp72yoJFdYJjP_lbKlwI",
  authDomain: "vuejs-crm-course.firebaseapp.com",
  databaseURL: "https://vuejs-crm-course.firebaseio.com",
  projectId: "vuejs-crm-course",
  storageBucket: "vuejs-crm-course.appspot.com",
  messagingSenderId: "692518267580",
  appId: "1:692518267580:web:671903a2a488fc05527eb9"
};

let app;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
