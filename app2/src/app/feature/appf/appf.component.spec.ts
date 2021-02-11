import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfComponent } from './appf.component';

describe('AppfComponent', () => {
  let component: AppfComponent;
  let fixture: ComponentFixture<AppfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
