import LgP5 from "./p5.vue";

export default LgP5;

// `typeof Vue !== 'undefined'` prevents
// the "Vue is not defined" error
if (typeof Vue !== 'undefined' && Vue) {
  Vue.component('lg-p5', LgP5);
}
