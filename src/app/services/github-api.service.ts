import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import User from "../model/User";
import Repository from "../model/Repository";

const API_BASE_URL: string = 'https://api.github.com/';
const API_USERS: string = 'users/';
const API_REPOS: string = 'repositories/';

@Injectable()
export class GithubApiService {

  constructor(private http:HttpClient) { }

  getUser(login:string):Observable<User> {
    return <Observable<User>> this.http.get(`${API_BASE_URL}${API_USERS}${login}`);
  }

  getUserRepos(login:string):Observable<Array<Repository>> {
    return <Observable<Array<Repository>>> this.http.get(`${API_BASE_URL}${API_USERS}${login}${API_REPOS}`);
  }
}
