<template>
  <p class="text-black font-sans font-light text-sm">
    {{ content }}
  </p>
</template>

<script>
export default {
  name: "AtomText",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
