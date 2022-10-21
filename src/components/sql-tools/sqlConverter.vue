<template>
  <v-container>
    <v-row class="mb-5">
      <h1>SQL Converter</h1>
    </v-row>
    <v-row>
      <v-col cols="5.5" class="pa-0">
        <v-textarea hide-details auto-grow rows="27" v-model.trim="text1">
        </v-textarea>
      </v-col>
      <v-col cols="1" class="pa-0">
        <v-card class="d-flex flex-column" height="50%">
          <v-btn height="100%" @click="tranSQL('text1', 'postgresql', 'text2', 'oracle' )">
            --＞
          </v-btn>
        </v-card>
        <v-card class="d-flex flex-column " height="50%">
          <v-btn height="100%" @click="tranSQL('text2', 'oracle', 'text1', 'postgresql')">
            ＜--
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="5.5" class="pa-0">
        <v-textarea hide-details auto-grow v-model.trim="text2">
        </v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default ({

  data() {
    return {
      text1:
        '      create table T_BM_P04\n' +
        '(\n' +
        '  LICENSE_YY   VARCHAR2(7) not null,\n' +
        '  LICENSE_KIND VARCHAR2(1) not null,\n' +
        '  LICENSE_NO1  VARCHAR2(5) not null,\n' +
        '  LICENSE_NO2  VARCHAR2(2) not null,\n' +
        '  LICENSE_WORD VARCHAR2(2) not null,\n' +
        '  LICENSE_DESC VARCHAR2(40) not null,\n' +
        '  INDEX_KEY    VARCHAR2(20) not null,\n' +
        '  PERSON_SEQ   NUMBER(4) not null,\n' +
        '  SPOKESMAN    VARCHAR2(1),\n' +
        '  COMPANY_NAME VARCHAR2(60),\n' +
        '  COM_ZIP      VARCHAR2(3),\n' +
        '  COM_ADDRESS  VARCHAR2(60),\n' +
        '  COM_IDNO     VARCHAR2(8),\n' +
        '  BOSS         VARCHAR2(20),\n' +
        '  ARC_REG_NO   VARCHAR2(6),\n' +
        '  TECH_NAME    VARCHAR2(20),\n' +
        '  TECH_IDNO    VARCHAR2(10),\n' +
        '  TECH_LIC     VARCHAR2(40),\n' +
        '  TEL_NO       VARCHAR2(20),\n' +
        '  BMPAS        VARCHAR2(3),\n' +
        '  CR_DATE      VARCHAR2(7),\n' +
        '  UP_DATE      VARCHAR2(7),\n' +
        '  OP_USER      VARCHAR2(10),\n' +
        '  DATAID       NUMBER\n' +
        ')\n',
      type1: '',
      text2: '',
      type2: '',
    }
  },
  computed: {
  },
  methods: {
    tranSQL(fromText: string, fromType: string, toText: string, toType: string) {
      console.log(this.text1)
      if (fromText == "text1") this.text2 = tranPostToOracle(this.text1);
      if (fromText == "text2") this.text1 = this.text2;
      return
    }
  },
})

/**
 * POstgreSQL to Oracle 修改器
 * @param text 要修改的文字
 * @see(@Link https://www.sqlines.com/oracle-to-postgresql)
 */
function tranPostToOracle(text: string): string {
  // 1. to lower case
  text = text.toLowerCase();


  text = text.replaceAll(/varchar2/gm, "character varying")
  text = text.replaceAll(/number\(.*\)/gm, "double precision")
  text = text.replaceAll(/number/gm, "integer")
  text = text.replaceAll(/ not null/gm, "")
  text = text.replaceAll(/not null/gm, "")
  text = text.replaceAll(/create table/gm, "CREATE TABLE IF NOT EXISTS")

  return text;
}

</script>
