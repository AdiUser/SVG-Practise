SVG.on(document, "DOMContentLoaded", function() {
	if (SVG.supported) {
		var width = window.innerWidth;
		var height = window.innerHeight - 100;
		var draw = SVG("svg-draw").size("100%", "100%");

		var polygon = draw
			.polygon([[0, 0], [0, 200], [width, 350], [width, 0]])
			.fill("#e40853")
			.stroke({ width: 0 });
	} else {
		alert("SVG Not supported! Shame on your browser");
	}
});
