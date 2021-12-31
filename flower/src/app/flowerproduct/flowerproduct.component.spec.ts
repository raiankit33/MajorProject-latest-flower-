import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerproductComponent } from './flowerproduct.component';

describe('FlowerproductComponent', () => {
  let component: FlowerproductComponent;
  let fixture: ComponentFixture<FlowerproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
