import { Component, OnInit } from '@angular/core';
import { Store, select}  from '@ngrx/store'
import {IStateEvent, ISingleEvent} from '../store/event'
import { Observable } from 'rxjs';

import {eventsFeature} from '../store/events.selectors'
@Component({
  selector: 'app-admin-events-list',
  templateUrl: './admin-events-list.component.html',
  styleUrls: ['./admin-events-list.component.css']
})
export class AdminEventsListComponent implements OnInit {

  events:Observable<any>
  constructor( private store:Store<IStateEvent>) { }

  ngOnInit() {
    this.events =this.store.pipe(select(eventsFeature) )
  }

}
