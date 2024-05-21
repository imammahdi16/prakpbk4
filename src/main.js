import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import axios from "axios";
import ComponentA from "./components/ComponentA.vue";
import SlotComponent from "./components/SlotComponent.vue";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.component("ComponentA", ComponentA);
app.component("SlotComponent", SlotComponent);
app.mount("#app");
