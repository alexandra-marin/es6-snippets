module.exports = function(config) {
	config.set({
		frameworks: ["jasmine"],
		files: ["spec/*.js"],
		browsers: ["Chrome"],
		preprocessors: {
			"spec/**/*.js": ["webpack"]
		},
		webpack: {
			module: {
				loaders: [
					{
						test: /\.js/,
						exclude: /node_modules/,
						loader: "babel-loader"
					}
				]
			},
			watch: true
		}
	});
};
