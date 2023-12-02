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
  gandhijiImage = "gandhiji.png";
  subi = "subi.png";
  headerDetails: any;

  section(sectionName: any = null) {
    this.sectionName = sectionName;
  }

  /** Header Data selected  */
  headerData(headerDetails: any) {
    this.headerDetails = headerDetails;
    console.log(this.headerDetails, 'headerDetails');
  }
}
