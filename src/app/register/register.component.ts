import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

registerForm!:FormGroup;

constructor(private fb:FormBuilder,private router:Router,private auth:AuthService){
  this.registerForm=this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    username:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  })
 }


onSubmit(){
  if(this.registerForm.valid)
  {
    console.log(this.registerForm.value);

    this.auth.signUp(this.registerForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.registerForm.reset();
        this.router.navigate(['/login']);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  else
  {
    console.log("Invalid Form");
  } 
}
}

