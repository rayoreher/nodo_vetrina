import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { startOfDay } from 'date-fns';
import { DatePickerModule } from 'primeng/datepicker';
import { CharityStore } from '../../_store/charity.store';
@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, CommonModule, DatePickerModule],
    templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  charityStore = inject(CharityStore);
  minDate = startOfDay(new Date());
  form: FormGroup;
  fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{7,}')]],
      pickupDate: [new Date(), Validators.required]
    });

    this.form.get('pickupDate')?.touched;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value.pickupDate.toString());
    }
  }
}
