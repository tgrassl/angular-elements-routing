import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBComponent } from './host-b.component';

describe('HostBComponent', () => {
  let component: HostBComponent;
  let fixture: ComponentFixture<HostBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
