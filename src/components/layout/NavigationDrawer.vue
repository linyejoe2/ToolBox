<template>
  <v-list-item>
      <v-list-item-title class="text-h6">
        Application
      </v-list-item-title>
      <v-list-item-subtitle>
        subtext
      </v-list-item-subtitle>
  </v-list-item>

  <v-divider></v-divider>

  <v-list density="compact" nav>
    <v-list-item v-for="item in items" :key="item.title" :prepend-icon="item.icon" :value="item.title"
      :title="item.title"  :to="item.url" link>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { title: 'Play Ground', icon: 'mdi-racquetball', url: "/play-ground/" },
        { title: 'Cheat Sheet', icon: 'mdi-help-box', url: "/cheat-sheet/" },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  },
}
</script>