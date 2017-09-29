import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    component: ComponentName
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
