import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAComponent } from './host-a.component';

describe('HostAComponent', () => {
  let component: HostAComponent;
  let fixture: ComponentFixture<HostAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
