import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  siteName = '我的部落格';
  siteUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScI9zHZ4n5CXdN8jKanIr1UDkd5axr7o7ngrSv-_2Ydpj_2Pw/viewform';
  siteSubTitle = '記載著 今天所有的Demo練習 ';
  constructor() { }

  ngOnInit() {
  }

  changeTitle(p_evt) {
    console.log(p_evt);
    if (p_evt.ctrlKey) {
      this.siteName = '有加Ctrl然後點滑鼠';
      return false;
    }
     this.siteName = '你只是普通點滑鼠';
  }
}
