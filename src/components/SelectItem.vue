<template>
  <select
    class="border-2 border-gray-100 focus:ring-0"
    :class="{ 'w-full': isFull }"
    v-model="selected"
    @change="selectValue"
  >
    <option v-for="item in items" :key="item" :value="item">{{ item }}</option>
  </select>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    isFull: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      selected: this.items[0],
    };
  },
  methods: {
    selectValue() {
      this.$emit("select", this.selected);
    },
  },
};
</script>

<style></style>
