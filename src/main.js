import {FormCalc} from './component/forma';
const formWrapper = document.querySelector('.counter__form');
const resultWrapper = document.querySelector('.counter__result');

const formCalc = new FormCalc(formWrapper, resultWrapper)
formCalc.init();
