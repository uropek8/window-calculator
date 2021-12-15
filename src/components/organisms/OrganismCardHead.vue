<template>
  <div class="flex items-center py-6 px-5 border-b-4 border-gray-200">
    <molecule-name class="flex mr-4" count="1" content="Конструкция:" />
    <molecule-img-list :icons="allIcons" v-model:img-icon="iconSrc" @update:imgIcon="setIconSrc" />
    <atom-btn type="button" class="ml-auto h-12" text="Toggle" v-model="isToggle" @click="handleToggle" />
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
      this.isToggle = !this.isToggle;
      eventBus.$emit("custom-event", this.isToggle);
    },
  },
};
</script>
