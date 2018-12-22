import { Component, OnInit } from '@angular/core';
import { CalcularService } from './services/calculator.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myFirstApp';
  constructor(private router : Router,private x : CalcularService){

  }

  goToHome(){
this.router.navigate(['/',11])
  }

  ngOnInit(){
    console.log(this.x.add(2,5));
  }
}
