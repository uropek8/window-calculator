<template>
  <span>
    {{ text }} -
    <b>{{ selection }}</b>
  </span>
</template>

<script>
export default {
  name: "AtomBadge",
  props: {
    text: {
      type: String,
      required: true,
    },
    selection: {
      type: String,
      required: true,
    },
  },
};
</script>
