<template>
  <div>
    <ComponentC @data-from-c="handleDataFromC" :selectedUser="selectedUser" />
  </div>
</template>

<script>
import ComponentC from "./ComponentC.vue";

export default {
  components: { ComponentC },
  props: {
    selectedUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDataFromC(data) {
      this.$emit("data-from-b", `Data from B, received: ${data}`);
    },
  },
};
</script>
