import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text: string = import.meta.env.NG_APP_TEXT ?? 'ciaooo';
  title = 'nodo_vetrina';
}
