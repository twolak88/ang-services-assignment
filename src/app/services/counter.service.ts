import { EventEmitter, Injectable } from "@angular/core";
import { AppComponent } from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  toActiveFired = new EventEmitter<void>();
  toInactiveFired = new EventEmitter<void>();

  toActive() {
    this.toActiveFired.emit();
  }

  toInactive() {
    this.toInactiveFired.emit();
  }
}
