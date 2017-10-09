import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-information',
  templateUrl: './program-information.component.html',
  styleUrls: ['./program-information.component.css']
})
export class ProgramInformationComponent implements OnInit {

  private families: any;
  private people: any;

  constructor(private store:Store<any>,) {
    this.families = this.store.select('families');
    this.people = this.store.select('people');
  }

  ngOnInit() {
  }

}
