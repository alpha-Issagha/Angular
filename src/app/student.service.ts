import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServiceUrl =  environment.API_BASE_URL;

  
  constructor(private http: HttpClient) {
  }
  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServiceUrl}/student/all`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServiceUrl}/student/add`, student);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiServiceUrl}/student/update`, student);
  }

  public deleteStudent(studentId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/student/delete/${studentId}`);
  }
}
