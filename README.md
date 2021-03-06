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

This will make `svg` an SVG object with which you can draw and manipulate shapes, text and much more.

### Creating a Polygon

Polygons look good. Websites often have slanting/sloped designs that look fabulous. There are various techniques used for brewing those sloppy designs and SVGs happen to be one of them. SVG.js provides a handy method `SVG.polygon()` for creating such polygons.

`var polygon = svg.polygon([[top right][bottom right][][]..])`

The `polygon()` method takes array of x,y coordinates in anti-clockwise fashion.
You can also pass points in a comma (`,`) seperated string format if you like.
eg :- `"14,32,35,76,34,42,75,21..."`

SVG.js also provides utility methods like `fill(color)`, `stroke(type)`, `animate(time)` that can be used to make your SVGs look more attractive and interactive.

### SVG Texts

SVG texts are not as flexible as they are in normal HTML. SVG can not automate text flowing due to its basic working structure hence, new lines are needed to be provided explicitly. Each line is wrapped within `<tspan>` tags which are used for formating the text. SVG.js provides methods by which you can format text just like you do for HTML. Below are some ways in which you can create text nodes. 

```javascript
	
	var textX = svg.text("hello text");
	var textY = svg.text(function(add) {
			add.tspan("SVG text").newLine()
			   .tspan("with a new line defined explicitly.");
		});
	var textZ = svg.text("New lines can also be defined by \n");
	var textX1 = svg.plain("Simple text with no new lines.");
	
	textX.font({
		  family:   'Helvetica'
		, size:     144
		, anchor:   'middle'
		, leading:  '1.5em'
		});
```	

Available properties for `font()` are:

* `leading` (will do the same as calling the leading() method as setter)
	* `leading` == `line-height`
* `anchor` (will set the text-anchor attribute)
* `family` (will set the font-family attribute)
* `size` (will set the font-size attribute)
* `stretch` (will set the font-stretch attribute)
* `style` (will set the font-style attribute)
* `variant` (will set the font-variant attribute)
* `weight` (will set the font-weight attribute)


#### text.leading()

As opposed to html, where leading is defined by line-height, svg does not have a natural leading equivalent. In svg, lines are not defined naturally. They are defined by `<tspan>` nodes with a `dy` attribute defining the line height and an `x` value resetting the line to the `x` position of the parent text element. But you can also have many nodes in one line defining a different `y`, `dy`, `x` or even `dx` value. This gives us a lot of freedom, but also a lot more responsibility. We have to decide when a new line is defined, where it starts, what its offset is and what it's height is. The `leading()` method in SVG.js tries to ease the pain by giving you behaviour that is much closer to html. In combination with newline separated text, it works just like html:

```javascript
var text = draw.text("Lorem ipsum dolor sit amet consectetur.\nCras sodales imperdiet auctor.")
text.leading(1.3)

```

This will render a text element with a tspan element for each line, with a `dy` value of 130% of the font size.

Note that the `leading()` method assumes that every first level tspan in a text node represents a new line. Using `leading()` on text elements containing multiple tspans in one line (e.g. without a wrapping tspan defining a new line) will render scrambled. So it is advisable to use this method with care, preferably only when throwing newline separated text at the text element or calling the `newLine()` method on every first level tspan added in the block passed as an argument to the text element.

#### text.build()

The `build()` can be used to enable / disable build mode. With build mode disabled, the `plain()` and `tspan()` methods will first call the `clear()` method before adding the new content. So when build mode is enabled, `plain()` and `tspan()` will append the new content to the existing content. When passing a block to the `text()` method, build mode is toggled automatically before and after the block is called. But in some cases it might be useful to be able to toggle it manually.

### Images with SVG.js

SVG.js provides a handy `image()` method that can be used to load images directly to your view. The `image()` method takes in the path to the image, it's width and height. One interesting use of image method is using images as `fill` for things like rectangles and polygons. You can make a polygon and simply use it's `fill()` method to insert image inside it.

```javascript

	var poly = svg.polygon([[0, 0], [0, 325], [width, 500], [width, 0]]);
	var image = svg.image('/path/to/image');
	poly.fill(image);

```

#### image.load()

You can load another image by using `load()` method. It takes the path of the image. 

**Note :** If you do not know the size of the loading image, SVG.js provides `loaded()` method that can be used for determining the image parameters.

```javascript
	var img = svg.image('/path/to/image').loaded(function(imgL) {
		var width = imglL.width;
		var height = imgL.height;

		this.size(width, height);
	});
``` 

#### text.path()

A nice feature in svg is the ability to run text along a path:

```javascript
var text = svg.text(function(add) {
  add.tspan('We go ');
  add.tspan('up').fill('#f09').dy(-40);
  add.tspan(', then we go down, then up again').dy(40);
});

var path = 'M 100 200 C 200 100 300 0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100'

text.path(path).font({ size: 42.5, family: 'Verdana' })
```

When calling the `path()` method on a text element, the text element is mutated into an intermediate between a text and a path element. From that point on the text element will also feature a `plot()` method to update the path.

### SVG Gradients

Gradients can be handy in some situations. SVG.js has methods that can help in building custom gradients. SVG gradients are fillable, meaning you can set the `fill()` for any shape with a gradient you build. 

```javascript
var grad = svg.gradient('linear', function(stop) {
			stop.at(.24, '#000', .5)
			stop.at(.36, '#fdc')
			stop.at(.96, '#fff')
		})
var rect =  svg.rect(200, 200).move(90, 400).fill(grad)
```	

The primary way of creating a gradient is shown above. The `gradient()` method accepts two parameters ('linear'|'radical') and a function an argument (an object) that is used to define gradient boundaries. You can define the gradient limits/boundaries by using the `at()` method of this argument. The `at()` method takes 3 parameters, a float value b/w 0 and 1, color and opacity value. 

**Note:**
* Opacity value is optional.
* The float value b/w 0 and 1 can also be expressed in percentage. 

### SVG Masks

Masks are a handy tool for creating layered graphics. The basic concept behind masks(a/c to me) is - suppose you have a container and many layers that you want to stack on top of each other. The container acts as a container(literally) here. It will contain all those layers in inside it. The colour of this container controls the opacity of the layers. The first layer in the mask gets the bottom-most position while the last layer gets stacked at the top. Example -

```javascript
//draw a container 
var rect = draw.rect(200, 200).fill('#f09')
//get a mask instance
var mask = draw.mask();
	
	// add your layers to the mask
	mask.add(draw.circle(75, 75).fill('#fff').radius(20))
	mask.add(draw.circle(100,100).fill('#ccd').radius(15))
	mask.add(draw.circle(40, 40).fill('#3c3').radius(20))
	
	//finally, add the mask to the container
	rect.maskWith(mask)
```

### SVG ClipPath

Clipping elements works exactly the same as masking elements. The only difference is that clipped elements will adopt the geometry of the clipping element. Therefore events are only triggered when entering the clipping element whereas with masks the masked element triggers the event. Another difference is that masks can define opacity with their fill colour and clipPaths can't.

```javascript
// get the container
var rect = draw.rect(200, 200).fill('#f09')
//get a clip instance
var clip = draw.clip();
	
	// add your layers to the mask
	clip.add(draw.circle(75, 75).fill('#fff').radius(20))
	clip.add(draw.circle(100,100).fill('#ccd').radius(15))
	clip.add(draw.circle(40, 40).fill('#3c3').radius(20))
	
	//finally, add the mask to the container
	rect.clipWith(mask)
```

### SVG Marker

Markers can be added to every individual point of a line, polyline, polygon and path. There are three types of markers: start, mid and end. Where start represents the first point, end the last and mid every point in between.

```javascript
var path = draw.path('M0 0 A50 50 0 0 1 50 50 A50 50 0 0 0 100 100')

path.fill('none').move(20, 20).stroke({ width: 1, color: '#ccc' })

path.marker('start', 10, 10, function(add) {
  add.circle(10).fill('#f06')
})
path.marker('mid', 10, 10, function(add) {
  add.rect(5, 10).cx(5).fill('#ccc')
})
path.marker('end', 20, 20, function(add) {
  add.circle(6).center(4, 5)
  add.circle(6).center(4, 15)
  add.circle(6).center(12, 10)

  this.fill('#0f9')
})
```

The `marker()` method can be used in three ways. Firstly, a marker can be created on any container element (e.g. svg, nested, group, ...). This is useful if you plan to reuse the marker many times, so it will create a marker in the defs but not show it yet:

```javascript
var marker = draw.marker(10, 10, function(add) {
  add.rect(10, 10)
})
```

Secondly a marker can be created and applied directly on its target element:

```javascript
path.marker('start', 10, 10, function(add) {
  add.circle(10).fill('#f06')
})
```

This will create a marker in the defs and apply it directly. Note that the first argument defines the position of the marker and that there are four arguments as opposed to three with the first example.

Lastly, if a marker is created for reuse on a container element, it can be applied directly to the target element:

```javascript
path.marker('mid', marker)
```

Finally, to get a marker instance from the target element reference:

```javascript
path.reference('marker-end')
```

*from - http://svgjs.com/elements/*