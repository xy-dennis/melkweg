class Contact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style></style>
        <div id="preFooterContact" class="component-bg uk-text-center">
            <h4 class="transition-fade">Contact</h4>
            <p class="transition-fade uk-margin-auto uk-text-lead uk-width-xlarge">
                Let's just have fun and make something cool. Want to hang out?
            </p>
            <a href="/contact/" class="uk-button uk-button-primary transition-fade">Contact Melkweg</a>
        </div>
        `;
    }
}

customElements.define('contact-component', Contact);

console.log('Contact Loaded')
