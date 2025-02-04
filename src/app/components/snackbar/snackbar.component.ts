import { Component } from "@angular/core";
import { Toast } from "primeng/toast";
import { CloseIconComponent } from "../close-icon/close-icon.component";

@Component({
  selector: "app-snackbar",
  imports: [Toast, CloseIconComponent],
  templateUrl: "./snackbar.component.html",
  styleUrl: "./snackbar.component.scss"
})
export class SnackbarComponent {
}
