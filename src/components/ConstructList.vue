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
</template>

<script>
export default {
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
      return require(`../assets/img/win/${icon}`);
    },

    handleActiveIcon(idx, icon) {
      this.$emit("selectIcon", icon);
      this.activeIdx = idx;
    },
  },
};
</script>

<style></style>
