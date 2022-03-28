import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'madhuvan-minerals';
    opened = false;

    ngOnInit(): void {}
    close(reason: string) {
        this.opened = false;
        console.log('15');
    }
}
