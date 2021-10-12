import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

  async logout(): Promise<void> {
    // todo
  }


  getValue(val:string, pass:any) {
    console.log(val,pass)
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
  // async signIn(email:string, password: string): Promise<void>{
  //   //todo validate email
  //   if(!validateEmail(email)) return
  //   console.log('sig in');
    
  // }

}
