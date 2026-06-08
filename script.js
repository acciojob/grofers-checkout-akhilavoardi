function calculateTotal() {
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  document.getElementById("ans").textContent = total;
}
	
