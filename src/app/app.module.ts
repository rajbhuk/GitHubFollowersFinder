import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GitHubProfileComponent } from './app.component';

NgModule({
    declarations: [
        GitHubProfileComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [GitHubProfileComponent]
});


export class AppComponent {
}
