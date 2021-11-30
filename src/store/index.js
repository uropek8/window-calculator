import { createStore } from "vuex";
import notifyPlugin from "../plugins/notifyPlugin";
import order from "./modules/order";
import params from "./modules/params";

export default createStore({
  modules: {
    order,
    params,
  },
  plugins: [notifyPlugin],
});
