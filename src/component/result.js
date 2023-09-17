const Activity = {
    MIN: 1.2,
    LOW: 1.375,
    MEDIUM: 1.55,
    HIGH: 1.725,
    MAX: 1.9
}
const Gender = {
    MALE: 5,
    FEMALE: 161
}
const InputMultiplier = {
    AGE: 5,
    WEIGHT: 10,
    HEIGHT: 6.25
}
const MultiplierKcal = {
    MIN: 0.85,
    MAX: 1.15
}
export class Result {
    constructor(form, result) {
        this.form = form;
        this.result = result;
    }
    calc(){
        this.result.classList.remove('counter__result--hidden');
        let normaKcal;

        if (this.form.get('gender') === 'male'){
            normaKcal = (InputMultiplier.WEIGHT * Number(this.form.get('weight'))) + (InputMultiplier.HEIGHT * Number(this.form.get('height'))) - (InputMultiplier.AGE * Number(this.form.get('age'))) + Gender.MALE;
        } else if (this.form.get('gender') === 'female'){
            normaKcal = (InputMultiplier.WEIGHT * Number(this.form.get('weight'))) + (InputMultiplier.HEIGHT * Number(this.form.get('height'))) - (InputMultiplier.AGE * Number(this.form.get('age'))) - Gender.FEMALE;
        }
        switch (this.form.get('activity')) {
            case 'min' : normaKcal *= Activity.MIN;
            break;
            case 'low' : normaKcal *= Activity.LOW;
                break;
            case 'medium' : normaKcal *= Activity.MEDIUM;
                break;
            case 'high' : normaKcal *= Activity.HIGH;
                break;
            case 'max' : normaKcal *= Activity.MAX;
                break;
        }
        this.result.querySelector('#calories-norm').textContent = Math.round(normaKcal).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        this.result.querySelector('#calories-minimal').textContent = Math.round(normaKcal * MultiplierKcal.MIN).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        this.result.querySelector('#calories-maximal').textContent = Math.round(normaKcal * MultiplierKcal.MAX).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    }
}
