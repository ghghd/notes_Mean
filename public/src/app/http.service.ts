import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  addNote(note){
    console.log('in service');
    return this._http.post('/notes/new/', note);
  }
  getAll(){
    return this._http.get('/notes/');
  }

}
