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

## Mobile exceptions

In some cases you may want to block and display a series of columns vertically on mobile devices.  In this case the equalize heights function may not be desired.

You could get around this with conditional scripts but that will not respond to resize events correctly.  Instead use the new s-noequalize helper class.

Just add the class s-noequalize to your parent item and test.

## Resize support

Some items may have dynamic items that change height as the window is resized.  For the more efficient resizing support use the <a href="https://github.com/louisremi/jquery-smartresize">jquery-smartresize</a> along with this.

Example
<pre>$(window).smartresize(function(){
  $('.equalize').equalize({reset:true, children:'>.content-box', equalize:'outerHeight'});
});</pre>

## Examples

<pre>$('.parent').equalize('height'); // default, same as above
$('.parent').equalize('outerHeight');
$('.parent').equalize('innerHeight');
$('.parent').equalize('width');
$('.parent').equalize('outerWidth');
$('.parent').equalize('innerWidth');</pre>


# Legal

Author & copyright (c) 2012: [Tim Svensen](http://timsvensen.com)

Dual MIT & GPLv2 license
