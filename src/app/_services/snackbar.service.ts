import { inject, Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable()
export class SnackbarService {
  messageService = inject(MessageService);

  infoMessage(message: string) {
    this.messageService.add({ detail: message, life: 2000 });
  }

  errorMessage(message: string) {
    this.messageService.add({ severity: 'error', detail: message, life: 2000 });
  }
}
