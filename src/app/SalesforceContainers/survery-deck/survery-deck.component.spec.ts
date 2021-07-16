import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveryDeckComponent } from './survery-deck.component';

describe('SurveryDeckComponent', () => {
  let component: SurveryDeckComponent;
  let fixture: ComponentFixture<SurveryDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveryDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveryDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
