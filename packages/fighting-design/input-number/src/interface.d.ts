export type { InputNumberProps } from './props'

/**
 * 不同尺寸类型
 */
export type InputNumberSize = 'large' | 'middle' | 'small' | 'mini'

/**
 * 不同模式类型
 */
export type InputNumberModel = 'default' | 'button' | 'switch'

/**
 * 当 input 改变时触发的回调函数类型接口
 *
 * @param val 最新值
 */
export interface InputNumberChangeInterface {
  (val: string): void
}
