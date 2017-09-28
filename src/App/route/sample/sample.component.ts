import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'sample-app',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss'.toString()]
})

export class SampleComponent {
    key:string = "This is coming from the sample component with style."
}

