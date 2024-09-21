import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketContentComponent } from './market-content.component';

describe('MarketContentComponent', () => {
  let component: MarketContentComponent;
  let fixture: ComponentFixture<MarketContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
