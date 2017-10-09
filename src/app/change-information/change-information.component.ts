import { INCREMENTFAMILY, INCREMENTPEOPLE, DECREMENTPEOPLE, DECREMENTFAMILY, SETFAMILY, SETPEOPLE } from './../reducer/reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-change-information',
  templateUrl: './change-information.component.html',
  styleUrls: ['./change-information.component.css']
})
export class ChangeInformationComponent {

  private people: any;
  private families: any;

  constructor( private store:Store<any> ) {
    this.families = this.store.select('families');
    this.people = this.store.select('people');
  }

  incrementPeople(){
    this.store.dispatch({ type: INCREMENTPEOPLE});
  }

  decrementPeople() {
    this.store.dispatch({ type: DECREMENTPEOPLE});
  }

  setPeople() {
    let randonBetweenOneAndFifteen = Math.floor((Math.random() * 50) + 1);
    this.store.dispatch({ type: SETPEOPLE, payload: randonBetweenOneAndFifteen});
  }

  incrementFamily(){
    this.store.dispatch({ type: INCREMENTFAMILY});
  }

  decrementFamily() {
    this.store.dispatch({ type: DECREMENTFAMILY});
  }

  setFamily() {
    let randonBetweenOneAndFifteen = Math.floor((Math.random() * 50) + 1);
    this.store.dispatch({ type: SETFAMILY, payload: randonBetweenOneAndFifteen});
  }

}
