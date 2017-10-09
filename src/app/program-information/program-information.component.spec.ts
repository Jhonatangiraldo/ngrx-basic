import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramInformationComponent } from './program-information.component';

describe('ProgramInformationComponent', () => {
  let component: ProgramInformationComponent;
  let fixture: ComponentFixture<ProgramInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
