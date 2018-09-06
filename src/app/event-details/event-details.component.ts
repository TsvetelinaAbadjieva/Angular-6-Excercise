import { Component, OnInit, EventEmitter } from '@angular/core';
import {Input, Output} from '@angular/core';
import {FormEventModel} from '../event/event.model';
import {ShareDataService} from '../services/share-data.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})

export class EventDetailsComponent implements OnInit {
  @Input() event;
  @Input() index;
  @Output() subscribedTo = new EventEmitter<FormEventModel>();

  eventModel: FormEventModel;
  sharedService: ShareDataService;
  // constructor(private sharedService: ShareDataService) { }
  constructor() { 
    this.sharedService = new ShareDataService();
  }

  ngOnInit() {}

  subscribeTo(_event: FormEventModel){
    console.log(_event);
    this.subscribedTo.emit(_event);
  }
  setSubscribedData(data: FormEventModel){
    console.log(data)
    this.sharedService.setCurrentData(data);
  }
}
