const projects = [

  // ── 1 ─────────────────────────────────────────────────────────
  {
    title: "Panetry",
    type: "Solo",
    startDate: "May - 2026",      
    endDate:   "Present",
    description:
      "Designed and built Panetry, a full-stack SaaS dashboard that centralizes and automates operations for small and cottage bakeries. " +
      "The platform includes five core modules: **Products** (catalog management), **Inventory** (stock tracking), " +
      "**Orders** (order lifecycle management), **Analytics** (sales and performance insights), and a **Profile** page. " +
      "Integrated directly with a customer-facing storefront where buyers can browse the bakery, place orders, and complete payments — " +
      "all connected to the same Supabase backend for real-time data sync.",
    skills: [
      "Next.js / React",
      "Supabase (Database & Auth)",
      "Full-Stack Web Development",
      "Dashboard & Analytics UI",
      "E-Commerce Integration",
    ],
    media: { label: "View App", url: "https://panetry.netlify.app/" },
  },

  // ── 2 ─────────────────────────────────────────────────────────
  {
    title: "Handcrafted Haven",
    type: "Group",
    startDate: "Jan 2026",      
    endDate:   "Apr 2026",      
    description:
      "Built a full-stack e-commerce marketplace for handcrafted goods as part of a collaborative team (Team 17). " +
      "**My contribution** spanned product catalog architecture, integrating the user authentication flow, and leading " +
      "code-review sessions to maintain consistent Next.js conventions across the team. " +
      "The site features a browsable store, shopping cart, and user dashboard — all mobile-responsive.",
    skills: [
      "Next.js / React",
      "E-Commerce Development",
      "User Authentication",
      "Responsive UI Design",
      "Agile Team Collaboration",
    ],
    media: { label: "View Site", url: "https://handcrafted-haven-theta-red.vercel.app/" },
  },

  // ── 2 ─────────────────────────────────────────────────────────
  {
    title: "Healthy Meals API",
    type: "Solo",
    startDate: "Sep 2025",
    endDate:   "Dec 2025",
    description:
      "Designed and deployed a RESTful API that serves healthy meal data, secured with GitHub OAuth 2.0. " +
      "Built authentication middleware to protect profile endpoints, structured route handlers with Express.js, " +
      "and deployed to Render with environment-variable management for secure credential storage.",
    skills: [
      "Node.js / Express.js",
      "REST API Design",
      "OAuth 2.0 Authentication",
      "API Security & Middleware",
      "Cloud Deployment (Render)",
    ],
    media: { label: "View API", url: "https://healthy-meals-api.onrender.com" },
  },

  // ── 3 ─────────────────────────────────────────────────────────
  {
    title: "Service Sales",
    type: "Solo",
    startDate: "Jan 2025",
    endDate:   "Apr 2025",
    description:
      "Designed and developed a service quotation web platform for home improvement and landscaping services — " +
      "including masonry walls, pavers & turf, concrete, stucco, and repairs. " +
      "Built an interactive carousel to showcase each service offering with descriptions and imagery, " +
      "integrated the browser Geolocation API so customers can auto-fill their coordinates when requesting a free estimate, " +
      "and structured the site as a clean, mobile-responsive single-page experience.",
    skills: [
      "HTML / CSS",
      "JavaScript (Vanilla)",
      "Geolocation API Integration",
      "Responsive Web Design",
      "UI / UX Design",
    ],
    media: { label: "View Site", url: "https://service-sales.netlify.app/" },
  },

  // ── 4 ─────────────────────────────────────────────────────────
  {
    title: "Bakery API",
    type: "Solo",
    startDate: "Jan 2025",
    endDate:   "Apr 2025",
    description:
      "Developed a RESTful API for a bakery management system, exposing endpoints for products, categories, and users. " +
      "Implemented full CRUD operations with proper HTTP status codes, request validation, and a clean route structure " +
      "using Express.js. Deployed to Render with environment-based configuration.",
    skills: [
      "Node.js / Express.js",
      "REST API Design",
      "CRUD Operations",
      "Database Management",
      "Cloud Deployment (Render)",
    ],
    media: { label: "View API", url: "https://bakery-api-za4w.onrender.com" },
  },

  // ── 5 ─────────────────────────────────────────────────────────
  {
    title: "Sleep Outside",
    type: "Group",
    startDate: "Sep 2024",
    endDate:   "Dec 2024",
    description:
      "Collaborated with Group 13 to build an outdoor gear e-commerce website using vanilla HTML, CSS, and JavaScript. " +
      "**My contribution** included building the product listing templates, writing the JavaScript logic for dynamic " +
      "cart interactions, and ensuring consistent responsive layout across mobile and desktop breakpoints.",
    skills: [
      "HTML / CSS",
      "JavaScript (Vanilla)",
      "Responsive Web Design",
      "E-Commerce UI Development",
      "Team Collaboration",
    ],
    media: { label: "View Site", url: "https://sleepoutsidegroup13.netlify.app/" },
  },

  // ── 6 ─────────────────────────────────────────────────────────
  {
    title: "CSE Motors — CSE 340",
    type: "Solo",
    startDate: "Jan 2025",
    endDate:   "Apr 2025",
    description:
      "Built a full-stack automotive e-commerce web application from scratch as part of CSE 340. " +
      "The site features a browsable vehicle inventory organized by category (Electric, Sport, SUV, Truck, etc.), " +
      "a session-based user authentication system, and a contact/messaging module. " +
      "Applied MVC architecture throughout, separating models, views, and controllers for maintainability.",
    skills: [
      "Node.js / Express.js",
      "PostgreSQL",
      "MVC Architecture",
      "Session-Based Authentication",
      "Full-Stack Web Development",
    ],
    media: { label: "View Site", url: "https://cse340-kp.onrender.com" },
  },

  // ── 7 ─────────────────────────────────────────────────────────
  {
    title: "Contacts API — CSE 341",
    type: "Solo",
    startDate: "Sep 2025",
    endDate:   "Dec 2025",
    description:
      "Designed and deployed a Node.js/Express REST API backed by MongoDB for managing contact records. " +
      "The API supports full CRUD operations on contact documents — including fields for name, email, " +
      "birthday, and preferences — exposed via clean RESTful endpoints. " +
      "Implemented as part of CSE 341 to develop professional-grade backend and database integration skills.",
    skills: [
      "Node.js / Express.js",
      "MongoDB / NoSQL",
      "REST API Design",
      "CRUD Operations",
      "Backend Development",
    ],
    media: { label: "View API", url: "https://cse341-5r7d.onrender.com" },
  },

];

// ── RENDER ────────────────────────────────────────────────────

function parseBold(text) {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p) => `
    <article class="card">
      <div class="card-header">
        <h3 class="card-title">${p.title}</h3>
        <span class="card-type ${p.type === "Group" ? "type-group" : "type-solo"}">${p.type}</span>
      </div>

      <div class="card-dates">${p.startDate} — ${p.endDate}</div>

      <p class="card-description">${parseBold(p.description)}</p>

      <div class="card-skills-section">
        <p class="card-skills-label">Top 5 Skills</p>
        <div class="card-skills">
          ${p.skills.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
        </div>
      </div>

      <div class="card-media">
        <a href="${p.media.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          ${p.media.label} ↗
        </a>
      </div>
    </article>
  `
    )
    .join("");
}

// ── NAV SCROLL EFFECT ─────────────────────────────────────────

function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });
}

// ── FOOTER YEAR ───────────────────────────────────────────────

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ── INIT ──────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNav();
  setYear();
});
