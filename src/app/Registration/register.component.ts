import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']

})
export class RoyalRegister{

    cities:string[]=['Select','Patana','Pune','Nagpur','Aurangabad','Mumbai','Chandrapur','Delhi','Bangaluru','Raipur'];

    onFormSubmit(userForm:NgForm):void{
        console.log(userForm.value);
        console.log("First Name="+userForm.controls['fname'].value);
        console.log("Last Name="+userForm.controls['lname'].value);
        console.log("Gender="+userForm.controls['gender'].value);
    }
    onClear(userForm:NgForm):void{
        userForm.reset();

    }

}