const container = document.querySelector("#container");

//create a div/grid generating function to fill the container with eonugh divs. 
const makeGrid = (width,height) =>{
    let totalDiv = width * height;
    let divArray = [];

    for (let i=0; i <= totalDiv; i++){
        divArray[i] = document.createElement('div'); //create a new div
        divArray[i].id = "grid-"+ i; //add an ID to the div
        divArray[i].className = "gridDiv";
        divArray[i].style.width = "20px";
        divArray[i].style.height = "20px";
        container.appendChild(divArray[i]); //add the div to the container
    }
}

makeGrid(20,20);