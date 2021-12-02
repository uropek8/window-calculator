<template>
  <div class="py-6 px-5">
    <MoleculeName class="flex mb-4" count="4" content="Параметры" />
    <MoleculeSelectItem
      class="mb-5"
      label="Система окон:"
      :options="allOptionSystems"
      :value="systemValue"
      :method="setSystemValue"
    />
    <MoleculeName class="flex mb-4" count="5" content="Дополнительные опции" />
    <MoleculeSelectItem
      class="mb-5"
      :label="labelPacket"
      :options="allOptionPackets"
      :value="packetValue"
      :method="setPacketValue"
    />
    <MoleculeSelectItem
      class="mb-5"
      :label="labelSill"
      :options="allOptionSills"
      :value="sillValue"
      :method="setSillValue"
    />
    <MoleculeSelectItem
      class="mb-5"
      :label="labelReflux"
      :options="allOptionRefluxes"
      :value="refluxValue"
      :method="setRefluxValue"
    />
    <MoleculeSelectItem
      class="mb-5"
      :label="labelLamination"
      :options="allOptionLaminations"
      :value="laminationValue"
      :method="setLaminationValue"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import MoleculeName from "../molecules/MoleculeName.vue";
import MoleculeSelectItem from "../molecules/MoleculeSelectItem.vue";

export default {
  name: "OrganismCardCol",
  components: {
    MoleculeName,
    MoleculeSelectItem,
  },
  computed: {
    ...mapState({
      systemValue: (state) => state.order.systemValue,
      packetValue: (state) => state.params.packetValue,
      sillValue: (state) => state.params.sillValue,
      refluxValue: (state) => state.params.refluxValue,
      laminationValue: (state) => state.params.laminationValue,
    }),
    ...mapGetters({
      allOptionSystems: "order/allOptionSystems",
      allOptionPackets: "params/allOptionPackets",
      allOptionSills: "params/allOptionSills",
      allOptionRefluxes: "params/allOptionRefluxes",
      allOptionLaminations: "params/allOptionLaminations",
      labelPacket: "params/labelPacket",
      labelSill: "params/labelSill",
      labelReflux: "params/labelReflux",
      labelLamination: "params/labelLamination",
    }),
  },
  methods: {
    ...mapMutations({
      setSystemValue: "order/setSystemValue",
      setPacketValue: "params/setPacketValue",
      setSillValue: "params/setSillValue",
      setRefluxValue: "params/setRefluxValue",
      setLaminationValue: "params/setLaminationValue",
    }),
  },
};
</script>
