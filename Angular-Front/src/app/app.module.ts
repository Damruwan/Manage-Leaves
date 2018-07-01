import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BsDatepickerModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageLeavesComponent } from './components/manage-leaves/manage-leaves.component';
import { HomeComponent } from './components/home/home.component';
import { RequestLeavesComponent } from './components/request-leaves/request-leaves.component';
import { LeaveHistoryComponent } from './components/leave-history/leave-history.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ReportGenarationComponent } from './components/report-genaration/report-genaration.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ManageAdminComponent } from './components/manage-admin/manage-admin.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { CreatePDFComponent } from './components/create-pdf/create-pdf.component';
import { ControlDatesComponent } from './components/control-dates/control-dates.component';



import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { RequestService } from './services/request.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthguardService } from './services/authguard.service';








const applicationRoutes:Routes = [
    
    {path:'login',component:LoginComponent},
    {path:'manageUsers',component:ManageUsersComponent,canActivate: [AuthguardService], data: {roles: ['Admin']}},
    {path:'profile',component:ProfileComponent,canActivate: [AuthguardService], data: {roles: ['All']}},
    {path:'home',component:HomeComponent},
    {path:'requestLeaves',component:RequestLeavesComponent,canActivate: [AuthguardService], data: {roles: ['Admin&Staff']}},
    {path:'leaveHistory',component:LeaveHistoryComponent,canActivate: [AuthguardService], data: {roles: ['Admin&Staff']}},
    {path:'addPost',component:AddPostComponent,canActivate: [AuthguardService], data: {roles: ['Head&Admin']}},
    {path:'reportGenaration',component:ReportGenarationComponent,canActivate: [AuthguardService], data: {roles: ['Admin']}},
    {path:'manageLeaves',component:ManageLeavesComponent,canActivate: [AuthguardService], data: {roles: ['Head']}},
    {path:'viewUser',component:ViewUserComponent,canActivate: [AuthguardService], data: {roles: ['Head']}},
    {path:'manageAdmin',component:ManageAdminComponent,canActivate: [AuthguardService], data: {roles: ['Head']}},
    {path:'updateUser',component:UpdateUserComponent,canActivate: [AuthguardService], data: {roles: ['Head']}},
    {path:'updatePost',component:UpdatePostComponent,canActivate: [AuthguardService], data: {roles: ['Head&Admin']}},
    {path:'createPDF',component:CreatePDFComponent,canActivate: [AuthguardService], data: {roles: ['Admin']}},
    {path:'controlDates',component:ControlDatesComponent,canActivate: [AuthguardService], data: {roles: ['Head']}}
   
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
    ViewUserComponent,
    ManageAdminComponent,
    UpdateUserComponent,
    UpdatePostComponent,
    CreatePDFComponent,
    ControlDatesComponent,
    
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(applicationRoutes),
    FlashMessagesModule
    
  ],
  providers: [AuthService, RequestService, PostService, FlashMessagesService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
