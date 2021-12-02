<template>
  <div class="flex py-6 px-5 border-b-4 border-gray-200">
    <div class="flex flex-col mr-7">
      <MoleculeName class="flex mb-4" count="2" content="Что рассчитать?" />
      <AtomSelect
        :options="allOptionProducts"
        :modelValue="productValue"
        @update:modelValue="setProductValue"
      />
    </div>
    <div class="flex flex-col flex-grow">
      <MoleculeName class="flex mb-4" count="3" content="Выберите тип:" />
      <AtomSelect
        class="w-full"
        :options="allOptionTypes"
        :modelValue="typeValue"
        @update:modelValue="setTypeValue"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import AtomSelect from "../atoms/AtomSelect.vue";
import MoleculeName from "../molecules/MoleculeName.vue";

export default {
  name: "OrganismCardRow",
  components: {
    AtomSelect,
    MoleculeName,
  },
  computed: {
    ...mapState({
      productValue: (state) => state.order.productValue,
      typeValue: (state) => state.order.typeValue,
    }),
    ...mapGetters({
      allOptionProducts: "order/allOptionProducts",
      allOptionTypes: "order/allOptionTypes",
    }),
  },
  methods: {
    ...mapMutations({
      setProductValue: "order/setProductValue",
      setTypeValue: "order/setTypeValue",
    }),
  },
};
</script>
