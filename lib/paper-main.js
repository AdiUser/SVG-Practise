var amount = 200

var path = new Path.Circle({
	center : [0,0],
	radius : 10,
	fillColor: '#000',
	strokeColor: '#fff'
})

var circle = new Symbol(path)

for (var i = 0; i < amount; i++) {

	var center = Point.random() * view.size
	var location = circle.place(center)
	location.scale((i/amount) + 0.1)
}

function onFrame(event) {

	for(var i = 0; i < amount; i++) {

		var item = project.activeLayer.children[i]
		item.position.x += item.bounds.width/20

		if(item.bounds.left > view.size.width)
			item.position.x = -item.bounds.width 
	}
}