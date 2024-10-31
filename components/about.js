class About extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="preFooterAbout" class="component-bg uk-text-center transition-fade">
            <a id="AboutComponentLink" href="/about/" class="uk-link-reset">
                <div class="uk-card uk-card-hover uk-padding-large uk-card-body">
                    <h4 class="stroke-title uk-margin-top transition-fade">About</h4>
                    <p class="transition-fade uk-margin-auto uk-margin-bottom uk-text-lead uk-width-xlarge">
                        My life is a rich tapestry of experiences. Just like yours. We can have fun and make art.
                    </p>
                </div>
            </a>
        </div>
        `;
    }
}
  
customElements.define('about-component', About);

console.log('About Loaded')
