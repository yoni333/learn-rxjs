import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addEvent, ISingleEvent } from '../store/event'

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit() {
  }

  add(  ) {
    this.store.dispatch(addEvent( this.createEvent()));

  }
  createEvent():ISingleEvent{
    return {
      id:1,
      name: 'yoni',
      city: 'jerusalem',
      address: 'tavin 22',
      createdAt: new Date(),
      text: 'i need driver to the market'
    }
  }

}
