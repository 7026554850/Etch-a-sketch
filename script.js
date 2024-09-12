//creation and placement of elements
const sketchBoard = document.querySelector('#sketchBoard');
const buttonContainer = document.createElement('div')
buttonContainer.setAttribute('id', 'buttonContainer');
document.body.insertBefore(buttonContainer, sketchBoard)
const newSketchButton = document.createElement('button')
const black = document.createElement('button')
const random = document.createElement('button')
const opacity = document.createElement('button')
newSketchButton.textContent = `Start a new Sketch`;
newSketchButton.classList.add("newSketchButton")
black.textContent = `Sketch in black`;
black.classList.add('black');
random.textContent = `Sketch in random colors`;
random.classList.add('random');
opacity.textContent = `Sketch with Shades of Red`
opacity.classList.add('opacity');
buttonContainer.appendChild(newSketchButton);
buttonContainer.appendChild(black);
buttonContainer.appendChild(random);
buttonContainer.appendChild(opacity);

//creation and deletion of grid with users choice of no.of boxes
newSketchButton.addEventListener('click', () => {
    const allChildren = sketchBoard.children;
    for (i=0; i<allChildren.length; i++) {
        const allGrandChildren = (allChildren[i]).children;
        for(let j=0; j<allGrandChildren.length; j++) {
            allChildren[i].removeChild(allGrandChildren[j]);
            j--;
        }
        sketchBoard.removeChild(allChildren[i]);
        i--;
    }

    let input = prompt("Enter the size of the grid (any number between 1-100). The number of rows and columns will be adjusted to the number you enter.")
    
    for(let col=1; col<=input; col++) {
    const cols = document.createElement('div')
    cols.classList.add("colBoxes");
    sketchBoard.appendChild(cols);
        for(let row=1; row<=input; row++) {
        const rows = document.createElement('div');
        rows.classList.add("rowBoxes");
        cols.appendChild(rows);    
        }
    }
    alert ("Select from the other buttons - the colour you want to sketch in.");
})

//sketching in black color
black.addEventListener('click', () => {
    console.log('clicked')
    const boxes = document.querySelectorAll('.rowBoxes');
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black';
        })
    })
})

//sketching in random colors
random.addEventListener('click', () => {
    console.log('clicked');
    const boxes = document.querySelectorAll('.rowBoxes');
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            const randomRed = Math.random();
            const randomGreen = Math.random();
            const randomBlue = Math.random();
            const randomRGB = `rgb(${Math.floor(randomRed*255)}, ${Math.floor(randomGreen*255)}, ${Math.floor(randomBlue*255)})`;
            box.style.backgroundColor = randomRGB;
        })
    })
})        

//sketching with increasing opacity
opacity.addEventListener('click', () => {
    console.log('clicked');
    const boxes = document.querySelectorAll('.rowBoxes');
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = 'red';
            let currentOpacity = parseFloat(event.target.style.opacity) || 0.1;
            event.target.style.opacity = Math.min(currentOpacity+0.1,1);
        })
    })
})