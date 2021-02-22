import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaosBagComponent } from './chaos-bag.component';

describe('ChaosBagComponent', () => {
  let component: ChaosBagComponent;
  let fixture: ComponentFixture<ChaosBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaosBagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaosBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
