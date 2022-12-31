import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Application de gestion de devoir à rendre';
    user: String;
    isLoggedIn: boolean;

    constructor(private authService: AuthService, private router: Router, private assignmentService: AssignmentsService) {
        this.authService.isLoggedIn.subscribe(value => {
            this.isLoggedIn = value;
            if (this.isLoggedIn) {
                this.user = authService.userConnected.username;
            }
        });
    }


    ngOnInit() {
    }

    onLogin() {
        if (!this.isLoggedIn) {
            this.router.navigate(['/login']);
        }
    }

    onLogout() {
        this.authService.logOut();
    }

    peuplerBD() {
        this.assignmentService.peuplerBD()
            .subscribe(() => {
                console.log("BD peuplée");

                this.router.navigate(["/home"], { replaceUrl: true });
            });
    }

}