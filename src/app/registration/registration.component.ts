import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {UserModel} from './user.model';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import {UserService} from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean;
  userModel: UserModel;

  constructor(private formBuilder: FormBuilder, private service: UserService) { }

  ngOnInit() {
    this.submitted = false;
    this.registerForm = this.formBuilder.group({
      name:     ['', [Validators.required, Validators.minLength(3), this.validatorName]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    })
  }

  validatorName(control: FormControl){
      let pattern = /^[0-1]{4}$/;
      console.log(control);
      const flag = pattern.test(control.value);
      let result = (flag === false)? {validatorName: true}:null;

      // let result = (flag === false)? {validatorName: {name: control.value}}:null;
      return result;
  }

  get f(){ return this.registerForm.controls}

  bindToModel(){
    this.userModel = {
      name:this.f.name.value.trim(),
      username:this.f.username.value.trim(),
      email: this.f.email.value.trim(),
      password: this.f.password.value.trim()
    }
    return this.userModel;
  }
  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    this.submitted = false;
    let user$ = this.bindToModel();

    this.service.createUser(user$).subscribe(
      data =>console.log(data),
      error=> console.log(error)
    );

    console.log(this.userModel);
  }

}
