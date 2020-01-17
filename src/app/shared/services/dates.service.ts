import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatesService {
  constructor() { }
  dateNow() : string {
    let now = new Date();
    let day = (now.getDate() >= 10) ? now.getDate().toString() : "0" + now.getDate().toString();

    let month = (now.getMonth() + 1 >= 10) ? (now.getMonth() + 1).toString() : "0" + (now.getMonth() + 1).toString();

    let year = now.getFullYear().toString();

    return day+month+year;
  }
  dateCompare(date1: string, date2: string): number {
    if (date1.slice(4) < date2.slice(4)) return -1;
    else
      if (date1.slice(4) > date2.slice(4)) return 1;
      else
        if (date1.slice(2, 4) < date2.slice(2, 4)) return -1;
        else
          if (date1.slice(2, 4) > date2.slice(2, 4)) return 1;
          else
            if (date1.slice(0, 2) < date2.slice(0, 2)) return -1;
            else
              if (date1.slice(0, 2) > date2.slice(0, 2)) return 1;
    return 0;
  }
}
