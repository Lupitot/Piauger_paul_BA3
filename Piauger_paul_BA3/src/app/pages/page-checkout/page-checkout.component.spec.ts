import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCheckoutComponent } from './page-checkout.component';

describe('PageCheckoutComponent', () => {
  let component: PageCheckoutComponent;
  let fixture: ComponentFixture<PageCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
