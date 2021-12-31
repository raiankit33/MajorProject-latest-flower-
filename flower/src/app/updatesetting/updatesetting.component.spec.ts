import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesettingComponent } from './updatesetting.component';

describe('UpdatesettingComponent', () => {
  let component: UpdatesettingComponent;
  let fixture: ComponentFixture<UpdatesettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
