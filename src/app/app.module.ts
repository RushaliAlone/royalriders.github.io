import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { RoyalError } from './ErrorPage/error.component';
import { RoyalEvent } from './Events/event.component';
import { RoyalOne } from './extra/one.component';
import { RoyalThree } from './extra/three.component';
import { RoyalTwo } from './extra/two.component';
import { RoyalFeedBack } from './feedback/feedback.component';
import { RoyalHome } from './Home/home.component';
import { RoyalMember } from './Members/member.component';
import { RoyalRegister } from './Registration/register.component';

@NgModule({
  declarations: [
    AppComponent,RoyalError,RoyalEvent,RoyalHome,RoyalMember,RoyalOne,RoyalTwo,RoyalThree,RoyalRegister,RoyalFeedBack
  ],
  imports: [
    BrowserModule,routing,FormsModule,RouterModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
