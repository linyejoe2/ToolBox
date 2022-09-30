<template>
  <v-card flat tile class="bg-secondary-lighten-2 pa-2">
    <v-window v-model="onboarding">
      <v-window-item v-for="ele in cheatSheetObj">
        <v-card elevation="2" min-height="300" class="d-flex align-center flex-column
      justify-center bg-secondary-lighten-2 pt-3" v-show="!showAns">
          <div>
            <h1 class="text-h1 text-center" @click="showAns = !showAns" style="cursor: pointer">
              {{ ele.name }}
            </h1>
          </div>
          <v-expand-transition>
            <v-container v-if="showAns" fluid>
              <v-row dense>
                <v-col cols="12" md="6">
                  <v-card title="Explanation" class="bg-secondary-lighten-1 text-surface-variant">
                    <v-card-text>
                      {{ele.explanation}}
                      <!-- <br />
                    {{ele.explanationTw}} -->
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card title="解釋" class="bg-secondary-lighten-1 text-surface-variant">
                    <v-card-text>
                      {{ele.explanationTw}}
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card title="Alias" :text="ele.alias.lingth < 1 ? ele.alias : ele.alias.join(', ')"
                    class="bg-secondary-lighten-1 text-surface-variant">
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

    <v-card-actions class="justify-space-between">
      <v-btn v-if="seens.length" variant="plain" icon="mdi-chevron-left" @click="prev"></v-btn>
      <v-btn v-if="!seens.length" disable variant="plain" icon="mdi-chevron-left"></v-btn>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item>
          <v-text-field :label="onboarding + '/' +  (cheatSheetObj.length - 1).toString()" v-model="changeBoarding"
            type="number"
            @keydown.enter="onboarding = Math.max(Math.min(parseInt(changeBoarding), cheatSheetObj.length -1), 0)"
            @blur="changeBoarding = undefined" />
        </v-item>
      </v-item-group>
      <v-btn v-if="seens.length != cheatSheetObj.length - 1" variant="plain" icon="mdi-chevron-right" @click="next">
      </v-btn>
      <v-btn v-if="seens.length === cheatSheetObj.length - 1" disable variant="plain" icon="mdi-chevron-right"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import cheatSheetObj from "../public/CheatSheet.json";
let nextId = Math.floor(Math.random() * (cheatSheetObj.data.length));// 下一個字卡的 id
let seens: number[] = [];// 看過的字卡
let showAns = false;// 要不要顯示答案
function getNextSheet(id: number) {
  // showAns = false;
  // 如果有加入了，代表他有按回去過，不要加入。
  if (!seens.includes(id)) seens.push(id);
  console.log(seens);
  // 找到還沒被看過的字卡
  while (seens.length < cheatSheetObj.data.length) {
    nextId = Math.floor(Math.random() * (cheatSheetObj.data.length))
    if (!seens.includes(nextId)) return nextId;
  }
}
function getPrevSheet() {
  if (seens.length > 0) {
    // showAns = false;
    return seens.pop();
  }
}

export default ({
  data() {
    return {
      length: cheatSheetObj.data.length - 1,
      onboarding: nextId,
      changeBoarding: undefined,
      cheatSheetObj: cheatSheetObj.data,
      showAns: false,
      seens: seens
    }
  },
  computed: {
    location: () => window.location,
  },
  methods: {
    next() {
      this.showAns = false;
      this.onboarding = getNextSheet(this.onboarding);
      // this.onboarding = this.onboarding + 1 > this.length
      //   ? 0
      //   : this.onboarding + 1
    },
    prev() {
      this.showAns = false;
      this.onboarding = getPrevSheet();
      // this.onboarding = this.onboarding - 1 <= -1
      //   ? this.length
      //   : this.onboarding - 1
    },
    log(val) {
      console.log(val);
    }
  },
})
</script>

<style>
.wrap-text {
  white-space: normal;
}
</style>
