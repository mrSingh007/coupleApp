import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GrocerypageComponent } from './grocerypage.component';

const routes: Routes = [
  {
    path: '',
    component: GrocerypageComponent,
  },
];

@NgModule({
  declarations: [GrocerypageComponent],
  entryComponents: [],
  imports: [RouterModule.forChild(routes), TranslateModule],
})
export class GroceryModule {}
