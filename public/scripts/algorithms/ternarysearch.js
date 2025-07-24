export async function ternarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (r >= l) {
    const mid1 = l + Math.floor((r - l) / 3);
    const mid2 = r - Math.floor((r - l) / 3);
    if (arr[mid1] === target || arr[mid2] === target) return;
    if (target < arr[mid1]) r = mid1 - 1;
    else if (target > arr[mid2]) l = mid2 + 1;
    else {
      l = mid1 + 1;
      r = mid2 - 1;
    }
  }
}
