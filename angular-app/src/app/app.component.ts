import { Component } from '@angular/core';
import { ParentSignalComponent } from './sandbox/components/signal/parent-signal/parent-signal.component';

@Component({
    selector: 'app-root',
    imports: [ParentSignalComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {}
