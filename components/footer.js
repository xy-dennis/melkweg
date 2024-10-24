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
        </style>
        <div class="uk-section">
            <div class="uk-container uk-container-expand">
                <div uk-grid>
                    <div class="uk-width-1-4@m">
                        One
                    </div>
                    <div class="uk-width-1-4@m">
                        Two
                    </div>
                    <div class="uk-width-1-4@m">
                        Three
                    </div>
                    <div class="uk-width-1-4@m">
                        Four
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
  
customElements.define('footer-component', Footer);

console.log('Footer Loaded')
