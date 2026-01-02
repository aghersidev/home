import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTextComponentComponent } from './animated-text-component.component';

describe('AnimatedTextComponentComponent', () => {
  let component: AnimatedTextComponentComponent;
  let fixture: ComponentFixture<AnimatedTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedTextComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
