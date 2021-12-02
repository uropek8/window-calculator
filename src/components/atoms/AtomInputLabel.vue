<template>
  <!-- <span>Value on blur from left: {{ leftValue }}</span> -->
  <span>{{text}} {{ value }}</span>
</template>

<script>
export default {
  name: "AtomInputLabel",
  props: {
    text: {
      type: String,
      requied: true,
    },
    value: {
      type: String,
      requied: true,
    },
  },
};
</script>
