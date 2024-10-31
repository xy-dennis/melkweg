class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .navbar-left, .navbar-right {
                position: absolute;
                z-index: 850;
                top: 15px;
            }
            .navbar-left {left: 25px}
            .navbar-right {right: 25px}
        </style>

        <nav class="uk-visible@l">

            <div class="navbar-left">
                <a class="uk-navbar-item uk-logo" href="/" aria-label="Back to Home">MW</a>
            </div>

            <div class="navbar-right">
                <ul class="uk-navbar-nav">
                    <li id="HomeNav" class="nav-item home-hide"><a href="/" aria-label="Melkweg Home">Home</a></li>
                    <li id="AboutNav" class="nav-item"><a href="/about/" aria-label="About Melkweg">About</a></li>
                    <li id="ContactNav" class="nav-item"><a href="/about/" aria-label="Contact Melkweg">Contact</a></li>
                </ul>
            </div>

        </nav>
        `;
    }
}
  
customElements.define('header-component', Header);

console.log('Nav Loaded')
