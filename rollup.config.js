import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'dist/browser/index.js',
  name: 'WeightedPicker',
  plugins: [resolve({ browser: true }), uglify()],
  output: {
    file: 'dist/weighted-picker.min.js',
    format: 'umd'
  }
}
