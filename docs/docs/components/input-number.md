# Input Number 数字输入框

这个文本框只能输入数字哦

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/input-number.md)

:::danger
组件仍在测试阶段，高频更新中，部分参数暂不稳定！
:::

## 基本使用

使用 `v-model` 绑定一个值，`model` 可配置不同的模式

::: demo

<template #source>
<f-space vertical>
<f-input-number v-model="value1" />
<f-input-number v-model="value1" model="switch" />
<f-input-number v-model="value1" model="button" />
</f-space>
</template>

```html
<template>
  <f-space vertical>
    <f-input-number v-model="value1" />
    <f-input-number v-model="value1" model="switch" />
    <f-input-number v-model="value1" model="button" />
  </f-space>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(3)
</script>
```

:::

## Attributes

| 参数          | 说明                       | 类型     | 可选值                          | 默认值         |
| ------------- | -------------------------- | -------- | ------------------------------- | -------------- |
| `v-model`     | 绑定值                     | number   | ——                              | 1              |
| `model`       | 不同模式                   | string   | `default` `button` `switch`     | default        |
| `precision`   | 数值精度                   | number   | ——                              | 0              |
| `step`        | 步长                       | number   | ——                              | 1              |
| `size`        | 尺寸                       | number   | `large` `middle` `small` `mini` | middle         |
| `disabled`    | 是否禁用                   | boolean  | ——                              | false          |
| `max`         | 最大值                     | number   | ——                              | ——             |
| `min`         | 最小值                     | number   | ——                              | ——             |
| `max-length`  | 最大输入长度               | number   | ——                              | ——             |
| `autofocus`   | 是否自动聚焦               | boolean  | ——                              | false          |
| `name`        | 原生 name 属性             | string   | ——                              | f-input-number |
| `placeholder` | 占位符                     | string   | ——                              | ——             |
| `clear`       | 是否可清空                 | boolean  | ——                              | false          |
| `readonly`    | 是否只读                   | boolean  | ——                              | false          |
| `on-change`   | 绑定值发生变化时触发的回调 | Function | ——                              | ——             |
| `on-blur`     | 失去焦点触发的回调         | Function | ——                              | ——             |
| `on-focus`    | 获取焦点触发的回调         | Function | ——                              | ——             |
| `on-input`    | 原生 input 事件回调        | Function | ——                              | ——             |

## Interface

组件导出以下类型定义：

```ts
import type {
  InputNumberInstance,
  InputNumberPropsType,
  InputNumberSizeType,
  InputNumberModelType,
  InputNumberChangeInterface
} from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/unnm" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/49176117?v=4" />
</a>

<a href="https://github.com/xluoyu" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/36356701?v=4" />
</a>

<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref(3)
</script>
