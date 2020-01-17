import {Injectable, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {Note} from "../models/note.model";
import {NotesApiService} from "./notes-api.service";

@Injectable({
  providedIn: 'root'
})
export class NotesService implements OnInit {
  public notes: any;
  constructor(private notesApiService: NotesApiService) {
    this.get_notes();

  }
  ngOnInit() {

  }
  async get_notes () {
    try {
      let gnotes = this.notesApiService.getNotes();
      this.notes = (isNullOrUndefined(await gnotes)) ? [] : await gnotes;

    } catch (err) {
      console.log(err);
    }
  }

  async on_add_note (note: Note) {
    note.id = (this.notes.length)
      ? this.notes[this.notes.length - 1].id + 1
      : 1;
    this.notes.push(note);
    try {
      await this.notesApiService.postNotes({
        dateCreation: note.dateCreation, dateExpiry: note.dateExpiry, data: note.data});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_edit_note (ed_note: Note) {
    this.notes.splice (
      this.notes.findIndex (note => {note.id === ed_note.id}),
      1, ed_note);
    try {
      await this.notesApiService.putNotes(ed_note.id, {
        dateCreation: ed_note.dateCreation, dateExpiry: ed_note.dateExpiry, data: ed_note.data});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_del_note (del_note_id: number) {
    this.notes.splice(this.notes.indexOf(this.notes.find((element, index, array) => {
      return (element.id === del_note_id)
    })), 1); /* удалили из массива элемент */
    try {
      await this.notesApiService.deleteNotes(del_note_id);
    }
    catch (e) {
      console.error(e);
    }
  }

}
