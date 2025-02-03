import { Component } from "@angular/core";
import { Toast } from "primeng/toast";

@Component({
  selector: "app-snackbar",
  imports: [Toast],
  templateUrl: "./snackbar.component.html",
  styleUrl: "./snackbar.component.scss"
})
export class SnackbarComponent {
}
