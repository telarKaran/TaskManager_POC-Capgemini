import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SprintsComponent } from './sprints/sprints.component';
import { DeveloperComponent } from './developer/developer.component';
import { TesterComponent } from './tester/tester.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    HomeComponent,
    TaskComponent,
    SideMenuComponent,
    SprintsComponent,
    DeveloperComponent,
    TesterComponent,
    CreateTaskComponent,
    EditTaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    TasksRoutingModule,
  ],
})
export class TasksModule {}
