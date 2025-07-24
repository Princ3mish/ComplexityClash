// src/js/dom.js

export function renderControlPanel() {
  const panel = document.getElementById('control-panel');

  // Data size input
  const sizeLabel = document.createElement('label');
  sizeLabel.textContent = 'Data Size: ';
  sizeLabel.setAttribute('for', 'data-size');

  const sizeInput = document.createElement('input');
  sizeInput.type = 'number';
  sizeInput.id = 'data-size';
  sizeInput.min = 10;
  sizeInput.max = 100000;
  sizeInput.value = 1000;

  // Start Battle button
  const startBtn = document.createElement('button');
  startBtn.id = 'start-battle';
  startBtn.textContent = 'Start Battle ⚔️';

  panel.appendChild(sizeLabel);
  panel.appendChild(sizeInput);
  panel.appendChild(startBtn);
}
