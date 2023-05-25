import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BillsService } from 'src/app/services/bills-service/bills.service';
import { SnackBarService } from 'src/app/services/snackbar-service/snack-bar.service';

@Component({
  selector: 'app-bills-form',
  templateUrl: './bills-form.component.html',
  styleUrls: ['./bills-form.component.css']
})
export class BillsFormComponent implements OnInit{

  billsForm: FormGroup;
  constructor( private _fb:FormBuilder,
    private _billsService:BillsService,
    private _dialogRef: DialogRef<BillsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBarService: SnackBarService
    ){
    this.billsForm=this._fb.group({
      id:'',
      customerId:'',
      tableNumber:'',
      billAmount:'',
      date:'',
      status:''
    })

  }

  ngOnInit(): void {
    this.billsForm.patchValue(this.data);
    console.log(this.data)
  }
  onFormSubmit(){
    if(this.billsForm.valid){
      if(this.data){
        this._billsService.updateBill(this.data.id,this.billsForm.value).subscribe({
          next:(val:any)=>{
            this._snackBarService.openSnackBar('Bill updated succesfully','done')
            this._dialogRef.close();
          },error:(err:any)=>{
            console.error(err)
          },
        });

      }else{
        this._billsService.addBill(this.billsForm.value).subscribe({
          next:(val:any)=>{
            this._snackBarService.openSnackBar('Bill Added succesfully','done')
            this._dialogRef.close();
          },error:(err:any)=>{
            console.error(err)
          },
        });
      }
    }
  }

}

