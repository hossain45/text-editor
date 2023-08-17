//getting all the elements 
let text = document.getElementById("text");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let leftAlign = document.getElementById("left-align");
let centerAlign = document.getElementById("center-align");
let rightAlign = document.getElementById("right-align");
let fontSize = document.getElementById("font-size");
let fontSizeBtn = document.getElementById("font-size-btn");
let colorPicker = document.getElementById("color-picker");

//  console.log(colorPicker.value);
// console.log(text.value);
// console.log('clicked')

//functions
//text-style
bold.addEventListener('click', () => {
    text.style.fontWeight ="bold"
})
italic.addEventListener('click', () => {
    text.style.fontStyle ="italic"
})
underline.addEventListener('click', () => {
    text.style.textDecoration ="underline"
})

//text-alignment
leftAlign.addEventListener('click', () => {
    text.style.textAlign ="left"
})
centerAlign.addEventListener('click', () => {
    text.style.textAlign ="center"
})
rightAlign.addEventListener('click', () => {
    text.style.textAlign ="right"
})

// font size
fontSizeBtn.addEventListener('click', () => {
    text.style.fontSize = `${fontSize.value}px`
})

// text color
colorPicker.addEventListener('input', () => {
    let selectedColor = colorPicker.value;
    text.classList.add(`text-[${selectedColor}]`)
})