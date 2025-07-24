export async function hashSearch(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true;
  }
  if (map[target]) return;
}
