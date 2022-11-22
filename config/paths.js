const path = require("path");
const root = path.resolve(__dirname, "../");

module.exports = {
    root: root,

    // Source files
    src: function getSourcePath(filepath) {
        return getPath("src" + (filepath ? "/" + filepath : ""));
    },

    // Production build files
    build: getPath("build"),

    // Static files that get copied to build folder
    assets: getPath("assets"),
    publicPath: "",

    getTemplatePath: function getTemplatePath(filepath) {
        return getPath("templates/" + filepath);
    }
};

function getPath(pathStr = "") {
    if (!pathStr) {
        return root;
    }

    return path.join(root, ...(pathStr.split("/")));
}
