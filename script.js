//thanks to dirask
let boxQuantity = document.querySelector("input");
let columns = boxQuantity.value;
let rows = boxQuantity.value;
let boxSize = 640/boxQuantity.value;
let bgColor = "";


boxQuantity.addEventListener("change", function() {updateSizes()} );

const grid = document.createElement("div");
grid.className = "container";

function updateSizes() {

     columns = boxQuantity.value;
     rows = boxQuantity.value;
     boxSize = 640/boxQuantity.value;
     while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
      if (!grid.hasChildNodes())
      {
     createSheet();
      }

}

function createSheet() {

    for (let i = 0; i < columns; ++i) {
        const column = document.createElement("div"); // create column
        column.className = "column";
        for (let j = 0; j < rows; ++j) {
            const row = document.createElement("div"); // create row
            row.className = "row";
            row.style.width = boxSize+"px";
            row.style.height= boxSize+"px";
            //row.textContent = i + '-' +j; // set text
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);
}


function reset() {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }
    createSheet();
  }


grid.addEventListener("mouseover", function(e) {
    if (e.target.matches(".row")) {
        e.target.classList.add("active");

    }
})

const resetButton = document.createElement("button");
resetButton.textContent = "RESET";
const dombody = document.querySelector(".bod");
dombody.appendChild(resetButton);

resetButton.addEventListener("click", ()=>reset());
createSheet();


