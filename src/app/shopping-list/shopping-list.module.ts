import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {shoppingListRouting} from "./shopping-list.routing";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports:[
    FormsModule,
    CommonModule,
    shoppingListRouting
  ],

})
export class ShoppingListModule {

}
