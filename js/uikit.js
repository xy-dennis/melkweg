// const { util, slideshow, slider } = UIkit;
// const { $, $$, ready, on, index, getIndex, each, toggleClass } = util;

// ready(() => {
//   setTimeout(() => {
//     const slideshowEL = slideshow($("#slideshow"));
//     const sliderEl = slider($("#MelkwegFeatureSlider"));
//     const sliderItems = sliderEl.slides;
//     toggleClass(sliderItems[0], "fs-active");

//     on(slideshowEL.$el, "beforeitemshow", ({ detail, target }) => {
//       if (detail[0].$el !== slideshowEL.$el) return;
//       const active = getIndex(target, target.parentNode.children);
//       sliderEl.show(active);
//       each(sliderItems, (item) => {
//         toggleClass(item, "fs-active", index(item) === active);
//       });
//     });
//   }, 1000);
// });


// function indexInParent(node) {
//     var children = node.parentNode.childNodes;
//     var num = 0;
  
//     for (var i=0; i<children.length; i++) {
//          if (children[i]==node) return num;
//          if (children[i].nodeType==1) num++;
//     }
  
//     return -1;
// }

// UIkit.util.on('#MelkwegFeatureSlider', 'itemshown', function() {
//   var $items = this.getElementsByClassName('uk-slider-items');
//   var $activeItem = $items[0].getElementsByClassName('uk-active');
//   var index = indexInParent($activeItem[0]);
//   console.log(index);
// });