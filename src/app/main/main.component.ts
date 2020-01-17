import { Component, OnInit } from '@angular/core';
import {isNullOrUndefined} from "util";
import {NotesService} from "../shared/services/notes.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sortDateType: string;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.sortDateType = "";
  }
  toggleSortCreation () {
    if (this.sortDateType === "" || this.sortDateType === "expiry") this.sortDateType = "creation";
    else this.sortDateType = "";
  }
  toggleSortExpiry () {
    if (this.sortDateType === "" || this.sortDateType === "creation") this.sortDateType = "expiry";
    else this.sortDateType = "";
  }

}
