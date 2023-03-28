document.querySelector("input").addEventListener("focus", (e) => {
  document.querySelector("#demo").textContent = "O input recebeu o foco";
});
document.querySelector("input").addEventListener("blur", (e) => {
  document.querySelector("#demo").textContent = "O input perdeu o foco";
});
