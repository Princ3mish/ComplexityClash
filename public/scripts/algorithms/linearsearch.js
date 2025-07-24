import { highlightStep } from '../utils/highlight.js';
export async function linearSearch(arr, target, delay = 50) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
