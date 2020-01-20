import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component ({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date | date:'shortDate'}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{event?.price | currency:'EUR'}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.adress}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online Url: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .bold { font-weight: bold; }
        .green { color: green !important; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb }
        .thumbnail { min-heihght: 210px; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent; // input pasako angularui, kad eventas bus paimtas is kito komponento

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};

        // if(this.event && this.event.time === '8:00 am')
        //     return 'green bold';
        // return '';
        //    ARBA tinka abu
        //     return ['green', 'bold']
        // return[]
    }
}
