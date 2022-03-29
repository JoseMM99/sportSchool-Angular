import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PeriodsComponent } from './periods/periods.component';
import { ActivitiesComponent } from './activities/activities.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { SuperAdministratorsComponent } from './super-administrators/super-administrators.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
            { path: 'periods', component: PeriodsComponent, data: { titulo: 'Periodos' }},
            { path: 'activities', component: ActivitiesComponent, data: { titulo: 'Actividades' }},
            { path: 'student', component: StudentsComponent, data: { titulo: 'Estudiantes' }},
            { path: 'teachers', component: TeachersComponent, data: { titulo: 'Entrenadores' }},
            { path: 'administrators', component: AdministratorsComponent, data: { titulo: 'Administradores' }},
            { path: 'superadministrators', component: SuperAdministratorsComponent, data: { titulo: 'Super-Administradores' }},
            { path: 'assignments', component: AssignmentsComponent, data: { titulo: 'Evaluaciones' }},
            { path: 'roles', component: RolesComponent, data: { titulo: 'Roles' }},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


