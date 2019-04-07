import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { InventoryRoutingModule } from './inventory-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { ProductsComponent } from './products/products.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { InventoryComponent } from './inventory.component';

@NgModule({
  declarations: [InventoryComponent, CategoriesComponent, InventoryHomeComponent, ProductsComponent, StockEntryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule
  ]
})
export class InventoryModule { }
