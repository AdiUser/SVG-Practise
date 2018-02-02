# SVG-Practise
Making friends with SVG.js and paper.js 

`<self_note>` 

Lately I have been noticing a decrease in my personal growth, and it feels something, rather exactly like :point_right: :poop:.
So to make me :smiley: again, I decided to learn these two libraries.

`<side_note>`

*I know that these two libraries are huge and it is not at all possible for me to learn everything immediately. 
So, I'll just focus on quick 'take-aways' i.e things that I think I might use in near future.*

`</side_note>` 

**PS:** No promises tho, but I'll try to write what I learn. 

Game ON :exclamation:

`</self_note>`

## SVG.js

### What is SVG?

SVG or Scalable Vector Graphics are things that make "somethings" easy and wonderful.
As the name suggests, they (automatically scale)<sup>[1]</sup> themseleves a/c to the viewport.
The graphics are generated by XML tags that are wrapped with a `<svg>` tag. Normally, defining these tags is tedious, and that's why libraries like SVG.js are fun. They make things less complicated and make your source look handsome-er. 
SVGs are used world wide for making :ok_hand: and :muscle: UI designs.

### Initiating SVG.js

Creating an instance of SVG.js is easy. You just need a div element with an `id` attr.
Create an SVG instance by, 

`var svg = SVG('id');`

This will make `svg` an SVG object with which you can draw and manipulate shapes,text and much more.

### Creating a Polygon

Polygons look good. Websites often have slanting/sloped designs that look fabulous. There are various techniques used for brewing those sloppy designs and SVGs happen to be one of them. SVG.js provides a handy method `SVG.polygon()` for creating such polygons.

`// polygon() takes array of x,y coordinates in anti-clockwise fashion`

`svg.polygon([[top right][bottom right][][]..])`

You can also pass points in a comma (`,`) seperated string formate if you like.

eg :- `"14,32,35,76,34,42,75,21..."`