<template>
  <ul class="w-full flex flex-wrap mt-5">
    <li
      class="w-full flex justify-between items-start bg-white px-5 py-4 mt-2"
      v-for="order in orders"
      :key="order.id"
    >
      <div class="flex flex-col">
        <atom-badge text="Prouct" :selection="order.product" />
        <atom-badge text="Prouct type" :selection="order.type" />
        <atom-badge text="Prouct system" :selection="order.system" />
        <atom-badge text="Packet option" :selection="order.packet" />
        <atom-badge text="Sill option" :selection="order.sill" />
        <atom-badge text="Reflux option" :selection="order.reflux" />
        <atom-badge text="Lamination option" :selection="order.lamination" />
      </div>
      <button class="flex items-center justify-center text-red-500" @click="handle(order.id)">
        <atom-close-icon />
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
