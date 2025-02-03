import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MenuItem } from './_types/menu-item.type';
import { FooterComponent } from "./components/footer/footer.component";
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { LoaderComponent } from "./components/loader/loader.component";

const menuItems: MenuItem[] = [
  { path: '/', label: 'Home' },
  { path: '/cart', label: 'Carrello' }
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SnackbarComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = signal('Vetrina');
  menuItems = signal(menuItems);
}
