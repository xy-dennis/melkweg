class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            // Footer Component custom styles here
        </style>
        <div class="uk-section uk-section-primary">
            <div class="uk-container uk-container-expand">
                <h3>Footer Goes Here</h3>
            </div>
        </div>
        `;
    }
}
  
customElements.define('footer-component', Footer);

console.log('Footer Loaded')
