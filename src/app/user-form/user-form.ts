import { Component,inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  
    fb=inject(FormBuilder);
  private _UserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  
  public get UserForm_1() {
    return this._UserForm;
  }
  public set UserForm_1(value) {
    this._UserForm = value;
  }
  public get UserForm() {
    return this._UserForm;
  }
  public set UserForm(value) {
    this._UserForm = value;
  }

  onSubmit() {
    if (this.UserForm.invalid) {
      this.UserForm.markAllAsTouched();
      return;
    }

    console.log(this.UserForm.value);
  }
}


//private _UserForm = new FormGroup({
    //name: new FormControl(''),
    //email: new FormControl(''),
    //password: new FormControl(''),