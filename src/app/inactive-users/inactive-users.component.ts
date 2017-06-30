import { Component, Input, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor (private usersService: UsersService) {}

  onSetToActive(id: number) {
    this.usersService.setActive(id);
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.users = this.usersService.inactiveUsers;
  }
}
