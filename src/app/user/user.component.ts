import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private user : any;
  constructor(private httpClient : HttpClient,private x : ActivatedRoute) { }

  ngOnInit() {
    this.x.params.subscribe(
      (param)=>{
console.log('The id is ',param['id'])
//https://reqres.in/api/users/2
this.httpClient.get("https://reqres.in/api/users/"+param['id']).subscribe(
      (res) => {
        this.user = res;
        // console.log('The user list is ', JSON.stringify(x2.data))
      },
      (err) => {
        console.log('The error is ', err)
      }
    )
      }
    )
  }

}
