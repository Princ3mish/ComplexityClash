// Search Algorithms
import { linearSearch } from './algorithms/linearsearch.js';
import { binarySearch } from './algorithms/binarysearch.js';
import { jumpSearch } from './algorithms/jumpsearch.js';
import { exponentialSearch } from './algorithms/exponentialsearch.js';
import { ternarySearch } from './algorithms/ternarysearch.js';
import { fibonacciSearch } from './algorithms/fibonaccisearch.js';
import { interpolationSearch } from './algorithms/interpolationsearch.js';
import { bfsSearch } from './algorithms/bfs.js';
import { dfsSearch } from './algorithms/dfs.js';
import { hashSearch } from './algorithms/hashsearch.js';

// Code snippets
import { snippets } from './snippets.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startBattle').addEventListener('click', startBattle);
});

async function startBattle() {
  const algoA = document.getElementById('algorithmA').value;
  const algoB = document.getElementById('algorithmB').value;
  const dataSize = +document.getElementById('dataSize').value;

  // Edge Case 1: Same algorithm on both sides
  if (algoA === algoB) {
    alert('Please select two different algorithms to compare.');
    return;
  }

  // Edge Case 2: Invalid data size
  if (!Number.isInteger(dataSize) || dataSize <= 0 || dataSize > 1e7) {
    alert('Please enter a valid data size between 1 and 10,000,000.');
    return;
  }

  const data = Array.from({ length: dataSize }, (_, i) => i + 1);
  const target = Math.floor(Math.random() * dataSize);

  // Reset bars
  createOrResetBar(`${algoA}-bar`, 'algoA-bar-container');
  createOrResetBar(`${algoB}-bar`, 'algoB-bar-container');
  document.getElementById('winnerText').style.opacity = 0;

  // Run both algorithms
  const timeA = await runAlgorithm(algoA, data, target);
  const timeB = await runAlgorithm(algoB, data, target);

  // Update UI labels & code
  const isSort = (name) => ['bubble', 'selection', 'insertion', 'merge', 'quick', 'heap', 'counting', 'radix', 'shell', 'bucket'].includes(name);
  document.getElementById('algoA-title').textContent = `${capitalize(algoA)} ${isSort(algoA) ? 'Sort' : 'Search'}`;
  document.getElementById('algoB-title').textContent = `${capitalize(algoB)} ${isSort(algoB) ? 'Sort' : 'Search'}`;
  document.getElementById('codeA').textContent = snippets[algoA] || '// Code not available';
  document.getElementById('codeB').textContent = snippets[algoB] || '// Code not available';

  // Animate bars
  const maxAnim = 3000;
  const minT = Math.min(timeA, timeB);
  await Promise.all([
    animateBar(`${algoA}-bar`, timeA === minT ? 2000 : maxAnim),
    animateBar(`${algoB}-bar`, timeB === minT ? 2000 : maxAnim)
  ]);

  // Show stats
  document.getElementById('statsA').textContent = `⏱ ${capitalize(algoA)} took ${timeA.toFixed(2)} ms`;
  document.getElementById('statsB').textContent = `⏱ ${capitalize(algoB)} took ${timeB.toFixed(2)} ms`;

  // Display winner
  showWinner(timeA, timeB, algoA, algoB);
}


async function runAlgorithm(name, arr, target) {
  const start = performance.now();

  // Search Algorithms
  if (name === 'linear') await linearSearch(arr, target);
  else if (name === 'binary') await binarySearch(arr, target);
  else if (name === 'jump') await jumpSearch(arr, target);
  else if (name === 'exponential') await exponentialSearch(arr, target);
  else if (name === 'ternary') await ternarySearch(arr, target);
  else if (name === 'fibonacci') await fibonacciSearch(arr, target);
  else if (name === 'interpolation') await interpolationSearch(arr, target);
  else if (name === 'bfs') await bfsSearch(arr, target);
  else if (name === 'dfs') await dfsSearch(arr, target);
  else if (name === 'hash') await hashSearch(arr, target);

  const end = performance.now();
  return end - start;
}


function createOrResetBar(barId, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const bar = document.createElement('div');
  bar.className = 'loading-bar';
  bar.id = barId;

  const span = document.createElement('span');
  span.className = 'bar-text';
  span.textContent = '0%';

  bar.appendChild(span);
  container.appendChild(bar);
}

function animateBar(id, duration) {
  return new Promise(res => {
    const bar = document.getElementById(id);
    if (!bar) return res();

    let p = 0;
    const text = bar.querySelector('.bar-text');
    const step = duration / 100;

    const interval = setInterval(() => {
      if (p >= 100) {
        clearInterval(interval);
        res();
      } else {
        p++;
        bar.style.width = `${p}%`;
        if (text) text.textContent = `${p}%`;
      }
    }, step);
  });
}

function showWinner(t1, t2, a1, a2) {
  const w = document.getElementById('winnerText');
  if (t1 < t2) w.textContent = `🏆 ${capitalize(a1)} wins!`;
  else if (t2 < t1) w.textContent = `🏆 ${capitalize(a2)} wins!`;
  else w.textContent = `🤝 It's a tie!`;
  w.style.opacity = 1;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Optional export if used elsewhere
export async function highlightStep(index, value) {
  console.log(`Step: index ${index}, value ${value}`);
  await new Promise(res => setTimeout(res, 50));
}
