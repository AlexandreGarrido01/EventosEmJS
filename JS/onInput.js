document.querySelector("input").addEventListener("input", (e) => {
  document.querySelector(
    "#demo"
  ).textContent = `O nome digitado foi: ${e.target.value}`;
});
