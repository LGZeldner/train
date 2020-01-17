import {Component, Input, OnInit} from '@angular/core';
import {NotesService} from "../shared/services/notes.service";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  @Input() sortDateType: string;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

}
