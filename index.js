// Call by Value and refernece 

let x = 10;
let y = x;
y = 20;

console.log(x); // 10
console.log(y); 



// Function to load content from a selected page
function loadPage(page) {
  fetch(`${page}.html`) // Try to load the HTML page corresponding to the route
    .then(res => {
      if (!res.ok) throw new Error('Page not found'); // Handle error if page is not found
      return res.text();
    })
    .then(html => {
      document.getElementById('content').innerHTML = html; // Inject the content into the main section
    })
    .catch(err => {
      // Show error message if page loading fails
      document.getElementById('content').innerHTML = `
        <div class="alert alert-danger mt-4">
          <h4>Error</h4>
          <p>${err.message}</p>
        </div>`;
    });
}

// Set up routing based on the URL hash
function router() {
  const hash = location.hash.replace('#', '') || ''; // Get the part after the '#'
  const pageToLoad = hash || 'home'; // Default to 'home' page if hash is empty
  loadPage(pageToLoad); 

}

// Event listener for hash changes (when user clicks links)
window.addEventListener('hashchange', router);

// Initial page load event
window.addEventListener('load', router);

// Add event listeners to dropdown or navbar items
document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', (event) => {
    // Prevent the default anchor click behavior
    event.preventDefault();

    // Get the target page from the href
    const page = event.target.getAttribute('href').replace('#', '');

    // Update the URL hash without reloading the page
    location.hash = page;

    // Load the corresponding page content
    loadPage(page);
  });
});
const updateThemeIcon = () => {
  const isDark = document.body.classList.toggle('dark-theme');
  document.getElementById('iconSun').style.display = isDark ? 'none' : 'block';
  document.getElementById('iconMoon').style.display = isDark ? 'block' : 'none';
  document.querySelector('#themeText').textContent = isDark ? 'Night' : 'Day';
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const isDark = document.body.classList.contains('dark-theme');
  document.getElementById('iconSun').style.display = isDark ? 'none' : 'block';
  document.getElementById('iconMoon').style.display = isDark ? 'block' : 'none';
});
