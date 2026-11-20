/* =====================================================================
   Stefano Pirone — logica del sito
   Legge i contenuti da /data/content.js (window.SITE_CONTENT), li
   impagina e gestisce la navigazione tra le viste senza ricaricare la
   pagina. Per aggiornare testi e progetti modifica SOLO content.js.
   ===================================================================== */
(function () {
  "use strict";

  var data = window.SITE_CONTENT || {};
  var progetti = data.progetti || [];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SITE = "Stefano Pirone";

  var VERBI = {
    analizzare: "Analizzare",
    attivare: "Attivare",
    raccontare: "Raccontare",
  };

  /* ---------- Utilità ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function cleanId(id) { return String(id || "").toLowerCase().replace(/[^a-z0-9-]/g, ""); }
  function findProject(id) {
    for (var i = 0; i < progetti.length; i++) if (cleanId(progetti[i].id) === id) return progetti[i];
    return null;
  }

  function isExternal(url) { return /^https?:\/\//i.test(url); }
  function isPdf(url) { return /\.pdf($|[?#])/i.test(url); }
  function isFile(url) { return /^\/files\//i.test(url); }
  function opensNewTab(url) { return isExternal(url) || isPdf(url) || isFile(url); }

  function linkAttrs(url) {
    var attrs = 'href="' + esc(url) + '"';
    if (opensNewTab(url)) attrs += ' target="_blank" rel="noopener"';
    return attrs;
  }
  function newTabNote(url) {
    if (!opensNewTab(url)) return "";
    return '<span class="sr-only">' + (isPdf(url) ? " (PDF," : " (") + " si apre in una nuova scheda)</span>";
  }

  /* Frecce in SVG: → per i link interni, ↗ per esterni e file */
  var ARROW_RIGHT =
    '<svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="M6 20h26M22 9l11 11-11 11" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>';
  var ARROW_OUT =
    '<svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="M10 30 30 10M14 10h16v16" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>';
  function arrowFor(url) { return opensNewTab(url) ? ARROW_OUT : ARROW_RIGHT; }

  function meta(p) {
    return [p.contesto, p.anno].filter(Boolean).map(esc).join(", ");
  }

  /* =================================================================
     RENDER
     ================================================================= */

  /* --- Home: In evidenza --- */
  function renderFeatured() {
    var list = $("#featured-list");
    if (!list) return;
    var home = data.home || {};
    list.innerHTML = (home.inEvidenza || [])
      .map(function (f) {
        var p = findProject(cleanId(f.progetto));
        if (!p) return "";
        return (
          "<li>" +
          '<a class="row" href="/progetti/' + cleanId(p.id) + '">' +
          '<span class="row__title">' + esc(p.titolo) + "</span>" +
          '<span class="row__text">' + esc(f.frase || p.sintesi) + "</span>" +
          '<span class="row__arrow">' + ARROW_RIGHT + "</span>" +
          "</a></li>"
        );
      })
      .join("");
  }

  /* --- Home: Adesso --- */
  function renderNow() {
    var el = $("#now-text");
    if (el) el.textContent = (data.home && data.home.adesso) || "";
  }

  /* --- Lista progetti --- */
  function renderProjects() {
    var list = $("#projects-list");
    if (!list) return;
    list.innerHTML =
      progetti
        .map(function (p) {
          var id = cleanId(p.id);
          return (
            '<li class="rows__item" data-verbo="' + esc(p.verbo) + '" style="--vt: p-' + id + '">' +
            '<a class="row" href="/progetti/' + id + '">' +
            '<span class="row__title">' + esc(p.titolo) + "</span>" +
            '<span class="row__text">' +
            '<span class="row__meta">' + meta(p) + "</span>" +
            esc(p.sintesi) +
            "</span>" +
            '<span class="row__arrow">' + ARROW_RIGHT + "</span>" +
            "</a></li>"
          );
        })
        .join("") +
      '<li class="rows__empty wrap" hidden>Nessun progetto qui, per ora.</li>';
  }

  /* --- Filtro progetti --- */
  var currentFilter = "tutti";

  function applyFilter(filter, animate) {
    if (filter !== "tutti" && !VERBI[filter]) filter = "tutti";
    var changed = filter !== currentFilter;
    currentFilter = filter;

    $$(".filter").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-filter") === filter));
    });

    var list = $("#projects-list");
    if (!list) return;
    var items = $$(".rows__item", list);

    function update() {
      var visible = 0;
      items.forEach(function (li) {
        var show = filter === "tutti" || li.getAttribute("data-verbo") === filter;
        li.hidden = !show;
        if (show) visible++;
      });
      var empty = $(".rows__empty", list);
      if (empty) empty.hidden = visible > 0;
      var status = $("#filter-status");
      if (status) {
        status.textContent =
          (filter === "tutti" ? "Tutti i progetti" : VERBI[filter]) +
          ": " + visible + (visible === 1 ? " progetto" : " progetti");
      }
    }

    if (!animate || !changed || reduceMotion) { update(); return; }

    if (document.startViewTransition) {
      list.classList.add("is-filtering");
      var t = document.startViewTransition(update);
      t.finished.then(function () { list.classList.remove("is-filtering"); }, function () { list.classList.remove("is-filtering"); });
    } else {
      update();
      items.forEach(function (li, i) {
        if (li.hidden) return;
        li.classList.remove("is-entering");
        void li.offsetWidth;
        li.style.animationDelay = Math.min(i, 8) * 40 + "ms";
        li.classList.add("is-entering");
      });
    }
  }

  function bindFilters() {
    $$(".filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        applyFilter(f, true);
        var url = "/progetti" + (f === "tutti" ? "" : "?verbo=" + f);
        history.replaceState(history.state, "", url);
      });
    });
  }

  /* --- Scheda progetto --- */
  function renderDetail(id) {
    var box = $("#project-detail");
    var p = findProject(id);
    if (!box || !p) return null;

    var i = progetti.indexOf(p);
    var next = progetti[(i + 1) % progetti.length];
    var verbo = VERBI[p.verbo] ? p.verbo : "analizzare";

    var links = (p.link || [])
      .filter(function (l) { return l && l.url; })
      .map(function (l) {
        return (
          '<li><a class="detail__link" ' + linkAttrs(l.url) + ">" +
          "<span>" + esc(l.etichetta || "Apri") + newTabNote(l.url) + "</span>" +
          '<span class="detail__link-arrow">' + arrowFor(l.url) + "</span></a></li>"
        );
      })
      .join("");

    box.innerHTML =
      '<div class="wrap">' +
      '<a class="back" href="/progetti"><span aria-hidden="true">←</span> Tutti i progetti</a>' +
      '<header class="detail__head detail__head--' + verbo + '">' +
      '<p class="detail__meta">' +
      '<a href="/progetti?verbo=' + verbo + '">' + VERBI[verbo] + "</a>" +
      (p.contesto ? "<span>" + esc(p.contesto) + "</span>" : "") +
      (p.anno ? "<span>" + esc(p.anno) + "</span>" : "") +
      "</p>" +
      '<h1 class="detail__title" id="project-title" tabindex="-1">' + esc(p.titolo) + "</h1>" +
      '<span class="detail__shape" aria-hidden="true"></span>' +
      "</header>" +
      '<div class="detail__body">' +
      '<p class="detail__lead">' + esc(p.sintesi) + "</p>" +
      '<div class="detail__text">' +
      (p.racconto || []).map(function (par) { return "<p>" + esc(par) + "</p>"; }).join("") +
      (links ? '<ul class="detail__links">' + links + "</ul>" : "") +
      "</div></div></div>" +
      (next && next !== p
        ? '<a class="row row--next" href="/progetti/' + cleanId(next.id) + '">' +
          '<span class="row__text">Progetto successivo</span>' +
          '<span class="row__title">' + esc(next.titolo) + "</span>" +
          '<span class="row__arrow">' + ARROW_RIGHT + "</span></a>"
        : "");

    return p;
  }

  /* --- Scrittura --- */
  function renderWriting() {
    var list = $("#writing-list");
    if (!list) return;
    var voci = data.scrittura || [];
    if (!voci.length) {
      list.innerHTML = '<li class="rows__empty wrap">Nuovi testi in arrivo.</li>';
      return;
    }
    list.innerHTML = voci
      .map(function (a) {
        var where = [a.dove, a.anno].filter(Boolean).map(esc).join(", ");
        var inner =
          '<span class="row__title">' + esc(a.titolo) + "</span>" +
          '<span class="row__text">' + where + (a.link && isPdf(a.link) ? ". PDF" : "") + "</span>";
        if (a.link) {
          return (
            '<li><a class="row" ' + linkAttrs(a.link) + ">" + inner + newTabNote(a.link) +
            '<span class="row__arrow">' + arrowFor(a.link) + "</span></a></li>"
          );
        }
        return '<li><div class="row row--static">' + inner + "</div></li>";
      })
      .join("");
  }

  /* --- Chi sono --- */
  function renderAbout() {
    var c = data.chiSono || {};
    var bio = $("#about-bio");
    if (bio) bio.innerHTML = (c.bio || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

    function eduItems(items) {
      return (items || [])
        .map(function (f) {
          return (
            '<li class="education__item">' +
            '<span class="education__title">' + esc(f.titolo) + "</span>" +
            '<span class="education__where">' + esc(f.dove) + "</span>" +
            '<span class="education__year">' + esc(f.anno) + "</span>" +
            "</li>"
          );
        })
        .join("");
    }
    var edu = $("#education-list");
    if (edu) edu.innerHTML = eduItems(c.formazione);
    var legal = $("#legal-list");
    if (legal) legal.innerHTML = eduItems(c.lavoroGiuridico);
    if (c.cv) {
      $$('a[href="/files/cv-stefano-pirone.pdf"]').forEach(function (a) { a.setAttribute("href", c.cv); });
    }
  }

  /* =================================================================
     ROUTER — navigazione tra viste con la History API
     ================================================================= */
  var TITLES = {
    home: SITE + " — giurista in formazione",
    progetti: "Progetti — " + SITE,
    scrittura: "Scrittura — " + SITE,
    "chi-sono": "Chi sono — " + SITE,
    contatti: "Contatti — " + SITE,
    "404": "Pagina non trovata — " + SITE,
  };

  function parse(pathname) {
    var path = pathname.replace(/\/+$/, "") || "/";
    if (path === "/" || path === "/index.html") return { view: "home" };
    if (path === "/progetti") return { view: "progetti" };
    var m = path.match(/^\/progetti\/([^/]+)$/);
    if (m) {
      var id = cleanId(decodeURIComponent(m[1]));
      return findProject(id) ? { view: "progetto", id: id } : { view: "404" };
    }
    if (path === "/scrittura") return { view: "scrittura" };
    if (path === "/chi-sono") return { view: "chi-sono" };
    if (path === "/contatti") return { view: "contatti" };
    return { view: "404" };
  }

  /* Solo questi percorsi sono gestiti dal router; il resto (/files, /grazie…) carica normalmente */
  function isAppPath(pathname) {
    return /^\/(progetti(\/[^/]+)?|scrittura|chi-sono|contatti)?\/?$/.test(pathname) || pathname === "/index.html";
  }

  var currentView = null;

  function render(route) {
    var section = route.view === "progetto" ? "progetti" : route.view;

    $$(".view").forEach(function (v) {
      v.classList.toggle("is-active", v.getAttribute("data-view") === route.view);
    });

    $$(".nav__links a").forEach(function (a) {
      if (a.getAttribute("data-section") === section) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    var title = TITLES[route.view] || SITE;
    if (route.view === "progetto") {
      var p = renderDetail(route.id);
      if (p) title = p.titolo + " — " + SITE;
    }
    if (route.view === "progetti") {
      var q = new URLSearchParams(location.search).get("verbo") || "tutti";
      applyFilter(q, false);
    }

    document.title = title;
    document.body.setAttribute("data-current", route.view);
    currentView = route.view;
  }

  function focusHeading() {
    var active = $(".view.is-active");
    var h = active && $("h1", active);
    if (h) h.focus({ preventScroll: true });
  }

  function transition(update) {
    if (!document.startViewTransition || reduceMotion) { update(); return; }
    document.startViewTransition(update);
  }

  function navigate(url, opts) {
    opts = opts || {};
    var target = new URL(url, location.href);
    var route = parse(target.pathname);

    // Memorizza la posizione di scorrimento della vista che si lascia
    history.replaceState({ y: window.scrollY }, "", location.href);

    transition(function () {
      if (!opts.replace) history.pushState({ y: 0 }, "", target.pathname + target.search + target.hash);
      render(route);
      window.scrollTo(0, 0);
      focusHeading();
    });
    setOpen(false);
  }

  function bindRouter() {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    document.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a || a.target || a.hasAttribute("download")) return;
      var url = new URL(a.href, location.href);
      if (url.origin !== location.origin || !isAppPath(url.pathname)) return;
      // Link a un'ancora nella stessa pagina (es. "Vai al contenuto")
      if (url.pathname === location.pathname && url.search === location.search && url.hash) return;
      e.preventDefault();
      if (url.pathname + url.search === location.pathname + location.search) {
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        setOpen(false);
        return;
      }
      navigate(url.href);
    });

    window.addEventListener("popstate", function (e) {
      var y = (e.state && e.state.y) || 0;
      transition(function () {
        render(parse(location.pathname));
        window.scrollTo(0, y);
      });
    });
  }

  /* Vecchi indirizzi con ancora (es. /#progetti) → nuove pagine */
  function legacyHash() {
    if (location.pathname !== "/" || !location.hash) return;
    var map = { "#progetti": "/progetti", "#scrittura": "/scrittura", "#percorso": "/chi-sono", "#contatti": "/contatti" };
    var to = map[location.hash];
    var m = location.hash.match(/^#progetto-([a-z0-9-]+)$/i);
    if (!to && m && findProject(cleanId(m[1]))) to = "/progetti/" + cleanId(m[1]);
    if (to) history.replaceState(null, "", to);
  }

  /* =================================================================
     Navbar: menu mobile
     ================================================================= */
  var nav, toggle;

  function setOpen(open) {
    if (!nav) return;
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
      $(".nav__toggle-label", toggle).textContent = open ? "Chiudi" : "Menu";
    }
  }

  function bindNav() {
    nav = $(".nav");
    toggle = $(".nav__toggle");
    if (!nav) return;

    var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle) {
      toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        if (toggle) toggle.focus();
      }
    });
    window.matchMedia("(min-width: 761px)").addEventListener("change", function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  /* =================================================================
     Modulo di contatto (Netlify Forms, invio AJAX)
     Senza JavaScript il modulo funziona comunque e porta a /grazie.
     ================================================================= */
  function bindForm() {
    var form = $('form[name="contatti"]');
    if (!form) return;
    var status = $(".form__status", form);
    var submit = $('button[type="submit"]', form);

    var messages = {
      nome: { valueMissing: "Scrivi il tuo nome." },
      email: {
        valueMissing: "Serve un indirizzo email per risponderti.",
        typeMismatch: "Controlla l’indirizzo email: sembra incompleto.",
      },
      messaggio: { valueMissing: "Il messaggio è vuoto." },
    };

    function validateField(field) {
      var err = document.getElementById("e-" + field.name);
      var v = field.validity;
      var msg = "";
      if (!v.valid) {
        var m = messages[field.name] || {};
        msg = (v.valueMissing && m.valueMissing) || (v.typeMismatch && m.typeMismatch) || field.validationMessage;
      }
      field.setAttribute("aria-invalid", msg ? "true" : "false");
      if (err) err.textContent = msg;
      return !msg;
    }

    var fields = $$("input[required], textarea[required]", form);
    fields.forEach(function (f) {
      f.addEventListener("blur", function () { if (f.value) validateField(f); });
      f.addEventListener("input", function () {
        if (f.getAttribute("aria-invalid") === "true") validateField(f);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;
      fields.forEach(function (f) {
        if (!validateField(f) && !firstInvalid) firstInvalid = f;
      });
      if (firstInvalid) { firstInvalid.focus(); return; }

      submit.disabled = true;
      status.classList.remove("is-error");
      status.textContent = "Invio in corso…";

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          var nome = (form.elements.nome.value || "").trim().split(" ")[0];
          var box = document.createElement("div");
          box.className = "form-success";
          box.setAttribute("tabindex", "-1");
          box.setAttribute("role", "status");
          box.innerHTML =
            "<h2>Grazie" + (nome ? ", " + esc(nome) : "") + ".</h2>" +
            "<p>Ho ricevuto il tuo messaggio e ti rispondo all’indirizzo che hai indicato.</p>";
          form.replaceWith(box);
          box.focus();
        })
        .catch(function () {
          submit.disabled = false;
          status.classList.add("is-error");
          status.innerHTML =
            'Invio non riuscito. Riprova tra poco o scrivimi a <a href="mailto:stefano.pirone18@gmail.com">stefano.pirone18@gmail.com</a>.';
        });
    });
  }

  /* ---------- Avvio ---------- */
  function init() {
    renderFeatured();
    renderNow();
    renderProjects();
    renderWriting();
    renderAbout();
    bindFilters();
    bindNav();
    bindForm();
    legacyHash();
    bindRouter();
    render(parse(location.pathname));
    if (history.state && history.state.y) window.scrollTo(0, history.state.y);
    document.documentElement.classList.add("is-ready");
    var y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
