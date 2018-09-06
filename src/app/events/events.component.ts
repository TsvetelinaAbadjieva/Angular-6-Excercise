import { Component, OnInit } from '@angular/core';
import {FormEventModel} from '../event/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events : any[];
  subscribedEvents: any[] = [];

  constructor() {
    this.events = [
      {
        title: 'Title 1',
        teaser:'teaser 1',
        startDate: 'date1',
        endDate: 'date 2',
        startTime: 'time 1',
        endTime: 'time 2',
        body: 'Alalbaba2',
        participants:['Pesho','Gosho']
      },
      {
        title: 'Title 2',
        teaser:'teaser 2',
        startDate: 'date2',
        endDate: 'date 2',
        startTime: 'time 12',
        endTime: 'time 22',
        body: 'Alalbaba2',
        participants:['Ani','Gery']

      },
    ];
  }

  ngOnInit() {
    console.log(this.events);
  }
  getSubscribedEvents(event: FormEventModel){
    this.subscribedEvents.push(event);
  }
}
