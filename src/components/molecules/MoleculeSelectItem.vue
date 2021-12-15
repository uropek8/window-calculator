<template>
  <div>
    <div class="flex items-center justify-between">
      <atom-label :text="label" />
      <div class="max-w-xs w-full">
        <atom-select
          class="w-full"
          :options="options"
          :modelValue="value"
          @update:modelValue="method"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AtomLabel from "../atoms/AtomLabel.vue";
import AtomSelect from "../atoms/AtomSelect.vue";

export default {
  name: "MoleculeSelectItem",
  components: { AtomLabel, AtomSelect },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    method: {
      type: Function,
      required: true,
    },
  },
};
</script>
