import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from 'src/app/models/assignment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  nomDevoir: string = '';
  dateDeRendu!: Date;
  matiere: string = '';
  auteur: string = '';
  remarque: string = '';
  note: number = 0;

  constructor(private assignmentService: AssignmentsService, private router:Router) { }

  ngOnInit(): void {
    console.log('add assignement');
  }

  onSubmit() {
    const newAssignement = new Assignment();
    newAssignement.nom = this.nomDevoir;
    newAssignement.id = Math.floor(Math.random() * 1000);
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false;
    newAssignement.auteur = this.auteur;
    newAssignement.note = this.note;
    newAssignement.remarque = this.remarque;
    newAssignement.matiere = this.matiere;

    this.assignmentService.addAssignment(newAssignement).subscribe(message => {
      console.log(message);
    })
    this.router.navigate(['home']);
  }

}
