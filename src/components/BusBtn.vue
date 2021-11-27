<template>
  <button type="button" class="btn ml-auto h-12" @click="handleToggle">
    toggle
  </button>
</template>

<script>
import eventBus from "../emmiter/eventBus";

export default {
  name: "bus-btn",
  data() {
    return {
      isToggle: false,
    };
  },
  methods: {
    handleToggle() {
      this.isToggle = !this.isToggle;
      eventBus.$emit("custom-event", this.isToggle);
    },
  },
};
</script>

<style></style>
