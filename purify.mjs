import purify from "purify-css"
// const purify = require("purify-css")

let content = ['*.html']
let css = ['**/css/*.css']
let options = {
    output: "output.css"
}
purify(content, css, options)