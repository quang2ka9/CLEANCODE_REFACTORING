"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculate = function (afirstOperand, secondOperand, operator) {
        switch (operator) {
            case this.ADDITION:
                return afirstOperand + secondOperand;
            case this.SUBTRACTION:
                return afirstOperand - secondOperand;
            case this.MULTIPLICATION:
                return afirstOperand * secondOperand;
            case this.DIVISION:
                return afirstOperand / secondOperand;
                if (secondOperand != 0)
                    return afirstOperand / secondOperand;
                else
                    console.log('Can not divide by 0');
                break;
            default:
                console.log('Unsupported operation');
        }
    };
    Calculator.ADDITION = '+';
    Calculator.SUBTRACTION = '-';
    Calculator.MULTIPLICATION = '*';
    Calculator.DIVISION = '/';
    return Calculator;
}());
exports.Calculator = Calculator;
