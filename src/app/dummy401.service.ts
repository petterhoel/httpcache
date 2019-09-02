import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dummy401Service {
  is401 = false;
  isis401 = false;

  toggle401(): void {
    this.is401 = !this.is401;
  }

  all401(): void {
    this.isis401 = true;
    this.is401 = true;
  }

  reset(): void {
    this.isis401 = false;
    this.is401 = false;
  }

}
