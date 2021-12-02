<template>
  <div class="flex items-center py-6 px-5 border-b-4 border-gray-200">
    <MoleculeName class="flex mr-4" count="1" content="Конструкция:" />
    <MoleculeImgList :icons="allIcons" :model-value="iconSrc" @update:model-value="setIconSrc" />
    <AtomBtn type="button" class="ml-auto h-12" text="Toggle" @click="handleToggle" />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import eventBus from "../../emmiter/eventBus";
import AtomBtn from "../atoms/AtomBtn.vue";
import MoleculeName from "../molecules/MoleculeName.vue";
import MoleculeImgList from "../molecules/MoleculeImgList.vue";

export default {
  name: "OrganismCardHead",
  components: {
    AtomBtn,
    MoleculeName,
    MoleculeImgList,
  },
  data() {
    return {
      activeIdx: 0,
      isToggle: false,
    };
  },
  computed: {
    ...mapState({
      iconSrc: (state) => state.order.iconSrc,
    }),
    ...mapGetters({
      allIcons: "order/allIcons",
    }),
  },
  methods: {
    ...mapMutations({
      setIconSrc: "order/setIconSrc",
    }),
    handleToggle() {
      eventBus.$emit("custom-event", this.isToggle);
      this.isToggle = !this.isToggle;
    },
  }
};
</script>
