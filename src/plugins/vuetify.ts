import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#F6F6F9',
            // surface: '#E0E0E0',
            surface: '#F5F5F5',
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
    // icons: {
    //   defaultSet: 'mdi',
    //   aliases,
    //   sets: {
    //     mdi,
    //   },
    // },
  }
)

// .bg-background {
//   --v-theme-overlay-multiplier: var(--v-theme-background-overlay-multiplier);
//   background: rgb(var(--v-theme-background)) !important;
//   color: rgb(var(--v-theme-on-background)) !important;
// }
// .bg-surface {
//   --v-theme-overlay-multiplier: var(--v-theme-surface-overlay-multiplier);
//   background: rgb(var(--v-theme-surface)) !important;
//   color: rgb(var(--v-theme-on-surface)) !important;
// }
// .bg-surface-variant {
//   --v-theme-overlay-multiplier: var(--v-theme-surface-variant-overlay-multiplier);
//   background: rgb(var(--v-theme-surface-variant)) !important;
//   color: rgb(var(--v-theme-on-surface-variant)) !important;
// }
// .bg-primary {
//   --v-theme-overlay-multiplier: var(--v-theme-primary-overlay-multiplier);
//   background: rgb(var(--v-theme-primary)) !important;
//   color: rgb(var(--v-theme-on-primary)) !important;
// }
// .bg-primary-darken-1 {
//   --v-theme-overlay-multiplier: var(--v-theme-primary-darken-1-overlay-multiplier);
//   background: rgb(var(--v-theme-primary-darken-1)) !important;
//   color: rgb(var(--v-theme-on-primary-darken-1)) !important;
// }
// .bg-secondary {
//   --v-theme-overlay-multiplier: var(--v-theme-secondary-overlay-multiplier);
//   background: rgb(var(--v-theme-secondary)) !important;
//   color: rgb(var(--v-theme-on-secondary)) !important;
// }
// .bg-secondary-darken-1 {
//   --v-theme-overlay-multiplier: var(--v-theme-secondary-darken-1-overlay-multiplier);
//   background: rgb(var(--v-theme-secondary-darken-1)) !important;
//   color: rgb(var(--v-theme-on-secondary-darken-1)) !important;
// }
// .bg-error {
//   --v-theme-overlay-multiplier: var(--v-theme-error-overlay-multiplier);
//   background: rgb(var(--v-theme-error)) !important;
//   color: rgb(var(--v-theme-on-error)) !important;
// }
// .bg-info {
//   --v-theme-overlay-multiplier: var(--v-theme-info-overlay-multiplier);
//   background: rgb(var(--v-theme-info)) !important;
//   color: rgb(var(--v-theme-on-info)) !important;
// }
// .bg-success {
//   --v-theme-overlay-multiplier: var(--v-theme-success-overlay-multiplier);
//   background: rgb(var(--v-theme-success)) !important;
//   color: rgb(var(--v-theme-on-success)) !important;
// }
// .bg-warning {
//   --v-theme-overlay-multiplier: var(--v-theme-warning-overlay-multiplier);
//   background: rgb(var(--v-theme-warning)) !important;
//   color: rgb(var(--v-theme-on-warning)) !important;
// }
// .bg-primary-lighten-1 {
//   --v-theme-overlay-multiplier: var(--v-theme-primary-lighten-1-overlay-multiplier);
//   background: rgb(var(--v-theme-primary-lighten-1)) !important;
//   color: rgb(var(--v-theme-on-primary-lighten-1)) !important;
// }
// .bg-primary-lighten-2 {
//   --v-theme-overlay-multiplier: var(--v-theme-primary-lighten-2-overlay-multiplier);
//   background: rgb(var(--v-theme-primary-lighten-2)) !important;
//   color: rgb(var(--v-theme-on-primary-lighten-2)) !important;
// }
// .bg-primary-darken-2 {
//   --v-theme-overlay-multiplier: var(--v-theme-primary-darken-2-overlay-multiplier);
//   background: rgb(var(--v-theme-primary-darken-2)) !important;
//   color: rgb(var(--v-theme-on-primary-darken-2)) !important;
// }
// .bg-secondary-lighten-1 {
//   --v-theme-overlay-multiplier: var(--v-theme-secondary-lighten-1-overlay-multiplier);
//   background: rgb(var(--v-theme-secondary-lighten-1)) !important;
//   color: rgb(var(--v-theme-on-secondary-lighten-1)) !important;
// }
// .bg-secondary-lighten-2 {
//   --v-theme-overlay-multiplier: var(--v-theme-secondary-lighten-2-overlay-multiplier);
//   background: rgb(var(--v-theme-secondary-lighten-2)) !important;
//   color: rgb(var(--v-theme-on-secondary-lighten-2)) !important;
// }
// .bg-secondary-darken-2 {
//   --v-theme-overlay-multiplier: var(--v-theme-secondary-darken-2-overlay-multiplier);
//   background: rgb(var(--v-theme-secondary-darken-2)) !important;
//   color: rgb(var(--v-theme-on-secondary-darken-2)) !important;
// }
// .text-background {
//   color: rgb(var(--v-theme-background)) !important;
// }
// .border-background {
//   --v-border-color: var(--v-theme-background);
// }
// .text-surface {
//   color: rgb(var(--v-theme-surface)) !important;
// }
// .border-surface {
//   --v-border-color: var(--v-theme-surface);
// }
// .text-surface-variant {
//   color: rgb(var(--v-theme-surface-variant)) !important;
// }
// .border-surface-variant {
//   --v-border-color: var(--v-theme-surface-variant);
// }
// .on-surface-variant {
//   color: rgb(var(--v-theme-on-surface-variant)) !important;
// }
// .text-primary {
//   color: rgb(var(--v-theme-primary)) !important;
// }
// .border-primary {
//   --v-border-color: var(--v-theme-primary);
// }
// .text-primary-darken-1 {
//   color: rgb(var(--v-theme-primary-darken-1)) !important;
// }
// .border-primary-darken-1 {
//   --v-border-color: var(--v-theme-primary-darken-1);
// }
// .text-secondary {
//   color: rgb(var(--v-theme-secondary)) !important;
// }
// .border-secondary {
//   --v-border-color: var(--v-theme-secondary);
// }
// .text-secondary-darken-1 {
//   color: rgb(var(--v-theme-secondary-darken-1)) !important;
// }
// .border-secondary-darken-1 {
//   --v-border-color: var(--v-theme-secondary-darken-1);
// }
// .text-error {
//   color: rgb(var(--v-theme-error)) !important;
// }
// .border-error {
//   --v-border-color: var(--v-theme-error);
// }
// .text-info {
//   color: rgb(var(--v-theme-info)) !important;
// }
// .border-info {
//   --v-border-color: var(--v-theme-info);
// }
// .text-success {
//   color: rgb(var(--v-theme-success)) !important;
// }
// .border-success {
//   --v-border-color: var(--v-theme-success);
// }
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

