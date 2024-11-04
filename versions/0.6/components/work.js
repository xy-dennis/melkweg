class Work extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="preFooterWork" class="component-bg uk-text-center transition-fade">
            <a id="AboutComponentLink" href="/" class="uk-link-reset">
                <div class="uk-card uk-card-hover uk-padding-large uk-card-body">
                    <h4 class="stroke-title uk-margin-top transition-fade">Work</h4>
                    <p class="transition-fade uk-margin-auto uk-margin-bottom uk-text-lead uk-width-xlarge">
                        I have had lots of moments, here are some of them I can share
                    </p>
                </div>
            </a>
        </div>
        `;
    }
}
  
customElements.define('work-component', Work);

console.log('Work Loaded')
