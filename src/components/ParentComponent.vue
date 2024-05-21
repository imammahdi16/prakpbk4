<template>
  <div class="component parent-component">
    <!-- Unified user selection dropdown -->
    <select
      v-model="selectedUserId"
      @change="fetchPosts"
      id="user-select"
      name="user-select"
    >
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>

    <!-- Displaying posts from the selected user -->
    <div v-if="posts.length > 0">
      <h3>Posts from {{ selectedUser.name }}:</h3>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h4>{{ post.title }}</h4>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>

    <!-- Passing selected user data to ComponentA -->
    <ComponentA @data-from-a="displayData" :selectedUser="selectedUser" />

    <div>
      <h2>Data received in Parent Component:</h2>
      <p>{{ receivedData }}</p>
    </div>

    <SlotComponent>
      <template v-slot:default>
        <p>This is content passed from the parent to the slot component.</p>
      </template>
    </SlotComponent>
  </div>
</template>

<script>
import axios from "axios";
import ComponentA from "./ComponentA.vue";
import SlotComponent from "./SlotComponent.vue";

export default {
  components: {
    ComponentA,
    SlotComponent,
  },
  data() {
    return {
      users: [],
      selectedUserId: null,
      selectedUser: {},
      posts: [],
      receivedData: "",
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async fetchPosts() {
      if (this.selectedUserId) {
        try {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId}`
          );
          this.posts = response.data;
          this.selectedUser = this.users.find(
            (user) => user.id === this.selectedUserId
          );
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
    },
    displayData(data) {
      this.receivedData = data;
    },
  },
};
</script>
