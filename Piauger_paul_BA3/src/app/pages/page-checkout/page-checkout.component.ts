import { Component } from '@angular/core';
import { FormCheckoutComponent } from '../../component/form-checkout/form-checkout.component';

@Component({
  selector: 'app-page-checkout',
  standalone: true,
  imports: [FormCheckoutComponent],
  templateUrl: './page-checkout.component.html',
  styleUrl: './page-checkout.component.scss',
})
export class PageCheckoutComponent {}
