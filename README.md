# vue-cmb-router

![images](https://img.shields.io/badge/vue-2.6.10-brightgreen)
![images](https://img.shields.io/badge/vue--cli-3.x-lightgrey)

## 前言

招商银行app中的WebView跳转组件，为的是使app中的WebView左上角返回键能在使用`vue-router`情况下正常返回。

## 用法

> 路由一定要使用history模式，否则跳转失效。

main.js
```js
import VueCmbRouter from 'vue-cmb-router';

Vue.use(VueCmbRouter);

/**
 * or
 * 
 * import { CmbLink, cmbPush } from 'vue-cmb-router';
 * 
 * Vue.component(CmbLink.name, CmbLink);
 * Vue.prototype.$cmbPush = cmbPush;
 */
```

component.vue
```vue
<template>
  <div>
    <cmb-link class="cmb-link" to="page/foo" tag="div">jump1</cmb-link>
    <div @click="push('page/bar')">jump2</div>
  </div>
</template>

<script>
export default {
  methods: {
    push(to) {
      this.$cmbPush(to);
    }
  }
}
</script>
```

## 声明文件

```ts
import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    $cmbPush: (to: string) => void
  }
}
```