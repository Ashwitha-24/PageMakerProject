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
      'image': 'header_3.png',
      'editType': 'text_edit',
      'html': "<div class=mt-3><span class=channel_name>Channel Name</span><br><span class='channel_description'>इंदरगढ़ &gt; दतिया &gt; ग्वालियर &gt; भिंड &gt; मोरेना </span></div>"
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
    },
    {
      'image': 'header_1.png',
      'editType': 'text_edit'
    },
    {
      'image': 'header_2.png',
      'editType': 'text_edit'
    }
  ];

  /** Add Header Image to Page */
  addHeaderImage(html: any) {
    this.headerData.emit({ html: html });
  }

}