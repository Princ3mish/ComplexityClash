// src/scripts/battle.js

export function insertCodeSnippets() {
  const linearCode = `
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
  `;

  const binaryCode = `
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
  `;

  document.getElementById('linear-code').textContent = linearCode;
  document.getElementById('binary-code').textContent = binaryCode;
}
