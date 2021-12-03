<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: "AtomBtn",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
