import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesListComponent} from "./notes-list/notes-list.component";
import {MainComponent} from "./main/main.component";
import {AddNoteComponent} from "./add-note/add-note.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'list', component: NotesListComponent},
  {path: 'add', component: AddNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
