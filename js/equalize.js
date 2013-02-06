/**
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 *
 * The jQuery plugin for equalizing the height or width of elements.
 *
 * Equalize will accept any of the jQuery Dimension methods:
 *   height, outerHeight, innerHeight,
 *   width, outerWidth, innerWidth.
 *
 * EXAMPLE
 * $('.parent').equalize(); // defaults to 'height'
 * $('.parent').equalize('width'); // equalize the widths
 *
 * ADVANCED EXAMPLES
 * Get the minimum max dimension by removing the existing height/width
 * $('.parent').equalize({reset: true}); // equalize height by default, remove existing height, then determin max
 * $('.parent').equalize({equalize: 'width', reset: true}); // equalize width, remove existing width, then determin max
 * $('.parent').equalize({equalize: 'width', reset: true, breakpoint: 767}); // same as previous but only if window is larger than 767px
 *
 * Equalize internal child elements
 * From @larsbo : http://jsfiddle.net/4QTNP/3/
 * $('.parent').equalize({children: 'p'}); // equalize height of paragraphs within .parent
 * 
 * BREAKPOINT
 * This option should be usefull in responsive case where you don't want to equalize elements under a window width breakpoint. It must be used in conjunction with the 'reset' option.
 * There is little problem in using the window width, that is not the browser screen width used in CSS Media query. 
 * Generally the window width is 15px less larger that the browser screen size because of the vertical scrolling bar. 
 * So you should use a breakpoint value less larger than the breakpoint you want to target in your CSS.
 */
;(function($) {

  $.fn.equalize = function(options) {
    var $containers = this, // this is the jQuery object
        children    = false,
        reset       = false,
        breakpoint  = null,
        win_width   = $(window).innerWidth(),
        equalize,
        type;

    // when options are an object
    if ($.isPlainObject(options)) {
      equalize = options.equalize || 'height';
      children = options.children || false;
      reset    = options.reset || false;
      breakpoint = options.breakpoint || null;
    } else { // otherwise, a string was passed in or default to height
      equalize = options || 'height';
    }

    if (!$.isFunction($.fn[equalize])) { return false; }
    
    // determine if the height or width is being equalized
    type = (equalize.indexOf('eight') > 0) ? 'height' : 'width';

    return $containers.each(function() {
          // when children exist, equalize the passed in child elements, otherwise equalize the children
      var $children = (children) ? $(this).find(children) : $(this).children(),
          max = 0; // reset for each container

      $children.each(function() {
        var $element = $(this),
            value;
            
        if (reset) { $element.css(type, ''); } // remove existing height/width dimension

        // Continue if window width is larger than the breakpoint
        if(!breakpoint || win_width > breakpoint) {
          value = $element[equalize]();          // call height(), outerHeight(), etc.
          if (value > max) { max = value; }      // update max
        }
      });

      // add CSS to children only if window width is larger than the breakpoint
      if(!breakpoint || win_width > breakpoint) {
        $children.css(type, max +'px');
      }
    });
  };

}(jQuery));
