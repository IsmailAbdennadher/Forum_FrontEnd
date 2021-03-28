import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserpostsComponent } from './userposts/userposts.component';

const routes: Routes = [{ path: 'home', component : HomeComponent },
{ path: 'user/post', component : UserpostsComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
