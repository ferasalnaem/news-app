import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-categorized-news',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './categorized-news.component.html',
  styleUrls: ['./categorized-news.component.css']
})
export class CategorizedNewsComponent {
  articles: any[] = [];
  

  constructor(private newsService: NewsService) {
    this.fetchArticlesByCategory('Technology'); // Example category
  }
  
  fetchArticlesByCategory(category: string): void {
    this.newsService.getArticles({ category }).subscribe((data: any) => {
      this.articles = data.articles || [];
    });
  }
}
