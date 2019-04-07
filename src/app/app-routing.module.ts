import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManagerModule } from './manager/manager.module';
import { UserModule } from './user/user.module';
import { InventoryModule } from './inventory/inventory.module';
import { PosModule } from './pos/pos.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent  },
  { path: 'manager', loadChildren: () => ManagerModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'inventory', loadChildren: () => InventoryModule },
  { path: 'pos', loadChildren: () => PosModule },
  { path: '***', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
