import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { SprintsComponent } from './sprints/sprints.component';
import { AuthGuardService } from '../auth-guard.service';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DeveloperComponent } from './developer/developer.component';
import { TesterComponent } from './tester/tester.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: TaskComponent },
      { path: 'create-task', component: CreateTaskComponent },
      { path: 'edit-task/:id', component: EditTaskComponent },
      { path: 'tasks', component: TaskComponent },
      { path: 'sprints', component: SprintsComponent },
      { path: 'developer', component: DeveloperComponent },
      { path: 'tester', component: TesterComponent },
    ],
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
