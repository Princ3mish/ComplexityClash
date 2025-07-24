export const snippets = {
  linear: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,

  binary: `function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}`,

  jump: `function jumpSearch(arr, target) {
  let step = Math.floor(Math.sqrt(arr.length));
  let prev = 0;
  while (arr[Math.min(step, arr.length) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(arr.length));
    if (prev >= arr.length) return -1;
  }
  for (let i = prev; i < Math.min(step, arr.length); i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,

  exponential: `function exponentialSearch(arr, target) {
  if (arr[0] === target) return 0;
  let i = 1;
  while (i < arr.length && arr[i] <= target) i *= 2;
  return binarySearch(arr.slice(i/2, Math.min(i, arr.length)), target);
}`,

  ternary: `function ternarySearch(arr, target, left, right) {
  if (right >= left) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);
    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;
    if (target < arr[mid1]) return ternarySearch(arr, target, left, mid1 - 1);
    else if (target > arr[mid2]) return ternarySearch(arr, target, mid2 + 1, right);
    else return ternarySearch(arr, target, mid1 + 1, mid2 - 1);
  }
  return -1;
}`,

  fibonacci: `function fibonacciSearch(arr, target) {
  let fibM2 = 0, fibM1 = 1, fibM = fibM2 + fibM1;
  while (fibM < arr.length) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }
  let offset = -1;
  while (fibM > 1) {
    let i = Math.min(offset + fibM2, arr.length - 1);
    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibM2;
      fibM1 -= fibM2;
      fibM2 = fibM - fibM1;
    } else return i;
  }
  if (fibM1 && arr[offset + 1] === target) return offset + 1;
  return -1;
}`,

  interpolation: `function interpolationSearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
    if (arr[pos] === target) return pos;
    if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }
  return -1;
}`,

  dfs: `function dfs(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    for (let neighbor of graph[start]) {
      dfs(graph, neighbor, visited);
    }
  }
  return visited;
}`,

  bfs: `function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  while (queue.length) {
    let node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      queue.push(...graph[node]);
    }
  }
  return visited;
}`,

  hash: `function hashSearch(arr, target) {
  let map = new Map();
  arr.forEach((val, idx) => map.set(val, idx));
  return map.has(target) ? map.get(target) : -1;
}`,

  sentinel: `function sentinelSearch(arr, target) {
  let last = arr[arr.length - 1];
  arr[arr.length - 1] = target;
  let i = 0;
  while (arr[i] !== target) i++;
  arr[arr.length - 1] = last;
  if (i < arr.length - 1 || arr[arr.length - 1] === target) return i;
  return -1;
}`,

  selforganizing: `function selfOrganizingSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (i > 0) [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      return i;
    }
  }
  return -1;
}`,

};
