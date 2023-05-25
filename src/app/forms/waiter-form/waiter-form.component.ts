import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WaiterService } from 'src/app/services/waiters-service/waiter.service';
import { DialogRef } from '@angular/cdk/dialog';
import { SnackBarService } from 'src/app/services/snackbar-service/snack-bar.service';
@Component({
  selector: 'app-waiter-form',
  templateUrl: './waiter-form.component.html',
  styleUrls: ['./waiter-form.component.css']
})
export class WaiterFormComponent implements OnInit {

  waiterForm: FormGroup;

  constructor(
    private _fb:FormBuilder,
    private _waiterService:WaiterService,
    private _dialogRef: DialogRef<WaiterService>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBarService: SnackBarService
   ){

    this.waiterForm=this._fb.group({
      id:'',
      firstName: '',
      secondName: '',
      gender: '',
      phoneNumber:'',
      idnumber: '',
      dateOfBirth: '',

    })
}

ngOnInit(): void {
  this.waiterForm.patchValue(this.data);
  console.log(this.data)
}
onFormSubmit(){
  if(this.waiterForm.valid){
    if(this.data){
      this._waiterService.updateWaiter(this.data.id,this.waiterForm.value).subscribe({
        next:(val:any)=>{
          this._snackBarService.openSnackBar('Data updated succesfully','done')
          this._dialogRef.close();
        },error:(err:any)=>{
          console.error(err)
        },
      });

    }else{
      this._waiterService.addWaiter(this.waiterForm.value).subscribe({
        next:(val:any)=>{
          this._snackBarService.openSnackBar('Customer Added succesfully','done')
          this._dialogRef.close();
        },error:(err:any)=>{
          console.error(err)
        },
      });
    }
  }
}

}

