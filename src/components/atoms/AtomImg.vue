<template>
  <img class="max-h-14 border-2 border-transparent" :src="src" :alt="alt" />
</template>

<script>
export default {
  name: "AtomImg",
  props: {
    src: {
      type: String,
      requied: true,
    },
    alt: {
      type: String,
      requied: true,
    },
  },
};
</script>
