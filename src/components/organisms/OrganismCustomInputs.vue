<template>
  <div class="flex justify-between mt-5">
    <MoleculeCustomInput
      text="Value on blur from left:"
      v-model="left"
      :methodOnBlur="methodOnBlur"
      :methodOnInput="methodOnInput"
    />
    <MoleculeCustomInput
      text="Value on blur from right:"
      v-model="right"
      :methodOnBlur="methodOnBlur"
      :methodOnInput="methodOnInput"
    />
  </div>
</template>

<script>
import MoleculeCustomInput from "../molecules/MoleculeCustomInput.vue";

export default {
  name: "OrganismCustomInputs",
  components: {
    MoleculeCustomInput,
  },
  props: {
    leftValue: {
      type: String,
      required: true,
    },
    rightValue: {
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
  computed: {
    left: {
      get() {
        return this.leftValue;
      },
      set(value) {
        this.$emit("update:leftValue", value);
      },
    },
    right: {
      get() {
        return this.rightValue;
      },
      set(value) {
        this.$emit("update:rightValue", value);
      },
    },
  },
};
</script>
