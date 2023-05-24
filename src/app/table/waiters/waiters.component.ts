import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface waitersItem {

  waiter_id:number,
  First_name:string,
  Second_name:string,
  Phone_No:string,
  Id_No:string,
  Date_of_Birth:Date,

}

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.css']
})
export class WaitersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<waitersItem>;
  dataSource: MatTableDataSource<waitersItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['waiter_id',
    'First_name',
    'Second_name',
   'Phone_No',
    'Id_No',
    'Date_of_Birth','actions'];

  constructor() {

    const data:waitersItem[]=[
        {waiter_id: 1, First_name: 'John', Second_name: 'Doe', Phone_No: '1234567890', Id_No: 'ABC123', Date_of_Birth: new Date('1990-01-01')},
        {waiter_id: 2, First_name: 'Jane', Second_name: 'Smith', Phone_No: '9876543210', Id_No: 'XYZ456', Date_of_Birth: new Date('1985-05-10')},
        {waiter_id: 3, First_name: 'David', Second_name: 'Johnson', Phone_No: '5555555555', Id_No: 'DEF789', Date_of_Birth: new Date('1995-12-15')},
        {waiter_id: 4, First_name: 'Sarah', Second_name: 'Williams', Phone_No: '1112223333', Id_No: 'GHI012', Date_of_Birth: new Date('1988-08-20')},
        {waiter_id: 6, First_name: 'Michael', Second_name: 'Brown', Phone_No: '4444444444', Id_No: 'JKL345', Date_of_Birth: new Date('1992-06-25')},
        {waiter_id: 7, First_name: 'John', Second_name: 'Doe', Phone_No: '1234567890', Id_No: 'ABC123', Date_of_Birth: new Date('1990-01-01')},
        {waiter_id: 8, First_name: 'Jane', Second_name: 'Smith', Phone_No: '9876543210', Id_No: 'XYZ456', Date_of_Birth: new Date('1985-05-10')},
        {waiter_id: 9, First_name: 'David', Second_name: 'Johnson', Phone_No: '5555555555', Id_No: 'DEF789', Date_of_Birth: new Date('1995-12-15')},
        {waiter_id: 10, First_name: 'Sarah', Second_name: 'Williams', Phone_No: '1112223333', Id_No: 'GHI012', Date_of_Birth: new Date('1988-08-20')},
        {waiter_id: 11, First_name: 'Michael', Second_name: 'Brown', Phone_No: '4444444444', Id_No: 'JKL345', Date_of_Birth: new Date('1992-06-25')},
        {waiter_id: 7, First_name: 'John', Second_name: 'Doe', Phone_No: '1234567890', Id_No: 'ABC123', Date_of_Birth: new Date('1990-01-01')},
        {waiter_id: 8, First_name: 'Jane', Second_name: 'Smith', Phone_No: '9876543210', Id_No: 'XYZ456', Date_of_Birth: new Date('1985-05-10')},
        {waiter_id: 9, First_name: 'David', Second_name: 'Johnson', Phone_No: '5555555555', Id_No: 'DEF789', Date_of_Birth: new Date('1995-12-15')},
        {waiter_id: 10, First_name: 'Sarah', Second_name: 'Williams', Phone_No: '1112223333', Id_No: 'GHI012', Date_of_Birth: new Date('1988-08-20')},
        {waiter_id: 11, First_name: 'Michael', Second_name: 'Brown', Phone_No: '4444444444', Id_No: 'JKL345', Date_of_Birth: new Date('1992-06-25')},
        {waiter_id: 7, First_name: 'John', Second_name: 'Doe', Phone_No: '1234567890', Id_No: 'ABC123', Date_of_Birth: new Date('1990-01-01')},
        {waiter_id: 8, First_name: 'Jane', Second_name: 'Smith', Phone_No: '9876543210', Id_No: 'XYZ456', Date_of_Birth: new Date('1985-05-10')},
        {waiter_id: 9, First_name: 'David', Second_name: 'Johnson', Phone_No: '5555555555', Id_No: 'DEF789', Date_of_Birth: new Date('1995-12-15')},
        {waiter_id: 10, First_name: 'Sarah', Second_name: 'Williams', Phone_No: '1112223333', Id_No: 'GHI012', Date_of_Birth: new Date('1988-08-20')},
        {waiter_id: 11, First_name: 'Michael', Second_name: 'Brown', Phone_No: '4444444444', Id_No: 'JKL345', Date_of_Birth: new Date('1992-06-25')}
      ];
      this.dataSource = new MatTableDataSource(data);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  viewWaiter(id:number):void{
    alert("Waiter Selected")
  }
}
