/* =========================================================
   Quadra Manunggal — interactions + ID/EN language toggle
   Indonesian text lives in the HTML; English lives here.
   ========================================================= */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var WA_NUMBER = "6285121664585";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- English dictionary ---------- */
  var en = {
    "nav.about": "About", "nav.services": "Services", "nav.products": "Products",
    "nav.approach": "Approach", "nav.values": "Values", "nav.contact": "Contact Us",

    "hero.badge": "Software House & IT Consulting · Since 2022",
    "hero.lead": "PT Quadra Manunggal Sejahtera builds software grounded in how your business actually works, not just lines of code. We are the company behind the QuadraOne product suite.",
    "hero.cta1": "Discuss Your Project", "hero.cta2": "See Our Products",

    "stats.founded": "Founded", "stats.founders": "Multidisciplinary founders",
    "stats.pillars": "Business pillars", "stats.products": "In-house software products",

    "about.eyebrow": "About us",
    "about.statement": "We believe technology is not just an operational tool, but a strategic element that improves efficiency, productivity, service quality, and an organisation’s competitiveness.",
    "about.p1": "Founded in 2022, Quadra Manunggal is a software house and IT consultancy built on the collaboration of five founders with diverse educational backgrounds, disciplines, professional experience, and competencies.",
    "about.p2": "Every organisation has its own characteristics, challenges, and system needs. That is why we believe technology development must start from understanding the business process, not only the software requirements.",
    "about.foundersTitle": "Five founders, six areas of expertise",
    "about.f1": "Business & Management", "about.f3": "System Analysis & Design",
    "about.f5": "Infrastructure & Integration", "about.f6": "Hospitality Industry Knowledge",

    "pillars.eyebrow": "Business focus",
    "pillars.title": "Three pillars, one integrated approach",
    "pillars.p1": "Building and maintaining our own software products: Q1 PMS and Q1 POS.",
    "pillars.p2": "Software and application development tailored to customer needs and business processes.",
    "pillars.p3": "IT consulting, system requirements analysis, architecture planning, implementation, and integration.",

    "services.eyebrow": "Services", "services.title": "Technology & consulting services",
    "services.lead": "From requirements analysis to post go-live support, handled by one team that understands both business and technology.",
    "services.s1": "Applications and information systems built to business needs and technical specs.",
    "services.s2": "Solutions tailored to your organisation’s processes and workflows.",
    "services.s3": "Planning and optimising technology for business goals.",
    "services.s4": "Specifications, application architecture, and solution design.",
    "services.s5": "Connecting applications and platforms so data stays consistent.",
    "services.s6": "Configuration, testing, data migration, and user readiness.",
    "services.s7": "Maintenance, improvements, and ongoing technical support.",
    "services.s8": "Guiding digital transformation for efficiency and competitiveness.",

    "products.eyebrow": "Our products", "products.title": "Our innovation, in product form",
    "products.lead": "QuadraOne is a hospitality software suite we design, build, and develop in-house: two standalone products, one for hotels and one for F&B businesses in Indonesia.",
    "pms.title": "Full control of property operations, from front desk to night audit",
    "pms.sub": "Cloud hotel management software",
    "pms.desc": "One system for Front Office, Housekeeping, F&B, Channel Manager, Inventory, and Accounting, for independent hotels and hotel groups alike.",
    "pms.t1": "Reservations & front office",
    "pms.t2": "OTA channel manager",
    "pms.t3": "Housekeeping via mobile app",
    "pms.t4": "Automatic night audit",
    "pms.groupT": "Supports multi-property groups",
    "pms.group": "Manage several hotels as one group: guest data shared across properties, per-property access rights, and consolidated dashboards and financial reports.",
    "pms.more": "See all modules",
    "pos.title": "Fast at the till, precise in the kitchen, in control of inventory",
    "pos.sub": "POS & F&B operations software",
    "pos.desc": "For restaurants, cafes, and bars. Standalone with no Q1 PMS needed, from a single outlet to an F&B group with many branches.",
    "pos.t1": "Cashier & multi-payment",
    "pos.t2": "Interactive table map",
    "pos.t3": "QR self-order from guests’ phones",
    "pos.t4": "Recipe-based stock",
    "pos.groupT": "Supports groups with many outlets",
    "pos.group": "Manage menus, prices, areas, stores, and stock for every outlet from one central control, with consolidated multi-location reports and P&L.",
    "pos.more": "See all features",
    "la.p1": "New booking received",
    "la.p2": "Room 106 ready",
    "la.p2s": "updated by housekeeping",
    "la.s0": "Orders today",
    "la.s1": "Table A08 order in",
    "la.s1s": "QR self-order · 3 items",
    "la.s2": "Payment received",

    "approach.eyebrow": "Our approach", "approach.title": "Systematic, structured, and collaborative",
    "approach.lead": "Seven stages that make sure a solution doesn’t just run, but hits the mark for your business.",
    "approach.s1": "Understanding needs, goals, and business characteristics.",
    "approach.s2": "Business process and functional requirements analysis.",
    "approach.s3": "Architecture, app structure, database, and UX.",
    "approach.s4": "Building to the agreed specification.",
    "approach.s5": "Ensuring function, stability, security, and quality.",
    "approach.s6": "Rollout, user guidance, and technical support.",
    "approach.s7": "Ongoing maintenance and development.",

    "vm.eyebrow": "Vision & mission",
    "vm.vision": "To be an innovative, trusted, and competitive technology company delivering software solutions and IT consulting that add value to business transformation and growth.",
    "vm.m1": "Build quality, innovative software that is relevant to industry needs.",
    "vm.m2": "Deliver technology that improves business efficiency and effectiveness.",
    "vm.m3": "Provide professional, customer-oriented IT consulting.",
    "vm.m4": "Combine business understanding and technical expertise in every solution.",
    "vm.m5": "Apply development standards that prioritise quality, security, and reliability.",
    "vm.m6": "Build strategic partnerships and long-term customer relationships.",
    "vm.m7": "Develop our people and adapt to technological change.",

    "values.eyebrow": "Core values", "values.title": "The values we hold",
    "values.v1": "Honesty, transparency, accountability, and professional ethics.",
    "values.v2": "Combining skills, experience, and perspectives for the best solutions.",
    "values.v3": "Creativity and continuous technology development.",
    "values.v4": "Quality, reliability, and professionalism in every product and service.",
    "values.v5": "Understanding customer needs and delivering real benefits.",
    "values.v6": "Ongoing evaluation, learning, and quality improvement.",

    "why.eyebrow": "Why choose us", "why.title": "A technology partner for the long run",
    "why.w1t": "Multidisciplinary expertise", "why.w1d": "Five founders with diverse academic and professional backgrounds.",
    "why.w2t": "Business-oriented technology", "why.w2d": "Built from understanding business processes, not only technical aspects.",
    "why.w3t": "We own our products", "why.w3d": "We build, own, and operate our own software products.",
    "why.w4t": "Flexible solutions", "why.w4d": "Adaptable to your needs and as your business grows.",
    "why.w5t": "Integrated approach", "why.w5d": "Development, consulting, and system integration in one team.",
    "why.w6t": "Long-term partnership", "why.w6d": "Grounded in trust, service quality, and shared growth.",

    "closing.eyebrow": "Our commitment",
    "closing.text": "We see every customer as a partner in their digital transformation journey. Together We Innovate. Together We Grow.",

    "contact.eyebrow": "Contact", "contact.title": "Let’s work together",
    "contact.lead": "Tell us about your business technology needs. Our team is ready to listen and design the right solution.",
    "contact.office": "Office",
    "form.name": "Full name", "form.company": "Company", "form.topic": "I’m interested in",
    "form.topicProduct": "QuadraOne products", "form.message": "Tell us what you need",
    "form.send": "Send Message",
    "form.wa": "Prefer to chat? Reach us on WhatsApp",
    "form.sending": "Sending…",
    "form.ok": "Thank you! Your message has been sent. Our team will get back to you soon.",
    "form.fail": "Your message couldn’t be sent. Please try again, or reach us on WhatsApp.",
    "form.err": "Please fill in your name, a valid email, and your message.",

    "footer.tagline": "Software house & IT consulting. One Vision. Diverse Expertise. Integrated Technology Solutions.",
    "footer.company": "Company"
  };

  var idText = {
    "form.sending": "Mengirim…",
    "form.ok": "Terima kasih! Pesan Anda sudah terkirim. Tim kami akan segera menghubungi Anda.",
    "form.fail": "Pesan gagal terkirim. Silakan coba lagi, atau hubungi kami via WhatsApp.",
    "form.err": "Mohon isi nama, email yang valid, dan kebutuhan Anda."
  };

  /* ---------- Language ---------- */
  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) { idText[el.getAttribute("data-i18n")] = el.textContent.trim(); });
  var lang = "id";
  var status = document.getElementById("formStatus");

  function t(key) { return (lang === "en" ? en[key] : idText[key]) || idText[key] || ""; }

  function setLang(next) {
    lang = next === "en" ? "en" : "id";
    document.documentElement.lang = lang;
    nodes.forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"));
      if (val) el.textContent = val;
    });
    var group = document.querySelector(".lang");
    group.setAttribute("data-active", lang);
    group.querySelectorAll(".lang__btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    status.textContent = ""; status.className = "form__status";
    splitStatement();
    try { localStorage.setItem("qm-lang", lang); } catch (e) { /* storage unavailable */ }
  }

  document.querySelectorAll(".lang__btn").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* ---------- Scroll-lit statement ---------- */
  var statement = document.getElementById("statement");
  var words = [];
  function splitStatement() {
    if (reduceMotion || !statement) return;
    var text = statement.textContent.trim();
    statement.innerHTML = "";
    words = text.split(/\s+/).map(function (w, i, arr) {
      var s = document.createElement("span");
      s.className = "w";
      s.textContent = w;
      statement.appendChild(s);
      if (i < arr.length - 1) statement.appendChild(document.createTextNode(" "));
      return s;
    });
    statement.setAttribute("aria-label", text);
    updateStatement();
  }
  function updateStatement() {
    if (!words.length) return;
    var r = statement.getBoundingClientRect();
    var vh = window.innerHeight;
    // Fully lit once the statement's bottom reaches ~55% of the viewport, so dimmed words never linger
    var p = (vh * 0.9 - r.top) / (r.height + vh * 0.35 - vh * 0.2);
    p = Math.max(0, Math.min(1, p));
    var lit = Math.round(p * words.length);
    for (var i = 0; i < words.length; i++) words[i].classList.toggle("on", i < lit);
  }

  var saved = null;
  try { saved = localStorage.getItem("qm-lang"); } catch (e) { /* storage unavailable */ }
  setLang(saved || "id");

  /* ---------- Header + menu ---------- */
  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("menuToggle");
  var waFloat = document.querySelector(".wa-float");
  var hero = document.getElementById("hero");

  function closeMenu() {
    nav.classList.remove("is-open");
    header.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function () {
    var open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---------- Approach progress ---------- */
  var steps = document.getElementById("steps");
  var stepItems = steps.querySelectorAll(".step");
  function updateSteps() {
    var r = steps.getBoundingClientRect();
    var p = (window.innerHeight * 0.75 - r.top) / r.height;
    p = Math.max(0, Math.min(1, p));
    steps.style.setProperty("--progress", p.toFixed(3));
    stepItems.forEach(function (s, i) { s.classList.toggle("on", p > 0 && p >= i / (stepItems.length - 1) - 0.001); });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      header.classList.toggle("is-solid", y > 40);
      waFloat.classList.toggle("show", y > hero.offsetHeight * 0.6);
      updateStatement();
      updateSteps();
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ---------- Active nav link ---------- */
  var navLinks = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]:not(.btn)'));
  if ("IntersectionObserver" in window) {
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (l) { l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navLinks.forEach(function (l) { var s = document.querySelector(l.getAttribute("href")); if (s) secObs.observe(s); });
  }

  /* ---------- Reveal on scroll (staggered per group) ---------- */
  var groups = [".head", ".about__text", ".founders", ".pillar", ".service", ".product__head", ".product__info", ".product__media",
    ".vm__vision", ".mission li", ".value", ".why__item", ".closing__inner", ".contact__info", ".form"];
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("in"); obs.unobserve(entry.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    groups.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
        el.style.setProperty("--d", Math.min(idx, 6) * 80 + "ms");
        el.classList.add("reveal");
        revObs.observe(el);
      });
    });
  }

  /* ---------- Counters ---------- */
  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var from = target > 1000 ? target - 22 : 0;
    var start = null, dur = 1600;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(from + (target - from) * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && !reduceMotion) {
    var cObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { countUp(entry.target); obs.unobserve(entry.target); } });
    }, { threshold: 0.6 });
    document.querySelectorAll("[data-count]").forEach(function (c) { cObs.observe(c); });
  }

  /* ---------- Pointer effects (desktop only) ---------- */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      hero.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
    });
    document.querySelectorAll(".tilt").forEach(function (box) {
      var browser = box.querySelector(".browser");
      box.addEventListener("pointermove", function (e) {
        var r = box.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        browser.style.setProperty("--ry", (x * 10).toFixed(2) + "deg");
        browser.style.setProperty("--rx", (-y * 8).toFixed(2) + "deg");
      });
      box.addEventListener("pointerleave", function () {
        browser.style.removeProperty("--ry");
        browser.style.removeProperty("--rx");
      });
    });
  }

  /* ---------- Contact form → email (FormSubmit), WhatsApp as fallback ----------
     This is a static site with no server, so messages go through FormSubmit's AJAX endpoint.
     The very first submission makes FormSubmit send an activation email to CONTACT_EMAIL;
     someone must click "Activate" in that email before messages are delivered. */
  var CONTACT_EMAIL = "info@quadraone.com";
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/" + CONTACT_EMAIL;
  var form = document.getElementById("contactForm");
  var submitBtn = document.getElementById("formSubmit");
  var submitLabel = submitBtn.querySelector("span");

  function waMessage() {
    var d = form.elements;
    var isEn = lang === "en";
    return (isEn ? "Hello Quadra Manunggal," : "Halo Quadra Manunggal,") + "\n\n" +
      (isEn ? "Name" : "Nama") + ": " + d.name.value.trim() + "\n" +
      (d.company.value.trim() ? (isEn ? "Company" : "Perusahaan") + ": " + d.company.value.trim() + "\n" : "") +
      "Email: " + d.email.value.trim() + "\n" +
      (isEn ? "Topic" : "Topik") + ": " + d.topic.value + "\n\n" +
      d.message.value.trim();
  }

  function setStatus(kind, key, waText) {
    status.className = "form__status" + (kind ? " is-" + kind : "");
    status.textContent = t(key);
    if (waText) {
      var a = document.createElement("a");
      a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(waText);
      a.target = "_blank"; a.rel = "noopener";
      a.textContent = " WhatsApp →";
      status.appendChild(a);
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = true;
    ["name", "email", "message"].forEach(function (n) {
      var f = form.elements[n];
      var v = f.value.trim();
      var valid = v !== "" && (n !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
      f.classList.toggle("is-invalid", !valid);
      if (!valid) ok = false;
    });
    if (!ok) { setStatus("err", "form.err"); return; }

    var d = form.elements;
    var payload = {
      _subject: "Pesan baru dari website Quadra Manunggal — " + d.topic.value,
      _template: "table",
      _captcha: "false",
      _honey: d._honey.value,
      Nama: d.name.value.trim(),
      Perusahaan: d.company.value.trim() || "-",
      Email: d.email.value.trim(),
      _replyto: d.email.value.trim(),
      Topik: d.topic.value,
      Pesan: d.message.value.trim(),
      Bahasa: lang.toUpperCase()
    };
    var waText = waMessage();

    submitBtn.disabled = true;
    submitLabel.textContent = t("form.sending");
    setStatus("", "form.sending");

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) { return res.json().then(function (body) { return { ok: res.ok, body: body }; }); })
      .then(function (r) {
        if (r.ok && String(r.body.success) === "true") {
          setStatus("ok", "form.ok");
          form.reset();
        } else {
          setStatus("err", "form.fail", waText);
        }
      })
      .catch(function () { setStatus("err", "form.fail", waText); })
      .then(function () {
        submitBtn.disabled = false;
        submitLabel.textContent = t("form.send");
      });
  });
})();
