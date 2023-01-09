# SVG Animation

First of all you will need a index.html with some inline SVG's

To create a simple logo in Affinity Designer you will find several tutorials, just remember if you are using text you have to convert it into curves. So that you are able to manipulate them with css.

If you have made everything the right way you should be able to give classes to the different items you want to animate. It can be `path, g, rect, stroke, circle`

If you write your SVG from scratch you will setup something like this:

`<svg class="someclass" viewBox="0 0 100 100" width="100%"
                        height="100%">
<rect class="someclass__leftitem" width="6" height="6" x="10"
    y="80" rx="20">
</rect>
<rect class="someclass__rightitem" width="6" height="6" x="84"
    y="80" rx="20">
</rect>
</svg>`

The viewBox sets the size of your svg. If you follow this example it is very easy to calculate your settings because the `x` and `y` values you need to place your items inside the SVG are the exact percentage of the viewBox. `rx` represents the value of a border-radius.

[Mdn web docs/Attribute/viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)

The initial `fill:` will be black but you can overwrite it in your css

to be continued...
