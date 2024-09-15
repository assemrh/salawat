import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CookieService]
})
export class AppComponent {
  title = 'salawat';
  counter: number = 0;
  cookieKey: string = 'counterValue';

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    const savedValue = this.cookieService.get(this.cookieKey);
    if (savedValue) {
      this.counter = parseInt(savedValue, 10);
    }
  }

  increment(): void {
    this.counter++;
    this.cookieService.set(this.cookieKey, this.counter.toString());
  }

  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
      this.cookieService.set(this.cookieKey, this.counter.toString());
    }
  }

  reset(): void {
    this.counter = 0;
    this.cookieService.set(this.cookieKey, this.counter.toString());
  }
}
