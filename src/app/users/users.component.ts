import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.httpClient.get("https://reqres.in/api/users?page=2").subscribe(
      (res) => {
        let x1 = JSON.stringify(res);
        let x2 = JSON.parse(x1);
        this.users = x2.data;
        // console.log('The user list is ', JSON.stringify(x2.data))
      },
      (err) => {
        console.log('The error is ', err)
      }
    )
  }

}
