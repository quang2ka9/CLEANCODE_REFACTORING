export class Calculator {
    static readonly ADDITION = '+';
    static readonly SUBTRACTION = '-';
    static readonly MULTIPLICATION = '*';
    static readonly DIVISION = '/';

    public static calculate(afirstOperand: number, secondOperand: number, operator: string): number {
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
                break
            default:
                console.log('Unsupported operation');
        }
    }
}