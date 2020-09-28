// Elements
const container = document.getElementById('container');

let down = false;
let mousemoving = false;

// Create Div
function createDiv(e) {
  container.innerHTML = ''; // I know this isn't the best practice, or particularly safe, but it works for this for now.
  const div = document.createElement('div');
  div.style.width = '100%';
  div.style.height = `${e.offsetY}px`;
  div.innerText = '';
  container.appendChild(div);
  if (down) {
    div.style.height = `${e.offsetY}px`;
  }
}

container.addEventListener('click', createDiv);
container.addEventListener('mousedown', () => {
  down = true;
  container.addEventListener('mousemove', createDiv);
});
container.addEventListener('mouseup', () => {
  down = false;
  container.removeEventListener('mousemove', createDiv);
});
