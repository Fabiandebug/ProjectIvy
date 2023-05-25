import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WaiterService } from 'src/app/services/waiters-service/waiter.service';
import { SnackBarService } from 'src/app/services/snackbar-service/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { interval } from 'rxjs';
import { WaiterFormComponent } from 'src/app/forms/waiter-form/waiter-form.component';


export interface waitersItem {

  id:number
  firstName:string
  secondName:string
  gender:string
  phoneNumber:number
  idnumber:number
  dateOfBirth:Date

}

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.css']
})
export class WaitersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<waitersItem>;
  dataSource!: MatTableDataSource<waitersItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */


  constructor(private _dialog: MatDialog,
    private _waiterService: WaiterService,
    private _snackBarService: SnackBarService
    ) {}

  displayedColumns = ['id',
  'firstName',
  'secondName',
  'gender',
  'phoneNumber',
  'idnumber',
  'dateOfBirth','actions'];

  ngOnInit(): void {
    this.getWaiterList();
    interval(1000).subscribe(() => {
      this.getWaiterList();
    });
  }

  getWaiterList(): void {
    this._waiterService.getWaiterList().subscribe({
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
  deleteWaiter(id:number){
    this._waiterService.deleteWaiter(id).subscribe({
      next:(res)=>{
        this._snackBarService.openSnackBar('Waiter Deleted Succesfully','done')
      },
      error(err) {
        console.log(err);
      },

    })
  }
  openEditForm(data:any){
    this._dialog.open(WaiterFormComponent,{
      data,
    });
  }
  addWaiter():void{
    this._dialog.open(WaiterFormComponent)
  }
}
