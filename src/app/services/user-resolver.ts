import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

import User from "../model/User";
import {GithubApiService} from "../services/github-api.service";

@Injectable()
export class UserResolver implements Resolve<any> {

  user: Observable<User>;

  constructor(private service:GithubApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    this.user = this.service.getUser(route.params['pseudo']);
    return this.user;
  }
}
