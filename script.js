const boxWidthInput = document.getElementById('box-width');
const boxHeightInput = document.getElementById('box-height');
const boxColorInput = document.getElementById('box-color');
const widthDisplay = document.getElementById('width');
const heightDisplay = document.getElementById('height');
const colorDisplay = document.getElementById('color');
const colorBox = document.getElementById('color-box');

const handleInputChange = (e) => {
  // Change display values
  widthDisplay.innerText = `${boxWidthInput.value}px`;
  heightDisplay.innerText = `${boxHeightInput.value}px`;
  colorDisplay.innerText = `${boxColorInput.value}`;
  colorBox.style.backgroundColor = boxColorInput.value;

  // Change Color box size and color
  colorBox.style.backgroundColor = boxColorInput.value;
  colorBox.style.height = `${boxHeightInput.value}px`;
  colorBox.style.width = `${boxWidthInput.value}px`;
};

// Add event listeners
boxWidthInput.addEventListener('input', handleInputChange);
boxHeightInput.addEventListener('input', handleInputChange);
boxColorInput.addEventListener('input', handleInputChange);

// Set initial colors and sizes
function setInitialValues() {
  colorBox.style.backgroundColor = boxColorInput.value;
  colorBox.style.height = `${boxHeightInput.value}px`;
  colorBox.style.width = `${boxWidthInput.value}px`;

  widthDisplay.innerText = `${boxWidthInput.value}px`;
  heightDisplay.innerText = `${boxHeightInput.value}px`;
  colorDisplay.innerText = `${boxColorInput.value}`;
}

setInitialValues();
