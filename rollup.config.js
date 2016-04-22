import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/webpack-browser-plugin.js',
  format: 'cjs',
  plugins: [
    babel()
  ],
  dest: 'lib/index.js'
};
