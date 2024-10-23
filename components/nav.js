class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            // component custom styles here
        </style>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>

            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo" href="#" aria-label="Back to Home">Melkweg</a>
            </div>

            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about.html">About</a></li>
                </ul>
            </div>

        </nav>
      `;
    }
  }
  
  customElements.define('header-component', Header);

  console.log('Nav Loaded')
