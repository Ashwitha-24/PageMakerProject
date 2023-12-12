import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PaperEditorComponent } from './paper-editor/paper-editor.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'editor', component: PaperEditorComponent
  },
  {
    path: 'profile', component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
