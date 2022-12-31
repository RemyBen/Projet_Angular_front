import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import { forkJoin, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { bdInitAssignments } from "./data";

@Injectable({
    providedIn: 'root'
})
export class AssignmentsService {
    // assignments: Assignement[] = [{
    //   id:1,
    //   rendu: false,
    //   nom: "francais",
    //   dateDeRendu: new Date('2022-01-26')
    // },
    // {
    //   id:2,
    //   rendu: true,
    //   nom: "francais",
    //   dateDeRendu: new Date('2022-03-20')
    // },
    // {
    //   id:3,
    //   rendu: true,
    //   nom: "francais",
    //   dateDeRendu: new Date('2022-11-06')
    // },
    // {
    //   id:4,
    //   rendu: false,
    //   nom: "francais",
    //   dateDeRendu: new Date('2022-12-30')
    // }]

    constructor(private http: HttpClient) { }


    // url = 'http://localhost:8010/api/assignments';
    url = 'https://projet-angular-back.herokuapp.com/api/assignments';

    getAssignments(): Observable<Assignment[]> {
        return this.http.get<Assignment[]>(this.url);
    }

    addAssignment(assignement: Assignment): Observable<any> {
        return this.http.post<Assignment>(this.url, assignement);
    }

    deleteAssignment(assignement: Assignment): Observable<string> {
        return this.http.delete<string>(this.url + '/' + assignement._id);
    }

    updateAssignment(assignement: Assignment): Observable<any> {
        return this.http.put<Assignment>(this.url, assignement);
    }

    getAssignment(id): Observable<Assignment> {
        console.log('id service : ', id);
        return this.http.get<Assignment>(this.url + '/' + id);
    }

    peuplerBD(): Observable<any> {

        const appelsVersAddAssignment:any = [];

        bdInitAssignments.forEach(a => {
            let nouvelAssignment = new Assignment();
            nouvelAssignment.id = a.id;
            nouvelAssignment.nom = a.nom;
            nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
            nouvelAssignment.rendu = a.rendu;

            appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment));

        });
        return forkJoin(appelsVersAddAssignment);
    }

}
