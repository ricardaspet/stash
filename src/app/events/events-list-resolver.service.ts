import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {}

    resolve() {
        return this.eventService.getEvents();// subscribe returnina subscibtiona, todel cia reikia naudot map
    } // resolveris events gauna is getEvents, route paima ir nusiuncia i routes
}// resolvery nereiks subscribint observable, subscribina automatiskai
