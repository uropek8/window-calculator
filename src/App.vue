<template>
  <div class="min-h-screen bg-gray-300 pt-10 pb-10">
    <div class="max-w-6xl mx-auto px-5">
      <h3 class="text-black font-sans text-4xl mb-8">
        Калькулятор окон REHAU {{ isOpen ? "- Hello from Event Bus" : "" }}
      </h3>
      <div class="w-full bg-white">
        <OrganismCardHead />
        <div class="flex">
          <div class="flex flex-col w-3/6 border-r-4 border-gray-200">
            <OrganismCardRow />
            <OrganismCardCol />
          </div>
          <OrganismCardInfo :methodOnClick="createOrder" :imgSrc="getIconSrc(imgSrc)" />
        </div>
      </div>
      <MoleculeOrderList v-if="orderList.length" :orders="orderList" :handle="handleRemoveOrder" />
      <OrganismCustomInputs
        v-model:leftValue="leftValue"
        v-model:rightValue="rightValue"
        :methodOnBlur="handleBlurLeftCustomInput"
        :methodOnInput="handleInputLeftCustomInput"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import eventBus from "./emmiter/eventBus";
import apiService from "./services/api-service";

import MoleculeOrderList from "./components/molecules/MoleculeOrderList.vue";
import OrganismCardHead from "./components/organisms/OrganismCardHead.vue";
import OrganismCardRow from "./components/organisms/OrganismCardRow.vue";
import OrganismCardCol from "./components/organisms/OrganismCardCol.vue";
import OrganismCustomInputs from "./components/organisms/OrganismCustomInputs.vue";
import OrganismCardInfo from "./components/organisms/OrganismCardInfo.vue";

export default {
  name: "App",
  components: {
    MoleculeOrderList,
    OrganismCardHead,
    OrganismCardRow,
    OrganismCardCol,
    OrganismCustomInputs,
    OrganismCardInfo,
  },
  data() {
    return {
      imgSrc: "i_1_1.png",
      isOpen: false,
      orderList: [],
      leftValue: "",
      rightValue: "",
    };
  },

  computed: {
    ...mapState({
      productValue: (state) => state.order.productValue,
      typeValue: (state) => state.order.typeValue,
      systemValue: (state) => state.order.systemValue,
      iconSrc: (state) => state.order.iconSrc,

      packetValue: (state) => state.params.packetValue,
      sillValue: (state) => state.params.sillValue,
      refluxValue: (state) => state.params.refluxValue,
      laminationValue: (state) => state.params.laminationValue,
    }),
    ...mapGetters({
      allOptionProducts: "order/allOptionProducts",
      allOptionTypes: "order/allOptionTypes",
      allOptionSystems: "order/allOptionSystems",
      allIcons: "order/allIcons",

      allOptionPackets: "params/allOptionPackets",
      allOptionSills: "params/allOptionSills",
      allOptionRefluxes: "params/allOptionRefluxes",
      allOptionLaminations: "params/allOptionLaminations",
      labelPacket: "params/labelPacket",
      labelSill: "params/labelSill",
      labelReflux: "params/labelReflux",
      labelLamination: "params/labelLamination",
    }),
  },

  methods: {
    getIconSrc(icon) {
      return require(`./assets/img/win/${icon}`);
    },
    ...mapActions({
      takeOptionProducts: "order/takeOptionProducts",
      takeOptionTypes: "order/takeOptionTypes",
      takeOptionSystems: "order/takeOptionSystems",
      takeIcons: "order/takeIcons",

      takeOptionPackets: "params/takeOptionPackets",
      takeOptionSills: "params/takeOptionSills",
      takeOptionRefluxes: "params/takeOptionRefluxes",
      takeOptionLaminations: "params/takeOptionLaminations",
    }),
    ...mapMutations({
      setProductValue: "order/setProductValue",
      setTypeValue: "order/setTypeValue",
      setSystemValue: "order/setSystemValue",
      setIconSrc: "order/setIconSrc",

      setPacketValue: "params/setPacketValue",
      setSillValue: "params/setSillValue",
      setRefluxValue: "params/setRefluxValue",
      setLaminationValue: "params/setLaminationValue",
    }),
    createOrder() {
      const order = {
        id: Date.now(),
        product: this.productValue,
        type: this.typeValue,
        system: this.systemValue,
        icon: this.iconSrc,
        packet: this.packetValue,
        sill: this.sillValue,
        reflux: this.refluxValue,
        lamination: this.laminationValue,
      };

      this.orderList.push(order);

      this.takeOptionProducts();
      this.takeOptionTypes();
      this.takeOptionSystems();
      this.takeIcons();
      this.takeOptionPackets();
      this.takeOptionSills();
      this.takeOptionRefluxes();
      this.takeOptionLaminations();
    },
    handleRemoveOrder(id) {
      this.orderList = this.orderList.filter((order) => order.id !== id);
    },
    handleBlurLeftCustomInput(value) {
      console.log("BLUR EVENT VALUE: ", value);
    },
    handleInputLeftCustomInput(value) {
      console.log("INPUT EVENT VALUE: ", value);
    },
  },

  async mounted() {
    eventBus.$on("custom-event", (isToggle) => {
      this.isOpen = isToggle;
    });

    this.takeOptionProducts();
    this.takeOptionTypes();
    this.takeOptionSystems();
    this.takeIcons();

    this.takeOptionPackets();
    this.takeOptionSills();
    this.takeOptionRefluxes();
    this.takeOptionLaminations();

    await apiService.get("/users");
  },
  beforeUnmount() {
    eventBus.$off("custom-event");
  },
};
</script>
