const swup = new Swup();

switch (window.location.pathname) {
    case '':
        $('.home').addClass('uk-active');
        break;
    case 'about.html':
        $('.about').addClass('uk-active');
        break;
    case 'contact.html':
        $('.contact').addClass('uk-active');
        break;
    default: 
        // code block
}

console.log("Main JS Fired");