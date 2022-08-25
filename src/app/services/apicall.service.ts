import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get('https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json')
    
  }
}
