import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICustomerGroup } from '../interfaces/customer';

@Component({
  selector: 'app-group-customers',
  standalone: false,
  styleUrl: './group-customers.css',
  templateUrl: './group-customers.html',
})
export class GroupCustomers implements OnInit {
  public customerGroups: ICustomerGroup[] = [];
  public errMessage: string = '';
  private _url: string = 'assets/data/customers.json';

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.getCustomerGroups().subscribe({
      next: (data) => { this.customerGroups = data; },
      error: (err) => { this.errMessage = err.message; }
    });
  }

  getCustomerGroups(): Observable<ICustomerGroup[]> {
    return this._http.get<ICustomerGroup[]>(this._url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || 'Không thể tải dữ liệu!'));
  }
}