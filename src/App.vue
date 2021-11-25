<template>
  <div class="min-h-screen bg-gray-300 pt-10 pb-10">
    <div class="max-w-6xl mx-auto px-5">
      <h3 class="text-black font-sans text-4xl mb-8">Калькулятор окон REHAU</h3>
      <div class="w-full bg-white">
        <div class="flex items-center py-6 px-5 border-b-4 border-gray-200">
          <p class="text-black font-sans text-2xl mr-10 bor">
            <span class="text-green-500 font-sans text-2xl">1.</span>
            &nbsp;Конструкция:
          </p>
          <construct-list :icons="icons" @selectIcon="checkIcon" />
        </div>
        <div class="flex">
          <div class="flex flex-col w-3/6 border-r-4 border-gray-200">
            <div class="flex py-6 px-5 border-b-4 border-gray-200">
              <div class="flex flex-col mr-7">
                <p class="text-black font-sans text-2xl mb-4">
                  <span class="text-green-500 font-sans text-2xl">2.</span>
                  &nbsp;Что рассчитать?
                </p>
                <select-item :items="productsList" :isFull="false" v-model="product" />
              </div>
              <div class="flex flex-col flex-grow">
                <p class="text-black font-sans text-2xl mb-4">
                  <span class="text-green-500 font-sans text-2xl">3.</span>
                  &nbsp;Выберите тип:
                </p>
                <select-item :items="typesList" :isFull="false" v-model="type" />
              </div>
            </div>
            <div class="py-6 px-5">
              <p class="text-black font-sans text-2xl mb-4">
                <span class="text-green-500 font-sans text-2xl">4.</span>
                &nbsp;Параметры
              </p>
              <div class="mb-5">
                <div class="flex items-center justify-between">
                  <span class="text-black font-sans text-sm font-light">Система окон:</span>
                  <div class="max-w-xs w-full">
                    <select-item :items="systems" :isFull="true" v-model="system" />
                  </div>
                </div>
              </div>
              <p class="text-black font-sans text-2xl mb-4">
                <span class="text-green-500 font-sans text-2xl">5.</span>
                &nbsp;Дополнительные опции
              </p>
              <div class="mb-5">
                <div class="flex items-center justify-between">
                  <span class="text-black font-sans text-sm font-light">{{ packet }}</span>
                  <div class="max-w-xs w-full">
                    <select-data-item :items="packets" />
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <div class="flex items-center justify-between">
                  <span class="text-black font-sans text-sm font-light">{{ sill }}</span>
                  <div class="max-w-xs w-full">
                    <select-data-item :items="sills" />
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <div class="flex items-center justify-between">
                  <span class="text-black font-sans text-sm font-light">{{ reflux }}</span>
                  <div class="max-w-xs w-full">
                    <select-data-item :items="refluxes" />
                  </div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-black font-sans text-sm font-light">{{ lamination }}</span>
                  <div class="max-w-xs w-full">
                    <select-data-item :items="laminations" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-3/6">
            <div class="py-6 px-5">
              <p class="text-black font-sans text-2xl mb-4">
                <span class="text-green-500 font-sans text-2xl">6.</span>
                &nbsp;Задайте параметры
              </p>
              <div class="pt-5 pb-14">
                <img class="max-h-60 mx-auto" :src="getIconSrc(imgSrc)" alt="Window" />
              </div>
              <div class="flex justify-between mb-6">
                <div>
                  <p class="text-black font-sans font-light text-sm mb-1">
                    Цена выбранного окна:&nbsp;
                    <span class="text-black font-sans font-normal text-sm">${{ totalPrice }}</span>
                  </p>
                  <p class="text-black font-sans font-light text-sm mb-1">
                    Монтаж:&nbsp;
                    <span class="text-black font-sans font-normal text-sm">${{ mountPrice }}</span>
                  </p>
                  <p class="text-black font-sans font-light text-sm">
                    Отделка:&nbsp;
                    <span class="text-black font-sans font-normal text-sm"
                      >${{ furnishPrice }}</span
                    >
                  </p>
                </div>
                <button
                  class="cursor-pointer bg-red-500 px-6 text-white font-sans font-normal text-2xl"
                  type="button"
                >
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

export default {
  name: "App",
  components: {
    ConstructList,
    SelectItem,
    SelectDataItem,
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
    checkIcon(icon) {
      this.iconSrc = icon;
    },

    getIconSrc(icon) {
      return require(`./assets/img/win/${icon}`);
    },

    handleActiveIcon(idx) {
      this.activeIdx = idx;
    },
  },
};
</script>
