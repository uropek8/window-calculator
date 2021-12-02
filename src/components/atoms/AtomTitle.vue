<template>
  <component :is="tag" class="text-black font-sans text-2xl">{{ content }}</component>
</template>

<script>
export default {
  name: "AtomTitle",
  props: {
    tag: {
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
