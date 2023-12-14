import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerForm = this.fb.group({
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\\.[a-zA-Z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get mobile() { return this.registerForm.get('mobile'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  public errorMessages = {
    email :[{ type:'required',message:'Email is required'},{ type:'pattern',message:'Enter valid Mail'}], 
    mobile :[{ type:'required',message:'Number is requied'},{ type:'pattern',message:'Enter valid Phone number'}],
    password :[{ type:'required',message:'Password is required'},{ type:'minlength',message:'Minimum six Characters required'}],
  }

  constructor(
    private fb: FormBuilder,
    private router: Router) {
  }

  /** Register User */
  register() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      this.router.navigate(['home'])
    }
  }
}
