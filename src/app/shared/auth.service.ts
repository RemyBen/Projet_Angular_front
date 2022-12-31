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
        return this.user;
    }

    constructor(
        private router: Router
    ) { }

    logIn(user: User) {
        if (user.username == 'a' && user.password == 'a') {
            this.user = user;
            this.loggedIn.next(true);
            this.router.navigate(['/home']);
            console.log("connecté")
            return true;
        } else {
            this.loggedIn.next(false);
            console.log("erreur");
            return false;
        }
    }

    logOut() {
        this.loggedIn.next(false);
        this.router.navigate(['/home']);
    }

    isAdmin() {
        const isUserAdmin = new Promise(
            (resolve, reject) => {
                resolve(this.loggedIn);
            }
        )
        return isUserAdmin;
    }
}