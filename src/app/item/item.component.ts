import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../list-shop/list-shop.component';
import { ItemDataService } from '../service/data/item-data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: number = this.route.snapshot.params['id'];
  item: Item = new Item(1, '', false, new Date());

  constructor(
    private itemService:ItemDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.item = new Item(this.id, '', false, new Date());
    if(this.id!=-1) {
    this.itemService.retrieveItem('Shopper', this.id)
          .subscribe (
            data => this.item = data
          )
      }
  }

  saveItem(){
    if(this.id==-1){
      //Create todo
    this.itemService.createItem('Shopper', this.item)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['shop'])
        }
      )
      }else{
      this.itemService.updateItem('Shopper', this.id, this.item)
      .subscribe(
       data => {
        console.log(data)
        this.router.navigate(['shop'])
        }
      )
    }
  }

}
