import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
private list : any[] = [
  {name : 'Levis',pic : 'https://i2.wp.com/discountdukan.in/wp-content/uploads/2017/06/Levis-Clothing-80-Off-20-cashback.jpg?fit=208%2C232',id : 1},
  {name : 'John Players',pic : 'https://tvnews4u.com/wp-content/uploads/2018/09/be-young.jpg',id : 2}
]
  constructor() { }

  ngOnInit() {
  }

}
