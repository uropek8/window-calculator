import { createStore } from "vuex";
import order from "./modules/order";
import params from "./modules/params";

export default createStore({
  modules: {
    order,
    params,
  },
});
