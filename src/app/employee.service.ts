import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url='http://localhost:3434/emp'
  constructor(private http:HttpClient) { }
  getEmployee()
  {
    return this.http.get(this.url)
  }
}
