import { Component } from "@angular/core";
import { Member } from "./member";

@Component({
    templateUrl:'./member.component.html',
    styleUrls:['./member.component.css']
})
export class RoyalMember{

    memberheading:string="Members @Royal Riders Club";
    mrr:Member[]=[
        new Member("Rushali","Alone","rush@gmail.com",new Date(1995,5,13),1234567898,"Nagpur",'assets/images/photo.jpg'),
        new Member("Rushali","Alone","rush@gmail.com",new Date(1995,5,13),1234567898,"Nagpur",'assets/images/photo.jpg'),
        new Member("Rushali","Alone","rush@gmail.com",new Date(1995,5,13),1234567898,"Nagpur",'assets/images/photo.jpg'),
        new Member("Rushali","Alone","rush@gmail.com",new Date(1995,5,13),1234567898,"Nagpur",'assets/images/photo.jpg'),
        new Member("Rushali","Alone","rush@gmail.com",new Date(1995,5,13),1234567898,"Nagpur",'assets/images/photo.jpg'),
    ];
}