import shop from "../../api/products";

// initial state
const state = () => ({
  optionProducts: [],
  optionTypes: [],
  optionSystems: [],
  icons: [],
  productValue: "",
  typeValue: "",
  systemValue: "",
  iconSrc: "",
});

// getters
const getters = {
  allOptionProducts(state) {
    return state.optionProducts;
  },
  allOptionTypes(state) {
    return state.optionTypes;
  },
  allOptionSystems(state) {
    return state.optionSystems;
  },
  allIcons(state) {
    return state.icons;
  },
  activeProductValue(state) {
    return state.productValue;
  },
  activeTypeValue(state) {
    return state.typeValue;
  },
  activeSystemValue(state) {
    return state.systemValue;
  },
  activeIconSrc(state) {
    return state.iconSrc;
  },
};

// actions
const actions = {
  async takeOptionProducts({ commit }) {
    const allProducts = await shop.getProducts();
    const options = [...new Set(allProducts.map((p) => p.product))];

    commit("setOptionProducts", options);
    commit("setProductValue", options[0]);
  },
  async takeOptionTypes({ commit }) {
    const allProducts = await shop.getProducts();
    const options = [...new Set(allProducts.map((p) => p.type))];

    commit("setOptionTypes", options);
    commit("setTypeValue", options[0]);
  },
  async takeOptionSystems({ commit }) {
    const allProducts = await shop.getProducts();
    const options = Object.keys(allProducts[0].systems);

    commit("setOptionSystems", options);
    commit("setSystemValue", options[0]);
  },
  async takeIcons({ commit }) {
    const allProducts = await shop.getProducts();
    const icons = [...new Set(allProducts.map((p) => p.iconSrc))];

    commit("setIcons", icons);
    commit("setIconSrc", icons[0]);
  },
};

// mutations
const mutations = {
  setOptionProducts(state, options) {
    state.optionProducts = options;
  },
  setOptionTypes(state, options) {
    state.optionTypes = options;
  },
  setOptionSystems(state, options) {
    state.optionSystems = options;
  },
  setIcons(state, icons) {
    state.icons = icons;
  },
  setProductValue(state, value) {
    state.productValue = value;
  },
  setTypeValue(state, value) {
    state.typeValue = value;
  },
  setSystemValue(state, value) {
    state.systemValue = value;
  },
  setIconSrc(state, value) {
    state.iconSrc = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
