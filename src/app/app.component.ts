import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public students: Student[] = [];
  constructor(private studentService: StudentService){}

  ngOnInit(): void {
      this.getStudent();
  }
  public getStudent(): void{
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
