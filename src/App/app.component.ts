import { Component } from '@angular/core'

@Component({
    selector: 'app-c',
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./app.component.scss'.toString()]
})

export class AppComponent {
    name:string  = "Michael Jordan"
}