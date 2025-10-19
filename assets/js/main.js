/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split(".home__profession-1", { chars: true });
const { chars: chars2 } = text.split(".home__profession-2", { chars: true });

animate(chars1, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, case: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, case: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

/*=============== SWIPER PROJECTS ITEMS ===============*/
const swiperData = [
  {
    num: "01",
    ctg: "Web",
    title: "Personal <br> Portfolio Website",
    subtitle: "Technologies used",
    description: "HTML, CSS, JavaScript, and GSAP for smooth animations.",
    img: "assets/img/projects-1.png",
  },
  {
    num: "02",
    ctg: "Web",
    title: "Currency <br> Converter App",
    subtitle: "Technologies used",
    description: "HTML, CSS, JavaScript, and Currency API integration.",
    img: "assets/img/projects-2.png",
  },
  {
    num: "03",
    ctg: "Web",
    title: "React <br> Component Library",
    subtitle: "Technologies used",
    description: "React, Tailwind CSS, and reusable UI components.",
    img: "assets/img/projects-3.png",
  },
  {
    num: "04",
    ctg: "Design",
    title: "Modern <br> Landing Page UI",
    subtitle: "Technologies used",
    description: "Figma for layout design and visual prototyping.",
    img: "assets/img/projects-4.png",
  },
  {
    num: "05",
    ctg: "Web",
    title: "Anime Info <br> Finder App",
    subtitle: "Technologies used",
    description: "React, Fetch API, and Swiper.js for carousel display.",
    img: "assets/img/projects-5.png",
  },
  {
    num: "06",
    ctg: "Web",
    title: "Weather <br> Forecast App",
    subtitle: "Technologies used",
    description: "HTML, CSS, JavaScript, and OpenWeather API.",
    img: "assets/img/projects-6.jpg",
  },
  {
    num: "07",
    ctg: "Web",
    title: "To-Do <br> List App",
    subtitle: "Technologies used",
    description: "React with local storage and responsive UI.",
    img: "assets/img/projects-7.webp",
  },
  {
    num: "08",
    ctg: "Design",
    title: "E-Commerce <br> Product UI",
    subtitle: "Technologies used",
    description: "Figma, Adobe XD, and modern design principles.",
    img: "assets/img/projects-8.jpg",
  },
  {
    num: "09",
    ctg: "Web",
    title: "Blog <br> Website",
    subtitle: "Technologies used",
    description: "HTML, CSS, and a minimal JavaScript CMS concept.",
    img: "assets/img/projects-9.jpg",
  },
  {
    num: "10",
    ctg: "Web",
    title: "Music <br> Player App",
    subtitle: "Technologies used",
    description: "React, JavaScript Audio API, and GSAP transitions.",
    img: "assets/img/projects-10.jpg",
  },
];

let saveCode = "";
swiperData.forEach((item) => {
  let { num, ctg, subtitle, title, description, img } = item;
  let createElemnt = `
    <article class="projects__card swiper-slide">
      <div class="blob"></div>

      <div class="projects__number">
          <h1>${num}</h1>
          <h3>${ctg}</h3>
      </div>

      <div class="projects__data">
          <h1 class="projects__title">${title}</h1>
          <p class="projects__subtitle">${subtitle}</p>
          <p class="projects__description">${description}</p>
      </div>

      <div class="projects__image">
          <img src="${img}" alt="project-${num}" class="projects__image">
          <a href="#" target="_blank" class="projects__button">
            <i class="ri-arrow-right-up-long-line"></i>
          </a>
      </div>
    </article>
  `;
  saveCode += createElemnt;
});
document.querySelector(".swiper-wrapper").innerHTML = saveCode;

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper(".projects__swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  speed: 600,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetSelector = tab.dataset.target,
      targetContent = document.querySelector(targetSelector);

    tabContents.forEach((content) => content.classList.remove("work-active"));
    tabs.forEach((t) => t.classList.remove("work-active"));

    tab.classList.add("work-active");
    targetContent.classList.add("work-active");
  });
});

/*=============== SERVICES ACCORDION ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const servicesButtons = document.querySelectorAll(".services__button");

  servicesButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.parentNode;
      const info = card.querySelector(".services__info");
      const isOpen = card.classList.contains("services-open");

      // Close all cards
      document.querySelectorAll(".services__card").forEach((otherCard) => {
        otherCard.classList.replace("services-open", "services-close");
        const otherInfo = otherCard.querySelector(".services__info");
        otherInfo.style.height = "0";
      });

      // Toggle current card
      if (!isOpen) {
        card.classList.replace("services-close", "services-open");
        info.style.height = `${info.scrollHeight}px`;
      }
    });
  });
});

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
const tracks = document.querySelectorAll(".testimonials__content");

tracks.forEach((track) => {
  const cards = [...track.children];

  for (const card of cards) {
    track.appendChild(card.cloneNode(true));
  }
});

/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById("contact-btn"),
  copyEmail = document.getElementById("contact-email").textContent;

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = `Email copied <i class="ri-check-line"></i>`;

    setTimeout(() => {
      copyBtn.innerHTML = `Copy email <i class="ri-file-copy-line"></i>`;
    }, 2000);
  });
});
/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const textYear = document.querySelector(".footer-year"),
  currentYear = new Date().getFullYear();

textYear.innerHTML = currentYear;

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id,
      top = section.offsetTop - 50,
      height = section.offsetHeight,
      link = document.querySelector(".nav__menu a[href*=" + id + "]");

    if (!link) return;
    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height
    );
  });
};

window.addEventListener("scroll", scrollActive);

/* ======= CUSTOM CURSOR FINAL SCRIPT ======= */
(function () {
  // Disable on mobile/touch devices
  if (window.matchMedia('(max-width: 768px)').matches ||
      (window.matchMedia('(pointer: coarse)').matches)) {
    document.body.style.cursor = 'auto';
    const existing = document.querySelector('.cc-cursor');
    if (existing) existing.style.display = 'none';
    return;
  }

  // Ensure cursor element exists
  let root = document.querySelector('.cc-cursor');
  if (!root) {
    root = document.createElement('div');
    root.className = 'cc-cursor';
    root.innerHTML = '<span class="cc-dot"></span><span class="cc-ring"></span>';
    document.body.appendChild(root);
  }
  const dot = root.querySelector('.cc-dot');
  const ring = root.querySelector('.cc-ring');

  // Activate custom cursor after first mouse move
  document.body.classList.add('cc-ready');
  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  let tx = x, ty = y;
  const ease = 0.18;

  function raf() {
    x += (tx - x) * ease;
    y += (ty - y) * ease;
    const t = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    dot.style.transform = t;
    ring.style.transform = t;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Move cursor
  window.addEventListener('mousemove', (e) => {
    tx = e.clientX; ty = e.clientY;
    document.body.classList.remove('cc-hidden');
  });

  // Hide on leave
  ['mouseleave', 'blur'].forEach(ev =>
    window.addEventListener(ev, () => document.body.classList.add('cc-hidden'))
  );
  ['mouseenter', 'focus'].forEach(ev =>
    window.addEventListener(ev, () => document.body.classList.remove('cc-hidden'))
  );

  // Hide custom cursor & show system one on hover over links/buttons
  const interactiveSel =
    'a[href], button, [role="button"], input[type="button"], input[type="submit"], .btn, .link, .nav__link';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSel)) {
      document.body.classList.add('cc-over-link');
      document.body.classList.remove('cc-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSel)) {
      document.body.classList.remove('cc-over-link');
    }
  });

  // Click animation
  document.addEventListener('mousedown', () => document.body.classList.add('cc-click'));
  document.addEventListener('mouseup', () => document.body.classList.remove('cc-click'));
})();



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",  
  duration: 2000,
  delay: 300,
  // reset: true,
});

sr.reveal(`.home__image, .projects__container, .work__container, .testimonials__container, .contact__container`);
sr.reveal(`.home__data`, { delay: 900, origin: "bottom" });
sr.reveal(`.home__info`, { delay: 1200, origin: "bottom" });
sr.reveal(`.home__social, .home__cv`, { delay: 1500 });
sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.about__image`, { origin: "right" });
sr.reveal(`.services__card`, { interval: 100 });


