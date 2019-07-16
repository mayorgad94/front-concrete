import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private http: HttpClient) { }

  url = 'https://api.github.com/';

  getUser(nameUser){
    return this.http.get(this.url+'users/'+nameUser);
  }
  getUserDetail(nameUser){
    return this.http.get(this.url+'users/'+nameUser+'/repos');
  }
}
