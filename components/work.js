class Work extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style></style>
        <div id="preWorkAbout" class="component-bg uk-text-center">
            <h4 class="transition-fade">Work</h4>
            <p class="transition-fade uk-margin-auto uk-text-lead uk-width-xlarge">
                I have had lots of moments, here are some of them I can share
            </p>
            <a href="/about/" class="uk-button uk-button-primary transition-fade">Some Past Things</a>
        </div>
        `;
    }
}
  
customElements.define('work-component', Work);

console.log('Work Loaded')
