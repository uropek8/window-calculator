<template>
  <div class="min-h-screen bg-gray-300 pt-10 pb-10">
    <div class="max-w-6xl mx-auto px-5">
      <h3 class="text-black font-sans text-4xl mb-8">Калькулятор окон REHAU</h3>
      <div class="w-full bg-white">
        <div class="flex items-center py-6 px-5 border-b-4 border-gray-200">
          <card-title :title="'Конструкция:'" :count="1" :isTop="true" />
          <construct-list :icons="icons" v-model="iconSrc" />
        </div>
        <div class="flex">
          <div class="flex flex-col w-3/6 border-r-4 border-gray-200">
            <div class="flex py-6 px-5 border-b-4 border-gray-200">
              <div class="flex flex-col mr-7">
                <card-title :title="'Что рассчитать?'" :count="2" :isTop="false" />
                <select-item :items="productsList" :isFull="false" v-model="product" />
              </div>
              <div class="flex flex-col flex-grow">
                <card-title :title="'Выберите тип:'" :count="3" :isTop="false" />
                <select-item :items="typesList" :isFull="false" v-model="type" />
              </div>
            </div>
            <div class="py-6 px-5">
              <card-title :title="'Параметры'" :count="4" :isTop="false" />
              <card-inline :label="'Система окон:'" :isLast="false">
                <select-item :items="systems" :isFull="true" v-model="system" />
              </card-inline>
              <card-title :title="'Дополнительные опции'" :count="5" :isTop="false" />
              <card-inline :label="packet" :isLast="false">
                <select-data-item :items="packets" />
              </card-inline>
              <card-inline :label="sill" :isLast="false">
                <select-data-item :items="sills" />
              </card-inline>
              <card-inline :label="reflux" :isLast="false">
                <select-data-item :items="refluxes" />
              </card-inline>
              <card-inline :label="lamination" :isLast="true">
                <select-data-item :items="laminations" />
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
                  <total-count :label="'Цена выбранного окна:'" :value="totalPrice" :isLast="false" />
                  <total-count :label="'Монтаж:'" :value="mountPrice" :isLast="false" />
                  <total-count :label="'Отделка:'" :value="furnishPrice" :isLast="true" />
                </div>
                <button class="btn" type="button">
                  Заказать
                </button>
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
import products from "./assets/js/price.json";
import optionsData from "./assets/js/options.json";

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
      product: "окна",
      type: "1-створчатые",
      system: "Blitz new",
      packet: "Стеклопакет",
      sill: "Ширина подоконника",
      reflux: "Ширина отлива",
      lamination: "Ламинация",
      imgSrc: "i_1_1.png",
      iconSrc: "w_1_1.png",

      icons: [],
      systems: {},
      packets: {},
      sills: {},
      refluxes: {},
      laminations: {},

      mountPrice: 0,
      furnishPrice: 0,

      productsList: [],
      typesList: [],

      activeIdx: 0,
    };
  },

  async created() {
    this.productsList = [...new Set(products.map((p) => p.product))];

    const forTypeList = products.filter((p) => p.product === this.productsList[0]);
    this.typesList = [...new Set(forTypeList.map((t) => t.type))];

    const forConstructList = forTypeList.filter((t) => t.type === this.type);
    this.icons = [...new Set(forConstructList.map((c) => c.iconSrc))];

    this.systems = Object.keys(forConstructList[0].systems);

    this.packets = optionsData.find((item) => item.product === this.packet).value;
    this.sills = optionsData.find((item) => item.product === this.sill).value;
    this.refluxes = optionsData.find((item) => item.product === this.reflux).value;
    this.laminations = optionsData.find((item) => item.product === this.lamination).value;
  },

  computed: {
    totalPrice() {
      let price = 0;

      const currentProducts = products.filter((pr) => {
        return pr.product === this.product;
      });

      const typedProducts = currentProducts.filter((pr) => {
        return pr.type === this.type;
      });

      typedProducts.forEach((pr) => {
        if (pr.iconSrc === this.iconSrc) {
          price = pr.systems[`${this.system}`];
        }
      });

      return price;
    },
  },

  methods: {
    getIconSrc(icon) {
      return require(`./assets/img/win/${icon}`);
    },

    handleActiveIcon(idx) {
      this.activeIdx = idx;
    },
  },
};
</script>
