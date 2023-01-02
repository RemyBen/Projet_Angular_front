import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
    { path: 'home', component: AssignmentsComponent },
    { path: '', component: AssignmentsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add', component: AddAssignmentComponent },
    { path: 'assignement/:id', component: AssignmentDetailComponent },
    { path: 'assignement/:id/edit', component: EditAssignmentComponent, canActivate: [AuthGuard] },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }