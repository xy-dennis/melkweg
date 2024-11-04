  /*
   * @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
   * @author forrestkirby github.com/forrestkirby
  */

// +++++++THIS WORKS++++++

if (document.querySelector('#FeaturedComponent')) {
  
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

    UIkit.util.$$('.sliderX').forEach(function(el) {
        setOpacity(el.querySelectorAll('.el-item.uk-active')[0].querySelectorAll('.uk-transition-fade'));
        UIkit.util.on(el, 'beforeitemhide', function() {
            removeOpacity(el.querySelectorAll('.el-item.uk-active .uk-transition-fade'));
        });
        UIkit.util.on(el, 'itemshown', function(e) {
            setOpacity(e.target.querySelectorAll('.uk-transition-fade'));
        });
    });

  console.log("done");
}