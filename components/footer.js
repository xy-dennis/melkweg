class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .coral-bg > footer > .uk-section {
                background-color: var(--coral);
            }
            .black-bg > footer > .uk-section {
                background-color: var(--black);
            }
            .yellow-bg > footer > .uk-section {
                background-color: var(--yellow);
            }
            .blue-bg > footer > .uk-section {
                background-color: var(--blue);
            }
        </style>
        <footer>
            <section class="uk-section border-top uk-padding-small transition-border">
                <div class="uk-container uk-container-expand uk-margin-large-bottom uk-margin-large-top">
                    <div class="uk-margin-large uk-padding" uk-grid>
                        <div class="uk-width-1-1 uk-text-center uk-margin-remove transition-fade">
                            <h3>Get in touch</h3>
                        </div>
                        <div class="uk-width-1-1 uk-text-center uk-margin-remove transition-fade">
                            <a href="mailto:info@melkie.co.za" class="uk-link-reset uk-visible@l" target="_blank">
                                <h3 id="footerMailto" class="stroke-title hover-color">info@melkie.co.za</h3>
                            </a>
                            <a href="mailto:info@melkie.co.za" class="uk-link-reset uk-hidden@l" target="_blank">
                                <span uk-icon="icon: mail; ratio: 6" class="footer-mail-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="uk-section border-top uk-padding-small transition-border">
                <div class="uk-container uk-container-expand">
                    <div class="uk-text-small" uk-grid>

                        <div class="uk-width-1-3@m uk-flex-first@m uk-text-center uk-text-left@m uk-margin-small-top uk-margin-small-bottom transition-fade">
                            <span id="HomeFooterLink" class="home-hide"><a href="/">Home</a> | </span>
                            <span id="AboutFooterLink"><a href="/about/">About</a> | </span>
                            <a href="https://www.instagram.com/_melkweg_/" target="_blank">Instagram</a> | 
                            <a href="https://www.facebook.com/profile.php?id=100083020404622" target="_blank">Facebook</a> 
                        </div>

                        <div class="to-top-container uk-width-expand uk-flex-first uk-text-center transition-fade">
                            <a href="#" class="mk-to-top-btn" uk-scroll>
                                <span uk-icon="icon: arrow-up; ratio: 2"></span>
                            </a>
                        </div>

                        <div class="uk-width-1-3@m uk-text-center uk-text-right@m uk-margin-small-top uk-margin-small-bottom transition-fade">
                            Copyright Melkweg &copy; Photography 2025 | <a href="/privacy/">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </section>
            
        </footer>
        `;
    }
}
  
customElements.define('footer-component', Footer);

console.log('Footer Loaded')
