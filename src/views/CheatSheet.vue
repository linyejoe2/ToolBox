<template>
  <v-window v-model="onboarding" show-arrows="hover">
    <v-window-item v-for="(ele,name) in cheatSheetObj">
      <v-card elevation="2" min-height="400" class="d-flex align-center flex-column
      justify-center pa-4 ma-2 mb-6  bg-secondary-lighten-2" v-show="!showAns">
        <div>
          <h1 class="text-h1 text-center" @click="showAns = !showAns" style="cursor: pointer">
            {{ name }}
          </h1>
        </div>
        <v-expand-transition>
          <v-container v-if="showAns" fluid>
            <v-row dense>
              <v-col cols="12">
                <v-card title="Explanation" class="bg-secondary-lighten-1 text-surface-variant">
                  <v-card-text>
                    {{ele.explanation}}
                    <br />
                    {{ele.explanationTw}}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card title="Alias" :text="ele.alias.join(', ')" class="bg-secondary-lighten-1 text-surface-variant">
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card title="See Also" class="bg-secondary-lighten-1 text-surface-variant">
                  <v-card-text>
                    <v-row dense>
                      <v-list-item v-for="(url, webName) in ele.seeAlso" :value="webName" :title="webName" :href="url"
                        target="seeAlso" link>
                      </v-list-item>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-expand-transition>
      </v-card>
    </v-window-item>
  </v-window>
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

<style>
.wrap-text {
  white-space: normal;
}
</style>
