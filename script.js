// Get all price cells
const priceElements = document.querySelectorAll(".prices");

// Calculate total
let total = 0;
priceElements.forEach(price => {
    total += Number(price.textContent);
});

// Get the table
const table = document.querySelector("table");

// Create a new row
const totalRow = document.createElement("tr");

// Create a single cell containing the total
const totalCell = document.createElement("td");
totalCell.textContent = total;

// Span across all columns (assuming 2 columns: item and price)
totalCell.colSpan = 2;

totalRow.appendChild(totalCell);
table.appendChild(totalRow);
	
