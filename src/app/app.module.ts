import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { HomeComponent } from './home/home.component';
import { CustomEditorComponent } from './custom-editor/custom-editor.component';
import { PaperEditorComponent } from './paper-editor/paper-editor.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    CustomLayoutComponent,
    CustomFooterComponent,
    HomeComponent,
    CustomEditorComponent,
    PaperEditorComponent,
    ProfileComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent
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
