import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidepanierService } from '../../services/validepanier.service';

@Component({
  selector: 'app-form-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-checkout.component.html',
  styleUrl: './form-checkout.component.scss',
})
export class FormCheckoutComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private validepanierService: ValidepanierService
  ) {}

  fg = new FormGroup({
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    card: new FormControl('', [Validators.required]),
    cardDate: new FormControl('', [Validators.required]),
  });

  lastname = this.fg.get('lastname');
  firstname = this.fg.get('firstname');
  adress = this.fg.get('adress');
  zipcode = this.fg.get('zipcode');
  city = this.fg.get('city');
  card = this.fg.get('card');
  cardDate = this.fg.get('cardDate');

  submit(
    lastname: any,
    firstname: any,
    adress: any,
    zipcode: any,
    city: any,
    card: any,
    cardDate: any
  ) {
    this.validepanierService
      .submitPanier(
        lastname.value,
        firstname.value,
        adress.value,
        zipcode.value,
        city.value,
        card.value,
        cardDate.value
      )
      .subscribe((data) => {
        console.log(data);
      }); // ca marche pas je travaillé dessus mais ducoup j'ai pas eu le temps :(
  }
}
