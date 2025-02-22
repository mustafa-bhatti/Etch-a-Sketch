/* 
step 1: get number of blocks from user
step2: multipliy them to get total blocks and create div of that class
step3: divide the number of block with width of the container(1000) ot get the width of the block and then assign that width to the class property
step4: assign them block class
*/

const newBtn = document.querySelector(".new-btn");
const gridContainer = document.querySelector(".block-container");

let numberGrids = 16;
newBtn.addEventListener("click", () => {
    const userNumber = parseInt(prompt("Enter the number of blocks, (1-100). Defualt 16x16."));
    if (userNumber>0 && userNumber<=100) {
        numberGrids = userNumber;
        gridContainer.replaceChildren();
        createGrid(numberGrids);
    }

    else {
        prompt("Wrong Input. Do it again. Range(1-100)");
    }
})

function randomRGBA(opacity) {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    return "rgba(" + red + "," +blue + "," +green + "," + opacity + ")";
}
console.log(randomRGBA(0.1));

function createGrid(numberGrids) {
    let blockWidth = 1000/numberGrids;
    let opacity = 0;
    let totalBlocks = numberGrids * numberGrids;
    for (let i = 0;i < totalBlocks;i++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.style.width = blockWidth + "px";
            block.addEventListener("mouseover",()=>
             {
                console.log(opacity);
            block.style.backgroundColor = randomRGBA(opacity);
            block.classList.add("block-hovered");
            opacity+=0.1;
            if (opacity > 1) {
                opacity = 0;
            }
              })
            gridContainer.appendChild(block);
    

        }
    }



createGrid(numberGrids);