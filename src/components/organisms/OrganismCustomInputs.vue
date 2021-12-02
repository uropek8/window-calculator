<template>
  <div class="flex justify-between mt-5">
    <MoleculeCustomInput
      text="Value on blur from left:"
      :value="leftValue"
      :methodOnBlur="methodOnBlur"
      :methodOnInput="methodOnInput"
    />
    <MoleculeCustomInput
      text="Value on blur from right:"
      :value="rightValue"
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
};
</script>
