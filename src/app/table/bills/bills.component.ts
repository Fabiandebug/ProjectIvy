import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BillsDataSource,} from './bills-datasource';


export interface BillsItem {
bill_id:number,
customer_id:number;
table_no:number,
bill_amount:number,
date:Date,
status:string,
}

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BillsItem>;
  dataSource: MatTableDataSource<BillsItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['bill_id', 'customer_id','table_no','bill_amount','date','status','actions'];

  constructor() {
    const data: BillsItem[]=[
      { bill_id: 134, customer_id: 1, table_no: 1, bill_amount: 6786, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 142, customer_id: 2, table_no: 134, bill_amount: 6567, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 134, customer_id: 3, table_no: 15, bill_amount: 7676, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 156, customer_id: 4, table_no: 16, bill_amount: 8797, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 144, customer_id: 5, table_no: 17, bill_amount: 9988, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 122, customer_id: 6, table_no: 17, bill_amount: 9000, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 20, customer_id: 7, table_no: 1, bill_amount: 1000, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 19, customer_id: 8, table_no: 122, bill_amount: 3000, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 18, customer_id: 9, table_no: 1, bill_amount: 1000, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 17, customer_id: 10, table_no: 1, bill_amount: 1000, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 14, customer_id: 11, table_no: 20, bill_amount: 84564, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 19, customer_id: 12, table_no: 13, bill_amount: 9373, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 18, customer_id: 13, table_no: 1, bill_amount: 6364, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 51, customer_id: 14, table_no: 29, bill_amount: 3477, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 71, customer_id: 15, table_no: 23, bill_amount: 7634, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 78, customer_id: 16, table_no: 45, bill_amount: 487367, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 671, customer_id: 17, table_no: 56, bill_amount: 5636, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 61, customer_id: 18, table_no: 1, bill_amount: 3673, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 51, customer_id: 19, table_no: 1, bill_amount: 3673, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 5, customer_id: 20, table_no: 44, bill_amount: 56734, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 41, customer_id: 21, table_no: 55, bill_amount: 6765, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 21, customer_id: 22, table_no: 66, bill_amount: 567, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 21, customer_id: 23, table_no: 77, bill_amount: 2245, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 41, customer_id: 24, table_no: 88, bill_amount: 2415, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 41, customer_id: 25, table_no: 99, bill_amount: 234, date: new Date('2023-01-01'), status: 'Pending' },
  { bill_id: 34441, customer_id: 26, table_no: 100, bill_amount: 423, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 31, customer_id: 27, table_no: 200, bill_amount: 5344, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 21, customer_id: 28, table_no: 99, bill_amount: 435, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 11, customer_id: 29, table_no: 2, bill_amount: 2423, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 134, customer_id: 30, table_no: 1, bill_amount: 6786, date: new Date('2023-01-01'), status: 'Pending' },
  { bill_id: 142, customer_id: 31, table_no: 134, bill_amount: 6567, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 134, customer_id: 32, table_no: 15, bill_amount: 7676, date: new Date('2023-01-01'), status: 'Pending' },
  { bill_id: 156, customer_id: 33, table_no: 16, bill_amount: 8797, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 144, customer_id: 34, table_no: 17, bill_amount: 9988, date: new Date('2023-01-01'), status: 'Pending' },
  { bill_id: 122, customer_id: 35, table_no: 17, bill_amount: 9000, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 20, customer_id: 36, table_no: 1, bill_amount: 1000, date: new Date('2023-01-01'), status: 'Pending' },
  { bill_id: 19, customer_id: 37, table_no: 122, bill_amount: 3000, date: new Date('2023-01-01'), status: 'Paid' },
  { bill_id: 18, customer_id: 38, table_no: 1, bill_amount: 1000, date: new Date('2023-01-01'), status: 'Pending' },
  { bill_id: 17, customer_id: 39, table_no: 1, bill_amount: 1000, date: new Date('2023-01-01'), status: 'Paid' }
];
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  viewBill(bill_id:number):void{
    alert("Bill Selected")
  }
}
