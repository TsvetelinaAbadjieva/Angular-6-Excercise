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
  
  constructor(private sharedService: ShareDataService) { }

  ngOnInit() {}

  //this method will be called using Output decorator
  subscribeTo(_event: FormEventModel){
    console.log(_event);
    this.subscribedTo.emit(_event);
  }

  //this method for the logic using services and Observer will be called
  setSubscribedData(data: FormEventModel){
    console.log(data)
    this.sharedService.setCurrentData(data);
  }
}
