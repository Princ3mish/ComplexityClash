export async function bfsSearch(arr, target) {
  let queue = [0];
  let visited = new Set();
  while (queue.length > 0) {
    let node = queue.shift();
    if (arr[node] === target) return;
    visited.add(node);
    let next = node + 1;
    if (next < arr.length && !visited.has(next)) queue.push(next);
  }
}
