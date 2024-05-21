<template>
  <div class="component">
    <h3>{{ selectedUser.name }}'s Details:</h3>
    <p>Email: {{ selectedUser.email }}</p>
    <p>Phone: {{ selectedUser.phone }}</p>
  </div>
</template>

<script>
export default {
  props: {
    selectedUser: {
      type: Object,
      required: true,
    },
  },
};
</script>
