import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  _user: Object;

  constructor(private route: ActivatedRoute, private data: UserService) {
    this.route.params.subscribe(params => this._user = params.id )
   }

  ngOnInit() {
    this.data.getUserDetails(this._user)
        .subscribe(data => {
          this._user = data;
          this._user['photo'] = 'https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png';
          console.log(this._user['photo']);
        });
  }

}
