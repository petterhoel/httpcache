import { Component } from '@angular/core';
import { Dummy401Service } from './dummy401.service';
import { HttpClient } from '@angular/common/http';
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpchache';
  is401 = this.four.is401;
  isis401 = this.four.isis401;
  employees: Employee[] = [];
  constructor(
    private http: HttpClient,
    public four: Dummy401Service) { }
  toggle401(): void {
    this.four.toggle401();
  }
  reset(): void {
    this.four.reset();
  }

  getData(): void {
    const url = 'http://dummy.restapiexample.com/api/v1/employees';
    this.employees = [];
    this.http.get<Employee[]>(url)
      .pipe(delay(10))
      .subscribe(employees => {
        this.employees = employees;
      });
  }

  all401(): void {
    this.four.all401();
  }
}


interface Employee {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
}
