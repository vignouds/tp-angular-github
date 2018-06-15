import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { FormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import {ROUTES} from "./app.routes";
import {GithubApiService} from "./services/github-api.service";
import {UserResolver} from './services/user-resolver';
import {ErrorInterceptorService} from "./services/error-interceptor.service";
import { RepositoriesComponent } from './repositories/repositories.component';
import {RepositoryResolverService} from "./services/repository-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GithubApiService,
    UserResolver,
    RepositoryResolverService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
