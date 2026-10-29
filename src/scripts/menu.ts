/**
 * Mobile menu (below 768 px): opens a full screen panel under the header, traps focus inside it,
 * locks page scrolling, and closes on Escape, on a link tap or when the window grows past 768 px.
 */
const button = document.querySelector<HTMLButtonElement>("[data-menu-button]");
const panel = document.getElementById("mobile-menu");
const header = document.querySelector<HTMLElement>("[data-site-header]");

if (button && panel && header) {
  const desktop = window.matchMedia("(min-width: 768px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const openIcon = button.querySelector<HTMLElement>("[data-icon='open']");
  const closeIcon = button.querySelector<HTMLElement>("[data-icon='close']");
  // Everything outside the header bar and the panel is made inert while the menu is open.
  const background = [document.querySelector("main"), document.querySelector("footer"), header.querySelector("[data-brand]")];
  let open = false;

  /** The toggle button first, then the panel links, in tab order. */
  const focusables = () => [button, ...panel.querySelectorAll<HTMLElement>("a[href], button")];

  const placePanel = () => {
    panel.style.top = `${header.getBoundingClientRect().bottom}px`;
  };

  const hidePanel = () => {
    if (!open) panel.hidden = true;
  };

  const setOpen = (next: boolean, { restoreFocus = false, animate = true } = {}) => {
    if (next === open) return;
    open = next;
    button.setAttribute("aria-expanded", String(next));
    button.setAttribute("aria-label", next ? "Close menu" : "Open menu");
    if (openIcon) openIcon.toggleAttribute("hidden", next);
    if (closeIcon) closeIcon.toggleAttribute("hidden", !next);
    document.documentElement.style.overflow = next ? "hidden" : "";
    for (const element of background) if (element instanceof HTMLElement) element.inert = next;

    if (next) {
      placePanel();
      panel.hidden = false;
      // Commit the hidden state's styles first so the fade and slide run.
      void panel.offsetHeight;
      panel.dataset.open = "true";
      focusables()[1]?.focus();
      return;
    }

    panel.dataset.open = "false";
    if (!animate || reducedMotion.matches) {
      panel.hidden = true;
    } else {
      panel.addEventListener("transitionend", hidePanel, { once: true });
      // In case the transition never runs (for example, the tab is in the background).
      window.setTimeout(hidePanel, 300);
    }
    if (restoreFocus) button.focus();
  };

  button.addEventListener("click", () => setOpen(!open));

  // A tapped link closes the menu at once, so the page can scroll to its section.
  panel.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) setOpen(false, { animate: false });
  });

  document.addEventListener("keydown", (event) => {
    if (!open) return;
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false, { restoreFocus: true });
      return;
    }
    if (event.key !== "Tab") return;

    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (!items.includes(active as HTMLElement)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  desktop.addEventListener("change", (event) => {
    if (event.matches) setOpen(false, { animate: false });
  });

  window.addEventListener("resize", () => {
    if (open) placePanel();
  });
}
