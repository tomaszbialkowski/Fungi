const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const isNavOpened = navToggle.getAttribute("aria-expanded");

  if (isNavOpened === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const resizeObserver = new ResizeObserver((entries) => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);
