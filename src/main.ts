import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";

import Bugsnag from "@bugsnag/js";
import BugsnagPluginVue from "@bugsnag/plugin-vue";

Bugsnag.start({
  apiKey: "29121ca6f71c188ff19325dc242bc787",
  plugins: [new BugsnagPluginVue()]
});

import DashboardLayout from "./layouts/DashboardLayout.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";

const app = createApp(App);

app.component("dashboard-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);

app
  .use(store)
  .use(router)
  .mount("#app");
