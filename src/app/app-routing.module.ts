import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoremeComponent } from './storeme/storeme.component';

const router: Routes = [
  { path: '', redirectTo: 'shops', pathMatch: 'full' },
  { path: 'shops', component: StoremeComponent }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
