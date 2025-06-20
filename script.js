function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

document.getElementById('btn-add').addEventListener('click', () => {
  const a = Number(document.querySelector('#a').value);
  const b = Number(document.querySelector('#b').value);
  document.getElementById('result').textContent = add(a, b);
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  const a = Number(document.querySelector('#a').value);
  const b = Number(document.querySelector('#b').value);
  document.getElementById('result').textContent = subtract(a, b);
});