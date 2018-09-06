import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  _users : Object; 

  constructor(private data: UserService) { }

  ngOnInit() {
    return this.data.getUsers().subscribe(data => this._users = data);
  }

}
