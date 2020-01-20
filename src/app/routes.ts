import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
} from './events/index';
import { Error404Component } from './errors/404.component';


export const appRoutes: Routes = [ // importavus ir pridejus Routes gaunamas intelisense
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] }, // svarbu, kad pirmiau nes :id uzskaitys new
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} }, // jei url baigias events, atidaro ta komponenta. Events gauna is resolverio ir siuncia i list componenta
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} }, // : pries id reiskia kad id yra parametras
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }, // defaultinis rootas (prefix arba full pathMatch)
    { path: 'user', loadChildren: './user/user.module#UserModule' } // kai prasideda user - loadina UserModule is loadChildren
];
