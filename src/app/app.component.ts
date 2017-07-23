import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyword = '123';



  validateKeyword(p_evt: KeyboardEvent) {
    console.log(p_evt);
    this.keyword = '';
    (p_evt.target as HTMLInputElement).value = '';
  }

  doEnter(value: string) {
    console.log(value);
    this.keyword = value;
  }
  doSearch(value: string) {
    console.log('按下搜尋後 value=' + value);
  }

  constructor(public datasvc: DataService) {
  }
}
