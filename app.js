const containerEl = document.querySelector(".container");
for(let i =0; i < 32; i++){
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    containerEl.appendChild(colorContainer);
}

const allColorContainer = document.querySelectorAll(".color-container");

generateColor();

function generateColor(){
    
    allColorContainer.forEach((colorContainer) =>{
        const newColorCode = randomeColor();
        console.log(newColorCode);
        colorContainer.style.backgroundColor = "#" + newColorCode;
        colorContainer.innerText = "#" + newColorCode;
    });
}

function randomeColor(){
    const chars = "0123456789abcdef";
    let colorCode = "";
    for (let index = 0; index < 6; index++) {
        
        const randomNum = Math.floor(Math.random() * chars.length);

        colorCode += chars.substring(randomNum,randomNum+1);
     
    }
    return colorCode;
}