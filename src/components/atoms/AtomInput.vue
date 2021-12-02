<template>
  <input class="w-full" v-model="localValue" type="text" @blur="handleBlur" @input="handleInput" />
</template>

<script>
export default {
  name: "AtomInput",
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
    handleBlur() {
      this.$emit("blur", this.localValue);
    },
    handleInput() {
      this.$emit("input", this.localValue);
    },
  },
};
</script>
