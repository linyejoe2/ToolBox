<template>
  <v-app>
    <v-app-bar app class="bg-primary">
      <v-app-bar-nav-icon @click="drawer?drawer = false:drawer = true" />

      <!-- -->
      <app-bar />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <!-- -->
      <navigation-drawer />
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from 'vuetify'
import NavigationDrawer from './components/layout/NavigationDrawer.vue';
import AppBar from './components/layout/AppBar.vue';


export default defineComponent({
  name: "App",
  data() {
    return {
      drawer: true,
    };
  },
  components: { NavigationDrawer, AppBar },
})
</script>
