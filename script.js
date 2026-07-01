/**
 * My English Learning Blog – JavaScript
 * Handles mobile navigation, active menu highlighting, and apprentice photo fallback.
 */

(function () {
  "use strict";

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".main-nav a");

  function navAriaKey(isOpen) {
    return isOpen ? "nav.ariaClose" : "nav.ariaOpen";
  }

  function setNavToggleLabel(isOpen) {
    if (!navToggle || !window.BlogI18n) return;
    const label = window.BlogI18n.getTranslation(navAriaKey(isOpen));
    if (label) navToggle.setAttribute("aria-label", label);
  }

  /* ---------- Mobile menu toggle ---------- */
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
      setNavToggleLabel(isOpen);
    });
  }

  /* ---------- Close menu when a link is clicked ---------- */
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      setNavToggleLabel(false);
    });
  });

  /* ---------- Highlight active nav link on scroll ---------- */
  const sections = document.querySelectorAll("section[id], article[id]");

  function setActiveLink() {
    let current = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");
      const href = link.getAttribute("href");

      if (href === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Close menu on window resize to desktop ---------- */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mainNav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      setNavToggleLabel(false);
    }
  });

  /* ---------- Update nav toggle label after language change ---------- */
  document.addEventListener("languageChanged", function () {
    if (!navToggle) return;
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavToggleLabel(isOpen);
  });

  /* ---------- Apprentice photo: show image or LN fallback ---------- */
  const apprenticePhoto = document.getElementById("apprenticePhoto");
  const apprenticeFallback = document.getElementById("apprenticeFallback");

  function showApprenticeFallback() {
    if (apprenticePhoto) apprenticePhoto.classList.add("is-hidden");
    if (apprenticeFallback) {
      apprenticeFallback.classList.add("is-visible");
      apprenticeFallback.setAttribute("aria-hidden", "false");
    }
  }

  function hideApprenticeFallback() {
    if (apprenticePhoto) apprenticePhoto.classList.remove("is-hidden");
    if (apprenticeFallback) {
      apprenticeFallback.classList.remove("is-visible");
      apprenticeFallback.setAttribute("aria-hidden", "true");
    }
  }

  if (apprenticePhoto) {
    apprenticePhoto.addEventListener("load", hideApprenticeFallback);
    apprenticePhoto.addEventListener("error", showApprenticeFallback);

    if (apprenticePhoto.complete) {
      if (apprenticePhoto.naturalWidth > 0) {
        hideApprenticeFallback();
      } else {
        showApprenticeFallback();
      }
    }
  }
})();
