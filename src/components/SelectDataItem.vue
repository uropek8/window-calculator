<template>
  <select
    class="w-full border-2 border-gray-100 focus:ring-0"
    @change="selectValue"
    :value="modelValue"
  >
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
