class BezelStroke {
	static get inputProperties() {
		return ["--bezel-color-secondary", "--bezel-width"];
	}

	static get inputArguments() {}

	static get contextOptions() {}

	paint(ctx, geom, properties, args) {
		ctx.lineWidth = properties.get("--bezel-width");

		const inset = ctx.lineWidth / 2;
		const radius = [10, 0, 10, 0];
		const topLeftRadius = radius[0];
		const topRightRadius = radius[1];
		const bottomRightRadius = radius[2];
		const bottomLeftRadius = radius[3];

		const width = geom.width;
		const height = geom.height;

		ctx.strokeStyle = properties.get("--bezel-color-secondary");
		ctx.lineTo(topLeftRadius, inset);
		ctx.lineTo(width - topRightRadius, inset);
		ctx.lineTo(width - inset, topRightRadius);
		ctx.lineTo(width - inset, height - bottomRightRadius);
		ctx.lineTo(width - bottomRightRadius, height - inset);
		ctx.lineTo(bottomLeftRadius, height - inset);
		ctx.lineTo(inset, height - bottomLeftRadius);
		ctx.lineTo(inset, topLeftRadius);
		ctx.closePath();
		ctx.stroke();
	}
}

registerPaint("bezelStroke", BezelStroke);
