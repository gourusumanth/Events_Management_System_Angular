import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";
import {
    EventListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventListResolverService,
    CreateSessionComponent,
    SessionListComponent,

} from './events/index'
import {EventsAppComponent} from "./events-app.component";
import {NavbarComponent} from "./nav/navbar.component";
import {
    TOASTR_TOKEN,
    Toastr,
    CollapsibleWellComponent,
    JQ_TOKEN,
    SimpleModalComponent,
    ModalTriggerDirective
} from "./common/index";
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import {Error404Component} from "./errors/404.component";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DurationPipe} from "./events/shared/index";

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];
@NgModule({
 imports: [
     BrowserModule,
     ReactiveFormsModule,
     FormsModule,
 RouterModule.forRoot(appRoutes)],
 declarations: [EventsAppComponent,
     EventListComponent,ModalTriggerDirective,SimpleModalComponent,DurationPipe,CollapsibleWellComponent,SessionListComponent,CreateSessionComponent,CreateEventComponent,Error404Component,EventThumbnailComponent,NavbarComponent,EventDetailsComponent
 ],
 bootstrap: [EventsAppComponent],
 providers:[
     EventService,AuthService,EventListResolverService,EventRouteActivatorService,
     {provide:'canDeactivateCreateEvent', useValue: checkDirtyState},
     {provide:TOASTR_TOKEN, useValue: toastr},
     {provide:JQ_TOKEN, useValue: jQuery},

 ]
})
export class AppModule{}

export function checkDirtyState(component: CreateEventComponent){

 if(component.isDirty){
  return window.confirm('you have not saved this event, do you really want to cancel');
 }
 return true;


}