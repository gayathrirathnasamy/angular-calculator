import { Component, OnInit } from '@angular/core';
import { CalculatorOperator } from './calculator-operator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operand1: string = '';
  operand2: string = '';
  operator: string = '';
  result: string = '';
  operatorLabels: CalculatorOperator = new CalculatorOperator();
  constructor() {}

  ngOnInit() {
    console.log(this.operatorLabels);
    this.operatorLabels.labelList.forEach(item => {
      item.forEach(label => console.log(label));
    });
  }

  operation(item) {
    if (item.type && item.type === 'operator' && this.result !== '') {
      this.operand1 = this.result;
      this.operand2 = '';
      this.result = '';
    }
    switch (item.label) {
      case 'AC': {
        this.operand1 = '';
        this.operand2 = '';
        this.operator = '';
        this.result = '';
        break;
      }
      case '%': {
        if (
          this.operand1 !== '' &&
          this.operand2 !== '' &&
          this.operator === '%'
        ) {
          this.result = (
            parseFloat(this.operand1) % parseFloat(this.operand2)
          ).toString();
        } else {
          this.operator = '%';
        }
        break;
      }
      case '/': {
        if (
          this.operand1 !== '' &&
          this.operand2 !== '' &&
          this.operator === '/'
        ) {
          this.result = (
            parseFloat(this.operand1) / parseFloat(this.operand2)
          ).toString();
        } else {
          this.operator = '/';
        }
        break;
      }
      case '*': {
        if (
          this.operand1 !== '' &&
          this.operand2 !== '' &&
          this.operator === '*'
        ) {
          this.result = (
            parseFloat(this.operand1) * parseFloat(this.operand2)
          ).toString();
        } else {
          this.operator = '*';
        }
        break;
      }
      case '-': {
        if (
          this.operand1 !== '' &&
          this.operand2 !== '' &&
          this.operator === '-' &&
          this.result === ''
        ) {
          this.result = (
            parseFloat(this.operand1) - parseFloat(this.operand2)
          ).toString();
        } else {
          this.operator = '-';
        }
        break;
      }
      case '+': {
        if (
          this.operand1 !== '' &&
          this.operand2 !== '' &&
          this.operator === '+' &&
          this.result === ''
        ) {
          this.result = (
            parseFloat(this.operand1) + parseFloat(this.operand2)
          ).toString();
        } else {
          this.operator = '+';
        }
        break;
      }
      case '=': {
        this.operation({ label: this.operator });
      }
      default: {
        if (this.operator === '') {
          this.operand1 = this.operand1 + item.label;
        } else if (this.operator !== '') {
          this.operand2 = this.operand2 + item.label;
        }
      }
    }
  }
}
