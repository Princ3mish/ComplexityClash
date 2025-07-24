export async function dfsSearch(arr, target) {
  let stack = [0];
  let visited = new Set();
  while (stack.length > 0) {
    let node = stack.pop();
    if (arr[node] === target) return;
    visited.add(node);
    let next = node + 1;
    if (next < arr.length && !visited.has(next)) stack.push(next);
  }
}
