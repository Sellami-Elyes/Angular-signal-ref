import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalRefComponent } from './signal-ref.component';

describe('SignalRefComponent', () => {
  let component: SignalRefComponent;
  let fixture: ComponentFixture<SignalRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalRefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
