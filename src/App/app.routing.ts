import { RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

/**
 * Import components to be used in the routing system.
 * Example: >> 
 * import { Component } from './route/component/component.ts'
 */

import { SampleComponent } from './route/sample/sample.component'



export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: SampleComponent
    }
])