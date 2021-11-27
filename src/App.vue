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
                  :model-value="productValue"
                  @update:model-value="setProductValue"
                />
              </div>
              <div class="flex flex-col flex-grow">
                <card-title :title="'Выберите тип:'" :count="3" :isTop="false" />
                <select-item
                  :items="allOptionTypes"
                  :isFull="false"
                  :model-value="typeValue"
                  @update:model-value="setTypeValue"
                />
              </div>
            </div>
            <div class="py-6 px-5">
              <card-title :title="'Параметры'" :count="4" :isTop="false" />
              <card-inline :label="'Система окон:'" :isLast="false">
                <select-item
                  :items="allOptionSystems"
                  :isFull="true"
                  :model-value="systemValue"
                  @update:model-value="setSystemValue"
                />
              </card-inline>
              <card-title :title="'Дополнительные опции'" :count="5" :isTop="false" />
              <card-inline :label="labelPacket" :isLast="false">
                <select-data-item
                  :items="allOptionPackets"
                  :model-value="packetValue"
                  @update:model-value="setPacketValue"
                />
              </card-inline>
              <card-inline :label="labelSill" :isLast="false">
                <select-data-item
                  :items="allOptionSills"
                  :model-value="sillValue"
                  @update:model-value="setSillValue"
                />
              </card-inline>
              <card-inline :label="labelReflux" :isLast="false">
                <select-data-item
                  :items="allOptionRefluxes"
                  :model-value="refluxValue"
                  @update:model-value="setRefluxValue"
                />
              </card-inline>
              <card-inline :label="labelLamination" :isLast="true">
                <select-data-item
                  :items="allOptionLaminations"
                  :model-value="laminationValue"
                  @update:model-value="setLaminationValue"
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
                <button class="btn" type="button">Заказать</button>
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import eventBus from "./emmiter/eventBus";

import ConstructList from "./components/ConstructList";
import SelectItem from "./components/SelectItem";
import SelectDataItem from "./components/SelectDataItem";
import CardInline from "./components/CardInline.vue";
import CardTitle from "./components/CardTitle.vue";
import TotalCount from "./components/TotalCount.vue";

export default {
  name: "App",
  components: {
    ConstructList,
    SelectItem,
    SelectDataItem,
    CardInline,
    CardTitle,
    TotalCount,
  },
  data() {
    return {
      imgSrc: "i_1_1.png",
      isOpen: false,
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
