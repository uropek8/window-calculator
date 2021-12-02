import shop from "../../api/products";

// initial state
const state = () => ({
  optionPackets: [],
  optionSills: [],
  optionRefluxes: [],
  optionLaminations: [],
  packetTitle: "Стеклопакет",
  sillTitle: "Ширина подоконника",
  refluxTitle: "Ширина отлива",
  laminationTitle: "Ламинация",
  packetValue: "",
  sillValue: "",
  refluxValue: "",
  laminationValue: "",
});

// getters
const getters = {
  allOptionPackets(state) {
    return state.optionPackets;
  },
  allOptionSills(state) {
    return state.optionSills;
  },
  allOptionRefluxes(state) {
    return state.optionRefluxes;
  },
  allOptionLaminations(state) {
    return state.optionLaminations;
  },
  labelPacket(state) {
    return state.packetTitle;
  },
  labelSill(state) {
    return state.sillTitle;
  },
  labelReflux(state) {
    return state.refluxTitle;
  },
  labelLamination(state) {
    return state.laminationTitle;
  },
  activePacketValue(state) {
    return state.packetValue;
  },
  activeSillValue(state) {
    return state.sillValue;
  },
  activeRefluxValue(state) {
    return state.refluxValue;
  },
  activeLaminationValue(state) {
    return state.laminationValue;
  },
};

// actions
const actions = {
  async takeOptionPackets({ commit, getters }) {
    const allParams = await shop.getParams();
    const packetOptions = allParams.find((item) => item.product === getters.labelPacket).value;
    const options = Object.values(packetOptions);
    // const value = Object.keys(options)[0];
    const value = options[0];

    commit("setOptionPackets", options);
    commit("setPacketValue", value);
  },
  async takeOptionSills({ commit, getters }) {
    const allParams = await shop.getParams();
    const sillOptions = allParams.find((item) => item.product === getters.labelSill).value;
    const options = Object.values(sillOptions);
    // const value = Object.keys(options)[0];
    const value = options[0];

    commit("setOptionSills", options);
    commit("setSillValue", value);
  },
  async takeOptionRefluxes({ commit, getters }) {
    const allParams = await shop.getParams();
    const refluxOptions = allParams.find((item) => item.product === getters.labelReflux).value;
    const options = Object.values(refluxOptions);
    // const value = Object.keys(options)[0];
    const value = options[0];

    commit("setOptionRefluxes", options);
    commit("setRefluxValue", value);
  },
  async takeOptionLaminations({ commit, getters }) {
    const allParams = await shop.getParams();
    const laminationOptions = allParams.find((item) => item.product === getters.labelLamination).value;
    const options = Object.values(laminationOptions);
    // const value = Object.keys(options)[0];
    const value = options[0];

    commit("setOptionLaminations", options);
    commit("setLaminationValue", value);
  },
};

// mutations
const mutations = {
  setOptionPackets(state, options) {
    state.optionPackets = options;
  },
  setOptionSills(state, options) {
    state.optionSills = options;
  },
  setOptionRefluxes(state, options) {
    state.optionRefluxes = options;
  },
  setOptionLaminations(state, options) {
    state.optionLaminations = options;
  },
  setPacketValue(state, value) {
    state.packetValue = value;
  },
  setSillValue(state, value) {
    state.sillValue = value;
  },
  setRefluxValue(state, value) {
    state.refluxValue = value;
  },
  setLaminationValue(state, value) {
    state.laminationValue = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
