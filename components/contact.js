class Contact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .coral-bg > .component-bg {
                background-color: var(--coral);
            }
            .black-bg > .component-bg {
                background-color: var(--black);
            }
            .coral-bg > .component-bg > .uk-button {
                color: var(--coral);
            }
            .black-bg > .component-bg > .uk-button {
                color: var(--black);
            }
        </style>
        <div id="preFooterContact" class="component-bg uk-text-center">
            <h4 class="transition-fade">Contact</h4>
            <p class="transition-fade uk-margin-auto uk-text-lead uk-width-xlarge">
                Want to hang out. Let's just have fun and make something cool.
            </p>
            <a href="/contact/" class="uk-button uk-button-primary transition-fade">Contact Melkweg</a>
        </div>
        `;
    }
}

customElements.define('contact-component', Contact);

console.log('Contact Loaded')
