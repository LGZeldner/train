import { Pipe, PipeTransform } from '@angular/core';
import {Note} from "../models/note.model";
import {isNullOrUndefined} from "util";
import {DatesService} from "../services/dates.service";

@Pipe({
  name: 'sortNotes'
})
export class SortNotesPipe implements PipeTransform {
  constructor(private datesService: DatesService){

  }
  transform(notes: Note[], datetype: string): any {
    if (!isNullOrUndefined(notes)) {
      if (datetype === "creation") {
        notes.sort((a, b) => this.datesService.dateCompare(a.dateCreation, b.dateCreation));
      }
      else
        if (datetype === "expiry") {
          notes.sort((a, b) => this.datesService.dateCompare(a.dateExpiry, b.dateExpiry));
        }
    }
    return notes;
  }

}
