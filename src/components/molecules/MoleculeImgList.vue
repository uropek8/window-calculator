<template>
  <ul class="flex">
    <li class="cursor-pointer mr-6 last:mr-0" v-for="(icon, idx) in icons" :key="icon">
      <atom-img
        :class="{ 'border-red-500': idx === activeIdx }"
        :src="getIconSrc(icon)"
        :alt="`Icon-${idx}`"
        @click="handleActiveIcon(idx, icon)"
      />
    </li>
  </ul>
</template>

<script>
import AtomImg from "../atoms/AtomImg.vue";

export default {
  name: "MoleculeImgList",
  components: {
    AtomImg,
  },
  data() {
    return {
      activeIdx: 0,
    };
  },
  props: {
    icons: {
      type: Array,
      required: true,
    },
    imgIcon: {
      type: String,
      required: true,
    },
  },
  emits: {
    "update:imgIcon": null,
  },
  methods: {
    getIconSrc(icon) {
      return require(`../../assets/img/win/${icon}`);
    },

    handleActiveIcon(idx, icon) {
      // this.$emit("update:model-value", icon);
      this.$emit("update:imgIcon", icon);
      this.activeIdx = idx;
    },
  },
};
</script>
