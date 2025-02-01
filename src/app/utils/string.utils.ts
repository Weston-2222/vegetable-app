/**
 * 轉義正則表達式
 * @param string 字串
 * @returns 轉義後的字串
 */
export const escapeRegExp = (string: string) =>
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 轉義特殊字元
