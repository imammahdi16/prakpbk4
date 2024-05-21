<template>
  <div>
    <ComponentE @data-from-e="handleDataFromE" :selectedUser="selectedUser" />
  </div>
</template>

<script>
import ComponentE from "./ComponentE.vue";

export default {
  components: { ComponentE },
  props: {
    selectedUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDataFromE(data) {
      this.$emit("data-from-d", `Data from D, received: ${data}`);
    },
  },
};
</script>
