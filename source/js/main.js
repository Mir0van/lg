import {iosVhFix} from './utils/ios-vh-fix';
import {initValidate} from './modules/validate/input-validate';
import {Burger} from './modules/burger/burger';
import {scrollToTop} from './modules/burger/scroll-to-top';
import {initRotateImg} from './modules/spin/spin';
import {getData} from './modules/api/api';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();

  // Modules
  // ---------------------------------
  getData();
  const burger = new Burger();
  burger.init();

  window.addEventListener('load', () => {
    scrollToTop();
    initRotateImg();
    initValidate();
  });
});
