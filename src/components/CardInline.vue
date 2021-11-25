<template>
  <div :class="{ 'mb-5': !isLast }">
    <div class="flex items-center justify-between">
      <span class="text-black font-sans text-sm font-light">{{ label }}</span>
      <div class="max-w-xs w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-inline",
  props: {
    label: {
      type: String,
      required: true,
    },
    isLast: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
