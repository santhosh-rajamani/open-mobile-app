import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoOpenComponent } from './auto-open/auto-open.component';
import { ManualOpenComponent } from './manual-open/manual-open.component';

const routes: Routes = [
  { path: 'open-mobile-auto', component: AutoOpenComponent },
  { path: 'open-mobile-manual', component: ManualOpenComponent },
  { path: '', redirectTo: '/open-mobile-auto', pathMatch: 'full' }, // Default route
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
