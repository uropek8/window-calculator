<template>
  <select
    class="border-2 border-gray-100 focus:ring-0"
    :class="{ 'w-full': isFull }"
    :value="modelValue"
    @change="selectValue"
  >
    <option v-for="item in items" :key="item" :value="item">{{ item }}</option>
  </select>
</template>

<script>
export default {
  name: "select-item",
  props: {
    isFull: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    selectValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style></style>
