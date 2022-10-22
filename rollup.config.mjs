import { uglify } from 'rollup-plugin-uglify'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'dist/browser/index.js',
  plugins: [resolve({ browser: true }), uglify()],
  output: {
    name: 'WeightedPicker',
    file: 'dist/weighted-picker.min.js',
    format: 'umd'
  }
}
