<template>
  <!-- <v-img gradient="to top left right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img> -->


  <v-app-bar-title>{{ CONST.title }}</v-app-bar-title>

  <v-spacer></v-spacer>

  <v-btn icon>
    <v-icon icon="mdi-magnify" />
  </v-btn>

  <v-btn @click="toggleTheme" icon>
    <v-icon icon="mdi-brightness-4" />
  </v-btn>

  <v-menu bottom left>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-icon icon="mdi-dots-vertical"></v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { useTheme } from 'vuetify'
import CONST from "../../CONST"
// import { mdiAccount } from '@mdi/js';

export default {
  data() {
    const theme = useTheme();
    return {
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      CONST: CONST
    }
  },
  // data: () => ({
  //   items: [
  //     { title: 'Click Me' },
  //     { title: 'Click Me' },
  //     { title: 'Click Me' },
  //     { title: 'Click Me 2' },
  //   ],
  //   toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
  //   // mdiAccount
  // }),
}
</script>