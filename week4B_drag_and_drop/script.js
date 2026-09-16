// const box = document.getElementById('box'); 
// const playground = document.getElementById('playground'); 

// //check if the object is being dragged or not 
// let isDragging = false;
// //variables to keep track of where you clicked inside the box
// let offsetX = 0; 
// let offsetY = 0; 

// box.addEventListener('mousedown', function(e){
//     isDragging = true;
//     box.classList.add('dragging');

//     //get the boundaries of the box item 
//     const boxRect = box.getBoundingClientRect(); 
    
//     //calculates the position of the mouse 
//     //cursors horizontal position minus the box's position 
//     offsetX = e.clientX - boxRect.left; 
//     //gets the y position of the mouse
//     //cursors vertical position minus the box's position 
//     offsetY = e.clientY - boxRect.top; 
// }); 

// box.addEventListener('mousemove', function(e){
//     // if the mouse isn't down, exit the function 
//     if (!isDragging) return;

//     const playgroundRect = playground.getBoundingClientRect(); 

//     // New position = mouse position, minus where we grabbed it,
//     // minus the playground's own offset on the page.
//     const newLeft = e.clientX - offsetX - playgroundRect.left;
//     const newTop = e.clientY - offsetY - playgroundRect.top;

//     //update the style position for the box 
//     box.style.left = newLeft + 'px';
//     box.style.top = newTop + 'px';    

//     // //without offset 
//     // box.style.left = e.clientX + 'px'; 
//     // box.style.top = e.clientY + 'px'; 
// });

// //stop dragging the box when the mouse is up 
// document.addEventListener('mouseup', function () {
//   isDragging = false;
//   box.classList.remove('dragging');
// });

//multiple items 
const tiles = document.querySelectorAll('.tile');

//loop through all of our boxes 
//apply drag & drop logic to all of our boxes 
tiles.forEach(function (tile) { 
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  tile.addEventListener('mousedown', function (e) {
    isDragging = true;
    tile.classList.add('dragging');

    const tileRect = tile.getBoundingClientRect();
    offsetX = e.clientX - tileRect.left;
    offsetY = e.clientY - tileRect.top;
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;

    const playgroundRect = playground.getBoundingClientRect();
    const newLeft = e.clientX - offsetX - playgroundRect.left;
    const newTop = e.clientY - offsetY - playgroundRect.top;

    tile.style.left = newLeft + 'px';
    tile.style.top = newTop + 'px';
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
    tile.classList.remove('dragging');
  });
});