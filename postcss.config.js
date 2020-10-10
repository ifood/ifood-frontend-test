const purgecss = [
    "@fullhuman/postcss-purgecss",
    {
        content: ["./components/**/*.js", "./pages/**/*.js"],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }
];
module.exports = {
    plugins: [
        "postcss-import",
        "tailwindcss",
        // this was causing errors, may lead to larger bundle size
        //"autoprefixer",
        ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
    ]
};
