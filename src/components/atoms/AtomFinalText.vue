<template>
  <p class="text-black font-sans font-light text-xs">
    <b>{{ subtext }}</b> {{ content }}
  </p>
</template>

<script>
export default {
  name: "AtomFinalText",
  props: {
    subtext: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
