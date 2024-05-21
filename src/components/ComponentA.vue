<template>
  <div>
    <ComponentB @data-from-b="handleDataFromB" :selectedUser="selectedUser" />
  </div>
</template>

<script>
import ComponentB from "./ComponentB.vue";

export default {
  components: { ComponentB },
  props: {
    selectedUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDataFromB(data) {
      this.$emit("data-from-a", `Data from A, received: ${data}`);
    },
  },
};
</script>
