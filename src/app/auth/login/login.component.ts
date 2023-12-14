import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm = this.fb.group({
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get mobile() { return this.loginForm.get('mobile'); }
  get password() { return this.loginForm.get('password'); }

  public errorMessages = {
    mobile: [{ type: 'required', message: 'Number is requied' }, { type: 'pattern', message: 'Enter valid Phone number' }],
    password: [{ type: 'required', message: 'Password is required' }, { type: 'minlength', message: 'Minimum six Characters required' }],
  }

  constructor(private fb: FormBuilder) {
  }

  /** Login User */
  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

}
