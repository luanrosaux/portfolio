const menuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector("#mobile-nav");
const siteHeader = document.querySelector(".site-header");

if (menuButton && mobileNav) {
  const closeMenu = () => {
    mobileNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  const toggleMenu = () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  };

  menuButton.addEventListener("click", toggleMenu);

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mobileNav.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedButton && mobileNav.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

if (siteHeader) {
  const updateHeaderState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

const revealTargets = document.querySelectorAll(
  ".section-heading, .case-card, .skill-card, .article-card, .article-list-card, .quote-card, .contact-section, .process-card, .case-visual, .case-overview-text, .impact-card, .article-list-card, .article-body-section, .article-aside, .article-meta-card"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -60px 0px"
  });

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => {
    target.classList.add("is-visible");
  });
}

document.querySelectorAll(".case-card[data-href]").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }

    const href = card.getAttribute("data-href");
    if (href) {
      window.location.href = href;
    }
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    if (event.target.closest("a, button")) {
      return;
    }

    event.preventDefault();
    const href = card.getAttribute("data-href");
    if (href) {
      window.location.href = href;
    }
  });
});


const galleryLinks = document.querySelectorAll("[data-lightbox='case-gallery']");

if (galleryLinks.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Expanded project image");

  const closeButton = document.createElement("button");
  closeButton.className = "lightbox-close";
  closeButton.type = "button";
  closeButton.textContent = "Close";

  const image = document.createElement("img");
  image.alt = "";

  const caption = document.createElement("p");
  caption.className = "lightbox-caption";

  lightbox.append(closeButton, image, caption);
  document.body.appendChild(lightbox);

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    image.removeAttribute("src");
    caption.textContent = "";
    document.body.style.overflow = "";
  };

  galleryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const img = link.querySelector("img");
      const figure = link.closest("figure");
      const figcaption = figure?.querySelector("figcaption")?.textContent?.trim() || "";

      image.src = link.href;
      image.alt = img?.alt || "Expanded project image";
      caption.textContent = figcaption;
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}



document.querySelectorAll("[data-print]").forEach((button) => {
  button.addEventListener("click", () => {
    const downloadUrl = button.getAttribute("data-resume-download");
    const isMobilePrint = window.matchMedia("(max-width: 780px)").matches;

    if (isMobilePrint && downloadUrl) {
      window.location.href = downloadUrl;
      return;
    }

    window.print();
  });
});


// V24 article image lightbox
(() => {
  const links = document.querySelectorAll("[data-article-lightbox]");
  if (!links.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "article-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Full-size article image");

  const img = document.createElement("img");
  img.alt = "";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.textContent = "Close";

  lightbox.appendChild(img);
  lightbox.appendChild(closeButton);
  document.body.appendChild(lightbox);

  const close = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    img.removeAttribute("src");
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const source = link.getAttribute("href");
      const image = link.querySelector("img");
      img.src = source;
      img.alt = image ? image.alt : "Full-size article image";
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", close);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) close();
  });
})();
// End V24 article image lightbox


// V25 accessibility hardening
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
  rel.add("noopener");
  rel.add("noreferrer");
  link.setAttribute("rel", Array.from(rel).join(" "));
});
// End V25 accessibility hardening
