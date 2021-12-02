<template>
  <div>
    <AtomNum class="mr-2" :count="count" />
    <AtomTitle tag="h5" :content="content" />
  </div>
</template>

<script>
import AtomNum from "../atoms/AtomNum.vue";
import AtomTitle from "../atoms/AtomTitle.vue";

export default {
  name: "MoleculeName",
  components: {
    AtomNum,
    AtomTitle,
  },
  props: {
    count: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  }
};
</script>

<style></style>
