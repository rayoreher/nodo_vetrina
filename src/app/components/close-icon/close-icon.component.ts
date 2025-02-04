import { Component } from "@angular/core";

@Component({
  selector: "app-close-icon",
  imports: [],
  template: `
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  `,
})
export class CloseIconComponent {
}
