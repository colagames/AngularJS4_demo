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
    if (p_evt.keyCode === 27) {
      this.keyword = '';
    }
  }
}
