import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';

import Repository from "../model/Repository";
import {GithubApiService} from "./github-api.service";

@Injectable()
export class RepositoryResolverService implements Resolve<any> {

  repositories: Observable<Array<Repository>>;

  constructor(private service:GithubApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    this.repositories = this.service.getUserRepos(route.params['pseudo']);
    return this.repositories;
  }
}
