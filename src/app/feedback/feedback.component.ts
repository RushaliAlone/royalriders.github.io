import { Component } from "@angular/core";
import {  FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl:'./feedback.component.html',
    styleUrls:['./feedback.component.css']
})
export class RoyalFeedBack{
    title:string='FEEDBACK';

    myForm= new FormGroup({
        pname:new FormControl('Rajesh',Validators.required),
        // fdate:new FormControl('2022-07-06',Validators.required),
        rating:new FormControl(5,[Validators.required,Validators.min(1),Validators.max(5)]),
        comments:new FormControl('Comment',Validators.required)
    });

    onFormSubmit():void{
        console.log("****FeedBack Submitted = ");
        console.log(this.myForm.value);        
        console.log("Person Name="+this.myForm.controls['pname'].value);
        console.log("rating="+this.myForm.controls['rating'].value);
        // console.log("Date="+this.myForm.controls['fdate'].value);
    }
    get pname():any{
        return this.myForm.get('pname');
    }
    // get fdate():any{
    //     return this.myForm.get('fdate');
    // }
    get rating():any{
        return this.myForm.get('rating');
    }
    get comments():any{
        return this.myForm.get('comments');
    }
}