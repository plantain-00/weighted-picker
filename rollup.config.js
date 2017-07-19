import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'dist/browser/index.js',
  dest: 'dist/weighted-picker.min.js',
  format: 'umd',
  moduleName: 'WeightedPicker',
  plugins: [resolve(), uglify()]
}
