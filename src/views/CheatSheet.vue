<template>
  <v-window v-model="onboarding" show-arrows="hover">
    <v-window-item v-for="(ele,name) in cheatSheetObj">
      <v-card elevation="2" height="400" class="d-flex align-center 
      justify-center ma-2" @click="showAns = !showAns" v-show="!showAns">
        <h1 class="text-h1">
          {{ name }}
        </h1>
        <v-expand-transition>
          <div v-if="showAns">
            {{ ele.alias }}
          </div>
        </v-expand-transition>
      </v-card>
    </v-window-item>
  </v-window>
  <!-- <v-window v-model="onboarding" show-arrows="hover">
    <v-window-item v-for="(ele,name) in cheatSheetObj" :key="ele" @click="showAns = false" v-show="showAns">
      <v-card elevation="2" height="400" class="d-flex align-center 
      justify-center ma-2">
        <h1 class="text-h2">
          {{ name }}
        </h1>
      </v-card>

    </v-window-item>

    <v-window-item v-for="(ele,name) in cheatSheetObj" :key="ele" @click="showAns = false" v-show="!showAns">
      <v-expand-transition>
        <v-card elevation="2" height="400" class="d-flex align-center justify-center ma-2" >
          {{ ele.alias }}
        </v-card>
      </v-expand-transition>
    </v-window-item>
  </v-window> -->
</template>

<script lang="ts">
import cheatSheetObj from "../public/CheatSheet.json";

export default ({
  data() {
    return {
      length: 3,
      onboarding: 0,
      cheatSheetObj: cheatSheetObj,
      cheatSheetObj2: {
        a: {
          alias: [1, 2, 3]
        },
        b: {
          alias: [1, 2, 3]
        },
        er: {
          alias: [1, 2, 3]
        },
        vd: {
          alias: [1, 2, 3]
        }
      },
      showAns: false,
      console2: (text: string) => {
        console.log(text);
      }
    }
  }
})
</script>