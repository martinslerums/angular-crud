import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messages: string[] = [];
  private timeoutId: any;

  add(message: string) {
    this.messages.push(message);
    this.setClearTimeout(3000)
  }

  clear() {
    this.messages = [];
  }

  private setClearTimeout(duration: number) {
    this.clearTimeout();
    this.timeoutId = setTimeout(() => {
      this.clear();
    }, duration);
  }

  private clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}