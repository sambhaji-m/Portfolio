/**
 * Sambhaji Murdare — Portfolio
 * Vanilla JavaScript — no frameworks
 */

const video = document.getElementById("hero-video");
const button = document.getElementById("mute-toggle");

button.addEventListener("click", () => {
  video.muted = !video.muted;
  button.textContent = video.muted ? "Unmute" : "Mute";
});


(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Profile links — from resume */
  const GITHUB_URL = "https://github.com/sambhaji-m";
  const LINKEDIN_URL = "https://www.linkedin.com/in/sambhaji-murdare/";
  const INQUIRY_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzxUNUzCdlmQFK8PdDGHLEYD1WvPpGxiFEtmkTrq7zgct7XDJNYrutvB6AS44ReETjJ/exec";

  /* --------------------------------------------------------------------------
     Project data for modals (aligned with resume)
     -------------------------------------------------------------------------- */
  const PROJECTS = {
    youhonk: {
      id: "youhonk",
      name: "Youhonk – Vehicle Service Management Platform",
      type: "Professional Platform",
      role: "Lead Admin Panel · Full-Stack Developer",
      period: "Apr 2025 – Present",
      image: "assets/images/project-youhonk.png",
      technologies: ["Vue.js", "Laravel", "PHP", "Python", "MySQL", "Element UI", "Git"],
      focus: "Admin panel modules, production workflows, API reliability, and Python ops automation.",
      outcome: "Supports live vendor/order operations with scalable admin tooling and reduced manual processing.",
      description:
        "Large-scale vehicle service marketplace connecting customers, workshops, and internal operations via mobile apps and a centralized admin system.",
      highlights: [
        "Led Admin Panel development using Vue.js and Laravel for vendor onboarding, workshop management, banners, vouchers, order lifecycle, pricing logic, and reassignment flows.",
        "Built highly dynamic admin interfaces with conditional forms, validations, file uploads, media previews, and reusable modular components.",
        "Contributed to backend API design, query optimization, data consistency fixes, and production-level debugging with backend engineers.",
        "Supported live production operations: workshop reassignment, pricing recalculation, vendor document management, and IVR integration workflows.",
        "Developed Python automation for Excel processing, IMEI handling, packing list generation, and bulk data utilities to reduce manual operational effort.",
      ],
      privateNote: "Professional project — source code not public.",
    },
    automation: {
      id: "automation",
      name: "Intelligent Automated E-commerce Procurement & Reconciliation System",
      type: "Automation System",
      role: "Automation Engineer",
      image: "assets/images/project-automation.png",
      focus: "Hybrid browser/OS automation, checkout resilience, and financial data extraction pipelines.",
      outcome: "Reduced manual procurement and reconciliation effort through reliable automated workflows.",
      technologies: ["Python", "Selenium", "PyAutoGUI", "Pandas", "Regex", "pdfplumber", "OpenPyXL"],
      description:
        "Resilient full-cycle automation for high-frequency e-commerce procurement and financial reconciliation.",
      highlights: [
        "Hybrid interaction engine combining Selenium (DOM-level) and PyAutoGUI (OS-level) for dynamic UIs and unstable DOM structures.",
        "Adaptive execution with rotating browser profiles, persistent sessions, and fallback selector strategies for high-traffic reliability.",
        "Real-time validation and checkout handling to prevent failures from UI re-renders and quantity limitations.",
        "PDF-to-Excel ETL pipeline extracting invoice numbers, order IDs, IMEI/serial numbers, and pricing from unstructured documents.",
        "ERP-ready Excel exports via Pandas and OpenPyXL, significantly reducing manual reconciliation effort.",
      ],
    },
    firebase: {
      id: "firebase",
      name: "Firebase Push Notification System",
      type: "Backend Service",
      role: "Backend Developer",
      image: "assets/images/project-firebase.png",
      focus: "Secure notification APIs, token lifecycle, and mobile client integration.",
      outcome: "Enabled dependable real-time push delivery for foreground and background app states.",
      technologies: ["Python", "Firebase Cloud Messaging", "JavaScript"],
      description:
        "Backend service using Firebase Cloud Messaging to deliver real-time push notifications to mobile applications.",
      highlights: [
        "Built secure APIs for device token registration, topic subscription, and notification delivery.",
        "Integrated FCM with mobile clients for reliable foreground and background notification behavior.",
      ],
    },
    iims: {
      id: "iims",
      name: "Integrated Inquiry Management System (IIMS)",
      type: "Web Application",
      role: "Full-Stack Developer",
      image: "assets/images/project-iims.png",
      focus: "Role-based access, inquiry CRUD, and staff workflow management.",
      outcome: "Streamlined student inquiry tracking for admin and staff teams.",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      description:
        "Web-based inquiry management for educational institutes to track and manage prospective student inquiries.",
      highlights: [
        "Role-based authentication for admin and staff users.",
        "Full CRUD functionality with filtering and search support.",
        "Clean workflow for tracking and managing student inquiries end to end.",
      ],
    },
  };

  /* --------------------------------------------------------------------------
     DOM references
     -------------------------------------------------------------------------- */
  const preloader = document.getElementById("preloader");
  const preloaderFill = document.getElementById("preloader-fill");
  const preloaderPercent = document.getElementById("preloader-percent");
  const preloaderBar = document.getElementById("preloader-bar");
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const backToTop = document.getElementById("back-to-top");
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");
  const heroVideo = document.getElementById("hero-video");
  const heroFallback = document.getElementById("hero-fallback");
  const heroRotator = document.getElementById("hero-rotator");
  const projectCards = document.querySelectorAll(".project-card");
  const focusableSelector =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input:not([disabled]), textarea:not([disabled]), select:not([disabled])';

  let lastFocusedElement = null;
  let rotatorIndex = 0;
  let rotatorTimer = null;

  const rotatorPhrases = [
    "automation systems",
    "admin panels",
    "scalable web platforms",
    "REST APIs",
    "workflow automation",
  ];

  /* --------------------------------------------------------------------------
     Preloader
     -------------------------------------------------------------------------- */
  function initPreloader() {
    if (prefersReducedMotion || !preloader) {
      document.body.classList.remove("preloader-active");
      if (preloader) preloader.classList.add("is-hidden");
      initScrollReveal();
      return;
    }

    document.body.classList.add("preloader-active");
    let progress = 0;
    const duration = 2200;
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      progress = Math.min(progress + step + Math.random() * 2, 100);
      preloaderFill.style.width = progress + "%";
      preloaderPercent.textContent = Math.floor(progress) + "%";
      preloaderBar.setAttribute("aria-valuenow", Math.floor(progress));

      if (progress >= 100) {
        clearInterval(timer);
        preloaderFill.style.width = "100%";
        preloaderPercent.textContent = "100%";

        setTimeout(() => {
          preloader.classList.add("is-hidden");
          document.body.classList.remove("preloader-active");
          initScrollReveal();
        }, 400);
      }
    }, interval);
  }

  /* --------------------------------------------------------------------------
     Hero video fallback
     -------------------------------------------------------------------------- */
  function initHeroVideo() {
    if (!heroVideo || !heroFallback) return;

    const showFallback = () => {
      heroVideo.classList.remove("is-active");
      heroFallback.classList.remove("is-hidden");
      heroVideo.pause();
    };

    const showVideo = () => {
      heroVideo.classList.add("is-active");
      heroFallback.classList.add("is-hidden");
      heroVideo.play().catch(showFallback);
    };

    heroVideo.addEventListener("error", showFallback);
    heroVideo.addEventListener("canplay", showVideo);

    // Default: animated fallback until a valid video loads
    showFallback();
    heroVideo.load();
  }

  /* --------------------------------------------------------------------------
     Hero rotating text
     -------------------------------------------------------------------------- */
  function initHeroRotator() {
    if (!heroRotator || prefersReducedMotion) return;

    function cycle() {
      rotatorIndex = (rotatorIndex + 1) % rotatorPhrases.length;
      heroRotator.style.opacity = "0";
      setTimeout(() => {
        heroRotator.textContent = rotatorPhrases[rotatorIndex];
        heroRotator.style.opacity = "1";
      }, 300);
    }

    heroRotator.style.transition = "opacity 0.3s ease";
    rotatorTimer = setInterval(cycle, 3200);
  }

  /* --------------------------------------------------------------------------
     Mobile navigation
     -------------------------------------------------------------------------- */
  function initMobileNav() {
    if (!navToggle || !navMenu) return;

    const setMenuState = (isOpen) => {
      navMenu.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      document.body.classList.toggle("is-locked", isOpen);
    };

    navToggle.addEventListener("click", () => {
      const isOpen = !navMenu.classList.contains("is-open");
      setMenuState(isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
        setMenuState(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navMenu.classList.contains("is-open")) {
        setMenuState(false);
      }
    });
  }

  /* --------------------------------------------------------------------------
     Smooth scroll for anchor links
     -------------------------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    });
  }

  /* --------------------------------------------------------------------------
     Navbar scroll state & active section
     -------------------------------------------------------------------------- */
  function initNavbarScroll() {
    let ticking = false;

    function onScroll() {
      const scrollY = window.scrollY;

      if (navbar) {
        navbar.classList.toggle("is-scrolled", scrollY > 40);
      }

      if (backToTop) {
        backToTop.classList.toggle("is-visible", scrollY > 500);
        backToTop.hidden = scrollY <= 500;
      }

      // Active nav link
      let current = "home";
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (scrollY >= top) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        const matches = link.dataset.section === current;
        link.classList.toggle("active", matches);
        if (matches) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });

      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(onScroll);
          ticking = true;
        }
      },
      { passive: true }
    );

    onScroll();
  }

  /* --------------------------------------------------------------------------
     Back to top
     -------------------------------------------------------------------------- */
  function initBackToTop() {
    if (!backToTop) return;

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* --------------------------------------------------------------------------
     Scroll reveal (IntersectionObserver)
     -------------------------------------------------------------------------- */
  function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");
    if (prefersReducedMotion) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  /* --------------------------------------------------------------------------
     Project modal
     -------------------------------------------------------------------------- */
  function buildModalHTML(project) {
    const techChips = project.technologies.map((t) => `<span>${t}</span>`).join("");
    const highlights = project.highlights.map((h) => `<li>${h}</li>`).join("");

    const noteBlock = project.privateNote
      ? `<p class="modal__note">${project.privateNote}</p>`
      : "";

    const imageBlock = project.image
      ? `<img class="modal__hero-img" src="${project.image}" alt="${project.name}" loading="lazy">`
      : "";

    const metaParts = [project.role, project.period].filter(Boolean);
    const metaRow = metaParts.length
      ? `<div class="modal__meta-row">${metaParts.map((m) => `<span>${m}</span>`).join("")}</div>`
      : "";

    return `
      ${imageBlock}
      <span class="modal__badge">${project.type}</span>
      <h2 class="modal__title" id="modal-title">${project.name}</h2>
      ${metaRow}
      ${project.focus ? `<p class="modal__focus"><strong>Focus:</strong> ${project.focus}</p>` : ""}
      ${project.outcome ? `<p class="modal__outcome"><strong>Outcome:</strong> ${project.outcome}</p>` : ""}
      <p class="modal__section-title">Overview</p>
      <p class="modal__desc">${project.description}</p>
      <p class="modal__section-title">What I Built</p>
      <div class="modal__highlights">
        <ul>${highlights}</ul>
      </div>
      <p class="modal__section-title">Tech Stack</p>
      <div class="modal__chips">${techChips}</div>
      ${noteBlock}
    `;
  }

  function openModal(projectId) {
    const project = PROJECTS[projectId];
    if (!project || !modal || !modalContent) return;

    lastFocusedElement = document.activeElement;
    modalContent.innerHTML = buildModalHTML(project);
    modal.hidden = false;
    document.body.classList.add("is-locked");
    modalClose?.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("is-locked");
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function initProjectModals() {
    document.querySelectorAll("[data-open-modal]").forEach((btn) => {
      btn.addEventListener("click", () => openModal(btn.dataset.openModal));
    });

    if (modalClose) {
      modalClose.addEventListener("click", closeModal);
    }

    if (modal) {
      modal.querySelector(".modal__backdrop")?.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && !modal.hidden) {
        closeModal();
      }

      if (e.key === "Tab" && modal && !modal.hidden) {
        trapFocusInModal(e);
      }
    });
  }

  function trapFocusInModal(event) {
    const focusableElements = modal.querySelectorAll(focusableSelector);
    if (!focusableElements.length) return;

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  }

  /* --------------------------------------------------------------------------
     Subtle 3D tilt on project cards
     -------------------------------------------------------------------------- */
  function initProjectTilt() {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;

    projectCards.forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });

      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* --------------------------------------------------------------------------
     Update social links (replace # with your URLs)
     -------------------------------------------------------------------------- */
  function initSocialLinks() {
    const github = document.getElementById("github-link");
    const linkedin = document.getElementById("linkedin-link");
    const footerGithub = document.getElementById("footer-github");
    const footerLinkedin = document.getElementById("footer-linkedin");

    [github, footerGithub].forEach((el) => {
      if (el) el.href = GITHUB_URL;
    });
    [linkedin, footerLinkedin].forEach((el) => {
      if (el) el.href = LINKEDIN_URL;
    });
  }

  function initInquiryForm() {
    const form = document.getElementById("inquiry-form");
    const status = document.getElementById("inquiry-status");
    if (!form || !status) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      status.classList.remove("is-success", "is-error");
      status.textContent = "Sending inquiry...";

      const formData = new FormData(form);

      // Simple bot trap
      if ((formData.get("website") || "").toString().trim() !== "") {
        status.classList.add("is-success");
        status.textContent = "Thanks! Your message has been submitted.";
        form.reset();
        return;
      }

      try {
        await fetch(INQUIRY_SCRIPT_URL, {
          method: "POST",
          body: formData,
        });
        status.classList.add("is-success");
        status.textContent = "Message sent successfully. I will get back to you soon.";
        form.reset();
      } catch (error) {
        status.classList.add("is-error");
        status.textContent = "Unable to send right now. Please use Email Me.";
      }
    });
  }

  /* --------------------------------------------------------------------------
     Initialize
     -------------------------------------------------------------------------- */
  function init() {
    initPreloader();
    initHeroVideo();
    initHeroRotator();
    initMobileNav();
    initSmoothScroll();
    initNavbarScroll();
    initBackToTop();
    initProjectModals();
    initProjectTilt();
    initSocialLinks();
    initInquiryForm();

    if (!preloader) initScrollReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
