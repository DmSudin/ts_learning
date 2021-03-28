import {Component, OnInit} from '@angular/core';
import {syncMeter, asyncMeter} from '$helpers/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'education-angular';

    constructor() {}

    ngOnInit(): void {
        syncMeter(console.log, 'Console', 10)(111);
        console.log('test');
    }

}



