import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Menú',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Periodos', url: 'periods' },
        { titulo: 'Actividades', url: 'activities' },
        { titulo: 'Estudiantes', url: 'student' },
        { titulo: 'Entrenadores', url: 'teachers' },
        { titulo: 'Administradores', url: 'administrators' },
        { titulo: 'Super-Administradores', url: 'superadministrators' },
        { titulo: 'Roles', url: 'roles' },
      ]
    },
  ];

  constructor() { }
}
