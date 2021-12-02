<template>
  <label class="text-black font-sans text-sm font-light">{{ text }}</label>
</template>

<script>
export default {
  name: "AtomLabel",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
