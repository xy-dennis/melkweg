// Initiate Swup
const swup = new Swup({
    plugins: [new SwupA11yPlugin()]
});

// The Below is set the initial view before the Swup page view is triggered via the router.js file
const currentPage = window.location.pathname;
if (currentPage == "/") { // Home Page
    $("#HomeNav").addClass("uk-active") // Active
    $("#AboutNav").removeClass("uk-active")
    $("#ContactNav").removeClass("uk-active")
    $("#footerMailto").addClass("hover-coral") // Coral Home
    $("#footerMailto").removeClass("hover-yellow")
    $("#HomeFooterLink").addClass("uk-hidden")
    $(".melkweg-logo-full").attr("src", "img/interface/mk-logo-full.svg")
    $(".melkweg-logo").attr("src", "img/interface/mk-logo.svg")
} else {
    $(".melkweg-logo-full").attr("src", "/img/interface/mk-logo-full.svg")
    $(".melkweg-logo").attr("src", "/img/interface/mk-logo.svg")
    console.log("Not the Home Page");
}

console.log("Main JS Fired");