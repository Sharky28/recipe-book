import {Routes, RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list.component";

const SHOPPING_LIST_ROUTING: Routes = [
  {path: '', component: ShoppingListComponent}
];

export const shoppingListRouting = RouterModule.forChild(SHOPPING_LIST_ROUTING);
