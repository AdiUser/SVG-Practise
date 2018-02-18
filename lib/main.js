SVG.on(document, "DOMContentLoaded", function() {
	if (SVG.supported) {
		var width = window.innerWidth;
		var height = window.innerHeight - 100;
		var draw = SVG("svg-draw").size("100%", "100%");
		var img = draw.image("image/img-1.png");
		var polygon = draw
			.polygon([[0, 0], [0, 325], [width, 500], [width, 0]])
			.fill(img)
			.stroke({ width: 0 });

		var rect = draw.rect(200, 200).fill("#f09");
		var mask = draw.mask();

		mask.add(
			draw
				.circle(75, 75)
				.fill("#fff")
				.radius(20)
		);
		mask.add(
			draw
				.circle(100, 100)
				.fill("#ccd")
				.radius(15)
		);
		mask.add(
			draw
				.circle(40, 40)
				.fill("#3c3")
				.radius(20)
		);
		rect.maskWith(mask);
	} else {
		alert("SVG Not supported! Shame on your browser");
	}
});
