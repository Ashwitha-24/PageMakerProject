import { Component } from '@angular/core';

@Component({
  selector: 'app-paper-editor',
  templateUrl: './paper-editor.component.html',
  styleUrls: ['./paper-editor.component.scss']
})
export class PaperEditorComponent {
  title = 'pagemaker';
  headerImage: any;
  sectionName: any
  headerDetails: any;
  selectImage: boolean = false;
  
  // Image Urls
  subi = "subi.png";
  headerImagePrefix = "assets/front_page_header/";
  advertiseImagePrefix = "assets/advertise/"
  gandhijiImage = "gandhiji.png";
  advertise_520_260 = "advertise_520_260.png";
  newspaper_dummy_header = "newspaper_dummy_header.png";
  header_5_right_image = "header_5_right.png";
  konark_image = "konark.jpg";
  header_8_left_image = "header_8_left.png";
  header_8_right_image = "header_8_right.jpg";

  section(sectionName: any = null) {
    this.sectionName = sectionName;
  }

  /** Header Data selected  */
  headerData(headerDetails: any) {
    this.headerDetails = headerDetails.headerData;
    this.selectImage = (this.headerDetails == 'select_image') ? true : false;
  }
}
