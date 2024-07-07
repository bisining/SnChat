/**
 * 从给定的字符串中提取文件名
 * @param str - 要提取文件名的字符串
 * @return 提取后的文件名
 * @example
 * ```js
 * const fileName = extractFilename('./src/component/HelloWorld.vue')
 * return HelloWorld
 * ```
 */
export function extractFilename(str: string): string {
  const parts = str.split('/')
  const filename = parts[parts.length - 1]
  return filename.split('.')[0]
}
