import { Component } from '@angular/core'

@Component({
    selector: 'app-c',
    template: '<router-outlet></router-outlet>',
})

export class AppComponent {
    name:string  = "Michael Jordan"
}