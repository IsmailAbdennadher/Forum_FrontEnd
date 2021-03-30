import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './Core/Guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{ path: '' , redirectTo:'home', pathMatch: 'full'},
 { path:'', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
