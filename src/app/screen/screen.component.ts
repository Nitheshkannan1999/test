import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CafeserviceService } from '../cafeservice.service';
import { CatergoryDish } from './CatergoryDish';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

 @ViewChild('navbar')
  navbar!: ElementRef;
  title : string = "";
  order : number = 0;
  source : any;
  table_menu_list : any[] = [];
  ItemsUnderCategories : any[] = [];
  constructor(public cafeserviceService : CafeserviceService) { }

  ngOnInit(): void {
    this.cafeserviceService.getData().subscribe(data =>
      {
        this.source = data;
        this.title =data[0].restaurant_name;
        this.table_menu_list = this.source[0].table_menu_list;
        this.table_menu_list.forEach((list) =>{
          list.category_dishes.forEach((dish : any) =>{
              dish["value"] = 0;
          })
      })
        this.ItemsUnderCategories = this.table_menu_list[0]?.category_dishes;
      })
   
  }

  changeCategory(param : string)
  {
    
      this.table_menu_list.forEach((iterlist) =>
      {
       
        if(iterlist.menu_category === param)
        {
          
          this.ItemsUnderCategories = iterlist.category_dishes;
          
        }
      } )
  }
 
  incr(dish : CatergoryDish)
  {
    
    dish.value = dish.value+1;
    this.order = this.order+1;

  }

  decr(dish : CatergoryDish)
  {
    dish.value = dish.value-1;
    if(dish.value>=0)
    {
    this.order = this.order-1;
    }
    if(this.order < 0)
    {
      this.order = 0;
    }
    if(dish.value < 0)
    {
      dish.value = 0;
    }
  }

}
