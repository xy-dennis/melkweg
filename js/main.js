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
    $("#HomeFooterLink").addClass("uk-hidden")
    $(".melkweg-logo-full").attr("src", "img/interface/mk-logo-full.svg")
    $(".melkweg-logo").attr("src", "img/interface/mk-logo.svg")
} else {
    $(".melkweg-logo-full").attr("src", "/img/interface/mk-logo-full.svg")
    $(".melkweg-logo").attr("src", "/img/interface/mk-logo.svg")
    console.log("Not the Home Page");
}

//use window.scrollY
var scrollpos = window.scrollY;
var header = document.getElementById("LogoAnimationWrapper");

function add_class_on_scroll() {
    header.classList.add("mk-animate-logo");
}

function remove_class_on_scroll() {
    header.classList.remove("mk-animate-logo");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 30){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    // console.log(scrollpos);
});

console.log("Main JS Fired");