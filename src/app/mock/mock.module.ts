import { NgModule } from '@angular/core'

import { HttpModule } from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { mockBackendProvider } from './mock.service';

@NgModule({
    imports: [ 
        HttpModule
    ],
    providers: [ 
        mockBackendProvider,
        MockBackend,
        BaseRequestOptions
    ]
})

export class MockModule { }