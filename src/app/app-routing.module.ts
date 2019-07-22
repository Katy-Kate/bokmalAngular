import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BabySideComponent} from './baby-side/baby-side.component';
import {ForAllComponent} from './for-all/for-all.component';

const routes: Routes = [
//  {path: '', component: ForAllComponent, pathMatch: 'full' },
  {path: '', redirectTo: 'baby-side', pathMatch: 'full' },
  {path: 'baby-side', component: BabySideComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
