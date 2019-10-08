import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    $cmbPush: (to: string) => void
  }
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}