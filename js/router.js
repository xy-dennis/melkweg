// This runs after every page change by swup
swup.hooks.on('page:view', () => {
    const currentPage = window.location.pathname;

    if (currentPage == "/") { // Home Page
        $("#HomeNav").addClass("uk-active") // Active
        $("#AboutNav").removeClass("uk-active")
        $("#ContactNav").removeClass("uk-active")
        $("#footerMailto").addClass("hover-coral")
        $("#footerMailto").removeClass("hover-yellow")
    }
    else if (currentPage == "/about/") { // About Page
        $("#HomeNav").removeClass("uk-active")
        $("#AboutNav").addClass("uk-active") // Active
        $("#ContactNav").removeClass("uk-active")
        $("#footerMailto").removeClass("hover-coral")
        $("#footerMailto").addClass("hover-yellow")
        $("#AboutFooterLink").addClass("uk-hidden")
    } 
    else if (currentPage == "/contact/") { // Contact Page
        $("#HomeNav").removeClass("uk-active")
        $("#AboutNav").removeClass("uk-active")
        $("#ContactNav").addClass("uk-active") // Active
        $("#footerMailto").removeClass("hover-coral")
        $("#footerMailto").addClass("hover-yellow")
        $("#ContactFooterLink").addClass("uk-hidden")
    }
    else if (currentPage == "/privacy/") { // Privacy Page
        $("#HomeNav").removeClass("uk-active")
        $("#AboutNav").removeClass("uk-active")
        $("#ContactNav").removeClass("uk-active")
        $("#footerMailto").removeClass("hover-coral")
        $("#footerMailto").addClass("hover-yellow")
        $("#PrivacyFooterLink").addClass("uk-hidden")
    }
    
    console.log("Current Page " + currentPage);
});

console.log("Router JS Fired");