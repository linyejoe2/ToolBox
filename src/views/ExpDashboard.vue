<template>
  <!-- <v-dialog v-model="editing" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">編輯: {{editExp.expName}}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="名稱*" v-model="editExp.expName" hint="填入開銷的名稱，如保險費 5000 ，則填入 保險費" persistent-hint
                required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="金額*" v-model="editExp.expVal" hint="填入開銷的金額，如保險費 5000 ，則填入 5000" persistent-hint
                required>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select :items="['每年', '每月', '每周', '每天']" label="重複頻率*" hint="保險費每年繳一次，選擇 每年" persistent-hint required>
              </v-select>
            </v-col>
          </v-row>
        </v-container>
        <small>*必填項</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" text @click="editing = false">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" text @click="editing = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog> -->
  <edit-exp-card :pid="editExp?editExp.pid:-1" :expName="editExp?editExp.expName:undefined"
    :expVal="editExp?editExp.expVal:undefined">
    <template v-slot:buttonGroup>
      <v-btn color="blue-darken-1" text @click="editExp = editTemplate">
        Close
      </v-btn>
      <v-btn color="blue-darken-1" text @click="editExp = editTemplate">
        Save
      </v-btn>
    </template>
  </edit-exp-card>
{{editExp}}
  <v-card class="d-flex flex-wrap bg-background" flat tile>
    <exp-card :exp="exp" v-for="exp in expList" @click="editExp = exp" />
    <v-card width="350" class="ma-2 rounded-lg bg-secondary">
      <v-card-text>
        <v-icon size="88" icon="mdi-plus"></v-icon>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import ExpCard from "../components/exp-dashboard/ExpCard.vue";
import EditExpCard from "../components/exp-dashboard/EditExpCard.vue";
export default ({
  data() {
    return {
      expList: [
        {
          pid: 1,
          expName: "電信費",
          expVal: "500",
        },
        {
          pid: 2,
          expName: "保險費",
          expVal: "12000",
        },
        {
          pid: 3,
          expName: "netflix",
          expVal: "500",
        },
        {
          pid: 4,
          expName: "spotify",
          expVal: "280",
        }
      ],
      expReadyToPush: {
        expName: "",
        expVal: ""
      },
      editTemplate: {
        pid: -1,
        expName: "",
        expVal: ""
      },
      editExp: undefined,
      editing: false
    }
  },
  components: { ExpCard, EditExpCard },
  computed: {
  },
  methods: {
    log(val: string) {
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
