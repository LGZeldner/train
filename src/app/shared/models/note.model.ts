export class Note { /* класс, описывающий заметку */
  public id: number; /* id */
  public dateCreation: string; /* дата создания */
  public dateExpiry: string; /* дата истечения */
  public data: string; /* содержание */
  constructor (dateCreation: string, dateExpiry: string, data: string, id?: number){
    this.id = id;
    this.dateCreation = dateCreation;
    this.dateExpiry = dateExpiry;
    this.data = data;
  }
}
