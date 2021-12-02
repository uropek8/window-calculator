<template>
  <ul class="flex">
    <li class="cursor-pointer mr-6 last:mr-0" v-for="(icon, idx) in icons" :key="icon">
      <AtomImg
        :class="{ 'border-red-500': idx === activeIdx }"
        :src="getIconSrc(icon)"
        :alt="`Icon-${idx}`"
        @click="handleActiveIcon(idx, icon)"
      />
    </li>
  </ul>
</template>

<script>
import AtomImg from "../atoms/AtomImg.vue";

export default {
  name: "MoleculeImgList",
  components: {
    AtomImg,
  },
  props: {
    icons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIdx: 0,
    };
  },
  methods: {
    getIconSrc(icon) {
      return require(`../../assets/img/win/${icon}`);
    },

    handleActiveIcon(idx, icon) {
      this.$emit("update:model-value", icon);
      this.activeIdx = idx;
    },
  },
};
</script>
