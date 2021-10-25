import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

//PRIMEVUE COMPONENTS
import Knob from "primevue/knob";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(Password);
app.use(InputText);
app.use(Button);

app.component("Knob", Knob);
app.component("Password", Password);
app.component("InputText", InputText);
app.component("Button", Button);

app.mount("#app");
