// This runs after every page change by swup
swup.hooks.on('page:view', () => {
    const currentPage = window.location.pathname;

    if (currentPage == "/") { // Home Page
        $("#HomeNav").addClass("uk-active") // Active
        $("#AboutNav").removeClass("uk-active")
        $("#ContactNav").removeClass("uk-active")
    }
    else if (currentPage == "/about/") { // About Page
        $("#HomeNav").removeClass("uk-active")
        $("#AboutNav").addClass("uk-active") // Active
        $("#ContactNav").removeClass("uk-active")
    } 
    else if (currentPage == "/contact/") { // Contact Page
        $("#HomeNav").removeClass("uk-active")
        $("#AboutNav").removeClass("uk-active")
        $("#ContactNav").addClass("uk-active") // Active
    }
    else if (currentPage == "/privacy/") { // Privacy Page
        $("#HomeNav").removeClass("uk-active")
        $("#AboutNav").removeClass("uk-active")
        $("#ContactNav").removeClass("uk-active")
    }
    
    console.log("Current Page " + currentPage);

});
  
console.log("Router JS Fired");