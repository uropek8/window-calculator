<template>
  <input class="w-full" v-model="localValue" type="text" @blur="handleBlur" @input="handleInput" />
</template>

<script>
export default {
  name: "custom-input",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    // handleValueBlur(e) {
    //   this.$emit("update:model-value", e.target.value);
    //   e.target.value = "";
    // },
    handleBlur() {
      this.$emit("blur", this.localValue);
    },
    handleInput() {
      this.$emit("input", this.localValue);
    },
  },
};
</script>

<style></style>
