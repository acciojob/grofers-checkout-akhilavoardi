
	
// Create the button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Define the getSum function
const getSum = () => {
  // Select all elements with class 'prices'
  const priceElements = document.querySelectorAll(".prices");
  let total = 0;

  // Sum up all the prices
  priceElements.forEach(priceEl => {
    const value = parseFloat(priceEl.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Create a new row
  const totalRow = document.createElement("tr");

  // Create a cell to hold the total
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Assuming table has 2 columns: Item and Price
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: $${total.toFixed(2)}`;

  // Append cell to the row
  totalRow.appendChild(totalCell);

  // Append row to the table
  const table = document.querySelector("table");

  // Optional: Remove any previous total row if already added
  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Mark this row for potential future removal
  totalRow.classList.add("total-row");

  // Append to table
  table.appendChild(totalRow);
};

// Attach event listener to the button
getSumBtn.addEventListener("click", getSum);


