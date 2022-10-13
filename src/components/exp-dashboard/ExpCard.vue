<template>
  <v-card width="350" class="ma-2 rounded-lg bg-secondary-lighten-1">
    <v-card-title primary-title>
      {{exp.expName}}
    </v-card-title>
    <v-card-text>
      <v-row align="center" hide-gutters no-gutters>
        <v-col class="text-h2" cols="9">
          {{exp.expVal}}
        </v-col>
        <v-col cols="3" class="text-right">
          <v-icon size="88" icon="mdi-currency-usd"></v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { PropType } from 'vue';

type TExp = {
  expName: String,
  expVal: String
}

export default {
  props: {
    exp: {
      required: true,
      type: Object as PropType<TExp>
    }
  }
}
</script>