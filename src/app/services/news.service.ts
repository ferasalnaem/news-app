import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  // Fetch articles with optional filters
  getArticles(filters?: { [key: string]: string | undefined }): Observable<any> {
    let params = new HttpParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params = params.set(key, value);
        }
      });
    }
    //return this.http.get(this.apiUrl, { params });
    return this.http.get(`${this.apiUrl}/api/news`);

  }

  getUncategorizedNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/news`);
  }

  categorizeNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/news`);
  }
}

