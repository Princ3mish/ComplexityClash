export async function fibonacciSearch(arr, target) {
  let fibM2 = 0, fibM1 = 1, fibM = fibM2 + fibM1;
  while (fibM < arr.length) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM1 + fibM2;
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
    } else return;
  }
}
