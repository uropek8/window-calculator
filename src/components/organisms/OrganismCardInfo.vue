<template>
  <div class="flex flex-col w-3/6">
    <div class="py-6 px-5">
      <MoleculeName class="flex mb-4" count="6" content="Задайте параметры" />
      <div class="pt-5 pb-14">
        <AtomInfoImg class="max-h-60 mx-auto" :src="imgSrc" alt="Window" />
      </div>
      <div class="flex justify-between mb-6">
        <div>
          <MoleculeCount class="mb-1" text="Цена выбранного окна:" count="0" />
          <MoleculeCount class="mb-1" text="Монтаж:" count="0" />
          <MoleculeCount text="Отделка:" count="0" />
        </div>
        <AtomBtn type="button" text="Заказать" @click="methodOnClick" />
      </div>
      <AtomFinalText
        subtext="Важно:"
        content="калькулятор показывает ориентировочные цены на пластиковые окна по заданному
        размеру без учета доставки до адреса заказчика. Цены на сайте указаны с учётом всех
        действующих скидок и спецпредложений."
      />
    </div>
  </div>
</template>

<script>
import AtomBtn from "../atoms/AtomBtn.vue";
import AtomInfoImg from "../atoms/AtomInfoImg.vue";
import AtomFinalText from "../atoms/AtomFinalText.vue";
import MoleculeName from "../molecules/MoleculeName.vue";
import MoleculeCount from "../molecules/MoleculeCount.vue";

export default {
  name: "OrganismCardInfo",
  components: {
    AtomBtn,
    AtomInfoImg,
    AtomFinalText,
    MoleculeName,
    MoleculeCount,
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    methodOnClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
