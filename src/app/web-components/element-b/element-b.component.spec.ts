import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBComponent } from './element-b.component';

describe('ElementAComponent', () => {
  let component: ElementBComponent;
  let fixture: ComponentFixture<ElementBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
