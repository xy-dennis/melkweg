class Contact extends HTMLElement {
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
            .coral-bg > .uk-section > .uk-container > div > div > .uk-button {
                color: var(--coral);
            }
            .black-bg > .uk-section > .uk-container > div > div > .uk-button {
                color: var(--black);
            }
        </style>
        <section class="uk-section">
            <div class="uk-container">
                <div class="uk-height-match uk-flex-middle uk-text-center" uk-grid>
                    <div class="uk-width-1-1">
                        <h4 class="transition-fade">Contact</h4>
                        <p class="transition-fade uk-margin-auto uk-text-lead uk-width-xlarge">
                            Want to work with me? Click the button below and fill in the form and we can take it from there.
                        </p>
                        <a href="/contact/" class="uk-button uk-button-primary transition-fade">Contact Melkie</a>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('contact-component', Contact);

console.log('Contact Loaded')
