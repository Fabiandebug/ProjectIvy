import { ParseSourceFile } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

 export interface Customer {
  customer_id: number;
  FName: string;
  Frequency: number;
  TotalSpend: number;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Customer>;
   dataSource: MatTableDataSource<Customer>;


   constructor() {
    const data: Customer[] = [
      { customer_id: 1, FName: 'John', Frequency: 1, TotalSpend: 500.00 },
      { customer_id: 2, FName: 'Alice', Frequency: 2, TotalSpend: 250.50 },
      { customer_id: 3, FName: 'Michael', Frequency: 1, TotalSpend: 700.00 },
      { customer_id: 4, FName: 'Sarah', Frequency: 2, TotalSpend: 150.25 },
      { customer_id: 5, FName: 'David', Frequency: 1, TotalSpend: 900.50 },
      { customer_id: 6, FName: 'Emily', Frequency: 1, TotalSpend: 400.75 },
      { customer_id: 7, FName: 'James', Frequency: 2, TotalSpend: 300.00 },
      { customer_id: 8, FName: 'Olivia', Frequency: 1, TotalSpend: 650.00 },
      { customer_id: 9, FName: 'Daniel', Frequency: 1, TotalSpend: 750.25 },
      { customer_id: 10, FName: 'Sophia', Frequency: 2, TotalSpend: 200.50 },
      { customer_id: 11, FName: 'Matthew', Frequency: 1, TotalSpend: 850.00 },
      { customer_id: 12, FName: 'Isabella', Frequency: 1, TotalSpend: 550.75 },
      { customer_id: 13, FName: 'Andrew', Frequency: 2, TotalSpend: 100.00 },
      { customer_id: 14, FName: 'Ava', Frequency: 1, TotalSpend: 300.50 },
      { customer_id: 15, FName: 'Benjamin', Frequency: 1, TotalSpend: 950.00 },
      { customer_id: 16, FName: 'Mia', Frequency: 2, TotalSpend: 180.25 },
      { customer_id: 17, FName: 'Christopher', Frequency: 1, TotalSpend: 600.50 },
      { customer_id: 18, FName: 'Ella', Frequency: 1, TotalSpend: 350.75 },
      { customer_id: 19, FName: 'Jackson', Frequency: 2, TotalSpend: 250.00 },
      { customer_id: 20, FName: 'Amelia', Frequency: 1, TotalSpend: 700.00 },
      { customer_id: 21, FName: 'Henry', Frequency: 1, TotalSpend: 450.75 },
      { customer_id: 22, FName: 'Charlotte', Frequency: 2, TotalSpend: 150.50 },
      { customer_id: 23, FName: 'Sebastian', Frequency: 1, TotalSpend: 800.00 },
      { customer_id: 24, FName: 'Grace', Frequency: 1, TotalSpend: 500.75 },
      { customer_id: 25, FName: 'Aiden', Frequency: 2, TotalSpend: 120.00 },
      { customer_id: 26, FName: 'Lily', Frequency: 1, TotalSpend: 250.50 },
      { customer_id: 27, FName: 'Daniel', Frequency: 1, TotalSpend: 950.25 },
      { customer_id: 28, FName: 'Zoe', Frequency: 2, TotalSpend: 220.50 },
      { customer_id: 29, FName: 'David', Frequency: 1, TotalSpend: 750.00 },
      { customer_id: 30, FName: 'Victoria', Frequency: 1, TotalSpend:4000},

  ];
  this.dataSource = new MatTableDataSource(data);
}

  displayedColumns: string[] = ['customer_id', 'FName', 'Frequency', 'TotalSpend','actions'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  viewCustomer(customer_id:number):void{
    alert("Cusomer Selected")
  }

}
