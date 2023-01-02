import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from 'src/app/models/assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
    selector: 'app-assignment-detail',
    templateUrl: './assignment-detail.component.html',
    styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

    assignementTransmis: Assignment;

    constructor(private assignementService: AssignmentsService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
        this.getAssignement()
    }

    onClickDelete() {
        let isLogged;
        this.authService.isLoggedIn.subscribe(success => {
            isLogged = success;
        });

        if (!isLogged) {
            this.router.navigate(['login']);
        } else {
            this.assignementService.deleteAssignment(this.assignementTransmis).subscribe(message => {
                console.log(message);
                this.router.navigate(['home']);
            })
        }

    }

    onAssignementRendu() {
        this.assignementTransmis.rendu = true;
        this.assignementService.updateAssignment(this.assignementTransmis).subscribe(message => {
            console.log(message);
            this.router.navigate(['home']);
        });

    }

    getAssignement() {
        const id = +this.route.snapshot.params['id'];
        console.log('id : ', id);
        this.assignementService.getAssignment(id).subscribe(assignement => {
            this.assignementTransmis = assignement
            console.log("Res ass detail ", assignement);
        })
    }
    onClickEdit() {
        this.router.navigate(['/assignement', this.assignementTransmis.id, 'edit'],
            { queryParams: { nom: this.assignementTransmis.nom }, fragment: 'edition' });
    }
}
