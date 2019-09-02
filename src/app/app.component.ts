import { Component } from '@angular/core';
import { Dummy401Service } from './dummy401.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpchache';
  is401 = this.four.is401;
  isis401 = this.four.isis401;
  constructor(public four: Dummy401Service) {}
  toggle401(): void {
    this.four.toggle401();
  }
  reset(): void {
    this.four.reset();
  }

  all401(): void {
    this.four.all401();
  }
}
