class About extends HTMLElement {
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
        <section class="uk-section black-bg">
            <div class="uk-container">
                <div class="uk-height-match uk-flex-middle" uk-grid>
                    <div class="uk-width-1-2@m">
                        <h4 class="transition-fade">About</h4>
                        <p class="uk-text-lead transition-fade">
                            Melkweg Photography is run and managed by South African Photographer Janelka Lubbinge. 
                        </p>
                        <a href="/about/" class="uk-button uk-button-primary transition-fade">More About Melkweg</a>
                    </div>
                    <div class="uk-width-1-2@m">
                        <img src="/img/meet-2.png" alt="About Image" class="transition-slide-right" loading="lazy" width="100%" height="auto">
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}
  
customElements.define('about-component', About);

console.log('About Loaded')
