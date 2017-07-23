import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http: Http) {


    this.http.get('/api/articles.json')
      .subscribe(res => {
        this.data = res.json(); // 將 JSON 轉為 JS 物件
      });


  }

  data;

  deleteArticle(item) {
    console.log(item);
    const idx = this.data.indexOf(item);
    this.data.splice(idx, 1);
  }
}
