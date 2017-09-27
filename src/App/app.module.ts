import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { Router } from '@angular/router'
/**
 * Import components below after manualy creating
 */

import { AppComponent } from "./app.component"
import { SampleComponent } from './route/sample/sample.component'

@NgModule({
    imports: [ BrowserModule ], 
    declarations: [ AppComponent, SampleComponent ],
    bootstrap: [AppComponent]
})

export class AppModule { }