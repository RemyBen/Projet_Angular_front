import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from '../models/assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignments!: Assignment[];
  ajoutActive = false;
  nomDevoir: string = '';
  dateDeRendu!: Date;
  assignmentSelectionne!: Assignment;
  formVisible = false;

  constructor(private assignementsService: AssignmentsService) { }

  ngOnInit(): void {
    this.assignementsService.getAssignments().subscribe(assignments => {
      this.assignments = assignments
    })
  }

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAddAssignementBtnClick() {
    this.formVisible = true;
  }
}
