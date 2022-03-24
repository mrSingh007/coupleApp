import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CostpageComponent } from './costpage.component';

const routes: Routes = [
  {
    path: '',
    component: CostpageComponent,
  },
];

@NgModule({
  declarations: [CostpageComponent],
  entryComponents: [],
  imports: [RouterModule.forChild(routes), TranslateModule],
})
export class CostModule {}
