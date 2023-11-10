import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);

      this.auth.login(this.loginForm.value).subscribe(
        (data)=>{          
          console.log(data);
          this.auth.storeToken(data.token);
          localStorage.setItem('username',data.username);        
          this.loginForm.reset();
          this.router.navigate(['/dinner']);
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
