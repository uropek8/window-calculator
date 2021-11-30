export default (store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === "order/setProductValue") {
      console.log("Product value from Vuex plugin: ", state.order.productValue);
    }
  });
};
