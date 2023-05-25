import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snackbar-service/snack-bar.service';
import { TablesService } from 'src/app/services/tables-service/tables.service';

@Component({
  selector: 'app-tables-form',
  templateUrl: './tables-form.component.html',
  styleUrls: ['./tables-form.component.css']
})
export class TablesFormComponent {
  tableForm: FormGroup;

  constructor(
    private _fb:FormBuilder,
    private _tableService:TablesService,
    private _dialogRef: DialogRef<TablesService>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBarService: SnackBarService
   ){

    this.tableForm=this._fb.group({
      id: '',
      tableName: '',
      description: '',
      tableNo: '',
      date:'',

    })
}

ngOnInit(): void {
  this.tableForm.patchValue(this.data);
  console.log(this.data)
}
onFormSubmit(){
  if(this.tableForm.valid){
    if(this.data){
      this._tableService.updateTable(this.data.id,this.tableForm.value).subscribe({
        next:(val:any)=>{
          this._snackBarService.openSnackBar('Table updated succesfully','done')
          this._dialogRef.close();
        },error:(err:any)=>{
          console.error(err)
        },
      });

    }else{
      this._tableService.addTable(this.tableForm.value).subscribe({
        next:(val:any)=>{
          this._snackBarService.openSnackBar('Table Added succesfully','done')
          this._dialogRef.close();
        },error:(err:any)=>{
          console.error(err)
        },
      });
    }
  }
}

}
