const maybeQuery = (fn, ...args) =>
  [...document.querySelectorAll(...args)].slice(0, 1).forEach(fn);

maybeQuery(
  (btn) =>
    btn.addEventListener("click", () => {
      const ariaAttr = "aria-expanded";
      const isExpanded = btn.getAttribute(ariaAttr) == "true";
      btn.setAttribute(ariaAttr, !isExpanded);
    }),
  "#mobile-menu-toggle"
);

maybeQuery(
    (btn) =>
      btn.addEventListener("click", () => {
        // const classAttr = "class";
        const bodyElm = document.querySelector("body");
        // bodyElm.classList.add("light-theme");
        // const isLight = bodyElm.getAttribute(classAttr) == "light-theme";
        // if (isLight) {
            // bodyElm.classList.remove("light-theme");
        // } else {
            bodyElm.classList.add("light-theme");
        // }
        
      }),
    "#theme-button"
  );
