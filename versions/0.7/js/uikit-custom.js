  /*
   * @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
   * @author forrestkirby github.com/forrestkirby
  */

// +++++++THIS WORKS++++++

if (document.querySelector('#FeaturedComponent')) {

    // Slider Image
    function enlargeImage(overlays) {
        for (let overlay of overlays) {
            overlay.classList.add('mk-slider-image-large');
            overlay.classList.remove('mk-slider-image-small');
        }
    }

    function reduceImaGE(overlays) {
        for (let overlay of overlays) {
            overlay.classList.add('mk-slider-image-small');
            overlay.classList.remove('mk-slider-image-large');
        }
    }

    UIkit.util.$$('.mk-slider-container').forEach(function(el) {
        enlargeImage(el.querySelectorAll('.mk-slider-item.uk-active')[0].querySelectorAll('.mk-slider-image-wrapper'));
        UIkit.util.on(el, 'beforeitemhide', function() {
            reduceImaGE(el.querySelectorAll('.mk-slider-item.uk-active .mk-slider-image-wrapper'));
        });
        UIkit.util.on(el, 'itemshown', function(e) {
            enlargeImage(e.target.querySelectorAll('.mk-slider-image-wrapper'));
        });
    });

    
    // Slider Content
    function setOpacity(overlays) {
        for (let overlay of overlays) {
            overlay.classList.add('overlay-visible');
            overlay.classList.remove('overlay-hidden');
        }
    }

    function removeOpacity(overlays) {
        for (let overlay of overlays) {
            overlay.classList.add('overlay-hidden');
            overlay.classList.remove('overlay-visible');
        }
    }

    UIkit.util.$$('.mk-slider-container').forEach(function(el) {
        setOpacity(el.querySelectorAll('.mk-slider-item.uk-active')[0].querySelectorAll('.uk-transition-fade'));
        UIkit.util.on(el, 'beforeitemhide', function() {
            removeOpacity(el.querySelectorAll('.mk-slider-item.uk-active .uk-transition-fade'));
        });
        UIkit.util.on(el, 'itemshown', function(e) {
            setOpacity(e.target.querySelectorAll('.uk-transition-fade'));
        });
    });

  console.log("UIKit-Custom.js");
}