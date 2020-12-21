import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveditemComponent } from './receiveditem.component';

describe('ReceiveditemComponent', () => {
  let component: ReceiveditemComponent;
  let fixture: ComponentFixture<ReceiveditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
