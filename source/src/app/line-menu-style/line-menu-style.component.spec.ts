import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMenuStyleComponent } from './line-menu-style.component';

describe('LineMenuStyleComponent', () => {
  let component: LineMenuStyleComponent;
  let fixture: ComponentFixture<LineMenuStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineMenuStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineMenuStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
