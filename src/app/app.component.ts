import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MenuItem } from './_types/menu-item.type';
import { FooterComponent } from "./components/footer/footer.component";
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SnackbarService } from './_services/snackbar.service';

const menuItems: MenuItem[] = [
  { path: '/', label: 'Home' },
  { path: '/cart', label: 'Carrello' }
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, Toast],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService, SnackbarService]
})
export class AppComponent {
  title = signal('Vetrina');
  menuItems = signal(menuItems);
}
