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
            .yellow-bg > .uk-section {
                background-color: var(--yellow);
            }
            .blue-bg > .uk-section {
                background-color: var(--blue);
            }
        </style>
        <div class="uk-section uk-padding-small" style="border-top: 1px solid #ffffff0a">
            <div class="uk-container uk-container-expand">
                <div uk-grid>
                    <div class="uk-width-1-4@m transition-fade">
                        One
                    </div>
                    <div class="uk-width-1-4@m transition-fade">
                        Two
                    </div>
                    <div class="uk-width-1-4@m transition-fade">
                        Three
                    </div>
                    <div class="uk-width-1-4@m transition-fade">
                        Four
                    </div>
                </div>
                <div class="uk-text-small" uk-grid>
                    <div class="uk-width-1-2@m uk-margin-small transition-fade">
                        <a href="https://www.instagram.com/_melkweg_/" target="_blank">Instagram</a> | <a href="https://www.facebook.com/profile.php?id=100083020404622" target="_blank">Facebook</a>
                    </div>
                    <div class="uk-width-1-2@m uk-text-right uk-margin-small transition-fade">
                        Copyright Melkweg &copy; Photography 2025 | <a href="/privacy.html">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
  
customElements.define('footer-component', Footer);

console.log('Footer Loaded')
