import { highlightStep } from '../utils/highlight.js';

export async function jumpSearch(arr, target) {
  const n = arr.length;
  let stepSize = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(stepSize, n) - 1] < target) {
    prev = stepSize;
    stepSize += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }

  for (let i = prev; i < Math.min(stepSize, n); i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}
