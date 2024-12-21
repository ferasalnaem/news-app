import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-uncategorized-news',
  templateUrl: './uncategorized-news.component.html',
  styleUrls: ['./uncategorized-news.component.css']
})
export class UncategorizedNewsComponent implements OnInit {
  uncategorizedNews: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getUncategorizedNews().subscribe({
      next: (data) => this.uncategorizedNews = data,
      error: (err) => console.error('Error fetching uncategorized news:', err)
    });
  }
}
