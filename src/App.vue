<template>
  <div id="app">
    <cmb-link>test</cmb-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

  created() {
    console.log(this.$cmbPush);
  }
}
</script>

<style>
</style>