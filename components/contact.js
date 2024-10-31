class Contact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="preFooterContact" class="component-bg uk-text-center transition-fade">
            <a id="AboutComponentLink" href="/" class="uk-link-reset">
                <div class="uk-card uk-card-hover uk-padding-large uk-card-body">
                    <h4 class="stroke-title uk-margin-top transition-fade">Contact</h4>
                    <p class="transition-fade uk-margin-auto uk-margin-bottom uk-text-lead uk-width-xlarge">
                        Let's just have fun and make something cool. Want to hang out?
                    </p>
                </div>
            </a>
        </div>
        `;
    }
}

customElements.define('contact-component', Contact);

console.log('Contact Loaded')
