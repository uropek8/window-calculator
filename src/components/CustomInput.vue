<template>
  <input class="w-full" type="text" @blur="handleValueBlur" />
</template>

<script>
export default {
  name: "custom-input",
  methods: {
    handleValueBlur(e) {
      this.$emit("update:model-value", e.target.value);
      e.target.value = "";
    },
  },
};
</script>

<style></style>
