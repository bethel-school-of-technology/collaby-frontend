import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGithubData() {



    return this.http.get('https://localhost:5001/api/posts', {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': 'https://localhost:4200' })
    })
  }
}
