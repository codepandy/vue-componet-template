import MyComponent from './MyComponent.vue';

MyComponent.install=function(Vue){
  Vue.component('MyComponent', MyComponent)
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(MyComponent);
    }
}

export default MyComponent;
