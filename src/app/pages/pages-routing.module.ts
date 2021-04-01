import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Core/Guards/auth.guard';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserpostsComponent } from './userposts/userposts.component';
import { UserprofilComponent } from './userprofil/userprofil.component';

const routes: Routes = [{ path: 'home', component : HomeComponent, canActivate : [AuthGuard] },
{ path: 'user/post', component : UserpostsComponent, canActivate : [AuthGuard] },
{ path: 'postdetails/:id', component : PostDetailsComponent, canActivate : [AuthGuard] },
{ path: 'user/profile/:action', component : UserprofilComponent, canActivate : [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
