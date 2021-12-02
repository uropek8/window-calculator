<template>
  <span class="text-black font-sans font-normal text-sm">${{ content }}</span>
</template>

<script>
export default {
  name: "AtomSpan",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
