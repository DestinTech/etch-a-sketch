const container = document.querySelector("#container");

//create a div/grid generating function to fill the container with eonugh divs. 
const makeGrid = (gridWidth,gridHeight) =>{
    let totalDiv = gridWidth * gridHeight;
    let divArray = [];
    
    gridWidth = `${gridWidth * 20}px`; 
    console.log(gridWidth);
    container.style.width = gridWidth; //"400px";//set the container width calculated by pixelWidth * width

    for (let i=0; i < totalDiv; i++){
        divArray[i] = document.createElement('div'); //create a new div
        divArray[i].id = "grid-"+ i; //add an ID to the div
        divArray[i].className = "gridDiv";
        divArray[i].style.width = "20px";
        divArray[i].style.height = "20px";
        container.appendChild(divArray[i]); //add the div to the container
    
    }
    
}

makeGrid(20,20);