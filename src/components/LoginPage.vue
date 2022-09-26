<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div xs12 sm8 md4 flex>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/">Login</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'LoginPage',
  props: {
    source: String,
  },
};
</script>

<style>

</style>
