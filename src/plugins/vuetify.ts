import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: "dark",
      themes: {
        light: {
          dark: false,
          colors: {
            // background: '#F6F6F9',
            // surface: '#E0E0E0',
            background: '#E0E0E0',
            surface: '#F6F6F9',
            // surface: '#E0E0E0',
            primary: "#AB47BC",
            secondary: '#9575CD',
          }
        },
        dark: {
          dark: true,
          colors: {
            background: '#212121',
            // surface: '#E0E0E0',
            surface: '#263238',
            primary: "#4527A0",
            secondary: '#3949AB',
          }
        },
      },
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 2,
        darken: 2,
      },
    },
  }
)

// .bg-background
// .bg-surface
// .bg-surface-variant
// .bg-primary
// .bg-primary-darken-1
// .bg-secondary
// .bg-secondary-darken-1
// .bg-error
// .bg-info
// .bg-success
// .bg-warning
// .bg-primary-lighten-1
// .bg-primary-lighten-2
// .bg-primary-darken-2
// .bg-secondary-lighten-1
// .bg-secondary-lighten-2
// .bg-secondary-darken-2
// .text-background
// .border-background
// .text-surface
// .border-surface
// .text-surface-variant
// .border-surface-variant
// .on-surface-variant
// .text-primary
// .border-primary
// .text-primary-darken-1
// .border-primary-darken-1
// .text-secondary
// .border-secondary
// .text-secondary-darken-1
// .border-secondary-darken-1
// .text-error
// .border-error
// .text-info
// .border-info
// .text-success
// .border-success
// .text-warning {
//   color: rgb(var(--v-theme-warning)) !important;
// }
// .border-warning {
//   --v-border-color: var(--v-theme-warning);
// }
// .text-primary-lighten-1 {
//   color: rgb(var(--v-theme-primary-lighten-1)) !important;
// }
// .border-primary-lighten-1 {
//   --v-border-color: var(--v-theme-primary-lighten-1);
// }
// .text-primary-lighten-2 {
//   color: rgb(var(--v-theme-primary-lighten-2)) !important;
// }
// .border-primary-lighten-2 {
//   --v-border-color: var(--v-theme-primary-lighten-2);
// }
// .text-primary-darken-2 {
//   color: rgb(var(--v-theme-primary-darken-2)) !important;
// }
// .border-primary-darken-2 {
//   --v-border-color: var(--v-theme-primary-darken-2);
// }
// .text-secondary-lighten-1 {
//   color: rgb(var(--v-theme-secondary-lighten-1)) !important;
// }
// .border-secondary-lighten-1 {
//   --v-border-color: var(--v-theme-secondary-lighten-1);
// }
// .text-secondary-lighten-2 {
//   color: rgb(var(--v-theme-secondary-lighten-2)) !important;
// }
// .border-secondary-lighten-2 {
//   --v-border-color: var(--v-theme-secondary-lighten-2);
// }
// .text-secondary-darken-2 {
//   color: rgb(var(--v-theme-secondary-darken-2)) !important;
// }
// .border-secondary-darken-2 {
//   --v-border-color: var(--v-theme-secondary-darken-2);
// }
// .on-background {
//   color: rgb(var(--v-theme-on-background)) !important;
// }
// .on-surface {
//   color: rgb(var(--v-theme-on-surface)) !important;
// }
// .on-primary {
//   color: rgb(var(--v-theme-on-primary)) !important;
// }
// .on-primary-darken-1 {
//   color: rgb(var(--v-theme-on-primary-darken-1)) !important;
// }
// .on-secondary {
//   color: rgb(var(--v-theme-on-secondary)) !important;
// }
// .on-secondary-darken-1 {
//   color: rgb(var(--v-theme-on-secondary-darken-1)) !important;
// }
// .on-error {
//   color: rgb(var(--v-theme-on-error)) !important;
// }
// .on-info {
//   color: rgb(var(--v-theme-on-info)) !important;
// }
// .on-success {
//   color: rgb(var(--v-theme-on-success)) !important;
// }
// .on-warning {
//   color: rgb(var(--v-theme-on-warning)) !important;
// }
// .on-primary-lighten-1 {
//   color: rgb(var(--v-theme-on-primary-lighten-1)) !important;
// }
// .on-primary-lighten-2 {
//   color: rgb(var(--v-theme-on-primary-lighten-2)) !important;
// }
// .on-primary-darken-2 {
//   color: rgb(var(--v-theme-on-primary-darken-2)) !important;
// }
// .on-secondary-lighten-1 {
//   color: rgb(var(--v-theme-on-secondary-lighten-1)) !important;
// }
// .on-secondary-lighten-2 {
//   color: rgb(var(--v-theme-on-secondary-lighten-2)) !important;
// }
// .on-secondary-darken-2 {
//   color: rgb(var(--v-theme-on-secondary-darken-2)) !important;
// }

