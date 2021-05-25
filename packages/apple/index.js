import Apple from './src/main';

/* istanbul ignore next */
Apple.install = function(Vue) {
  Vue.component(Apple.name, Apple);
};

export default Apple;
