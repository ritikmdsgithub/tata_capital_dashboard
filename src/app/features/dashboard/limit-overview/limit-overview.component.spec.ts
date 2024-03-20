import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitOverviewComponent } from './limit-overview.component';

describe('LimitOverviewComponent', () => {
  let component: LimitOverviewComponent;
  let fixture: ComponentFixture<LimitOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LimitOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
