import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
