<template>
  <div class="w-1/2 flex flex-col mx-2">
    <AtomInputLabel :text="text" :value="value" />
    <AtomInput @blur="methodOnBlur" @input="methodOnInput" />
  </div>
</template>

<script>
import AtomInputLabel from "../atoms/AtomInputLabel.vue";
import AtomInput from "../atoms/AtomInput.vue";

export default {
  name: "MoleculeCustomInput",
  components: {
    AtomInputLabel,
    AtomInput,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    methodOnBlur: {
      type: Function,
      required: true,
    },
    methodOnInput: {
      type: Function,
      required: true,
    },
  },
};
</script>
