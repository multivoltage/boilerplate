var gulp = require( 'gulp' ),
    plumber = require( 'gulp-plumber' ),
    watch = require( 'gulp-watch' ),
    cleancss = require( 'gulp-clean-css' ),
    rename = require( 'gulp-rename' ),
    notify = require( 'gulp-notify' ),
    sass = require( 'gulp-sass' ),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    webpack = require("webpack"),
    WebpackDevServer = require('webpack-dev-server'),
    gutil = require("gulp-util"),
    webpackConfig = require("./webpack.config.js");

var onError = function( err ) {
  console.log( 'An error occurred:', err.message );
  notify.onError("ERROR: " + err.plugin)(err);
  this.emit( 'end' );
}

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 1%', 'Firefox ESR']
};

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";

myDevConfig.plugins = [
    new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
        debug: true
    })
];

var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
         // output options
         colors: true
     }));
		callback();
	});
});

gulp.task('webpack-dev-server', function(callback) {
    // modify some webpack config options
    
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = 'eval';

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        publicPath: '/' + myConfig.output.path,
        stats: {
            colors: true
        },
        contentBase: '.'
    }).listen(8080, 'localhost', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.htm');

    });
});

gulp.task( 'scss', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe( plumber( { errorHandler: onError } ) )
    .pipe( sourcemaps.init() )
    .pipe( sass() )
    .pipe( autoprefixer(autoprefixerOptions) )
    .pipe( cleancss() )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( sourcemaps.write('./dist/css/') )
    .pipe( gulp.dest( './dist/css' ) )
    .pipe( notify({
        onLast: true,
        message: function(file) {
          return "SASS compiled!";
        }
    }));
});

gulp.task( 'watch', function() {
	gulp.watch( './src/scss/**/*.scss', [ 'scss' ] );
	gulp.watch( './src/js/**/*.js' , ['webpack:build-dev'] );
});

gulp.task( 'default', ['webpack:build-dev', 'webpack-dev-server','scss', 'watch' ], function() {});