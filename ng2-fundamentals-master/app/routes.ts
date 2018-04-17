import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventListResolverService,
    CreateSessionComponent
} from './events/index'
import {Routes} from '@angular/router'
import {Error404Component} from "./errors/404.component";
// import {CreateSessionComponent} from "./events/event-details";

export const appRoutes:Routes = [
    {path:'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events', component: EventListComponent, resolve:{events:EventListResolverService}},
    {path:'events/:id', component: EventDetailsComponent,canActivate:[EventRouteActivatorService]},
    {path:'events/session/new', component: CreateSessionComponent},
    {path:'404', component: Error404Component},
    {path:'', redirectTo:'/events',pathMatch:'full'},
    {path:'user', loadChildren: 'app/user/user.module#UserModule'}

]