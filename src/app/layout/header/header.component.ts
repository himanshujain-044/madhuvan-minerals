import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    constructor() {}
    @Output() open: EventEmitter<any> = new EventEmitter();
    opened = false;

    ngOnInit(): void {}
    onToggleSidnav() {
        console.log('15child');

        this.open.emit();
    }
}
