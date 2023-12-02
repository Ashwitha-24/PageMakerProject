import { Component } from '@angular/core';

@Component({
  selector: 'custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent {

  // Define an array to hold objects
  selectedLayouts: { id: number, columns: [{ label: string }] }[] = [];
  layoutData: any = [
    {
      id: 1,
      columns: [
        {
          label: 12
        }
      ]
    },
    {
      id: 2,
      columns: [
        {
          label: 3
        },
        {
          label: 9
        }
      ]
    },
    {
      id: 3,
      columns: [
        {
          label: 4
        },
        {
          label: 8
        }
      ]
    },
    {
      id: 4,
      columns: [
        {
          label: 2
        },
        {
          label: 5
        },
        {
          label: 5
        }
      ]
    },
    {
      id: 5,
      columns: [
        {
          label: 2
        },
        {
          label: 6
        },
        {
          label: 4
        }
      ]
    },
    {
      id: 6,
      columns: [
        {
          label: 2
        },
        {
          label: 8
        },
        {
          label: 2
        }
      ]
    },
    {
      id: 7,
      columns: [
        {
          label: 3
        },
        {
          label: 3
        },
        {
          label: 3
        },
        {
          label: 3
        }
      ]
    },
    {
      id: 8,
      columns: [
        {
          label: 2
        },
        {
          label: 4
        },
        {
          label: 4
        },
        {
          label: 2
        }
      ]
    },
    {
      id: 9,
      columns: [
        {
          label: 4
        },
        {
          label: 4
        },
        {
          label: 4
        }
      ]
    },
    {
      id: 10,
      columns: [
        {
          label: 6
        },
        {
          label: 6
        }
      ]
    }
  ];

  selectLayout(selectedColumns: any) {
    this.selectedLayouts.push(selectedColumns);
  }
}
