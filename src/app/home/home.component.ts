import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'pagemaker';
  headerImage: any;
  sectionName: any
  headerImagePrefix = "assets/front_page_header/";
  advertiseImagePrefix = "assets/advertise/"
  gandhijiImage = "gandhiji.png";
  advertise_520_260 = "advertise_520_260.png";
  newspaper_dummy_header = "newspaper_dummy_header.png";
  subi = "subi.png";
  headerDetails: any;
  selectImage: boolean = false;

  section(sectionName: any = null) {
    this.sectionName = sectionName;
  }

  /** Header Data selected  */
  headerData(headerDetails: any) {
    this.headerDetails = headerDetails.headerData;
    this.selectImage = (this.headerDetails == 'select_image') ? true : false;
  }
}
