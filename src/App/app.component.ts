import { Component } from '@angular/core'

@Component({
    selector: 'app-c',
    template: '<h1>Welcome to APP C {{name}}</h1>',
})

export class AppComponent {
    name:string  = "Michael Jordan"
}