import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from '@items/ui-libraries';
import { WildcardComponent } from '@items/ui-libraries';
import { ItemsItemComponent } from './items/items-item/items-item.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildcardComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemsItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}

