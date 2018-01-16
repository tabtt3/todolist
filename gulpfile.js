const gulp = require("gulp")
const sass = require("gulp-sass")

gulp.task("default", () => {
  console.log("Hello");
});

gulp.task("sass", () => {
  gulp.src("src/sass/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/dist"))
});
