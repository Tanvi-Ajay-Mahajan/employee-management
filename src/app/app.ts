import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Employee } from './model/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FormsModule,RouterLink , CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'employee';
  employees: Employee[] = [];

  addToList(newEmp: Employee) {
    this.employees.push(newEmp);
  }
}
