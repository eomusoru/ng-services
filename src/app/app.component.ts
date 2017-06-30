import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  counter = 0;

  constructor (private usersService: UsersService, 
               private counterService: CounterService){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.counter = this.counterService.counter;
  }

}
