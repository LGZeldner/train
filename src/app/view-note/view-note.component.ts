import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../shared/models/note.model";
import {DatesService} from "../shared/services/dates.service";

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit {
  @Input() inNote: Note;
  @Output() delNote = new EventEmitter<number>(); /* отправляем наверх */
  editFlag: boolean;
  dateExpired: boolean;
  constructor(private datesService: DatesService) { }

  ngOnInit() {
    this.editFlag = false;
    this.dateExpired = (this.datesService.dateCompare(this.datesService.dateNow(), this.inNote.dateExpiry)) > 0;
  }

  onDelNote () {
    this.delNote.emit(this.inNote.id);
  }
}
