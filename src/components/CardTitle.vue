<template>
  <p class="text-black font-sans text-2xl" :class="isTop ? 'mr-4' : 'mb-4'">
    <span class="text-green-500 font-sans text-2xl">{{ count }}.</span>
    &nbsp;{{ title }}
  </p>
</template>

<script>
export default {
  name: "card-title",
  props: {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    isTop: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
