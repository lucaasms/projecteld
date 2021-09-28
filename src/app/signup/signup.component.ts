import { Component } from '@angular/core';

@Component({ 
    templateUrl: 'signup.component.html', 
    styleUrls: ['../app.component.css']
})

export class SignupComponent {
    
    show: boolean = false;

    toggleShow(){
        this.show = !this.show
    }

}