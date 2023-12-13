import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CreateWorkComponent } from './components/create-work/create-work.component';
import { WorkListComponent } from './components/work-list/work-list.component';
import { ApproveComponent } from './components/approve/approve.component';
import { RejectComponent } from './components/reject/reject.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditWorkComponent } from './components/edit-work/edit-work.component';

import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api'; //api
import { ButtonModule } from 'primeng/button';

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
    LogOutComponent,
    EditWorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PaginationModule,
    FormsModule,
    TableModule,
    AccordionModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
