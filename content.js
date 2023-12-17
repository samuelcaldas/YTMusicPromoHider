// This function hides the promo banner element by setting its display style to none
function hidePromoBanner() {
    // Find the promo banner element by its tag name and class name
    let promoBanner = document.querySelector("ytmusic-mealbar-promo-renderer");
    // If the promo banner element exists, hide it
    if (promoBanner) {
      promoBanner.style.display = "none";
    }
  }
  
  // This function runs the hidePromoBanner function every second, in case the promo banner element is dynamically loaded or reloaded
  function runHidePromoBanner() {
    // Set an interval to run the hidePromoBanner function every 1000 milliseconds
    setInterval(hidePromoBanner, 1000);
  }
  
  // Run the hidePromoBanner function once when the content script is loaded
  hidePromoBanner();
  // Run the runHidePromoBanner function when the web page is fully loaded
  window.addEventListener("load", runHidePromoBanner);
  