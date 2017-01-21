import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "./shopping-list.service";
import {Ingredient} from "../ingredient";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',

})
export class ShoppingListAddComponent implements OnInit {
items:Ingredient[]=[];
  constructor(private sls:ShoppingListService) { }

  ngOnInit() {
    this.items= this.sls.getItems();
  }

}
