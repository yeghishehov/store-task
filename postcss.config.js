
module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-nested"),
        require("autoprefixer"),
        require("postcss-custom-media"),
        require("postcss-simple-vars"),
        {
            "postcss-preset-env": {
                browsers: "last 2 versions"
            }
        }
    ]
};
