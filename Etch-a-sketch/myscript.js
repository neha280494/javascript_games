

document.addEventListener('DOMContentLoaded', function() {
// get grid button
const gridBtn = document.getElementById("grid-btn");
gridBtn.addEventListener("click", () => {
     
    //Get Grid-size from user
   const input = document.getElementById("grid-val");
    const gridsize = input.value;

    //Load Grid
    createTable(gridsize);

    
    const boxes = document.querySelectorAll('.flex-cell');

boxes.forEach(box => {
    //color the grid on mouseenter
  box.addEventListener("mouseenter", () => {
    let color = getColor();
    box.style.backgroundColor = color;
  });
});

});



});

//Return randon hex color
function getColor()
{
    const color = Math.floor(Math.random() * 0xffffff).toString(16);
  return '#' + color.padStart(6, '0').toString();
  

}

//create table as per user input
 function createTable(gridsize) {

      const rows = gridsize;
      const cols = gridsize;

      // Create the table
      const table = document.createElement('table');

      

      // Create body rows
      const tbody = document.createElement('tbody');
      for (let r = 0; r < rows; r++) {
        const tr = document.createElement('tr');
        tr.className="flex-row";
        for (let c = 0; c < cols; c++) {
          const td = document.createElement('td');
          td.className="flex-cell";
          const emptyDiv1 = document.createElement('div');
          td.appendChild(emptyDiv1);
          tr.appendChild(td);

        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      table.className="flex-table";

      // append table to the page
      const container = document.getElementById('grid-div');
      container.innerHTML = ''; // Clear previous table
      container.appendChild(table);
    }




