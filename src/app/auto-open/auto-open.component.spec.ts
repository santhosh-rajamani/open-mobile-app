import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoOpenComponent } from './auto-open.component';

describe('AutoOpenComponent', () => {
  let component: AutoOpenComponent;
  let fixture: ComponentFixture<AutoOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
