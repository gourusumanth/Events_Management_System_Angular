import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event-service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {IEvent} from "./shared";
import { CurrencyPipe } from '@angular/common';

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            <div class="row" >
                <div class="col-md-5" *ngFor="let event of events">
                    <event-thumbnail  [event] = "event" ></event-thumbnail>
                </div>
            </div>
           
            
        </div>`

})
export class EventListComponent implements OnInit{
    events:IEvent[];
    constructor(private eventService: EventService,private route:ActivatedRoute){

    }

    ngOnInit(): void {
        console.log("inside event-list comp in oninit method");
        // this.eventService.getEvents().subscribe(events =>{this.events=events});
        this.events = this.route.snapshot.data['events'];

    }


}