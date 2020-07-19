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
        divArray[i].style.float = "left"; //prevents lines betwen blocks
        divArray[i].style.backgroundColor = "white";
        
        container.appendChild(divArray[i]); //add the div to the container
    }
    
}

makeGrid(20,20); //need to make the grid before we can modify it.

const gridClass = document.querySelectorAll(".gridDiv");


//iterate through the class list
gridClass.forEach((gridItem) => {

    gridItem.addEventListener('mouseover', () =>{

        gridItem.style.backgroundColor = "black";
    });

});
