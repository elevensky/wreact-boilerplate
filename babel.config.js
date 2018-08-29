var env = process.env.NODE_ENV;

module.exports = {
  presets: ["@babel/env", "@babel/preset-react"],
  plugins: [env === "production" && "babel-plugin-that-is-cool"].filter(Boolean)
};
