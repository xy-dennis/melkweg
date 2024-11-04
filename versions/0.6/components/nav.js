class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
            <div id="MelkwegMainNav" class="melkweg-nav" uk-sticky="media: 640">
                <div class="navbar-left">
                    <a class="uk-navbar-item uk-logo uk-visible@s" href="/" aria-label="Back to Home">
                        <div id="LogoAnimationWrapper" class="logo-animation-wrapper">
                            <div class="logo-wrapper">
                                <img id="MelkwegLogoFull" 
                                     class="melkweg-logo-full"
                                     height: 36px;
                                     width: 242px;
                                     src="img/interface/mk-logo-full.svg" 
                                     alt="Melweg Photograpy Logo Full"
                                     uk-svg/>
                            </div>
                        </div>
                    </a>
                    <a class="uk-navbar-item uk-logo uk-hidden@s" href="/" aria-label="Back to Home">
                        <img id="MelkwegLogo" class="melkweg-logo" src="img/interface/mk-logo.svg" alt="Melweg Photograpy" uk-svg/>
                    </a>
                </div>
                <div class="navbar-right">
                    <ul class="uk-navbar-nav uk-visible@s">
                        <li id="HomeNav" class="nav-item mk-home-nav home-hide"><a href="/" aria-label="Melkweg Home">Home</a></li>
                        <li id="AboutNav" class="nav-item mk-about-nav"><a href="/about/" aria-label="About Melkweg">About</a></li>
                        <li id="ContactNav" class="nav-item mk-contact-nav"><a href="/about/" aria-label="Contact Melkweg">Contact</a></li>
                    </ul>
                    <a class="uk-navbar-item uk-logo uk-hidden@s" href="#mkBurgerNav" uk-toggle="target: #mkBurgerNav">
                        <span uk-icon="icon: menu; ratio: 2"></span>
                    </a>
                </div>
            </div>
        </nav>

        

        <div id="mkBurgerNav" class="transition-slide-left" uk-offcanvas="overlay: true; bg-close: true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                     <button class="uk-offcanvas-close" type="button" uk-close></button>
                    <li class="mk-home-nav">
                        <a href="/">
                            <span class="uk-margin-small-right" uk-icon="icon: table"></span>
                            Home
                        </a>
                    </li>
                    <li class="mk-about-nav">
                        <a href="/about/">
                            <span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> 
                            About
                        </a>
                    </li>
                    <li class="uk-nav-divider"></li>
                    <li class="mk-contact-nav">
                        <a href="/">
                            <span class="uk-margin-small-right" uk-icon="icon: trash"></span> 
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    }
}
  
customElements.define('header-component', Header);

console.log('Nav Loaded')
