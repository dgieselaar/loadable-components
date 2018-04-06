import loadable from 'loadable-components';

const AsyncComponent = loadable(() => import('./MyComponent'), {
  modules: ['./MyComponent'],
  filename: 'basic/actual.js'
});

export default AsyncComponent;
