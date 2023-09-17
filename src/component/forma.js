import {Result} from "./result";
export class FormCalc {
    constructor(formWrap, resultWrap) {
        this.formWrap = formWrap;
        this.resultWrap = resultWrap;
        this.btnReset = this.formWrap.querySelector('.form__reset-button');
        this.btnSubmit = this.formWrap.querySelector('.form__submit-button');
        this.init = this.init.bind(this);
        this.onResetHandle = this.onResetHandle.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }
    onSubmitHandle(evt, form){
        const result = new Result(form, this.resultWrap)
        result.calc();
    }
    onResetHandle(){
        this.btnReset.setAttribute('disabled', '');
        this.btnSubmit.setAttribute('disabled', '');
        this.resultWrap.classList.add('counter__result--hidden');
    }
    init(){
        const age = this.formWrap.querySelector('#age');
        const height = this.formWrap.querySelector('#height');
        const weight = this.formWrap.querySelector('#weight');
        this.formWrap.addEventListener('input', () => {
            this.btnReset.removeAttribute('disabled');
            this.btnReset.addEventListener('click', this.onResetHandle)
            if(this.formWrap.checkValidity() ){
                this.btnSubmit.removeAttribute('disabled');
            }
        })
        this.btnSubmit.addEventListener('click', (evt) => {
            evt.preventDefault();
            const form = new FormData(this.formWrap);
            this.onSubmitHandle(evt, form)
        })
    }

}
