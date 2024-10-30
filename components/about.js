class About extends HTMLElement {
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
        <div id="preFooterAbout" class="component-bg uk-text-center">
            <h4 class="transition-fade">About</h4>
            <p class="transition-fade uk-margin-auto uk-text-lead uk-width-xlarge">
                My life is a rich tapestry of experiences. Just like yours. We can have fun and make art.
            </p>
            <a href="/about/" class="uk-button uk-button-primary transition-fade">More About Melkweg</a>
        </div>
        `;
    }
}
  
customElements.define('about-component', About);

console.log('About Loaded')
