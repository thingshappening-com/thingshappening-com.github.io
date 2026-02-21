module.exports = {
  plugins: [
    require("autoprefixer"),
    require("tailwindcss")({ config: "./tailwind.config.js" }),
  ],
};
