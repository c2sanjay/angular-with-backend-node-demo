import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [RegisterService]
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder, private router: Router, private RegService: RegisterService) { }

  loginForm: FormGroup = this.builder.group({

    userName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  })

  ngOnInit() {
  }



  saveLogin() {
    this.RegService.saveLoginData(this.loginForm.value).subscribe(data => {
      if (data.success == true) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userName', data.userName);
        this.router.navigateByUrl('/');
      }
      else {
        console.log('Login Failed')
      }
    })
  }
}
