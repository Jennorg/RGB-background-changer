let red = '128';
let green = '128';
let blue = '128';

let rgb = 'rgb(';

const redValue = document.querySelector('.red-value');
const greenValue = document.querySelector('.green-value');
const blueValue = document.querySelector('.blue-value');

const redSlider = document.getElementById('red-color');
const greenSlider = document.getElementById('green-color');
const blueSlider = document.getElementById('blue-color');

const colors = document.getElementsByClassName('color')

redSlider.addEventListener('input', ()=>{
    red = redSlider.value;
    redValue.innerText = red;
});

greenSlider.addEventListener('input', ()=>{
    green = greenSlider.value;
    greenValue.innerText = green;
});

blueSlider.addEventListener('input', ()=>{
    blue = blueSlider.value;
    blueValue.innerText = blue;
});


for (const color of colors) {
    color.addEventListener('input', ()=>{
        rgb +=red + ',' +green + ',' + blue + ')';

        document.body.style.backgroundColor = rgb;
        rgb = 'rgb(';
    })
}