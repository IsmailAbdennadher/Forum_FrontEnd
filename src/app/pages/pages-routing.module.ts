import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserpostsComponent } from './userposts/userposts.component';

const routes: Routes = [{ path: 'home', component : HomeComponent },
{ path: 'user/post', component : UserpostsComponent },
{ path: 'postdetails/:id', component : PostDetailsComponent },
{ path: 'testcomment', component : CommentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
