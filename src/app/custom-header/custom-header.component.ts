import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent {

  @Output() headerData = new EventEmitter<any>();
  activeTabIndex = 1;
  activateTab(index: number): void {
    this.activeTabIndex = index;
  }
  headerImagePrefix = "assets/front_page_header/";
  dynamicHtml: any;

  header_images = [
    { 
      'image': 'header_1.png', 
      'editType': 'text_edit' 
    },
    { 
      'image': 'header_2.png', 
      'editType': 'text_edit' 
    },
    { 
      'image': 'header_3.png', 
      'editType': 'text_edit' 
    },
    { 
      'image': 'header_4.png', 
      'editType': 'text_edit' 
    },
    { 
      'image': 'header_5.png', 
      'editType': 'text_edit' 
    },
    { 
      'image': 'header_6.png', 
      'editType': 'text_edit' 
    }
  ];

  /** Add Header Image to Page */
  addHeaderImage(imageName: String) {
    this.headerData.emit({ imageName: imageName });
  }

}
