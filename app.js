// Elements
const container = document.getElementById('container');
const xPos = document.getElementById('xPos');
const yPos = document.getElementById('yPos');
const elClicked = document.getElementById('clickedEl');
let divs;
let grabber;
let txt;

let down = false;
let elementsArray = [];
let count = 0;
let xMousePos = 0;
let yMousePos = 0;
let newDiv = false;

// Create Div
function createDiv(e) {
  if (!newDiv) {
    // newDiv makes it so only one div is created at once.
    newDiv = true;

    // Create the div itself
    const div = document.createElement('div');
    div.style.width = `${100}%`;
    div.style.height = `${e.offsetY}px`;
    div.setAttribute('id', `div${count}`);

    // Create the information text within div
    txt = document.createElement('p');
    txt.innerText = `( ${div.style.width}, ${div.style.height} )`;

    // Create the grabber
    grabber = document.createElement('div');
    grabber.setAttribute('id', 'grabber');
    grabber.innerText = ' ';

    // Append items to the div
    div.appendChild(txt);
    div.appendChild(grabber);
    container.appendChild(div);
    if (down) {
      div.style.height = `${e.offsetY}px`;
    }

    // Push element created to array
    // elementsArray.push({
    //   key: `div${count}`,
    //   height: `${div.style.height}`,
    //   width: `${div.style.width}`,
    // });

    count++;
    divs = document.querySelectorAll('#container div');
    addEventListenerList(divs, 'click', clickedDiv);

    grabber.addEventListener('mousemove', updatePos);
  } else {
    return;
  }
}

// Add event listeners to each of the divs (currently there is only one div)
function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

function updatePos(e) {
  // Put positions in variables
  xMousePos = e.clientX;
  yMousePos = e.clientY;

  // Update items within bottom left thing
  xPos.innerText = `${xMousePos}`;
  yPos.innerText = `${yMousePos}`;

  // Update the div
  if (e.which === 1 && e.target.id === 'grabber') {
    e.target.parentElement.style.height = `${yMousePos - 20}px`;
    txt.innerText = `( ${e.target.parentElement.style.width}, ${e.target.parentElement.style.height} )`;
  }
}

function clickedEl(e) {
  elClicked.innerText = `${e.target.id}`;
}

function clickedDiv(e) {
  console.log(e.target.id);
  e.target.style.background = 'blue;';
}

window.addEventListener('pointerdown', createDiv);
document.addEventListener('mousemove', updatePos);
document.addEventListener('click', clickedEl);

// container.addEventListener('mousedown', () => {
//   down = true;
//   container.addEventListener('mousemove', createDiv);
// });
// container.addEventListener('mouseup', () => {
//   down = false;
//   container.removeEventListener('mousemove', createDiv);
// });
