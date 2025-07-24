// scripts/utils/highlight.js
export async function highlightStep(index, value) {
  console.log(`Step: index ${index}, value ${value}`);
  await new Promise(res => setTimeout(res, 50));
}
