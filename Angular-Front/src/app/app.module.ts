import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';


import { AuthService } from './services/auth.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageLeavesComponent } from './components/manage-leaves/manage-leaves.component';
import { HomeComponent } from './components/home/home.component';
import { RequestLeavesComponent } from './components/request-leaves/request-leaves.component';
import { LeaveHistoryComponent } from './components/leave-history/leave-history.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ReportGenarationComponent } from './components/report-genaration/report-genaration.component';
import { GrantAccessComponent } from './components/grant-access/grant-access.component';
import { ViewUserComponent } from './components/view-user/view-user.component';




const applicationRoutes:Routes = [
    
    {path:'login',component:LoginComponent},
    {path:'manageUsers',component:ManageUsersComponent},
    {path:'profile',component:ProfileComponent},
    {path:'home',component:HomeComponent},
    {path:'requestLeaves',component:RequestLeavesComponent},
    {path:'leaveHistory',component:LeaveHistoryComponent},
    {path:'addPost',component:AddPostComponent},
    {path:'reportGenaration',component:ReportGenarationComponent},
    {path:'manageLeaves',component:ManageLeavesComponent},
    {path:'grantAccess',component:GrantAccessComponent},
    {path:'viewUser',component:ViewUserComponent}
   
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    ManageUsersComponent,
    ManageLeavesComponent,
    HomeComponent,
    RequestLeavesComponent,
    LeaveHistoryComponent,
    AddPostComponent,
    ReportGenarationComponent,
    GrantAccessComponent,
    ViewUserComponent,
    
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(applicationRoutes),
    FlashMessagesModule
    
  ],
  providers: [AuthService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
