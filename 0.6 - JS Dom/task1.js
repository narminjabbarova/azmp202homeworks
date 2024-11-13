let currentFontSize = 16;

const texts = document.getElementById('text');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

increaseButton.addEventListener('click', function() {
    currentFontSize += 2; 
    texts.style.fontSize = currentFontSize + 'px';
});

decreaseButton.addEventListener('click', function() {
    if (currentFontSize > 10) { 
        currentFontSize -= 2; 
        texts.style.fontSize = currentFontSize + 'px';
    }
});

const colorInput = document.getElementById('color');
const applyButton = document.getElementById('apply');

applyButton.addEventListener('click', function() {
    const chosenColor = colorInput.value;
    if (chosenColor) {
        texts.style.color = chosenColor; 
    } else {
        alert('Enter the colour value');
    }
});