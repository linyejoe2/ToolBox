<template>
  <v-container v-if="!showAns" fluid>
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
      seens: seens,
      changeBoardingRules: [
        value => !value || ""
      ]
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
