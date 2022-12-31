import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    private formSubmitAttempt: boolean;
    wrongCredentials = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    isFieldInvalid(field: string) {
        return (
            (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt)
        );
    }

    onSubmit() {
        if (this.form.valid) {
            this.authService.logIn(this.form.value)
            this.authService.isLoggedIn.subscribe(success => {
                if(success) {
                    this.wrongCredentials = false;
                } else {
                    this.wrongCredentials = true;
                }
            });
        }
        this.formSubmitAttempt = true;
    }
}