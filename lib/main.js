SVG.on(document, "DOMContentLoaded", function() {
	if (SVG.supported) {
		var width = window.innerWidth;
		var height = window.innerHeight - 100;
		var draw = SVG("svg-draw").size("100%", "100%");
		var img = draw.image('image/img-1.png');
		var polygon = draw
			.polygon([[0, 0], [0, 325], [width, 500], [width, 0]])
			.fill(img)
			.stroke({ width: 0 });

	} else {
		alert("SVG Not supported! Shame on your browser");
	}
});
