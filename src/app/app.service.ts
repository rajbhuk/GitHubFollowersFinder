import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GitHubProfileComponent } from './app.component';

import { forwardRef, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    GitHubProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [forwardRef(() => GitHubService) ],
  bootstrap: [GitHubProfileComponent]
})

@Injectable()
export class GitHubService {

  private _baseUrl = "https://api.github.com/users/";

  constructor(private _http: Http) { }

  getUser(username) {
    return this._http.get(this._baseUrl + username)
      .map(res => res.json());
  }

  getFollowers(username) {
    return this._http.get(this._baseUrl + username + "/followers")
      .map(res => res.json());
  }
 }
