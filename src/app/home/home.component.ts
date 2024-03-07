import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  private trendingUrl =
    'http://localhost:4200/assets/data/trending-movies.json';
  private theatreUrl = 'http://localhost:4200/assets/data/theatre-movies.json';
  private popularUrl = 'http://localhost:4200/assets/data/popular-movies.json';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.httpClient.get(this.trendingUrl).subscribe(
      (movies) => {
        this.trendingMovies = movies;
        console.log('success');
        console.log(movies);
      },
      (error) => {
        console.log('error');
      },
      () => {
        console.log('completed');
      }
    );
  }

  getTheatreMovies() {
    this.httpClient.get(this.theatreUrl).subscribe(
      (movies) => {
        this.theatreMovies = movies;
        console.log('success');
        console.log(movies);
      },
      (error) => {
        console.log('error');
      },
      () => {
        console.log('completed');
      }
    );
  }

  getPopularMovies() {
    this.httpClient.get(this.popularUrl).subscribe(
      (movies) => {
        this.popularMovies = movies;
        console.log('success');
        console.log(movies);
      },
      (error) => {
        console.log('error');
      },
      () => {
        console.log('completed');
      }
    );
  }
}
