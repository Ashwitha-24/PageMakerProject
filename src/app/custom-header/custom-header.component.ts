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
  otherHeaderImagePrefix = "assets/front_page_other_header/";
  dynamicHtml: any;

  header_images = [
    {
      'image': 'header_1.png',
      'editType': 'text_edit',
      'id': 'header_1'
    },
    {
      'image': 'header_2.png',
      'editType': 'text_edit',
      'id': 'header_2'
    },
    {
      'image': 'header_3.png',
      'editType': 'text_edit',
      'id': 'header_3'
    },
    {
      'image': 'header_4.png',
      'editType': 'text_edit',
      'id': 'header_4'
    },
    {
      'image': 'header_5.png',
      'editType': 'text_edit',
      'id': 'header_5'
    },
    {
      'image': 'header_6.png',
      'editType': 'text_edit',
      'id': 'header_6'
    },
    {
      'image': 'header_7.png',
      'editType': 'text_edit',
      'id': 'header_7'
    },
    {
      'image': 'header_8.png',
      'editType': 'text_edit',
      'id': 'header_8'
    },
    {
      'image': 'header_9.png',
      'editType': 'text_edit',
      'id': 'header_9'
    },
    {
      'image': 'header_10.png',
      'editType': 'text_edit',
      'id': 'header_10'
    },
    {
      'image': 'header_11.png',
      'editType': 'text_edit',
      'id': 'header_11'
    }
  ];

  other_header_images = [
    {
      'image': 'other_header_1.png'
    },
    {
      'image': 'other_header_2.png'
    },
    {
      'image': 'other_header_3.png'
    },
    {
      'image': 'other_header_4.png'
    },
    {
      'image': 'other_header_5.png'
    },
    {
      'image': 'other_header_6.png'
    },
    {
      'image': 'other_header_7.png'
    },
    {
      'image': 'other_header_8.png'
    },
    {
      'image': 'other_header_9.png'
    },
    {
      'image': 'other_header_10.png'
    },
    {
      'image': 'other_header_11.png'
    },
    {
      'image': 'other_header_12.png'
    },
    {
      'image': 'other_header_13.png'
    },
    {
      'image': 'other_header_14.png'
    }
  ];

  /** Add Header Image to Page */
  addHeaderImage(headerData: any) {
    this.headerData.emit({ headerData: headerData });
  }

}
