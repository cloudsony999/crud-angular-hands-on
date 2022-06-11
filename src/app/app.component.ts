import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';
  
  u:User[]=[];
  constructor(private appSerice:AppService){

  }
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.appSerice.getUsers().subscribe(data=>{
      this.u=data;
    })
  }
  updateUser()
  {}
}
