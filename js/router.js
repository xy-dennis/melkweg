// This runs after every page change by swup
swup.hooks.on('page:view', () => {
    const currentPage = window.location.pathname;

    // $("#mkBurgerNav").removeClass("uk-open")
    // $("html").attr("style", "overflow: scroll")

    UIkit.offcanvas("#mkBurgerNav").hide();

    if (currentPage == "/") { // Home Page

        $(".mk-home-nav").addClass("uk-active") // Active
        $(".mk-about-nav").removeClass("uk-active")
        $(".mk-contact-nav").removeClass("uk-active")

        $("#footerMailto").addClass("hover-coral")
        $("#footerMailto").removeClass("hover-yellow")

        $(".melkweg-logo-full").attr("src", "img/interface/mk-logo-full.svg")
        $(".melkweg-logo").attr("src", "img/interface/mk-logo.svg")

        // $("#mkBurgerNav").removeClass("uk-active")
    }
    else if (currentPage == "/about/") { // About Page

        $(".mk-home-nav").removeClass("uk-active")
        $(".mk-about-nav").addClass("uk-active") // Active
        $(".mk-contact-nav").removeClass("uk-active")

        $("#footerMailto").removeClass("hover-coral")
        $("#footerMailto").addClass("hover-yellow")

        $(".melkweg-logo-full").attr("src", "/img/interface/mk-logo-full.svg")
        $(".melkweg-logo").attr("src", "/img/interface/mk-logo.svg")

    } 
    else if (currentPage == "/contact/") { // Contact Page

        $(".mk-home-nav").removeClass("uk-active")
        $(".mk-about-nav").removeClass("uk-active")
        $(".mk-contact-nav").addClass("uk-active") // Active

        $("#footerMailto").addClass("hover-yellow")
        $("#footerMailto").removeClass("hover-coral")

        $(".melkweg-logo-full").attr("src", "/img/interface/mk-logo-full.svg")
        $(".melkweg-logo").attr("src", "/img/interface/mk-logo.svg")

    }
    else if (currentPage == "/privacy/") { // Privacy Page
        
        $(".mk-home-nav").removeClass("uk-active")
        $(".mk-about-nav").removeClass("uk-active")
        $(".mk-contact-nav").removeClass("uk-active")

        $("#footerMailto").removeClass("hover-coral")
        $("#footerMailto").addClass("hover-yellow")

        $(".melkweg-logo-full").attr("src", "/img/interface/mk-logo-full.svg")
        $(".melkweg-logo").attr("src", "/img/interface/mk-logo.svg")
    } 
    else {
        $(".melkweg-logo-full").attr("src", "/img/interface/mk-logo-full.svg")
        $(".melkweg-logo").attr("src", "/img/interface/mk-logo.svg")
    }
    
    console.log("Current Page " + currentPage);
});

console.log("Router JS Fired");