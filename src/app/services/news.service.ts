import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = (window as any)['env']?.backendUrl || 'http://localhost:8080';
  }

  // Fetch articles with optional filters
  getArticles(filters?: { [key: string]: string | undefined }): Observable<any> {
    let params = new HttpParams();


    // Add filters to the query params
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params = params.set(key, value);
        }
      });
    }

    console.log('Logging parameters:', params); 


  
    return this.http.get(this.apiUrl + '/api/news', {
      params: params,
      headers: {} // Avoid adding unnecessary headers
    });

  }
}

