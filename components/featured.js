class Featured extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="uk-section uk-padding-remove-top uk-margin-large-bottom">
            <div class="uk-container uk-container-expand uk-padding-remove">

                <div id="MelkwegFeatureSlider" class="uk-position-relative uk-visible-toggle uk-light" uk-slider="center: true; draggable: true">

                    <div class="uk-slider-items uk-grid-large uk-child-width-1-2 uk-child-width-1-4@m" uk-grid>

                        <div class="mk-slider slide-item-01">
                            <a href="/?slide-one" class="uk-link-reset">
                                <div class="uk-panel">
                                    <img src="img/featured/featured-02.jpg" width="100%" height="auto" alt="Feature Item One">
                                    <div class="mk-slide-info">
                                        <div class="slide-item-title">Colection One</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="mk-slider slide-item-02">
                            <a href="/?slide-two" class="uk-link-reset">
                                <div class="uk-panel">
                                    <img src="img/featured/featured-01.jpg" width="100%" height="auto" alt="Feature Item Two">
                                    <div class="mk-slide-info">
                                        <div class="slide-item-title">Colection Two</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="mk-slider slide-item-03">
                            <a href="/?slide-three" class="uk-link-reset">
                                <div class="uk-panel">
                                    <img src="img/featured/featured-03.jpg" width="100%" height="auto" alt="Feature Item Three">
                                    <div class="mk-slide-info">
                                        <div class="slide-item-title">Colection Three</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="mk-slider slide-item-04">
                            <a href="/?slide-four" class="uk-link-reset">
                                <div class="uk-panel">
                                    <img src="img/featured/featured-04.jpg" width="100%" height="auto" alt="Feature Item Four">
                                    <div class="mk-slide-info">
                                        <div class="slide-item-title">Colection Four</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="mk-slider slide-item-05">
                            <a href="/?slide-five" class="uk-link-reset">
                                <div class="uk-panel">
                                    <img src="img/featured/featured-01.jpg" width="100%" height="auto" alt="Feature Item Five">
                                    <div class="mk-slide-info">
                                        <div class="slide-item-title">Colection Five</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="mk-slider slide-item-06">
                            <a href="/?slide-six" class="uk-link-reset">
                                <div class="uk-panel">
                                    <img src="img/featured/featured-02.jpg" width="100%" height="auto" alt="Feature Item Six">
                                    <div class="mk-slide-info">
                                        <div class="slide-item-title">Colection Six</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="mk-slider slide-item-07">
                            <a href="/?slide-seven" class="uk-link-reset">
                                <div class="uk-panel">
                                    <img src="img/featured/featured-03.jpg" width="100%" height="auto" alt="Feature Item Seven">
                                    <div class="mk-slide-info">
                                        <div class="slide-item-title">Colection Seven</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                
                    </div>

                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next uk-slider-item="next"></a>

                </div>
            </div>
        </div>
        `;
    }
}
  
customElements.define('featured-component', Featured);

console.log('Featured Loaded')
