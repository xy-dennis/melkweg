// Initiate Swup
const swup = new Swup();

// The Below is set the initial view before the Swup page view is triggered via the router.js file
const currentPage = window.location.pathname;
if (currentPage == "/") { // Home Page
    $("#HomeNav").addClass("uk-active") // Active
    $("#AboutNav").removeClass("uk-active")
    $("#ContactNav").removeClass("uk-active")
    $("#footerMailto").addClass("hover-coral") // Coral Home
    $("#footerMailto").removeClass("hover-yellow")
} else {
    console.log("Not the Home Page");
}

console.log("Main JS Fired");