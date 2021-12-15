<template>
  <div class="py-6 px-5">
    <molecule-name class="flex mb-4" count="4" content="Параметры" />
    <molecule-select-item
      class="mb-5"
      label="Система окон:"
      :options="allOptionSystems"
      :value="systemValue"
      :method="setSystemValue"
    />
    <molecule-name class="flex mb-4" count="5" content="Дополнительные опции" />
    <molecule-select-item
      class="mb-5"
      :label="labelPacket"
      :options="allOptionPackets"
      :value="packetValue"
      :method="setPacketValue"
    />
    <molecule-select-item
      class="mb-5"
      :label="labelSill"
      :options="allOptionSills"
      :value="sillValue"
      :method="setSillValue"
    />
    <molecule-select-item
      class="mb-5"
      :label="labelReflux"
      :options="allOptionRefluxes"
      :value="refluxValue"
      :method="setRefluxValue"
    />
    <molecule-select-item
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
