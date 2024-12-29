const shapes = ['square', 'circle', 'triangle', 'hexagon', 'star', 'rectangle', 'diamond','cross', 'arrow'];

const shapeButton = document.getElementById('changeShapeButton');
const colorButton = document.getElementById('changeColorButton');

const output = document.getElementById('output');
const shape = document.getElementById('shape');

const sound = new Audio('./assets/sound.mp3');



function changeShape(){
    shapes.forEach(shapeClass => shape.classList.remove(shapeClass));

    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    shape.classList.add(randomShape);

    sound.play();
}

function getRandomColor(){
    const randomHue = Math.floor(Math.random() * 360);
    const randomSaturation = Math.floor(Math.random() * 100) + 40;
    const randomLightness = Math.floor(Math.random() * 60) + 20;

    return `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;
}

function changeColor(){
    output.style.backgroundColor = getRandomColor();

    sound.play();
}


shapeButton.addEventListener('click', changeShape);
colorButton.addEventListener('click', changeColor);
