import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    CustomLayoutComponent,
    CustomFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
