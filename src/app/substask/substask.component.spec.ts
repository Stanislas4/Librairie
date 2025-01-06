import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstaskComponent } from './substask.component';

describe('SubstaskComponent', () => {
  let component: SubstaskComponent;
  let fixture: ComponentFixture<SubstaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubstaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
