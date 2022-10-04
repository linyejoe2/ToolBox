<template>
  <v-dialog v-model="editing" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">編輯: {{editExp.expName}}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="名稱*" hint="填入開銷的名稱，如保險費 5000 ，則填入 保險費" persistent-hint required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="金額*" hint="填入開銷的金額，如保險費 5000 ，則填入 5000" persistent-hint required>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select :items="['每年', '每月', '每周', '每天']" label="重複頻率*" hint="保險費每年繳一次，選擇 每年" persistent-hint required>
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
  data() {
    return {
    }
  },
  props: {
    editExp: Object || undefined,
    editing: Boolean
  },
}
</script>