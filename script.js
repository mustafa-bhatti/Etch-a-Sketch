/* 
step 1: get number of blocks from user
step2: multipliy them to get total blocks and create div of that class
step3: divide the number of block with width of the container(1000) ot get the width of the block and then assign that width to the class property
step4: assign them block class
*/

const newBtn = document.querySelector(".new-btn");
let numberGrids = 2;
newBtn.addEventListener("click", () => {
    const userNumber = parseInt(prompt("Enter the number of blocks, (1-100). Defualt 16x16."));
    if (userNumber>0 && userNumber<=100) {
        numberGrids = userNumber;
    }
    else {
        prompt("Wrong Input. Do it again. Range(1-100)");
    }
})

function createGrid(numberGrids) {
    let blockWidth = 1000/numberGrids;
    const gridContainer = document.querySelector(".block-container");
    let totalNumber = numberGrids * numberGrids;
    for (let i = 0;i < totalNumber;i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.width = blockWidth + "px";
        gridContainer.appendChild(block);
    }
}

createGrid(numberGrids);