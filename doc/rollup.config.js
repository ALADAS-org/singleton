import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/singleton.js',
    output: [
      {
        file: 'dist/singleton.esm.js',
        format: 'esm', // ES6 module
      },
      {
        file: 'dist/singleton.umd.js',
        format: 'umd', // UMD module
        name: 'Singleton',
      }
    ],
    plugins: [resolve(), commonjs()]
  }
];