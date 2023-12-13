import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateWorkComponent } from './components/create-work/create-work.component';
import { WorkListComponent } from './components/work-list/work-list.component';
import { RejectComponent } from './components/reject/reject.component';
import { ApproveComponent } from './components/approve/approve.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { EditWorkComponent } from './components/edit-work/edit-work.component';

const routes: Routes = [
  { path: '', component: WorkListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-work', component: CreateWorkComponent },
  { path: 'work-list', component: WorkListComponent },
  { path: 'approve', component: ApproveComponent },
  { path: 'reject', component: RejectComponent },
  { path: 'log-out', component: LogOutComponent },
  { path: 'inprogress', component: InprogressComponent },
  { path: 'edit-work', component: EditWorkComponent },
  { path: '**', component: HomeComponent },
  // เพิ่มเส้นทางอื่น ๆ ตรงนี้
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
