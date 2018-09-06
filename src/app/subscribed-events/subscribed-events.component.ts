import { Component, OnInit } from '@angular/core';
import { ShareDataService} from '../services/share-data.service';
import {Observable} from 'rxjs';
import {FormEventModel} from '../event/event.model'

@Component({
  selector: 'app-subscribed-events',
  templateUrl: './subscribed-events.component.html',
  styleUrls: ['./subscribed-events.component.scss']
})

export class SubscribedEventsComponent implements OnInit {

  subscribedEventsAsService: FormEventModel[] = [];

  constructor(private sharedService: ShareDataService) { }

  ngOnInit() {
    this.sharedService.customData.subscribe(data => {this.subscribedEventsAsService.push(data); console.log(data)});
  }

}
