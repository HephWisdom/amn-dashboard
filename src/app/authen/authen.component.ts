import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {
  hide = true;
  isLoggedIn = false;
  constructor(private router: Router ) {

   }

  ngOnInit(): void {
  }

  async logout(): Promise<void> {
    // todo
  }


  login(val:string, pass:any) {
    this.isLoggedIn = true;
    this.router.navigate(['/dashboard'])
  }

  getSpecificValues(val:string) {
    console.log(val)
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  

}
