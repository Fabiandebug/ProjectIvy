import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ResTablesDataSource,  } from './res-tables-datasource';


export interface ResTablesItem{
  id:number,
  table_name:string,
  description:string,
  table_no:number,
}

@Component({
  selector: 'app-res-tables',
  templateUrl: './res-tables.component.html',
  styleUrls: ['./res-tables.component.css']
})
export class ResTablesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ResTablesItem>;
  dataSource: MatTableDataSource<ResTablesItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'table_name','description','table_no','actions'];

  constructor() {
    const data :ResTablesItem[]=[
      { id: 1, table_name: 'chui', description: '15 pack', table_no: 1 },
  { id: 2, table_name: 'table2', description: 'description2', table_no: 2 },
  { id: 3, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 4, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 243, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 13, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 66, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 6666, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 63, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 553, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 53, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 33, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 23, table_name: 'table3', description: 'description3', table_no: 3 },
  { id:13, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 93, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 93, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 83, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 63, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 43, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 1, table_name: 'chui', description: '15 pack', table_no: 1 },
  { id: 2, table_name: 'table2', description: 'description2', table_no: 2 },
  { id: 3, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 4, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 243, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 13, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 66, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 6666, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 63, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 553, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 53, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 33, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 23, table_name: 'table3', description: 'description3', table_no: 3 },
  { id:13, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 93, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 93, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 83, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 63, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 43, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 1, table_name: 'chui', description: '15 pack', table_no: 1 },
  { id: 2, table_name: 'table2', description: 'description2', table_no: 2 },
  { id: 3, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 4, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 243, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 13, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 66, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 6666, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 63, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 553, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 53, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 33, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 23, table_name: 'table3', description: 'description3', table_no: 3 },
  { id:13, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 93, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 93, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 83, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 63, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 43, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 1, table_name: 'chui', description: '15 pack', table_no: 1 },
  { id: 2, table_name: 'table2', description: 'description2', table_no: 2 },
  { id: 3, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 4, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 243, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 43, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 23, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 36, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 355, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 4, table_name: 'table3', description: 'description3', table_no: 3 },
  { id: 28, table_name: 'table28', description: 'description28', table_no: 28 },
  { id: 29, table_name: 'table29', description: 'description29', table_no: 29 },
  { id: 30, table_name: 'table30', description: 'description30', table_no: 30 }
    ];
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  viewTable(id:number):void{
    alert("Table Selected")
  }
}

