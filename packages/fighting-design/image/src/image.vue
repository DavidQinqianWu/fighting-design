<script lang="ts" setup name="FImage">
  import { Props } from './props'
  import { onMounted, ref, computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import { useLoadImage } from '../../_hooks'
  import type { CSSProperties } from 'vue'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)

  const { isSuccess, isShowNode, loadAction } = useLoadImage(prop)

  /**
   * dom 节点元素
   */
  const imageEl = ref<HTMLImageElement>(null as unknown as HTMLImageElement)

  onMounted((): void => {
    loadAction(imageEl)
  })

  /**
   * 类名列表
   */
  const classList = computed((): ClassList => {
    const { fit, noSelect } = prop

    return [
      'f-image__img',
      {
        [`f-image__${fit}`]: fit,
        'f-image__select': noSelect
      }
    ] as const
  })

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { width, height, round } = prop

    return {
      '--f-image-width': sizeChange(width),
      '--f-image-height': sizeChange(height),
      '--f-image-border-radius': sizeChange(round)
    } as CSSProperties
  })
</script>

<template>
  <div
    v-if="isSuccess"
    role="img"
    :class="['f-image', { 'f-image__block': block }]"
    :style="styleList"
  >
    <!-- 真正展示的图片 -->
    <img
      v-show="isShowNode"
      ref="imageEl"
      src=""
      :class="classList"
      :style="styleList"
      :draggable="draggable"
      :referrer-policy="referrerPolicy"
      :alt="alt"
      :title="title"
    />
  </div>

  <div v-else class="f-image__error">
    <slot name="error">
      <span class="f-image__error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
