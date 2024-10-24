const swup = new Swup();

switch (window.location.pathname) {
    case '/':
        $('.home').addClass('uk-active');
        break;
    case '/about.html':
        // code block
        break;
    case '/somestuff':
        $('#main').addClass('some');
        break;
    default: 
        // code block
}

console.log("Main JS Fired");