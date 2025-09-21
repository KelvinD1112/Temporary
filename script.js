// AI Chronicle - Interactive Features

document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Typewriter effect for hero title
  const typewriter = document.getElementById("typewriter");
  const phrases = [
    "Artificial Intelligence",
    "Machine Learning",
    "Neural Networks",
    "Deep Learning",
    "AI Revolution",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = 100;

    if (isDeleting) {
      typeSpeed = 50;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500; // Pause before next phrase
    }

    setTimeout(typeEffect, typeSpeed);
  }

  if (typewriter) {
    typeEffect();
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  // Observe timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => {
    observer.observe(item);
  });

  // Observe pioneer cards
  const pioneerCards = document.querySelectorAll(".pioneer-card");
  pioneerCards.forEach((card, index) => {
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Observe application cards
  const appCards = document.querySelectorAll(".app-card");
  appCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scroll-top");

  function toggleScrollTopBtn() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleScrollTopBtn);

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Mobile menu toggle (basic implementation)
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Parallax effect for hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const rate = scrolled * -0.5;

    if (hero && scrolled < window.innerHeight) {
      hero.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
  });

  // Add hover sound effect (optional - requires audio files)
  const interactiveElements = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .pioneer-card, .app-card"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      // Add subtle glow effect
      this.style.boxShadow = "0 0 30px rgba(102, 126, 234, 0.4)";
    });

    element.addEventListener("mouseleave", function () {
      // Remove glow effect
      this.style.boxShadow = "";
    });
  });

  // Timeline item click interaction
  const timelineContents = document.querySelectorAll(".timeline-content");
  timelineContents.forEach((content) => {
    content.addEventListener("click", function () {
      // Add a subtle pulse effect when clicked
      this.style.animation = "pulse 0.6s ease-in-out";
      setTimeout(() => {
        this.style.animation = "";
      }, 600);
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    // Press 'T' to scroll to timeline
    if (e.key === "t" || e.key === "T") {
      const timeline = document.getElementById("timeline");
      if (timeline) {
        timeline.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Press 'P' to scroll to pioneers
    if (e.key === "p" || e.key === "P") {
      const pioneers = document.getElementById("pioneers");
      if (pioneers) {
        pioneers.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Press 'Home' to scroll to top
    if (e.key === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Press 'End' to scroll to bottom
    if (e.key === "End") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  });

  // Add loading animation
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");

    // Trigger initial animations
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");
    const heroCta = document.querySelector(".hero-cta");

    if (heroTitle) {
      heroTitle.style.animation = "fadeInUp 1s ease-out";
    }
    if (heroSubtitle) {
      heroSubtitle.style.animation = "fadeInUp 1s ease-out 0.3s both";
    }
    if (heroCta) {
      heroCta.style.animation = "fadeInUp 1s ease-out 0.6s both";
    }
  });
});

// Add CSS for additional animations via JavaScript
const additionalStyles = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(15, 15, 35, 0.95);
        backdrop-filter: blur(20px);
        padding: 1rem;
        border-top: 1px solid var(--border-color);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement("style");
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
