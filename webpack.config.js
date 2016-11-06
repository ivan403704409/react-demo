const debug = process.env.NODE_ENV !== 'production'

module.exports = {
	watch: debug,
	debug: debug,
	devtool: debug ? 'source-map' : '', 
	entry: {
		app: './src/app.js',
	},
	output: {
		publicPath: '',
		path: '',
		filename: '[name].js',
	},
	// module: {
	// 	//loaders引入加载器
 //        loaders: [
 //            {test: /\.js$/, loader: "babel", query: {compact: false}, exclude: /node_modules/, }, 
 //            // { test: /\.css$/, loader: 'style!css!sass' },
 //            // { test: /\.scss$/, loader: 'style!css!sass' },
 //            // {test: /\.jsx$/, loader: "babel", query: {compact: false}, exclude: /node_modules/, }, 
 //            // {test: /\.(png|jpg|gif)$/i,loader: 'url?limit=8192&name=images/[name]-[hash:8].[ext]'}, 
 //            // {test: /\.woff2?$/, loader: "url?limit=10000&minetype=application/font-woff"},
 //            // {test: /\.(ttf|eot|svg)$/, loader: "file"},
 //            // {test: /\.json$/,   loader: "json"},
 //        ]
	// },
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
			{test: /\.jsx$/, loader: 'babel', exclude: /node_modules/ },
			{test: /\.css/, loader: 'style!css'},
			{test: /\.scss/, loader: 'style!css!scss'},
		],
	},
	babel: {
	    presets: ['es2015', 'stage-2', 'react'],
	    plugins: [
	    	'transform-runtime', 
	    	["import", { libraryName: "antd", style: "css" }]
	    ]
	},
	//自动补全扩展名
    resolve: {  
        extensions: ['','.js', '.jsx'],
        aliais: {
        	'model': __dirname + '/src/service/model',
        },
    },
}