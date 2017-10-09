import { peopleReducer, familyReducer } from './reducer/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { BackendService } from './backend.service';
import { StoreModule } from '@ngrx/store';
import { ProgramInformationComponent } from './program-information/program-information.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ProgramInformationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({people: peopleReducer, families: familyReducer})
  ],
  providers: [BackendService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
