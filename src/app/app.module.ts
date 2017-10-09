import { mainReducer, peopleReducer, familyReducer } from './reducer/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeInformationComponent } from './change-information/change-information.component';
import { StoreModule } from '@ngrx/store';
import { ProgramInformationComponent } from './program-information/program-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeInformationComponent,
    ProgramInformationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(mainReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
