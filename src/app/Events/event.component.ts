import { Component } from "@angular/core";
import { Events } from "./events";

@Component({
    templateUrl:'./event.component.html',
    styleUrls:['./event.component.css']
})
export class RoyalEvent{
    eventHeading:string="Events @Royal Riders Club";
     err:Events[]=[
        new Events("Road Trip",new Date(2022,3,10),"Delhi","Pune","Narayan Prth, Pune",123456788),
        new Events("Road Trip",new Date(2022,3,10),"Delhi","Pune","Narayan Prth, Pune",123456788),
        new Events("Road Trip",new Date(2022,3,10),"Delhi","Pune","Narayan Prth, Pune",123456788),
        new Events("Road Trip",new Date(2022,3,10),"Delhi","Pune","Narayan Prth, Pune",123456788),
        new Events("Road Trip",new Date(2022,3,10),"Delhi","Pune","Narayan Prth, Pune",123456788),
        new Events("Road Trip",new Date(2022,3,10),"Delhi","Pune","Narayan Prth, Pune",123456788),
     ];
}