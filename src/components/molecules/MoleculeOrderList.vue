<template>
  <ul class="w-full flex flex-wrap mt-5">
    <li
      class="w-full flex justify-between items-start bg-white px-5 py-4 mt-2"
      v-for="order in orders"
      :key="order.id"
    >
      <div class="flex flex-col">
        <AtomBadge text="Prouct" :selection="order.product" />
        <AtomBadge text="Prouct type" :selection="order.type" />
        <AtomBadge text="Prouct system" :selection="order.system" />
        <AtomBadge text="Packet option" :selection="order.packet" />
        <AtomBadge text="Sill option" :selection="order.sill" />
        <AtomBadge text="Reflux option" :selection="order.reflux" />
        <AtomBadge text="Lamination option" :selection="order.lamination" />
      </div>
      <button class="flex items-center justify-center text-red-500" @click="handle(order.id)">
        <AtomCloseIcon />
      </button>
    </li>
  </ul>
</template>

<script>
import AtomCloseIcon from "../atoms/AtomCloseIcon.vue";
import AtomBadge from "../atoms/AtomBadge.vue";

export default {
  name: "MoleculeOrderList",
  components: {
    AtomCloseIcon,
    AtomBadge,
  },
  props: {
    orders: {
      type: Array,
      required: true,
    },
    handle: {
      type: Function,
      required: true,
    },
  },
};
</script>
