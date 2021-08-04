export class CalculatorOperator {
  public labelList = [
    //row wise
    [
      {
        label: 'AC',
        className: 'double-width'
      },
      {
        label: '%',
        type: 'operator'
      },
      {
        label: '/',
        type: 'operator'
      }
    ],
    [
      {
        label: '7'
      },
      {
        label: '8'
      },
      {
        label: '9'
      },
      {
        label: '*',
        type: 'operator'
      }
    ],
    [
      {
        label: '4'
      },
      {
        label: '5'
      },
      {
        label: '6'
      },
      {
        label: '-',
        type: 'operator'
      }
    ],
    [
      {
        label: '3'
      },
      {
        label: '2'
      },
      {
        label: '1'
      },
      {
        label: '+',
        type: 'operator'
      }
    ],
    [
      {
        label: '0',
        className: 'double-width'
      },
      {
        label: '.'
      },
      {
        label: '=',
        type: 'operator'
      }
    ]
  ];
}

export interface interfaceLabelList {
  label: string;
  type?: string;
}
