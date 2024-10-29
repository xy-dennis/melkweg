class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .coral-bg > .uk-section {
                background-color: var(--coral);
            }
            .black-bg > .uk-section {
                background-color: var(--black);
            }
            .yellow-bg > .uk-section {
                background-color: var(--yellow);
            }
            .blue-bg > .uk-section {
                background-color: var(--blue);
            }
        </style>
        <div class="uk-section uk-padding-small">
            <div class="uk-container uk-container-expand uk-margin-large-top">
                <div class="uk-margin-large uk-padding" uk-grid>
                    <div class="uk-width-1-1 uk-text-center transition-fade">
                        <h3>get in touch</h3>
                    </div>
                    <div class="uk-width-1-1 uk-text-center transition-fade">
                        <a href="mailto:info@melkie.co.za" class="uk-link-reset">
                            <h3 id="footerMailto" class="stroke-title hover-color">info@melkie.co.za</h3>
                        </a>
                    </div>
                </div>
                <div class="uk-text-small" uk-grid>
                    <div class="uk-width-1-2@m uk-margin-small transition-fade">
                        <a href="https://www.instagram.com/_melkweg_/" target="_blank">Instagram</a> | <a href="https://www.facebook.com/profile.php?id=100083020404622" target="_blank">Facebook</a>
                    </div>
                    <div class="uk-width-1-2@m uk-text-right uk-margin-small transition-fade">
                        Copyright Melkweg &copy; Photography 2025 | <a href="/privacy/">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
  
customElements.define('footer-component', Footer);

console.log('Footer Loaded')
