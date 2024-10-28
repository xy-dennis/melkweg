// switch (window.location.pathname) {
//     case '/':
//         $('.nav-item').addClass('uk-active-home');
//         break;
//     case '/about.html':
//         $('.nav-item').addClass('uk-active-about');
//         break;
//     case '/contact.html':
//         $('.nav-item').addClass('uk-active-contact');
//         break;
//     default: 
//         // code block
// }

console.log("START ROUTING SCRIPT");



swup.hooks.on('page:view', () => {
    // This runs after every page change by swup
    const currentPage = window.location.pathname;

    if (currentPage == "/") { // Home Page Setup
        $("#HomeNav").addClass("uk-active")
        $("#AboutNav").removeClass("uk-active")
        $("#ContactNav").removeClass("uk-active")
    } 
    else if (currentPage == "/about.html") { // NAV Page Setup
        $("#AboutNav").addClass("uk-active")
        $("#HomeNav").removeClass("uk-active")
        $("#ContactNav").removeClass("uk-active")
    }

    else if (currentPage == "/contact.html") { // NAV Page Setup
        $("#ContactNav").addClass("uk-active")
        $("#HomeNav").removeClass("uk-active")
        $("#AboutNav").removeClass("uk-active")
    }
    
    console.log("Did this update? " + currentPage);

});
  



console.log("END ROUTING SCRIPT");