import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbiComponent } from './ubi.component';

describe('UbiComponent', () => {
  let component: UbiComponent;
  let fixture: ComponentFixture<UbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
