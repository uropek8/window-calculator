<template>
  <ul class="flex">
    <li class="cursor-pointer mr-6 last:mr-0" v-for="(icon, idx) in icons" :key="icon">
      <img
        class="max-h-14 border-2 border-transparent"
        :class="{ 'border-red-500': idx === activeIdx }"
        :src="getIconSrc(icon)"
        @click="handleActiveIcon(idx, icon)"
        :alt="`Icon-${idx}`"
      />
    </li>
  </ul>
  <bus-btn></bus-btn>
</template>

<script>
import BusBtn from "./BusBtn.vue";

export default {
  name: "construct-list",
  components: {
    BusBtn,
  },
  props: {
    icons: {
      type: Array,
      required: true,
    },
  },
  inheritAttrs: false,
  data() {
    return {
      activeIdx: 0,
    };
  },
  methods: {
    getIconSrc(icon) {
      return require(`../assets/img/win/${icon}`);
    },

    handleActiveIcon(idx, icon) {
      this.$emit("update:model-value", icon);
      this.activeIdx = idx;
    },
  },
};
</script>

<style></style>
