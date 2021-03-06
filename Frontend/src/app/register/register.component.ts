import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from '../services/register.service';

import { register } from '../model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  _register: register;
  registerArray = [];
  submitted = false;

  constructor(private fb: FormBuilder, private RegService: RegisterService, private router: Router) {
  }

  ngOnInit() {

    this.RegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      age: ['', [Validators.required]]

    });
  }


  saveRegisterData() {
    this.submitted = true;
    if (this.RegisterForm.invalid) {
      // alert('Please fill all the details');
      return;
    }
    console.warn(this.RegisterForm.value);
    this.RegService.saveRegisterData(this.RegisterForm.value).subscribe(data => {
      this.router.navigate(['/login'])


    })
  }
  onReset() {
    this.submitted = false;
    this.RegisterForm.reset();
  }

}
