/**
 * Modules are way to construct an app to group components, services, directives, pipes that are related.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_ROUTING } from './app.routing';
/**
 * Import components below after manualy creating
 */

import { AppComponent } from "./app.component"
import { SampleComponent } from './route/sample/sample.component'

@NgModule({
    imports: [ BrowserModule, APP_ROUTING ],     
    declarations: [ AppComponent, SampleComponent ],
    bootstrap: [AppComponent]
})

export class AppModule { }