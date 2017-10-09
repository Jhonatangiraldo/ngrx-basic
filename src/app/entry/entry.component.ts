import { INCREMENTFAMILY, INCREMENTPEOPLE, DECREMENTPEOPLE, DECREMENTFAMILY, SETFAMILY, SETPEOPLE } from './../reducer/reducers';
import { Component, OnInit } from '@angular/core';
import { BackendService } from './../backend.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  people: any;
  families: any;

  constructor(private store:Store<any>,
    public backendService: BackendService){
    this.families = this.store.select('families');
    this.people = this.store.select('people');

  }

  ngOnInit() {
    this.backendService.getData().subscribe( result => {
      console.log(result);
    });
  }

  incrementPeople(){
    this.store.dispatch({ type: INCREMENTPEOPLE, payload: 999});
  }

  decrementPeople() {
    this.store.dispatch({ type: DECREMENTPEOPLE, payload: 999});
  }

  setPeople() {
    let randonBetweenOneAndFifteen = Math.floor((Math.random() * 50) + 1);
    this.store.dispatch({ type: SETPEOPLE, payload: randonBetweenOneAndFifteen});
  }

  incrementFamily(){
    this.store.dispatch({ type: INCREMENTFAMILY, payload: 999});
  }

  decrementFamily() {
    this.store.dispatch({ type: DECREMENTFAMILY, payload: 999});
  }

  setFamily() {
    let randonBetweenOneAndFifteen = Math.floor((Math.random() * 50) + 1);
    this.store.dispatch({ type: SETFAMILY, payload: randonBetweenOneAndFifteen});
  }

}
