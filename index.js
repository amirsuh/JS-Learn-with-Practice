// Updated JS
// Improved routing and page loading system

// Cache for loaded pages to avoid reloading
const pageCache = new Map();
let currentPageScript = null;

// Detect repo base for GitHub Pages
// Example: /JS-Learn-with-Practice/
const repoBase = (() => {
  const pathParts = location.pathname.split("/");
  // If hosted on GitHub Pages, repo name is the second segment
  return pathParts.length > 1 ? `/${pathParts[1]}/` : "/";
})();

// Function to load content from a selected page
async function loadPage(page) {
  try {
    // Check cache first
    if (pageCache.has(page)) {
      document.getElementById("content").innerHTML = pageCache.get(page);
      loadPageScript(page);
      return;
    }

    const response = await fetch(`${repoBase}${page}.html`);

    if (!response.ok) {
      throw new Error("Page not found");
    }

    const html = await response.text();

    // Cache the page
    pageCache.set(page, html);

    // Inject content
    document.getElementById("content").innerHTML = html;

    // Load associated script
    loadPageScript(page);
  } catch (err) {
    document.getElementById("content").innerHTML = `
      <div class="container mt-4">
        <div class="alert alert-danger">
          <h4>Error</h4>
          <p>${err.message}</p>
          <a href="#home" class="btn btn-primary mt-2">Go Home</a>
        </div>
      </div>`;
  }
}

// Function to load page-specific JavaScript
function loadPageScript(page) {
  // Remove old script if exists
  if (currentPageScript) {
    currentPageScript.remove();
    currentPageScript = null;
  }

  // Create and append new script
  const script = document.createElement("script");
  script.src = `${repoBase}${page}.js`;
  script.id = "page-script";
  script.defer = true;

  // Handle script load errors gracefully
  script.onerror = () => {
    console.log(`No script file found for ${page}.js - this is okay`);
  };

  document.body.appendChild(script);
  currentPageScript = script;
}

// Router function
function router() {
  const hash = location.hash.replace("#", "") || "home";
  loadPage(hash);

  // Update active menu item
  updateActiveMenuItem(hash);
}

// Update active menu item styling
function updateActiveMenuItem(page) {
  document.querySelectorAll(".nav-link, .dropdown-item").forEach((item) => {
    const href = item.getAttribute("href");
    if (href === `#${page}`) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Theme toggle functionality
const updateThemeIcon = () => {
  const isDark = document.body.classList.toggle("dark-theme");

  const iconSun = document.getElementById("iconSun");
  const iconMoon = document.getElementById("iconMoon");
  const themeText = document.getElementById("themeText");

  if (iconSun && iconMoon && themeText) {
    iconSun.style.display = isDark ? "none" : "block";
    iconMoon.style.display = isDark ? "block" : "none";
    themeText.textContent = isDark ? "Day" : "Night";
  }

  // Save theme preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// Initialize theme from localStorage
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    const iconSun = document.getElementById("iconSun");
    const iconMoon = document.getElementById("iconMoon");
    const themeText = document.getElementById("themeText");

    if (iconSun && iconMoon && themeText) {
      iconSun.style.display = "none";
      iconMoon.style.display = "block";
      themeText.textContent = "Day";
    }
  }
}

// Smooth scroll for anchor links
function smoothScrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Add event listeners for navigation
function setupNavigation() {
  document.querySelectorAll(".nav-link, .dropdown-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      const href = event.currentTarget.getAttribute("href");

      // Only handle hash navigation
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const page = href.replace("#", "");
        location.hash = page;
      }
    });
  });
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();
  setupNavigation();
  router();

  // Setup theme toggle button
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", updateThemeIcon);
  }
});

// Handle hash changes
window.addEventListener("hashchange", router);

// Handle page load
window.addEventListener("load", router);

// Cleanup function for better memory management
window.addEventListener("beforeunload", () => {
  pageCache.clear();
});