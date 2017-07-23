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

}
