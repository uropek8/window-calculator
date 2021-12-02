<template>
  <div class="flex items-center">
    <AtomText :content="text"/>
    <AtomSpan :content="count"/>
  </div>
</template>

<script>
import AtomText from "../atoms/AtomText.vue";
import AtomSpan from "../atoms/AtomSpan.vue";

export default {
  name: "MoleculeCount",
  components: {
    AtomText,
    AtomSpan,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    count: {
      type: String,
      required: true,
    },
  }
};
</script>
