document.addEventListener("DOMContentLoaded", () => {
  const tocSidebar = document.querySelector("#quarto-margin-sidebar");

  if (!tocSidebar) return;

  if (document.querySelector(".toc-pdf-button")) return;

  const btn = document.createElement("a");
  btn.href = "#";
  btn.textContent = "PDF";
  btn.className = "toc-pdf-button";

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.print();
  });

  tocSidebar.appendChild(btn);
});