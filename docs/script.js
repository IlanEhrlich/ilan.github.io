function showBlog(id) {
  document.querySelectorAll(".blog-content").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".blog-tab").forEach(b => b.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  event.target.classList.add("active");
}
