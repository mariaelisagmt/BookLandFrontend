import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookFormComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  { path: 'admin/status', component: BookFormComponent },
  { path: 'admin/archives', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
