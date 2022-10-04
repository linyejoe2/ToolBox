<template>
  {{expReadyToPush}}
  <v-dialog v-model="editing" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">編輯: {{expReadyToPush.expName}}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="名稱*" v-model="expReadyToPush.expName" hint="填入開銷的名稱，如保險費 5000 ，則填入 保險費"
                persistent-hint required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="金額*" v-model="expReadyToPush.expVal" hint="填入開銷的金額，如保險費 5000 ，則填入 5000"
                persistent-hint required>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select v-model="expReadyToPush.frequency" :items="['每年', '每月', '每周', '每天']" label="重複頻率*"
                hint="保險費每年繳一次，選擇 每年" persistent-hint required>
              </v-select>
            </v-col>
            <!-- <v-col cols="12" sm="6" md="4">
              <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
            </v-col> -->
            <!-- <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col> -->
            <!-- <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests" multiple></v-autocomplete>
            </v-col> -->
          </v-row>
        </v-container>
        <small>*必填項</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <slot name="buttonGroup" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
export default {
  props: {
    pid: {
      type: [String, Number],
      default: 0
    },
    expName: {
      type: String
    },
    expVal: {
      type: String
    }
  },
  data() {
    return {
      expReadyToPush: {
        pid: this.pid,
        expName: this.expName,
        expVal: this.expVal,
      },
      editing: this.pid != -1
    }
  },
  watch: {
    expReadyToPush: {
      deep: true,
      immediate: true,
      handler: function (val) {
        this.$emit('update', val)
      }
    },
  },
}
</script>