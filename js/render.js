/**
 * Renders every section of the page from PORTFOLIO_CONTENT (content/content.js).
 * Loaded after content.js — see index.html.
 */

// Strips a trailing "(ABBREVIATION)" from a school/company name for display.
function stripAbbreviation(str) {
  return str.replace(/\s*\([^)]*\)\s*$/, "");
}

function buildContactRows(content, { includeLocation }) {
  const c = content.contact;
  const rows = [];

  if (c.email) rows.push(`<p>📧 <a href="mailto:${c.email}">${c.email}</a></p>`);
  if (c.phone) rows.push(`<p>📱 <a href="tel:${c.phone}">${c.phone}</a></p>`);
  if (includeLocation && content.location) rows.push(`<p>📍 ${content.location}</p>`);

  const socials = [];
  if (c.linkedin) socials.push(`<a href="${c.linkedin}" target="_blank" rel="noopener">🔗 LinkedIn</a>`);
  if (c.facebook) socials.push(`<a href="${c.facebook}" target="_blank" rel="noopener">📘 Facebook</a>`);
  if (c.portfolio) socials.push(`<a href="${c.portfolio}" target="_blank" rel="noopener">🌐 Portfolio</a>`);

  const socialsHtml = socials.length ? `<div class="socials">${socials.join("")}</div>` : "";
  return rows.join("") + socialsHtml;
}

function renderAbout(content) {
  document.getElementById("logo-name").textContent = content.name;
  document.getElementById("hero-name").textContent = content.name;
  document.getElementById("hero-headline").textContent = content.headline;
  document.getElementById("hero-tagline").textContent = content.tagline;
  document.getElementById("about-summary").textContent = content.summary;
  document.getElementById("about-contact").innerHTML = buildContactRows(content, { includeLocation: false });
  document.title = `${content.name} | ${content.headline}`;
}

function renderCompetencies(content) {
  const bars = document.getElementById("competencies-grid");
  const competencyBars = content.competencies
    .map(
      (c, i) => `
        <div class="competency-bar">
          <span class="competency-index">${String(i + 1).padStart(2, "0")}</span>
          <div class="competency-text">
            <h4>${c.title}</h4>
            <p>${c.description}</p>
          </div>
        </div>`
    )
    .join("");

  const toolsBar = `
    <div class="competency-bar">
      <span class="competency-index">${String(content.competencies.length + 1).padStart(2, "0")}</span>
      <div class="competency-text">
        <h4>Tools &amp; Platforms</h4>
        <p>${content.tools.join(", ")}</p>
      </div>
    </div>`;

  bars.innerHTML = competencyBars + toolsBar;
}

// Each version panel reserves a placeholder for an image. Once real images are
// available, replace the placeholder div with e.g. `<img src="..." alt="...">`.
function versionImageSlot() {
  return `
    <div class="v-image">
      <span>🖼️</span>
      <span>Add image</span>
    </div>`;
}

function renderProjects(content) {
  const list = document.getElementById("projects-list");
  list.innerHTML = content.projects
    .map(
      (p) => `
        <div class="card highlight-card">
          <div class="highlight-header">
            <h3>${p.name}</h3>
            <p class="case-meta">${p.role} &middot; ${p.timeframe}</p>
            <div class="tags">
              ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>

          <div class="v-tabs">
            <button type="button" class="v-tab v-tab--before" aria-label="Show Before">Before</button>
            <span class="v-tab-arrow" aria-hidden="true">&rarr;</span>
            <button type="button" class="v-tab v-tab--built" aria-label="Show What I Built">What I Built</button>
            <span class="v-tab-arrow" aria-hidden="true">&rarr;</span>
            <button type="button" class="v-tab v-tab--next" aria-label="Show What's Next with AI">What's Next</button>
          </div>

          <div class="v-slider">
            <div class="v-track">
              <div class="v-spacer" aria-hidden="true"></div>
              <div class="v-panel v-panel--before">
                ${versionImageSlot()}
                <span class="case-label case-label-before">Before</span>
                <p>${p.oldVersion}</p>
              </div>
              <div class="v-panel v-panel--built">
                ${versionImageSlot()}
                <span class="case-label case-label-built">What I Built</span>
                <p>${p.improvedVersion}</p>
              </div>
              <div class="v-panel v-panel--next">
                ${versionImageSlot()}
                <span class="case-label case-label-next">What's Next with AI</span>
                <p>${p.aiPoweredVersion}</p>
              </div>
              <div class="v-spacer" aria-hidden="true"></div>
            </div>
          </div>

          <div class="v-controls">
            <button type="button" class="v-arrow v-arrow--prev" aria-label="Show previous version">&lsaquo;</button>
            <div class="v-dots">
              <span class="v-dot" aria-hidden="true"></span>
              <span class="v-dot" aria-hidden="true"></span>
              <span class="v-dot" aria-hidden="true"></span>
            </div>
            <button type="button" class="v-arrow v-arrow--next" aria-label="Show next version">&rsaquo;</button>
          </div>
        </div>`
    )
    .join("");

  initHighlightSliders();
}

// The peek space on either side is built from real flex items (v-spacer),
// not container padding: browsers commonly fail to include a scroll
// container's *trailing* padding in its scrollable area (only the leading
// padding works reliably), which made the last panel unable to scroll far
// enough to ever sit centered. Real elements aren't subject to that quirk.
function sizePanels(slider, panels, spacers) {
  const panelWidth = Math.round(slider.clientWidth * 0.88);
  const spacerWidth = Math.round((slider.clientWidth - panelWidth) / 2);
  panels.forEach((panel) => {
    panel.style.flexBasis = `${panelWidth}px`;
  });
  spacers.forEach((spacer) => {
    spacer.style.flexBasis = `${spacerWidth}px`;
  });
}

// Drag-to-scroll (mouse) + scroll-snap carousel for the Before / Built / Next panels.
function initHighlightSliders() {
  document.querySelectorAll(".v-slider").forEach((slider) => {
    const track = slider.querySelector(".v-track");
    const panels = Array.from(track.querySelectorAll(".v-panel"));
    const spacers = Array.from(track.querySelectorAll(".v-spacer"));
    const card = slider.closest(".highlight-card");
    const dots = Array.from(card.querySelectorAll(".v-dot"));
    const tabs = Array.from(card.querySelectorAll(".v-tab"));
    const prevBtn = card.querySelector(".v-arrow--prev");
    const nextBtn = card.querySelector(".v-arrow--next");

    sizePanels(slider, panels, spacers);

    const getActiveIndex = () => {
      // Viewport-relative rects stay valid regardless of scroll position or
      // which ancestor ends up as the offsetParent — offsetLeft/scrollLeft
      // don't share a coordinate space and mixing them picks the wrong panel.
      const sliderRect = slider.getBoundingClientRect();
      const sliderCenter = sliderRect.left + sliderRect.width / 2;
      let closest = 0;
      let minDist = Infinity;
      panels.forEach((panel, i) => {
        const panelRect = panel.getBoundingClientRect();
        const panelCenter = panelRect.left + panelRect.width / 2;
        const dist = Math.abs(panelCenter - sliderCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      return closest;
    };

    const scrollToIndex = (index) => {
      const clamped = Math.max(0, Math.min(panels.length - 1, index));
      panels[clamped].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };

    const updateActiveState = () => {
      const active = getActiveIndex();
      panels.forEach((panel, i) => panel.classList.toggle("is-active", i === active));
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === active));
      tabs.forEach((tab, i) => tab.classList.toggle("is-active", i === active));
    };

    let scrollTimeout;
    slider.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveState, 60);
    });

    tabs.forEach((tab, i) => tab.addEventListener("click", () => scrollToIndex(i)));
    if (prevBtn) prevBtn.addEventListener("click", () => scrollToIndex(getActiveIndex() - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => scrollToIndex(getActiveIndex() + 1));

    // Mouse drag-to-scroll; touch/pen keep native swipe scrolling.
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    slider.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = slider.scrollLeft;
      slider.classList.add("is-dragging");
      slider.setPointerCapture(e.pointerId);
    });

    slider.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      slider.scrollLeft = startScrollLeft - (e.clientX - startX);
    });

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      slider.classList.remove("is-dragging");
      updateActiveState();
    };

    slider.addEventListener("pointerup", endDrag);
    slider.addEventListener("pointercancel", endDrag);
    slider.addEventListener("pointerleave", endDrag);

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const active = getActiveIndex();
        sizePanels(slider, panels, spacers);
        panels[active].scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
        updateActiveState();
      }, 150);
    });

    updateActiveState();
  });
}

function renderExperience(content) {
  const list = document.getElementById("experience-list");
  list.innerHTML = content.experience
    .map(
      (e) => `
        <div class="timeline-item">
          <span class="timeline-year">${e.dates}</span>
          <h3>${e.title}</h3>
          <p class="exp-company">${e.company} &mdash; ${e.location}</p>
          <ul class="exp-bullets">
            ${e.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </div>`
    )
    .join("");
}

function renderEducation(content) {
  const eduList = document.getElementById("education-list");
  eduList.innerHTML = content.education
    .map(
      (ed) => `
        <div class="timeline-item">
          <h3>${ed.degree}</h3>
          <p class="exp-company">${stripAbbreviation(ed.school)}</p>
          <p class="edu-note">${ed.note}</p>
        </div>`
    )
    .join("");

  const certGroups = document.getElementById("certifications-list");
  certGroups.innerHTML = Object.entries(content.certifications)
    .map(
      ([category, items]) => `
        <div class="cert-group">
          <h3 class="cert-group-title">${category}</h3>
          <ul class="cert-list">
            ${items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>`
    )
    .join("");
}

function renderAwards(content) {
  const list = document.getElementById("awards-list");
  list.innerHTML = content.awards.map((a) => `<li class="award-item">${a}</li>`).join("");
}

function renderFooter(content) {
  const year = new Date().getFullYear();
  document.getElementById("footer-text").textContent = `© ${year} ${content.name}. All rights reserved.`;
}

function renderPortfolio(content) {
  renderAbout(content);
  renderCompetencies(content);
  renderProjects(content);
  renderExperience(content);
  renderEducation(content);
  renderAwards(content);
  renderFooter(content);
}

document.addEventListener("DOMContentLoaded", () => renderPortfolio(PORTFOLIO_CONTENT));
