import VuePlugin from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/lg-p5.js',
    format: 'umd',
    name: 'LgP5'
  },
  plugins: [
    VuePlugin(),
    resolve(),
    commonjs()
  ]
}