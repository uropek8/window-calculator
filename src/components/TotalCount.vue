<template>
  <p class="text-black font-sans font-light text-sm" :class="{ 'mb-1': !isLast }">
    {{ label }}&nbsp;
    <span class="text-black font-sans font-normal text-sm">${{ value }}</span>
  </p>
</template>

<script>
export default {
  name: "total-count",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    isLast: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
