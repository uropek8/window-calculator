<template>
  <div class="min-h-screen bg-gray-300 pt-10 pb-10">
    <div class="max-w-6xl mx-auto px-5">
      <h3 class="text-black font-sans text-4xl mb-8">
        Калькулятор окон REHAU {{ isOpen ? "- Hello from Event Bus" : "" }}
      </h3>
      <div class="w-full bg-white">
        <div class="flex items-center py-6 px-5 border-b-4 border-gray-200">
          <card-title :title="'Конструкция:'" :count="1" :isTop="true" />
          <construct-list
            :icons="allIcons"
            :model-value="iconSrc"
            @update:model-value="setIconSrc"
          />
        </div>
        <div class="flex">
          <div class="flex flex-col w-3/6 border-r-4 border-gray-200">
            <div class="flex py-6 px-5 border-b-4 border-gray-200">
              <div class="flex flex-col mr-7">
                <card-title :title="'Что рассчитать?'" :count="2" :isTop="false" />
                <select-item
                  :items="allOptionProducts"
                  :isFull="false"
                  :modelValue="productValue"
                  @update:modelValue="setProductValue"
                />
              </div>
              <div class="flex flex-col flex-grow">
                <card-title :title="'Выберите тип:'" :count="3" :isTop="false" />
                <select-item
                  :items="allOptionTypes"
                  :isFull="false"
                  :modelValue="typeValue"
                  @update:modelValue="setTypeValue"
                />
              </div>
            </div>
            <div class="py-6 px-5">
              <card-title :title="'Параметры'" :count="4" :isTop="false" />
              <card-inline :label="'Система окон:'" :isLast="false">
                <select-item
                  :items="allOptionSystems"
                  :isFull="true"
                  :modelValue="systemValue"
                  @update:modelValue="setSystemValue"
                />
              </card-inline>
              <card-title :title="'Дополнительные опции'" :count="5" :isTop="false" />
              <card-inline :label="labelPacket" :isLast="false">
                <select-data-item
                  :items="allOptionPackets"
                  :modelValue="packetValue"
                  @update:modelValue="setPacketValue"
                />
              </card-inline>
              <card-inline :label="labelSill" :isLast="false">
                <select-data-item
                  :items="allOptionSills"
                  :modelValue="sillValue"
                  @update:modelValue="setSillValue"
                />
              </card-inline>
              <card-inline :label="labelReflux" :isLast="false">
                <select-data-item
                  :items="allOptionRefluxes"
                  :modelValue="refluxValue"
                  @update:modelValue="setRefluxValue"
                />
              </card-inline>
              <card-inline :label="labelLamination" :isLast="true">
                <select-data-item
                  :items="allOptionLaminations"
                  :modelValue="laminationValue"
                  @update:modelValue="setLaminationValue"
                />
              </card-inline>
            </div>
          </div>
          <div class="flex flex-col w-3/6">
            <div class="py-6 px-5">
              <card-title :title="'Задайте параметры'" :count="6" :isTop="false" />
              <div class="pt-5 pb-14">
                <img class="max-h-60 mx-auto" :src="getIconSrc(imgSrc)" alt="Window" />
              </div>
              <div class="flex justify-between mb-6">
                <div>
                  <total-count :label="'Цена выбранного окна:'" :count="0" :isLast="false" />
                  <total-count :label="'Монтаж:'" :count="0" :isLast="false" />
                  <total-count :label="'Отделка:'" :count="0" :isLast="true" />
                </div>
                <button class="btn" type="button" @click="createOrder">Заказать</button>
              </div>
              <p class="text-black font-sans font-light text-xs">
                <b>Важно:</b> калькулятор показывает ориентировочные цены на пластиковые окна по
                заданному размеру без учета доставки до адреса заказчика. Цены на сайте указаны с
                учётом всех действующих скидок и спецпредложений.
              </p>
            </div>
          </div>
        </div>
      </div>
      <template v-if="orderList.length">
        <ul class="w-full flex flex-wrap mt-5">
          <li
            class="w-full flex justify-between items-start bg-white px-5 py-4 mt-2"
            v-for="order in orderList"
            :key="order.id"
          >
            <div class="flex flex-col">
              <span
                >Prouct - <b>{{ order.product }}</b></span
              >
              <span
                >Prouct type - <b>{{ order.type }}</b></span
              >
              <span
                >Prouct system - <b>{{ order.system }}</b></span
              >
              <span
                >Packet option - <b>{{ order.packet }}</b></span
              >
              <span
                >Sill option - <b>{{ order.sill }}</b></span
              >
              <span
                >Reflux option - <b>{{ order.reflux }}</b></span
              >
              <span
                >Lamination option - <b>{{ order.lamination }}</b></span
              >
            </div>
            <button
              class="flex items-center justify-center text-red-500"
              @click="handleRemoveOrder(order.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </template>
      <div class="flex justify-between mt-5">
        <div class="w-1/2 flex flex-col mx-2">
          <span>Value on blur from left: {{ leftValue }}</span>
          <custom-input
            v-model="leftValue"
            @blur="handleBlurLeftCustomInput"
            @input="handleInputLeftCustomInput"
          />
        </div>
        <!-- <div class="w-1/2 flex flex-col mx-2">
          <span>Value on blur from right: {{ rightValue }}</span>
          <custom-input :model-value="rightValue" @update:model-value="updateRightValue" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import eventBus from "./emmiter/eventBus";
import apiService from "./services/api-service";

import ConstructList from "./components/ConstructList";
import SelectItem from "./components/SelectItem";
import SelectDataItem from "./components/SelectDataItem";
import CardInline from "./components/CardInline.vue";
import CardTitle from "./components/CardTitle.vue";
import TotalCount from "./components/TotalCount.vue";
import CustomInput from "./components/CustomInput.vue";

export default {
  name: "App",
  components: {
    ConstructList,
    SelectItem,
    SelectDataItem,
    CardInline,
    CardTitle,
    TotalCount,
    CustomInput,
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
    // updateLeftValue(value) {
    //   this.leftValue = value;
    // },
    // updateRightValue(value) {
    //   this.rightValue = value;
    // },
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
  },
  beforeUnmount() {
    eventBus.$off("custom-event");
  },
};
</script>
