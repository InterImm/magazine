// Table of contents for articles with `toc: true`: lists the h2 headings in the side column
// and marks the one being read.
(function () {
  var nav = document.querySelector(".toc");
  var content = document.getElementById("content");
  if (!nav || !content) return;
  var heads = content.querySelectorAll("h2");
  if (heads.length < 2) return;
  var list = nav.querySelector("ol");
  var links = [];
  heads.forEach(function (h, i) {
    if (!h.id) h.id = "toc" + i;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
    links.push(a);
  });
  nav.hidden = false;
  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) {
        if (a.getAttribute("href") === "#" + e.target.id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "0px 0px -70% 0px" });
  heads.forEach(function (h) { io.observe(h); });
})();
