function calculateTotal() {
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach((price) => {
    total += parseInt(price.textContent, 10) || 0;
  });

  document.getElementById("ans").textContent = total;
}