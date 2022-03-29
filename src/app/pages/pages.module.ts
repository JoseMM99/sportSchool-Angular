import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PeriodsComponent } from './periods/periods.component';
import { ActivitiesComponent } from './activities/activities.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { SuperAdministratorsComponent } from './super-administrators/super-administrators.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RolesComponent } from './roles/roles.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    PeriodsComponent,
    ActivitiesComponent,
    StudentsComponent,
    TeachersComponent,
    AdministratorsComponent,
    SuperAdministratorsComponent,
    AssignmentsComponent,
    RolesComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
