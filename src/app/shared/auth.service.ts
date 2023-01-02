import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private user: User;

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    get userConnected() {
        console.log("ok");
        return this.user;
    }

    constructor(
        private router: Router
    ) { }

    logIn(user: User) {
        if (user.username == 'Utilisateur1' && user.password == 'user') {
            this.user = user;
            this.loggedIn.next(true);
            this.router.navigate(['/home']);
            console.log("connecté")
        } else {
            this.loggedIn.next(false);
            console.log("erreur");
        }
    }

    logOut() {
        this.loggedIn.next(false);
        this.router.navigate(['/home']);
    }
}