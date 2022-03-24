import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage.component';

const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
];

@NgModule({
  declarations: [Homepage],
  entryComponents: [],
  imports: [RouterModule.forChild(routes)],
})
export class HomeModule {}
