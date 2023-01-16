import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from '../models/assignment.model';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit, AfterViewInit {
    assignments!: Assignment[];
    ajoutActive = false;
    nomDevoir: string = '';
    dateDeRendu!: Date;
    rendu!: boolean;
    auteur!: string;
    note!: number;
    remarque!: string;
    assignmentSelectionne!: Assignment;
    formVisible = false;

    page: number = 1;
    limit: number = 5;
    totalDocs: number = 0;
    totalPages: number = 0;
    hasPrevPage: boolean = false;
    prevPage: number = 0;
    hasNextPage: boolean = false;
    nextPage: number = 0;
    // pour l'affichage en table

    displayedColumns: string[] = ['id', 'nom', 'auteur', 'matiere', 'note', 'remarque', 'dateDeRendu', 'rendu',];


    assignements: Assignment[] = [];
    dataSource = new MatTableDataSource(this.assignements);

    constructor(private assignementsService: AssignmentsService) { }

    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }


    ngOnInit(): void {
        this.getAssignments();

    }

    assignmentClique(assignment: Assignment) {
        this.assignmentSelectionne = assignment;
    }

    onAddAssignementBtnClick() {
        this.formVisible = true;
    }

    getAssignments() {
        this.assignementsService.getAssignmentsPagine(this.page, this.limit).subscribe(data => {
            this.assignments = data.docs;
            this.page = data.page;

            this.limit = data.limit;
            this.totalDocs = data.totalDocs;
            this.totalPages = data.totalPages;
            this.hasPrevPage = data.hasPrevPage;
            this.prevPage = data.prevPage;
            this.hasNextPage = data.hasNextPage;
            this.nextPage = data.nextPage;
            console.log("données reçues");
        })
    }

    pageSuivante() {
        if (this.hasNextPage) {
            this.page = this.nextPage;
            this.getAssignments();
        }
    }

    dernierePage() {
        this.page = this.totalPages;
        this.getAssignments();
    }

    pagePrecedente() {
        if (this.hasPrevPage) {
            this.page = this.prevPage;
            this.getAssignments();
        }
    }

    premierePage() {
        this.page = 1;
        this.getAssignments();
    }

}
