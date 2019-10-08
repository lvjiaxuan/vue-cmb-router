一定要使用history模式

声明文件

```ts
import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    $cmbPush: (to: string) => void
  }
}
```