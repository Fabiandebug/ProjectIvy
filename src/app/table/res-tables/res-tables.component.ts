import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TablesService } from 'src/app/services/tables-service/tables.service';
import { SnackBarService } from 'src/app/services/snackbar-service/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { interval } from 'rxjs';
import { TablesFormComponent } from 'src/app/forms/tables-form/tables-form.component';



export interface ResTablesItem{
  id:number,
  tableName:string,
  description:string,
  tableNo:number,
  date:Date,
}

@Component({
  selector: 'app-res-tables',
  templateUrl: './res-tables.component.html',
  styleUrls: ['./res-tables.component.css']
})
export class ResTablesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ResTablesItem>;
  dataSource!: MatTableDataSource<ResTablesItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'tableName','description','tableNo','date','actions'];


  constructor(
    private _dialog: MatDialog,
    private _tableService: TablesService,
    private _snackBarService: SnackBarService
  ) {}


  ngOnInit(): void {
    this.getTableList();
    interval(1000).subscribe(() => {
      this.getTableList();
    });
  }

  getTableList(): void {
    this._tableService.getTableList().subscribe({
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
  deleteTable(id:number){
    this._tableService.deleteTable(id).subscribe({
      next:(res)=>{
        this._snackBarService.openSnackBar('Table Deleted Succesfully','done')
      },
      error(err) {
        console.log(err);
      },

    })
  }
  openEditForm(data:any){
    this._dialog.open(TablesFormComponent,{
      data,
    });
  }
  addTable():void{
    this._dialog.open(TablesFormComponent)
  }
}
