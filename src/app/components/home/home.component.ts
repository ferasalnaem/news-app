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
  currentPage: number = 0;  // Current page
  totalArticles: number = 0;  // Total number of articles
  articlesPerPage: number = 20;  // Number of articles per page
  hasMoreArticles: boolean = true;

  filters: any = {
    category: '',
    author: '',
    fromDate: '',
    sortBy: 'publishedAt',
    order: '',
    page: 0 ,
    limit: 20
  };
  categories: string[] = ['Politics', 'Wellness', 'Entertainment', 'Travel', 'Style & beauty',
    'Parenting', 'Healthy Living', 'Queer Voices', 'Food & Drink', 'Business', 'Comedy', 'Sports', 'Black Voices', 'Home & Living', 'Parents',
    'The WorldPost', 'Wedding', 'Women', 'Crime', 'Impact', 'Divorce', 'World News', 'Media', 'Weird News', 'Green', 'WorldPost', 'Religion', 
    'Style', 'Science', 'Tech', 'Taste', 'Money', 'Arts', 'Environment', 'Fifty', 'Good News', 'U.S. News', 'Arts & Culture', 'College', 
    'Latino Voices', 'Culture & Arts', 'Education'
  ]; 

  constructor(private newsService: NewsService) {}


  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    console.log('Sending filters:', this.filters); 
    this.newsService.getArticles(this.filters).subscribe((data: any) => {
      console.log('Received data:', data); 
      this.articles = data || [];
      this.totalArticles = data.length;
      console.log('total count:', this.totalArticles); 
      if (data.length < this.articlesPerPage) {
        this.hasMoreArticles = false;
      }

    });
  }

  // Move to the next page
  nextPage() {
    if (this.hasMoreArticles) {
      this.currentPage = this.currentPage + 1;
      this.filters.page= this.currentPage;
      console.log('Sending new filters:', this.filters); 
      console.log('New page', this.filters.page); 
      this.fetchArticles();
    }
  }

  // Move to the previous page
  previousPage() {
    if (this.currentPage > 0) {
      this.hasMoreArticles = true;
      this.currentPage = this.currentPage -1 ;
      this.filters.page= this.currentPage;
      console.log('Sending new filters:', this.filters); 
      this.fetchArticles();
    }
  }

 applyFilters(): void {

  this.filters.page= 0;
  this.hasMoreArticles = true;

 console.log('Sending new filters:', this.filters); 
  this.fetchArticles();
}

  
  resetFilters(): void {
    this.hasMoreArticles = true;
    
    this.filters = {
      category: '',
      author: '',
      fromDate: '',
      sortBy: 'publishedAt',
      order: '',
      page: 0 ,
      limit: 20
    };
    this.fetchArticles(); // Refresh the articles list
  }

}
