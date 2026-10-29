/** All / Development / UX design filter on the homepage. Cards stay in the HTML; this only hides and shows them. */
const group = document.querySelector<HTMLElement>("[data-project-filter]");
const work = document.getElementById("work");

if (group && work) {
  const buttons = [...group.querySelectorAll<HTMLButtonElement>("button[data-filter]")];
  const items = [...work.querySelectorAll<HTMLElement>("[data-category]")];

  group.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest<HTMLButtonElement>("button[data-filter]") : null;
    if (!target) return;
    const filter = target.dataset.filter;
    for (const button of buttons) button.setAttribute("aria-pressed", String(button === target));
    for (const item of items) item.hidden = filter !== "all" && item.dataset.category !== filter;
  });
}
