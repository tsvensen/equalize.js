# equalize.js

The jQuery plugin for equalizing the height or width of elements. [See it in action »](http://tsvensen.github.com/equalize.js).


## How to Use

Call the plugin on the parent of the elements to equalize their height.

Equalize will accept any of the <a target="_blank" href="http://api.jquery.com/category/dimensions/">jQuery Dimension</a> methods: height, outerHeight, innerHeight, width, outerWidth, innerWidth.

<pre>$('#height-example').equalize();</pre>


## Advanced Usage

Equalize will now accept a settings object to get the "minimum max dimension". By setting reset to true the height/width will be removed before determining the max.

<pre>$('.parent').equalize({reset: true}); // default to height
$('.parent').equalize({equalize: 'width', reset: true});</pre>

This advanced usage is for dynamic instances where equalize is ran after elements are added or removed to maintain minimum max height or width.

Equalize the .parent's child element. See @larsbo's <a href="http://jsfiddle.net/4QTNP/3/">example</a>.
<pre>$('.parent').equalize({children: 'p'}); // equalize height of paragraphs within .parent</pre>

## Breakpoint

This option should be usefull in responsive case where you don't want to equalize elements under a viewport width breakpoint. It must be used in conjunction with the 'reset' option.

<pre>$('.parent').equalize({equalize: 'width', reset: true, breakpoint: 767}); // equalize elements width only if the viewport is larger than 767px</pre>

Note that the method to get the viewport width is not supported for IE8 or less, so we "fallback" to the "clientWidth" that can be different from the viewport, depending if the vertical scrolling is displayed or not.

## Examples

<pre>$('.parent').equalize('height'); // default, same as above
$('.parent').equalize('outerHeight');
$('.parent').equalize('innerHeight');
$('.parent').equalize('width');
$('.parent').equalize('outerWidth');
$('.parent').equalize('innerWidth');</pre>

## Safari issue

Safari raise the "ready" jQuery event even if it have not yet downloaded all assets finded in the DOM, so if you try to equalize element that depends from some asset width or height, you should use "equalize.js" in the "load" jQuery event where all assets will be fully downloaded.

# Legal

Author & copyright (c) 2012: [Tim Svensen](http://timsvensen.com)

Dual MIT & GPLv2 license
