import { AfterViewInit, Component, ViewChild,OnInit, Inject ,Input} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BillsFormComponent } from 'src/app/forms/bills-form/bills-form.component';
import { BillsService } from 'src/app/services/bills-service/bills.service';
import { interval } from 'rxjs';
import { SnackBarService } from 'src/app/services/snackbar-service/snack-bar.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface BillsItem {
  id:number,
  name:Text;
  quantity:number,
  price:number,
  total: number,

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
  @Input() billId!: number;



  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','quantity','price','total','actions'];

  constructor(private _dialog: MatDialog,
    private _billService: BillsService,
    private _snackBarService: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}



    ngOnInit(): void {
      this.getBillItem(this.billId);
      interval(1000).subscribe(() => {
        this.getBillItem(this.billId);
      });
    }

    getBillItem(id:number): void {
      this._billService.getBillItem(id).subscribe({
        next: (res) => {
          // Filter the bill items based on the provided bill ID
          const filteredItems = res.filter((item: { id: number; }) => item.id === id);

          this.dataSource = new MatTableDataSource(filteredItems);
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
      // this._billService.deleteBill(id).subscribe({
      //   next:(res)=>{
      //     this._snackBarService.openSnackBar('Bill Deleted Succesfully','done')
      //   },
      //   error(err) {
      //     console.log(err);
      //   },

      // })
    }
    openEditForm(data:any){
      // this._dialog.open(BillsFormComponent,{
      //   data,
      // });
    }


}
 {

}
