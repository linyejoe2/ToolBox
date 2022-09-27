<template>
  <v-card>
    <v-toolbar height="72">
      <v-btn @click="toggleTheme">2toggle theme</v-btn>
      <v-btn @click="test.print123()">test 123</v-btn>
    </v-toolbar>
  </v-card>

  <v-card width="400" title="This is a title" subtitle="This is a subtitle" text="This is content" class="bg-primary-"></v-card>

  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
          .v-col-2
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="3">
        <v-sheet class="pa-2 ma-2">
          .v-col-3
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
      <v-col cols="3">
        <v-sheet class="pa-2 ma-2">
          .v-col-3
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { useTheme } from 'vuetify'
let test = {
  print123: () => {
    console.log("123");
  }
}
export default ({
  data() {
    const theme = useTheme();
    return {
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
      test: test
    }
  },
})
</script>