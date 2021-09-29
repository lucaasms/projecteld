import { Component, HostListener } from '@angular/core';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['../app.component.css']
})
export class HomeComponent {
    public innerWidth: any;
    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.innerWidth = window.innerWidth;
    }
}