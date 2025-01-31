import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  imageUrl = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  buttonText = input<string>('Visita');
  buttonClick = output();
}
