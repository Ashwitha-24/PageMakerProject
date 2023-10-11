import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
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
  }
}
