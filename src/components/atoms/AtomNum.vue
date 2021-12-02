<template>
  <span class="text-green-500 font-sans text-2xl">{{ count }}.</span>
</template>

<script>
export default {
  name: "AtomNum",
  props: {
    count: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
