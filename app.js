/// Declaring the elemnts to work on
let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");


/// Looping all the list items inside the left container
for(let list of lists){
  list.addEventListener("dragstart", (e)=>{

/// Selecting the dragged target 
    let selected = e.target;

/// Adding listener to listen the drag and drop to other container
    rightBox.addEventListener("dragover", (e)=>{
      e.preventDefault();
    })

/// Dropping the dragged item from left container
    rightBox.addEventListener("drop", (e)=>{
      rightBox.appendChild(selected)

/// Resetting the selected element so that it can drag another box
      e.selected = null;
    })
  })
}

// Reset function to clear the rightBox and reset the leftBox
function resetContainers() {
  rightBox.innerHTML = '';
  leftBox.innerHTML = `
    <div class="list" draggable="true">Item 1</div>
    <div class="list" draggable="true">Item 2</div>
    <div class="list" draggable="true">Item 3</div>
    <div class="list" draggable="true">Item 4</div>
    `;
}

// Attach resetContainers function to the resetButton click event
let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetContainers);