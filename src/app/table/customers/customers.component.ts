import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CustomerFormComponent } from 'src/app/forms/customer-form/customer-form.component';
import { CustomerService } from 'src/app/services/customer-service/customer.service';
import { interval } from 'rxjs';
import { SnackBarService } from 'src/app/services/snackbar-service/snack-bar.service';

export interface Customer {
  customer_id: number;
  firstName: string;
  secondName: string;
  gender: string;
  dateOfBirth: Date;
  email: string;
  frequency: number;
  totalSpend: number;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Customer>;

  dataSource!: MatTableDataSource<Customer>;

  constructor(private _dialog: MatDialog,
     private _customerService: CustomerService,
     private _snackBarService: SnackBarService
     ) {}

  displayedColumns: string[] = ['customer_id', 'firstName', 'secondName', 'gender', 'dateOfBirth', 'email', 'frequency', 'totalSpend', 'actions'];

  ngOnInit(): void {
    this.getCustomerList();
    interval(1000).subscribe(() => {
      this.getCustomerList();
    });
  }

  getCustomerList(): void {
    this._customerService.getCustomerList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  deleteCustomer(id:number){
    this._customerService.deleteCustomer(id).subscribe({
      next:(res)=>{
        this._snackBarService.openSnackBar('Customer Deleted Succesfully','done')
      },
      error(err) {
        console.log(err);
      },

    })
  }
  openEditForm(data:any){
    this._dialog.open(CustomerFormComponent,{
      data,
    });
  }
}
