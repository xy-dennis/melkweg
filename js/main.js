switch (window.location.pathname) {
    case '/':
        $('#main').addClass('tech');
        break;
    case '/about':
        // code block
        break;
    case '/somestuff':
        $('#main').addClass('some');
        break;
    default: 
        // code block
}

console.log("Main JS Fired");