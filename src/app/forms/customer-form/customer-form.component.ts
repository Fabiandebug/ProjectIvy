import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer-service/customer.service';
import { DialogRef } from '@angular/cdk/dialog';
import { SnackBarService } from 'src/app/services/snackbar-service/snack-bar.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})


export class CustomerFormComponent implements OnInit{

  customerForm: FormGroup;
  constructor( private _fb:FormBuilder,
    private _customerService:CustomerService,
    private _dialogRef: DialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBarService: SnackBarService
    ){
    this.customerForm=this._fb.group({
      id:'',
      firstName: '',
      secondName: '',
      gender: '',
      email: '',
      dateOfBirth: '',
      frequency: '',
      totalSpend: '',

    })

  }

  ngOnInit(): void {
    this.customerForm.patchValue(this.data);
    console.log(this.data)
  }
  onFormSubmit(){
    if(this.customerForm.valid){
      if(this.data){
        this._customerService.updateCustomer(this.data.id,this.customerForm.value).subscribe({
          next:(val:any)=>{
            this._snackBarService.openSnackBar('Data updated succesfully','done')
            this._dialogRef.close();
          },error:(err:any)=>{
            console.error(err)
          },
        });

      }else{
        this._customerService.addCustomer(this.customerForm.value).subscribe({
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
