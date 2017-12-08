import { Component } from '@angular/core';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {GitHubService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpModule, GitHubService]
})
export class GitHubProfileComponent {
  tex = 'app';

  inputusr: string;
  isVisible = false;
  isLoading = false;
  username: string;
  user = {};
  followers = {};

  constructor(private _gitHubService: GitHubService) {
  }

  ClearResults($event) {
    this.isVisible = false;
    this.inputusr = "";
  }

  OnClick($event) {
    this.isLoading = true;
    this.username = this.inputusr;

    Observable.forkJoin(
      this._gitHubService.getUser(this.username),
      this._gitHubService.getFollowers(this.username)
    )
      .subscribe(
      res => {
        this.user = res[0];
        this.followers = res[1];
      },
      null,
      () => { this.isLoading = false; this.isVisible = true; });
  }
}

