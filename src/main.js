import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"
import './assets/tailwind.css'
import Unicon from 'vue-unicons'
import VueProgressBar from "@aacassandra/vue3-progressbar";
const options = {
    color: "#bffaf3",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
      speed: "0.2s",
      opacity: "0.6s",
      termination: 300,
    },
    autoRevert: true,
    location: "left",
    inverse: false,
  }
import { uniFacebookFMonochrome,uniGoogleMonochrome } from 'vue-unicons/dist/icons'


Unicon.add([uniFacebookFMonochrome,uniGoogleMonochrome])
createApp(App).use(router).use(Unicon).use(VueProgressBar, options).use(store).mount('#app')
