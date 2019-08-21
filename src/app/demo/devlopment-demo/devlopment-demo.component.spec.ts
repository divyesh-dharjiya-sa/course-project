import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlopmentDemoComponent } from './devlopment-demo.component';

describe('DevlopmentDemoComponent', () => {
  let component: DevlopmentDemoComponent;
  let fixture: ComponentFixture<DevlopmentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevlopmentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlopmentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
