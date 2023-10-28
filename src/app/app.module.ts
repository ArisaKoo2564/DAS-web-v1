import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateWorkComponent } from './components/create-work/create-work.component';
import { WorkListComponent } from './components/work-list/work-list.component';
import { ApproveComponent } from './components/approve/approve.component';
import { RejectComponent } from './components/reject/reject.component';
import { LogOutComponent } from './components/log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CreateWorkComponent,
    WorkListComponent,
    ApproveComponent,
    RejectComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
