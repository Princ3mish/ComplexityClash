import { highlightStep } from '../utils/highlight.js';
import { binarySearch } from './binarysearch.js';

export async function exponentialSearch(arr, target) {
  const n = arr.length;
  if (arr[0] === target) return 0;

  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2;
  }

  const left = Math.floor(i / 2);
  const right = Math.min(i, n - 1);

  return await binarySearch(arr.slice(left, right + 1), target);
}
