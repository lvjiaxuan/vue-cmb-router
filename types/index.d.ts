import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    $cmbPush: (to: string) => void
  }
}