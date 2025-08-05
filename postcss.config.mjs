import postcssOKLabFunction from "@csstools/postcss-oklab-function";

export default {
  plugins: [
    postcssOKLabFunction({ preserve: true })
  ],
};
