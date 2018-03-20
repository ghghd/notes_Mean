import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note: any;
  all: any;
  error: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.note = {text: ''};
    this.getNotes();
  }
  getNotes(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log(data);
      this.all = data['note'];
      console.log(this.all + 'in list')
    })
  }
  onSubmit(){
    let observable = this._httpService.addNote(this.note);
    observable.subscribe(data => {
      this.error = data['err'];
      this.note = {text: ''};
    })
   this.ngOnInit();
  }
}
