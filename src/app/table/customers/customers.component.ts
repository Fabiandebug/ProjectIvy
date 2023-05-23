import { ParseSourceFile } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

 export interface Customer {
  customer_id: number;
  FName: string;
  SName:string;
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
      { customer_id: 1, FName: 'John', SName: 'Kamau',Frequency: 1, TotalSpend: 500.00 },
      { customer_id: 2, FName: 'Alice' , SName: 'Kamau', Frequency: 2, TotalSpend: 250.50 },
      { customer_id: 3, FName: 'Michael' , SName: 'Kamau', Frequency: 1, TotalSpend: 700.00 },
      { customer_id: 4, FName: 'Sarah' , SName: 'Kamau', Frequency: 2, TotalSpend: 150.25 },
      { customer_id: 5, FName: 'David' , SName: 'Kamau', Frequency: 1, TotalSpend: 900.50 },
      { customer_id: 6, FName: 'Emily' , SName: 'Kamau', Frequency: 1, TotalSpend: 400.75 },
      { customer_id: 7, FName: 'James' , SName: 'Kamau', Frequency: 2, TotalSpend: 300.00 },
      { customer_id: 8, FName: 'Olivia' , SName: 'Kamau', Frequency: 1, TotalSpend: 650.00 },
      { customer_id: 9, FName: 'Daniel' , SName: 'Kamau', Frequency: 1, TotalSpend: 750.25 },
      { customer_id: 10, FName: 'Sophia' , SName: 'Kamau', Frequency: 2, TotalSpend: 200.50 },
      { customer_id: 11, FName: 'Matthew' , SName: 'Kamau', Frequency: 1, TotalSpend: 850.00 },
      { customer_id: 12, FName: 'Isabella' , SName: 'Kamau', Frequency: 1, TotalSpend: 550.75 },
      { customer_id: 13, FName: 'Andrew' , SName: 'Kamau', Frequency: 2, TotalSpend: 100.00 },
      { customer_id: 14, FName: 'Ava' , SName: 'Kamau', Frequency: 1, TotalSpend: 300.50 },
      { customer_id: 15, FName: 'Benjamin' , SName: 'Kamau', Frequency: 1, TotalSpend: 950.00 },
      { customer_id: 16, FName: 'Mia' , SName: 'Kamau', Frequency: 2, TotalSpend: 180.25 },
      { customer_id: 17, FName: 'Christopher' , SName: 'Kamau', Frequency: 1, TotalSpend: 600.50 },
      { customer_id: 18, FName: 'Ella' , SName: 'Kamau', Frequency: 1, TotalSpend: 350.75 },
      { customer_id: 19, FName: 'Jackson' , SName: 'Kamau', Frequency: 2, TotalSpend: 250.00 },
      { customer_id: 20, FName: 'Amelia' , SName: 'Kamau', Frequency: 1, TotalSpend: 700.00 },
      { customer_id: 21, FName: 'Henry' , SName: 'Kamau', Frequency: 1, TotalSpend: 450.75 },
      { customer_id: 22, FName: 'Charlotte' , SName: 'Kamau', Frequency: 2, TotalSpend: 150.50 },
      { customer_id: 23, FName: 'Sebastian' , SName: 'Kamau', Frequency: 1, TotalSpend: 800.00 },
      { customer_id: 24, FName: 'Grace' , SName: 'Kamau', Frequency: 1, TotalSpend: 500.75 },
      { customer_id: 25, FName: 'Aiden' , SName: 'Kamau', Frequency: 2, TotalSpend: 120.00 },
      { customer_id: 26, FName: 'Lily' , SName: 'Kamau', Frequency: 1, TotalSpend: 250.50 },
      { customer_id: 27, FName: 'Daniel' , SName: 'Kamau', Frequency: 1, TotalSpend: 950.25 },
      { customer_id: 28, FName: 'Zoe' , SName: 'Kamau', Frequency: 2, TotalSpend: 220.50 },
      { customer_id: 29, FName: 'David' , SName: 'Kamau', Frequency: 1, TotalSpend: 750.00 },
      { customer_id: 30, FName: 'Victoria' , SName: 'Kamau', Frequency: 1, TotalSpend:4000},

  ];
  this.dataSource = new MatTableDataSource(data);
}

  displayedColumns: string[] = ['customer_id', 'FName','SName', 'Frequency', 'TotalSpend','actions'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  viewCustomer(customer_id:number):void{
    alert("Cusomer Selected")
  }

}
