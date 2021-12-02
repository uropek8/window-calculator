<template>
  <select
    class="border-2 border-gray-100 focus:ring-0"
    :value="modelValue"
    @change="selectValue"
  >
    <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
  </select>
</template>

<script>
export default {
  name: "AtomSelect",
  props: {
    options: {
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
