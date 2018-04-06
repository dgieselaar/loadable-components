import loadable from 'loadable-components';

const AsyncComponent = loadable(() => import('./MyComponent'), {
  LoadingComponent: () => 'Loading...',
  modules: ['./MyComponent'],
  filename: 'options/actual.js'
});

export default AsyncComponent;
