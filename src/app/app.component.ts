import { Component } from '@angular/core';

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
  }

  doSearch(p_evt: KeyboardEvent) {
    console.log(p_evt);
    this.keyword = (p_evt.target as HTMLInputElement).value;
  }
}
