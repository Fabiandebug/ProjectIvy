import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BillsFormComponent } from 'src/app/forms/bills-form/bills-form.component';
import { BillsService } from 'src/app/services/bills-service/bills.service';
import { interval } from 'rxjs';
import { SnackBarService } from 'src/app/services/snackbar-service/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';

export interface BillsItem {
  billId:number,
  customerId:number;
  tableNumber:number,
  billAmount:number,
  date:Date,
  status:string,
}


@Component({
  selector: 'app-bill-items',
  templateUrl: './bill-items.component.html',
  styleUrls: ['./bill-items.component.css']
})
export class BillItemsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BillsItem>;
  dataSource!: MatTableDataSource<BillsItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['billId', 'customerId','tableNumber','billAmount','date','status','actions'];

  constructor(private _dialog: MatDialog,
    private _billService: BillsService,
    private _snackBarService: SnackBarService
    ) {}



    ngOnInit(): void {
      this.getBillList();
      interval(1000).subscribe(() => {
        this.getBillList();
      });
    }

    getBillList(): void {
      this._billService.getBillList().subscribe({
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
    deleteBillItem(id:number){
      this._billService.deleteBill(id).subscribe({
        next:(res)=>{
          this._snackBarService.openSnackBar('Bill Deleted Succesfully','done')
        },
        error(err) {
          console.log(err);
        },

      })
    }
    openEditForm(data:any){
      this._dialog.open(BillsFormComponent,{
        data,
      });
    }


}
 {

}
