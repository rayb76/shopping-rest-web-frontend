import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemDataService } from '../service/data/item-data.service';

export class Item{
  constructor(
    public id: number,
    public listOfItems: string,
    public done: boolean,
    public targetDate: Date

  ){}
}

@Component({
  selector: 'app-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.css']
})
export class ListShopComponent implements OnInit {

  message!: string;

   item!: Item[];

   //   [
	 //   new Item(1,'Loaf of Bread', false, new Date()),
   //   new Item(2, 'Water', false, new Date()),
   //   new Item(3, 'One dozen Eggs', false, new Date())
   //   ]

  constructor(private itemService: ItemDataService,
              private router: Router) { }

  ngOnInit(){
    this.refreshItems();
  }




  refreshItems(){
    this.itemService.retrieveAllItems('Shopper').subscribe(
      response => {
        console.log(response)
        this.item = response;
        }
      )

  }

  deleteItem(id: any){
    console.log(`delete item ${id}`)
    this.itemService.deleteItem('Shopper', id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of Item ${id} Successful!`
        this.refreshItems();

      }

    )
  }

  updateItem(id: any){
    console.log(`update item ${id}`)
    this.router.navigate(['shop', id])
  }

  addItem()
  {
   this.router.navigate(['shop', -1])
  }



}
