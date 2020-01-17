import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../shared/models/note.model";
import {NotesService} from "../shared/services/notes.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {isNullOrUndefined} from "util";
import {DatesService} from "../shared/services/dates.service";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @Input() edNote: Note;
  @Output() editFlag = new EventEmitter<boolean>();
  addForm: FormGroup;
  disabled_form = false;
  constructor(private notesService: NotesService,
              private datesService: DatesService,
              private router: Router) {
    console.log("constructor");

  }

  ngOnInit() {
    if (isNullOrUndefined(this.edNote)) {
      this.edNote = {dateCreation: this.datesService.dateNow(), dateExpiry: "", data: "", id: 0};
    }
    console.log(this.edNote);
    this.addForm = new FormGroup( {
      dateExpiry: new FormControl({value: this.edNote.dateExpiry, disabled: this.disabled_form}, [Validators.required]),
      data: new FormControl({value: this.edNote.data, disabled: this.disabled_form}, [Validators.required])
    });
  }

  onSave() {
    console.log(this.edNote.id);
    if (this.edNote.id) {
      let note = new Note (this.edNote.dateCreation, this.addForm.value.dateExpiry, this.addForm.value.data, this.edNote.id);
      this.notesService.on_edit_note(note);
      this.editFlag.emit(false);
    }
    else {
      let note = new Note (this.datesService.dateNow(), this.addForm.value.dateExpiry, this.addForm.value.data);
      console.log(note);
      this.notesService.on_add_note(note);
      this.router.navigate([`/list`]); /* возвращаемся к списку */
    }
  }
}
