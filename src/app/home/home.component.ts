import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
trendingNews: any
  ngOnInit(): void {
  this.getTrendingNews();
  }

  getTrendingNews(){
    this.http.get('http://localhost:4200/assets/data/trending.json').subscribe((movie) => {
this.trendingNews = movie;
console.log(this.trendingNews)
    })

  }
}
