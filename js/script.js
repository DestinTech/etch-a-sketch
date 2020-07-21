const container = document.querySelector("#container");

//create a div/grid generating function to fill the container with eonugh divs. 
const makeGrid = (gridWidth,gridHeight) =>{
    let totalDiv = gridWidth * gridHeight;
    let divArray = [];
    let containerSize = 960;
    //grid is currently 20*20px = 400px
    blockSize =  containerSize/gridWidth; // we can ge tthe size of the block by taking the known size of the grid and dividing it by how many blocks we want
    console.log(blockSize + " px");

    gridWidth = `${gridWidth * blockSize}px`; 
    console.log(gridWidth);
    container.style.width = gridWidth; //"400px";//set the container width calculated by pixelWidth * width
    container.innerHTML = "";
    
    for (let i=0; i < totalDiv; i++){
        divArray[i] = document.createElement('div'); //create a new div
        divArray[i].id = "grid-"+ i; //add an ID to the div
        divArray[i].className = "gridDiv";
        divArray[i].style.width = `${blockSize}px`;
        divArray[i].style.height = `${blockSize}px`;
        divArray[i].style.float = "left"; //prevents lines betwen blocks
        divArray[i].style.backgroundColor = "white";
        
        container.appendChild(divArray[i]); //add the div to the container
    }
    //and then add the listeners
    
const gridClass = document.querySelectorAll(".gridDiv");


//iterate through the class list
    gridClass.forEach((gridItem) => {

        gridItem.addEventListener('mouseover', () =>{

            gridItem.style.backgroundColor = "black";
        });

    });
    
}

makeGrid(20,20); //need to make the grid before we can modify it.


let newGameButton = document.querySelector("#newGame");

newGameButton.addEventListener('click', ()=>{
    newGame();
});

const newGame = () => {
    // make a new grid.
    //we want a popup to get the grid size
    // then we want to make the squares for that size.
    let gridWidth = prompt("enter the size of the grid you'd like");
    makeGrid(gridWidth, gridWidth);

}
