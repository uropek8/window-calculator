<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  name: "AtomInfoImg",
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
