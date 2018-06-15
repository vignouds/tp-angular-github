import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_BASE_URL: string = 'https://api.github.com/';
const API_USERS: string = 'users/';

@Injectable()
export class GithubApiService {

  constructor(private http:HttpClient) { }

  getUser(login:string) {
    return this.http.get(`${API_BASE_URL}${API_USERS}${login}`);
  }
}
