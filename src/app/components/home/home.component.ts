import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  articles: any[] = [];
  categories: string[] = ['Technology', 'Health', 'Sports', 'Business'];
  filters: { category?: string; author?: string; date?: string } = {};

  constructor(private newsService: NewsService) {}


  ngOnInit(): void {
    // Fetch articles when the component initializes
    this.fetchArticles();
  }

  fetchArticles(): void {
    console.log('Sending filters:', this.filters); // Log filters being sent
    this.newsService.getArticles(this.filters).subscribe((data: any) => {
      console.log('Received data:', data); // Log the received response
      this.articles = data || [];
      console.log('First article:', this.articles[0]);
    });
  }
  
  applyFilter(): void {
    this.fetchArticles();
  }

}
