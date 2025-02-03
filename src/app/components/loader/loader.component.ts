import { Component, effect, inject } from "@angular/core";
import { ProgressBar } from "primeng/progressbar";
import { CharityStore } from "../../_store/charity.store";

const OVERFLOW_HIDDEN_CLASS = 'body-overflow-hidden';

@Component({
  selector: "app-loader",
  imports: [ProgressBar],
  templateUrl: "./loader.component.html",
  styleUrl: "./loader.component.scss",
})
export class LoaderComponent {
  charityStore = inject(CharityStore);
  constructor() {
    effect(() => {
      if (this.charityStore.loading()) {
        document.getElementsByTagName("body").item(0)?.classList.add(
          OVERFLOW_HIDDEN_CLASS,
        );
      } else {
        document.getElementsByTagName("body").item(0)?.classList.remove(
          OVERFLOW_HIDDEN_CLASS,
        );
      }
    });
  }
}
