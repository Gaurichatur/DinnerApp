import { Component } from '@angular/core';
import { DinnerService } from '../dinner.service';
import { Dinner } from '../dinnermodel';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent {
dinners!:any;
title="Dinner Details";
dinnerins: Dinner = new Dinner();
dinnerForm: any;
username:any;
//construcor
constructor(private dinneobj:DinnerService,private formbuilder:FormBuilder,private router:Router){
  this.dinnerForm=this.formbuilder.group({
    title:['',Validators.required],
    eventDate:['',Validators.required],
    description:['',Validators.required],
    hostedBy:['',Validators.required],
    contactPhone:['',Validators.required],
    address:['',Validators.required],
    country:['',Validators.required],
    latitude:['',Validators.required],
    longitude:['',Validators.required]
  })
}
ngOnInit(): void {
  if(localStorage.getItem('username')!=null)
    {
      this.username=localStorage.getItem('username');
    }

  this.getDinnerDetails();
}
getDinnerDetails(){
  console.log("getDinnerDetails");
  this.dinneobj.getDinners().subscribe((data)=>{
    console.log(data);
    this.dinners=data;
  })

}
onSubmit(dinnerForm:any){
  console.log("inside ngOnsubmit");
  console.log(this.dinnerForm.value);

  this.addDinner(this.dinnerForm.value);
}
addDinner(dinnerForm:any){
  console.log("addDinner");
  this.dinnerins = dinnerForm ;
  this.dinneobj.createDinner(this.dinnerins).subscribe((data)=>{
    console.log(data);
    this.getDinnerDetails();
  })
 
}
UpdateDinner(dinners:any){
  console.log("updateDinner");
  this.dinnerins.id=dinners.id;
  this.dinnerins.Title="Dinner";
  this.dinners.EventDate="2021-09-09";
  this.dinnerins.Description="Dgaurir";
  this.dinnerins.HostedBy="Dinner";
  this.dinnerins.ContactPhone="123-123-1234";
  this.dinnerins.Address="Dinner";
  this.dinnerins.Country="indiar";
  this.dinnerins.Latitude=123;
  this.dinnerins.Longitude=123;
  this.dinneobj.updateDinner(dinners.id,this.dinnerins).subscribe((data)=>{
    console.log(data);
    this.getDinnerDetails();
  } )

}
DeleteDinner(id:number){
  console.log("deleteDinner");
  this.dinneobj.deleteDinner(id).subscribe((data)=>{
    console.log(data);
    this.getDinnerDetails();
  })
}
logout(){
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  localStorage.clear();
  this.router.navigate(['/']);
}


// //construcor
// constructor(private contactobj:ContactService,private formbuilder:FormBuilder){
//   // this.contactForm=this.formbuilder.group({
//   //   name:['',Validators.compose([Validators.required,Validators.maxLength(20),Validators.minLength(5)])],
//   //   email:['',Validators.required],
//   //   phoneNumber:['',Validators.required,Validators.maxLength(10)],
//   //   address:['',Validators.required],
//   //   city:['',Validators.required],
//   //   region:['',Validators.required],
//   //   postalCode:['',Validators.required],
//   //   country:['',Validators.required]
//   })
// }


// constructor(private dinneobj:DinnerService) { }
// ngOnInit(): void {
//   this.getDinnerDetails();
// }
// getDinnerDetails(){
//   console.log("getDinnerDetails");
//   this.dinneobj.getDinners().subscribe((data)=>{
//     console.log(data);
//     this.dinners=data;
//   })

// }
// onSubmit(contactForm:any){
//   console.log("inside ngOnsubmit");
//   console.log(this.contactForm.value);

//   this.addContact(this.contactForm.value);
// }

// addDinner(){
//   // console.log("addDinner");
//   // this.dinnerins.Title="Dinner";
//   // this.dinners.EventDate="2021-11-09";
//   // this.dinnerins.Description="Dinner";
//   // this.dinnerins.HostedBy="Dinner";
//   // this.dinnerins.ContactPhone="123-123-1234";
//   // this.dinnerins.Address="Dinner";
//   // this.dinnerins.Country="indiar";
//   // this.dinnerins.Latitude=123;
//   // this.dinnerins.Longitude=123;
 
//   // this.dinneobj.createDinner(this.dinnerins).subscribe((data)=>{
//   //   console.log(data);
//   //   this.getDinnerDetails();
//   // })
//   this.dinnerins = contactForm ;
//   this.dinneobj.createDinner(this.dinnerins).subscribe((data)=>{
//     console.log(data);
//     this.getDinnerDetails();
//   })
 
// }
updateDinner(dinners:any){
  console.log("updateDinner");
  this.dinnerins.id=dinners.id;
  this.dinnerins.Title="Dinner";
  this.dinners.EventDate="2021-09-09";
  this.dinnerins.Description="Dgaurir";
  this.dinnerins.HostedBy="Dinner";
  this.dinnerins.ContactPhone="123-123-1234";
  this.dinnerins.Address="Dinner";
  this.dinnerins.Country="indiar";
  this.dinnerins.Latitude=123;
  this.dinnerins.Longitude=123;
  this.dinneobj.updateDinner(dinners.id,this.dinnerins).subscribe((data)=>{
    console.log(data);
    this.getDinnerDetails();
  } )

}
// DeleteDinner(id:number){
//   console.log("deleteDinner");
//   this.dinneobj.deleteDinner(id).subscribe((data)=>{
//     console.log(data);
//     this.getDinnerDetails();
//   })
}
// }
