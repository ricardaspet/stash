import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left; }
    `]
})

export class LoginComponent {
    username; // reik declarint, kai bindini su ngModel
    password;
    mouseoverLogin;
    loginInvalid = false;

    constructor(private authService: AuthService, private router: Router) {}

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
            if (!resp) {
                this.loginInvalid = true;
            } else {
                this.router.navigate(['events']); // autentifikavus redirectina i events
            }
        });
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
