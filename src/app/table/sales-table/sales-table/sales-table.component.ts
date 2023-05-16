import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface SalesTableItem {
  id: number;
  orderNumber: string;
  tableNumber: number;
  billAmount: number;
  status: string;
}

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css']
})
export class SalesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SalesTableItem>;
  dataSource: MatTableDataSource<SalesTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'orderNumber', 'tableNumber', 'billAmount', 'status'];

  constructor() {
    const data: SalesTableItem[] = [
      {id: 1, orderNumber: 'ORD001', tableNumber: 4, billAmount: 200.00, status: 'paid'},
      {id: 2, orderNumber: 'ORD002', tableNumber: 2, billAmount: 150.50, status: 'pending'},
      {id: 3, orderNumber: 'ORD003', tableNumber: 1, billAmount: 75.25, status: 'paid'},
      {id: 4, orderNumber: 'ORD004', tableNumber: 3, billAmount: 95.00, status: 'paid'},
      {id: 5, orderNumber: 'ORD005', tableNumber: 6, billAmount: 120.75, status: 'pending'},
      {id: 1, orderNumber: 'ORD001', tableNumber: 4, billAmount: 200.00, status: 'paid'},
      {id: 2, orderNumber: 'ORD002', tableNumber: 2, billAmount: 150.50, status: 'pending'},
      {id: 3, orderNumber: 'ORD003', tableNumber: 1, billAmount: 75.25, status: 'paid'},
      {id: 4, orderNumber: 'ORD004', tableNumber: 3, billAmount: 95.00, status: 'paid'},
      {id: 5, orderNumber: 'ORD005', tableNumber: 6, billAmount: 120.75, status: 'pending'},
      {id: 6, orderNumber: 'ORD006', tableNumber: 5, billAmount: 85.50, status: 'paid'},
      {id: 7, orderNumber: 'ORD007', tableNumber: 1, billAmount: 300.00, status: 'pending'},
      {id: 8, orderNumber: 'ORD008', tableNumber: 7, billAmount: 45.25, status: 'paid'},
      {id: 9, orderNumber: 'ORD009', tableNumber: 2, billAmount: 125.00, status: 'paid'},
      {id: 10, orderNumber: 'ORD010', tableNumber: 4, billAmount: 90.00, status: 'pending'},
      {id: 11, orderNumber: 'ORD011', tableNumber: 6, billAmount: 80.25, status: 'paid'},
      {id: 12, orderNumber: 'ORD012', tableNumber: 1, billAmount: 65.50, status: 'pending'},
      {id: 13, orderNumber: 'ORD013', tableNumber: 3, billAmount: 145.00, status: 'paid'},
      {id: 14, orderNumber: 'ORD014', tableNumber: 5, billAmount: 75.25, status: 'pending'},
      {id: 15, orderNumber: 'ORD015', tableNumber: 2, billAmount: 95.50, status: 'paid'},
      {id: 16, orderNumber: 'ORD016', tableNumber: 7, billAmount: 200.00, status: 'paid'},
      {id: 17, orderNumber: 'ORD017', tableNumber: 4, billAmount: 50.00, status: 'pending'},
      {id: 18, orderNumber: 'ORD018', tableNumber: 1, billAmount: 110.75, status: 'paid'},
      {id: 19, orderNumber: 'ORD019', tableNumber: 3, billAmount: 95.50, status: 'pending'},
      {id: 20, orderNumber: 'ORD020', tableNumber: 6, billAmount: 250.00, status: 'paid'},
      {id: 21, orderNumber: 'ORD021', tableNumber: 2, billAmount: 80.25, status: 'paid'},
      {id: 22, orderNumber: 'ORD022', tableNumber: 7, billAmount: 65.50, status: 'pending'}
    ];
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
