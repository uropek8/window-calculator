<template>
  <select class="w-full border-2 border-gray-100 focus:ring-0" v-model="selected">
    <option v-for="(value, name) in items" :key="value" :value="name">{{ value }}</option>
  </select>
</template>

<script>
export default {
  name: "select-data-item",
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: Object.keys(this.items)[0],
    };
  },
};
</script>

<style></style>
