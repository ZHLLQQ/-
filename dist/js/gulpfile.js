
const gulp = require("gulp");

gulp.task("copy-html", function(){
	
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})



gulp.task("images", function(){
	
	return gulp.src("img/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

gulp.task("data", function(){
	return gulp.src(["*.json", "*.xml", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})


gulp.task("build", ["copy-html", "images", "data"], function(){
	console.log("编译成功");
})


gulp.task("watch", function(){

	gulp.watch("*.html", ['copy-html']);
	gulp.watch("img/**/*", ['images']);
	gulp.watch(["*.json", "*.xml", "!package.json"], ['data']);
	gulp.watch("*.scss", ["scss"]);
	gulp.watch(["*.js", "js/*.js"], ['javascript']);
})


const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss", function(){
	return gulp.src("*.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename(function(path){
		path.basename += ".min";
		path.extname = ".css";
	}))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})  

const uglify = require("gulp-uglify");
gulp.task("javascript", function(){
	return gulp.src(["*.js", "js/*.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename(function(path){
		path.basename += ".min";
		path.extname = ".js";
	}))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

const connect = require("gulp-connect");

gulp.task("server", function(){
	connect.server({
		root: "dist",  
		port: 8888, 
		livereload: true
	})
})

gulp.task("default", ["watch", "server"]);