import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoasBagDeciderComponent } from './choas-bag-decider.component';

describe('ChoasBagDeciderComponent', () => {
  let component: ChoasBagDeciderComponent;
  let fixture: ComponentFixture<ChoasBagDeciderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoasBagDeciderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoasBagDeciderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
