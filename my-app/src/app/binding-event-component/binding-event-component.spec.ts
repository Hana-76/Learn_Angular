import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BindingEVentComponent } from './binding-event-component';

describe('BindingEVentComponent', () => {
  let component: BindingEVentComponent;
  let fixture: ComponentFixture<BindingEVentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingEVentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingEVentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
