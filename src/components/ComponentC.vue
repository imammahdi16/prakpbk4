<template>
  <div>
    <ComponentD @data-from-d="handleDataFromD" :selectedUser="selectedUser" />
  </div>
</template>

<script>
import ComponentD from "./ComponentD.vue";

export default {
  components: { ComponentD },
  props: {
    selectedUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDataFromD(data) {
      this.$emit("data-from-c", `Data from C, received: ${data}`);
    },
  },
};
</script>
