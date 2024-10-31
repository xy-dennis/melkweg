class About extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style></style>
        <div id="preFooterAbout" class="component-bg uk-text-center">
            <a href="/about/" class="mk-button transition-fade">
                <div class="mk-link-wrapper">
                    <h4 class="transition-fade">About</h4>
                    <p class="transition-fade uk-margin-auto uk-text-lead uk-width-xlarge">
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
