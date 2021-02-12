class CalcController {

    constructor() {
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._hourEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize() {
       
        this._dateEl.innerHTML = "27/05"
        this._hourEl.innerHTML = "10:15"
    }



    get displayCalc() {
        return this._displayCalEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date;
    }

    set currentDate(value) {
        this._currentDate = value;
    }







}