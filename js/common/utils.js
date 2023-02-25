/**
 * @param {any} obj 
 * @param {string} dotstr
 */
export function indexDotStr(obj, dotstr) {
  return dotstr.split('.').reduce((o, i) => o[i], obj);
}
