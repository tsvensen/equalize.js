# equalize.js
The jQuery plugin for equalizing the height or width of elements

## How to Use
Call the plugin on the parent of the elements to equalize their height.
<pre>$('#height-example').equalize();</pre>

Equalize will accept any of the <a target="_blank" href="http://api.jquery.com/category/dimensions/">jQuery Dimension</a> methods: height, outerHeight, innerHeight, width, outerWidth, innerWidth.

## Examples
<pre>$('.parent').equalize('height'); // default, same as above
$('.parent').equalize('outerHeight');
$('.parent').equalize('innerHeight');
$('.parent').equalize('width');
$('.parent').equalize('outerWidth');
$('.parent').equalize('innerWidth');</pre>

### [See it in action](http://tsvensen.github.com/equalize.js)
