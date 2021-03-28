import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserpostsComponent } from './userposts/userposts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [HomeComponent, UserpostsComponent, CommentComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule { }
