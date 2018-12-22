import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
private brandItems : any[] = [
{id : 1 , items : [
{name : 'Shirt Collection',id : 1,pic : ''},
{name : 'Pant Collection',id : 2,pic : ''},
{name : 'Blazer Collection',id : 3,pic : ''}
]},
{id : 2 , items : [
  {name : 'Shirt Collection',id : 1,pic : ''},
{name : 'Belt Collection',id : 2,pic : ''},
{name : 'Shoes Collection',id : 3,pic : ''}
]}

]
private collections : any[] = [];
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param)=>{
      console.log('The parameter is ',param['id'])
      this.collections = this.brandItems.filter((item)=>{
return item.id==param['id'];
    })
    // this.collections = col
    })
  }

}
