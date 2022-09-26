<template>
  <v-card dark flat>
    <v-toolbar flat height="72">
      <v-btn @click="toggleTheme">toggle theme</v-btn>
      <v-btn @click="test.print123()">test 123</v-btn>
    </v-toolbar>
  </v-card>
</template>

<script lang="ts">
import { useTheme } from 'vuetify'
let test = {
  print123: ()=>{
    console.log("123");}
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