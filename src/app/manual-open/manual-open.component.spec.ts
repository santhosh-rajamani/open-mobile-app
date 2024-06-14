import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualOpenComponent } from './manual-open.component';

describe('ManualOpenComponent', () => {
  let component: ManualOpenComponent;
  let fixture: ComponentFixture<ManualOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
